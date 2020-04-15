import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  public testList = []
  public toDoList: any[] = [{
    "task" : "Buy milk",
    "isDone" : true
  }]

  constructor(private _testserviceService : TestserviceService){

  }
  ngOnInit(){

    this.testList = this._testserviceService.getTestList();

  }

  sortToDoList(){
    var isDoneList = this.toDoList.filter(t => t.isDone)
  }

  AppendInToDoList(newToDoList){
    var temp = {
      'task':newToDoList,
      'isDone' : false
    }
    this.toDoList.push(temp);

    this.toDoList.sort((a,b) => {
      return a.isDone - b.isDone;
    });
  }

  removeFromToDoList(value){
    console.log(value);
    this.toDoList = this.toDoList.filter( t => t.task !== value.task);
    this.toDoList.sort((a,b) => {
      return a.isDone - b.isDone;
    });
  }

  updateToDoList(item){
    this.toDoList = this.toDoList.filter(t => t.task !== item.task)
    var temp = {
      'task':item.task,
      'isDone' : !item.isDone
    }
    this.toDoList.push(temp);

    this.toDoList.sort((a,b) => {
      return a.isDone - b.isDone;
    });
  }
}
