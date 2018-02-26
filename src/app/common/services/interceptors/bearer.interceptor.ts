import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export default class BearerInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // append 'Authorization' header to request before send
    // its need to be immutable so use 'clone'
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer <Token>`
      }
    });
    return next.handle(req);
    //   .do((evt) => {
    //   if (evt instanceof HttpRequest) {
    //     console.log('---> evt req 1:', evt);
    //   }
    //   else if (evt instanceof HttpResponse) {
    //     console.log('---> evt res 1:', evt);
    //   }
    // });

  }
}
