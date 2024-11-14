import OpenAI from "openai";
import fs from "node:fs"
//tworzenie zmiennej klucza API OPEN AI
const yourApiKey = process.env.OPENAI_API_KEY;
// odczytywanie pliku tekstowego
fs.readFile('input.txt', 'utf8', (err, data) => {       
  if (err) {
    console.error(err);
    return;
  }

// twoj klucz API OpenAI należy wstawić swój żeby aplikacja działała
const openai = new OpenAI({ apiKey:yourApiKey});
//podlaczanie sie do OpenAI i prompt
async function generateHtmlArticle() {
    const completion = await openai.chat.completions.create({
        model: "gpt-4",  
        messages: [
            { role: "system", content: "Include only <body> and <body> content, do not cut any of the given text" },
            {
                role: "user",
                content: "Format the following text into HTML, using <header>, <main>, <section>, <h1>, <h2>, <p>, <i>, and <footer> tags as appropriate. For each article section: Add an <img src=image_placeholder.jpg> with an alt attribute fill it with a prompt that generates image appropriate to the title of the section place <img src=> tag  directly at the bottom of each section ,include a brief description of the image in a <p> tag directly below it. At the end of the last article section: Include a theme toggle button with <button class= theme-toggle-button onclick= toggleTheme() >Zmień motyw</button>." + data
            },
        ],
    });
   
// Tworzenie pliku artykul.html i wypelnianie go wynikiem naszego prompta
fs.writeFile('artykul.html', completion.choices[0].message.content, err => {
  if (err) {
    console.error(err);
  } else {
    
  }
});
}

generateHtmlArticle();

});


