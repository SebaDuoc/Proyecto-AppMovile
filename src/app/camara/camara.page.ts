import { Component, OnDestroy, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';
import { JsonrestService } from '../jsonrest.service';
import { AsistenciaI } from '../models/asistencias';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  username : String;
  nombre : String;
  apellido : String;
  listaAsist : any = [];
  idUsuario : String;
  id: number;
  listaka : any = [];
  listaPresentes : any = [];
  asistencia: AsistenciaI[];
  codigo: String;
  listadoSecciones= [];
  codigoSeccion: String;
  idAsignatura: number;
  nombreAsignatura:String;
  scannedResult: any;
  codigodeRegistro:String;
  nombreProfesor: String;

  constructor(private api:JsonrestService, private alertController: AlertController) { }

  ngOnInit() {
    this.codigodeRegistro = sessionStorage.getItem('codigo');
    this.nombre = sessionStorage.getItem('nombre');
    this.apellido = sessionStorage.getItem('apellido');
    this.username = sessionStorage.getItem('usuario');
    this.idUsuario = sessionStorage.getItem('id');
    this.id = parseInt(sessionStorage.getItem('id'));
    this.codigoSeccion = sessionStorage.getItem('seccion');
    this.idAsignatura = parseInt(sessionStorage.getItem('idAsignatura'));
    this.nombreAsignatura = sessionStorage.getItem('asignatura');
    this.nombreProfesor = sessionStorage.getItem('profesor');
    
    
    this.getAsist();

  }

async checkPermission(){
  try{
    const status = await BarcodeScanner.checkPermission({force : true});
    if ( status.granted){
      return true;
    }
    return false;
  } catch (e){
    console.log(e);
  }
}

async startScan(){
  try {
    const permission = await this.checkPermission();
    if(!permission){
      return;
    }
    await BarcodeScanner.hideBackground();
    document.querySelector('body').classList.add('scanner-active');
    const result = await BarcodeScanner.startScan();
    console.log(result);
    if (result?.hasContent){
      this.scannedResult= result.content;
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      console.log(this.scannedResult);
    }
  } catch(e){
    console.log(e);
    this.stopScan();
  }
}

stopScan(){
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
  document.querySelector('body').classList.remove('scanner-active');
}

  async getAsist () {

    this.api.getAsistencia(this.idUsuario);
    this.listaAsist = this.api.listado;
  
    
    for(let numero of this.listaAsist)
    { 
        if (numero.idUsuario == this.idUsuario){
          this.listaPresentes = numero.idUsuario / 20;

        } 
  
        else {
          this.listaPresentes = 0;

        }
  
  
    }  
  }


async postNuevaAsistencia(){

  if( this.codigo == this.codigodeRegistro ){

      let date: Date = new Date();
      const nuevaAsistencia = {idUsuario: this.id, idAsignaturas : this.idAsignatura, nombreAsignatura: this.nombreAsignatura, seccion: this.codigoSeccion, date: date.toLocaleString()}
      this.api.postAsistencia(nuevaAsistencia).subscribe(estacionamiento => console.log(estacionamiento));
      const alert = await this.alertController.create({
        
        subHeader: 'Asistencia Registrada',
        buttons: ['OK'],
        });    
        await alert.present();
  }
  
  else {
    const alert = await this.alertController.create({
      header: 'Codigo Incorrecto',
      subHeader: 'Vuelve a ingresarlo',
      buttons: ['OK'],
      });    
      await alert.present();
  }


}  
}
