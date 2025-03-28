import { Component } from '@angular/core';
import {
  InfoLightComponent,
  LightInfoInput,
} from '../../components/info-light/info-light.component';
import { NgFor } from '@angular/common';
import { TransactionService } from '../../services/services';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [InfoLightComponent, NgFor],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  accountInfoList: Array<LightInfoInput> = [];

  constructor( ) {}

  ngOnInit(): void {
    this.intialiseAccountInfo();
    
  }

  private intialiseAccountInfo() {
    this.accountInfoList = [
      {
        title: 'Account Balance',
        amount: 25000,
        styleInfo: 'bg-primary',
      },
      {
        title: 'Highest transfer',
        amount: 2500,
        styleInfo: 'bg-success',
      },
      {
        title: ' Highest deposit',
        amount: 2000,
        styleInfo: 'bg-danger',
      },
    ];
  }
}
