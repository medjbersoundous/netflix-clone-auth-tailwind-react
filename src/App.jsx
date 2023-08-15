import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./Pages/Home";
import Sign from "./Pages/Sign"
import Log from "./Pages/Log"
import ProtectedRoute from "./components/protected/ProtectedRoute";
import MyList from "./Pages/MyList";
export default function App() {
  return (
   <div>
 <AuthContextProvider>
     <Navbar />
    <Routes>
      <Route path='/' element = { <Home /> } />
      <Route path='/sign' element = { <Sign /> } />
      <Route path='/log' element = { <Log /> } />
      <Route path='/MyList' element = { <ProtectedRoute> <MyList /> </ProtectedRoute>  } />
     
     
    </Routes>
 </AuthContextProvider>
   </div>
  )
}