import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input' ;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login',
  imports: [
    RouterModule, MatSlideToggleModule, MatInputModule, MatFormFieldModule, MatSelectModule,
    MatIconModule, MatDividerModule, MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
}
