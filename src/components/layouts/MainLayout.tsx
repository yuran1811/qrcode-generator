import { FC, PropsWithChildren } from "react";

import { Footer, Header } from "./partials";

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className="fullsize scrollY relative bg-slate-800 text-lg text-white">
      <Header />
      <main className="min-h-[calc(100dvh-140px)]">{children}</main>
      <Footer />
    </div>
    <div id="modal-container"></div>
  </>
);

export default MainLayout;
