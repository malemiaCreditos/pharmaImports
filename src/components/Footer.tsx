"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
export const Footersection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <footer id="footer" className="footer light-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Image
              alt="Pharma logo"
              src="/pharmaLogo.png"
              className="img"
              width={80}
              height={100}
            />
            <div className="footer-contact pt-3">
              <p>Bairro do Aeroporto A, Rua do Camões</p>
              <p>Cidade de Maputo</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+258 21 467 387</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span>pharmaimports@malemiagroup.co.mz</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
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
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Serviços</a>
              </li>
              <li>
                <a href="#">Termos</a>
              </li>
              <li>
                <a href="#">Politicas</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nossos Serviços</h4>
            <ul>
              <li>
                <a href="#">Importação de Produtos Farmacêuticos</a>
              </li>
              <li>
                <a href="#">Distribuição Logística e Armazenamento</a>
              </li>
              <li>
                <a href="#">Atendimento a Pedidos Corporativos</a>
              </li>
              <li>
                <a href="#">Suporte em Processos Regulatórios</a>
              </li>
              <li>
                <a href="#">
                  Fornecimento de Equipamentos Médicos e Hospitalares
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Produtos</h4>
            <ul>
              <li>
                <a href="#">Gel (Ultrassonografia)</a>
              </li>
              <li>
                <a href="#">Sapatilhas Descartáveis</a>
              </li>
              <li>
                <a href="#">Batas Cirurgicas Descartáveis</a>
              </li>
              <li>
                <a href="#"> Luvas de Exame Sem Pó</a>
              </li>
              <li>
                <a href="#">Cateter</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Provincias de Destribuição</h4>
            <ul>
              <li>
                <a href="#">Maputo</a>
              </li>
              <li>
                <a href="#">Inhambane</a>
              </li>
              <li>
                <a href="#">Gaza</a>
              </li>
              <li>
                <a href="#">Sofala</a>
              </li>
              <li>
                <a href="#">Tete</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>{" "}
          <strong className="px-1 sitename">Pharma Imports Mozambique</strong>{" "}
          <span>Todos Direitos Reservdos</span>
        </p>
        <div className="credits"></div>
      </div>
    </footer>
  );
};
