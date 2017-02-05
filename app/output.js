import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


const divStyle = {
    padding: '10px',
    display: 'inline-block',
    width: '640px'

};

@connect((store)=> {
    return {
        gits: store.gits
    }
})



class Output extends React.Component {
    constructor(){
        super();
        this.state = {
            load: true
        }
    }


    render(){
        return (
            <div style={divStyle}>
                <Card>
                    <CardHeader
                        title={"Name of repo: " + this.props.git.name}
                        subtitle={"Author: " + this.props.git.owner.login}
                        actAsExpander={true}
                        showExpandableButton={true}
                    />

                    <CardActions>
                        <Link to={"/onegit/" + this.props.git.owner.login + "/"
                         + this.props.git.name}>
                            <FlatButton label="More Info" />
                        </Link>
                    </CardActions>
                    <CardText expandable={true}>
                        {"Stars: " + this.props.git.stargazers_count}
                        <br></br>
                        {this.props.git.description}
                    </CardText>
                </Card>

            </div>)
    }
}
export default Output;