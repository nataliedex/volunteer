const axios = require("axios");

const createAPIClient = () => {
  try {
    const apiKey = process.env.API_KEY_OPENAI;
    if(!apiKey) {
      throw new Error("API key for OpenAI is missing!  Please check you .env file.");
    }
    
    const client = axios.create({
      baseUrl: "https://api.openai.com/v1/chat/completions",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_KEY_OPENAI}`, 
      },
    });
    console.log(`Axios Connected...`);
    return client;
  } catch (err) {
    console.error(err);
  }
};
  
  
    

module.exports = createAPIClient;
