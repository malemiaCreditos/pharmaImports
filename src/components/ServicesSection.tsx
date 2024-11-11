"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const ServicesSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Serviços</h2>
        <p>
          Nossos serviços permitem à Pharma Imports Mozambique atender com
          eficiência e segurança às necessidades do setor farmacêutico no país.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="service-item  position-relative">
              <div className="icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Importação de Produtos Farmacêuticos</h3>
              </a>
              <p>
                Importação de medicamentos, suplementos, e equipamentos médicos
                de fornecedores certificados e regulamentados.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-pills"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Distribuição Logística e Armazenamento</h3>
              </a>
              <p>
                Armazenamento em conformidade com as normas de segurança e
                distribuição para hospitais, clínicas, farmácias e outros pontos
                de venda em todo o país.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-hospital-user"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Atendimento a Pedidos Corporativos</h3>
              </a>
              <p>
                Serviços personalizados para grandes instituições de saúde e
                clientes corporativos, incluindo ofertas exclusivas e entregas
                em larga escala.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-dna"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Fornecimento de Equipamentos Médicos e Hospitalares</h3>
              </a>
              <p>
                Importação e fornecimento de equipamentos médicos e
                hospitalares, incluindo dispositivos para diagnóstico e
                equipamentos de proteção individual (EPI).
              </p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-wheelchair"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Suporte em Processos Regulatórios</h3>
              </a>
              <p>
                Consultoria e suporte em processos de registro e regulamentação
                junto às autoridades de saúde de Moçambique para novos produtos.
              </p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service-item position-relative">
              <div className="icon">
                <i className="fas fa-notes-medical"></i>
              </div>
              <a href="#" className="stretched-link">
                <h3>Assessoria em Cadeia de Suprimentos</h3>
              </a>
              <p>
                Soluções para otimização da cadeia de suprimentos, garantindo
                estoque contínuo e redução de custos operacionais.
              </p>
              <a href="#" className="stretched-link"></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
