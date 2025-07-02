import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";

// ブランドの型を定義（TypeScript用）
type Brand = {
  id: number;
  name: string;
  slug: string;
};

export default async function HomePage() {
  // Directusから'brands'コレクションのデータを取得
  const brands = await directus.request(readItems("brands"));

  return <main>テスト</main>;
}
