import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Head from "next/head";

export default function Sejarah() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Sejarah | JQH IAC UNU Yogyakarta</title>

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
      </Head>
      <Navbar />
      <section className="sejarah pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="text-center">
            <img src="/img/sejarah.jpg" alt="" className="gambar-sejarah" />
          </div>
          <div className="d-flex justify-content-center">
            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10 mt-3 mt-md-5">
              Sejarah
            </h2>
          </div>
          <div className="d-flex justify-content-center">
            <p className="paragraf mt-3">
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
