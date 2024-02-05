import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() products: any = 0;
  constructor(private router:Router){}
  public goToPage(pageUrl:string){
    this.router.navigateByUrl(pageUrl)
  }
}
