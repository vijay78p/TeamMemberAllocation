import {useState} from 'react';
import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';

const Employees=({employees,selectedTeam,handleTeamSelctionOnchange,handleEmployeeCardClick})=>{

  return(
    <main>
         <div className="row justify-content-center mt-3 mb-3">
            <div className="col-6"> 
              <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelctionOnchange}>
                <option value="TeamA">Team A</option>
                <option value="TeamB">Team B</option>
                <option value="TeamC">Team C</option>
                <option value="TeamD">Team D</option>
                <option value="TeamE">Team E</option>
              </select>
            </div>
         </div>
      
          <div class="row justify-content-center mt-3 mb-3">
            <div class="col-8">  
              <div class="card-collection">
                   {
                  employees.map((emp)=>(
                    <div key={emp.id} id={emp.id} 
                      className={(emp.teamName === selectedTeam?'card m-1 standout':'card m-2')} 
                      style={{cursor:"pointer"}} 
                      onClick={handleEmployeeCardClick}>     
                      <img src={emp.gender === 'male'? maleProfile:femaleProfile}
                            className="card-img-top"/>  
                      <div className="card-body">
                        <h5 className="card-title">Full Name: {emp.fullName}</h5>
                        <p className="card-text"><b>Designation:</b> {emp.designation}</p>
                        <p className="card-text"><b>Team Name:</b> {emp.teamName}</p>
                      </div>
                    </div>   
         
      ) 
      )       
      }
                </div>
            </div>
          </div>
 
    </main>
  )
}

export default Employees