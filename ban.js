module.exports = {
    name : `ban`,
    run : async(client, message, args) => {
        if(!message.guild.me.hasPermission(`BAN_MEMBERS`)) return message.channel.send(`Nie ma permisji! \n Nadaj je sobie albo botowi! 🤖`);
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send(`**Prosimy oznaczyć użytkownika, którego chcesz zbanować!** 📔`);
        await Member.ban({ reason : args.slice(1).join(" ")})
        message.channel.send(`**${Member.user.tag}**, zostałeś zbanowany! \nNiestety, złamałeś zasadę serwera **Pokemon GO PL**, a zareagował na to administrator.`)
    }
}
