import { Book } from "./book";

export class Response {

    constructor(public error: boolean, 
                public codigo: number,
                public mensaje: string,
                public data: Book[],){}
}

