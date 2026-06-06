export default {
  name: "game",
  description: "🎮 Jeu de rapidité",
  category: "🎲 𝙶𝚊𝚖𝚎𝚜",

  async execute(sock, message, args) {
    const { from } = message;

    await sock.sendMessage(from, {
      react: {
        text: "🦸🏾",
        key: message.key
      }
    });

    const numbers = Math.floor(Math.random() * 100) + 1;

    await sock.sendMessage(from, {
      text:
        `🎮 *JEU DE RAPIDITÉ*\n\n` +
        `🔢 Retenez ce nombre : *${numbers}*\n\n` +
        `⏳ Vous avez 5 secondes...`
    });

    setTimeout(async () => {
      await sock.sendMessage(from, {
        text:
          "❓ Quel était le nombre affiché ?\n\n" +
          "Répondez dans le chat !"
      });
    }, 5000);
  }
};