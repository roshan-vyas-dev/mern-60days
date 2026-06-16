import Counter from "./Counter";
import ProfileCard from "./ProfileCard";
import SimpleForm from "./SimpleForm";
import Toggle from "./Toggle";




function App() {

  return (
    <div>
      <h1>Day 15 - React Basics</h1>
      <ProfileCard name="Roshan" role="MERN Developer" age={22} />


      <Counter/>
      <SimpleForm/>
      <Toggle/>
 

    </div>
  );
}

export default App;