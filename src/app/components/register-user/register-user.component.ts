import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForRegistrationDto } from 'src/app/core/models/user-registration-dto';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { PasswordConfirmationValidatorService } from 'src/app/core/services/password-confirmation-validator.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  registerForm!: FormGroup;
  public errorMessage: string = '';
  public showError: boolean = false;
  constructor(private authService: AuthenticationService, private passConfValidator: PasswordConfirmationValidatorService, private router: Router) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      nickName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
    this.registerForm.get('confirm')!.setValidators([Validators.required,
    this.passConfValidator.validateConfirmPassword(this.registerForm.get('password')!)]);
  }
  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName)!.invalid && this.registerForm.get(controlName)!.touched
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName)!.hasError(errorName)
  }
  public registerUser = (registerFormValue: any) => {
    const formValues = { ...registerFormValue };
    const user: UserForRegistrationDto = {
      email: formValues.email,
      nickname: formValues.nickName,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };
    this.authService.registerUser("api/users/registration", user)
    .subscribe({
      next: (_) => this.router.navigate(["login"]),
      error: (err: any) => {
      this.errorMessage = "Błędne dane, sprawdź czy hasło spełnia wymagania";
      this.showError = true;}
    })
  }
}
