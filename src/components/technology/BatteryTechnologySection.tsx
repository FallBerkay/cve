"use client";

import { useEffect, useRef } from "react";

const FRAME_COUNT = 120;
const PRELOAD_RADIUS = 6;
const MAX_CACHED_FRAMES = 20;

const clamp = (value: number) => Math.min(1, Math.max(0, value));

const getFrameSource = (index: number) =>
  `/images/battery-sequence/frame_${String(index + 1).padStart(3, "0")}.png`;

export default function BatteryTechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!section || !stage || !canvas) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    const images = new Map<number, HTMLImageElement>();
    const loadingFrames = new Set<number>();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let requestedFrame = 0;
    let displayedFrame = -1;
    let animationFrame = 0;
    let mountFrame = 0;
    let restorationFrame = 0;
    let direction = 1;

    const resizeCanvas = () => {
      const rect = stage.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.round(rect.width * pixelRatio));
      const height = Math.max(1, Math.round(rect.height * pixelRatio));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const drawFrame = (index: number) => {
      const image = images.get(index);
      if (!image?.complete || image.naturalWidth === 0) return false;

      resizeCanvas();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const scale = Math.min(canvasWidth / image.naturalWidth, canvasHeight / image.naturalHeight);
      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;
      const x = (canvasWidth - drawWidth) / 2;
      const y = (canvasHeight - drawHeight) / 2;

      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(image, x, y, drawWidth, drawHeight);
      displayedFrame = index;
      canvas.dataset.frame = String(index + 1);
      stage.classList.add("is-ready");
      return true;
    };

    const trimCache = () => {
      if (images.size <= MAX_CACHED_FRAMES) return;

      const candidates = [...images.keys()]
        .filter((index) => index !== requestedFrame && index !== displayedFrame)
        .sort(
          (first, second) =>
            Math.abs(second - requestedFrame) - Math.abs(first - requestedFrame),
        );

      while (images.size > MAX_CACHED_FRAMES && candidates.length > 0) {
        const index = candidates.shift();
        if (index === undefined) break;
        const image = images.get(index);
        if (image) image.src = "";
        images.delete(index);
      }
    };

    const loadFrame = (index: number, drawWhenReady = false) => {
      if (index < 0 || index >= FRAME_COUNT || images.has(index) || loadingFrames.has(index)) return;

      loadingFrames.add(index);
      const image = new window.Image();
      image.decoding = "async";
      image.src = getFrameSource(index);
      image.onload = () => {
        loadingFrames.delete(index);
        images.set(index, image);
        if (drawWhenReady || index === requestedFrame) drawFrame(index);
        trimCache();
      };
      image.onerror = () => {
        loadingFrames.delete(index);
        console.warn(`Batarya animasyonu karesi yüklenemedi: ${getFrameSource(index)}`);
      };
    };

    const preloadNearbyFrames = (center: number) => {
      for (let distance = 1; distance <= PRELOAD_RADIUS; distance += 1) {
        loadFrame(center + distance * direction);
        loadFrame(center - distance * direction);
      }
    };

    const renderRequestedFrame = (index: number) => {
      const nextFrame = Math.max(0, Math.min(FRAME_COUNT - 1, index));
      direction = nextFrame >= requestedFrame ? 1 : -1;
      requestedFrame = nextFrame;

      if (!drawFrame(nextFrame)) loadFrame(nextFrame, true);
      preloadNearbyFrames(nextFrame);
    };

    const updateFromScroll = () => {
      animationFrame = 0;
      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = reducedMotion.matches ? 0 : clamp(-rect.top / scrollDistance);
      const nextFrame = Math.round(progress * (FRAME_COUNT - 1));

      section.style.setProperty("--battery-progress", progress.toFixed(4));
      section.dataset.frame = String(nextFrame + 1);
      renderRequestedFrame(nextFrame);
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(updateFromScroll);
    };

    const handleResize = () => {
      resizeCanvas();
      if (displayedFrame >= 0) drawFrame(displayedFrame);
      requestUpdate();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(stage);
    loadFrame(0, true);
    updateFromScroll();
    mountFrame = window.requestAnimationFrame(() => {
      updateFromScroll();
      restorationFrame = window.requestAnimationFrame(updateFromScroll);
    });

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", handleResize);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", handleResize);
      reducedMotion.removeEventListener("change", requestUpdate);
      resizeObserver.disconnect();
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
      if (mountFrame) window.cancelAnimationFrame(mountFrame);
      if (restorationFrame) window.cancelAnimationFrame(restorationFrame);
      images.forEach((image) => {
        image.src = "";
      });
      images.clear();
    };
  }, []);

  return (
    <section
      id="technology"
      ref={sectionRef}
      className="batteryTechnology"
      aria-labelledby="battery-technology-title"
    >
      <div className="batterySticky">
        <div className="batteryInner">
          <div className="batteryCopy">
            <p>CVE MOTOR / BATARYA SİSTEMİ</p>
            <h2 id="battery-technology-title">Kullandığımız Teknoloji</h2>
            <span>
              Günlük şehir içi kullanım için geliştirilen batarya sistemimiz; güvenli enerji aktarımı,
              uzun ömür ve dengeli performansı bir araya getirir.
            </span>
            <div className="batteryFeatures" aria-label="Batarya teknolojisi özellikleri">
              <div>
                <p>Dayanıklı metal gövde</p>
              </div>
              <div>
                <p>Katmanlı hücre mimarisi</p>
              </div>
              <div>
                <p>Dengeli güç yönetimi</p>
              </div>
            </div>
          </div>

          <div
            ref={stageRef}
            className="batteryStage"
            role="img"
            aria-label="Scroll ile açılan elektrikli motosiklet bataryası"
          >
            <canvas ref={canvasRef} className="batterySequence" data-frame="1" />
            <span className="batteryLoading" aria-hidden="true">
              Batarya hazırlanıyor
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
