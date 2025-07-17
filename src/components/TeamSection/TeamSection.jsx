import React from 'react'
import './TeamSection.css'
import catImg from '../../assets/images/cat.png'
import cat2Img from '../../assets/images/cat2.jpg'
import cat3Img from '../../assets/images/cat3.jpg'
import cat4Img from '../../assets/images/cat4.jpg'
import cat5Img from '../../assets/images/cat5.jpg'

const TeamMembers = [
    {
        name: "Dubin Rios",
        role: "full stack",
        image: catImg,
        bio: "Es necesario añadir algo"
    },
    {
        name: "Yelyzaveta Krasiuk",
        role: "full stack",
        image: cat2Img,
        bio: "Es necesario añadir algo"
    },
    {
        name: "Jesus Martin",
        role: "full stack",
        image: cat3Img,
        bio: "Es necesario añadir algo"
    },
    {
        name: "Miguel Rodriguez",
        role: "full stack",
        image: cat4Img,
        bio: "Es necesario añadir algo"
    },
    {
        name: "Paula Apse",
        role: "full stack",
        image: cat5Img,
        bio: "Es necesario añadir algo"
    }
]


const TeamSection = () => {
  return (
    <>
      <section className='teamSection__section'>
              <h2>Nuestro equipo</h2>
            <div className='team-flex'>
                {TeamMembers.map((member, idx) => (
                    <div key={idx} className='team-card'>
                        <img src={member.image} alt={member.name} />
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-role">{member.role}</p>
                        <p className="team-bio">{member.bio}</p>
                   </div> 
                ))}
            </div>
        </section>
    </>
  )
}

export default TeamSection

