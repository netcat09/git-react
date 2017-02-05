import React from 'react';
import Gitlist from '../app/gitlist.js';
import { searchGit } from '../app/gitlist.js';
import SearchBar from 'react-search-bar'
import API from '../app/api.js';
import { getInfo, sortSize } from '../app/actions/gitsaction';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';

@connect((store)=> {
    return {
        gits: store.gits
    }
})

class Main extends React.Component {
    render() {
        return (<div>

            <SearchBar
                autoFocus={true}
                debounceDelay={1000}
                placeholder={'react'}
                onChange={(searchTerm, resolve) => {
                    this.props.dispatch(getInfo(searchTerm));

                }}
                onSearch={(searchTerm, resolve) => {
                    this.props.dispatch(getInfo(searchTerm));

                }}
                 />

            {this.props.children}
                </div>)
    }
}

export default Main;
