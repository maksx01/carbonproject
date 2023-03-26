import {Routes, Route } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import FormPage from "./components/FormPage";
import ResultPage from './components/ResultPage';
import RecomPage from './components/RecomPage';



function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element= {<LoginPage></LoginPage>} />
      <Route path="/form" element= {<FormPage></FormPage>} />
      <Route path="/result" element={<ResultPage></ResultPage>} />
      <Route path="/recom" element={<RecomPage></RecomPage>} />
    </Routes>
    </div>
  );
}

export default App;
