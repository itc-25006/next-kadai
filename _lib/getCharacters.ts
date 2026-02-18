import { client } from "./microcms";
import { Character } from "@/types/character";

/* 一覧取得 */
export const getCharacters = async (): Promise<Character[]> => {
  try {
    const data = await client.get({
      endpoint: "characters",
      queries: { limit: 100 },
      customRequestInit: {
        cache: "no-store",
      },
    });

    return data.contents;
  } catch (error) {
    console.error("取得エラー:", error);
    return [];
  }
};

/* 詳細取得 */
export const getCharacter = async (id: string): Promise<Character | null> => {
  try {
    const data = await client.get({
      endpoint: "characters",
      contentId: id,
      customRequestInit: {
        cache: "no-store",
      },
    });

    return data;
  } catch (error) {
    console.error("取得エラー:", error);
    return null;
  }
};
