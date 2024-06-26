import { table } from "console";
import type { Knex } from "knex";

/// up oq a migration vai fazer no banco de dados: criar tabela etc

/// down se der erro, callback

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable('transactions', (table) => {
        table.uuid('id').primary()
        table.text('title').notNullable()
        table.decimal('amount', 10, 2).notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('transactions')
}

/// migration se der errado, precisa fazer outra. se foi já era