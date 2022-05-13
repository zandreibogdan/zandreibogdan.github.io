import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import instaproject from '../../assets/images/insta-project.png'
import tenzies from '../../assets/images/tenzies.png'
import sketchclone from '../../assets/images/etch-a-sketch.png'
import warzone from '../../assets/images/war-zone.png'

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
            <h3 className="portfolio-card-title">Instagram clone</h3>
            <p className="portfolio-card-p">
              Made using Next.js, Firebase v9, Tailwind CSS and more.
            </p>
          </div>

          <div className="portfolio-card">
            <a href="https://zandreibogdan.github.io/tenzies/">
              <img src={tenzies} alt="insta-project" />
            </a>
            <h3 className="portfolio-card-title">Tenzies</h3>
            <p className="portfolio-card-p">
              Made as a way to train and improve React.js skills.{' '}
            </p>
          </div>

          <div className="portfolio-card">
            <a href="https://zandreibogdan.github.io/sketch-clone/">
              <img src={sketchclone} alt="sketch-clone" />
            </a>
            <h3 className="portfolio-card-title">Etch a sketch.</h3>
            <p className="portfolio-card-p">Made with React.js</p>
          </div>

          <div className="portfolio-card">
            <a href="https://war-zone.vercel.app/">
              <img src={warzone} alt="insta-project" />
            </a>
            <h3 className="portfolio-card-title">War zone</h3>
            <p className="portfolio-card-p">
              Made with Vanilla JavaScript, focusing on DOM Manipulation.
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
