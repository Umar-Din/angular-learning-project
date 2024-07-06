import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User, UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { Exercise1Component } from './exercise1/exercise1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,UserComponent,Exercise1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularP1';
  users = DUMMY_USERS;
  user:User|undefined;
  selectedUser(user:User){
    this.user = user;
  }
}
