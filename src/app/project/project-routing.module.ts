import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';


const route: Routes = [

  { path: 'project', component: ProjectListComponent },

];


@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})

export class ProjectRoutingModule { }
