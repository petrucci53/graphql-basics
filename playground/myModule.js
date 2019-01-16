// ===Type of exports===
// Named export - Has a name. Have as many as needed.
// Deafult export - Has no name. You can only have one

const message = 'Some message from myModule.js'
const name = 'John'
const location = 'Istanbul'
const getGreeting = (name) => {
    return `Welcome to the course ${name}`
}

export {message, name, getGreeting, location as default}