import { FC, HTMLProps } from 'react';

export const Input: FC<HTMLProps<HTMLInputElement>> = ({ className, ...props }) => (
  <input
    {...props}
    className={`${
      className || ''
    } isAnimated px-6 py-4 rounded-[2rem] outline-none border-[4px] border-transparent focus:border-sky-400`}
  />
);
