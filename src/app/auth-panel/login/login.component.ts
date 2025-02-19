import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: false
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  constructor(
    private crudservice: CrudService,
    private router: Router
  ) { }

  ngOnInit() { }
  onSubmit() {
    if (this.username == "" || this.password == "") {
      alert("Username and Password is required")
    }
    else {
      const logindata = new FormData()
      logindata.append('username', this.username)
      logindata.append('password', this.password)
      this.crudservice.onLogin(logindata).subscribe(
        (res:any) => {
          console.log(res);
          console.log(res.StatusCode);
          if (res.StatusCode === 200) {
            alert("Login Successfull")
            this.router.navigate(['/home/dashboard']);
          }
        })
      console.log('username');
      console.log('password');
    }
  }
}