import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, copyArrayItem, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Paint =[
    { Name:'red',highlight:true},
    { Name:'brown',highlight:true},
    { Name: 'pink',highlight:true},
    { Name:'blue',highlight:true}
   ];
  
   drawings =[
     {Name:'eye', url:"assets/eye.jpg",highlight:true},
     {Name:'bird',url:"assets/bird.jpg",highlight:true},
     {Name:'tree',url:"assets/tree.jpg",highlight:true},
     {Name:'girl',url:"assets/girl.jpg",highlight:true}
 
   ];
 
   playarea =
   [
 
   ];
  
   // //  onDrop(event: CdkDragDrop<string[]>) {
   //   if (event.previousContainer === event.container) {
   //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
   //   } else {
   //     transferArrayItem(event.previousContainer.data,
   //                       event.container.data,
   //                       event.previousIndex,
   //                       event.currentIndex);
   //   }
   // }
   onDrop(event: any) {
     if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     } else {
       copyArrayItem(
         event.previousContainer.data,
         event.container.data,
         event.previousIndex,
         event.currentIndex
       );
     }
   }
   
   drop(event: any) {
     if (event.previousContainer === event.container) {
       moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
     }
       else {
         copyArrayItem(
           event.previousContainer.data,
           event.container.data,
           event.previousIndex,
           event.currentIndex
         );
       }
     }
}
