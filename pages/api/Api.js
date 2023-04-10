import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "put your APIKEY here"
});

const openai = new OpenAIApi(configuration);
let conversationHistory = [];

//Funcion pregunta
export async function fetchGPT(input) {
  conversationHistory.push({ role: "user", content: `${input}` });

  let mensaje = [...conversationHistory];

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: mensaje,
  });

  conversationHistory.push({
    role: "assistant",
    content: response.data.choices[0].message.content,
  });
  return response.data.choices[0].message.content;
}
