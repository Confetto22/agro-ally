import SecHeading from "../common/SecHeading";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    name: "Terens Smith",
    role: "Farmer",
    desc: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif",
  },
  {
    id: 2,
    name: "Terens Smith",
    role: "Farmer",
    desc: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif",
  },
  {
    id: 3,
    name: "Terens Smith",
    role: "Farmer",
    desc: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif",
  },
  {
    id: 4,
    name: "Terens Smith",
    role: "Farmer",
    desc: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif",
  },
  {
    id: 5,
    name: "Terens Smith",
    role: "Farmer",
    desc: "Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    pic: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif",
  },
];

const Testimonials = () => {
  return (
    <section className="pt-8 px-9 bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748962045/agro-ally/review_bg_1_sr6kig.png')] bg-cover bg-center min-h-[60vh] flex flex-col items-center justify-center gap-2">
      <SecHeading
        subhead={"Our Testimonials"}
        mainhead={"What They Say About Us"}
        subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
        mainStyle={"md:text-[2.8rem] text-[2.1rem] capitalize font-[800]"}
        divStyle={"items-start justify-center flex flex-col"}
      />

      <div className="all_testimonials  w-[100%] md:w-[90%] max-w-[1000px] gap-3">
        <Swiper
          // slidesPerView={3}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          className="mySwiper mt-8 w-full "
        >
          {testimonials.map((singleTestimonial) => {
            return (
              <SwiperSlide key={singleTestimonial.id} className=" ">
                <div className="testimonial   max-w-[900px] flex items-start gap-2">
                  <span className="text-chart-4 text-[3rem] ">
                    <BiSolidQuoteAltLeft className="" />
                  </span>
                  <div className="flex flex-col items-start gap-5">
                    <p className="italic font-[500]  md:leading-[2.3rem] text-[#6b6b6b] md:text-[1.3rem]">
                      {singleTestimonial.desc}
                    </p>
                    <div className="flex items-center gap-2">
                      <img
                        src={singleTestimonial.pic}
                        alt="agro ally"
                        className="w-[60px] h-[60px] rounded-full"
                      />
                      <div className="">
                        <p className="font-[600] text-[1.2rem]">
                          {singleTestimonial.name}
                        </p>
                        <p className="font-[300] text-[.9rem]">
                          {singleTestimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* <div className="allTestimonials">
        <Swiper
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper mt-8 w-full"
        >
          {allTestimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="py-8 px-3">
              <div className="testimonial  p-4 max-w-[900px] flex items-start gap-4">
                <span className="text-chart-4 text-[3rem]">
                  <BiSolidQuoteAltLeft className="" />
                </span>
                <div className="flex flex-col items-start gap-5">
                  <p className="italic font-[500] leading-[1.8rem] md:leading-[2.3rem] text-[#6b6b6b] md:text-[1.3rem]">
                    Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks
                    reasonable.Latin words, combined with a handful of model
                    sentence structures, to generate Lorem Ipsum which looks
                    reasonable.Latin words, combined with a handful of model
                    sentence structures, to generate Lorem Ipsum which looks
                    reasonable.
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif"
                      alt="agro ally"
                      className="w-[60px] h-[60px] rounded-full"
                    />
                    <div className="">
                      <p className="font-[600] text-[1.2rem]">Terens Smith</p>
                      <p className="font-[300] text-[.9rem]">Farmer</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}
    </section>
  );
};

export default Testimonials;
