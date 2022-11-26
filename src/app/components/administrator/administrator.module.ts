import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunitiesComponent } from './communities/communities.component';
import { ProgramsComponent } from './programs/programs.component';
import { CoursesComponent } from './courses/courses.component';



@NgModule({
  declarations: [
    CommunitiesComponent,
    ProgramsComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministratorModule { }
