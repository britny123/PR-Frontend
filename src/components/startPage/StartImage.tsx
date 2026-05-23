import celular from "../../assets/imgs/celular.jpg";
export  default function StartImage () {
  return (
    <div className="relative flex-1 flex items-center justify-end overflow-visible pr-20">
      <div className="hero-circle" />
      <img src={celular} alt="Celular y pastillas" className="relative z-10 w-72 md:w-96" />
    </div>
  );
}

