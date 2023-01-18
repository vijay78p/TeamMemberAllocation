const Teams = ({ selectedTeam, handleTeamSelctionOnchange }) => {
  return (
    <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelctionOnchange}>
      <option value="TeamA">Team A</option>
      <option value="TeamB">Team B</option>
      <option value="TeamC">Team C</option>
      <option value="TeamD">Team D</option>
      <option value="TeamE">Team E</option>
    </select>
  )
}
export default Teams