import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router, ActivatedRoute} from '@angular/router'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  providers: [AuthService]
})
export class LoginPage {
  public usuario;

  constructor(private auth:AuthService, private route: Router) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

 async loginGoogle(){
    this.auth.GoogleLogin()
      .then((result)=>{
        this.usuario = result.additionalUserInfo.profile
        this.route.navigate(['/home'])
      })
    }
}
