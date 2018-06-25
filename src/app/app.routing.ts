import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CountriesComponent } from "./countries/countries.component";
import { SettingsComponent } from "./settings/settings.component";
import { SignInComponent } from "../fw/users/sign-in/sign-in.component";
import { AuthenticatedUserComponent } from "./authenticated-user/authenticated-user.component";
import { RegisterUserComponent } from "../fw/users/register-user/register-user.component";
import { AuthGuardService } from "./services/auth-guard.service";


export const appRoutes: Routes = [
    { path: 'signin', component: SignInComponent },
    { path: 'register', component: RegisterUserComponent },
    { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuardService],
    
    children: [
        {
            path: '', canActivateChild: [AuthGuardService],
            children: [
                { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                { path: 'dashboard', component: DashboardComponent },
                { path: 'countries', component: CountriesComponent },
                { path: 'settings', component: SettingsComponent }
            ]
        }
    ]},
    { path: '', component: SignInComponent },
    { path: '**', component: SignInComponent },
]

// export const appRoutes: Routes = [
//     { path: 'signin', component: SignInComponent },
//     { path: 'register', component: RegisterUserComponent },
//     {
//       path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuardService],
//       children: [
//         {
//           path: '', canActivateChild: [AuthGuardService],
//           children: [
//             { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//             { path: 'dashboard', component: DashboardComponent },
//             { path: 'country-list/:count', component: CountryListComponent },
//             { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
//             { path: 'country-maint', component: CountryMaintComponent },
//             { path: 'settings', component: SettingsComponent },
//           ]
//         }
//       ]
//     },
//     { path: '', redirectTo: 'signin', pathMatch: 'full' },
//     { path: '**', redirectTo: 'signin', pathMatch: 'full' },
//   ];