import { UserApi } from "../../fw/users/user-api";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { delay } from "rxjs/operators";
import {  Router } from "@angular/router";

@Injectable()
export class UserService implements UserApi{
    isAuthenticated = false;

    constructor(private router: Router) { };

    signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
        console.log('UserService.signIn: ' + username + ' '+password + ' ' + rememberMe);
        this.isAuthenticated = true;
        return of({}).pipe(delay(2000));
        //return of({}).pipe(flatMap(x => throwError('Invalid User name and/or Password')));
    }

    signOut(): Observable<any> {
        this.isAuthenticated = false;
        this.router.navigate(['/sign-in']);
        return of({});
    }
}