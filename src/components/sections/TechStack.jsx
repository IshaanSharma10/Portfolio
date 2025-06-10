import React from 'react'
import TitleHeader from '../TitleHeader'
import { techStackIcons } from '../../constants'
import TechIcon from '../Models/TechLogos/TechIcon'

const TechStack = () => {
  return (
    <div id='skills' className='flex-center section-padding'>
        <div className='w-full h-full md:px-10 px-5'>
            <TitleHeader
            title='My Preferred Tech Stack'
            sub="The Skills I Bring To The Table"
            />
            <div className='tech-grid'>
                {techStackIcons.map((icon)=>(
                    <div key={icon.name} className='relative card-border tech-card overflow-hidden gorup xl:rounded-full rounded-lg'>
                    <div className='tech-card-animated-bg'/>
                    <div className='tech-card-content'>
                        <div className='tech-icon-wrapper'>
                            <TechIcon model={icon}/>
                        </div>
                        <div className='padding-x w-full'>
                            {icon.name}
                    </div>
                </div>
            </div>
                ))}
            </div>
        </div>
    
    </div>
  )
}

export default TechStack
