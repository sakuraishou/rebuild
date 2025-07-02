import { headers } from "next/headers";
import isMobile from "is-mobile";

export const checkIsMobile = (): boolean => {
  const userAgent = headers().get("user-agent");
  if (!userAgent) {
    return false;
  }
  return isMobile({ ua: userAgent });
};
