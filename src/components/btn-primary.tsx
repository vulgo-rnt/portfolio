import { blinker } from "@/styles/fonts";
import { ButtonHTMLAttributes } from "react";

export default function BtnPrimary(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      className={`text-color_btn dark:text-color_btn_dark bg-tertiary border-light_tertiary dark:bg-btn_dark dark:border-light_btn_dark hover:bg-tertiary/80 dark:hover:bg-btn_dark/50 px-3 py-[6px] border-solid border-[1px] flex items-center gap-2 transition-all duration-700 ease-out rounded-xl ${blinker.className} ${props.className}`}
    >
      {props.children}
    </button>
  );
}
