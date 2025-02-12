import { createSignal } from "solid-js";

export default function Levels() {
  const [selectedLevel, setSelectedLevel] = createSignal('');

  const levels = ["Chill", "Fun", "TryHard"];

  return (
    <ul class="flex gap-2 justify-center">
      {levels.map(level => (
        <li>
          <button
            class={`px-4 py-2 rounded ${
              selectedLevel() === level ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setSelectedLevel(level)}
          >
            {level}
          </button>
        </li>
      ))}
    </ul>
  );
}