import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) avator!:string;  //! respresentes that this variable will get value 
  @Input({required:true}) name!:string;

  @Output() selected = new EventEmitter();

  get imagePath(){
    return `assets/users/${this.avator}`;
  }

  onSelectUser(){
    this.selected.emit(this.name);
  }

}
