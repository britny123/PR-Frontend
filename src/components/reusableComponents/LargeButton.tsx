//Este componente es un botón grande reutilizable que se puede usar en diferentes partes de la aplicación.
//  Recibe dos props: "text" para el texto que se mostrará en el botón y 
// "onClick" para la función que se ejecutará cuando se haga clic en el botón.
//  El botón tiene estilos predefinidos para su apariencia y comportamiento al interactuar con él.

interface LargeButtonProps {
  text: string;
  onClick?: () => void;
}

export default function LargeButton({onClick, text}: LargeButtonProps) {

  return (
    <button
      onClick={onClick}
      className=" w-full h-12 rounded-full color-blue text-white font-semibold transition-all duration-200 hover:-translate-y-1 cursor-pointer">
      {text}
    </button>
  );
}