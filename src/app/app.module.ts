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
import { FwModule } from '../fw/fw.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import { appRoutes } from './app.routing';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { UserService } from './services/user.service';
import { UserApi } from '../fw/users/user-api';
import { AuthGuardService } from './services/auth-guard.service';


// const routes: Routes = [
//   { path: 'welcome', component: WelcomeComponent },
//   { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
//   { path: 'demo', loadChildren: './demo/demo.module#DemoModule'},
//   { path: '', redirectTo: 'welcome', pathMatch: 'full'},
//   { path: '**', redirectTo: 'welcome', pathMatch: 'full'},
// ];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    //RouterModule.forRoot(routes),
    //ProductModule,
    //ContactmanagerModule, 
    //DemoModule,
    BrowserAnimationsModule,
    FwModule,
  ],
  providers: [
    UserService,
    { provide: UserApi, useExisting: UserService },
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
