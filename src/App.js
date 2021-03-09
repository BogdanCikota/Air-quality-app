import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import './App.css';
import { GlobalContext } from './GlobalContext';
import DataContainer from './DataContainer';
import FetchData from './FetchData';

function App() {
  const { aqi } = useContext(GlobalContext);
  FetchData();

  return (
    <div className="App">

      {(aqi > 0) ?
        <DataContainer /> :
        <div>
          <p>No Data</p>
          <button onClick={() => {
            document.location.reload();
          }}>Reload</button>
        </div>
      }

    </div>
  );
}

export default App;
