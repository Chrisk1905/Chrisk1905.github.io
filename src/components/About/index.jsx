import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
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
                    Software Engineering program, and pursuing my dream of a long and fruitful career in Software Engineering. 
                </p>
                <p>
                    I'm a naturally curious and analytical person. I find my best quality to be my ability to listen to others.
                    I enjoy meeting new people, Snowboarding, Jujitsu, 
                    Stanley Kubrick films, and watching Tottenahm Hotspur, most of the time. 
                </p>
                <p>
                    I was born in Seoul, Korea, and reside in Redmond, Washington.
                </p>
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
        <Loader type="pacman" />
        </>
    )
}

export default About