import React from 'react'
import './Home.css'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'




function Home() {

  useGSAP(()=>{
  let tl1=gsap.timeline()
  tl1.from(".line1",{
    y:50,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:50,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:50,
    duration:1,
    opacity:0
  })
})

  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">Aashu Bharti</div>
          <div className="line3">Frontend Doveloper with HTML, CSS, ReactJs</div>
          <button>Hire me</button>
        </div>
      </div>
    </div>
  )
}

export default Home
