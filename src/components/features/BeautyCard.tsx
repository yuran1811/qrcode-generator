import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { linearGradients } from "@/utils/theme";

interface BeautyCardProps {
  resultContainer: HTMLDivElement;
}

const BeautyCard: FC<BeautyCardProps> = ({ resultContainer }) => {
  const [theme, setTheme] = useState("");
  const [isOpen, setOpen] = useState(false);
  const [isReady, setReady] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setReady(true);

    const qrcodeImg = resultContainer && resultContainer.querySelector("img");
    if (!qrcodeImg || !canvasRef.current) return;

    canvasRef.current.width = 400;
    canvasRef.current.height = 460;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const grd = ctx.createLinearGradient(0, 0, 400, 460);
    const colors = theme || linearGradients[0].join("-");
    colors.split("-").forEach((color, idx) => grd.addColorStop(idx, color));

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 400, 460);

    ctx.fillStyle = "white";
    ctx.fillRect(25, 85, 350, 350);
    ctx.drawImage(qrcodeImg, 50, 110, 300, 300);

    ctx.font = "bold 32px Source Sans Pro";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("QRCode Generator", 200, 50);
  });

  return !isReady ? (
    <div />
  ) : !isOpen ? (
    <div
      className="mx-auto mt-3 w-max cursor-pointer rounded-2xl bg-sky-800 px-4 py-2 text-center font-bold text-sky-300 brightness-75 transition-all duration-300 hover:brightness-100"
      onClick={() => setOpen(true)}
    >
      Generate beautiful card
    </div>
  ) : (
    createPortal(
      <div className="fullscreen flexcentercol z-50">
        <div
          className="fullscreen z-[-1] cursor-pointer bg-slate-900 opacity-80"
          onClick={() => setOpen(false)}
        />

        <canvas ref={canvasRef} className="z-1" />
        <div className="flexcenter mt-6 gap-6">
          {linearGradients.map((color) => (
            <div
              key={color.join("-")}
              className={`relative size-16 cursor-pointer rounded-[50%] after:invisible after:absolute after:inset-2 after:z-[-1] after:animate-ping after:rounded-full after:bg-sky-300 after:content-[''] ${theme === color.join("-") ? "after:visible" : ""}`}
              style={{
                background: `linear-gradient(135deg, ${color.join(",")})`,
              }}
              onClick={() => setTheme(color.join("-"))}
            />
          ))}
        </div>
      </div>,
      document.getElementById("modal-container") as HTMLElement,
    )
  );
};

export default BeautyCard;
