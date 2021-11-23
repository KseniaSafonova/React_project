import { action, makeAutoObservable, observable } from 'mobx';

export default class WordsStore {
    words = [];
    isLoading = false

    constructor() {
        makeAutoObservable(this)
    }

    fetchWords = () => {

        this.isLoading = true;

        fetch('/api/words')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Oops! Something went wrong!');
                }
            })
            .then((response) => response.json())
            .then((response) => {
                this.words = response;
                this.isLoading = false;
            })

            .catch(error => {
                this.error = error
                this.isLoading = false
            });


    }


    // addWord = (value) => {

    //     const newWord = {
    //         english: value.english,
    //         transcription: value.transcription,
    //         russian: value.russian,
    //         tag: value.tag
    //     }

    //     fetch('/api/words/add', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(newWord)
    //     })
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw new Error('Oops! Something went wrong!');
    //             }
    //         })
    //         .then(() => {
    //             this.words.push(newWord)
    //             this.isLoading = false
    //         })
    //         .catch(() => {
    //             this.isLoading = false
    //         });
    // }

    // deleteWords = () => {

    // }
}



