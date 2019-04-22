# NgDeduplicateInterceptor

## Scope

This interceptor will catch all simultaneous `HEAD`, `OPTIONS` and `GET` and reduce those to a single call with `share()`.

## Disclaimer

This library was made for my own usage, and is provided AS IS, use it at your risk.

## Usage

Install via `npm i --save ng-deduplicate-interceptor`

then add interceptor to providers, es:

    import { NgDeduplicateInterceptorService } from 'ng-deduplicate-interceptor';

    providers: [
      ...
      {
        provide: HTTP_INTERCEPTORS,
        useClass: NgDeduplicateInterceptorService,
        multi: true
      }
    ]

## Credits

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.0.
