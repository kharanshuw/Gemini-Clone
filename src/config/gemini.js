import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";


/**
 * The apiKey is a unique identifier used to authenticate requests to the Google Generative AI API.
 * User has to get their own apiKey from here: https://console.cloud.google.com/apis/library/generativeai.googleapis.com
 */
const apiKey = "";

/**
 * Initialize AI: An instance of GoogleGenerativeAI is created using the provided API key. 
 * This instance will be used to interact with the AI model.
 */
const genAI = new GoogleGenerativeAI(apiKey);


/**
 * Model Selection: The getGenerativeModel method is used to select a specific AI model named "gemini-2.0-flash".
 */
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

/**
 * Generation Config: These settings determine how the AI generates responses:

temperature: Controls the randomness of the generated output. Higher values produce more random results.

topP: Specifies the cumulative probability for sampling tokens.

topK: Limits the number of tokens to consider at each step.

maxOutputTokens: The maximum number of tokens in the generated output.

responseMimeType: The format of the response (e.g., "text/plain").
 */
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};


/**
 * Asynchronous Function: The run function is declared as async, allowing the use of await for asynchronous operations.

Start Chat Session: A chat session is initiated with the selected model and configuration.

Send Message: The sendMessage method sends the provided prompt to the AI model and waits for a response.

Log and Return Response: The response text is logged to the console and returned by the function.

 */
async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  // console.log(result.response.text());

  return result.response.text();
}

export default run;