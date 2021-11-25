import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    public headerIcon: Array<any>;
    constructor(){}
    ngOnInit() {
        this.headerIcon = [
            {
                icon: '../../assets/images/c1.png',
                header: 'Lorem ipsum dolor sit amet',
                subheader: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.',
                subheader1: 'venenatis est ut, tincidunt nibh.',
            },
            {
                icon: '../../assets/images/c2.png',
                header: 'Lorem ipsum dolor sit amet',
                subheader: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.',
                subheader1: 'venenatis est ut, tincidunt nibh.',
            },
            {
                icon: '../../assets/images/c3.png',
                header: 'Lorem ipsum dolor sit amet',
                subheader: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.',
                subheader1: 'venenatis est ut, tincidunt nibh.',
            },
            {
                icon: '../../assets/images/c4.png',
                header: 'Lorem ipsum dolor sit amet',
                subheader: 'Suspendisse vel leo efficitur,venenatis est ut, tincidunt nibh.',
                subheader1: 'venenatis est ut, tincidunt nibh.',
            },
        ]
    }
}