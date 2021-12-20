import http from "./Http"
export default function getAllFoods(){
    return http.get("/foods")
}