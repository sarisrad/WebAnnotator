import React, {Component} from 'react';
import PreatyLabel from './prettyLabel';
import Router from './router.js';


export default class Home extends Component {

    constructor(props) {

        super(props);
        this.state = {count: 0};
    }

    count() {

        this.setState({
            count: this.state.count + 1
        });
    }

    reset() {

        this.setState({   
            count: 0
        });
    }

    render() { 

        return (
            <div>
                <Router routs={"BodyDeafult"}/>
           </div>     
        )
    }

}
