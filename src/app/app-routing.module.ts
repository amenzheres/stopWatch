import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StopWatchSecondComponent} from './modules/stop-watch-second/stop-watch-second.component';

const routes: Routes = [
  {path: 'stopWatch', component: StopWatchSecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
