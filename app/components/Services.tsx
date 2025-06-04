import SecHeading from "./common/SecHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Stats from "./Stats";
import { services } from "./common/allServices";
import { Link } from "react-router";

type Props = {};

const Services = () => {
  return (
    <section className="px-7 py-24 pb-48 flex flex-col items-start gap-8">
      {/* <Stats /> */}
      <SecHeading
        subhead={"our services"}
        mainhead={"We Offer Eco & Agriculture Services"}
        subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
        mainStyle={""}
        divStyle="items-start"
      />

      <div className="allServices grid grod-cols-1 w-full">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          className="mySwiper  imagesContainer w-full md:w-full "
        >
          {services.slice(0, 3).map((service) => (
            <SwiperSlide>
              <Link
                to={`/services/${service.title
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
                key={service.title}
              >
                <div className="servicecard max-w-[600px] bg-[var(--main-green)] p-6 rounded-2xl flex flex-col items-start gap-3 mx-auto w-full">
                  <div className="imageBox rounded-2xl overflow-hidden mb-2">
                    <img
                      src={service.pic}
                      alt="agro-ally"
                      className="w-full rounded-2xl aspect-[17/12] md:aspect-[13/8] object-cover object-center hover:scale-110 ease-in duration-300"
                    />
                  </div>
                  <p className="border border-chart-4 text-chart-4 px-2 py-1 rounded-4xl text-[.9rem] capitalize">
                    {service.tag}
                  </p>
                  <p className="text-white text-[1.4rem] capitalize font-[700]">
                    {service.title}
                  </p>
                  <hr className="w-full" />
                  <p className="text-stone-200 text-[.9rem]">
                    {service.desc[0].chooseUs.p1.slice(0, 70)}...
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        to={"/services"}
        className="bg-chart-4 px-7 py-4 uppercase font-[600]"
      >
        all services
      </Link>
    </section>
  );
};

export default Services;
