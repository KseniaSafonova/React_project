import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './App.module.css';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Thead from './components/Table/Thead';
import Tbody from './components/Table/Tbody';
import styles from './components/Navbar/Navbar.module.css'
import style from './components/Header/Header.module.css'
import image from './components/Header/logo.svg'
import Error from './components/Error/Error';
import Game from './components/Game/Game';
import Context from './Context'
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Words from './components/Table/Words';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }
  }

  componentDidMount() {
    fetch('/api/words')
      .then((response) => response.json())
      .then((response) => this.setState({ words: response }))
  }

  render() {
    const { words } = this.state
    const { isLoading } = this.state

    if (isLoading) {
      return <p>...</p>
    }

    return (
      <Context.Provider value={this.state}>
        <BrowserRouter>
          <div className="App">
            <Header >
              <Link to='/'><img src={image} className={style.logoSvg} /></Link>
            </Header>
            <Navbar>
              <Link className={styles.button} to='/'>Home Page</Link>
              <Link className={styles.button} to='/cards'>Cards</Link>
              <Link className={styles.button} to='/game'>Game</Link>
            </Navbar>
            <Switch>
              <Route path='/cards'>
                <Main />
              </Route>
              <Route path='/game'>
                <Game data={words} />
              </Route>
              <Route path='/'>
                <Table striped bordered hover>
                  <Thead />
                  <Tbody />
                </Table>
              </Route>
              <Route>
                <Error />
              </Route>
            </Switch>
            <Footer />
          </div >
        </BrowserRouter>
      </Context.Provider>
    )
  }
}


export default App;

