import { Component, OnInit } from '@angular/core';
import { JsonrestService } from '../jsonrest.service';
import { UserI } from '../models/usuario';
import { AsistenciaI } from '../models/asistencias';
import { AlertController, NavController } from '@ionic/angular';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  listado : UserI[];
  username : String;
  nombre : String;
  apellido : String;
  listaAsist : any = [];
  idUsuario : String;
  id: number;
  listaka : any = [];
  asistencia: AsistenciaI[];
  tipoAsignatura:String;
  listadoSecciones =[];
  listadoAsignaturas: any = [];
  programacion: any = [];
  arquitectura: any = [];
  ingles: any = [];
  presentesAPK: number;

  constructor(private api: JsonrestService, private navCtrl: NavController, private alertController: AlertController) { 
    
  }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
    this.apellido = sessionStorage.getItem('apellido');
    this.username = sessionStorage.getItem('usuario');
    this.idUsuario = sessionStorage.getItem('id');
    this.id = parseInt(sessionStorage.getItem('id'));
    this.getApk();
    this.getArquitectura();
    this.getIngles();

  }

 limpiar(){
  sessionStorage.clear();
}

async getApk () {

  await this.api.getSeccionId('1');
  this.programacion= this.api.item;
  
  this.api.getAsistencia(this.idUsuario);
  this.listaAsist = this.api.listado;


  
  this.api.getSecciones();
  this.listadoSecciones = this.api.listadoSecciones;

  await this.api.getAsist2(this.idUsuario,"1");
  this.listaka = this.api.listadoAsistencias;

  for(let numero of this.listaAsist)
  { 
      if (numero.idUsuario == this.idUsuario){
        this.presentesAPK = numero.idUsuario / 20;
        console.log(this.presentesAPK);
        
      } 

      else {
        
        /*console.log(this.listaPresentes);*/
      }


  }  
}
async getArquitectura(){
  await this.api.getSeccionId('4');
  this.arquitectura= this.api.item;

}
async getIngles(){
  await this.api.getSeccionId('5');
  this.ingles= this.api.item;
}


  
async getAsignatura(){

  for(let objeto of this.listadoSecciones)
  {
    if (objeto.seccion == this.tipoAsignatura){
      
      sessionStorage.setItem('seccion',objeto.seccion);
      sessionStorage.setItem('asignatura', objeto.asignatura);
      sessionStorage.setItem('idAsignatura',objeto.idAsignatura);
      sessionStorage.setItem('codigo',objeto.codigo);
      sessionStorage.setItem('profesor',objeto.profesor);
      this.navCtrl.navigateRoot('camara');
    }
  }
  if(this.tipoAsignatura == null){
    const alert = await this.alertController.create({
      subHeader: 'Selecciona una Asignatura',
      buttons: ['OK'],
      });    
      await alert.present();
  }
}


}