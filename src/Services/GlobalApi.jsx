import axios from "axios";

const key="f79f271853ac4e69bd2050c58e05999f";
const axiosCreate=axios.create({
    baseURL:"https://api.rawg.io/api/"
})

const getGenreList=axiosCreate.get('/genres?key=' + key)
export default{
    getGenreList
}