function displayMessage() {
    const message = arguments[0];
    process.stdout.write(message + '\n');
} 
module.exports = displayMessage;
