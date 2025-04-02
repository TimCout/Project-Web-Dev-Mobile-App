import { JSXElement } from "solid-js";
import { Dynamic } from "solid-js/web";

export function WhiteBox(props: { component?: string; class?: string; children: JSXElement }) {
  return (
    <Dynamic
      component={props.component || "div"}
      class={`max-w-md mx-auto bg-white p-8 rounded-lg shadow-md ${props.class}`}
    >
      {props.children}
    </Dynamic>
  );
}
