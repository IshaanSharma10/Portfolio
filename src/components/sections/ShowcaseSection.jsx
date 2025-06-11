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
              <a target='blank' href="https://github.com/IshaanSharma10/Apple">
              <img src="/images/apple.png" alt="Apple" />
              </a>
            </div>
            <div className="text-content">
              <h2>
                Focussing on Pixel-Perfect UI ,Closely Mimicking Apple's Design Asthetics.
              </h2>
              <p className="text-white-50 md:text-xl">
                An App Built using React ,GSAP and ThreeJs with smooth Animations and 3D Visuals.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <a target='blank' href="https://github.com/IshaanSharma10">
                <img src="/images/project2.png" alt="Library Management Platform"  />
                </a>
              </div>
              <h2>Library Management System</h2>

            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                < a target='blank' href="https://cryptoplace-jet.vercel.app/">
                <img src="/images/CryptoPalace.png" alt="YC Directory" />
                </a>
              </div>
              <h2>CryptoPalace-Real time bitcoin price trend</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowcaseSection
