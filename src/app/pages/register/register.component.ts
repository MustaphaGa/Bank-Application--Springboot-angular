import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
 constructor(private router: Router) {}
  ngOnInit(): void {
   }

  login() {
    this.router.navigate(['login']);
  }
}
