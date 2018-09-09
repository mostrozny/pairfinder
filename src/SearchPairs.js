import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import peoples from './people.js';


class SearchPairs extends Component {
    constructor(props) {
        super(props);



        this.state = {
            firstMan: this.getPair(),
            secondMan: [],
            pair: [],
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
        const secondMan = [];
        for (let i=0; i<arrayPossiblePairs.length; i++) {
            for (let j=1; j<arrayPossiblePairs[i].length; j++) {
                if (usedIds.indexOf(arrayPossiblePairs[i][j]) === -1) {

                usedIds.push(arrayPossiblePairs[i][j]);
                if (usedIds.indexOf(arrayPossiblePairs[i][0]) === -1) {
                     secondMan.push(arrayPossiblePairs[i][j]);
                }
               }
            }
        }
        console.log(usedIds)
        console.log(secondMan)
        return secondMan;
    }


    getPairs = () => {
        const firstman = this.state.firstMan;
        const secondman = this.state.secondMan;
        const used = [];
        const pair = [];



        for (let i=0; i<firstman.length; i++) {
            if (used.indexOf(secondman[i]) === -1 && used.indexOf(firstman[i][0] === -1)) {
                console.log(secondman[i] + " " + firstman[i][0]);
                pair.push([firstman[i][0], secondman[i]]);
            }
            used.push(firstman[i][0]);
            used.push(secondman[i]);

        }
      //  console.log(used.indexOf(secondman[i]) === -1 )
        return pair;
    }

    compareNumbers = (a, b) => {
        return a.length - b.length
    };


    componentDidMount () {
        this.setState({
            secondMan: this.getPossiblePair()
        })
    }

    render() {
        console.log(this.state.firstMan);
        console.log(this.getPairs());
        return (
            <div>
                {this.getPairs().slice().map((thing) => {
                  return  <div>{thing[0]}---{thing[1]} <br /></div>
                })}
            </div>
        )
    }
}

export default SearchPairs;
