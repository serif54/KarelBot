module.exports = {
    name: 'ipv6',
    description: 'IPV6',
    execute(message, args) {
        message.channel.send('IPv6 is another format used to write IP addresses, but it differes from IPv4 in the sense that it uses hexadecimals instead of 32-bit decimals to operate, and it is laid out as XXXX.XXXX.XXXX.XXXX')
    },
};