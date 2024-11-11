"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const DepartmentsSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <section id="departments" className="departments section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Produtos</h2>
        <p>
          Esses produtos refletem o compromisso da Pharma Imports Mozambique em
          proporcionar soluções de saúde completas e confiáveis para seus
          clientes.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  href="#departments-tab-1"
                >
                  Gel (Ultrassonografia)
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#departments-tab-2"
                >
                  Sapatilhas Descartáveis
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#departments-tab-3"
                >
                  Batas Cirurgicas Descartáveis
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#departments-tab-4"
                >
                  Luvas de Exame Sem Pó
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="tab"
                  href="#departments-tab-5"
                >
                  Cateter
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="departments-tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Gel (Ultrassonografia)</h3>
                    <p className="fst-italic">
                      Gel para Ultrassonografia é um produto de alta qualidade,
                      desenvolvido para garantir máxima eficiência em exames de
                      imagem.
                    </p>
                    <p>
                      Com uma formulação suave e de alta condutividade, ele
                      facilita a transmissão das ondas ultrassônicas,
                      proporcionando imagens mais nítidas e precisas. Além
                      disso, é inodoro, hipoalergênico e não irritante,
                      garantindo conforto tanto para o paciente quanto para o
                      profissional de saúde. O gel é fácil de aplicar e remover,
                      sem deixar resíduos, sendo ideal para uso em clínicas,
                      hospitais e consultórios médicos.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <Image
                      src="/assets/img/gelServico.png"
                      alt=""
                      className="img-fluid"
                      height={575}
                      width={668}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-2">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Sapatilhas Descartáveis</h3>
                    <p className="fst-italic">
                      Qui laudantium consequatur laborum sit qui ad sapiente
                      dila parde sonata raqer a videna mareta paulona marka
                    </p>
                    <p>
                      Ea ipsum voluptatem consequatur quis est. Illum error
                      ullam omnis quia et reiciendis sunt sunt est. Non aliquid
                      repellendus itaque accusamus eius et velit ipsa
                      voluptates. Optio nesciunt eaque beatae accusamus lerode
                      pakto madirna desera vafle de nideran pal
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <Image
                      src="/assets/img/gelServico.png"
                      alt=""
                      className="img-fluid"
                      height={575}
                      width={668}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-3">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Batas Cirurgicas Descartáveis</h3>
                    <p className="fst-italic">
                      Eos voluptatibus quo. Odio similique illum id quidem non
                      enim fuga. Qui natus non sunt dicta dolor et. In
                      asperiores velit quaerat perferendis aut
                    </p>
                    <p>
                      Iure officiis odit rerum. Harum sequi eum illum corrupti
                      culpa veritatis quisquam. Neque necessitatibus illo rerum
                      eum ut. Commodi ipsam minima molestiae sed laboriosam a
                      iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et
                      harum voluptatem optio quae
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <Image
                      src="/assets/img/gelServico.png"
                      alt=""
                      className="img-fluid"
                      height={575}
                      width={668}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-4">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Luvas de Exame Sem Pó</h3>
                    <p className="fst-italic">
                      Totam aperiam accusamus. Repellat consequuntur iure
                      voluptas iure porro quis delectus
                    </p>
                    <p>
                      Eaque consequuntur consequuntur libero expedita in
                      voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                      debitis quis velit. Eum ex maxime error in consequatur
                      corporis atque. Eligendi asperiores sed qui veritatis
                      aperiam quia a laborum inventore
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <Image
                      src="/assets/img/gelServico.png"
                      alt=""
                      className="img-fluid"
                      height={575}
                      width={668}
                    />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="departments-tab-5">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Cateter</h3>
                    <p className="fst-italic">
                      Omnis blanditiis saepe eos autem qui sunt debitis porro
                      quia.
                    </p>
                    <p>
                      Exercitationem nostrum omnis. Ut reiciendis repudiandae
                      minus. Omnis recusandae ut non quam ut quod eius qui.
                      Ipsum quia odit vero atque qui quibusdam amet. Occaecati
                      sed est sint aut vitae molestiae voluptate vel
                    </p>
                  </div>
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <Image
                      src="/assets/img/gelServico.png"
                      alt=""
                      className="img-fluid"
                      height={575}
                      width={668}
                    />
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
