import SecHeading from "./common/SecHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Stats from "./Stats";

const services = [
  {
    tag: "agricultural consulting",
    title: "agricultural consulting",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128480/agro-ally/pcb5yTRmmPb3AD4e14mWz1oMukM_gaygbi.avif",
    desc: "commitment to organic chemical free produce from the farm",
    refLink: "#",
  },
  {
    tag: "agricultural consulting",
    title: "agricultural consulting",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128480/agro-ally/pcb5yTRmmPb3AD4e14mWz1oMukM_gaygbi.avif",
    desc: "commitment to organic chemical free produce from the farm",
    refLink: "#",
  },
  {
    tag: "agricultural consulting",
    title: "agricultural consulting",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748128480/agro-ally/pcb5yTRmmPb3AD4e14mWz1oMukM_gaygbi.avif",
    desc: "commitment to organic chemical free produce from the farm",
    refLink: "#",
  },
];

type Props = {};

const Services = () => {
  return (
    <section className="px-7 py-24 pb-48 flex flex-col items-start gap-8">
      {/* <Stats /> */}
      <SecHeading
        subhead={"our services"}
        mainhead={"We Offers Eco & Agriculture Services"}
        subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
        mainStyle={""}
        divStyle="items-start"
      />

      <div className="allServices grid grod-cols-1 gap-y-8">
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
          className="mySwiper  imagesContainer w-full md:w- "
        >
          {services.map((service) => (
            <SwiperSlide>
              <div
                key={service.title}
                className="servicecard max-w-[600px] bg-[var(--main-green)] p-6 rounded-2xl flex flex-col items-start gap-3 mx-auto w-full"
              >
                <div className="imageBox rounded-2xl overflow-hidden mb-2">
                  <img
                    src={service.pic}
                    alt="agro-ally"
                    className="w-full rounded-2xl aspect-[17/8] md:aspect-[13/8] object-cover object-center hover:scale-110 ease-in duration-300"
                  />
                </div>
                <p className="border border-chart-4 text-chart-4 px-2 py-1 rounded-4xl text-[.9rem] capitalize">
                  {service.tag}
                </p>
                <p className="text-white text-[1.4rem] capitalize font-[700]">
                  {service.title}
                </p>
                <hr className="w-full" />
                <p className="text-stone-200 text-[.9rem]">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
