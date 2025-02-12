// Là où on va sélectionner une adresse où le match aura lieu
import { createSignal } from "solid-js";

export default function Place() {
  const [place, setPlace] = createSignal('');
  return (
    <input value={place()} onInput={(e) => setPlace(e.target.value)} />
  );
}
