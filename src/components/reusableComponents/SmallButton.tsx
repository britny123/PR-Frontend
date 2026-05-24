//Este componente es un botón pequeño reutilizable que se puede usar en diferentes partes de la aplicación.
//  Recibe dos props: "text" para el texto que se mostrará en el botón y 
// "onClick" para la función que se ejecutará cuando se haga clic en el botón.
//  El botón tiene estilos predefinidos para su apariencia y comportamiento al interactuar con él.
interface SmallButtonProps {
  text: string;
  onClick?: () => void;
};

export default function SmallButton({text ,onClick,}: SmallButtonProps) {
  return (
    <button
      onClick={onClick}
      className=" w-32 h-5 items-center justify-center flex rounded-full paragraph border border-blue text-blue font-semibold transition-all duration-200 hover:-translate-y-1 cursor-pointer">
      {text}
    </button>
  );
}