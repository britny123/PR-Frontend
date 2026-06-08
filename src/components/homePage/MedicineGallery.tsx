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
    <div className="flex items-center gap-4 w-250">
      <button
        onClick={() => swiperInstance?.slidePrev()}
        className="shrink-0 flex items-center justify-center w-12 h-12  text-gray-400 hover:text-white hover:color-blue transition-all duration-200 text-2xl font-semibold"
      >
        &#8249;
      </button>
      <div className="flex-1 min-w-0">
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        className="w-full"
      >
        {medicines.map((medicine) => (
          <SwiperSlide key={medicine.id}>
            <MedicineCard medicine={medicine} />
          </SwiperSlide>
        ))}
        <SwiperSlide >
            <button onClick={() => navigate('/medicine-form')} className="w-52 min-h-80 bg-white rounded-3xl flex flex-col items-center justify-center gap-2 hover:shadow-xl transition-shadow">
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
        className="shrink-0 flex items-center justify-center w-12 h-12  text-gray-400 hover:text-white hover:color-blue transition-all duration-200 text-2xl font-semibold"
      >
        &#8250;
      </button>
    </div>
  );
}

export default MedicineCarousel;
