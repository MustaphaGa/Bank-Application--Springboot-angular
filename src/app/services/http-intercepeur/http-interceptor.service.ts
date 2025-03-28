import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJmdWxsTmFtZSI6Im11cyBjaGgiLCJ1c2VySUQiOjE4MDIsInN1YiI6Im11c3RhQGdtYWlsLmNvbSIsImF1dGhvcml0aWVzIjpbeyJhdXRob3JpdHkiOiJST0xFX1VTRVIifV0sImlhdCI6MTc0MjY1NDcyMywiZXhwIjoxNzQzMzc0NzIzfQ.oIoxQ8cdZ8tGkqPHuAUmuikKbWRhF3_ecYfhrYRwnYY';
    if (token) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token, // Add a space between Bearer and the token
        }),
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
