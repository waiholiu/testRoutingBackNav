import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { UiStateServiceService } from '../ui-state-service.service';

import { Inject } from '@angular/core';
import { DOCUMENT, ViewportScroller } from '@angular/common';
import { MatExpansionPanel } from '@angular/material/expansion';



@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit, AfterViewInit {


  countArray;

  constructor(private viewportScroller: ViewportScroller,
    private cdr: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private uiStateService: UiStateServiceService, @Inject(DOCUMENT) document) {

    this.route.params.subscribe(f => {
      this.countArray = Array(100).fill(0).map((x, i) => i);
    })




    router.events.pipe(
      map((event: NavigationStart) => {
        if (event.navigationTrigger === 'popstate') {
          // Perform actions
          console.log(this.uiStateService.expansionPanel);
          return 'back'
        }
      })
    ).subscribe(x => console.log(x));



  }


  @ViewChildren("expPanels", { read: ElementRef })
  expPanelElems: QueryList<ElementRef>;

  @ViewChildren("expPanels")
  expPanels: QueryList<MatExpansionPanel>;


  ngAfterViewInit() {

    if (this.uiStateService.expansionPanel) {

      const panelNo = this.uiStateService.expansionPanel;
``

      const selectedPanelIdx = this.expPanelElems
        .toArray()
        .findIndex(e => e.nativeElement.id === `${panelNo}exp`);
      this.expPanels.toArray()[selectedPanelIdx].expanded = true;
      this.cdr.detectChanges();

      this.viewportScroller.scrollToPosition([0 , this.uiStateService.scrollPosition]);


    }

  }

  clickLink(num, $event : MouseEvent) {

    this.uiStateService.expansionPanel = num;
    this.uiStateService.scrollPosition = $event.pageY;

  }


  ngOnInit() {

    // this.countArray = Array(100).fill(0).map((x, i) => i);
    this.route.queryParams
      .subscribe((params) => {


        this.countArray = Array(100).fill(0).map((x,i)=>i);
      });

  }


}
