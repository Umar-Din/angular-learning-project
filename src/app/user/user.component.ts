import { Component,Input,computed,input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required:true}) avator!:string;  //! respresentes that this variable will get value 
  // @Input({required:true}) name!:string;


  // get imagePath(){
  //   return `assets/users/${this.avator}`;
  // }

  // onSelectUser(){

  // }


  // #====================== using singals ======================

  avator = input.required<string>();//when required canot pass default value to input(')
  name = input.required<string>();

  imagePath = computed(() => {
    return `assets/users/${this.avator()}`;
  })

  onSelectUser(){}
  
}
