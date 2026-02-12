// components/TierCard.tsx
import Link from "next/link";
import styles from "./TierCard.module.css";
import { Tier } from "@/types/tier";

export default function TierCard({ tier }: { tier: Tier }) {
  return (
    <Link href={`/tier/${tier.id}`} className={styles.card}>
      <h2>{tier.title}</h2>
      <p>{tier.description}</p>
    </Link>
  );
}
