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
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const words = [
  { "id": "1", "english": "butterfly", "transcription": "[ ˈbʌtəflaɪ ]", "russian": "бабочка", "tags": "животные", "tags_json": "[\"животные\"]" },
  { "id": "2", "english": "hedgehog", "transcription": "[ ˈhedʒhɒɡ ]", "russian": "ёж", "tags": "животные", "tags_json": "[\"животные\"]" },
  { "id": "3", "english": "library", "transcription": "[ ˈlaɪbrəri ]", "russian": "библиотека", "tags": "город", "tags_json": "[\"город\"]" },
  { "id": "4", "english": "lost property office", "transcription": "[ lɒst ˈprɒpəti ˈɒfɪs ]", "russian": "бюро находок", "tags": "город", "tags_json": "[\"город\"]" },
  { "id": "5", "english": "gallery", "transcription": "[ ˈɡæləri ]", "russian": "галерея", "tags": "город, путешествия", "tags_json": "[\"город\", \"путешествия\"]" },
  { "id": "6", "english": "traffic", "transcription": "[ ˈtræfɪk ]", "russian": "движение", "tags": "город", "tags_json": "[\"город\"]" },
  { "id": "7", "english": "cinema", "transcription": "[ ˈsɪnəmə ]", "russian": "кино", "tags": "город", "tags_json": "[\"город\"]" },
  { "id": "8", "english": "accompany", "transcription": "[ tuː əˈkʌmpəni ]", "russian": "аккомпанировать", "tags": "музыка", "tags_json": "[\"музыка\"]" },
  { "id": "9", "english": "bagpipe", "transcription": "[ ˈbægpaɪp ]", "russian": "волынка", "tags": "музыка", "tags_json": "[\"музыка\"]" },
  { "id": "10", "english": "balalaika", "transcription": "[ ˌbæləˈlaɪkə ]", "russian": "балалайка", "tags": "музыка, культура", "tags_json": "[\"музыка\", \"культура\"]" },
  { "id": "11", "english": "bassoon", "transcription": "[ bə'suːn ]", "russian": "фагот", "tags": "музыка", "tags_json": "[\"музыка\"]" },
  { "id": "12", "english": "book", "transcription": "[ bʊk ]", "russian": "книга", "tags": "культура", "tags_json": "[]" },
  { "id": "13", "english": "street", "transcription": "[ striːt ]", "russian": "улица", "tags": "город", "tags_json": "[]" }
]

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">

        <Header >
          <Link to='/home'><img src={image} className={style.logoSvg} /></Link>
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
              <Tbody words={words} />
            </Table>
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


