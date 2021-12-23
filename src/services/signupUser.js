import http from "./Http";
export default function signupUser(data){
    return http.post('/users',data)
}
