import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'SignUp';
  submited: boolean = false;
  states: string[] = ['india', 'usa', 'canada'];

  signUpForm = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Username: new FormControl('', Validators.required),
    Password: new FormControl('', Validators.required),
    Dob: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
  });

  signup() {
    if (this.signUpForm.status != 'INVALID') this.submited = !this.submited;
  }
}
