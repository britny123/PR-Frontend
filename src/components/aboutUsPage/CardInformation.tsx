interface CardInformationProps {
  title: string;
  logo: string;
}


export function CardInformation({ title, logo }: CardInformationProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center w-60 h-auto shrink-0">
      <h2 className="text-xl font-bold text-blue text-center mb-4">{title}</h2>
      <img
        src={logo}
        alt={title}
        className="w-28 h-28 object-contain contrast-125 saturate-150"
      />
    </div>
  );
}