import { A, createAsyncStore } from "@solidjs/router";
import { For } from "solid-js";
import Counter from "~/components/Counter";
import List from "~/components/NumberOfPlayers";
import { getMatches, joinMatchAction } from "~/lib/match";
import moment from "moment";
import Layout from "~/components/Layout";

export default function Football() {
  const matches = createAsyncStore(() => getMatches());
  const availableMatches = () =>
    matches()?.filter((match) => match.registeredPlayer < match.neededPlayer);

  return (
    <Layout protected>
      <main class="text-center mx-auto text-gray-700 p-4">
        <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
          THEY WANT YOU
        </h1>

        {availableMatches()?.length === 0 && (
          <p class="text-gray-500 text-xl mt-8">
            Aucun match disponible pour le moment
          </p>
        )}

        <ul class="list-none p-0">
          <For each={availableMatches()}>
            {(match) => (
              <li class="flex justify-between items-center p-3 my-2 border rounded-lg bg-white shadow-sm">
                <div class="text-sky-700 text-left">
                  <span class="font-bold">
                    {moment(match.date).format("LLLL")}
                  </span>{" "}
                  -<span class="font-bold">{match.place}</span> -
                  <span class="italic">Niveau : {match.level}</span> -
                  <span class="text-orange-500">
                    {match.registeredPlayer}/{match.neededPlayer} players
                  </span>
                </div>
                <form method="post" action={joinMatchAction.with(match.id)}>
                  <button
                    type="submit"
                    class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                  >
                    I'm in!
                  </button>
                </form>
              </li>
            )}
          </For>
        </ul>
      </main>
    </Layout>
  );
}
