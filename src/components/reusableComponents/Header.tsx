// Este componente es el header de la aplicación, que se muestra en la parte superior de todas las páginas.
//  Contiene el logo de la aplicación y está diseñado para ser simple y limpio, proporcionando
//  una identidad visual consistente en toda la aplicación. El header tiene un fondo blanco
//  y un espacio adecuado alrededor del logo para asegurar que se destaque sin ser abrumador.


import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="pl-10 mt-5 pb-4 ">
      <img src={logo} alt="Pill Reminder" className="logo h-13 w-auto " />
    </header>
  );
}

export default Header;