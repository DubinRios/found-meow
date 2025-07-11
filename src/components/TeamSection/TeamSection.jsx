import React from 'react'
import './TeamSection.css'
import catImg from '../../assets/images/cat.jpg'

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
        image: catImg,
        bio: "Es necesario añadir algo"
    },
    {
        name: "Jesus Martin",
        role: "full stack",
        image: catImg,
        bio: "Es necesario añadir algo"
    },
    {
        name: "Miguel Algel Rodriguez",
        role: "full stack",
        image: catImg,
        bio: "Es necesario añadir algo"
    },
    {
        name: "Paula Apse",
        role: "full stack",
        image: catImg,
        bio: "Es necesario añadir algo"
    }
]


const TeamSection = () => {
  return (
    <>
      <section>
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

