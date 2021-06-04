const data = require('../fixtures/data.json')

class CreateProfesor {
    get nameInput() {
        return cy.get('input[id="input-default"]')
    }

    get lastNameInput() {
        return cy.get('input[id="input-default1"]')
    }

    get gradebook() {
    return cy.get('input[id="__BVID__35"]').select('31232132')

    }

    get addImageButton() {
    return cy.get('button[type="Add Image"]')

    }
    get urlImage() {
        return cy.get('input[id="__BVID__35"]').type('https://jpeg.org/images/jpeg-home.jpg')
    }

    get submitButton() {
        return cy.get('button[type="Submit"]')
    }



    createProfesorForm() {
        this.nameInput.type(data.profesorData.name)
        this.lastNameInput.type(data.profesorData.lastName)
        this.gradebook.type()
        this.urlImage.type(data.profesorData.urlImage)
        this.addImageButton.click()
        this.submitBtn.click()
    }
}

export const createProfesor = new CreateProfesor()