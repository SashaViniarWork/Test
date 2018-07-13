import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route, extract } from '@app/core';
import {FfTestPageComponent} from '@app/ff-test-page/ff-test-page.component';


const routes: Routes = [
  Route.withShell([
    { path: 'joke', component: FfTestPageComponent, data: { title: extract('FfTestPage') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FfTestPageRoutingModule { }
