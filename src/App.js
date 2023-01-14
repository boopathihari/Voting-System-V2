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
        <Route path="https://63c2ec49a96e93304ffe0004--tranquil-rabanadas-94dde9.netlify.app/votingPage" element={<VotingPage />} />
        <Route path="https://63c2ec49a96e93304ffe0004--tranquil-rabanadas-94dde9.netlify.app/voteResult" element={<VoteResult />} />
        {/* <Route path="/voteResult" element={<VoteResult />} /> */}
        <Route path="https://63c2ec49a96e93304ffe0004--tranquil-rabanadas-94dde9.netlify.app/adminPage" element={<AdminPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


