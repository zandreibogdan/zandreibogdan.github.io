import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import instaproject from '../../assets/images/insta-project.png'

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="portfolio">
        <div className="portfolio-header">
          <h2 className="portfolio-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'S',
                'o',
                'm',
                'e',
                ' ',
                'o',
                'f',
                ' ',
                'm',
                'y',
                ' ',
                'w',
                'o',
                'r',
                'k',
              ]}
              idx={8}
            />
          </h2>
        </div>

        <div className="portfolio-body">
          <div className="portfolio-card">
            <a href="https://instaggram-cloned.netlify.app/">
              <img src={instaproject} alt="insta-project" />
            </a>
            <h3 className="portfolio-card-title">Project title</h3>
            <p className="portfolio-card-p">Project description</p>
          </div>

          <div className="portfolio-card">
            <a href="https://instaggram-cloned.netlify.app/">
              <img src={instaproject} alt="insta-project" />
            </a>
            <h3 className="portfolio-card-title">Project title</h3>
            <p className="portfolio-card-p">Project description</p>
          </div>

          <div className="portfolio-card">
            <a href="https://instaggram-cloned.netlify.app/">
              <img src={instaproject} alt="insta-project" />
            </a>
            <h3 className="portfolio-card-title">Project title</h3>
            <p className="portfolio-card-p">Project description</p>
          </div>

          <div className="portfolio-card">
            <a href="https://instaggram-cloned.netlify.app/">
              <img src={instaproject} alt="insta-project" />
            </a>
            <h3 className="portfolio-card-title">Project title</h3>
            <p className="portfolio-card-p">Project description</p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
