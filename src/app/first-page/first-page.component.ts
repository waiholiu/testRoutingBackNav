import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {


  constructor(private route : ActivatedRoute) { 

    this.countArray = Array(100).fill(0).map((x,i)=>i);

  }

  countArray;

  ngOnInit() {

    this.countArray = Array(100).fill(0).map((x,i)=>i);
    // this.route.queryParams
    //   .subscribe((params) => {


    //     this.countArray = Array(100).fill(0).map((x,i)=>i);
    //   });

  }


}
