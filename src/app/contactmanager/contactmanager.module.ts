import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from './componenets/toolbar/toolbar.component';
import { MainContentComponent } from './componenets/main-content/main-content.component';
import { SidenavComponent } from './componenets/sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './component/notes/notes.component';
import { NewContactDialogComponent } from './componenets/new-contact-dialog/new-contact-dialog.component';

const routes: Routes = [
  { path: 'contactmanager', component: ContactmanagerAppComponent, 
  children: [
    { path: ':id', component: MainContentComponent},
    { path: '', component: MainContentComponent}
  ]},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserService
  ],
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  entryComponents: [
    NewContactDialogComponent
  ]
})
export class ContactmanagerModule { }
