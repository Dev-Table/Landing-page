import './Contact.css'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h1 className="contact-title">Get in <span className="highlight">Touch</span></h1>
        <p className="contact-subtitle">
          Ready to start your next project? We're here to help bring your ideas to life.
        </p>

        {/* <div className="contact-media"> */}
        {/*   <div className="media-wrapper"> */}
        {/*     <img  */}
        {/*       src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lxFvC0wuaRflw/giphy.gif"  */}
        {/*       alt="Contact us illustration"  */}
        {/*       className="contact-gif" */}
        {/*     /> */}
        {/*   </div> */}
        {/* </div> */}

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FiMail />
              </div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>devtable276@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FiPhone />
              </div>
              <div className="contact-details">
                <h3>Phone</h3>
                <p>+52 33 2708 3945</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FiMapPin />
              </div>
              <div className="contact-details">
                <h3>Location</h3>
                <p>Available remotely worldwide</p>
              </div>
            </div>
          </div>

          {/* <div className="contact-form"> */}
          {/*   <h2>Send us a message</h2> */}
          {/*   <form> */}
          {/*     <div className="form-group"> */}
          {/*       <label htmlFor="name">Name</label> */}
          {/*       <input type="text" id="name" name="name" required /> */}
          {/*     </div> */}
          {/*     <div className="form-group"> */}
          {/*       <label htmlFor="email">Email</label> */}
          {/*       <input type="email" id="email" name="email" required /> */}
          {/*     </div> */}
          {/*     <div className="form-group"> */}
          {/*       <label htmlFor="project">Project Type</label> */}
          {/*       <select id="project" name="project"> */}
          {/*         <option value="">Select a service</option> */}
          {/*         <option value="landing">Landing Page</option> */}
          {/*         <option value="mobile">Mobile App</option> */}
          {/*         <option value="desktop">Desktop App</option> */}
          {/*         <option value="web">Web App</option> */}
          {/*       </select> */}
          {/*     </div> */}
          {/*     <div className="form-group"> */}
          {/*       <label htmlFor="message">Message</label> */}
          {/*       <textarea id="message" name="message" rows="5" required></textarea> */}
          {/*     </div> */}
          {/*     <PrimaryButton type="submit">Send Message</PrimaryButton> */}
          {/*   </form> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default Contact
