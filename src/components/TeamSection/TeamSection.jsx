import React from 'react'
import './TeamSection.css'


const TeamMembers = [
    {
        name: "Dubin Rios",
        role: "",
        image: "0",
        bio: ""
    },
    {
        name: "Yelyzaveta Krasiuk",
        role: "",
        image: "0",
        bio: ""
    },
    {
        name: "Jesus Martin",
        role: "",
        image: "0",
        bio: ""
    },
    {
        name: "Miguel Algel Rodriguez",
        role: "",
        image: "0",
        bio: ""
    },
    {
        name: "Paula Apse",
        role: "",
        image: "0",
        bio: ""
    }
]


const TeamSection = () => {
  return (
    <>
      <section>
            <h2>Nuestro equipo</h2>
            <div className='team-grid'>
                {TeamMembers.map((member, idx) => (
                    <div key={idx} className='team-card'>
                        <img src={member.image} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                        <p>{member.bio}</p>
                   </div> 
                ))}
            </div>
        </section>
    </>
  )
}

export default TeamSection

