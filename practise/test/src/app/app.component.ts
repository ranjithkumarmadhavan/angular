import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  printText = '';
  public testList = []

  constructor(private _testserviceService : TestserviceService){

  }
  ngOnInit(){

    this.testList = this._testserviceService.getTestList();

  }
}
