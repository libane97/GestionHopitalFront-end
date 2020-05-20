import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    //pagePhtot:any;
   constructor() { }

  ngOnInit(): void {
  }

  onSearch(data) {
      // this.http.get("https://pixabay.com/api/?key=16655257-6f1116ab1b3ba866904c36a02&q="+data.search+"&per_page=10&page=2")
      // .map( resp => resp.json()).subscribe(data => {
      //     console.log(data)
      //     this.pagePhtot = data;
      // });
  }

}
