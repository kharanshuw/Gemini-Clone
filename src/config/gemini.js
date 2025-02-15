import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  
<<<<<<< HEAD
  const apiKey = "AIzaSyBm-RdA918kF0pvYWjpbJj8K781te02ZIY";
=======
  const apiKey = ;
>>>>>>> 0c365d38e06a04e1bf397a1df8d2fee2d635635c
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());

    return result.response.text();
  }
  
  export default run;
