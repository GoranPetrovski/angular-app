import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoModule } from './demo/demo.module';
import { ContactmanagerModule } from './contactmanager/contactmanager.module';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
  { path: '', redirectTo: 'welcome', pathMatch: 'full'},
  { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ProductModule,
    ContactmanagerModule, 
    DemoModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
