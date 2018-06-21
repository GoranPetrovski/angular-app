import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  user: User;
  
  constructor(
    private route: ActivatedRoute,
    private service: UserService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['id'];
      if(!id) id = 1;
      this.user = null;
      this.service.users.subscribe(users => {
        if(users.length == 0) return
        setTimeout(()=> {
          this.user = this.service.userById(id);
        }, 500);
      });
      this.user = this.service.userById(id);
    })
  }

  openDialog() {
    this.dialog.open(NewContactDialogComponent, {
      data: {
        animal: 'panda'
      }
    });
  }

}
