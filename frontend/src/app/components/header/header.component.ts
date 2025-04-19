import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router:Router){}
  goHome(){
    this.router.navigate(['']);
  }
  goRegister(){
    this.router.navigate(['register']);
  }
  goBook(){
    this.router.navigate(['appointment']);
  }
  isOnRegisterPage(): boolean {
    return this.router.url.includes('/register');
  }
  isOnAppointmentPage(): boolean {
    return this.router.url.includes('/appointment');
  }
}
