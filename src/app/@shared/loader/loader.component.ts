import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IRootState, Loader } from '@app/store/reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  public loaderSettings$: Observable<Loader>;
  @Input() message: string | undefined;

  constructor(private store: Store<IRootState>) {
    this.loaderSettings$ = this.store.select('main', 'loaderSettings');
  }

  ngOnInit () { }
}
