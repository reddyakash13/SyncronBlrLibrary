import { Component, ContentChild, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'listview',
  template: `<div class="listview">
        <div class='books' *ngFor="let book of books">
          <template [ngTemplateOutlet]="bookTemplate" [ngOutletContext]="{book: book}" ></template>
        </div>
  </div>`,
  styleUrls: ['./book-shelf.component.css']
})
export class ListViewComponent {

  @ContentChild('bookTemplate', {read: TemplateRef})
  bookTemplate: TemplateRef<any>;

  @Input() books: Array<any> = [];

}
