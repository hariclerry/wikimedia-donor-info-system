const supertest = require("supertest");
const server = require("../../index");
const request = supertest(server);

describe("Donors", () => {

    it("should fetch form", async () => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
    });

    it("Should save donor info to database", async () => {
        const data = {
            lName: "John",
            fName: "Doe",
            address: "Down town",
            city: "Paradise Inn",
            region: "Central",
            country: "Paradise",
            code: "6278",
            phone: "83992002",
            email: "johndoe@mail.com",
            contact: "Phone",
            payment: "Bitcoin",
            frequency: "Monthly",
            amount: "30000",
            comments: "A good cause for open source software"
        };
        const results = await request.post("/donor").send(data);
        const { lName, country, email } = results.request._data

        expect(lName).toBeTruthy();
        expect(country).toBeTruthy();
        expect(email).toBeTruthy();
        expect(typeof results.request._data).toBe("object");
    });
});


