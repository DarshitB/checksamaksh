import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className="main_container">
      <Head>
        <title>Samaksh Trade Consultants</title>
        <meta
          name="description"
          content="we provide web and app services, Software Services, Business Marketing(B2B,B2E), Digital Marketing, Video Marketing, Search Engine Optimization(SEO), Graphics Design, Business To Customer Services(B2C)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
      </div>
    </div>
  );
}
