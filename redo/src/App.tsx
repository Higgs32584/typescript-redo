// We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";

const App = () => {
  return (
    <div style={{backgroundColor:"lightblue"}}>
      <div>
      <Navbar/>
      <form action="/" method="get"> 
        <label htmlFor="header-search">
            <span className="visually-hidden">Search animals!</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="No input views all"
            name="s" 
        />
        <button className="btn"style={{backgroundColor : "green"}}type="submit">Search</button>
    </form>
      <RecordList/>
     </div>
     </div>
  );
};

export default App;
