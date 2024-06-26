import {expect, it, beforeAll, afterAll, describe} from 'vitest'
import { app } from '../src/routes/app'
import request from 'supertest'
import { beforeEach } from 'node:test'
import { execSync } from 'node:child_process'


describe ('Transactions routes', () => {

    
    beforeAll(async() => {
       
       execSync('npm run knex migrate:latest')
        await app.ready()
    })
    
    
    afterAll(async() => {
        await app.close()
    })
    
    beforeEach(() => {
        execSync('npm run knex migrate:rollback -- all')
        execSync('npm run knex migrate:latest')
    })



    it('should be able to get a specific transaction', async () => {
        const createTransactionResponse = await request(app.server)
          .post('/transactions')
          .send({
            title: 'New transaction',
            amount: 5000,
            type: 'credit',
          })
    
        const cookies = createTransactionResponse.get('Set-Cookie')!
    
        const listTransactionsResponse = await request(app.server)
          .get('/transactions')
          .set('Cookie', cookies)
          .expect(200)
    
        const transactionId = listTransactionsResponse.body.transactions[0].id
    
        const getTransactionResponse = await request(app.server)
          .get(`/transactions/${transactionId}`)
          .set('Cookie', cookies)
          .expect(200)
    
        expect(getTransactionResponse.body.transaction).toEqual(
          expect.objectContaining({
            title: 'New transaction',
            amount: 5000,
          }),
        )
      })
    
      it('should be able to get the summary', async () => {
        const createTransactionResponse = await request(app.server)
          .post('/transactions')
          .send({
            title: 'Credit transaction',
            amount: 5000,
            type: 'credit',
          })
    
        const cookies = createTransactionResponse.get('Set-Cookie')!
    
        await request(app.server)
          .post('/transactions')
          .set('Cookie', cookies)
          .send({
            title: 'Debit transaction',
            amount: 2000,
            type: 'debit',
          })
    
        const summaryResponse = await request(app.server)
          .get('/transactions/summary')
          .set('Cookie', cookies)
          .expect(200)
    
        expect(summaryResponse.body.summary).toEqual({
          amount: 3000,
        })
      })

    })