import femaleProfile from './images/femaleProfile.jpeg';
import maleProfile from './images/maleProfile.jpeg';

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
  return (

    <div key={employee.id} id={employee.id}
      className={(employee.teamName === selectedTeam ? 'card m-1 standout' : 'card m-2')}
      style={{ cursor: "pointer" }}
      onClick={handleEmployeeCardClick}>
      <img src={employee.gender === 'male' ? maleProfile : femaleProfile}
        className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Full Name: {employee.fullName}</h5>
        <p className="card-text"><b>Designation:</b> {employee.designation}</p>
        <p className="card-text"><b>Team Name:</b> {employee.teamName}</p>
      </div>
    </div>
  )
}

export default TeamMemberCard;