import { FC } from "react";

export const Header: FC = () => (
  <header className="flexcenter sticky top-0 left-0 z-50 border-b-2 border-slate-300 bg-slate-800 p-4">
    <a
      href="https://github.com/yuran1811/qrcode-generator"
      target="_blank"
      rel="noopener noreferrer"
      className="text-3xl font-bold"
    >
      QRCode Generator
    </a>
  </header>
);
