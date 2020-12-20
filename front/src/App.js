import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import MainPage from './pages/MainPage/MainPage';
import MarathonAddTask from './Company/MarathonAddTask/MarathonAddTask';

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/main' component={MainPage} />
        <Route exact path='/dashboard/addTask/:id' component={MarathonAddTask} />
      </Switch>
    </>
  );
}

export default App;
