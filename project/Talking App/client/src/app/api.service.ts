import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  ENDPOINT = 'https://5u3brenbpb.execute-api.us-east-1.amazonaws.com/dev/speak';

  constructor(private http:HttpClient) {}

  speak(data) {
    console.log(data);
    return this.http.post(this.ENDPOINT, data);
  }
}