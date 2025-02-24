// Affiche un calendrier pour sélectionner une date (Regarder ce qu'on avait fait pour code todo list Ibrahim)
type CalendarProps = {
  name: string
  value?: string
}

export default function Calendar(props: CalendarProps) {
    return (
      <input
        name={props.name}
        type="datetime-local"
        value={props.value}
        onClick={(e) => e.currentTarget.showPicker?.()}  // Force l'affichage du calendrier
        class="px-4 py-2 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-sky-300"
      />
    );
  }
