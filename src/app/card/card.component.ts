import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})


export class CardComponent  {
 

  @Input() title;
  @Input() imageUrl;
  @Input() index;

  
 


  @Output () liked = new EventEmitter()
  @Output () deleted = new EventEmitter()


  likeclicked(){

    this.liked.emit()

  }
  deleteProduct(index){
    this.deleted.emit(index)    

  }

}

