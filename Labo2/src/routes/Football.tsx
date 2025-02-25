import { A, createAsyncStore } from "@solidjs/router";
import { For } from "solid-js";
import Counter from "~/components/Counter";
import List from "~/components/NumberOfPlayers";
import { getMatches } from "~/lib/match";

export default function Football() {
  const matches = createAsyncStore(() => getMatches())
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">THEY WANT YOU</h1>
      <For each={matches()}>
        {match => <li class="text-sky-300">{match.registeredPlayer} players over {match.neededPlayer} - {match.place} - {match.level} </li>}
      </For>
    </main>
  );
}
