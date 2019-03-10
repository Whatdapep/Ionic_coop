import { Component, OnInit } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient } from 'selenium-webdriver/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  url:string ="https://jsonplaceholder.typicode.com/todos/1";
  constructor(
    // private http:HTTP
    // private http:HttpClient
    
    ) { }
  resquestObject:any = null;
  ngOnInit() {
  }

  



  search(){
    console.log("Hello you are Click now");
  // // this.http.get("https://jsonplaceholder.typicode.com/todos/1", {}, {})
  // .then( res => this.resquestObject = res.data)
  // .catch(err => this.resquestObject = err)
  // // console.log("this is"+res.data)
  console.log(this.resquestObject);
}




}



