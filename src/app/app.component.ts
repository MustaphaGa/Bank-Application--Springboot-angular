import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
import { MenuComponent } from "./components/menu/menu.component";
import { UserComponent } from "./pages/user-dashboard/user.component";
import { MyTransactionsComponent } from "./pages/my-transactions/my-transactions.component";
import { MyContactsComponent } from "./pages/my-contacts/my-contacts.component";
import { NewTransactionComponent } from "./pages/new-transaction/new-transaction.component";
import { NewContactComponent } from "./pages/new-contact/new-contact.component";
import { ProfileComponent } from "./pages/profile/profile.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent,
    MenuComponent, UserComponent, MyTransactionsComponent,
    MyContactsComponent, NewTransactionComponent, NewContactComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bancAppFront';
}
