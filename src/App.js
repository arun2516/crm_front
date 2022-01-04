import './App.css';
import { Defaultlayout } from './components/layout/Defaultlayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { Entry } from './page/entry/Entry.page';
import { Addticket } from './page/new-ticket/Addticket.page';
import { Ticketlist } from './page/ticket-listing/Ticketlist.page';

function App() {
  return (
    <div className="App">
     {/* <Entry/> */}
     <Defaultlayout>
       {/* <Dashboard/>  */}
        {/* <Addticket/> */}
        <Ticketlist/>
     </Defaultlayout>
    </div>
  );
}

export default App;
