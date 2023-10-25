import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent
  implements OnInit, OnChanges, AfterContentInit, AfterViewInit
{
  movieId = '';

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((p) => {
      this.movieId = p['id'];

      console.log(`Movie Id = ${this.movieId}`);
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit called');
  }
  ngOnChanges(): void {
    console.log('ngOnChanges called');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit Called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }
}
