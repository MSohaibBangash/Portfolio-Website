import axios from 'axios';

const handleDeleteRequest= async(url)=> {
    try {
        const response = await axios({
            method:"delete",
            url:url
        });
        return response?.data
     } catch (error) {
       console.log(error)
     }
}

export default handleDeleteRequest