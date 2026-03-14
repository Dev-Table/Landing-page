import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h1 className="about-title">About <span className="highlight">DevTable</span></h1>
        <p className="about-subtitle">
          We are a team of passionate developers dedicated to transforming businesses through cutting-edge technology solutions.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with innovative digital solutions that drive growth, efficiency, and competitive advantage in the modern digital landscape.
            </p>

            <h2>Our Vision</h2>
            <p>
              To be the leading technology partner for businesses seeking digital transformation, delivering exceptional results through expertise and innovation.
            </p>

            <h2>Our Values</h2>
            <ul>
              <li>Commitment and honesty towards the client</li>
              <li>Professional awareness</li>
              <li>Complete adaptation to customer requirements</li>
              <li>Efficiency and comprehension</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
