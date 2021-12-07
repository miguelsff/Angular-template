import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page-auth',
  templateUrl: './login-page-auth.component.html',
  styleUrls: ['./login-page-auth.component.scss']
})
export class LoginPageAuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  iniciarSesion(f: NgForm) {
    if (f.valid) {
      let value = f.form.value;
      /*this.store.dispatch(actions.mostrarCargando({ estado: true }));
      this.store.dispatch(actions.recuperaTokenAutorization({ usuario: value.usuario, password: value.password }));*/
    } else {
      //Swal.fire('Atención!', 'Ingrese su usuario y contraseña', 'warning');
    }
    
    
  }

}
