// const API_URL = 'http://localhost:3000'
const API_URL = 'http://192.168.13.101:3000'



import axios from "axios"

export default {
 

  //Planos
  async buscarPlanos() {
    return axios.get(API_URL + "/plano").then(plano => plano.data);
  }

  // async buscarPlanosNome(nome) {
  //   return axios.post(API_URL + "/planos/nome", nome).then(planos => planos.data);
  // }


  

};