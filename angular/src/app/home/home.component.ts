import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(public core: CoreService) { }

  ngOnInit() {
    this.core.getList();
  }

  ngAfterViewInit() {

  }

}
