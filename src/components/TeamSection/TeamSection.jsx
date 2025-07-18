import React from 'react'
import './TeamSection.css'
import catImg from '../../assets/images/cat.png'
import cat2Img from '../../assets/images/cat2.jpg'
import cat3Img from '../../assets/images/cat3.jpg'
import cat4Img from '../../assets/images/cat4.jpg'
import cat5Img from '../../assets/images/cat5.jpg'
import { useTranslation } from 'react-i18next'

const TeamMembers = [
    {
        name: "Dubin Rios",
        role: "full stack",
        image: catImg
    },
    {
        name: "Yelyzaveta Krasiuk",
        role: "full stack",
        image: cat2Img
    },
    {
        name: "Jesus Martin",
        role: "full stack",
        image: cat3Img
    },
    {
        name: "Miguel Rodriguez",
        role: "full stack",
        image: cat4Img
    },
    {
        name: "Paula Apse",
        role: "full stack",
        image: cat5Img
    }
]


const TeamSection = () => {

const { t } = useTranslation();

    return (
      
    <>
      <section>
              <h2>{t("Nuestro equipo")}</h2>
            <div className='team-flex'>
                {TeamMembers.map((member, idx) => (
                    <div key={idx} className='team-card'>
                        <img src={member.image} alt={member.name} />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                       {/* Bio eliminada */}
                   </div> 
                ))}
            </div>
        </section>
    </>
  )
}

export default TeamSection

