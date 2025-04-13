import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContactDto } from '../../services/models';
import { ContactService } from '../../services/services';
import { CommonModule } from '@angular/common';
import { HelperService } from '../../services/helper/helper.service';

@Component({
  selector: 'app-my-contacts',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './my-contacts.component.html',
  styleUrl: './my-contacts.component.scss',
})
export class MyContactsComponent implements OnInit {
  contacts: Array<ContactDto> = [];
  constructor(
    private contactService: ContactService,
    private helperService: HelperService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.findAllContactByIdUser();
  }
  findAllContactByIdUser() {
    this.contactService
      .findAllByUserId1({
        'user-id': this.helperService.userID,
      })
      .subscribe({
        next: (data) => {
          this.contacts = data;
          console.log('contacts', this.contacts);
        },
      });
  }
  deleteContact(id: number): void {
    this.contactService.delete1({ 'contact-id': id }).subscribe({
      next: (data) => {
        console.log('contast est supprimé avec succés', data);
        this.findAllContactByIdUser();
      },
      error: (err) => {
        console.error('Erreur lors de la suppression', err);
      },
    });
  }
  modifierContact(id: number) {
    this.router.navigate(['user/new-contact', id]);
  }
 
}
