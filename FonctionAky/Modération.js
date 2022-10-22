// Fonction, commande modération //

const { RoleManager } = require("discord.js")

module.exports = {

    killCommande: 

    function kilé(message) {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(`Que la plèbe se taise, la haute société souhaite s'endormir`)
                if (message.author.id == "497120447909986305") {    
                    setTimeout(function(){
                        process.exit()
                    }, 100) 
                }
                else {
                    message.channel.send("Alors oui mais non car tu n'est pas le Dieu suprème <@497120447909986305>.")
                }
        } 
        else {
            message.channel.send(`Comment ose tu !! Tu n'es qu'un dechet de la plèbe !`)
        }
    },

    banCommande: 

    function ban(message) {

        if(message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("BAN_MEMBERS")) {
                
            const userbanned = message.mentions.members.first();
            console.log(userbanned)
            if(userbanned) {
                const reason = message.toString().slice(25)
                console.log("Raison du banissement: ", reason)
                userbanned.ban({ reason })
                console.log('User banned')
            }
            else {
                message.channel.send("Mentionne quelqu'un triple buse")
            }
    
        }
        else {
            message.channel.send("La plèbe ne doit pas toucher au jouet de la haute société")
        }
    
    },

    kickCommande:
    
    function kick(message) {
    
        if(message.member.hasPermission("ADMINISTRATOR") || message.member.hasPermission("KICK_MEMBERS")) {
                
            const userkicked = message.mentions.members.first();
            console.log(userkicked)
            if(userkicked) {
                userkicked.kick("A bien été kick")
                console.log('User kicked')
            }
            else {
                message.channel.send("Mentionne quelqu'un triple buse")
            }
    
        }
        else {
            message.channel.send("Vous devez avoir la permission d'administrateur pour éxécuter cette commande :(")
        }
    
    },

    muteCommande:

    function mute(message){
        
    
    }, // a modifier car ne fonctionne pas

    suppCommande: 

    function supp(message) {
            if(message.member.hasPermission('MANAGE_MESSAGES')){
    
                let number = message.toString().slice(8)
                let numberInt = parseInt(number)
                if(numberInt >= 0 ){
                    if(numberInt <= 99 && numberInt >= 1){
      
                        message.channel.bulkDelete(numberInt)
                        message.channel.send(`Vous avez supprimé ${numberInt} message(s)`)
                        console.log("supp")
      
                    }
                    else{
                        message.channel.send(`Vous devez indiquer une valeur entre 1 et 99`)
                    }
                }
                else{
                    message.channel.send(`Vous devez indiquer un nombre de messages à supprimer`)
                }
            }
            else{
                message.channel.send(`Vous devez avoir la permission de gérer les messages pour éxécuter cette commande`)
            }
    } 
}
