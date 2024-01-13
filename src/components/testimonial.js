"use client";
//import React, { useEffect, useState } from "react";
import testimonialData from "../../FakeData/testimonial.json";
import CardTestimonial from "./card/cardTestimonial"

export default function Header() {
  
  /*const [testimonialData, setTestimonialData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          ""
        );
        console.log(response);
        const data = await response.json();
        setTestimonialData(data.testimonial);
      } catch (error) {
        console.error("Erro na solicitação fetch:", error);
      }
    };

    fetchData();
  }, []);*/

  return (
    <>
      <section className=" bg-gray-100">
        <div className="mx-auto max-w-7xl ">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              O que nossos clientes dizem
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              A opinião dos clientes que escolheram o ListaLink para soluções e
              experiências únicas
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:px-0 mt-5 xl:grid-cols-2 sm:grid-cols-2">
            {testimonialData.map((testimonial) => (
              <CardTestimonial key={testimonial.id} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
