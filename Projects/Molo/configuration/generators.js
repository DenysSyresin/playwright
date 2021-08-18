//random email generate function

function randomEmail(length = 4) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let addition = '';
    for (let i = 0; i < length; i++) {
        addition += characters[Math.floor(Math.random() * characters.length)];
    }

    return `0nottabene0+${addition}@gmail.com`;
}

//Jonhatan Frafer Date of Birth

const dayjs = require('dayjs')
const currentDate = dayjs()
const startDate = dayjs('1960/06/25', 'YYYY/MM/DD')
const endDate = dayjs('2017/03/25', 'YYYY/MM/DD')
const dateOfBirth = dayjs(startDate + currentDate.diff(endDate)).add(1, 'd').format('DD/MM/YYYY')


module.exports = {
    randomEmail,
    dateOfBirth
}