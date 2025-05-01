import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

interface CarouselProps {
  sliderPerView?: number;
  spaceBetween?: number;
  loop?: boolean;
  children: any;
  sectionName: string;
  effect?: string;
  delay?: number;
  navigation?: boolean;
}
interface CarouselStyles {
  [key: string]: string | number;
}

export const Carousel = ({
  sliderPerView,
  spaceBetween,
  loop,
  children,
  sectionName,
  effect,
  navigation,
}: CarouselProps) => {
  const sectionAutoPlayConfig = {
    delay: 2500,
    disableOnInteraction: false,
  };
  const videoAutoPlayConfig = {
    delay: 3500,
    disableOnInteraction: false,
  };

  let moduleConfig: Array<any> = [];

  let autoPlayConfig: { delay?: number; disableOnInteraction?: boolean } = {};

  switch (sectionName) {
    case "blogs":
      autoPlayConfig = sectionAutoPlayConfig;
      moduleConfig = [Autoplay];
      break;
    case "companies":
      moduleConfig = [Pagination];
      break;
    case "videoTestimonial":
      autoPlayConfig = videoAutoPlayConfig;
      moduleConfig = [Pagination, Navigation, Autoplay];
      break;
    case "imageSlider":
      autoPlayConfig = sectionAutoPlayConfig;
      moduleConfig = [Autoplay, Navigation, EffectFade];
      break;
    case "testimonial":
    case "clientLogo":
    case "investors":
    case "globalInvestors":
      autoPlayConfig = sectionAutoPlayConfig;
      moduleConfig = [Autoplay];
      break;
    default:
      break;
  }

  // style for pagination

  const styles: CarouselStyles = {
    "--swiper-pagination-color": "green",
    "--swiper-navigation-color": "#FFF",
    "--swiper-pagination-bullet-inactive-color": "white",
    "--swiper-pagination-bullet-inactive-opacity": "1",
  };

  return (
    <Swiper
      style={styles}
      pagination={{ clickable: true }}
      navigation={navigation}
      slidesPerView={sliderPerView}
      spaceBetween={spaceBetween}
      autoplay={autoPlayConfig}
      effect={effect}
      modules={moduleConfig}
      loop={loop}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
};
