import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }

  getTestList(){
    return ['serve test 1','serve test 2','serve test 3'];
  }

}
