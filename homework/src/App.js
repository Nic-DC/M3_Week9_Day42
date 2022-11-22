import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // importing the bootstrap-css
import MyNav from "./Components/MyNav";
import MyFooter from "./Components/MyFooter";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
      <MyFooter />
    </div>
  );
}

export default App;
