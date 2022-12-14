import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'


@Injectable({
  providedIn: 'root'
})
export class ApirestService {

  listado = [];
  item : any;
  private urlBaseApi = 'https://jsonplaceholder.typicode.com/';
  constructor(private httpClient: HttpClient, private storage: Storage) { 
    this.init();
  }

  getUsers()
  {
    let url = this.urlBaseApi + 'users';
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listado.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }
  getUser(username:String)
  {
    let url = this.urlBaseApi + 'users?username=' + username;
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data: any) =>
      {
        resolve(data);
        this.item = data;
        
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }

  getPosts()
  {
    let url = this.urlBaseApi + 'users/1/posts';
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listado.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }

  getPost(id: string)
  {
    let url = this.urlBaseApi + 'posts?userId='+id;
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data: any) =>
      {
        resolve(data);
        this.item = data;
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }

  
  getCom(id: string)
  {
    let url = this.urlBaseApi + 'comments?postId='+id;
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data: any) =>
      {
        resolve(data);
        this.item = data;
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }

  getComs(id: string)
  {
    let url = this.urlBaseApi + 'comments?postId='+id;
    this.listado = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listado.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      })
    });
  }

  //=======================================================================//
  //=======================================================================//
  async init()
  {
    await this.storage.create();
  }
  async agregar(key: string, valor: any)
  {
    await this.storage.set(key, valor);
  }
  async leer(key: string)
  {
    return await this.storage.get(key);
  }

  async listar()
  {
    let listado = []
    await this.storage.forEach((v,k) => { listado.push(v[0]); });
    return listado;
  }
  async eliminar(key: string)
  {
    this.storage.remove(key);
  }

}
