describe('Users Onboarding', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    })

    const userInput = () => cy.get('input[name=username]');
    const passInput = () => cy.get('input[name=password]');
    const mailInput = () => cy.get('input[name=email]');
    const tosInput = () => cy.get('input[name=tos]');
    const submitBtn = () => cy.get('button[id=submitBtn]');
    const tippyInput = () => cy.get('input[name=foobar]');

    it('Sanity check to make sure test work', () => {
        // 'it' is a test 
        // expect is an assertion 
        expect(1 + 2).to.equal(3); 
        expect(2 + 2).not.to.equal(5); // Strict equality ===
        expect({}).not.to.equal({}); // Strict equality {} !== {}
        expect({}).to.eql({}); // not strict ==
    })

    it('The proper elements are showing', () => {
        userInput().should('exist');
        passInput().should('exist');
        mailInput().should('exist');
        tosInput().should('exist');
        submitBtn().should('exist');
        tippyInput().should('not.exist');

        cy.contains('Submit User').should('exist');
        cy.contains(/submit user/i).should('exist');

    })

    describe('Filing out the inputs and canceling', () =>{
        it('Can navigate to the site', () => {
            cy.url().should('include', 'localhost');
        })
        
        it('Submit button start out disabled', () => {
            submitBtn().should('be.disabled')
        })

        it('Can type in the input', () => {
            userInput().should('have.value', '').type('dinoflame').should('have.value', 'dinoflame');

            passInput().should('have.value', '').type('ScrewFlames').should('have.value', 'ScrewFlames');

            mailInput().should('have.value', '').type('FlamesDion@gmail.com').should('have.value', 'FlamesDion@gmail.com');
        })

        it('the submit button enables when both inputs are filled out', () => {
            userInput().type('Phantaysia');
            passInput().type('OScarsRock');
            mailInput().type('Oscarfambam@gmail.com');
            tosInput().should('exist').click();
            submitBtn().should('not.be.disabled');
        })
    })
    describe('Adding a new Quote', () => {
        it('Can submit a new User', () => {
            userInput().type('Mich');
            passInput().type('OScarsRock');
            mailInput().type('OscarfamMich@gmail.com');
            tosInput().click();
            submitBtn().click();
        })
    })
})