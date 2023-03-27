import Footer from "../../components/organisms/Footer";
import Navbar from "../../components/organisms/Navbar";
import Head from "next/head";

export default function Detail() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Sejarah | JQH IAC UNU Yogyakarta</title>

        <meta property="og:site_name" content="JQH IAC UNU Yogyakarta" />
        <link rel="shortcut icon" href="/icon/logo.ico" type="image/x-icon" />
      </Head>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-5 col-12 pb-30 pb-md-0 pe-md-25 text-md-start">
              <div className="row align-items-center">
                <div className="col-md-12 12">
                  <img
                    src="/img/Thumbnail-1.png"
                    width="600"
                    height="400"
                    className="img-fluid"
                    alt=""
                  />
                </div>

                <div className="col-md-12 col-12 d-md-none d-block">
                  <h2 className="text-xl fw-bold color-palette-1 text-start mb-10 mt-3">
                    JQH PWNU Adakaha acara di gedung pwnudalam rangka halaqoh
                    kebangsaaan
                  </h2>
                  <p className="text-sm color-palette-2 text-start mb-2">
                    Category: Event
                  </p>
                  <p className="text-sm color-palette-2 text-start mb-0">
                    27 Agustus 2022
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-7 col-12 ps-md-25">
              <div className="pb-50 d-md-block d-none">
                <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
                  JQH PWNU Adakaha acara di gedung pwnudalam rangka halaqoh
                  kebangsaaan
                </h2>
                <a
                  href="/#"
                  className="btn btn-success btn-sm text-white text-sm color-palette-2 mb-0 mt-3"
                >
                  Category : Event
                </a>
                <p className="color-palette-2 mb-0 mt-3">27 Agustus 2022</p>
              </div>
              <hr />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <p className="paragraf mt-3 mt-md-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
