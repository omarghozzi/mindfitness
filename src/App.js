import "./App.css";
import Header from "./components/header/Header";
import illustration from "./assets/undraw_Online_learning_re_qw08.svg";
import Button from "./components/buttons/Button";
import OurTeam from "./components/ourteam/OurTeam";
import WhoWeAre from "./components/whoWeAre/WhoWeAre";
import OurServices from "./components/ourServices/OurServices";
import Testimonials from "./components/testimonials/Testimonials";
import Newsletter from "./components/newsletter/Newsletter";
import Footer from "./components/footer/Footer";
import Social from "./components/social/Social";
import Login from "./components/login/Login";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <div className="firstpart">
            <div className="container">
              <Header />
              <div className="firstpart__content">
                <Social />
                <div>
                  <h1>learn without limits</h1>
                  <p>
                    Maecenas sed dolor lorem. Maecenas quis congue turpis. Proin
                    a ipsum dictum.
                  </p>
                  <Button text="start your training" />
                </div>
                <img src={illustration} alt="ullustration" />
              </div>
            </div>
          </div>
          <div className="container">
            <OurTeam />
          </div>
          <WhoWeAre />
          <OurServices />
          <Testimonials />
          <div className="container">
            <Newsletter />
          </div>
          <Footer />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
