import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Breadcrumb } from '../../breadcrumb/breadcrumb.component';

export interface FairyTale {
  id: number;
  title: string;
  slug: string;
  story: string;
}

const fairyTales = [
  {
    id: 1,
    title: 'Hänsel und Gretel',
    slug: 'haensel-und-gretel',
    story: '"Knusper, knusper, Knäuschen, Wer knuspert an meinem Häuschen?"',
  } as FairyTale,
  {
    id: 2,
    title: 'Das tapfere Schneiderlein',
    slug: 'das-tapfere-schneiderlein',
    story:
      'Und in der Hast schnitt sich das Schneiderlein einen Gürtel, nähte ihn und stickte mit grossen Buchstaben darauf "Siebene auf einen Streich!"',
  } as FairyTale,
  {
    id: 1,
    title: 'Schneewitchen und die sieben Zwerge',
    slug: 'schneewitchen',
    story:
      '"Spieglein, Spieglein an der Wand, wer ist die Schönste im ganzen Land?"',
  } as FairyTale,
];

@Injectable({
  providedIn: 'root',
})
export class FairyTaleService {
  getFairyTaleBySlug(slug: string): Observable<FairyTale | undefined> {
    const fairyTale = fairyTales.find((tale) => tale.slug === slug);

    return of(fairyTale);
  }

  getFairyTaleBySlugForBreadcrumb(slug: string): Observable<Breadcrumb> {
    const fairyTale = fairyTales.find((tale) => tale.slug === slug);

    return of({
      label: fairyTale?.title,
      link: slug,
    } as Breadcrumb);
  }
}
