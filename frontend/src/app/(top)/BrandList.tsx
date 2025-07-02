"use client"; // クライアントコンポーネントであることを宣言

import { useDevice } from "@/contexts/DeviceContext";

// page.tsxから渡されるデータの型を定義
type Brand = {
  id: number;
  name: string;
};
type Props = {
  brands: Brand[];
};

export const BrandList = ({ brands }: Props) => {
  const { isMobile } = useDevice(); // フックの使用はこちらで行う

  return (
    <>
      <ul>
        {brands.map((brand) => (
          <li key={brand.id}>{brand.name}</li>
        ))}
      </ul>

      {isMobile ? (
        <p className="mt-4 font-bold text-green-600">
          これは**モバイル**向けの表示です。
        </p>
      ) : (
        <p className="mt-4 font-bold text-blue-600">
          これは**PC**向けの表示です。
        </p>
      )}
    </>
  );
};
