import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  @Input({required:true}) name!:string;

  get selectedUserName(){
    return this.name;
  }
}
