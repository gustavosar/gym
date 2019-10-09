import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  providers: [AuthService]
})
export class LoginPage {
  public usuario;

  constructor(private auth:AuthService, private route: Router, private storage: Storage) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  loginGoogle(){
    this.auth.GoogleLogin()
      .then((result)=>{
        this.usuario = result.additionalUserInfo.profile
      })
      if(this.usuario.verified_email == true){
        this.route.navigated['/login']
      }else{
        alert('Email do usuario nao confimado ou inválido. Tente novamente mais tarde')
      }
  }
}
