import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FairyTale, FairyTaleService } from '../fairy-tale.service';

@Component({
  selector: 'app-fairy-tale-meta',
  templateUrl: './fairy-tale-meta.component.html',
})
export class FairyTaleMetaComponent implements OnInit {
  fairyTale: FairyTale | undefined;

  constructor(
    private fairyTaleService: FairyTaleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.parent?.params.subscribe((params) => {
      if (params.fairytale) {
        this.fairyTaleService
          .getFairyTaleBySlug(params.fairytale)
          .subscribe((fairyTale) => {
            this.fairyTale = fairyTale;
          });
      }
    });
  }
}
