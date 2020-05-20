import { Component, OnInit } from '@angular/core';
import { aboutservice } from 'src/ServiceAboute/aboutserivce';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info:any;
  commentaire = {date:null, message:""}
  comment:any;
  constructor(private aboute:aboutservice) {
      this.info =this.aboute.getInfo();
      this.comment = this.aboute.getcomments();
  }

  ngOnInit(): void {
  }



   addcommentaire(c) {
       c.date = new Date();
       this.aboute.savedata(c);
      // this.comment.push(c);
       this.commentaire.message =""
   }
}
