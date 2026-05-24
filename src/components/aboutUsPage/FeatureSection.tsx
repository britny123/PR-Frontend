import { CardInformation } from "../aboutUsPage/CardInformation";
import Recordatorios from "../../assets/imgs/Recordatorios.png";
import Horarios from "../../assets/imgs/horarios.png";
import Bienestar from "../../assets/imgs/bienestar.png";

export default function FeatureSection() {

 const features = [
  { title: "Smart reminders available", logo: Recordatorios },
  { title: "Schedule management", logo: Horarios },
  { title: "Safety and well-being", logo: Bienestar },
];

  return (
    <section className="blue-section">
      <div className="relative z-5 flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-60 items-center md:items-start px-4">
        {features.map((feature, index) => (
          <CardInformation
            key={index}
            title={feature.title}
            logo={feature.logo}
          />
        ))}
      </div>
    </section>
  );
}
