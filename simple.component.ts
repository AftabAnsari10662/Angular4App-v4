import { Component } from '@angular/core';


@Component({
    selector:"simple",
    templateUrl:"./simple.component.html"
})
export class SimpleComponent{

    message="This is first simple component!";
    constructor(){

    }
    changeMessage(){
        this.message = "new Message";
    }
}