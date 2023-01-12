import { useState } from "react";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {

  const [groupedEmployees, setGroupedData] = useState(groupedTeamMembers());
  function groupedTeamMembers() {
    var teams = [];

    var teamAMembers = employees.filter((emp) => emp.teamName = 'TeamA');
    var teamA = { team: 'TeamA', members: teamAMembers, collapsed: selectedTeam === 'TeamA' ? false : true };
    teams.push(teamA);

    var teamBMembers = employees.filter((emp) => emp.teamName = 'TeamB');
    var teamB = { team: 'TeamB', members: teamBMembers, collapsed: selectedTeam === 'TeamB' ? false : true };
    teams.push(teamB);

    var teamCMembers = employees.filter((emp) => emp.teamName = 'TeamC');
    var teamC = { team: 'TeamC', members: teamCMembers, collapsed: selectedTeam === 'TeamC' ? false : true };
    teams.push(teamC);
  }

  function handleTeamClick(event) {
    var transformedGroupData = groupedEmployees.map((res) => {
      res.team === event.currentTarget.id ? { ...res, collapsed: !res.collapsed } : res;
    })
    setGroupedData(transformedGroupData);
    setTeam(event.currentTarget.id);
  }
  return (

    <main class="container">
      {groupedEmployees.map((item) => {
        return (
          <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
            <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
              Team Name : {item.team}
            </h4>
            <div id={"colapse_" + item.team} className={item.collapsed === true ? 'collapsed' : ''}>
              <hr />
              {item.members.map((mem) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">Full Name : {mem.fullName}</span>
                      <p>Designation: {mem.designation}</p>
                    </h5>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </main>
  )
}

export default GroupedTeamMembers