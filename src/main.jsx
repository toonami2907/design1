import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Dashboard from "./components/Dashboard";


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<App />} > 
        <Route index element={<Dashboard/>}/>
        </Route>
      </Routes>

  )
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
)
