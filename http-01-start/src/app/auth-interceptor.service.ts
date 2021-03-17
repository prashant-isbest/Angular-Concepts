import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";

import { tap } from "rxjs/operators";
@Injectable()
export class AuhtInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("request is on its way");
    console.log(req.url);
    const modifiedRequest = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });
    return next.handle(modifiedRequest).pipe(
      tap((event) => {
        console.log(event.type);
        console.log(event);
      })
    );
  }
}
