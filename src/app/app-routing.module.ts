import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const route: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'project', redirectTo: '/project', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
