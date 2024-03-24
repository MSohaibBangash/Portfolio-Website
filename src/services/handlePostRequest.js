import axios from 'axios'
import React from 'react'

const handlePostRequest = async (url, data) => {
    try {
        const response = await axios({
            method: "post",
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

export default handlePostRequest