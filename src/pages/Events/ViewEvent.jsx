import React from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header';
import { past_events } from '../../utils';
import Footer from '../../components/Footer';

const ViewEvent = () => {
  const { id } = useParams();
  const event = past_events.find((event) => event.id === id);
  return (
    <>events</>
    // <>
    //   <Header page={"events"} />
    //   <div>
    //     <div className="bg-[#FFF7FC]">
    //       <div className="container mx-auto md:px-4">
    //         <div className="container mx-auto md:px-5 lg:w-11/12 p-3 lg:px-8 lg:py-36 flex items-center lg:gap-8">
    //           <div className="">
    //             <p className="font-medium">Upcoming!</p>
    //             <h4 className="text-3xl lg:text-5xl w-10/12 sm:7/12 font-bold leading-tight text-primary-main-pink">
    //               {event.name}
    //             </h4>
    //             <p className="text-base sm:w-7/12 md:w-8/12 lg:w-9/12 lg:text-xl">
    //               {event.details}
    //             </p>
    //             <div className="mt-8 md:mt-16 mb-5">
    //               <a className="border bg-primary-main-pink px-12 font-semibold rounded border-primary-main-pink py-4 text-white">
    //                 Register
    //               </a>
    //             </div>
    //           </div>
    //           <div className="hidden md:block lg:w-10/12">
    //             <div className="border-3 border-primary-main-pink">
    //               <img src={event.image} />
    //             </div>
    //           </div>
    //         </div>

    //         <section className="border-[5px] border-white shadow-[0px_4px_250px_rgba(183,5,105,0.15)] bg-white p-10 sm:p-12 w-11/12 md:w-[87%] mx-auto md:h-[417px] min-h-[954px]">
    //           <h4 className="text-primary-main-pink font-bold text-3xl md:text-4xl my-2">
    //             About This Event
    //           </h4>
    //           <p className="text-xl md:text-2xl">
    //             The She Code Africa cloud School (in partnership with Deimos
    //             Cloud) is a 3months cohort-style, Bootcamp program specifically
    //             targeted at ladies across Africa, looking to kick off or switch
    //             careers into the Site Reliability Engineering (SRE) field.
    //           </p>
    //           <div className="flex gap-7 my-7">
    //             <p>4th of June, 2022 </p> <p>10:00 Pm</p> <p>Google Meet</p>
    //           </div>
    //           <div>
    //             <h4 className="text-primary-main-pink font-bold text-3xl md:text-4xl my-2">
    //               What you'll Learn
    //             </h4>
    //             <p className="text-xl md:text-2xl">
    //               What you'll learn Want to get the most out of A Cloud Guru?
    //               Not sure where to start? Join us for an on-demand platform
    //               walkthrough as we share tips and tricks on how to empower your
    //               team to unleash their full cloud potential! In this session,
    //               you’ll become an expert on our core product features,
    //               including Hands-on Labs, Cloud Playground, Learning Paths and
    //               more! From there, we’ll dive into a variety of Admin tools to
    //               help you assess cloud competency, organize team members and
    //               easily track cloud success and learning ROI across your
    //               organization. Trust us: once you’re done with this session,
    //               you’ll be feeling like a true Cloud Guru.
    //             </p>
    //           </div>
    //         </section>
    //       </div>
    //     </div>
    //   </div>
    //   <Footer />
    // </>
  );
};

export default ViewEvent;
