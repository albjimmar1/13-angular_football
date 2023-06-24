import { Component, EventEmitter, Output } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css']
})
export class SearchEngineComponent {
  name: string = '';

  @Output()
  spread = new EventEmitter<string>();

  constructor(@Inject(DOCUMENT) document: Document) {
  }

  handleSubmit($event: any) {
    $event.preventDefault();
    this.spread.emit(this.name);
  }
}
