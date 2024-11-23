import axios from 'axios'

const http = axios.create({
    baseURL: 'https://api.disneyapi.dev/character'
});

export default {
    getCharacters() {
        return http.get();
    },
    getMoreCharacters(page, count){
        //http://api.disneyapi.dev/character?page=2&pageSize=50
        return http.get(`?page=${page}&pageSize=${count}`);
    }
}