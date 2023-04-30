import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(
    private title: Title,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle(this.activatedRoute.snapshot.paramMap.get('page') || '');
  }

}
