// Este componente es un contenedor para organizar los campos de entrada en una fila dentro del formulario de información del usuario.
//  Recibe un prop "children" que representa los elementos hijos que se colocarán dentro de la fila.
//  El contenedor utiliza flexbox para distribuir los elementos hijos con un espacio entre ellos, asegurando que se vean organizados y alineados correctamente en la interfaz de usuario.


import { type ReactNode }from "react";

type FormRowProps = {
  children: ReactNode;
};

export default function FormRow({children,}: FormRowProps) {
  return (
    <div className="flex gap-3 w-full">
      {children}
    </div>
  );
}