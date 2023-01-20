import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FairyTale, FairyTaleService } from './fairy-tale.service';

@Component({
  selector: 'app-fairy-tale',
  templateUrl: './fairy-tale.component.html',
})
export class FairyTaleComponent implements OnInit {
  fairyTale: FairyTale | undefined;

  constructor(
    private fairyTaleService: FairyTaleService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
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
