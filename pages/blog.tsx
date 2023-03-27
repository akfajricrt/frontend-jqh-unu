import FeaturedBlog from "../components/organisms/FeaturedBlog";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Blog & Artikel | JQH IAC UNU Yogyakarta</title>

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
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-start mb-30 mt-3">
            Blog & Artikel
          </h2>

          <div className="d-flex mt-4 mb-5">
            <a href="/#" className="btn btn-success active">
              All
            </a>
            <a href="/#" className="btn">
              Event
            </a>
            <a href="/#" className="btn">
              News
            </a>
          </div>
        </div>
        <FeaturedBlog />
      </section>
      <Footer />
    </>
  );
}
