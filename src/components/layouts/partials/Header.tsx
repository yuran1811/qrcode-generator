import { FC } from 'react';

export const Header: FC = () => (
  <header className="z-[100] sticky top-0 left-0 w-full bg-slate-800 border-b-[2px] border-slate-300 p-4 flex flex-wrap items-center justify-start">
    <a
      href="https://github.com/yuran1811/qrcode-generator"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-center m-auto"
    >
      QRCode Generator
    </a>
  </header>
);
