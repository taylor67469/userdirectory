import axios from "axios";

export default{
randoUser: function(){return axios.get("https://randomuser.me/api/?exc=login");},
seed: function(){return axios.get("https://randomuser.me/api/?results=10");},

};