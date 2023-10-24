import {  AfterContentInit, AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {


  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }
  ngOnChanges(): void {
    console.log("ngOnChanges called");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit Called");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called");
  }
}