import { getCharacter } from "@/_lib/getCharacters";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    id: string;
  };
};

export default async function CharacterDetail({ params }: Props) {
  const character = await getCharacter(params.id);

  if (!character) {
    return <p>データが見つかりません</p>;
  }

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{character.name}</h1>

        <Image
          src={character.image.url}
          alt={character.name}
          width={300}
          height={300}
          className={styles.image}
        />

        <p className={styles.tier}>ティア: {character.tier}</p>

        <p className={styles.description}>{character.description}</p>

        <Link href="/" className={styles.backButton}>
          一覧へ戻る
        </Link>
      </div>
    </main>
  );
}
