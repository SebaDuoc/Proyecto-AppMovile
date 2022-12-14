import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  listado = [];
  datos : any = [];
  constructor(private api: ApirestService, 
              private activatedRoute: ActivatedRoute) { 
                
 }

  ngOnInit() {
    this.leer();

  }

  async leer(){
    let id ="";
    this.activatedRoute.paramMap.subscribe(async parametros =>{
      id = parametros.get("id");
    })
    await this.api.getCom(id);
    this.datos = this.api.item;
    console.log(this.datos);

  }
}
