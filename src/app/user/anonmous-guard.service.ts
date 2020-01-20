import {Observable} from 'rxjs';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';


export interface CanComponentDeactive {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactive> {

  canDeactivate(component: CanComponentDeactive): Observable<boolean> | Promise<boolean> | boolean {

    return component.canDeactivate();

  }
}
