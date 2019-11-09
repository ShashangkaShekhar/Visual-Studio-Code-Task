import { Component, OnInit, AfterViewInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-home',
    templateUrl: './app/home/component.html'
})

export class HomeComponent implements OnInit, AfterViewInit {
    public title: any;
    constructor(
        private router: Router,
        private titleService: Title) {

    }

    ngOnInit() {
        this.titleService.setTitle("Home");
        this.title = 'Angular8';
    }

    ngAfterViewInit() {}
}
