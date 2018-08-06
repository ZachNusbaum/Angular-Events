import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleEventsListComponent } from './simple-events-list/simple-events-list.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SimpleEventsListComponent, AddEventFormComponent],
  exports: [SimpleEventsListComponent]
})
export class EventsModule { }
