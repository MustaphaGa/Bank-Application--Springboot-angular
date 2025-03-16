/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { TransactionsSumDetails } from '../../models/transactions-sum-details';

export interface FindSumTransactionByDate$Params {
  'start-date': string;
  'end-date': string;
  'user-id': number;
}

export function findSumTransactionByDate(http: HttpClient, rootUrl: string, params: FindSumTransactionByDate$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<TransactionsSumDetails>>> {
  const rb = new RequestBuilder(rootUrl, findSumTransactionByDate.PATH, 'get');
  if (params) {
    rb.query('start-date', params['start-date'], {});
    rb.query('end-date', params['end-date'], {});
    rb.path('user-id', params['user-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<TransactionsSumDetails>>;
    })
  );
}

findSumTransactionByDate.PATH = '/statistics/by-date/{user-id}';
