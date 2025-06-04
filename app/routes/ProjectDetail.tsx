// import { services } from "~/components/common/allServices";
// import type { Route } from "./+types/ServiceDetail";

import { allProjects } from "~/components/common/projects";
import type { Route } from "./+types/ProjectDetail";
import PageHead from "~/components/common/PageHead";
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {};
// const correctUrl = allProjects.map((project) => {
//   return project.name.replaceAll(" ", "-").toLowerCase();
// });

const ServiceDetail = ({ params }: Route.LoaderArgs) => {
  const dynamicProject = params.dynamicProject ?? "";

  const singleProject = allProjects.find(
    (project) =>
      project.name.replaceAll(" ", "-").toLowerCase() === dynamicProject
  );

  // if (!singleProject) {
  //   throw new Response("Not Found", { status: 404 });
  // }

  return (
    <section>
      <PageHead
        pageBg="bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1748947834/agro-ally/qQ7rFB5eVVBjturZ7t2PLrcFLI_h8xy5q.avif')]"
        pageName={singleProject?.name ?? "Project"}
        pageDesc="Best Awards Winning Organic Farming"
      />
      <div className="project_content flex flex-col md:flex-row-reverse px-6 py-16 md:justify-evenly md:gap-[2rem]">
        <div className="project_text  md:w-[60%] min-h-[100vh] w-full flex flex-col py-16 gap-14 md:gap-16">
          <div className="project_intro flex flex-col gap-6">
            <h2 className="">{singleProject?.name}</h2>
            <p className="">{singleProject?.description[0].intro}</p>
            <img
              src={singleProject?.description[0].introPic}
              alt={singleProject?.name}
              className="rounded-md shadow-2xl w-full"
            />
          </div>

          <div className="toKnow ">
            <h2 className=" ">Here To know about this project</h2>
            <p>{singleProject?.description[0].whatToKnow.p1}</p> <br />
            <p>{singleProject?.description[0].whatToKnow.p2}</p>
          </div>

          <div className="project_requirement flex flex-col gap-7">
            <h2 className=" capitalize">Project requirement</h2>

            <div className="allRequirements flex flex-col gap-3 ">
              {singleProject?.description[0].requirements.map((requirement) => (
                <div className="flex items-start gap-1">
                  <span className="text-chart-4 text-[1.3rem]">
                    <FaLongArrowAltRight />
                  </span>
                  <p className="text-[1.1rem] font-[500] text-[#606060]">
                    {requirement}
                  </p>
                </div>
              ))}
            </div>
            <div className="req_illus flex flex-col md:flex-row gap-5">
              {singleProject?.description[0].requirePics.map((requirePic) => (
                <img
                  src={requirePic}
                  alt={singleProject?.name}
                  className="rounded-md w-full md:w-[50%]"
                />
              ))}
            </div>

            <div className="analysis">
              <h2>Analysis & Planning</h2>
              <p>{singleProject?.description[0].analysis}</p>
            </div>

            <div className="review bg-[var(--main-green)] text-white py-7 px-5 min-h-[30vh] shadow-2xl rounded-sm flex flex-col items-start gap-3 justify-center">
              <q className="text-[1.1rem] font-[600]">
                {singleProject?.description[0].clientTalks.desc}
              </q>
              <h3 className="font-[600] text-chart-4">
                -{singleProject?.description[0].clientTalks.clientName}
              </h3>
            </div>

            <div className="solution">
              <h2>Project Solution</h2>
              <p>{singleProject?.description[0].solution[0].p1}</p> <br />
              <p>{singleProject?.description[0].solution[0].p2}</p>
            </div>
          </div>
        </div>

        <aside className="project_side bg-[var(--main-green)]  md:w-[30%] min-h-[70vh] max-h-[90vh] md: sticky top-[10px] w-full p-4 px-9 flex flex-col items-center gap-8 pt-8 rounded-xl shadow-2xl">
          <h2 className="capitalize font-[700] text-[1.6rem] text-white">
            project info
          </h2>
          <div className="border-b border-b-[#ebebeb5b] w-full  flex items-center justify-between py-4">
            <h3 className="text-white font-[600] text-[1.1rem]">
              Client Name:
            </h3>
            <p className="text-stone-300">
              {singleProject?.description[0].bioCard.clientName}
            </p>
          </div>
          <div className="border-b border-b-[#ebebeb5b] w-full  flex items-center justify-between py-4">
            <h3 className="text-white font-[600] text-[1.1rem]">
              Project Value:
            </h3>
            <p className="text-stone-300">
              {singleProject?.description[0].bioCard.prjectValue}
            </p>
          </div>
          <div className="border-b border-b-[#ebebeb5b] w-full  flex items-center justify-between py-4">
            <h3 className="text-white font-[600] text-[1.1rem]">Duration:</h3>
            <p className="text-stone-300">
              {singleProject?.description[0].bioCard.duration}
            </p>
          </div>
          <div className="border-b border-b-[#ebebeb5b] w-full  flex items-center justify-between py-4">
            <h3 className="text-white font-[600] text-[1.1rem]">Location:</h3>
            <p className="text-stone-300">
              {singleProject?.description[0].bioCard.venue}
            </p>
          </div>
          <div className="border-b border-b-[#ebebeb5b] w-full  flex items-center justify-between py-4">
            <h3 className="text-white font-[600] text-[1.1rem]">Category:</h3>
            <p className="text-stone-300">{singleProject?.name}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ServiceDetail;
