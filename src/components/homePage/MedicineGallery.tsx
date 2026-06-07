import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import MedicineCard from "./MedicineCard";
import "swiper/css";

interface MedicineCarouselProps {
  medicines: any[];
}

function MedicineCarousel({ medicines }: MedicineCarouselProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

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
