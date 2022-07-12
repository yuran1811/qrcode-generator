import QRCode from '@/libs/qrcodejs/qrcode';
import { Input } from '@cpns/shared';
import { FormEvent, useEffect, useRef, useState } from 'react';
import BeautyCard from './BeautyCard';

let qrcode: any;

export const Generator = () => {
  const [isGene, setGene] = useState(false);
  const [linkValue, setLinkValue] = useState('');

  const resultRef = useRef<HTMLDivElement>(null);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setLinkValue(value);

    if (value) {
      qrcode && qrcode?.makeCode && qrcode.makeCode(value);
      setGene(true);
      return;
    }

    const qrcodeImg = resultRef.current && resultRef.current.querySelector('img');
    if (qrcodeImg) {
      setGene(false);
      qrcodeImg.src = '';
    }
  };

  useEffect(() => {
    // @ts-ignore-next-line
    qrcode = new QRCode('qrcode-result', { width: 300, height: 300, useSVG: true });
  }, []);

  return (
    <div className="w-full p-6">
      <div className="flexcentercol">
        <Input className="text-white bg-slate-700" value={linkValue} onChange={handleInput} />

        <div
          ref={resultRef}
          id="qrcode-result"
          className={`${isGene ? 'block' : 'hidden'} p-6 m-4 bg-white`}
        />
      </div>

      {!!resultRef.current && (
        <div className="flexcentercol">
          <BeautyCard resultContainer={resultRef.current} />
        </div>
      )}
    </div>
  );
};
