import { A } from "@solidjs/router";
//import Counter from "~/components/Counter";
import List from "~/components/List";
import Calendar from "~/components/Calendar";
import Place from "~/components/Place"
import Levels from "~/components/Levels"

export default function createMatch() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">Create your match</h1>
      <h2>When ?</h2>
      <Calendar />
      <h2>Where ?</h2>
      <Place />
      <h2>Level</h2>
      <Levels />
      <h2>Number of Players ?</h2>
      <List />


      <p class="my-4">
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
        {" - "}
        <span>About Page</span>
      </p>
    </main>
  );
}