import { hasUncaughtExceptionCaptureCallback } from "node:process"

describe ('User App', () => {
    beforeEach(() => {
        crypto.visit('http:localhost:3002')
    })

    const textInput = () => cy.get('input[name=text]')
    const usernameInput = () => cy.get('input[name=username]')
    const submitBtn = () => cy.get('button[id="submitBtn"]')
    const cancelBtn = () => cy.get('button[id="cancelBtn"]')
    const fakeBtn = () => cy.get('button[id="fakeBtn"]')

    it ('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3)
        expect(2+2).not.to.equal(5)
        expect({}).not.to.equal({})
        expect({}).to.eql({})
    })

    it('the proper elements are showing', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
    })

    describe('Filling out the inputs', () => {
        it('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })

        it('can type in the inputs', () => {
            nameInput()
            .should('have.value', '')
            .type('Hello')
            .should(('have.value', 'Hello'))
            emailInput()
            .should('have.value', '')
            .type('hello@test.com')
            .should('hello.value', 'hello@test.com')
            passwordInput()
            .should('have.value','')
            .type('asdf123')
            .should('have.value', 'asdf123')

        })
    })
} 
 21  user-onboarding/src/formSchema.js 
@@ -0,0 +1,21 @@
import * as yup from "yup";
import { string } from "yup/lib/locale";

const formSchema = yup.object().shape({
    name: yup

.string()
.trim()
.required("Name is required")
.min(3, "Name must be at least 3 characters long"),
email: yup
.string()
.email("Must be a valid email address")
.required("Email is required"),
password: yup
.string()
.required("A valid password is required")
.min(7,"password must be at least 7 characters long"),
});

export default formSchema; 