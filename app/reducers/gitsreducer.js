export default (store = {
    git_list: [],
    q: "react",
    loading: true

}, action) => {

    switch (action.type) {
        case 'GET_GITS_DONE': {
            return {
                ...store,
                git_list: action.gits,
                loading: false
            }
        }


    }

    return store
}