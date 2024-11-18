import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private apiUrl: string = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(this.apiUrl);
  }

  getOne(id_book: number) {
    console.log (id_book);
    console.log (`${this.apiUrl}/${id_book}`)
    return this.http.get(`${this.apiUrl}/${id_book}`);
  }

  add(book: Book) {
    return this.http.post(this.apiUrl, book);
  }

  edit(book: Book) {
    console.log (book);
    return this.http.put(this.apiUrl, book);
  }
  
  delete(id_book: number){
    console.log (id_book);
    const httpOptions = {headers: null, body: {id_book: id_book}}
    return this.http.delete(this.apiUrl, httpOptions);
  }

}


