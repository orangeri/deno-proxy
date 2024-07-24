Deno.serve(async (req) => {  
  const baseURL = Deno.env.get("BASE_URL") || "https://api.openai.com"; // Fallback ke URL default jika BASE_URL tidak didefinisikan  
  const url = new URL(req.url);  
  return fetch(baseURL + url.pathname, {  
    method: req.method,  
    headers: {  
      Authorization: req.headers.get('Authorization'),  
      "Content-Type": req.headers.get('Content-Type')  
    },  
    body: req.body  
  })  
});
