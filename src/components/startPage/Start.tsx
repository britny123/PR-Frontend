import Header from "../reusableComponents/Header";
import StartSection from './StartSection';
import StartImage from './StartImage';


export default function Start() {
  return (
   <div className="min-h-screen flex flex-col overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col lg:flex-row">
        <StartSection />
        <StartImage />
      </main>
      {/*<Footer />*/}
    </div>
  );
}

