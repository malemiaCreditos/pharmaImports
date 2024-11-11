"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const AppointmentsSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="appointment" className="appointment section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Solicitar Serviço</h2>
        <p>
          Escolher a Pharma Imports Mozambique é garantir um serviço confiável e
          comprometido com a qualidade que você procura.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <form
          action="forms/appointment.php"
          method="post"
          role="form"
          className="php-email-form"
        >
          <div className="row">
            <div className="col-md-4 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Seu Nome"
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Seu Email"
              />
            </div>
            <div className="col-md-4 form-group mt-3 mt-md-0">
              <input
                type="tel"
                className="form-control"
                name="phone"
                id="phone"
                placeholder="Seu Contacto"
              />
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-4 form-group mt-3">
              <input
                type="datetime-local"
                name="date"
                className="form-control datepicker"
                id="date"
                placeholder="Appointment Date"
              />
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="department" id="department" className="form-select">
                <option value="">Select Department</option>
                <option value="Department 1">Department 1</option>
                <option value="Department 2">Department 2</option>
                <option value="Department 3">Department 3</option>
              </select>
            </div>
            <div className="col-md-4 form-group mt-3">
              <select name="doctor" id="doctor" className="form-select">
                <option value="">Select Doctor</option>
                <option value="Doctor 1">Doctor 1</option>
                <option value="Doctor 2">Doctor 2</option>
                <option value="Doctor 3">Doctor 3</option>
              </select>
            </div>
          </div> */}

          <div className="form-group mt-3">
            <textarea
              className="form-control"
              name="message"
              placeholder="Descrição (Opcional)"
            ></textarea>
          </div>
          <div className="mt-3">
            <div className="loading">Enviando</div>
            <div className="error-message"></div>
            <div className="sent-message">Enviado</div>
            <div className="text-center">
              <button type="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
