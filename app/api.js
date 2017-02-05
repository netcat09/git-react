import Axios from 'axios';



let API = {
    getInfo: function (q) {
        return new Promise (function (resolve, reject) {
            Axios.get("https://api.github.com/search/repositories", {
                params: {
                    q: q,
                    sort: 'size'
                }
            }).then(function (data) {
                resolve(data);
                console.log(data.data)
            });

        })

    },

    getRepo: function (owner, repo) {
        return new Promise (function (resolve, reject) {
            Axios.get("https://api.github.com/repos/" + owner + "/" + repo, {
                params: {
                }
            }).then(function (data) {
                resolve(data);
                console.log(data.data)
            });

        })

    }
};





export default API;
