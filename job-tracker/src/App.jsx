import ProfileCard from "./ProfileCard";




function App() {

  return (
    <div>
      <h1>Day 15 - React Basics</h1>
      <ProfileCard name="Roshan" role="MERN Developer" age={22} />
      <ProfileCard name="Arjun" role="Backend Developer" age={25} />
      <ProfileCard name="Priya" role="UI Designer" age={23} />

    </div>
  );
}

export default App;