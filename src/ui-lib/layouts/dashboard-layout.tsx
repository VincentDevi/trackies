import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  nav: ReactNode;
};
export function DashboardLayout({ children, nav }: Props) {
  return (
    <div className="flex h-screen w-screen">
      <nav className="h-screen w-[15%]">{nav}</nav>
      <main className="w-[85%]">{children}</main>
    </div>
  );
}
