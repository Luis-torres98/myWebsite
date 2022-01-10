import { style } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'lt-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    elem: any;
    constructor(private _ref: ElementRef<HTMLElement>) {}

    ngOnInit(): void {
        this.elem = <HTMLElement>(
            this._ref.nativeElement.querySelector('.header')
        );
    }

    loadImage() {
        this.elem.style.backgroundImage = `url(https://www.xtrafondos.com/wallpapers/resized/paisaje-digital-en-atardecer-5846.jpg?s=large)`;
    }
    changeImage() {
        console.log('Salio');
        this.elem.style.backgroundImage = `url()`;
    }
}
