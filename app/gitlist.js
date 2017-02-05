import React from 'react';
import API from '../app/api.js';
import Output from '../app/output.js';
import {connect} from 'react-redux';
import { getInfo } from '../app/actions/gitsaction';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


@connect((store)=> {
    return {
        gits: store.gits
    }
})

class Gitlist extends React.Component {
    constructor(){
        super();
        this.state = {
            gits: []
        }
    }
    componentDidMount(){
        this.props.dispatch(getInfo(this.props.gits.q));
        console.log(this.props.gits)


    }

    render(){
        return (
            <div>

                {
                 this.props.gits.git_list.map((git, index) =>{
                    return (<div  key={index}>
                        <Output git={git}/>
                        </div>)
                 })
                 }
            </div>)
    }
}

export default Gitlist;

