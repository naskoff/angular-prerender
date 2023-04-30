import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Home';
  products: {id: number, title: string, description: string, price: number}[] = [];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get('https://dummyjson.com/products?limit=15').subscribe({
      next: ((data: any) => {
        this.products = data.products;
        console.log(this.products);
      }),
      error: ((err) => console.log(err)),
      complete: (() => console.log('finish')),
    });
  }
}
