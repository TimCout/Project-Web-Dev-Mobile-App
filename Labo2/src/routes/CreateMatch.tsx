import { A } from "@solidjs/router";
//import Counter from "~/components/Counter";
import NumberOfPlayers from "~/components/NumberOfPlayers";
import Calendar from "~/components/Calendar";
//import Place from "~/components/Place";
import Levels from "~/components/Levels";
import { addMatchAction } from "~/lib/match";
import { input } from "vinxi/dist/types/lib/plugins/config";

export default function createMatch() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <form method="post" action={addMatchAction}>
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          Create your match
        </h1>
        <h2 class="text-sky-300">When ?</h2>
        <Calendar name="date" />
        <h2 class="text-sky-300">Where ?</h2>
        <Places name="place" />
        <h2 class="text-sky-300">Level</h2>
        <Levels name="levels"/>
        <h2 class="text-sky-300">Number of Players ?</h2>
        <NumberOfPlayers countName="registeredPlayer" totalName="neededPlayer" />

        {/* Bouton Create Match */}
        <button
          type="submit"
          class="mt-8 px-6 py-3 bg-sky-500 text-white text-lg font-semibold rounded-lg border-2 border-sky-600 shadow-md hover:bg-sky-600 transition-all duration-300"
        >
          Create Match
        </button>
      </form>

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

function Places(props: { name: string}) {
  return (
    <input name={props.name} class="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sky-300" />
  )
}


