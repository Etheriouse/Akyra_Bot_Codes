    // Fonction, commande utilitaire //

module.exports = { 
    
    avatarCommande: 

    function avatar(message, Discord) {
        const authors = message.mentions.users.first() || message.author // On recupère le membre qui a executer la commande ou le membre mentioner
        Img = authors.displayAvatarURL({ dynamic: true, size: 1024 }) // On récupère et on defini l'avatar du membre avec une haute definition et on autorise l'affichage d'image dynamic ( gif )
        const embed = new Discord.MessageEmbed()
        .setTitle(`Avatar de ${authors.tag}`)
        .setImage(Img)
        .setColor("RANDOM")
        message.channel.send(embed) // On crée un embed pour afficher l'avatar sans le lien, et on met une couleur aléatoire a chaque création d'embed 
    },

    helpCommande:

    function help(message, Discord, prefix) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Help / Commandes')
        .setColor(0xb300ff) // On crée un embed avec une couleur défini ( violet ) 
        .setAuthor({ name: 'Some name', url: 'https://discord.js.org' }) 
        .setDescription("---- Commandes modération: ----\n- Bannir ( ban ) \n- Expulser ( kick )\n- Mute ( mute ) \n- Supprimer des messages ( delete )\n---- Commandes fun: ----\n- Réponse aléatoire ( 8ball ) \n- Russe ( russe ) \n- Roulette ( roulette ) \n- Shifumi ( sfm )\n- Gif random ( gr )\n- Destituer l'auteur ( destituer @Etheriouse#1617 ) \n---- Utilitaire: ----\n- Avatar ( a )\n- Information sur une personne ( inf )\n - Commandes ( help )")
        // La description contient toute les information des commande pour le !help
        .addFields(
            { name: "Commande en cours de dévellopement", value: "!mute, !gr, !inf"},
            { name: 'Préfix actuel:', value: `${prefix}` },
            { name: 'Akyra.bot', value: "Source, t'inquiète frère", inline: true }
                ) // les Fields son en bas pour afficher des petit text qui ne sont pas indispensable
    
    message.channel.send(embed);

    },

    infCommande:
    
    function inf(message, Discord) {
        const authors = message.mentions.users.first() || message.author // On récupère le membre mentioner ou l'auteur du message
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Commande de ${message.author.tag}`)
        .setTitle(`Information de ${authors.tag}`) // On crée notre embed
        .addFields(
            {
                name: "Surnom",
                value: authors.nickname || "Aucun",
            },
            {
                name: "A rejoint le serveur le :",
                value: /**new Date(authors.joinedTimestamp).toLocaleDateString(),*/ authors.joinedAt
            },
            {
                name: "A rejoint Discord le :",
                value: new Date(authors.createdTimestamp).toLocaleDateString(),
            },
            /**{
                name: "Nombre de rôle:",
                value: guild.authors.roles.number - 1,
            }
            */

            ) // Et on y met en addFields qui remplace la description toute les information que l'on veut afficher sur la personne
        message.channel.send(embed)
    } 

}