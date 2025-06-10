import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
  const sectionRef = useRef()
  const project1Ref = useRef()
  const project2Ref = useRef()
  const project3Ref = useRef()

  useGSAP(() => {
    // Fade in the whole section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    )

    const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

    projects.forEach((card, index) => {
      if (!card) return
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.2 * index,
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On Demand Rides Made Simple with a Powerful, User-Friendly App Called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An App built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Library Management Platform" />
              </div>
              <h2>Library Management System</h2>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/images/project3.png" alt="YC Directory" />
              </div>
              <h2>YC Directory - StartUp Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection
