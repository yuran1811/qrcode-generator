import { FC, PropsWithChildren } from 'react';
import { Footer, Header } from './partials';

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className="relative fullsize overflow-x-hidden text-[3rem] text-white bg-slate-800">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
    <div id="modal-container"></div>
  </>
);

export default MainLayout;
