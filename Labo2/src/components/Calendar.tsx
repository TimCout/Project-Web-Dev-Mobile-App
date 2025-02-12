// Affiche un calendrier pour sélectionner une date (Regarder ce qu'on avait fait pour code todo list Ibrahim)
import { createSignal } from "solid-js";

export default function Counter() {
  const [date, setDate] = createSignal("");
  return <input value={date()} onInput={(e) => setDate(e.target.value)} />;
}
