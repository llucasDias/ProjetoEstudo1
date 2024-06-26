import {config} from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
    config({path: '.env.test'})
} else {
    config()
}

// process.env

const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'test', 'production']).default('production'), //// esse é o ambiente 
    DATABASE_CLIENT: z.enum(['sqlite' , 'pg']),
    DATABASE_URL: z.string(),
    PORT: z.coerce.number().default(3333),

}) // objeto

 const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('invalid environmente variables', _env.error.format())

    throw new Error ('Invalid')

}

export const env = _env.data