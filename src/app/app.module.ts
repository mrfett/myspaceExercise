import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PostComponent } from "./post/post.component";
import { MediaComponent } from "./media/media.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { SiteFooterComponent } from "./site-footer/site-footer.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { MediaListComponent } from './media-list/media-list.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "posts", component: PostsListComponent },
  { path: "media", component: MediaListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    MediaComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    PostsListComponent,
    HomePageComponent,
    MediaListComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}