import { A, createAsync, createAsyncStore } from "@solidjs/router";
import { For, Show } from "solid-js";
import Counter from "~/components/Counter";
import List from "~/components/NumberOfPlayers";
import {
  getMatches,
  hasJoined,
  joinMatchAction,
  leaveMatchAction,
} from "~/lib/match";
import moment from "moment";
import Layout from "~/components/Layout";
import { Card } from "~/components/Card";

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
            {(match) => {
              const joined = createAsync(() => hasJoined(match.id));
              return (
                <Card component="li">
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
                  <form
                    method="post"
                    action={
                      joined()
                        ? leaveMatchAction.with(match.id)
                        : joinMatchAction.with(match.id)
                    }
                  >
                    <button
                      type="submit"
                      classList={{
                        "bg-red-700": joined(),
                        "bg-sky-500 hover:bg-sky-600": !joined(),
                      }}
                      class="text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                      I'm {joined() ? "out" : "in"} !
                    </button>
                  </form>
                </Card>
              );
            }}
          </For>
        </ul>
      </main>
    </Layout>
  );
}
