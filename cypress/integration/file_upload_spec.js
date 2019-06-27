it('file upload via dropzone', () => {
    cy.visit('/upload')

    const dropEvent = {
        dataTransfer: {
            files: [
            ],
        },
    }
    
    const filename = 'this-is-my-file-' + Date.now()

    cy.fixture('directory_structure.png').then((picture) => {
        return Cypress.Blob.base64StringToBlob(picture, 'image/png').then((blob) => {
            blob.name = filename
            dropEvent.dataTransfer.files.push(blob);
        })
    })

    cy.get('#drag-drop-upload').trigger('drop', dropEvent)
    cy.get('.dz-filename').should('have.text', filename)
})