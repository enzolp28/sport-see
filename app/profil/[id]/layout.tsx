import type { ReactNode } from "react";

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ id: "12" }, { id: "18" }];
}

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
