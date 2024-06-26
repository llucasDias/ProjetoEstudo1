import { transactionsRoutes } from './transactions'
import fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'

export const app = fastify()


app.register(fastifyCookie)
app.register(transactionsRoutes, { prefix: 'transactions',})