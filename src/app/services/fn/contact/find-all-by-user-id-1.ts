/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { ContactDto } from '../../models/contact-dto';

export interface FindAllByUserId1$Params {
  'user-id': number;
}

export function findAllByUserId1(http: HttpClient, rootUrl: string, params: FindAllByUserId1$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ContactDto>>> {
  const rb = new RequestBuilder(rootUrl, findAllByUserId1.PATH, 'get');
  if (params) {
    rb.path('user-id', params['user-id'], {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Array<ContactDto>>;
    })
  );
}

findAllByUserId1.PATH = '/contact/users/{user-id}';
