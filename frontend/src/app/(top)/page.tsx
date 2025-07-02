import directus from "@/lib/directus";
import { readItems } from "@directus/sdk";
import { BrandList } from "./BrandList"; // これから作るクライアントコンポーネント

export default async function HomePage() {
  // サーバーサイドでデータを取得
  const brands = await directus.request(
    readItems("brands", { sort: ["sort"] })
  );

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">ブランド一覧です１２３４５</h1>

      {/* 取得したデータを、クライアントコンポーネントにpropsとして渡す */}
      <BrandList brands={brands} />
    </main>
  );
}
