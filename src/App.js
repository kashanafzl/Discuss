import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Login from "./components/asserts/Auths/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import Rightsidebar from "./pages/Rightsidebar";


function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          
          <Route path="/" element={<Dashboard />} />
          <Route path="/Rightsidebar" element={<Rightsidebar />} />
      
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/Login" element={<Login />} />
        
 

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    
    </Router>
    
  );
}

export default App;
