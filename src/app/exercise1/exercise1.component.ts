import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';
@Component({
  selector: 'app-exercise1',
  standalone: true,
  imports: [],
  templateUrl: './exercise1.component.html',
  styleUrl: './exercise1.component.css'
})
export class Exercise1Component {
  @Input({required:true}) user!:User;

  get selectedUser(){
    return this.user;
  }
}
