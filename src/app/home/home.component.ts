import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
  ){

  }
  trendingProducts:any[]=[]

  public assignTrendingProducts(){
    this.trendingProducts=[
      {
        productName:"Adidas Running Shoes",
        productCategory:"Men Footwear",
        productImage:"../../assets/shoes-1897709_640.jpg",
        originalPrice:"INR 2000",
        salePrice:"INR 1000",
        discount:"50%"
      },
      {
        productName:"Nike Sports Lower",
        productCategory:"Men Bottomwear",
        productImage:"../../assets/wallpaperflare-cropped.jpg",
        originalPrice:"INR 1000",
        salePrice:"INR 400",
        discount:"60%"
      },
      {
        productName:"Boat Smart Watch",
        productCategory:"Watches",
        productImage:"../../assets/apple-watch-series-4-3674940_640.png",
        originalPrice:"INR 1800",
        salePrice:"INR 900",
        discount:"50%"
      },
      {
        productName:"Victoria's Women Jacket",
        productCategory:"Women Upperwear",
        productImage:"../../assets/wallpaperflare-cropped(1).jpg",
        originalPrice:"INR 4000",
        salePrice:"INR 1600",
        discount:"60%"
      },
      {
        productName:"Nike Baseball Caps",
        productCategory:"Hats",
        productImage:"",
        originalPrice:"INR 700",
        salePrice:"INR 350",
        discount:"60%"
      }

    ]
    console.log('trending products added')
  }

  public goToPage(pageUrl:string){
    this.router.navigateByUrl(pageUrl)
  }

  async ngOnInit(){
    this.assignTrendingProducts()
  }
}
