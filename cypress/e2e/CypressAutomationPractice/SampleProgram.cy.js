/// <reference types ="cypress" />

const { it } = require("mocha");
const { describe } = require("mocha");

describe("Running First Program", () => {
    it("Opening Google", () => {
        cy.visit("https://www.youtube.com/")
    })
})