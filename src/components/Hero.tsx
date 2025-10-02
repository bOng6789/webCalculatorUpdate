import Converter from "./Converter";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <h1 className="animate">Professional Unit Converter</h1>
        <p className="hero-subtitle animate">
          The <span className="highlight">most comprehensive</span> collection of conversion calculators
        </p>
        <p className="hero-description animate">
          Convert between units instantly with our advanced calculators. From automotive to construction, health to mathematics - all your conversion needs in one place.
        </p>
        <Converter />
      </div>
    </section>
  );
}
