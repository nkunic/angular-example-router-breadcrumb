import { Routes } from '@angular/router';
import { FairyTaleMetaComponent } from './fairy-tales/fairy-tale/fairy-tale-meta/fairy-tale-meta.component';
import { FairyTaleStoryComponent } from './fairy-tales/fairy-tale/fairy-tale-story/fairy-tale-story.component';
import { FairyTaleComponent } from './fairy-tales/fairy-tale/fairy-tale.component';
import { FairyTaleResolver } from './fairy-tales/fairy-tale/fairy-tale.resolver';
import { FairyTalesComponent } from './fairy-tales/fairy-tales.component';

export const appRoutes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: {
        label: 'Startseite',
      },
    },
    children: [
      {
        path: 'fairy-tales',
        component: FairyTalesComponent,
        data: {
          breadcrumb: {
            label: 'Märchen',
          },
        },
        children: [
          {
            path: ':fairytale',
            component: FairyTaleComponent,
            resolve: {
              breadcrumb: FairyTaleResolver,
            },
            children: [
              {
                path: 'story',
                component: FairyTaleStoryComponent,
                data: {
                  breadcrumb: {
                    label: 'Story',
                  },
                },
              },
              {
                path: 'meta',
                component: FairyTaleMetaComponent,
                data: {
                  breadcrumb: {
                    label: 'Infos',
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
];
