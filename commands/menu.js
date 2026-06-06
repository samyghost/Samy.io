import fs from "fs-extra";
import path from "path";

export default {
  name: "menu",
  description: "Afficher le menu complet",

  async execute(sock, message, args) {
    const { from, sender, isGroup, bots } = message;

    const bot = Array.from(bots?.values() || []).find(
      b => b.sock?.user?.id?.split(":")[0] === from.split("@")[0]
    );

    const chatType = isGroup ? "Groupe" : "Privé";
    const userName = sender ? sender.split("@")[0] : "Invité";
    const prefix = bot?.config?.prefix || ".";

    const menuText = `
╔══════════════════════╗
║      🤖 MR.SAMY BOT 🤖      ║
╚══════════════════════╝

👤 Utilisateur : ${userName}
💬 Chat : ${chatType}
⚡ Préfixe : ${prefix}

━━━━━━━━━━━━━━━━━━━━━━
👥 GESTION DE GROUPE
━━━━━━━━━━━━━━━━━━━━━━
➜ add
➜ kick
➜ promote
➜ demote
➜ invite
➜ link
➜ mute
➜ unmute
➜ resetlink
➜ purge

━━━━━━━━━━━━━━━━━━━━━━
📥 TÉLÉCHARGEMENTS
━━━━━━━━━━━━━━━━━━━━━━
➜ apk
➜ tiktok
➜ img
➜ save
➜ telegram-sticker
➜ toaudio
➜ url
➜ vv

━━━━━━━━━━━━━━━━━━━━━━
🛠️ UTILITAIRES
━━━━━━━━━━━━━━━━━━━━━━
➜ ai
➜ news
➜ weather
➜ dico
➜ infos
➜ ping
➜ owner

━━━━━━━━━━━━━━━━━━━━━━
🛡️ MODÉRATION
━━━━━━━━━━━━━━━━━━━━━━
➜ block
➜ unblock
➜ autoread
➜ autotyping
➜ autorecording
➜ autoreact
➜ welcome
➜ bye

━━━━━━━━━━━━━━━━━━━━━━
🖼️ MÉDIA
━━━━━━━━━━━━━━━━━━━━━━
➜ photo
➜ sticker
➜ pp
➜ setpp
➜ take

━━━━━━━━━━━━━━━━━━━━━━
📢 TAGS
━━━━━━━━━━━━━━━━━━━━━━
➜ principal
➜ tag
➜ tagadmin
➜ tagall

╔══════════════════════╗
║   ✨ MR.SAMY OFFICIAL ✨   ║
║      🚀 Powered By Samy      ║
╚══════════════════════╝
`;

    try {
      const imagePath = path.join("./assets/menu.jpg");

      if (await fs.pathExists(imagePath)) {
        const imageBuffer = await fs.readFile(imagePath);
        await sock.sendMessage(from, {
          image: imageBuffer,
          caption: menuText
        });
      } else {
        await sock.sendMessage(from, { text: menuText });
      }

    } catch (e) {
      console.error("Erreur menu :", e);
      await sock.sendMessage(from, { text: menuText });
    }
  }
};
