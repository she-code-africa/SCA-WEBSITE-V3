import React from "react";
import Header from "../../components/Header";
import { ImgCard } from "../../components/Cards";
const team = [
  {
    name: "Ada Nduka Oyom",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600811315/vqnzyumcxrqqyidh5fb1.jpg",
    role: "Founder"
  },
  {
    name: "Omotola Eunice Omotayo",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600961093/qfcunfgns8fuzobm0hve.png",
    role: "Lead, Community Manager"
  },
  {
    name: "Zainab Daodu",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600964119/mamibxraminn366jsn13.jpg",
    role: "Open Source Programs Manager"
  },
  {
    name: "Temilola Kutelu",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1612533512/ljkesmjtj6cx9v9up3vk.jpg",
    role: "Engineering Team Lead"
  },
  {
    name: "Eniola Ipoola",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1600969327/klnvcwc5dgg8n7oarymh.png",
    role: "Lead, Technical Facilitator"
  },
  {
    name: "Goziem Onugha",
    src: "https://res.cloudinary.com/she-code-africa/image/upload/v1612444028/r1sawki0hhxqz8wzhsom.jpg",
    role: "General Counsel"
  }
]
const About = () => {
  return (
    <>
      <Header page={'about'} />
      <main>
        about page
        <div className="container mx-auto px-8">
            <div>
                <h2>Our Awesome Team</h2>
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
              {
                team.map(({name, src, role})=>{
                return <ImgCard name={name} src={src} role={role}/>
                })
              }
            </div>
        </div>
      </main>
    </>
  )
}

export default About