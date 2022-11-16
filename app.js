const token = "TOKEN";
//cooldown = {};
const { REST, Routes, Client, GatewayIntentBits, PermissionsBitField } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const commands = [
  {
    name: 'ping',
    description: 'pong',
    options:[{name:"channel",description:"pong",type:3,required:true}]
  },
];

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("APPLICATIONID"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'hi') {
    //if (!interaction.member.permissions.has(PermissionsBitField.Flags.BanMembers)) return interaction.reply('No Perms!');
    //interaction.options.get("channel").value;
    //interaction.member.guild.id;
    //interaction.reply({content:"",ephemeral:true});
  }

  else if (interaction.commandName === 'non existant') {
    //if(cooldown[interaction.member.id] && cooldown[interaction.member.id] > Date.now()-86400000) return interaction.reply({content:"You're on cooldown.",ephemeral:true});// 5 min
    //cooldown[interaction.member.id] = Date.now();
  }

});client.login(token);
