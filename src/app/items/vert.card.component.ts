import { Component, Input} from "@angular/core";

@Component({
    selector: 'kA-vertcard',
    templateUrl: 'vert.card.component.html',
    styleUrls: ['vert.card.component.css']
})

export class VertCardComponent{
// start of 2/3/22 lecture
@Input() img: string;
@Input() description: string;
@Input() author: string;



constructor(){
    this.img = "";
    this.description = "";
    this.author = ""
}
}

