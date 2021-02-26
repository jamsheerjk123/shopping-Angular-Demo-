import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {



  i="hihh"
  title="hello"
  isValid = false


  getStyle(){
      return {
        backgroundColor: this.isValid? 'green': 'red'
      }
    

  }

  logDataLength(val){

   this.i=val  
   if(this.i.length >= 8){
     this.isValid = true
   }  
  }
}

