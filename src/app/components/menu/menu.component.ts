import { NgIf } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService, UserService } from '../../services/services';
import { HelperService } from '../../services/helper/helper.service';
import { UserDto } from '../../services/models';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule,NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  @Input() isAdmin = false;
  role = 'user';
  userDto :UserDto = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    iban: '',
  };

  constructor(
    private authService:AuthenticationService,
    private userService:UserService,
    private helperService:HelperService) { }

  ngOnInit(): void {
    this.userService
    .findById({ 'user-id': this.helperService.userID })
    .subscribe((data) => {
      this.userDto = data;
    });


    if (this.isAdmin) {
      this.role = 'admin';
    }
  }
}
