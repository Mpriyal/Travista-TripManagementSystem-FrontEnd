let _singleton = Symbol();
const LOG_IN_URL = 'http://localhost:4000/api/businessLogin';
const PROFILE_URL = 'http://localhost:4000/api/businessProfile';
const LOG_OUT_URL = 'http://localhost:4000/api/logout';
const OWNER_URL = 'http://localhost:4000/api/owner';

class OwnerService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new OwnerService(_singleton);
        return this[_singleton]
    }

    loginOwner(username,password){
        return fetch(LOG_IN_URL, {
            method: 'post',
            body: JSON.stringify({username:username, password: password}),
            credentials: "same-origin",
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            return response == null ? null :  response.json() ;
        })
    }

    findOwnerById(userId) {
        return fetch(OWNER_URL + '/' + userId,{
            credentials: "same-origin"
        }).then(response => response.json());
    }

    findOwnerByUsername(username) {
        console.log(username)
        return fetch(PROFILE_URL + '/' + username,{
            credentials: "same-origin"
        }).then(response => response.json());
    }
    deleteOwner(ownerId) {
        return fetch(OWNER_URL + '/' + ownerId, {
            method: 'delete',
            credentials: "same-origin"
        })
    }

    findAllOwners() {
        return fetch(OWNER_URL,{
            credentials: "same-origin"
        })
            .then(response => response.json());
    }

    createOwner(user) {
        return fetch(OWNER_URL, {
            method: 'post',
            body: JSON.stringify(user),
            credentials: "same-origin",
            headers: {
                'content-type': 'application/json'
            }
        })
    .then(response => response.json());
    }

    logout() {
        return fetch(LOG_OUT_URL, {
            method: 'post',
            credentials: 'include'
        });
    }

}
export default OwnerService;