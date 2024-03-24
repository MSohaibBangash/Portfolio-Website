import axios from 'axios'
import React from 'react'

const handlePutRequest =async(url,data)=> {
    try {
        const response = await axios({
            method: "put",
            url: url,
            data: data,
            headers: {
                'Accept': 'application/json',
            }
        })
        return response?.data
    } catch (error) {
        console.log(error)
    }
}


export default handlePutRequest