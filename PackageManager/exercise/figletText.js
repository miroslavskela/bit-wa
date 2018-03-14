var figlet = require('figlet') 

const text = figlet.textSync('Frontend Bootcamp', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
});
module.exports = {
    text
}