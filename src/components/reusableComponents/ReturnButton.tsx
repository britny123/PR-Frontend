//Este componente es un botón con un icono  que se puede usar en diferentes partes de la aplicación.
//  Recibe dos props: "text" para el texto que se mostrará en el botón y 
// "onClick" para la función que se ejecutará cuando se haga clic en el botón.
//  El botón tiene estilos predefinidos para su apariencia y comportamiento al interactuar con él.

interface ButtonLargeProps {
  text?: string;
  onClick?: () => void;
}

export default function ButtonLarge({onClick, text='<'}: ButtonLargeProps) {

  return (
    <button onClick={onClick} className="border border-gray-300 p-2 md:p-4 rounded-r-lg text-gray-300 cursor-pointer">{text}</button>
  );
}