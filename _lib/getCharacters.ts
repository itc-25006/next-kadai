import { client } from "./microcms";
import { Character } from "@/types/character";

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const data = await client.get({
      endpoint: "characters",
      queries: { limit: 100 }, // 件数制限の影響を避ける
      customRequestInit: {
        cache: "no-store", // キャッシュを無効化
      },
    });

    console.log("取得データ:", data);

    return data.contents;
  } catch (error) {
    console.error("取得エラー:", error);
    return [];
  }
};
