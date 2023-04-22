const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_KEY,
      });

      const openai = new OpenAIApi(configuration);
      
      const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { "role": "system", "content": "You are a helpful assistant that judges Pokemon." },
            { "role": "user", "content": req.body.prompt }
        ],
        temperature: 0.7,
        max_tokens: 250,
      });

      return res.status(200).json({ winner: response.data.choices[0].message.content });
};
