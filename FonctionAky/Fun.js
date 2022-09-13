// Fonction, commande divertissante //

const { Message } = require("discord.js");

 
module.exports = {
    
    ballcommande:

    function hachiball(message) {
        const possibleRéponse = [
            "Oui",
            "Affirmatif",
            "je confirme",
            "T'a pas tord",
            "Non",
            "Négatif",
            "Je désaprouve tes dire",
            "Ah bah t'a clairement tord",
            "Peut-être",
            "Qui sais",
            "En vrai...",
            "Je ne peut répondre a ta proposition très cher",
            "Je ne répond point a la plèbe",
        ]

        const randompossibleréponse = possibleRéponse[Math.floor(Math.random() * possibleRéponse.length)]
        message.reply(randompossibleréponse)
    },

    russeCommande:

    function russe(message, Discord) {
        const russ = [
            "vie",
            "vie",
            "mort",
            "vie",
            "vie",
            "vie",
        ]
        const life = russ[Math.floor(Math.random() * russ.length)]

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.tag} es que tu va te prendre un Warn ????`)
        .setImage('https://c.tenor.com/TsCbeVvyEhsAAAAM/roulette-bobi.gif')
        message.channel.send(embed)
        setTimeout(function(){
            if (life == "vie") {
                message.channel.send(`Tu est vivant ! Tu n'aura donc pas de warn petite personne de la plèbe`)
            }
            else {
                message.channel.send(`<@497120447909986305> ! Cette cher personne de la plèbe doit se prendre un warn ! Il est mort le con`)
            }
        }, 10000)
    },

    rouletteCommande:

    function roulette(message, Discord) {
        tentativeUser = message.toString().slice(10)
        if (tentativeUser) {
            message.channel.send("La roulette de la plèbe tourne !")
            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage("https://i.gifer.com/origin/bd/bd5a2ac4a1db88634144b16d3cb0bdcf.gif")
            message.channel.send(embed)
            setTimeout(function(){ 
                let a = Math.floor(Math.random() * (Math.ceil(100) - Math.floor(0))) + 0 
                console.log(a, tentativeUser)
                if (tentativeUser == a ) {
                    message.channel.send(`Vous faite parti de la haute société très cher <@${message.author.id}> !! Bien venu parmis nous.`)
                }
                else {
                    message.channel.send("Petite personne de la plèbe reste dans celle ci.")
                }
            }, 7000);
        }
        else {
            message.channel.send("Veuillez indiquer une valeur entre 0 et 100 pour la roulette triple buse !")
        }
    },

    sfmCommande:

    function sfm(message) {

        const reponseUser = message.toString().slice(5)
        const sfm = [
            "Feuille",
            "Pierre",
            "Ciseaux",
        ]
        const sfmReponse = sfm[Math.floor(Math.random() * sfm.length)];
        // le Grand if cherche a savoir dans quelle cas le membre a donner une réponse qui lui fait gagner la parti selon la réponse du bot 
        if ((sfmReponse == "Pierre" && reponseUser == "Feuille") || (sfmReponse == "Feuille" && reponseUser == "Ciseaux" ) || (sfmReponse == "Ciseaux" && reponseUser == "Pierre")) {
            message.channel.send(sfmReponse + " t'a gagner, bien joué petite personne de la plèbe")
        }
        else if (sfmReponse == reponseUser) { // le else if regarde si il y a la même réponse entre celle du bot et celle du membre 
            message.channel.send(sfmReponse + " Égalité, je ne te considère point comme la plèbe, mais tu ne fait pas parti de la haute société.")
        }
        else { // le reste des possibilité fait donc parti des cas ou le membre a perdu
            message.channel.send(sfmReponse + " tu a perdu, tu ne fait point parti de la haute société personne de la plèbe")
        }
        console.log(sfmReponse)
    
    },

    destituéCommande: 
    
    function destitué(message) {
        if (message.member.hasPermission("ADMINISTRATOR")) {  //Verifier si le message du membre a les permission
            message.channel.send("En vrai... pour le fun on le ferai pas?")
        }
        else {
        message.channel.send(`Bah nan connard on destitue pas l'auteur aussi facilement, bien essayer <@${message.author.id}>`)
        }
    },

    grCommande: 

    function gr(message, Discord) {
    
        const gifrandom = [
            "https://c.tenor.com/0q_vaHjhj4cAAAAM/samuel-smile-reverse-reverse.gifimage.png",
            "https://c.tenor.com/N2oOjaNdK38AAAAM/nick-young-what.gif",
            "https://c.tenor.com/N4lOQHsto6wAAAAM/shotgun-crusader.gif",
            "https://c.tenor.com/RmmHAec8OaQAAAAM/jetstream-sam.gif",
            "https://tenor.com/view/i-show-speed-speed-shake-now-suck-that-sucking-gif-24039341",
            "https://c.tenor.com/jplf8o3QjTMAAAAM/opinion-ignored-armstrong.gif",
        ] //Base de donner de gif
        const grReponse = gifrandom[Math.floor(Math.random() * gifrandom.length)]; // le bot va allez piocher une valeur 
                                                                                    //de la base de donner de facon aléatoire
        const embed = new Discord.MessageEmbed()
        .setTitle("Un gif aléatoire pour la plèbe")
        .setImage(grReponse)
        message.channel.send(embed) // Le bot fait un petit embed pour ne pas montrer le lien du gif de la base de donner
    }

}




