import React, { useRef, useState } from "react";
// Import Swiper React components
import { Icon } from "@iconify/react";
import customer1Image from "../../assets/images/slider1.jpeg";
import customer2Image from "../../assets/images/slider2.jpeg";

import customer3Image from "../../assets/images/slider3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const Slider = () => {
  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button
        className="z-[99] absolute right-[0px] bottom-[0%] w-[100px] flex justify-center  text-center h-[50px] bg-[#25A52B] border-2 border-[#25A52B] transition-all ease-linear duration-300 hover:translate-y-[-5px] hover:text-[#25A52B]"
        onClick={() => swiper.slideNext()}
      >
        {children}
      </button>
    );
  };
  const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return (
      <button
        className="z-[99] absolute left-[0px] bottom-[0%] w-[100px] flex justify-center  text-center h-[50px] bg-[#25A52B] border-2 border-[#25A52B] transition-all ease-linear duration-300 hover:translate-y-[-5px] hover:text-[#25A52B]"
        onClick={() => swiper.slidePrev()}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="container mt-[70px] mx-auto min-h-[600px]">
      <h1 className="font-[600] text-[30px] wow fadeInUp  delay-0-2s mt-9 text-center">
        What Our customer say about us{" "}
      </h1>
      <div className="h-[2px] mx-auto mt-[10px] wow fadeInUp  delay-0-2s s max-w-[300px] bg-[#fed03d]"></div>

      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        modules={[Pagination, Navigation]}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="mySwiper  p-[30px]"
      >
        <SwiperButtonNext>
          <Icon
            icon="solar:alt-arrow-right-line-duotone"
            color="#ffff"
            // className="hover:text-[#25A52B]"
            fontSize="50px"
          />
        </SwiperButtonNext>
        <SwiperButtonPrev>
          <Icon
            icon="solar:alt-arrow-left-line-duotone"
            color="#ffff"
            fontSize="50px"
          />
        </SwiperButtonPrev>

        <SwiperSlide className="min-h-[300px] wow fadeInUp  delay-0-2s rounded border border-gray-100">
          <div className="min-h-[300px] relative rounded shadow-md p-8">
            <Icon
              icon="iconoir:quote"
              fontSize="70px"
              className="absolute text-gray-100 top-[20px] right-[20px]"
            />
            <div className="flex items-center gap-5 mb-7">
              <Image
                src={customer1Image}
                height={100}
                width={100}
                className="rounded-[50%] ] h-[70px] w-[70px] object-cover"
              />
              <div>
                <p className="font-[500] text-[22px] p-0">Suzan w.</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <Icon
                        key={index}
                        icon="material-symbols:star-rounded"
                        color="#fed03d"
                        fontSize="30px"
                      />
                    );
                  })}
                </div>
              </div>
            </div>
            <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[15px] font-[400] text-left">
              Scope did a great job restoring my ceiling, and enclosed
              water/termite damaged patio area. Jeremaih, the lead tech, was
              very hard working & maticulous! I’ve considered using their
              services for additional work on a rental property.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px] wow fadeInUp  delay-0-4s rounded border border-gray-100">
          <div className="min-h-[300px] relative rounded shadow-md p-8">
            <Icon
              icon="iconoir:quote"
              fontSize="70px"
              className="absolute text-gray-100 top-[20px] right-[20px]"
            />
            <div className="flex items-center gap-5 mb-7">
              <Image
                src={customer1Image}
                height={100}
                width={100}
                className="rounded-[50%] ] h-[70px] w-[70px] object-cover"
              />
              <div>
                <p className="font-[500] text-[22px] p-0">Hughie B</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <Icon
                        key={index}
                        icon="material-symbols:star-rounded"
                        color="#fed03d"
                        fontSize="30px"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[15px] font-[400]">
              Veronika, please let Gene and the staff who worked with me during
              this remediation/remodel journey that I am extremely pleased with
              all of you. This was one the most demanding experiences in my
              life, but you and your staff practically held me up throughout the
              stressful days. I am humbled and grateful that God sent your
              company to me, when I did not even know what to do. The work was
              done with excellence and precision, and each of the people who
              came into my home was respectful of my dilemma and me as well.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px] wow fadeInUp  delay-0-2s rounded border border-gray-100">
          <div className="min-h-[300px] relative rounded shadow-md p-8">
            <Icon
              icon="iconoir:quote"
              fontSize="70px"
              className="absolute text-gray-100 top-[20px] right-[20px]"
            />
            <div className="flex items-center gap-5 mb-7">
              <Image
                src={customer1Image}
                height={100}
                width={100}
                className="rounded-[50%] ] h-[70px] w-[70px] object-cover"
              />
              <div>
                <p className="font-[500] text-[22px] p-0">Olga B.</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <Icon
                        key={index}
                        icon="material-symbols:star-rounded"
                        color="#fed03d"
                        fontSize="30px"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[15px] font-[400]">
              I had water damage from the leaky roof after the rain season and a
              friend recommended me Scope Environmental Remediation. I had very
              good experience working with them, they are very professional and
              take pride in their work. What I especially liked is that they
              take the job and do it from start to finish, you don’t have to act
              as a general contractor looking for different vendors. Veronika is
              very good in explaining details, and their team of workers is
              doing outstanding job. On the top of it all, everyone I came in
              contact with was very courteous and easy to deal with. I will
              definitely use them again and will recommend them to my friends
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px] wow fadeInUp  delay-0-4s rounded border border-gray-100">
          <div className="min-h-[300px] relative rounded shadow-md p-8">
            <Icon
              icon="iconoir:quote"
              fontSize="70px"
              className="absolute text-gray-100 top-[20px] right-[20px]"
            />
            <div className="flex items-center gap-5 mb-7">
              <Image
                src={customer1Image}
                height={100}
                width={100}
                className="rounded-[50%] ] h-[70px] w-[70px] object-cover"
              />
              <div>
                <p className="font-[500] text-[22px] p-0">Olga B.</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <Icon
                        key={index}
                        icon="material-symbols:star-rounded"
                        color="#fed03d"
                        fontSize="30px"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[15px] font-[400]">
              I had water damage from the leaky roof after the rain season and a
              friend recommended me Scope Environmental Remediation. I had very
              good experience working with them, they are very professional and
              take pride in their work. What I especially liked is that they
              take the job and do it from start to finish, you don’t have to act
              as a general contractor looking for different vendors. Veronika is
              very good in explaining details, and their team of workers is
              doing outstanding job. On the top of it all, everyone I came in
              contact with was very courteous and easy to deal with. I will
              definitely use them again and will recommend them to my friends
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[300px] rounded border border-gray-100">
          <div className="min-h-[300px] relative rounded shadow-md p-8">
            <Icon
              icon="iconoir:quote"
              fontSize="70px"
              className="absolute text-gray-100 top-[20px] right-[20px]"
            />
            <div className="flex items-center gap-5 mb-7">
              <Image
                src={customer1Image}
                height={100}
                width={100}
                className="rounded-[50%] ] h-[70px] w-[70px] object-cover"
              />
              <div>
                <p className="font-[500] text-[22px] p-0">Olga B.</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                      <Icon
                        key={index}
                        icon="material-symbols:star-rounded"
                        color="#fed03d"
                        fontSize="30px"
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <p className="font-[Quicksand] mt-[15px] text-[#4A4A4A] text-[15px] font-[400]">
              I had water damage from the leaky roof after the rain season and a
              friend recommended me Scope Environmental Remediation. I had very
              good experience working with them, they are very professional and
              take pride in their work. What I especially liked is that they
              take the job and do it from start to finish, you don’t have to act
              as a general contractor looking for different vendors. Veronika is
              very good in explaining details, and their team of workers is
              doing outstanding job. On the top of it all, everyone I came in
              contact with was very courteous and easy to deal with. I will
              definitely use them again and will recommend them to my friends
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
