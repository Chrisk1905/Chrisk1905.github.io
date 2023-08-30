import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-c.png'
import profile_pic from '../../assets/images/profile_pic.jpeg'
import BarLoader from 'react-spinners/ScaleLoader'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [showSpinner, setShowSpinner] = useState(true);
    const nameArray = "hris".split("")
    const jobArray = "Software Engineer".split("")
    

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
        setTimeout(() => {
            setShowSpinner(false);
          }, 1000); // Adjust the time (in milliseconds) after which the spinner should disappear
      
      }, [])
      
    return (
        <>
        <div className='container home-page'>
            <div className='hero'>
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
            <div className='pic-zone'>
                <img src={profile_pic} />
            </div>
        </div>
        <div className="spinner">
            <BarLoader color="#e5e600" loading={showSpinner}/>
        </div>
        </>
    )
}

export default Home