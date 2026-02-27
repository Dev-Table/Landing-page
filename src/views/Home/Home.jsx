import './Home.css'
import CTAButton from '../../components/CTAButton/CTAButton'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'

const Home = () => {
  const features = [
    { title: "AI Integration", description: "Harness the power of artificial intelligence to automate and optimize your workflows", icon: "Icon1" },
    { title: "Cloud Solutions", description: "Scalable cloud infrastructure that grows with your business needs", icon: "Icon2" },
    { title: "Cybersecurity", description: "Enterprise-grade security to protect your digital assets and data", icon: "Icon2" },
  ]

  return (
    <>
      <section className="hero">
        <div className="tech-grid-bg">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            The Future of <span className="highlight">Technology</span> Starts Here
          </h1>
          <p className="hero-subtitle">
            We build cutting-edge digital solutions that transform your business into a technological powerhouse
          </p>
          <div className="hero-buttons">
            <PrimaryButton>Start Your Journey</PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">Revolutionary Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon"></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat">
              <div className="stat-number">?</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime Guaranteed</div>
            </div>
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home