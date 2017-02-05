import React from 'react';
import API from '../app/api.js'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

class Onegit extends React.Component {
    constructor() {
        super();
        this.state = {
            repoInfo: []
        }
    }


    componentDidMount() {
        API.getRepo(this.props.params.user, this.props.params.repo).then((data) => {
            this.setState({
                repoInfo: data.data,
                owner: data.data.owner
            })
        })
    }
        render()
        {
            return (
                <div>
                    {console.log(this.state.owner)}
                    <Card>
                        <CardHeader
                            title={"Full Name: " + this.state.repoInfo.full_name}
                            subtitle={"Stars: " + this.state.repoInfo.stargazers_count}
                            //avatar={this.state.owner.avatar_url}
                        />

                        <CardText>
                            Author: {this.state.owner.login}
                            <br></br>
                            Created: {this.state.repoInfo.created_at}
                            <br></br>
                            Updated: {this.state.repoInfo.updated_at}



                        </CardText>
                        <CardActions>

                        </CardActions>
                    </Card>


                </div>)
        }


}
export default Onegit;