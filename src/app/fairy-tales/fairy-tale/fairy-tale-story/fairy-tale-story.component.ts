import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FairyTale, FairyTaleService } from '../fairy-tale.service';

@Component({
  selector: 'app-fairy-tale-story',
  templateUrl: './fairy-tale-story.component.html',
})
export class FairyTaleStoryComponent implements OnInit {
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
