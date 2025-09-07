import logo from "./logo.svg";
import "./App.css";
import TransportLinks from "./components/transport-links/TransportLinks";
import TransportWholeContainer from "./container/transport-whole-container/TransportWholeContainer";

function App() {
  return (
    <div className="whole_container">
      <div className="header"></div>

      <aside></aside>

      <div className="main_content">
          <TransportWholeContainer/>
      </div>
    </div>
  );
}

export default App;
