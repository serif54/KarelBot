module.exports = {
    name: 'ipv4',
    description: 'ipv4',
    execute(message, args) {
        message.channel.send('ipv4 is the common format for writing the server IP address. It consists of a 32-bit format of 10 numbers in a XX.XXX.XXX.XX layout')
    },
};