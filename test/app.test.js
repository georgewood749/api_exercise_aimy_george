const request = require('supertest')
const app = require('../app.js')

describe('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log(`Example app listening on port 5000`)
        })
    })

    afterAll((done) => {
        console.log('Stopping test server');
        api.close(done)
    })

    it('responds to get / with status of 200', (done) => {
        request(api).get('/').expect(200, done);
    })

    it('retrieves all cats', (done) => {
        request(api).get('/cat').expect(200, done);
    })
})