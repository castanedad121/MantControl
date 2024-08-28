import React from "react";
import { Header, CtaSection, Contact, Footer } from "../components/index";

const Landing = () => {
  return (
    <div>
      <Header />
      <section id="about">
        <CtaSection />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
