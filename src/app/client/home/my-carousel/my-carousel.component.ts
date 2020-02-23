import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.scss']
})
export class MyCarouselComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  searchHandler(formSearch: NgForm):void{
    this._router.navigate([`/search/${formSearch.value.keySearch}`]);
  }
}
