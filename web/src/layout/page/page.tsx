import type { ReactNode } from "react";

import { Footer, Header } from "@/components";

type PageProps = {
  children: ReactNode;
};

export const Page = ({ children }: PageProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
