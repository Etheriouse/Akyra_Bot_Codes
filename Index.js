const Discord = require('discord.js');
//const Canvas = require('@napi-rs/canvas');
const client = new Discord.Client();
const { token } = require('./config.json');
const Fun = require("./FonctionAky/Fun.js")
const Modération = require("./FonctionAky/Modération.js")
const Cacher = require("./FonctionAky/Cacher.js")
const Utilitaire = require("./FonctionAky/Utilitaire.js")
var prefix = "!"
client.login(token);

client.once('ready', () => {
    console.log("Connected")
    client.user.setActivity('ZZCCMXTP - LEZGONGUE', { type: 'LISTENING' }).then(presence => console.log(`Activity set to ${presence.activities[0].name}`)).catch(console.error);
});

client.on("message", async message => {

    // Commande cacher //

    /**
        if (message.content.startsWith("z")) {
        const canvas = Canvas.createCanvas(1196, 587); //Sa sa crée un canvas de 720 par 250 pixel
		const context = canvas.getContext('2d'); //et sa sa recupere le "context" du canvas, qui va servir a modifier le canvas
        const background = Canvas.loadImage("https://cdn.discordapp.com/attachments/742017699831480340/1019302820429705237/Liyueez.png"); // Cela relie le fond du canvas a une image dans le dossier du fichier js
	    //context.drawImage(background, 0, 0, canvas.width, canvas.height); //sa sa utilise les dimension du canvas pour étandre l'image sur le canvas entier
        const attachment = new AttachmentBuilder(await canvas.encode('png'), { name: 'profile-image.png' });
        //interaction.reply({ files: [attachment] });

        //message.channel.send(canvas)
    }
    */

    if (message.content.startsWith(`${prefix}kill`)) {
        Modération.killCommande(message)
    }
    if (message.content.startsWith(`dm-`)) {
        if (message.author.id == "497120447909986305" ){
            Cacher.mpCommande(message)
            message.delete()
        }
        else {
            message.channel.send("Tu n'est pas Etheriouse#1617, je n'ai pas a t'obéire petite personne de la plèbe")
        }
    }
    if (message.content.startsWith(`cm-`)) {
        if (message.author.id == "497120447909986305" ){
            Cacher.cmCommande(message, client)
            message.delete()
        }
        else {
            message.channel.send("Tu n'est pas Etheriouse#1617, je n'ai pas a t'obéire petite personne de la plèbe")
        }
    }
    if (message.channel.type == "dm" ) {

        if (message.author.bot == true )
            return
        var msg = message.toString().slice(0)
        var user = message.author
        //const channels = client.channel.get("1004487722276245557");
        //channels.send("Message de: ", user, "\nMessage: ", msg);
        const channel = client.channels.cache.find(channel => channel.name === "log-aky")
        channel.send("Message de: <@" + user + ">");
        channel.send("Message: " + msg);
    }
    if (message.content.endsWith("feur") || message.content.endsWith("Feur")) {
        Fun.feurCommande(message)
    }

    // Commande Utilitaire //

    if (message.content.startsWith(`${prefix}a`)) {
        Utilitaire.avatarCommande(message, Discord)
    }
    if (message.content.startsWith(`${prefix}inf`)) {
        Utilitaire.infCommande(message, Discord)
    }
    if (message.content.startsWith(`${prefix}help`)) {
        Utilitaire.helpCommande(message, Discord, prefix)
    }
    if (message.content.startsWith(`${prefix}changeprefix`)) {
        Utilitaire.PrefixChangeCommande(message, prefix)
    }
    if (message.content == `prefixactuel`) {
        Utilitaire.PrefixactuelCommande(message, prefix)
    }
    if (message.content.startsWith(`${prefix}histoire`)) {
        Fun.forssagesdwCommande(message)
    }
    if (message.content.startsWith(`${prefix}Eq`)) {
        message.reply("Pas encore fait donc attend que sa soit fait")
        return
        /*message.channel.send("Donnez valeur de a:")
        if (message.content.startsWith("a:")) {
            var a = message.toString().slice(3)
            var a_int = parseFloat(a)
            if (a_int) {
                console.log(a_int)
                if (message.content.startsWith("b:")) {
                    var b = message.toString().slice(3)
                    var b_int = parseFloat(b)
                    if(b_int) {
                        console.log(b_int)
                        if (message.content.startsWith("c:")) {
                            var c = message.toString().slice(3)
                            var c_int = parseFloat(c)
                            if (c_int) {
                                var delta = (b_int**2)-4*a_int*c_int
                                console.log(a_int, b_int, c_int, delta)
                            }
                            else {
                                message.reply("Donnez une valeur de c convenable")
                            }
                        }
                    }
                    else {
                        message.reply("Donnez une valeur de b convenable")
                    }
                }
            }
            else {
            message.reply("Donnez une valeur de a convenable")
            }
        }
        */
    }

    // Commande divertissante //

    if (message.content.startsWith(`${prefix}sfm`)) {
        Fun.sfmCommande(message)
    }
    if (message.content.startsWith(`${prefix}gr`)){
        Fun.grCommande(message, Discord)
    }
    if (message.content.startsWith(`${prefix}destituer`)) {
        Fun.destituéCommande(message)
    }
    if (message.content.startsWith(`${prefix}roulette`)) {
        Fun.rouletteCommande(message, Discord)
    }
    if (message.content.startsWith(`${prefix}russe`)) {
        Fun.russeCommande(message, Discord)
    }
    if (message.content.startsWith(`${prefix}8ball`)) {
        Fun.ballcommande(message)
    }
    if (message.content.startsWith(`${prefix}8b`)) {
        Fun.sympaballcommande(message)
    }
    if (message.content.startsWith(`${prefix}pof`)) {
        Fun.PileOuFaceCommande(message)
    }
    if (message.content.startsWith(`${prefix}George`)) {
        Fun.GeorgeMaidCommande(message, Discord)
    }
    if (message.content.startsWith(`${prefix}question`)) {
        Fun.MechanstégratuiteCommande(message)
    }
    if (message.content.startsWith(`${prefix}gigachadtitude`)) {
        Fun.gigachadtitudeCommande(message)
    }
    if (message.content.startsWith(`${prefix}`))
    // Commande Modération //

    if (message.content.startsWith(`${prefix}mute`)) {
        //Modération.muteCommande(message)
        if(message.member.hasPermission('MANAGE_ROLES')){
            if (!(message.guild.roles.cache.find(role => role.name == "Muted"))) {
                message.channel.send('Crée le role "Muted" pour mute un membre, triple abruti')
                return
                /**
                console.log('Ya pas de role muted')
                message.guild.createRole()

                console.log("le role muted a été crée")
                return

            A faire pour plus tard car la j'ai la groooooosssse flemme */
            }
            const usermuted = message.mentions.users.first();
            if (usermuted) {
                let rolemuted = message.guild.roles.cache.find(role => role.name === "Muted");
                console.log(rolemuted)
                console.log(usermuted)
                //usermuted.roles.add(rolemuted).catch(console.error)
                try {
                    usermuted.roles.add(rolemuted);
                  } catch(error) {
                    message.channel.send('Error');
                  }
            }
            else {
                message.reply("Mentionne la personne a mute triple buse")
            }
        }
        else{
            message.channel.send(`Vous devez avoir la permission de gérer les roles pour éxécuter cette commande`)
        }
    }
    if (message.content.startsWith(`${prefix}kick`)) {
        Modération.kickCommande(message)
    }
    if (message.content.startsWith(`${prefix}ban`)) {
        Modération.banCommande(message)
    }
    if (message.content.startsWith(`${prefix}delete`)) {
        Modération.suppCommande(message)
    }
})
