import { services } from "~/components/common/allServices";
import type { Route } from "./+types/ServiceDetail";
import PageHead from "~/components/common/PageHead";
import { FaLeaf } from "react-icons/fa";
import { IoTicketOutline } from "react-icons/io5";
import { Link } from "react-router";

type Props = {};
const correctUrl = services.map((service) => {
  return service.title.replaceAll(" ", "-").toLowerCase();
});

const ServiceDetail = ({ params }: Route.LoaderArgs) => {
  const dynamicService = params.dynamicService ?? "";

  // Find the service whose kebab-case title matches the URL param
  const singleService = services.find(
    (service) =>
      service.title.replaceAll(" ", "-").toLowerCase() === dynamicService
  );

  if (!singleService) {
    throw new Response("Not Found", { status: 404 });
  }

  return (
    <section>
      <PageHead
        pageBg="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748947834/agro-ally/qQ7rFB5eVVBjturZ7t2PLrcFLI_h8xy5q.avif')]"
        pageName={singleService.title}
        pageDesc="Best Awards Winning Organic Farming"
      />
      <div className="service_content px-5 flex flex-col md:flex-row-reverse items-center md:items-start md:justify-around py-24 gap-8">
        <div className="service_text flex flex-col gap-9 md:gap-14 md:w-[65%]">
          <img
            src={singleService.pic}
            alt={singleService.title}
            className="aspect-[11/5] md:aspect-[11/3] rounded-xl object-cover object-center"
          />

          <div className="whyChoose">
            <h2>why choose us</h2>
            <p>{singleService.desc[0].chooseUs.p1}</p> <br />
            <p>{singleService.desc[0].chooseUs.p2}</p>
          </div>

          <div className="benefits flex flex-col gap-8">
            <h2>Key benefits of our service</h2>
            {singleService.desc[0].benefits.map((benefit) => (
              <div className="">
                <p>
                  <span className="font-[700] text-[1.3rem] capitalize text-black flex items-center gap-2">
                    <FaLeaf className="text-[var(--main-green)] text-[1.4rem]" />
                    {benefit.title}
                  </span>{" "}
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="technique flex flex-col gap-6">
            <h2>Modern Technique Work Point</h2>
            <div className="all_techniques flex flex-col gap-4">
              {singleService.desc[0].modernTechnique.map((technique) => (
                <h4 className="font-[600] flex items-start gap-1 text-[1.1rem] text-[#606060]">
                  <span className="text-chart-4 text-[1.6rem]">
                    <IoTicketOutline />
                  </span>
                  {technique}
                </h4>
              ))}
            </div>
          </div>

          <div className="maintenance">
            <h2>Ongoing Maintenance and Support</h2>
            <p>{singleService.desc[0].maintenance}</p>
          </div>
        </div>

        <div className="need_help bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748961495/agro-ally/BOLtGGPkktAAAMX75ryj66ff0E_lskbia.avif')] bg-top bg-cover max-w-[500px] md:w-[30%] md:sticky top-[10px]">
          <div className="cover text-white bg-[#1f6306b6] min-h-[60vh] p-7 flex flex-col items-center justify-center gap-5">
            <h2 className="font-[600] text-[1.7rem]">Need Help?</h2>
            <p className="text-[#ffffff] text-center font-[300]">
              Speak with a human to filling out a form? call corporate office
              and we will connect you with a team member help.
            </p>
            <Link to={"#"} className="text-[1.3rem] font-[500]">
              +92 (000) -9630
            </Link>
            <Link
              to={"#"}
              className="bg-chart-4 px-7 py-3 rounded-md font-[600]"
            >
              WhatsApp Us!
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;
