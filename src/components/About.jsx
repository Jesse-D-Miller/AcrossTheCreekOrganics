function About() {
  return (
    <div className="about-container">
      <h2>About Us</h2>
      <div className="about-flex">
        <img
          src="/images/atcoAerialView.jpg"
          alt="Across The Creek Organics Farm"
          className="about-image"
        />
        <div>
          <p>
            Our family has been growing disease- and virus-free seed potatoes in
            Pemberton for over 50 years, across four generations of farming.
          </p>
          <p>
            Pemberton is a protected seed potato region. Its high mountain
            geography and isolation help limit outside disease pressure,
            providing a strong foundation for producing clean, reliable seed.
          </p>
          <p>
            We are <strong>Organic Certified</strong> by PACS and
            <strong> Certified Seed Potato growers</strong> with the Canadian
            Food Inspection Agency. As a small, family-run farm, we remain
            hands-on at every stage and focus on producing consistently
            high-quality seed potatoes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
