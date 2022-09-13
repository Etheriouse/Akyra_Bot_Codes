// Fonction, commande cacher //
    
module.exports = { 
    cmCommande: 
    function cm(message, client) {
        var channelss = message.toString().slice(3, 22); // On récupère l'id du channel donner dans la commande 
        var msg = message.toString().slice(23) // On récupère le message donner dans la commande
        const channel = client.channels.cache.find(channel => channel.id === channelss) // On crée une variable qui représente le channel grace a l'id récupéré plus haut
        console.log("Id channel envoyer: ", channelss)
        console.log("Message envoyer: ", msg) // On log l'id du channel et le message envoyer dans celui-ci
        channel.send(msg); // Et on envoie le message dans le channel defini précédement
    },

    mpCommande:
    function mp(message) {
    
        id_user = message.toString().slice(5,23) // On récupère l'id de la personne a qui lon veux envoyer un message
        var msgg = message.toString().slice(25) // On récupère le message a envoyer
        console.log("Id utilisateur envoyer: ", id_user)
        console.log("Message envoyer a l'utilisateur: ", msgg) // On log se qu'on a récupéré précédement 
        var authors = message.mentions.users.first() // On defini le membre a qui l'on veux envoyer le message grace a l'id récupéré
        console.log(authors) // On log le destinataire 
        authors.send(msgg.toString()) // On envoie le message en convertissant le message en suite de caractère pour que la fonction .send() puisse fonctionner
        console.log("Message envoyer"); // Et on log pour confirmer l'envoie du message
        
    } 
}