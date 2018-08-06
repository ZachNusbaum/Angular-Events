import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleEventsListComponent } from './events/simple-events-list/simple-events-list.component';

const routes: Routes = [
  { path: '', component: SimpleEventsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
