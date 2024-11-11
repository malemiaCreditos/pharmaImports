"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const AboutSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 gx-5">
          <div
            className="col-lg-6 position-relative align-self-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/assets/img/sobrePharma.jpg"
              className="img-fluid"
              alt=""
              height={1280}
              width={1920}
            />
            <a href="#" className="glightbox pulsating-play-btn"></a>
          </div>

          <div
            className="col-lg-6 content"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Sobre Nós</h3>
            <p>
              A Pharma Imports Mozambique é uma empresa moçambicana
              especializada em importação e distribuição de produtos
              farmacêuticos e equipamentos médicos. Nossa missão é contribuir
              para a saúde e o bem-estar da população, oferecendo acesso a
              medicamentos e produtos de qualidade, com a segurança e
              confiabilidade que o sector exige.
            </p>
            <ul>
              <li>
                <i className="fa-solid fa-vial-circle-check"></i>
                <div>
                  <h5>Cumprimento Rigoroso das Normas Regulatórias</h5>
                  <p>
                    Especializada em regulamentação local e global, a empresa
                    agiliza a conformidade legal dos produtos, o que gera
                    confiança e segurança para os parceiros e consumidores.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-pump-medical"></i>
                <div>
                  <h5>Variedade de Produtos e Equipamentos</h5>
                  <p>
                    Além de medicamentos, a empresa fornece equipamentos médicos
                    e hospitalares, garantindo uma solução completa para as
                    necessidades de saúde do cliente.
                  </p>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-heart-circle-xmark"></i>
                <div>
                  <h5>Soluções de Suprimento Personalizadas</h5>
                  <p>
                    Oferece opções flexíveis de cadeia de suprimentos, com
                    planejamento de estoque e reposição para clientes
                    corporativos, evitando faltas e melhorando a eficiência.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
