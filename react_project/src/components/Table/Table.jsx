
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Thead from './Thead';
import { useState } from 'react';


function Table(word) {
    return (
        <div className="App">
            <Table striped bordered hover>
                <Thead />

                <tbody>
                    {
                        words.map((word) =>
                            <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />)
                    }

                </tbody>
            </Table>
        </div >
    );
}



