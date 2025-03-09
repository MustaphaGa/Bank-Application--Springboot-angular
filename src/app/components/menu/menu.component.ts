import { NgIf } from '@angular/common';
import { Component, input, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

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

  ngOnInit(): void {
    if (this.isAdmin) {
      this.role = 'admin';
    }
  }
}
