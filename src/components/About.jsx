function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-flex">
        <img
          src="src/assets/images/atcoAerialView.jpg"
          alt="Across The Creek Organics Farm"
          className="about-image"
        />
        <div>
          <p>
            Our family has been producing disease and virus free Seed Potatoes
            in Pemberton for over 50 years.
          </p>
          <p>
            We are Organic Certified by PACS and also Certified as Seed Potato
            growers by the Canadian Food Inspection Agency.
          </p>
          <p>
            The Pemberton Valleys high mountains and isolation protect our seed
            from virus and disease from other areas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
