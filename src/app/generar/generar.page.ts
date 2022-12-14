import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JsonrestService } from '../jsonrest.service';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})
export class GenerarPage implements OnInit {
  
  qrCodeString : String;
  datos : any = [];
  listado : any = [];

  constructor(private api: JsonrestService,
              private activatedRoute: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.leer();
  }
 
  async leer(){
    let id ="";  
    this.activatedRoute.paramMap.subscribe(async parametros =>{
      id = parametros.get("id");
    })
    await this.api.getSeccionId(id);
    this.datos = this.api.item;
    this.listado= this.api.item[0];

  }


}

