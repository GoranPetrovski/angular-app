import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentComponent } from "./content/content.component";
import { FrameworkBodyComponent } from "./framework-body/framework-body.component";
import { TitleBarComponent } from "./title-bar/title-bar.component";
import { MenuService } from "./services/menu.service";
import { MenuComponent } from "./menus/menu/menu.component";
import { MenuItemComponent } from "./menus/menu-item/menu-item.component";
import { RouterModule } from "@angular/router";
import { SignInComponent } from "./users/sign-in/sign-in.component";
import { FormsModule } from "@angular/forms";
import { RegisterUserComponent } from "./users/register-user/register-user.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        FrameworkBodyComponent,
        ContentComponent,
        TitleBarComponent,
        MenuComponent,
        MenuItemComponent,
        SignInComponent, 
        RegisterUserComponent
    ],
    providers: [
        MenuService
    ],
    exports: [
        FrameworkBodyComponent
    ]
})
export class FwModule { }