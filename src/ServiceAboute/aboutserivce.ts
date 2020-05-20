import { Injectable } from '@angular/core';

@Injectable()
export class aboutservice {

    info = {
      nom : "med",
      email : "isi@isi.sn",
      tel : 771121221
          }

  comment = [
              {date:new Date(), message: "A"},
              {date:new Date(), message: "B"},
              {date:new Date(), message: "C"}
            ]


    savedata(c) {
        this.comment.push(c);
    }

    getcomments(){
        return this.comment;
    }

    getInfo(){
        return this.info;
    }
  }

