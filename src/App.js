import logo from './logo.svg';
import './App.css';
import WelcomePage from './Pages/Welcomepage';
import VotingPage from './Pages/Votingpage';
import VoteResult from './Pages/VoteResultPage';
import AdminPage from './Pages/AdminPage/AdminPage';

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
        <Route path="/voteResult" element={<VoteResult />} />
        <Route path="/adminPage" element={<AdminPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


