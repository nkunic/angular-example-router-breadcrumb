import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Breadcrumb } from '../../breadcrumb/breadcrumb.component';
import { FairyTaleService } from './fairy-tale.service';

@Injectable({
  providedIn: 'root',
})
export class FairyTaleResolver implements Resolve<Breadcrumb> {
  constructor(private fairyTaleService: FairyTaleService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Breadcrumb> {
    return this.fairyTaleService.getFairyTaleBySlugForBreadcrumb(
      route.paramMap.get('fairytale') || ''
    );
  }
}
