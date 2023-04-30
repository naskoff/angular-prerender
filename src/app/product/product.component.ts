import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(
    private meta: Meta,
    private title: Title,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {

      this.title.setTitle('Loading ...');

      if (!params?.id) return;

      this.httpClient.get('https://dummyjson.com/products/' + params.id).subscribe({
        next: ((data: any) => {
          let image = 'https://angular.io/assets/images/support/angular-404.svg';
          if (data?.images && data.images.length > 0) {
            image = data.images[0];
          }
          // update html meta title
          this.title.setTitle(data.title);
          // Update html meta description
          this.meta.updateTag({name: 'description', 'content': data.description});
          // Update facebook meta tags
          this.meta.updateTag({name: 'og:url', 'content': new URL(window.location.href).href});
          this.meta.updateTag({name: 'og:type', 'content': 'website'});
          this.meta.updateTag({name: 'og:title', 'content': data.title});
          this.meta.updateTag({name: 'og:description', 'content': data.description});
          this.meta.updateTag({name: 'og:image', 'content': image});
        })
      });
    });

  }
}
