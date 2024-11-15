import axios from "axios";

const PREFIX_URL = 'http://localhost:8000/series/api/v1/series/';

export const getAllSerieService = async () => {
    const response = await axios.get(PREFIX_URL);
    return response;
};

export const createSerieService = async (data) => {
    const response = await axios.post(PREFIX_URL, data);
    return response;
};


export const showSerieService = async (id) => {
    const response = await axios.get(`${PREFIX_URL}${id}/`);
    return response;
};


export const updateSerieService = async (id, datos) => {
    const response = await axios.put(`${PREFIX_URL}${id}/`, datos);
    return response;
};


export const deleteSerieService = async (id) => {
    try {
        const response = await axios.delete(`${PREFIX_URL}${id}/`);
        console.log("Serie eliminada:", response);
        return response;
    } catch (error) {
        console.error("Error al eliminar la serie:", error.response ? error.response.data : error);
        throw error;
    }
};


