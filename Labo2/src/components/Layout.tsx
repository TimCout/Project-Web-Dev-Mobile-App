import { createAsync } from "@solidjs/router";
import { JSXElement, Show } from "solid-js";
import { getUser } from "~/lib/user";
import Nav from "./Nav";

export default function Layout(props: {
  children: JSXElement;
  protected?: boolean;
}) {
  const user = createAsync(() => getUser());
  return (
    <>
      <Nav />
      <Show 
      when={!props.protected || user()} 
      fallback={
        <div class="flex items-center justify-center min-h-screen bg-black text-white p-6">
          <p class="text-xl text-center">
            You're not authorized to access this page. Please 
            <a href="/login" class="ml-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200">
              sign in
            </a>.
          </p>
        </div>
      }>
        {props.children}
      </Show>
    </>
  );
}
