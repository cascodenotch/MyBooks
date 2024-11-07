import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {

  @Input() book: Book;
  @Output() cerrarTarjeta = new EventEmitter<Book>();
  @Input() par:boolean;

  closedBook(){
  this.cerrarTarjeta.emit(this.book);
  }

}
