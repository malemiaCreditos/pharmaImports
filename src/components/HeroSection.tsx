"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const HeroSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="hero" className="hero section light-background">
      <Image
        src="/assets/img/heroPharmaBG.jpg"
        alt=""
        data-aos="fade-in"
        height={836}
        width={1920}
      />

      <div className="container position-relative">
        <div
          className="welcome position-relative"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h2>BEM VINDO A PHARMA IMPORTS</h2>
          <p>
            Somos uma empresa especializada na importação e distribuição de
            produtos farmacêuticos em Moçambique.
          </p>
        </div>

        <div className="content row gy-4">
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
              <h3>Porquê escolher a Pharma Imports?</h3>
              <p>
                Ao escolher a Pharma Imports Mozambique, os clientes contam com
                uma empresa dedicada a fornecer produtos de alta qualidade com
                um serviço confiável, seguro e alinhado com as necessidades do
                mercado de saúde moçambicano.
              </p>
              <div className="text-center">
                <a href="#about" className="more-btn">
                  <span>Saber mais...</span>{" "}
                  <i className="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div
                    className="icon-box"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-clipboard-data"></i>
                    <h4>Experiência em Logística e Distribuição</h4>
                    <p>
                      Com uma rede de distribuição bem estruturada, a empresa
                      garante entregas pontuais e condições ideais de transporte
                      e armazenamento para manter a eficácia dos produtos.
                    </p>
                  </div>
                </div>

                <div className="col-xl-4 d-flex align-items-stretch">
                  <div
                    className="icon-box"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                  >
                    <i className="bi bi-gem"></i>
                    <h4>Qualidade e Confiabilidade</h4>
                    <p>
                      Trabalhamos apenas com fornecedores certificados,
                      garantindo que todos os produtos atendam aos padrões
                      internacionais de segurança e qualidade.
                    </p>
                  </div>
                </div>

                <div className="col-xl-4 d-flex align-items-stretch">
                  <div
                    className="icon-box"
                    data-aos="zoom-out"
                    data-aos-delay="500"
                  >
                    <i className="bi bi-inboxes"></i>
                    <h4>Variedade de Produtos e Equipamentos</h4>
                    <p>
                      Além de medicamentos, fornecemos equipamentos médicos e
                      hospitalares, garantindo uma solução completa para as
                      necessidades de saúde do cliente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
