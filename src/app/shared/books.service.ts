import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

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
    console.log(id_book);
    console.log(`${this.apiUrl}/book/${id_book}`);
    return this.http.get(`${this.apiUrl}/book/${id_book}`);
}

  add(book: Book) {
    return this.http.post(this.apiUrl, book);
  }

  edit(book: Book) {
    console.log (book);
    return this.http.put(this.apiUrl, book);
  }
  
  delete(Id_book: number){
    console.log (Id_book);
    const httpOptions = {headers: null, body: {Id_book: Id_book}}
    return this.http.delete(this.apiUrl, httpOptions);
  }

  getBooksByUser (Id_user: number){
    return this.http.get(`${this.apiUrl}/${Id_user}`)
    
  }

}


