import './App.css';
import { Defaultlayout } from './components/layout/Defaultlayout';
import { Entry } from './page/entry/Entry.page';

function App() {
  return (
    <div className="App">
     {/* <Entry/> */}
     <Defaultlayout>one of page content using default layout</Defaultlayout>
    </div>
  );
}

export default App;
