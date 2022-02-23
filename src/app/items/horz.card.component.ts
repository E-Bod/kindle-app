import { Component,Input } from "@angular/core";

@Component({
    selector: 'kA-horzcard',
    templateUrl: 'horz.card.component.html',
    styleUrls: ['horz.card.component.css']
})

export class HorzCardComponent{
    @Input() img: string;
    @Input() description: string;
    @Input() author: string;

    constructor(){
        this.img = "";
        this.description = "";
        this.author = ""
    }
}