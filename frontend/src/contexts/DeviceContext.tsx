"use client";

import { createContext, useContext, ReactNode } from "react";

// Contextに保存するデータの型を定義します
type DeviceContextType = {
  isMobile: boolean;
};

// Contextを作成します
const DeviceContext = createContext<DeviceContextType>({ isMobile: false });

// アプリ全体にisMobileの値を提供する部品（Provider）です
export const DeviceProvider = ({
  children,
  isMobile,
}: {
  children: ReactNode;
  isMobile: boolean;
}) => {
  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
};

// どのコンポーネントからでもisMobileの値を取り出せる蛇口（カスタムフック）です
export const useDevice = () => useContext(DeviceContext);
