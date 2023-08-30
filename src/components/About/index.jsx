import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import cv from "../../assets/GeolChrisKimResume.pdf"
import BarLoader from 'react-spinners/ScaleLoader'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [showSpinner, setShowSpinner] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
        const timer = setTimeout(() => {
            setShowSpinner(false);
          }, 1000); // Adjust the time (in milliseconds) after which the spinner should disappear
      }, [])

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"About Me".split("")}
                        idx={15}
                        />
                </h1>

                <p>
                    I'm a recent graduate of the University of Washington-Bothell's Computer Science and 
                    Software Engineering program, and pursuing my dream of a long and fruitful career in Software Developement. 
                </p>
                <p>
                    I'm a naturally curious and analytical person. I find my best qualities to be my patience, and ability to converse and learn from others.
                    I enjoy meeting new people through technology, jiu jitsu, Snowboarding, films, and soccer. 
                </p>
                <p>
                    I was born in Seoul, Korea and moved all around the USA before residing in Redmond, Washington.
                </p>

                <a className='flat-button' target="_blank" href={cv}>My CV</a>
            </div>

            <div className='stage-cube-cont'>
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faPython} />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                </div>
            </div>
        </div>
        <div className="spinner">
            <BarLoader color="#e5e600" loading={showSpinner}/>
        </div>
        </>
    )
}

export default About