import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleEventsListComponent } from './simple-events-list/simple-events-list.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { FormsModule } from '@angular/forms';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxMyDatePickerModule
  ],
  declarations: [
    SimpleEventsListComponent,
    AddEventFormComponent,
    EventDetailComponent,
    ScheduleComponent,
  ],
  exports: [SimpleEventsListComponent]
})
export class EventsModule { }
