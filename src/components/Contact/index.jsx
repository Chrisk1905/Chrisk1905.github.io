import { useEffect, useState, useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import 'leaflet/dist/leaflet.css'
import BarLoader from 'react-spinners/ScaleLoader'
 
const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showSpinner, setShowSpinner] = useState(true);
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000); // Adjust the time (in milliseconds) after which the spinner should disappear
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_gfasvyv', 'template_w0p2svb', refForm.current, 'oEG5mMv9HdEWs6OjH')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I have a formal education in Computer Science, and working experiece in
            enterprise cloud, iOS, and frontend web development.
            Send me any bussiness inquiries, or a witty prose. 
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="map-wrap">
          <MapContainer center={[47.6018, -122.2710]} zoom={11}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </div>
        <div className="info-map">
          Geol "Chris" Kim,
          <br />
          Redmond, Washington, USA 
          <br />
          <span>Chrisk1905@gmail.com</span>
        </div>
      </div>
      <div className="spinner">
            <BarLoader color="#e5e600" loading={showSpinner}/>
        </div>
    </>
  )
}



export default Contact