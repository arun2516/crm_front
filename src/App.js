import './App.css';
import { Defaultlayout } from './components/layout/Defaultlayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div className="App">
     {/* <Entry/> */}
     <Defaultlayout>
       <Dashboard/>
     </Defaultlayout>
    </div>
  );
}

export default App;
