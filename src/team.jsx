import { useState } from "react"

export default function Team(){
    const [team, setTeam]= useState(11);

    const handleAdd=()=>{
        const newTeam = team+1;
        setTeam(newTeam)
    }
    const handleReduce=()=>{
          
        setTeam(team-1)
    }
    const teamStyle ={
        border:'2px solid purple',
        borderRadius:'20px',
        margin: '15px',
        padding:'20px'
        
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleReduce}>Remove</button>
        </div>
    )
}