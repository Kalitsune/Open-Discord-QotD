const { SlashCommandBuilder, PermissionFlagsBits, ChannelType } = require('discord.js');

const { getKeyLocalizations } = require('../../../localizations/localizations.js');

module.exports = {
    init (client) {
    },
    data: new SlashCommandBuilder()
        .setName('settings').setDescription("Manage server settings.")
        .setNameLocalizations(getKeyLocalizations('commands:settings.name'))
        .setDescriptionLocalizations(getKeyLocalizations('commands:settings.description'))
        .setDefaultMemberPermissions(PermissionFlagsBits.MANAGE_CHANNELS)
        .addSubcommand(subcommand =>
            subcommand.setName('channel').setDescription('Sets the channel in which QotDs will be sent.')
                .setNameLocalizations(getKeyLocalizations('commands:settings.options.channel.name'))
                .setDescriptionLocalizations(getKeyLocalizations('commands:settings.options.channel.description'))
                .addChannelOption(option =>
                    option.setName('target').setDescription("The channel in which QotD will be asked.")
                        .setNameLocalizations(getKeyLocalizations('commands:settings.options.channel.options.target.name'))
                        .setDescriptionLocalizations(getKeyLocalizations('commands:settings.options.channel.options.target.description'))
                        .addChannelTypes(ChannelType.GuildText)
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName('moderationchannel').setDescription('Sets the channel in which QotDs will be moderated.')
                .setNameLocalizations(getKeyLocalizations('commands:settings.options.moderationchannel.name'))
                .setDescriptionLocalizations(getKeyLocalizations('commands:settings.options.moderationchannel.description'))
                .addChannelOption(option =>
                    option.setName('target').setDescription("If set, QotD suggestions will be sent to this channel for review.")
                        .setNameLocalizations(getKeyLocalizations('commands:settings.options.moderationchannel.options.target.name'))
                        .setDescriptionLocalizations(getKeyLocalizations('commands:settings.options.moderationchannel.options.target.description'))
                        .addChannelTypes(ChannelType.GuildText)
                        .setRequired(false)
                )
        )
        .addSubcommand(subcommand =>
            subcommand.setName('ping').setDescription("Sets the role that'll get pinged when QotD are asked.")
                .setNameLocalizations(getKeyLocalizations('commands:settings.options.ping.name'))
                .setDescriptionLocalizations(getKeyLocalizations('commands:settings.options.ping.description'))
                .addRoleOption(option =>
                    option.setName('role').setDescription('If set, this role will be pinged when QotD are asked.')
                        .setNameLocalizations(getKeyLocalizations('commands:settings.options.ping.options.role.name'))
                        .setDescriptionLocalizations(getKeyLocalizations('commands:settings.options.ping.options.role.description'))
                        .setRequired(false)
                )
        )
    ,
    async execute(interaction) {
    },
};
