import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App(): JSX.Element {
  // fetch user slice here and then reroute based on availability of token
  return (
    <>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
