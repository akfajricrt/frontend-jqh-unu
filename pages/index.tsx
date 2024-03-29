import type { NextPage } from "next";
import { useEffect } from "react";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import PilihanDivisi from "../components/organisms/PilihanDivisi";
import FeaturedGallery from "../components/organisms/FeaturedGallery";
import Story from "../components/organisms/Story";
import Reached from "../components/organisms/Reached";
import Footer from "../components/organisms/Footer";
import Head from "next/head";

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>JQH IAC UNU Yogyakarta</title>

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
      <MainBanner />
      <PilihanDivisi />
      <FeaturedGallery />
      <Story />
      <Reached />
      <Footer />
    </>
  );
};

export default Home;
