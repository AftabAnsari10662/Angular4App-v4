import { SimpleComponent } from "./simple.component";
import { NewMovie } from "./movie-new.component";
import { MovieList } from "./movie-list.component";
import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world.component";
import { RouterModule } from "@angular/router";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { Component, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {
          path: "list",
          component: MovieList
        },
        {
          path: "new",
          component: NewMovie
        },
        {
          path: "helloworld",
          component: HelloWorldComponent
        },
        {
          path: "simple",
          component: SimpleComponent
        }
      ],
      {
        useHash: true
      }
    )
  ],
  declarations: [
    AppComponent,
    HelloWorldComponent,
    MovieList,
    NewMovie,
    SimpleComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
