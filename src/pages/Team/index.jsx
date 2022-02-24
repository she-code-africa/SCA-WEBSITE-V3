import React from 'react'
import Header from "../../components/Header";
import Section from '../../components/Section'
import { ImgCard } from "../../components/Cards";
import {team} from "../../utils"
const Team = () => {
  return (
    <div>
        <Header />
        <Section
            title="Our Team"
            content="Empowering and celebrating women
            in technology across Africa guiding
            Tech-Girls to their Full Potential"
            imgClass="__shecodeheader_image"
            className="sm:-order-1 justify-self-center"
        />

        <div className="container mx-auto px-8">
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
              {
                team.map(({name, src, role}, index)=>{
                return <ImgCard name={name} src={src} role={role} key={index}/>
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Team