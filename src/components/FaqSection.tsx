"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const FaqSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="faq" className="faq section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        {/* <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p> */}
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
            <div className="faq-container">
              <div className="faq-item faq-active">
                <h3>Quais produtos a Pharma Imports Mozambique oferece?</h3>
                <div className="faq-content">
                  <p>
                    A Pharma Imports Mozambique se especializa na importação e
                    distribuição de produtos farmacêuticos, incluindo
                    medicamentos, insumos médicos, equipamentos hospitalares e
                    outros produtos de saúde. Trabalhamos com marcas renomadas e
                    garantimos a qualidade e conformidade com as regulamentações
                    locais.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3>Como posso fazer um pedido?</h3>
                <div className="faq-content">
                  <p>
                    Você pode realizar um pedido entrando em contato conosco por
                    telefone, e-mail ou através do nosso formulário de contato
                    no site. Nossa equipe de vendas está pronta para fornecer
                    orientações e detalhes sobre os produtos disponíveis.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3>A Pharma Imports Mozambique faz entregas?</h3>
                <div className="faq-content">
                  <p>
                    Sim, realizamos entregas em todo o território de Moçambique.
                    Nossa logística é projetada para garantir que os produtos
                    cheguem aos nossos clientes com rapidez e segurança.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3>
                  Como posso saber se o produto está disponível em estoque?
                </h3>
                <div className="faq-content">
                  <p>
                    Para verificar a disponibilidade de um produto, entre em
                    contato conosco através do telefone ou e-mail. Nossa equipe
                    fornecerá informações detalhadas sobre o estoque actual e a
                    possibilidade de reposição, se necessário.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3>Os produtos têm garantia?</h3>
                <div className="faq-content">
                  <p>
                    Sim, todos os nossos produtos têm garantia, conforme as
                    condições específicas de cada fabricante. Para mais
                    informações sobre a garantia de um produto, entre em contato
                    com nossa equipe de atendimento ao cliente.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>

              <div className="faq-item">
                <h3>A empresa possui loja física?</h3>
                <div className="faq-content">
                  <p>
                    Sim, temos um ponto de atendimento localizado em Maputo,
                    onde os clientes podem visitar e fazer suas compras
                    pessoalmente. Para detalhes sobre o endereço e horário de
                    funcionamento, consulte a nossa seção de Contatos.
                  </p>
                </div>
                <i className="faq-toggle bi bi-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
