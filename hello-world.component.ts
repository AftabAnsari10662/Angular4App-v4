import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { BrowserModule } from "@angular/platform-browser";
import { Component, NgModule } from "@angular/core";

@Component({
  selector: "hello-world",
  templateUrl: "./hello-world.component.html",
  styleUrls: ["./hello-world.component.css"]
})
export class HelloWorldComponent {
   message:string = "Hello World";
  constructor() {}
}
