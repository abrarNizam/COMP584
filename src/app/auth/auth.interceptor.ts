// new in angular 17. The book has a different version...

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
 let token = localStorage.getItem("token_jwt");
 if(token)
 {
  req = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });
 }

  return next(req);
};
