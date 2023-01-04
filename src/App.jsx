import * as React from 'react';
import './App.css'
import {useState,useEffect} from 'react';
import Header from'./Header';
import Content from './Content';
import Footer from './Footer';
import Emloyees from './Employees';


export default function App() {
  const [selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam') )||"TeamB");
  
  const [employees,setEmployees]=useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }])

  useEffect(()=>{
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam));
  },[selectedTeam]);

  useEffect(()=>{
    localStorage.setItem('employeeList',JSON.stringify(employees));
  },[employees]);
  
  const handleTeamSelctionOnchange=(event)=>{
    console.log(event.target.value);
    setTeam(event.target.value);
  };
  const handleEmployeeCardClick=(event)=>{
    const transformedEmployees= employees.map((emp)=> emp.id ===         
      parseInt(event.currentTarget.id)
                                ?(emp.TeamName === selectedTeam)?{...emp,teamName:''}:                        {...emp,teamName:selectedTeam}:emp);
                            setEmployees(transformedEmployees);
  };
  return (
    <div>
     <Header 
        selectedTeam={selectedTeam} 
        teamMemberCount={employees.filter((emp)=> emp.teamName === selectedTeam).length}
       />
      <Emloyees
        employees={employees}
        selectedTeam={selectedTeam} 
        handleTeamSelctionOnchange={handleTeamSelctionOnchange}
        handleEmployeeCardClick={handleEmployeeCardClick}
        />
      <Footer/>
    </div>
  )
}
