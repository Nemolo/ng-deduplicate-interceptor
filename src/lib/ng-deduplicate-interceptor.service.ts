import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, tap } from 'rxjs/operators';
// import { MD5 } from 'object-hash';

@Injectable({
  providedIn: 'root'
})
export class NgDeduplicateInterceptorService implements HttpInterceptor {

  cache: {
    [key: string]: Observable<HttpEvent<any>>
  } = {};

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    switch (request.method) {
      case 'OPTIONS':
      case 'GET': {
        // const key = `${request.method} ${request.urlWithParams}`;
        // const key = MD5(request);
        const key = JSON.stringify(request);
        if (!this.cache[key]) {
          this.cache[key] = next.handle(request).pipe(
            tap(() => {
              setTimeout(() => delete this.cache[key], 100);
            }),
            share()
          );
        }
        return this.cache[key];
      }
      default:
        return next.handle(request);
    }
  }
}
