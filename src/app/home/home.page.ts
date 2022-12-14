import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { ApirestService } from '../apirest.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JsonrestService } from '../jsonrest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {

USU     : String;
CONT  : String;
TIPO : String = 'Profesor';
listado : any = [];
listadoCont : any = [];
formularioRegistro: FormGroup;
listaUser : any = [];
listadoTipo: any =[];





constructor(private crud: ApirestService,
  private alertController: AlertController,
  private toastController: ToastController,
  public fb : FormBuilder,
  public navCtrl: NavController,
  private api : JsonrestService) {

    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload') 
      location.reload() 
    } else {
      localStorage.removeItem('foo') 
    }
  }


async agregar(usu: HTMLInputElement, cont: HTMLInputElement)
{

const USU     = usu.value.trim();
const CONT  = cont.value.trim();



if(USU.length < 1)
{
const alert = await this.alertController.create({
header: 'Alerta',
subHeader: 'Error en el ingreso de datos',
message: 'Falta el usuario',
buttons: ['OK'],
});    
await alert.present();      
}
else if(CONT.length < 1)
{
const alert = await this.alertController.create({
header: 'Alerta',
subHeader: 'Error en el ingreso de datos',
message: 'Falta la contraseña',
buttons: ['OK'],
});    
await alert.present();      
}
else
{
const datos = [{ "usuario"      : usu.value,
                  "contasena"  : cont.value
               }];
// validar los datos antes de guardar...
await this.crud.agregar(usu.value, datos);
usu.value= "";
cont.value= "";


var pass1 = "1234";


await this.api.getUser(USU);
    this.listado = this.api.item[0];

    

 await this.api.getProfesor(USU);
   this.listadoTipo = this.api.item;
   

    if  (this.listado.username == USU && this.listado.contrasena == CONT && this.listadoTipo.length > 0){
      
          this.navCtrl.navigateRoot('inicioprofesor');
          sessionStorage.setItem('id', this.listado.id);
          sessionStorage.setItem('usuario', USU);
          sessionStorage.setItem('nombre', this.listado.nombre);
          sessionStorage.setItem('apellido', this.listado.apellido);
          
      }
      else if (this.listado.username == USU && this.listado.contrasena == CONT){
          this.navCtrl.navigateRoot('inicio');
          sessionStorage.setItem('id', this.listado.id);
          sessionStorage.setItem('usuario', USU);
          sessionStorage.setItem('nombre', this.listado.nombre);
          sessionStorage.setItem('apellido', this.listado.apellido);
          
      }
    
  
   
    
else{
  console.log ('Datos Incorrectos');
  const alert = await this.alertController.create({
    header: 'Alerta',
    subHeader: 'Error en el ingreso de datos',
    message: 'Usuario y/o Contraseña incorrecta',
    buttons: ['OK'],
    });    
    await alert.present(); 
  
      }
    }
  }
  
}


