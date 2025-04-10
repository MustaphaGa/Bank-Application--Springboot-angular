import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransactionService } from '../../services/services';
import { TransactionDto } from '../../services/models';
import { CommonModule } from '@angular/common';
import { HelperService } from '../../services/helper/helper.service';

@Component({
  selector: 'app-my-transactions',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './my-transactions.component.html',
  styleUrl: './my-transactions.component.scss',
})
export class MyTransactionsComponent implements OnInit {
  transactions: Array<TransactionDto> = [];

  constructor(
    private transactionService: TransactionService,
    private helperService : HelperService

  ) {}
  ngOnInit(): void {
    this.transactionService.findAllByUserId({ 
      'user-id': this.helperService.userID
    }).subscribe({
      next: (data) => {
        this.transactions = data;
        console.log('transactions:',this.transactions)
      },
    });
  }
}
