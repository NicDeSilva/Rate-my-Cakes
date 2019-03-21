import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'public';
  cakes:any;
  newCake:any;
  newRating:any;
  cakeClicked:any;
  idToSend:string;
  
  constructor(private _httpService: HttpService){}

  getCakes = () => {
    let tempObservable = this._httpService.getCakes();
    tempObservable.subscribe(data => {this.cakes = data})
  }

  getCake = (id) => {
    let tempObservable = this._httpService.getCake(id);
    tempObservable.subscribe(data => this.cakeClicked.data = data);
  }

  createCake = () => {
    let tempObservable = this._httpService.createCake(this.newCake);
    tempObservable.subscribe();
    this.getCakes();
  }

  updateCakeRating= (id) => {
    let tempObservable = this._httpService.updateCakeRating(id,this.newRating);
    tempObservable.subscribe();
    this.getCakes();
  }

  cakeClickedPopulate(id) {
    this.cakeClicked.toggle = !this.cakeClicked.toggle;
    this.idToSend = id;
    console.log(this.idToSend);
  }

  ngOnInit() {
    this.getCakes()
    this.newCake = { baker: "", url: "" };
    this.cakeClicked = { toggle:false, };
    this.newRating = { stars: '', comment: ''};
  }
}
