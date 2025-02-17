import { createSignal } from "solid-js";

export default function NumberOfPlayers() {
    const [nbPlayer, setNbPlayer] = createSignal(0);
    const [neededPlayer, setNeededPlayer] = createSignal(0);
    return (
        <div>
            <input value={nbPlayer()} onInput={(e) => setNbPlayer(e.target.value)} /> 
            <p>over</p> 
            <input value={neededPlayer()} onInput={(e) => setNeededPlayer(e.target.value)} />
        </div>
        
    );
  }