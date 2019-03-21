import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() id: string;

  cakeClicked:any;

  constructor(private _httpService: HttpService) { }

  getCake = (id) => {
    let tempObservable = this._httpService.getCake(id);
    tempObservable.subscribe(data => this.cakeClicked.data = data);
  }

  ngOnInit() {
    console.log(this.id);
    this.getCake(this.id);
    this.cakeClicked = {data: {baker: '', url: ''}};
  }

}
