import API from './../api.js';


export function getInfo(que) {
    return (dispatch) => {
        API.getInfo(que).then((data) => {
            dispatch({
                type: 'GET_GITS_DONE',
                gits: data.data.items,
                q: que
            });

        });

    }
}

