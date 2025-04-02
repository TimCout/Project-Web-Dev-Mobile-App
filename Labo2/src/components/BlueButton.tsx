import { JSX, JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>

export function BlueButton(props: ButtonProps) {
  return (
    <button
      type="submit"
      class="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      {...props}
    >
      {props.children}
    </button>
  );
}