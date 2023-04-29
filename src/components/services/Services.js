import Image from "next/image";
import React, { useState } from "react";
import service1 from "../../assets/images/icservice2FireDamange.png";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
const MyModal = dynamic(() => import("../Modal/MyModal"));
// import Modal from "../Modal/Modal";
const Services = () => {
  const [openAll, setOpenAll] = useState(false);

  const handleClick = () => {
    setOpenAll(!openAll);
  };
  return (
    <div className="mx-auto container  mt-12">
      <h5 className="font-[800] wow fadeInUp  delay-0-2s   mb-10 text-center text-[44px] text-[#25A52B]">
        SERVICES
      </h5>

      <div className="grid gap-5 rounded grid-cols-1">
        <div className="p-[24px] flex  justify-center items-center shadow-md transition-all ease-linear duration-300 hover:shadow-lg flex-col bg-[#ffff] rounded-[6px]">
          {/* <Image alt="service" src={service1} width={100} height={100} /> */}
         
          <Icon
              icon="lucide:archive-restore"
              fontSize="100px"
              className="text-[#25A52B] mb-[20px] wow fadeInUp  delay-0-2s"
            />
          <div className="mt-[20px]">
            <h2 className="mb-[25px] font-[600] wow fadeInUp delay-0-4s uppercase text-center text-[22px] leading-[30px] text-[#25A52B]">
              Advice and Tips on Water Damage Restoration
            </h2>
            <p className="font-[Quicksand] mt-[15px] wow fadeInUp delay-0-6s text-[#4A4A4A] text-[16px]">
              Getting your business, home or any other institution back on track
              after water tragedies is a process that requires immediate
              intervention. That is why we can ensure that your work resumes
              normally by offering immediate water restoration services
              24/7/365. In case this damage occurs in your home, institution,
              business or any other building, we can offer restoration services
              within an hour of your call. Time is not on your side; worry no
              more. Our immediate services will ensure your activities resume
              back to the norm. As a professional organization, we understand
              the need for immediate damage restoration, as a delay of an hour
              or two can heighten the severity of water damage in your
              building’s damage in a building can result in a feeling of fear,
              confusion, stress and helplessness. However, we can eradicate all
              these feelings of struggling with these damages by restoring your
              property and resuming your daily activities. By applying
              certified, proven and specialized methods, we can help you through
              this troublesome time. Don’t hesitate to reach us, as our
              restoration methods are skillfully applied depending on the nature
              of the building and the extent of the damage. Our professional
              team combines experiences and training from organizations like
              EPA, IICRC and State Contractors Board to effectively and quickly
              respond to your damage loss. No words can explain how speed is
              crucial in dealing with this damage effectively. The more time is
              taken to counter this damage, the worse the damage will likely be
              experienced. We understand that choosing the best company to
              restore your building from these damages is tedious. This is where
              our organization’s reputable services draw the line. We are at a
              higher level in this realm of restoration as we rely on
              experienced and trained staff equipped with the latest advanced
              state-of-the-art technology to handle your emergency in advance.
            </p>

            {/* <button onClick={opeModal} >
              Continue
            </button> */}
            {/* <MyModal /> */}
          </div>

          {openAll ? null : (
            <button
              onClick={handleClick}
              className="font-[Oswald] wow fadeInUp  delay-0-2s  mt-10 text-[20px] transition-all ease-linear duration-300 hover:shadow-lg shadow-[#25A52B] rounded-[4px] font-[600] bg-[#25A52B] px-[30px] py-[10px] text-[#ffff] uppercase"
            >
              continue
            </button>
          )}
        </div>
        {openAll ? (
          <>
            <div className="p-[24px] flex justify-center items-center shadow-md flex-col transition-all ease-linear duration-300 hover:shadow-lg bg-[#ffff] rounded-[6px]">
            <Icon
              icon="la:house-damage"
              fontSize="100px"
              className="text-[#25A52B] mb-[20px] wow fadeInUp  delay-0-2s"
            />
          <div className="mt-[20px]">
            <h2 className="mb-[25px] font-[600] uppercase text-center wow fadeInUp  delay-0-4s  text-[22px] leading-[30px] text-[#25A52B]">
            What Rely Causes Water Damage?
            </h2>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  Water is a friendly master, but it can result in huge damage
                  when it is not controllable. Flooding, which results from
                  heavy rain and the wind, is one of the most common causes of
                  this damage. However, various interior factors can also result
                  in these damages. For instance, pipe breaks or sudden plumbing
                  fixtures can leak immensely. In our service delivery, we have
                  witnessed many causes ranging from leaks from toilets that
                  have not been used for a long time to natural disasters
                  leading to water-blowing walls and other property. Water
                  disasters can be caused by many factors that cannot be
                  anticipated or assumed, like forgetting and leaving the taps
                  running. Can’t I Just Fix My Water damage tragedies?
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  This option might seem attractive and cost-friendly, but the
                  worst of this damage is typically the one that cannot be seen
                  through the naked eye. We understand that you can remove
                  standing water on your own. However, seeping and clearing the
                  water further into the damaged property completely alone is
                  much more tedious. The water left on the property may be more
                  dangerous and cause more damage. That is where our
                  professional team comes in. Cleaning water in the property
                  with different materials requires using modern advanced tech.
                  Using this technology, we are able to clear even the water in
                  the property that cannot be seen with the naked eye.
                  Furthermore, our damage restoration process is more than
                  clearing the water; we provide additional services to prevent
                  future water cases and ensure steady restoration. For
                  instance, we work hand in hand with insurance companies to
                  cater to the bill of the damage and to make the restoration
                  and compensation simpler for you.How Do the Water Damage
                  Restoration Pro’s Professionals Help?
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  Immediately we arrive at your premises and perform a thorough
                  inspection. We start by inspecting the possible cause of water
                  flow, how to stop it and the nature of the materials on the
                  premises to ensure that we don’t do more harm in the
                  restoration process. Our technicians are armed with the latest
                  state-of-the-art thermal imaging technology and moisture
                  sensors that can view moisture levels in underfloor, behind
                  walls and in the ceiling.
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  Once we have identified the possible cause of the water, we
                  liaise together on a specific plan depending on the situation.
                  The first step in the unique specific plan often involves
                  structural drying to remove all the excess water in the
                  property as soon as possible. To mitigate this damage,
                  dehumidifiers, fans, heaters, floor driers, blowers, water
                  extractors, and more machinery are applied to get rid of the
                  water in the entire premises with ease and caution.Once The
                  Stagnant Water Is Removed, Aren’t I Done?No. Removing the
                  excess water stagnating the premise is not the final process.
                  The complete drying of the premise is very important as it
                  prevents the possibility of microbial growth. When there are
                  high humidity levels, they mix with airborne allergens,
                  resulting in mold growth. After the damage of water, mold
                  growth can cause more damage to your property. However, our
                  service delivery is different as we strictly follow the
                  standards of IICRC to dry and perform a comprehensive moisture
                  assessment and apply the most advanced technology to protect
                  your property from mold infestation. Through appropriate and
                  strategic water restoration, which might take days or weeks,
                  we can contain mold growth and other water-related damages.
                </p>
                <div className="mt-[20px] justify-self-start">
                  <h5 className="font-[600] uppercase text-[15px] leading-[18px] font-[Quicksand] mt-[15px] text-[#4A4A4A]">
                    Our restoration typically follows five steps:
                  </h5>

                  <ul className="justify-self-start list-disc ml-5">
                    <li className="font-[400] text-[15px] leading-[18px] font-[Quicksand] mt-[10px] text-[#4A4A4A]">
                      Inspect the premises to identify the extent of water
                      destruction and design an action plan.
                    </li>
                    <li className="font-[400] text-[15px] leading-[18px] font-[Quicksand] mt-[10px] text-[#4A4A4A]">
                      Removing all the stagnating water.
                    </li>
                    <li className="font-[400] text-[15px] leading-[18px] font-[Quicksand] mt-[10px] text-[#4A4A4A]">
                      Drying and dehumidifying the damaged area.
                    </li>
                    <li className="font-[400] text-[15px] leading-[18px] font-[Quicksand] mt-[10px] text-[#4A4A4A]">
                      Cleaning and sanitizing the damaged area.
                    </li>
                    <li className="font-[400] text-[15px] leading-[18px] font-[Quicksand] mt-[10px] text-[#4A4A4A]">
                      Starting the restoration process.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p-[24px] flex justify-center items-center shadow-md flex-col transition-all ease-linear duration-300 hover:shadow-lg bg-[#ffff] rounded-[6px]text-center">
              <Icon
              icon="ion:construct-sharp"
              fontSize="100px"
              className="text-[#25A52B] mb-[20px] wow fadeInUp  delay-0-2s"
            />
          <div className="mt-[20px]">
            <h2 className="mb-[25px] font-[600] uppercase text-center wow fadeInUp  delay-0-4s  text-[22px] leading-[30px] text-[#25A52B]">
            How does the premise’s reconstruction and restoration work?
            </h2>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  In our restoration process, we comprehensively follow the five
                  steps to ensure that we normalize your activities. First, our
                  team of professionals starts by thoroughly inspecting the
                  premises to identify the extent of water destruction. The
                  inspection thus helps design a specific action plan that will
                  be applied throughout the process. After the realization of
                  how water destruction scenarios are different, the action plan
                  is strictly adhered to our best to ensure a comprehensive
                  recovery and restoration of your premise. After that, we
                  remove all the stagnant water that is flooded in the area as
                  we pave the way for thorough drying .Once we are done, the
                  third step involves drying and dehumidifying the damaged area
                  to ensure all the parts are dry. It is worth noting that our
                  drying and dehumidifying process is carried out carefully
                  depending on the nature of the items on the premise. For
                  instance, dehumidifiers, fans, heaters, floor driers, blowers
                  and water extractors are applied cautiously to ensure no
                  additional damage during restoration. We understand that some
                  of the damaged rooms might have electrical and other machinery
                  sensitive to water which can result in other risks and
                  dangers.
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  This option might seem attractive and cost-friendly, but the
                  worst of this damage is typically the one that cannot be seen
                  through the naked eye. We understand that you can remove
                  standing water on your own. However, seeping and clearing the
                  water further into the damaged property completely alone is
                  much more tedious. The water left on the property may be more
                  dangerous and cause more damage. That is where our
                  professional team comes in. Cleaning water in the property
                  with different materials requires using modern advanced tech.
                  Using this technology, we are able to clear even the water in
                  the property that cannot be seen with the naked eye.
                  Furthermore, our damage restoration process is more than
                  clearing the water; we provide additional services to prevent
                  future water cases and ensure steady restoration. For
                  instance, we work hand in hand with insurance companies to
                  cater to the bill of the damage and to make the restoration
                  and compensation simpler for you.How Do the Water Damage
                  Restoration Pro’s Professionals Help?
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  Once that is done, the cleaning and sanitizing the damaged
                  area start. This involves thoroughly cleaning the damaged
                  premises by ensuring no dirt is left. After that, water damage
                  repairs begin, where we ensure that everything is brought back
                  to its place as you watch and direct.
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  Done right, the full restoration involves reconstruction, like
                  drying the walls and also applying some paints. Since we apply
                  client-centered services, we will ensure that you’re
                  comfortable by guiding you on gauging whether the restoration
                  was successful immediately after restoration and after we
                  leave the premises. For instance, you will be able to identify
                  whether the restoration was effective in different ways. This
                  includes informing us whether there is a stale or musty smell
                  in the air, indicating rotting wood.
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  As we leave the premise, we also guide you to notify us if an
                  area indicates remaining water by checking different signs.
                  This includes a change in texture and color of floor, walls
                  and other premises property as that is one of our principle of
                  ensuring that it does not happen.
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                  Our organization’s main goal is to provide a water tragic
                  damage restoration service that will surpass your expectations
                  by ensuring the immediate resumption of your normal activities
                  at a minimal cost.
                </p>
              </div>
            
            </div>
            <div className="p-[24px] flex justify-center items-center shadow-md flex-col transition-all ease-linear duration-300 hover:shadow-lg bg-[#ffff] rounded-[6px]text-center">
            <Icon
              icon="material-symbols:water-full"
              fontSize="100px"
              className="text-[#25A52B] mb-[20px] wow fadeInUp  delay-0-2s"
            />
          <div className="mt-[20px]">
            <h2 className="mb-[25px] font-[600] uppercase text-center wow fadeInUp  delay-0-4s  text-[22px] leading-[30px] text-[#25A52B]">
            Water-Damage Restoration Tips
            </h2>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                Restoring to the norm after a water disaster can be hectic. Depending on the water level, it can cause a lot of damage leading to huge losses. However, applying the appropriate organizational knowledge, skills, and technology can help recover easier and quicker.
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                Restoring to the norm after a water disaster can be hectic. Depending on the water level, it can cause a lot of damage leading to huge losses. However, applying the appropriate organizational knowledge, skills, and technology can help recover easier and quicker.
Water tragedies can arise from various flooding factors like heavy storms, tree damage, plumbing fixtures, broken pipes and unavoidable natural disasters. Hiring the right team with modern water restoration technology like dehumidifiers, fans, heaters, floor driers, blowers, and water extractors.
Hiring a team of professionals with experience and training from organizations like EPA, IICRC and State Contractors Board is also advisable to effectively and quickly respond to your damage loss.
                </p>
                <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[16px] wow fadeInUp  delay-0-6s ">
                After this damage restoration, it’s worth inspecting the post damages like changes in texture and color of the floor, walls and other premises property.
Of all the damages from water, don’t risk your life, the life of others and your property, as there might be more dangers in the restoration. For instance, it is not advisable to carry out this process on your own as it might lead to more damage, like electrocution.
In case you have any damages from water, worry no more don’t hesitate to inform us for quick restoration and recovery.
                </p>
              
              </div>
              {openAll ? (
                <button
                  onClick={handleClick}
                  className="font-[Oswald]  transition-all ease-linear duration-300 hover:shadow-lg shadow-[#25A52B] mt-10 text-[20px] rounded-[4px] font-[600] bg-[#25A52B] px-[30px] py-[10px] text-[#ffff] uppercase"
                >
                  Show less
                </button>
              ) : null}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Services;
