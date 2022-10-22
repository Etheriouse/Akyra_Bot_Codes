    // Fonction, commande utilitaire //

module.exports = {

    Eq2ndCommande:
    
    function Eq2nd() {
        
    },

    PrefixactuelCommande:

    function prefixactuel(message, prefix) {
        message.channel.send(`Le prefix actuel du bot est: ${prefix}`)
    },

    PrefixChangeCommande:

    function PrefixChange(message, prefix) {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            const prefixchangeString = message.toString().slice(14)
            if (prefixchangeString) {
                console.log(prefixchangeString)
                const prefixchangeStringLenght = prefixchangeString.length
                if (prefixchangeStringLenght <= 1 && prefixchangeStringLenght >= 1) {
                    console.log(prefix, " Avant commande")
                    var prefix = prefixchangeString.toString()
                    console.log(prefix, " Après commande")
                    message.channel.send(`Voici votre nouveau prefix: ${prefix}`)
                }
                else {
                    message.channel.send("Veuillez donner un préfix de 1")
                }
            }
            else {
                message.channel.send("Veuillez donner un nouveau prefix")
            }
        }
        else {
            message.channel.send("La plèbe doit posséder la permission de gerer les messages")
        }
    },

    /**function PrefixChange(message, prefix) {
        if(!(message.member.hasPermission('MANAGE_MESSAGES'))) {
            message.channel.send("La plèbe doit posséder la permission de gérer les messages");
            return;
        }   
        const prefixchangeString = message.toString().slice(14)
        if(!(prefixchangeString)) {
            message.channel.send("Veuillez donner un nouveau préfix");
            return;
        }
        const prefixchangeStringLenght = prefixchangeString.length
        if (!(prefixchangeStringLenght <= 1 && prefixchangeStringLenght >= 1)) {
            message.channel.send("Veuillez donner un préfix de 1");
            return;
        }
        console.log(prefix, " Avant commande")
        prefix = prefixchangeString.toString()
        console.log(prefix, " Après commande")
        message.channel.send(`Voici votre nouveau prefix: ${prefix}`)
        
    },*/
    
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
        .setDescription("---- Commandes modération: ----\n- Shut down le bot ( kill ) \n- Bannir ( ban ) \n- Expulser ( kick )\n- Mute ( mute ) \n- Supprimer des messages ( delete )\n---- Commandes fun: ----\n- Pile ou face ( pof ) \n- Réponse aléatoire ( 8ball ) \n- Réponse aléatoire sympa ( 8b ) \n- Russe ( russe ) \n- Roulette ( roulette ) \n- Shifumi ( sfm )\n- Gif random ( gr )\n- Destituer l'auteur ( destituer @Etheriouse#1617 )\n- Forçage ( histoire )\n- GigachadTitude ( gigachadtitude ) \n---- Utilitaire: ----\n- Changer le prefix ( changeprefix ) \n- Prefix actuel ( prefixactuel ( sans besoin de prefix )) \n- Avatar ( a )\n- Information sur une personne ( inf )\n - Commandes ( help )")
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
