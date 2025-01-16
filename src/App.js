import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage";
import TaskDetailPage from "./routes/TaskDetailPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/:id" element={<TaskDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
