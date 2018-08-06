import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleEventsListComponent } from './simple-events-list/simple-events-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SimpleEventsListComponent],
  exports: [SimpleEventsListComponent]
})
export class EventsModule { }
