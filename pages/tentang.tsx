import Script from "next/script";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Head from "next/head";

export default function Tentang() {
  return (
    <>
      <Head>
        <>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          <title>Tentang | JQH IAC UNU Yogyakarta</title>

          <meta
            name="description"
            content="Tempat Belajar berbagai kesenian islami, bisa juga bagi para penghafal al-qur'an"
          />
          <meta
            name="keywords"
            content="jqh, unujogja, jqhiac, ukmjqh, tilawah, kaligrafi, tahfidz, hadroh"
          />
          <meta name="author" content="Ahmad Khoirul Fajri" />

          <meta
            property="og:title"
            content="Tempat Belajar berbagai kesenian islami, bisa juga bagi para penghafal al-qur'an"
          />
          <meta
            property="og:description"
            content="Tempat Belajar berbagai kesenian islami, bisa juga bagi para penghafal al-qur'an"
          />
          <meta property="og:url" content="https://jqh.unu-jogja.ac.id" />

          <meta property="og:site_name" content="JQH IAC UNU Yogyakarta" />
          <link rel="shortcut icon" href="/icon/logo.ico" type="image/x-icon" />
        </>
      </Head>
      <Navbar />
      <section className="tentang pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="text-center">
            <img src="/img/tentang.jpg" alt="" className="gambar-tentang" />
          </div>
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-5 col-12 pb-30 pb-md-0 pe-md-25 text-md-start">
              <h2 className="text-xl fw-bold color-palette-1 text-start mb-10 mt-3 mt-md-5">
                Tentang
              </h2>
              <p className="paragraf mt-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-7 col-12 ps-md-25">
              <div className="visi-misi">
                <div className="visi">
                  <h2 className="text-xl fw-bold color-palette-1 text-start mb-10 mt-3 mt-md-5">
                    Visi
                  </h2>
                  <div>
                    <div className="d-flex align-items-start gap-3">
                      <img src="/icon/ic-check.svg" alt="jqh" />
                      <span className="paragraf">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/icon/ic-check.svg" alt="jqh" />
                      <span className="paragraf">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/icon/ic-check.svg" alt="jqh" />
                      <span className="paragraf">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="misi">
                  <h2 className="text-xl fw-bold color-palette-1 text-start mb-10 mt-3">
                    Misi
                  </h2>
                  <div className="keypoints">
                    <div className="d-flex align-items-start gap-3">
                      <img src="/icon/ic-check.svg" alt="jqh" />
                      <span className="paragraf">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/icon/ic-check.svg" alt="jqh" />
                      <span className="paragraf">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>

                    <div className="d-flex align-items-start gap-3">
                      <img src="/icon/ic-check.svg" alt="jqh" />
                      <span className="paragraf">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-location">
              <h6>JQH IAC Location</h6>
              <div className="map-placeholder">
                <div className="maps">
                  <img className="img-fluid" src="/img/maps.png" alt="" />
                  <div
                    className="absolute d-flex justify-content-center align-items-center"
                    id="hoverMe"
                  >
                    <a
                      href="https://www.google.com/maps/dir/-7.8268938,110.366628/jqh+unu/@-7.8258385,110.379007,18.92z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e7a57a0ee12438b:0xbb49a1f4a8a992d5!2m2!1d110.3767659!2d-7.8195232"
                      className="btn-navy"
                      id="btn-maps"
                    >
                      View in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <Script>
        {`
        document
        .getElementById("hoverMe")
        .addEventListener("mouseover", mouseOver);
      document.getElementById("hoverMe").addEventListener("mouseout", mouseOut);

      function mouseOver() {
        document.getElementById("btn-maps").style.opacity = "100";
        document.getElementById("hoverMe").style.backgroundColor = "#151a2638";
      }

      function mouseOut() {
        document.getElementById("btn-maps").style.opacity = "0";
        document.getElementById("hoverMe").style.backgroundColor =
          "transparent";
      }
        `}
      </Script>
    </>
  );
}
