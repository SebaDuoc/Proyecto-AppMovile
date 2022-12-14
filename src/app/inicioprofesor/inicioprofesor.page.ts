import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonrestService } from '../jsonrest.service';

@Component({
  selector: 'app-inicioprofesor',
  templateUrl: './inicioprofesor.page.html',
  styleUrls: ['./inicioprofesor.page.scss'],
})
export class InicioprofesorPage implements OnInit {
  listado :any = [];
  datos : any = [];
  nombre: String;
  apellido: String;
  idUsuario: String;
  listaCursos = [];
  
  constructor(private api : JsonrestService,
              private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
    this.apellido = sessionStorage.getItem('apellido');
    this.idUsuario = sessionStorage.getItem('id');
    this.listar();
  
  }
  async listar(){
    
  await  this.api.getSeccion(this.idUsuario);
    this.listado = this.api.listadoSecciones;     
  }
   

  limpiar(){
    sessionStorage.clear();
  }
}
