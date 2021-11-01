import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Booking from './component/Booking/Booking';
import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Orders from './component/Orders/Orders';
import ManageOrders from './component/ManageOrders/ManageOrders';
import AddPlace from './component/AddPlace/AddPlace';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/Booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute exact path="/allOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/addPlace">
              <AddPlace></AddPlace>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>

          
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
