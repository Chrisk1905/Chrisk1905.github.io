import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-c.png'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = "hris".split("")
    const jobArray = "Software Engineer".split("")


    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
      
    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}> I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle}></img>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={14} />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={19} />

                </h1>
                <h2> Software Engineer / Web Developer / Computer Science Graduate  </h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home