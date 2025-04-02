import { JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";

export function Card(props: { component?: string; class?: string; children: JSXElement }) {
  return (
    <Dynamic
      component={props.component || "div"}
      class={`flex justify-between items-center p-3 my-2 border rounded-lg bg-white shadow-sm ${props.class}`}
    >
      {props.children}
    </Dynamic>
  );
}
