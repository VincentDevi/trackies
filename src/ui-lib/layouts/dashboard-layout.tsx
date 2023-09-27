import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  nav: ReactNode;
};
export function DashboardLayout({ children, nav }: Props) {
  return (
    <>
      <header></header>
      <nav>{nav}</nav>
      <main>{children}</main>
    </>
  );
}
