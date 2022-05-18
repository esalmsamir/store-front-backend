import Client from "pg";
import client from "../database";



export type Book = {
    id: number;
    title: string;
    author: string;
    totalPages: number;
    summary: string;
}
export class Bookstore {
    async index(): Promise<Book[]> {
        try {
            const conn = await client.connect();
            const sql = `SELECT * FROM BOOK`
            const result = await conn.query(sql)
            conn.release()
            return result.rows
        } catch (err) {
            throw new Error('cannot get weapons')
        }

    }
}