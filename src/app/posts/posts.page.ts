import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../apirest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})


export class PostsPage implements OnInit {
  listado = [];
  idUser:any = '1';
  constructor(private api: ApirestService) { }

  ngOnInit() {
    this.listar();
  }
  listar(){
    
    this.api.getPosts();
    this.listado = this.api.listado;
  }

  limpiar(){
    localStorage.clear();
  }


  
  
}
