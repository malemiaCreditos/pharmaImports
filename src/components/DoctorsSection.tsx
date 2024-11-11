"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const DoctorsSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="doctors" className="doctors section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Técnicos</h2>
        <p>Nossos técnicos estão sempre a sua desposição para lhe auxiliar.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <Image
                  src="/assets/img/doctors/Avatar22.png"
                  className="img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="member-info">
                <h4>Walter White</h4>
                <span>Técnico Farmaceutico</span>
                <p>
                  Explicabo voluptatem mollitia et repellat qui dolorum quasi
                </p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <Image
                  src="/assets/img/doctors/Avatar22.png"
                  className="img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Anestesista</span>
                <p>
                  Aut maiores voluptates amet et quis praesentium qui senda para
                </p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <Image
                  src="/assets/img/doctors/Avatar22.png"
                  className="img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>Cardiologista</span>
                <p>
                  Quisquam facilis cum velit laborum corrupti fuga rerum quia
                </p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div className="team-member d-flex align-items-start">
              <div className="pic">
                <Image
                  src="/assets/img/doctors/Avatar22.png"
                  className="img-fluid"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Neurocirurgiã</span>
                <p>
                  Dolorum tempora officiis odit laborum officiis et et accusamus
                </p>
                <div className="social">
                  <a href="">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bi bi-linkedin"></i>{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
