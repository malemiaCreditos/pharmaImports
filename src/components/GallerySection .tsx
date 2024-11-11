"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const GallerySection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="gallery" className="gallery section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Galeria</h2>
        {/* <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p> */}
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 2.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 2.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 3.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 3.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 4.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 4.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 5.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 5.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 6.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 6.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 7.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 7.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 8.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 8.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-4">
            <div className="gallery-item">
              <a
                href="assets/img/gallery/Frame 9.png"
                className="glightbox"
                data-gallery="images-gallery"
              >
                <Image
                  src="/assets/img/gallery/Frame 9.png"
                  alt=""
                  className="img-fluid"
                  width={2926}
                  height={4096}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
