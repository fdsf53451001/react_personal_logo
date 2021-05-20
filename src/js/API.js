import axios from 'axios';

const userRequest = axios.create({
    baseURL:'https://api.github.com/users/'
});

export const apiGetUserRequest = function(){
    return (userRequest.get('/fdsf53451001'));
}