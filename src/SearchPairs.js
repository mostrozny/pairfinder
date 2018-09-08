import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import peoples from './people.js';


class SearchPairs extends Component {

    getPair = () => {
        const ppl = peoples;
        const arrPair = [];

        for (let i=0; i<ppl.length; i++) {
            for (let j=i+1; j<ppl.length; j++) {
                if (ppl[i].age !== ppl[j].age && ppl[i].glasses !== ppl[j].glasses && ppl[i].team !== ppl[j].team) {
                    arrPair.push(`${i} Pair: ${ppl[i].first_name} ${ppl[i].last_name} ${ppl[i].age} and ${ppl[j].first_name} ${ppl[j].last_name} ${ppl[j].age}`);
                }
            }
        }
        return arrPair;
    };


    render() {
        return (
            <div>
                {this.getPair().map(thing => {
                    return <div>${thing}<br /><br /></div>
                })}
            </div>
        );
    }
}

export default SearchPairs;
