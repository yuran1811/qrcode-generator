import { linearGradients } from '@/utils/theme';
import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface BeautyCardProps {
  resultContainer: HTMLDivElement;
}

const BeautyCard: FC<BeautyCardProps> = ({ resultContainer }) => {
  const [theme, setTheme] = useState('');
  const [isOpen, setOpen] = useState(false);
  const [isReady, setReady] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setReady(true);

    const qrcodeImg = resultContainer && resultContainer.querySelector('img');
    if (!qrcodeImg || !canvasRef.current) return;

    canvasRef.current.width = 400;
    canvasRef.current.height = 460;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const grd = ctx.createLinearGradient(0, 0, 400, 460);
    const colors = theme || linearGradients[0].join('-');
    colors.split('-').forEach((color, idx) => grd.addColorStop(idx, color));

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 400, 460);

    ctx.fillStyle = 'white';
    ctx.fillRect(25, 85, 350, 350);
    ctx.drawImage(qrcodeImg, 50, 110, 300, 300);

    ctx.font = '30px Source Sans Pro';
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.fillText('QRCode Generator', 200, 50);
  });

  return !isReady ? (
    <div />
  ) : !isOpen ? (
    <div
      className="cursor-pointer p-6 m-4 mt-12 bg-sky-800 font-bold text-sky-300 text-center rounded-[2rem]"
      onClick={() => setOpen(true)}
    >
      Beautiful Card Image
    </div>
  ) : (
    createPortal(
      <div className="z-[100] fullscreen flexcentercol">
        <div
          className="cursor-pointer z-[-1] fullscreen bg-slate-900 opacity-80"
          onClick={() => setOpen(false)}
        />
        <canvas ref={canvasRef} className="z-1" />
        <div className="flexcenter mt-6">
          {linearGradients.map((color) => (
            <div
              key={color.join('-')}
              className="cursor-pointer w-[5rem] h-[5rem] rounded-[50%] m-4"
              style={{
                background: `linear-gradient(135deg, ${color.join(',')})`,
              }}
              onClick={() => setTheme(color.join('-'))}
            />
          ))}
        </div>
      </div>,
      document.getElementById('modal-container') as HTMLElement
    )
  );
};

export default BeautyCard;
