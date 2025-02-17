import { createSignal } from "solid-js";

export default function NumberOfPlayers() {
    const [nbPlayer, setNbPlayer] = createSignal(0);
    const [neededPlayer, setNeededPlayer] = createSignal(0);
    return (
        <div>
            <input class="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sky-300" value={nbPlayer()} onInput={(e) => setNbPlayer(e.target.value)}  /> 
            <p class="text-sky-300">over</p> 
            <input class="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sky-300" value={neededPlayer()} onInput={(e) => setNeededPlayer(e.target.value)} />
        </div>
        
    );
  }