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
                languagesAndTechnologies: ["Javascript", "NoSQL"],
                githubPage: "https://github.com/shiteles",
                linkedinPage: "https://www.linkedin.com/in/shirleneteles/",
                workHistory: ["Operadora de audio - Tv Thati", "Atendimento ao cliente - Icarus Net"],
                goal:"Transição de carreira",
                personalDescription: "Descrição com resumo da vida da vida, expêriencias e o que a mentorada achar relevante",
                match: true,
                mentorId: idMentorMock
            })
            .expect(201)
            .end((err, res) => {
                if (err) return done(err);
                idMock = res.body.savedMentee._id;
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

    test("Route POST - Mentee Login", (done) => {
        request(app)
        .post("/sisterhoodtech/mentee/login")
        .send({
            email: "shi@email.com",
            password: "senhashi"
        })
        .expect((res) => {
            token = res.body.token;
          })    
        .expect(200)
        .end((err, res) => {
            if (err) return done(err);
            return done();
          
        })
    })

    test("Rota GET - Filter by id", (done) => {
        request(app)
            .get(`/sisterhoodtech/mentee/${idMock}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.id).not.toBe(0);
            })
            .end((err, res) => {
                if (err) return done(err);
                return done();
            });
    });

    test("Route PATCH - Update a mentee", (done) => {
        request(app)
            .patch(`/sisterhoodtech/mentee/${idMock}`)
            .set("Authorization", `Bearer ${token}`)
            .expect("Content-Type", /json/)
            .send({
                languagesAndTechnologies: ["Javascript", "NodeJS", "NoSQL","CSS","GIT"],
                goal:"Vaga na area da tecnologia como junior ou estagiaria",
            })
            .expect(200)
            .end((err, res) => {
               
                if (err) return done(err);
                return done();
            });
    });

    test("Route DELETE mentee by Id", (done) => {
        request(app)
            .delete(`/sisterhoodtech/mentee/delete/${idMock}`)
            .set("Authorization", `Bearer ${token}`)
            .expect("Content-Type", /json/)
            .expect(200)
            .expect((res) => {
                expect(res.body.findMentee.email).toBe("shi@email.com");
            })
            .end((err, res) => {
                if (err) return done(err)
                return done()
            })
    })
    

})