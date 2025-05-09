import axios from 'axios'

export const getSetupSession = async (user_id: String, token: String) => {
 
    const response = await axios.get(`${import.meta.env.VITE_HOST_SETUP}setup/${user_id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    })
 
    return response?.data
}

