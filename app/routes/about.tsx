import { Link } from "react-router";
import KnowUs from "~/components/aboutpage/KnowUs";
import OurValue from "~/components/aboutpage/OurValue";
import Testimonials from "~/components/aboutpage/Testimonials";
import SecHeading from "~/components/common/SecHeading";
import Stats from "~/components/Stats";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const faqValues = [
  {
    question: "What types of produce do you grow?",
    answer:
      "We grow a wide range of fresh produce, including fruits like strawberries and grapes, vegetables such as tomatoes, carrots, and leafy greens, as well as herbs and specialty crops like microgreens and gourmet vegetables.",
  },
  {
    question: "How can I purchase your products?",
    answer:
      "You can purchase our fresh produce through our online store, where we offer home delivery in refrigerated vehicles to ensure freshness. Additionally, we sell at local farmers' markets and offer pickup options at select locations.",
    // locationLink: "https://goo.gl/maps/123MysteryStAccra",
  },
  {
    question: "Do you offer farm tours?",
    answer:
      "Yes, we offer guided farm tours where you can learn about our sustainable farming practices and see how we grow our fresh produce. Tours are available by appointment.",
  },
  {
    question: "Do you use any chemicals or pesticides?",
    answer:
      "No, we prioritize organic farming and do not use harmful chemicals or pesticides. We rely on natural methods to grow our produce sustainably.",
  },
  //   {
  //     question: "how can i connect with the church?",
  //     answer:
  //       "We would love to connect with you! You can visit us in person, call us, or email us. You can also follow us on social media and sign up for our newsletter to stay updated on events and services.",
  //     phone: "+233(0) 244-496-968",
  //     phoneLink: "tel:+233244496968",
  //     email: "info@mysteryembassy.com",
  //     emailLink: "mailto:info@mysteryembassy.com",
  //   },
];

type Props = {};

const About = () => {
  return (
    <section className="pb-24">
      <div className="pageHead bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748947834/agro-ally/qQ7rFB5eVVBjturZ7t2PLrcFLI_h8xy5q.avif')] bg-center bg-cover">
        <div className="cover bg-gradient-to-r from-[#0e2207ce] to-[#0000008f]  min-h-[60vh] p-8 text-white flex flex-col justify-center">
          <h2 className="text-[2.5rem] md:text-[3.2rem] font-[700]">
            About Us
          </h2>
          <p className="font-[300] text-[1.1rem]">
            Best Awards Winning Organic Farming
          </p>
        </div>
      </div>
      <div className="intro px-9 py-24  flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-[2rem]">
        <div className="intro_text font-[400] flex flex-col items-start gap-7 md:w-[50%]">
          <SecHeading
            subhead={"Introduction"}
            mainhead={"Navigate the Future of Agriculture with Farmica."}
            subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
            mainStyle={"md:text-[2.8rem] text-[2.1rem] capitalize font-[800]"}
            divStyle="items-start"
          />
          <p>
            Agri Management Solutions leads in sustainable water management. Our
            team excels at creating bespoke solutions tailored for each
            situation, focusing on irrigation, water storage, and treatment. We
            serve diverse spaces, from indoor farms and commercial landscapes to
            home gardens. Our mission is to enhance plant health and yield while
            minimizing water wastage, with efficiency and sustainability at our
            core.
          </p>
          <p>
            Established in 2009, we swiftly diversified beyond farming. Our
            vision extends beyond basic water solutions to precise, sustainable
            water management through modern technology. We strive to comprehend
            your needs and exceed your expectations with exceptional service.
          </p>
        </div>
        <div className="intro_illus md:w-[50%]">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748955719/agro-ally/img_1_p7vqb4.png"
            alt="agro ally"
            className=""
          />
        </div>
      </div>
      <KnowUs />
      <section className="founder px-8 py-24">
        <div className="sec_text  flex flex-col md:flex-row gap-6">
          <div className="picBox md:w-[50%] relative p-4 px-15 rounded-md">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748972030/agro-ally/WhatsApp_Image_2025-06-03_at_18.28.26_6c5e01a5_tngsxb.jpg"
              alt="Derrick Acer"
              className="w-full h-full object-cover object-top aspect-square rounded-md"
            />
            <div className="bg-amber-500 absolute bottom-0 left-0 px-8 py-5 rounded-sm shadow-xl">
              <p className="font-[700] text-[1.3rem]">Derrick Kwabena Essah</p>
              <p className="font-[500]">C.E.O</p>
            </div>
          </div>
          <div className="md:w-[40%] flex flex-col items-start gap-6">
            <SecHeading
              subhead={"Leading with Love"}
              mainhead={"Meet Our C.E.O"}
              subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
              mainStyle={"md:text-[2.8rem] text-[2.1rem] capitalize font-[800]"}
              divStyle={"items-start justify-center flex flex-col"}
            />
            <p className="text-black font-[200] md:text-[1.1rem]">
              Dear valued visitors, On behalf of the entire Agro Ally team, I am
              thrilled to welcome you to our website. At Agro Ally, we're
              passionate about transforming the agricultural landscape and
              making a lasting impact on the lives of farmers and communities
              worldwide. <br /> <br /> We're dedicated to empowering farmers,
              fostering sustainable agriculture, and driving innovation in the
              industry. Our mission is to provide cutting-edge solutions, expert
              knowledge, and unwavering support to help you grow, thrive, and
              feed the world. Explore our website to learn more about our
              products, services, and commitment to a greener future. Let's
              cultivate success together!
            </p>
            <Link
              to={"#"}
              className="bg-[var(--main-green)] text-white px-6 py-4 rounded-xs font-[600] border-3 border-[var(--main-green)] hover:bg-transparent hover:text-[var(--main-green)] ease-in duration-200"
            >
              See Our Team
            </Link>
          </div>
        </div>
      </section>
      <div className="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748948891/agro-ally/bg-layer-min_r5ndtg.jpg')] bg-center bg-cover">
        <div className="cover bg-[#0000009a] pb-[4rem] min-h-[60vh] flex flex-col items-center justify-center text-center text-white p-6 px-6 gap-5">
          <p className="text-[1.1rem] md:text-[1.3rem]">
            Best Awards Winning Organic Farming
          </p>
          <h3 className="text-[1.6rem] md:text-[2rem] font-[700]">
            Unbeatable Organic and Agriculture Services
          </h3>
          <Link to={"#"} className="bg-chart-4 px-4 py-2">
            About More
          </Link>
        </div>
      </div>
      <Stats />
      <OurValue />

      <section className="faq px-8 py-24  flex flex-col-reverse gap-6 mt-4 items-center md:flex-row md:justify-center md:gap-8 ">
        <div className="welcome_vidBox w-[90%] md:w-[40%] lg:w-[40%]">
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif"
            alt=""
            className="w-full h-full"
          />
        </div>

        <div className="accordions max-w-[700px] w-full md:w-[60%] ">
          <SecHeading
            subhead={"FAQ"}
            mainhead={"Get To Know More"}
            subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
            mainStyle={"md:text-[2.8rem] text-[2.1rem] capitalize font-[800]"}
            divStyle="items-start"
          />
          <Accordion type="single" collapsible className="w-full">
            {faqValues.map((faq, index) => (
              <AccordionItem value={index.toString()} key={index}>
                <AccordionTrigger className=" cursor-pointer text-[1.1rem] capitalize font-[700]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[.9rem] font-[300] max-w-[600px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <Testimonials />
    </section>
  );
};

export default About;
