// Là où on va sélectionner une adresse où le match aura lieu
import { createSignal } from "solid-js";

export default function Place() {
  const [place, setPlace] = createSignal('');
  return (
    <input class="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sky-300" value={place()} onInput={(e) => setPlace(e.target.value)} />
  );
}
