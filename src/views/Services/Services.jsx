import './Services.css'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton'

const Services = () => {
  const navigate = useNavigate()
  
  const services = [
    {
      title: "Landing Pages Development",
      description: "High-converting landing pages designed to capture leads and drive conversions with modern UI/UX principles and optimized performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "A/B Testing Ready"],
      icon: "🚀"
    },
    {
      title: "Mobile Apps Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android devices.",
      features: ["iOS & Android", "Cross-Platform", "Offline Support", "Push Notifications"],
      icon: "📱"
    },
    {
      title: "Desktop Apps Development",
      description: "Robust desktop applications built with modern frameworks for Windows, macOS, and Linux platforms.",
      features: ["Cross-Platform", "Native Performance", "Auto-Updates", "Secure Storage"],
      icon: "💻"
    },
    {
      title: "Web Apps Development",
      description: "Full-featured web applications with scalable architecture, real-time capabilities, and enterprise-grade security.",
      features: ["Scalable Architecture", "Real-time Updates", "Cloud Integration", "API Development"],
      icon: "🌐"
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <div className="services-header">
          <h1 className="services-title">Our <span className="highlight">Services</span></h1>
          <p className="services-subtitle">
            Transform your business with our comprehensive development solutions tailored to your specific needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <div className="service-actions">
                <PrimaryButton onClick={() => navigate('/contact')}>Get Started</PrimaryButton>
                <SecondaryButton onClick={() => navigate('/about')}>Learn More</SecondaryButton>
              </div>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Let's discuss how we can bring your ideas to life with our expert development services.</p>
            <div className="cta-buttons">
              <PrimaryButton onClick={() => navigate('/contact')}>Get a Free Quote</PrimaryButton>
              <SecondaryButton onClick={() => navigate('/contact')}>Schedule a Consultation</SecondaryButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services