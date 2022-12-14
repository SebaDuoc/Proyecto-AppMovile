import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {

password    : String;
newpassword : String;
mensaje     : String;

  constructor(private AlertController: AlertController,
              private ToasController: ToastController) {
  }
  async grabar (pass: HTMLIonInputElement, newpass: HTMLIonInputElement)
{
  if(pass.value == "")
  {
    this.mensaje = "Falta nueva contraseña";
    const toast = await this.ToasController.create({
      message : "Falta escribir nueva contraseña",
      duration: 2000
    })
    toast.present();
  }
  else if(newpass.value == "")
  {
    this.mensaje = "Ingrese nuevamente la nueva contraseña";
  }
}
  ngOnInit() {
  }

}
