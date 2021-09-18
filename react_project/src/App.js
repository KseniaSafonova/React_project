import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import './App.module.css';
import Button from './components/Card/Button';
import { Table } from 'react-bootstrap';
import Thead from './components/Table/Thead';
import TableString from './components/Table/TableString';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tbody from './components/Table/Tbody';
import styles from './components/Navbar/Navbar.module.css'
import style from './components/Header/Header.module.css'
import image from './components/Header/logo.svg'
import Error from './components/Error/Error';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header >
          <Link to='/home'><img src={image} className={style.logoSvg} /></Link>
        </Header>
        <Navbar>
          <Link className={styles.button} to='/home'>Home Page</Link>
          <Link className={styles.button} to='/game'>Cards</Link>
          <Link className={styles.button} to='/contacts'>Contacts</Link>
        </Navbar>
        <Switch>
          <Route path='/home'>
            <Table striped bordered hover>
              <Thead />
              <Tbody />
            </Table>
          </Route>
          <Route path='/game'>
            <Main />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;


