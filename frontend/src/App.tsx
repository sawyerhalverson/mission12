import React from 'react';
import logo from './logo.svg';
import './App.css';


//create the header
function Header() {
  return (
    <header>
      <h1>College Basketball Teams</h1>
    </header>
  );
}


// create teamProps function and interface
interface TeamProps {
  name: string;
  mascot: string;
  city: string;
  state: string;
}

function TeamCard(props: TeamProps) {
  const { name, mascot, city, state } = props;
  return (
    <div className="team-card">
      <h2>{name}</h2>
      <p>Mascot: {mascot}</p>
      <p>Location: {city}, {state}</p>
    </div>
  );
}


import teamsData from './teamsData.json';



//create the actual app that lists stuff out

function App() {
  return (
    <div className="App">
      <Header />
      <div className="team-cards">
        {teamsData.teams.map((team, index) => (
          <React.Fragment key={team.tid}>
            <TeamCard
              name={team.school}
              mascot={team.name}
              city={team.city}
              state={team.state}
            />
            {index !== teamsData.teams.length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default App;



