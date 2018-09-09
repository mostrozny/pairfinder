import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import peoples from './people.js';


class SearchPairs extends Component {
    constructor(props) {
        super(props);



        this.state = {
            firstMan: this.getPair(),
            secondMan: []
        }
    }


    getPair = () => {
        const ppl = peoples;
        const arrPair = [];
      //  const secondPair = [];

        for (let i=0; i<ppl.length/2; i++) {
            arrPair.push([i]);
            for (let j=1; j<ppl.length; j++) {
                if (ppl[i].age !== ppl[j].age &&
                    ppl[i].glasses !== ppl[j].glasses &&
                    ppl[i].team !== ppl[j].team &&
                    ppl[i].district !== ppl[j].district) {
                    arrPair[i].push(ppl[j].id);
                }

            }
        }
        arrPair.sort(this.compareNumbers);
        return arrPair;
    };

    getPossiblePair = () => {
        const arrayPossiblePairs = this.state.firstMan;
        const usedIds = [];
        for (let i=0; i<arrayPossiblePairs.length; i++) {
            for (let j=0; j<arrayPossiblePairs[i].length; j++) {
                if (usedIds.indexOf(arrayPossiblePairs[i][j]) !== -1) {
                let changeId = j;   //aby ominąć id;
                changeId++;
                j++;
                console.log(usedIds.indexOf(arrayPossiblePairs[i][j]) !== -1);
                //usedIds.push(arrayPossiblePairs[i][j]);
               }
          }
        }
    }

    compareNumbers = (a, b) => {
        return a.length - b.length
    };


    componentDidMount () {
        this.getPossiblePair();
    }

    render() {
        console.log(this.state.firstMan);

        return (
            <div>
            </div>
        );
    }
}

export default SearchPairs;
