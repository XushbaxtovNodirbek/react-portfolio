import './services.css'
import { IoCheckmarkDone } from "react-icons/io5";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Wireframing</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Prototyping</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Mockups</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Responsive Design</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Mobile App Design</p></li>
          </ul>

        </article>
        {/* End of UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Responsive Web Development</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Frontend Development</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Backend Development</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Full Stack Development</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Web App Development</p></li>
          </ul>

        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Copywriting</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Content Writing</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Editing</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Proofreading</p></li>
            <li><IoCheckmarkDone className='service__list-icon' /><p>Video Editing</p></li>
          </ul>

        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services