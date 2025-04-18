import { Component, OnInit } from '@angular/core';
import { UserDto } from '../../services/models';
import { UserService } from '../../services/services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users-manager.component.html',
  styleUrl: './users-manager.component.scss',
})
export class UsersManagerComponent implements OnInit {
  clients: Array<UserDto> = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.findAllUsers();
  }
  findAllUsers() {
    this.userService.findAll()
    .subscribe({
      next: (data) => {
        this.clients = data;
      },
    });
  }
}
