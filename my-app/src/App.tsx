import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ExercisePage from "./pages/exercisePage";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/exercise" element={<ExercisePage />} />
      </Routes>
    </div>
  );
}

export default App;
