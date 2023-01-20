import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FairyTaleMetaComponent } from './fairy-tales/fairy-tale/fairy-tale-meta/fairy-tale-meta.component';
import { FairyTaleStoryComponent } from './fairy-tales/fairy-tale/fairy-tale-story/fairy-tale-story.component';
import { FairyTaleComponent } from './fairy-tales/fairy-tale/fairy-tale.component';
import { FairyTalesComponent } from './fairy-tales/fairy-tales.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbComponent,
    FairyTaleComponent,
    FairyTalesComponent,
    FairyTaleStoryComponent,
    FairyTaleMetaComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
