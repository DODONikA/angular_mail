import { RouterOutlet, Routes } from '@angular/router';
import {IncomeComponent} from './pages/income/income.component';
import {LoginComponent} from './pages/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'income', component: IncomeComponent },
    { path: 'login', component: LoginComponent},
];

