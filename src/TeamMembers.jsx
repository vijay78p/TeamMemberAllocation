import TeamMemberCard from './TeamMemberCard'
const TeamMembers = ({ employees, handleEmployeeCardClick, selectedTeam }) => {
  return (
    employees.map((emp) => (
      <TeamMemberCard
        employee={emp}
        handleEmployeeCardClick={handleEmployeeCardClick}
        selectedTeam={selectedTeam} />))
  )
}
export default TeamMembers