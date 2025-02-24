import { createSignal } from "solid-js";

type Props = {
  countName: string;
  totalName: string;
};

export default function NumberOfPlayers(props: Props) {
  return (
    <div>
      <input
        name={props.countName}
        type="number"
        class="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sky-300"
      />
      <p class="text-sky-300">over</p>
      <input
        name={props.totalName}
        type="number"
        class="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sky-300"
      />
    </div>
  );
}
