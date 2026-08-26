import About from "@/components/About";
import Certifications from "@/components/Certifications";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      {/* About Section */}
      {/* <section id="about" className="min-h-screen flex items-center justify-center">
        <h1>About Section - Coming Soon</h1>
      </section> */}
      <About />

      {/* Services Section
      <section id="services" className="min-h-screen flex items-center justify-center">
        <h1>Services Section - Coming Soon</h1>
      </section> */}
      <Services />

      {/* Projects Section */}
      {/* <section id="projects" className="min-h-screen flex items-center justify-center">
        <h1>Projects Section - Coming Soon</h1>
      </section> */}
      <Projects />

      {/* Certifications Section */}
      {/* <section id="certifications" className="min-h-screen flex items-center justify-center">
        <h1>Certifications Section - Coming Soon</h1>
      </section> */}
      <Certifications />

      {/* Experience Section */}
      {/* <section id="experience" className="min-h-screen flex items-center justify-center">
        <h1>Experience Section - Coming Soon</h1>
      </section> */}
      <Experience />

      {/* Education Section */}
      {/* <section id="education" className="min-h-screen flex items-center justify-center">
        <h1>Education Section - Coming Soon</h1>
      </section> */}
      <Education />

      {/* Contact Section
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <h1>Contact Section - Coming Soon</h1>
      </section> */}
      <ContactForm />
      {/* Footer */}
      {/* <footer className="py-8 text-center">
        <h1 className="text-2xl">Footer - Coming Soon</h1>
      </footer> */}
      <Footer />
    </div>
  );
}