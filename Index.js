const Discord = require('discord.js');
const client = new Discord.Client()
const { token, prefix } = require('./config.json');
const Fun = require("./FonctionAky/Fun.js")
const Modération = require("./FonctionAky/Modération.js")
const Cacher = require("./FonctionAky/Cacher.js")
const Utilitaire = require("./FonctionAky/Utilitaire.js")

client.login(token);

client.once('ready', () => {
    console.log("Connected");
    client.user.setActivity("ZZCCMXTP - LEZGONGUE", { type: "LISTENING"});
    client.user.setStatus("online");
});

client.on("message", message => {
    
    // Commande cacher //

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

    // Commande Modération //

    if (message.content.startsWith(`${prefix}mute`)) {
        Modération.muteCommande(message)
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


