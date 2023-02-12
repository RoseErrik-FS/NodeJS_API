const axios = require("axios");
require("dotenv").config();

const apiService = async () => {
    console.log("Real api");
    return await axios.get(`${process.env.apiURL}`)
};

const apiTitle = async (title) => {
    console.log("Real api by title");
    return await axios.get(`${process.env.apiURL}?title=${title}`)
};

module.exports = { apiService, apiTitle };
