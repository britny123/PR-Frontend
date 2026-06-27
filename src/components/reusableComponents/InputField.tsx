 //Este componente es un campo de entrada reutilizable que se puede usar en diferentes partes de la aplicación.
 //Recibe varias props para personalizar su comportamiento y apariencia, como "placeholder" para el texto de sugerencia, "type" para el tipo de entrada (por ejemplo, texto, contraseña),
 // "value" para el valor actual del campo y "onChange" para manejar los cambios en el campo.
 // El campo de entrada tiene estilos predefinidos para su apariencia, incluyendo un borde azul, esquinas redondeadas
 // y una opacidad reducida para darle un aspecto moderno y limpio.
import React from "react";

type InputFieldProps = {
  placeholder: string;
  type: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ placeholder, type,  value, onChange,}: InputFieldProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-10 px-4 rounded-full border border-blue paragraph cursor-text text-gray opacity-60"/>
  );
}
