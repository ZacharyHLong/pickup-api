import app from './app.js'
import request from 'supertest'
import { describe } from 'node:test'

describe("App tests", () => {
    test("GET /", async () => {
        const res = await request(app).get('/')
        expect(res.status).toBe(200)
        expect(res.headers['content-type']).toMatch(/json/i)
        expect(res.body.info).toBeDefined()
        expect(res.body.info).toBe('PickUp')
    })

    describe('Get court lists', () => {
        let res 
        
        beforeEach(async () => {
            res = await request(app).get('/courts/')
            expect(res.status).toBe(200)
            expect(res.headers['content-type']).toMatch(/json/i)
        })

        it('Should return an array of elements', () => {
            expect(res.body).toBeInstanceOf(Array)
        })

        it('Has elements with the cirrect data structure and data', () => {
            res.body.forEach(el => {
                expect(el._id).toBeDefined()
                expect(el.address).toBeDefined()
                expect(el.city).toBeDefined()
                expect(el.state).toBeDefined()
                expect(el.name).toBeDefined()
            })   
            expect(res.body[0]._id.length).toBe(24)
            expect(res.body[0].address).toBe('123 Hoop St')
        })
    })

    test('Create a new court', async () => {
        const res = await request(app).post('/courts/').send({
            name: 'Test Court',
            address: '123 Test St',
            city: 'Test City',
            state: 'Test State',
            description: 'Test Description'
        })

        expect(res.status).toBe(201)
        expect(res.headers['content-type']).toMatch(/json/i)
        expect(res.body._id).toBeDefined()
        expect(res.body.name).toBe('Test Court')
        expect(res.body.address).toBe('123 Test St')
        expect(res.body.city).toBe('Test City')
        expect(res.body.state).toBe('Test State')
        expect(res.body.description).toBe('Test Description')
    })

    describe('Get game listings', () => {
        let res

        beforeEach(async () => {
            res = await request(app).get('/games/')
            expect(res.status).toBe(200)
            expect(res.headers['content-type']).toMatch(/json/i)
        })

        it('Should return an array of elements', () => {
            expect(res.body).toBeInstanceOf(Array)
        })

        it('Has elements with the correct data structure and data', () => {
            res.body.forEach(el => {
                expect(el._id).toBeDefined()
                expect(el.title).toBeDefined()
                expect(el.date).toBeDefined()
                expect(el.time).toBeDefined()
                expect(el.address).toBeDefined()
                expect(el.city).toBeDefined()
                expect(el.state).toBeDefined()
                expect(el.skillLevel).toBeDefined()
            })
            expect(res.body[0]._id.length).toBe(24)
        })
    })

    test('Create a new game listing', async () => {
        const res = await request(app).post('/games/').send({
            title: 'Test Game',
            date: '2023-12-18',
            time: '18:00',
            address: '123 Test St',
            city: 'Test City',
            state: 'Test State',
            skillLevel: 'Intermediate'
        })

        expect(res.status).toBe(201)
        expect(res.headers['content-type']).toMatch(/json/i)
        expect(res.body._id).toBeDefined()
        expect(res.body.title).toBe('Test Game')
        expect(res.body.date).toMatch(/2023-12-18/)
        expect(res.body.time).toBe('18:00')
        expect(res.body.address).toBe('123 Test St')
        expect(res.body.city).toBe('Test City')
        expect(res.body.state).toBe('Test State')
        expect(res.body.skillLevel).toBe('Intermediate')
    })

})