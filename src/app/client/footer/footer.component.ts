import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isShowDropdownLanguageFooter: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  handleShowDropdownLanguageFooter(){
    this.isShowDropdownLanguageFooter = !this.isShowDropdownLanguageFooter;
  }
}
