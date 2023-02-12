const axios = require("axios");
require("dotenv").config();

const apiService = async () => {
    console.log("Real api");
    return await axios.get(`${process.env.apiURL}`)
};

const apiParticipants = async (participants) => {
    console.log("Real api by Participants");
    return await axios.get(`${process.env.apiURL}?title=${participants}`)
};

module.exports = { apiService, apiParticipants };
