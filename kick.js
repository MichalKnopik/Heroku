module.exports = {
    name : `kick`,
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission(`KICK_MEMBERS`)) return message.channel.send(`Nie ma permisji! \n Nadaj je sobie albo botowi! 🤖`);
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send(`**Prosimy oznaczyć użytkownika, którego chcesz wyrzucić!** 📔`);
        await Member.kick({ reason : args.slice(1).join(" ")})
        message.channel.send(`**${Member.user.tag}**, zostałeś wyrzucony z serwera! \nNiestety, złamałeś zasadę serwera **Pokemon GO PL**, a zareagował na to administrator.`)
    }
}