import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Explore from './Pages/Explore/Explore';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddAProduct from './Pages/Dashboard/AddAProduct/AddAProduct';
import AdminRoute from './Pages/Login/Login/AdminRoute/AdminRoute';
import ManageProducts from './Pages/Dashboard/Dashboard/ManageProducts/ManageProducts';
import Pay from './Pages/Dashboard/Pay/Pay';
import Review from './Pages/Dashboard/Review/Review';
import ManageAllOrders from './Pages/Dashboard/Dashboard/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route path="/home" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>
            <Route path="/explore" element={<Explore />}>
            </Route>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /> </PrivateRoute>}>
              <Route exact path='/dashboard' element={<DashboardHome></DashboardHome>}>
              </Route>
              <Route path={`/dashboard/makeadmin`} element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addaproduct`} element={<AdminRoute><AddAProduct></AddAProduct></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/payment`} element={<Pay></Pay>}>
              </Route>
              <Route path={`/dashboard/manageproducts`} element={<AdminRoute><ManageProducts></ManageProducts></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/review`} element={<Review></Review>}>
              </Route>
              <Route path={`/dashboard/manageallorders`} element={<AdminRoute><ManageAllOrders></ManageAllOrders></AdminRoute>}>
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
