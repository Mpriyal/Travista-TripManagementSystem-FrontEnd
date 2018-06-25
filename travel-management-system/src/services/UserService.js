let _singleton = Symbol();
const LOG_IN_URL = 'http://localhost:4000/api/login'
const LOG_OUT_URL = 'http://localhost:4000/api/logut';
const PROFILE_URL = 'http://localhost:4000/api/profile';
const CUSTOMER_URL = 'http://localhost:4000/api/customer';
// const USER_URL = 'http://localhost:4000/api/user';



class UserService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }
    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new UserService(_singleton);
        return this[_singleton]
    }

    loginUser(username,password){
        return fetch(LOG_IN_URL, {
            method: 'post',
            body: JSON.stringify({username:username, password: password}),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
           return response == null ? null :  response.json() ;
        })
    }

    findCustomerById(customerId) {
        console.log("I am in customerById"+customerId);
        return fetch(CUSTOMER_URL + '/' + customerId, {
            credentials: "include"
        })
            .then(response => response.json());
    }

    findUserIdByUsername(username) {
        return fetch(PROFILE_URL + '/' + username,{
            credentials: "same-origin"
        })
            .then(response => response.json());
    }
    deleteCustomer(customerId) {
        return fetch(CUSTOMER_URL + '/' + customerId, {
            method: 'delete',
            credentials: "include"
        })
    }

    findAllCustomers() {
        return fetch(CUSTOMER_URL,{
            credentials: "include"
        })
            .then(response => response.json());
    }

    createCustomer(customer) {
        return fetch(CUSTOMER_URL, {
            method: 'post',
            body: JSON.stringify(customer),
            credentials: "include",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json());
    }


    updateCustomer(customerId,customer){
        return fetch(CUSTOMER_URL+'/'+customerId,
            {
                body: JSON.stringify(customer),
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT'
            })
    }

    logOut(){
        return fetch (LOG_OUT_URL,{
            method: 'post',
            credentials: 'include'
        });
    }

    deleteCustomer(customerId) {
        return fetch(CUSTOMER_URL + '/' + customerId,
            {
                method: 'DELETE'
            }).then(function (response) {
            return response;
        })
    }
    findCurrentUser(){
        return fetch(PROFILE_URL,{
            credentials: "include"
        }).then((response) => {return response});
    }
}
export default UserService;