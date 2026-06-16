import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import MedicineCard from "./MedicineCard";
import { useNavigate } from 'react-router-dom';
import "swiper/css";

interface MedicineCarouselProps {
  medicines: any[];
}

function MedicineCarousel({ medicines }: MedicineCarouselProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 w-full max-w-250 md:gap-4">
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="shrink-0 flex items-center justify-center w-8 h-10 text-3xl text-blue-900 hover:text-gray-400 transition-all duration-200 font-semibold md:w-12 md:h-12 md:text-4xl"
      >
        &#8249;
      </button>
      <div className="flex-1 min-w-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={12}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 14,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="w-full"
      >
        {medicines.map((medicine) => (
          <SwiperSlide key={medicine.id}>
            <MedicineCard medicine={medicine} />
          </SwiperSlide>
        ))}
        <SwiperSlide >
            <button onClick={() => navigate('/medicine-form')} className="w-full max-w-52 h-64 bg-white rounded-3xl flex flex-col items-center justify-center gap-2 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 color-blue rounded-full flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </div>
              <span className="text-blue text-sm">Add medicine</span>
            </button>
          </SwiperSlide>
      </Swiper>
      </div>
      <button
        onClick={() => swiperInstance?.slideNext()}
        className="shrink-0 flex items-center justify-center text-3xl w-8 h-10 text-blue-900 hover:text-gray-400 transition-all duration-200 font-semibold md:w-12 md:h-12 md:text-4xl"
      >
        &#8250;
      </button>
    </div>
  );
}

export default MedicineCarousel;
