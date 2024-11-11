"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const Header = () => {
  useEffect(() => {
    aos.init(); 
  }, []);
  return (
    <>
      <header id="header" className="header sticky-top">
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:pharmaimports@malemiagroup.co.mz">
                  pharmaimports@malemiagroup.co.mz
                </a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+258 21 467 387</span>
              </i>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a href="#" className="twitter">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <Image
              alt="Pharma logo"
              src="/pharmaLogo.png"
              className="img"
              width={80}
              height={100}
            />

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <a href="#hero" className="active">
                    Início
                    <br />
                  </a>
                </li>
                <li>
                  <a href="#about">Sobre</a>
                </li>
                <li>
                  <a href="#services">Serviços</a>
                </li>
                <li>
                  <a href="#departments">Departments</a>
                </li>
                <li>
                  <a href="#doctors">Doctors</a>
                </li>
                <li>
                  <a href="#contact">Contactos</a>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <a className="cta-btn d-none d-sm-block" href="#appointment">
              Solicitar Serviço
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
