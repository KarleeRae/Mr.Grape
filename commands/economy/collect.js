/*module.exports = {	
    name: 'collect',	
    aliases: ['col'],	
    description: 'collect the stars from your starmill!',	
    cd: "Ya gotta wait for the stars to generate (hey that rhymed!)",	
    cooldown: 500,	
    async execute(message, args, d) {	
        let inv = await d.items.get(message.author.id);	
        let collectedStars;	
        const rn = Date.now();	
        if (!inv || !inv.starmill || inv.starmill === 0) { return message.channel.send('You don\'t have a starmill! ~~broke man~~'); }	
        if (!inv.time) { inv.time = {}; }	
        if (!inv.time.starmill) {	
            inv.time = {};	
            inv.time.starmill = rn;	
            collectedStars = inv.starmill;	
        }	
        else {	
            let elapsedTime = Math.floor((rn - inv.time.starmill) / 60000);	
            inv.time.starmill = rn;	
            collectedStars = inv.starmill * (~~(elapsedTime / 10));	
        }	
        d.addMoni(message.author.id, collectedStars);	
        await d.items.set(message.author.id, inv);	
        const colEmbed = new d.Discord.MessageEmbed()	
            .setColor('#dd2de0')	
            .setTitle(message.author.username + `'s collection of stars`)	
            .addField('Collected', collectedStars + " :star:s")	
            .setThumbnail('https://www.google.com/search?q=animated+bug&rlz=1CABJUN_enUS942&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjKl-TY5I3vAhWrFzQIHfNkDXMQ_AUoAXoECBIQAw&biw=1366&bih=609&safe=active&ssui=on#imgrc=RqWjLI1hKgFD6M')	
            .setTimestamp()	
            .setFooter('Buggi Bank Inc.');	
        message.channel.send(colEmbed);	

    }	
};*/
