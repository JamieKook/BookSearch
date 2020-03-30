import axios from "axios";
const key = process.env.googleApiKey; 

export default {
    getGoogleBooks: function(query){
        return axios.get(
            "https://www.googleapis.com/books/v1/volumes?q="+query
        ); 
    }
}; 