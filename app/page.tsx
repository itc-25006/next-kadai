import { getCharacters } from "@/_lib/getCharacters";
import { groupByTier } from "@/_lib/groupByTier";
import styles from "./page.module.css";
import Image from "next/image";

export default async function Home() {
  const characters = await getCharacters();
  const tiers = groupByTier(characters);

  const tierOrder = ["S", "A", "B", "C"];

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>トムとジェリー ティア表</h1>

      {tierOrder.map((tier) => {
        const chars = tiers[tier];
        if (!chars) return null;

        return (
          <div key={tier} className={styles.tierRow}>
            <div className={`${styles.tierLabel} ${styles[`tier${tier}`]}`}>
              {tier}
            </div>

            <div className={styles.characterGrid}>
              {chars.map((char) => (
                <div key={char.id} className={styles.card}>
                  <Image
                    src={char.image.url}
                    alt={char.name}
                    width={100}
                    height={100}
                    className={styles.image}
                  />
                  <p className={styles.name}>{char.name}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </main>
  );
}
