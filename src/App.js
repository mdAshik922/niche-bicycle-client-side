
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from './Components/Pages/Footer/Footer';
import NotFound from './Components/Pages/NotFound/NotFound';
import Register from './Components/Pages/Form/Register/Register';
import Login from './Components/Pages/Form/LoginForm/Login';
import AuthProvider from './Context/AuthProvider';
import Home from './Components/Pages/Home/Home';
import Header from './Components/Pages/Header/Header';
import Explore from './Components/Pages/Product/Explore';
import Order from './Components/Pages/OrderPage/Order';
import MyOrder from './Components/Pages/OrderPage/MyOrder';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderForm from './Components/Pages/Form/OrderForm/OrderForm';
import ReviewForm from './Components/Pages/Form/ReviewFrom/ReviewForm';
import DashBord from './Components/Pages/DashBord/DashBord';
import Admin from './Components/Pages/DashBord/MakeAdmin/Admin';

import AdminRoute from './Components/PrivateRoute/AdminRoute';
import Manage from './Components/Pages/DashBord/Blog/Manage';
import UpdateProduct from './Components/Pages/DashBord/Blog/UpdateProduct';
import Payment from './Components/Pages/Pay/Payment';

function App() {
  return (
    <div className="App">
  <AuthProvider>
  <Router> 
       <Header></Header>
       <Switch>
         <Route exact path="/"><Home></Home></Route>

         <Route  path="/home"><Home></Home></Route>

         <Route  path="/explore"><Explore></Explore></Route>

         <PrivateRoute  path="/order/:id"><Order></Order></PrivateRoute>

         <PrivateRoute  path="/reviewform"><ReviewForm></ReviewForm></PrivateRoute>

         <PrivateRoute  path="/payment"><Payment></Payment></PrivateRoute>

         <PrivateRoute  path="/purchase"><MyOrder></MyOrder></PrivateRoute>

         <PrivateRoute  path="/order"><OrderForm></OrderForm></PrivateRoute>

         <PrivateRoute  path="/review"><ReviewForm></ReviewForm></PrivateRoute>

         <PrivateRoute  path="/dashboard"><DashBord></DashBord></PrivateRoute>

         <AdminRoute  path="/admin"><Admin></Admin></AdminRoute>

         <AdminRoute   path="/update/:id"><UpdateProduct></UpdateProduct></AdminRoute>

         <PrivateRoute  path="/manage"><Manage></Manage></PrivateRoute>

         <Route  path="/login"><Login></Login></Route>

         <Route  path="/register"><Register></Register></Route>

         <Route  path="*"><NotFound></NotFound></Route>
       </Switch>
       <Footer></Footer>
     </Router>
  </AuthProvider>
    </div>
  );
}

export default App;
