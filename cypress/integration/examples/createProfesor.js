import { authLogin} from '../../pageObjects/loginPage.js'
import { createProfesor} from '../../pageObjects/createProfesor'
const faker = require('faker');


describe('Log in', () => {
    beforeEach(() => {
        cy.visit('')
       
     })
    
    it('login with valid crds', () => {
        authLogin.login('acafaca2@gmail.com', 'Ia20061982')
    })
})

it('create gallery', () => {
    createProfesor.createProfesorForm()

})

