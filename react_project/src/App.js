import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Card from './components/Card/Card';
import Footer from './components/Footer/Footer';
import './App.module.css';
import Button from './components/Card/Button';
import { Table } from 'react-bootstrap';
import Thead from './components/Table/Thead';
import TableString from './components/Table/TableString';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tbody from './components/Table/Tbody';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />

      {/*   <Table striped bordered hover>
        <Thead />
        <Tbody />
      </Table>*/}
      <Footer />
    </div>
  );
}

export default App;


