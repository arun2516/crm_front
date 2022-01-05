import './App.css';
import { Defaultlayout } from './components/layout/Defaultlayout';
import { Dashboard } from './page/dashboard/Dashboard.page';
import { Entry } from './page/entry/Entry.page';
import { Addticket } from './page/new-ticket/Addticket.page';
import { Ticketlist } from './page/ticket-listing/Ticketlist.page';
import { Ticket } from './page/ticket/Ticket.page';
import{BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"

const isloggedin = true;
function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path="/" element={<Entry/>}/> 
         <Route path="/dashboard" element={(isloggedin ? <Dashboard/>:<Navigate replace to="/" /> )}/>
         <Route path="/add-ticket" element={(isloggedin ? <Addticket/>:<Navigate replace to="/" /> )}/>
         <Route path="/tickets" element={(isloggedin ? <Ticketlist/>:<Navigate replace to="/" /> )}/>
         <Route path="/ticket/:tid" element={ (isloggedin ? <Ticket/>:<Navigate replace to="/" /> )}/>
      </Routes>
     </Router>

    </div>
  );
}

export default App;
