import { useNavigate } from 'react-router-dom';

export  default function StartSection () {
    const navigate = useNavigate();
  return (
    <section className="py-8 lg:py-12 w-full lg:flex-1">
      <div className="container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-lg">
          <p className="paragraph inline-block px-8 py-2 text-xs lg:text-sm font-medium text-white color-blue rounded-full mb-1">
            Your health, our priority
          </p>

          <h1 className="text-4xl sm:text-4xl lg:text-5xl font-extrabold text-blue leading-tight">
            Organize your medication in a better way
          </h1>

          <p className="paragraph mt-4 text-base lg:text-lg text-gray-600">
            Reminders, doses, and schedules all in one place. Take care of your health every day.
          </p>

          <div className="title flex flex-col sm:flex-row gap-3 mt-6">
            <button onClick={() => navigate('/register')} className="color-blue  text-white font-semibold py-3 px-20 rounded-full w-full h-12 sm:w-auto cursor-pointer ">
              Start now
            </button>
            <button onClick={() => navigate('/about')} className="title bg-white border border-color-blue text-blue hover:text-white font-semibold py-3 px-20 rounded-full w-full sm:w-auto cursor-pointer ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
