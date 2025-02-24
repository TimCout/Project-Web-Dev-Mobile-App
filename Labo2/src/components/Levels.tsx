import { createSignal } from "solid-js";
import { StringValidation } from "zod";

type LevelsProps = {
  name: string;
};

export default function Levels(props: LevelsProps) {
  const [selectedLevel, setSelectedLevel] = createSignal("");

  const levels = ["Chill", "Fun", "TryHard"];

  return (
    <ul class="flex gap-2 justify-center">
      {levels.map((level) => (
        <li>
          <button
            class={`px-4 py-2 rounded ${
              selectedLevel() === level
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={(event) => {
              event.preventDefault();
              setSelectedLevel(level);
            }}
          >
            {level}
          </button>
        </li>
      ))}
      <input name={props.name} value={selectedLevel()} type="hidden" />
    </ul>
  );
}
