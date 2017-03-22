import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { CustomModalContext, CustomModal } from './custom-modal-sample';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.css'],
  providers: [BookService, Modal]
})
export class BookShelfComponent implements OnInit {
  books: Book[];

  constructor(private bookService: BookService, public modal: Modal) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
     this.bookService.getDummyBooks().subscribe(books => this.books = books);
  }

  openCustom(): void {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('A simple Alert style modal window')
        .body(`
            <h4>Alert is a classic (title/body/footer) 1 button modal window that
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }

  onClick() {
    return this.modal.open(CustomModal,  overlayConfigFactory({ num1: 2, num2: 3 }, BSModalContext));
  }

}
