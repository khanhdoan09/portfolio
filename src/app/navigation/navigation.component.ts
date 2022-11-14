import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css', '../responsive.component.css'],
})
export class NavigationComponent implements OnInit {

  constructor() { }
  @Input() test='/src/assets/image/hello.gif'
  isHidden=false;
  ngOnInit(): void {
  }

  activeNavItem(type:string) {
    let allActive = Array.from(document.querySelectorAll('.active'));
    for (let active of allActive) {
      active.classList.remove('active');
    }
    document.getElementById(type)!.classList.add("active");
  }

  openNav() {
    if (!this.isHidden) {
      this.isHidden=true;
    }
    else {
      this.isHidden=false
    }
  }
}
