// Este componente es el footer de la aplicación es reutilizable, que se muestra en la parte inferior de todas las páginas.
 //  Contiene un mensaje de derechos de autor y está diseñado para ser simple y discreto, complementando el diseño general de la aplicación sin distraer al usuario.
 //  El footer tiene un fondo azul, texto blanco y una línea divisoria para separar visualmente el contenido del footer del resto de la página.


function Footer() {
  return (
    <footer className=" color-blue py-4 pt-4 flex items-center justify-center px-4 w-full h-32">
      <div className="border-t border-gray-400 w-full h-20 mt-10">
      <p className="text-center text-white text-xs sm:text-sm font-normal opacity-40 mt-8">© 2026 Pill Reminder. all rights reserved</p>
      </div>
    </footer>
    
  );
}

export default Footer;