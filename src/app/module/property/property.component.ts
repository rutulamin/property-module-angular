import { Component, OnInit } from '@angular/core';
import { RoutePath } from 'src/app/constants/constants';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  public ROUTE_PATH = RoutePath;

  constructor() { }

  ngOnInit(): void {

  }

}
