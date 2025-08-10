import React from 'react'
import './Pjt.css'
import Box from '../Box/Box'
import TTT from "../../assets/TicTacToe.png"
import Amazon from "../../assets/amazon.png"
import Animation from "../../assets/animation.png"
import Clock from "../../assets/clock.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Pjt() {
useGSAP(()=>{
    gsap.from("#heading",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#heading",
        scroll:"body",
        scrub:2,
        start:"top 70%",
        end:"top 30%"
      }
    })

    gsap.from(".slider",{
      y:50,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 70%",
        end:"top 30%"
      }
    })
  })

  return (
    <div id="projects">
      <h1 id='heading'>Projects</h1>
      <div className="slider">
        <Box title="Tic Tac Toe web game" image={TTT}/>
        <Box title="3D Animation" image={Animation}/>
        <Box title="Amazon Clone" image={Amazon}/>
        <Box title="Analog Clock" image={Clock}/>
      </div>
    </div>
  )
}

export default Pjt
