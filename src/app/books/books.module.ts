import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksItemComponent } from './books-item/books-item.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from '../highlight.pipe';

@NgModule({
  declarations: [
    BooksListComponent,
    BooksItemComponent,
    HighlightPipe 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BooksListComponent
  ]
})
export class BooksModule {}
