import logo from './logo.svg';
import './App.css';
import WelcomePage from './Pages/Welcomepage';
import VotingPage from './Pages/Votingpage';
import VoteResult from './Pages/VoteResultPage';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route path="/votingPage" element={<VotingPage />} />
        <Route path="/voteResult" element={<VoteResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


