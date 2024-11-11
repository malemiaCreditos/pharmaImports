"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const ContactSection = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contactos</h2>
        <p>
          stamos aqui para responder às suas perguntas e ajudar você a encontrar
          as soluções de saúde e produtos farmacêuticos de que precisa.
        </p>
      </div>

      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5172.896042071165!2d32.56845097637248!3d-25.93403439511126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a8fc5b31d45%3A0x2d25c08f61c3b712!2sR.%20de%20Cam%C3%B5es%2C%20Maputo!5e0!3m2!1spt-PT!2smz!4v1731303136326!5m2!1spt-PT!2smz"
          // width="w-full"
          height="450"
          style={{ border: "0", width: "100%", height: "270px" }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Endereço</h3>
                <p>Bairro do Aeroporto A, Rua do Camões, Cidade de Maputo</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Phone</h3>
                <p>+258 21 467 387</p>
              </div>
            </div>

            <div
              className="info-item d-flex"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email</h3>
                <p>pharmaimports@malemiagroup.co.mz</p>
              </div>
            </div>
          </div>

          <div className="col-lg-8">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Nome"
                  />
                </div>

                <div className="col-md-6 ">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                  />
                </div>

                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Titulo"
                  />
                </div>

                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    placeholder="Mensagem"
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading">Carregando</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Enviado</div>

                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
