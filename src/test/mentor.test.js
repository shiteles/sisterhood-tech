const request = require("supertest");
const app = require("../app")

let elementId;

describe("API test", () => {

    test("Route GET - Shows all registered mentors", (done) => {
        request(app)
            .get("/sisterhoodtech/mentor/all")
            .expect(200)
            .expect((res) => {
                expect(res.body.length).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Route POST - Register a new mentor", (done) => {
        request(app)
            .post("/sisterhoodtech/mentor/add")
            .expect("Content-Type", /json/)
            .send({
                mentorName: "Janaina Lima",
                age: 37,
                email: "jana@email.com",
                password: "senhajana",
                phoneNumberOrWhatsapp: 11911112222,
                languagesAndTechnologies: ["Salesforce", "Java", "SQL"],
                githubPage: "https://github.com/jana",
                linkedinPage: "https://www.linkedin.com/in/jana/",
                workHistory: ["Project Manager - Empresa X"],
                personalDescription: "Mulher, mãe e profissional na área da tecnologia",
                match: true
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                elementId = res.body.id;
                return done();
            });
    });

    test("Route GET - Filter by mentor name", (done) => {
        request(app)
            .get("/sisterhoodtech/mentor?mentorName=")
            .expect(200)
            .expect((res) => {
                expect(res.body.mentorName).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            })
    });

/*
in progress - falhando no momento

        test("Rota GET - Filter by id", (done) => {
            request(app)
                .get(`/sisterhoodtech/mentor/${elementId}`)
                .expect(200)
                .expect((res) => {
                    expect(res.body.id).not.toBe(0);
                })
                .end((err, res) => {
                    if (err) return done(err);
                    return done();
                });
        });
    
        test("Route PATCH - Register a new mentor", (done) => {
            request(app)
                .patch(`/sisterhoodtech/mentor/${elementId}`)
                .expect("Content-Type", /json/)
                .send({
                    languagesAndTechnologies: ["Salesforce", "Java", "SQL", "CSS", "Scrum"]
                })
                .expect(200)
                .end((err, res) => {
                    expect(res.json).toBe(`Mentor successfully updated`);
                    if (err) return done(err);
                    return done();
                });
        });


 test("Route DELETE mentor by ID", (done) => {
        request(app)
            .delete(`/sisterhoodtech/mentor/delete/${elementId}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                console.log(res.body)
                expect(res.body.findMentor.email).toBe("jana@email.com");
            })
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
*/


})