import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import Program_icon_1 from '../../assets/program-icon-1.png'
import Program_icon_2 from '../../assets/program-icon-2.png'
import Program_icon_3 from '../../assets/program-icon-3.png'
const Programs = () => {
  return (
    <div className= "programs">
        <div className = "program">
            <img src = {program_1} alt ="image"/>
            <div className="caption">
              <img src = {Program_icon_1} alt = "image"/>
              <p>Graduation Degree</p>
            </div>
            </div>
            <div className = "program">
            <img src = {program_2} alt = "image"/>
            <div className="caption">
              <img src = {Program_icon_2} alt = "image"/>
              <p>Master's Degree</p>
            </div>
            </div>
            <div className = "program">
                <img src = {program_3} alt = "image"/>
                <div className="caption">
              <img src = {Program_icon_3} alt = "image"/>
              <p>Post Graduation</p>
            </div>  
            </div>
    </div>
  )
}

export default Programs