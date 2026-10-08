import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Discover.module.css";

export default function DiscoverInfoCard({ href, image, alt, title }: {
  href: string;
  image: string;
  alt: string;
  title: string;
}) {
  return (
    <Link href={href} className={styles.card}>
      <div className={styles.media}>
        <Image src={image} alt={alt} fill unoptimized sizes="(max-width: 760px) calc(100vw - 32px), 380px" />
      </div>
      <div className={styles.cardFooter}>
        <div><h3>{title}</h3><span>İnceleyin</span></div>
        <ArrowUpRight aria-hidden="true" />
      </div>
    </Link>
  );
}
