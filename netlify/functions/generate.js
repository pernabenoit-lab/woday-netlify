export async function handler(event, context) {
  try {
    // Appel à ton webhook Make
    const response = await fetch("https://hook.eu1.make.com/gahgvp62gg9sv8vexxytp35pwme8wxdy", {
      method: "POST"
    });

    const text = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain"
      },
      body: text
    };
  } catch (error) {
    console.error("Erreur côté Netlify function :", error);

    return {
      statusCode: 500,
      body: "Erreur côté serveur Netlify."
    };
  }
}