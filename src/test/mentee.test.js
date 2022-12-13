const request = require("supertest");
const app = require("../app")

let idMock;
let idMentorMock = "639371595fc55e51652b591a"

describe("API test", () => {

    test("Route GET - Shows all registered mentees", (done) => {
        request(app)
            .get("/sisterhoodtech/mentee/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Route POST - Register a new mentee", (done) => {
        request(app)
            .post("/sisterhoodtech/mentee/add")
            .expect("Content-Type", /json/)
            .send({
                menteeName: "Shirlene Teles",
                age: 37,
                email: "shi@email.com",
                password: "senhashi",
                phoneNumberOrWhatsapp: 13991932851,
                languagesAndTechnologies: ["Javascript", "NodeJS", "NoSQL"],
                githubPage: "https://github.com/shi",
                linkedinPage: "https://www.linkedin.com/in/shi/",
                workHistory: ["Operadora de audio - Tv Thati", "Atendimento ao cliente - Icarus Net"],
                goal:"Transição de carreira",
                personalDescription: "Venho da area da comunicação, estudando backend no momento, procuro uma oportunidade de estagio ou como junior",
                match: true,
                mentorId: idMentorMock
            })
            .expect(201)
            .end((err, res) => {
                 console.log(res.body);
                if (err) return done(err);
                
                idMock = res.body.id;
                return done();
            });
    });

    test("Route GET - Filter by mentee name", (done) => {
        request(app)
            .get("/sisterhoodtech/mentee?menteeName=")
            .expect(200)
            .expect((res) => {
                expect(res.body.menteeName).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });

})