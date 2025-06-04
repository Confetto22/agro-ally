import { Link } from "react-router";
import { services } from "~/components/common/allServices";
import PageHead from "~/components/common/PageHead";
import SecHeading from "~/components/common/SecHeading";

const ServicesPage = () => {
  return (
    <section>
      <PageHead
        pageBg="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748947834/agro-ally/qQ7rFB5eVVBjturZ7t2PLrcFLI_h8xy5q.avif')]"
        pageName="Services"
        pageDesc="Best Awards Winning Organic Farming"
      />
      <SecHeading
        subhead={"What We Do"}
        mainhead={"We Offer Eco & Agriculture Services"}
        subStyle={"border-[var(--main-green)] text-[var(--main-green)] "}
        mainStyle={""}
        divStyle="items-start  px-8 mt-16"
      />
      <div className="allServices grid grod-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 px-8 pb-24 pt-12">
        {services.map((service) => (
          <Link
            to={`/services/${service.title.replaceAll(" ", "-").toLowerCase()}`}
          >
            <div
              key={service.title}
              className="servicecard max-w-[600px] bg-[var(--main-green)] p-6 rounded-2xl flex flex-col items-start gap-3 mx-auto w-full"
            >
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
              <p className="text-stone-200 text-[.9rem]">{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
