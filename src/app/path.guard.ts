import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthnService } from './authn.service';

export const pathGuard: CanActivateFn = (route, state) => {

   
   if ( inject(AuthnService).isLogin.value) {
        return true
   } else {
    inject(Router).navigate(['/login'])
    return false
   }
};
