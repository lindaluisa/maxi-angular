import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion= "teacher";
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // when you click and user input already there, it overrides content
    // setValue: set whole form
    // patchValue: overwrite parts of form
/*     this.signupForm.setValue({ 
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    }); */
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  
  /*   onSubmit(form: NgForm) {
      console.log(form);
    } */
  onSubmit() {
    console.log(this.signupForm);
  }
}
