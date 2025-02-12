import { FC, HTMLProps } from "react";

export const Input: FC<HTMLProps<HTMLInputElement>> = ({
  className,
  ...props
}) => (
  <input
    {...props}
    className={`${
      className || ""
    } isAnimated w-100 max-w-100 rounded-2xl border-2 border-transparent px-4 py-2 outline-hidden focus:border-sky-400`}
  />
);
