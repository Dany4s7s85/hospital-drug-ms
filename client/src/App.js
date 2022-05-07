import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./LoginRegister/Login";
import Register from "./LoginRegister/Register";
import { Route, Switch } from "react-router-dom";
import ErrPag from "./ErrPag";
import HomePage from "./Home/HomePage";
import ContactUs from "./Contactus";
import aboutUs from "./AboutUs/Aboutus";
import Orders from "./Orders";
import Admin from "./Admin";
import Price from "./Prices/Price";
import Facilities from "./Facilities/Facilities";
import Resend from "./LoginRegister/Resend";
import Profile from "./LoginRegister/Profile";
import Mission from "./Mission/Mission";
import ChangePassword from "./LoginRegister/Password";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/password" component={ChangePassword} />
        <Route path="/register" component={Register} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={aboutUs} />
        <Route path="/orders" component={Orders} />
        <Route path="/admin" component={Admin} />
        <Route path="/price" component={Price} />
        <Route path="/facilities" component={Facilities} />
        <Route path="/resend" component={Resend} />
        <Route path="/ourmission" component={Mission} />
        <Route component={ErrPag} />
      </Switch>
    </div>
  );
}

export default App;
