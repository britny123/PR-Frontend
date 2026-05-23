import Header from "../reusableComponents/Header";
import FeaturesSection from "../aboutUsPage/FeatureSection";
import Footer from "../reusableComponents/Footer";
import { useNavigate } from 'react-router-dom';
import ReturnButton from "../reusableComponents/ReturnButton";

function About() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="md:mt-10">
        <ReturnButton onClick={() => navigate('/')} />
      </div>
      <section className="flex flex-col items-center px-4 sm:px-6 md:px-10 py-6 md:py-12">
        <h1 className="title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center text-blue">Learn more about us</h1>
        <p className="paragraph text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center text-blue max-w-4xl md:max-w-5xl lg:max-w-7xl">Pill Reminder not only offers modern technology and innovation, but also peace of mind and well-being for every user. Our platform is designed to help you keep track of your medications in a simple, secure, and organized way, improving your daily routine and taking care of your health at all times.</p>
      </section>
      <section className="flex justify-center w-full">
        <FeaturesSection />
      </section>
      <Footer />
    </div>
  );
}


export default About;