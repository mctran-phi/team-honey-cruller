import { MuiThemeProvider } from '@material-ui/core';
import { theme } from './themes/theme';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import SubmitDesign from './pages/SubmitDesign/SubmitDesign';
import Signup from './pages/SignUp/SignUp';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/Profile';
import Discovery from './pages/Discovery/Discovery';
import CreateContest from './pages/CreateContest/CreateContest';
import AboutArtist from './pages/AboutArtist/AboutArtist';
import Settings from './pages/Settings/Settings';
import Contest from './pages/Contest/Contest';
import Notifications from './pages/Notifications/Notifications';
import Reset from './pages/Reset/Reset';
import { AuthProvider } from './context/useAuthContext';
import { SocketProvider } from './context/useSocketContext';
import { SnackBarProvider } from './context/useSnackbarContext';
import { NotificationProvider } from './context/notificationContext';
import './App.css';

function App(): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <SnackBarProvider>
          <AuthProvider>
            <SocketProvider>
              <NotificationProvider>
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/submit-design/:id" component={SubmitDesign} />
                  <Route exact path="/profile" component={Profile} />
                  <Route exact path="/discovery" component={Discovery} />
                  <Route exact path="/create-contest" component={CreateContest} />
                  <Route exact path="/settings" component={Settings} />
                  <Route exact path="/notifications" component={Notifications} />
                  <Route exact path="/contest/:id" component={Contest} />
                  <Route exact path="/reset" component={Reset} />
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="*">
                    <Redirect to="/login" />
                  </Route>
                </Switch>
              </NotificationProvider>
            </SocketProvider>
          </AuthProvider>
        </SnackBarProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
