import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpInterceptorService } from './app/services/http-intercepeur/http-interceptor.service';
import { AppComponent } from './app/app.component';


@NgModule({
  declarations: [],
  imports: [
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    HttpClient,
  ],
})
export class AppModule {}
