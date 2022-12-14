import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { Observable } from 'rxjs';
import { UserI } from './models/usuario';
import { AsistenciaI } from './models/asistencias';

@Injectable({
  providedIn: 'root'
})
export class JsonrestService {
  listado = [];
  listadoSecciones = [];
  listadoAsistencias = [];
  listadoAsignaturas = [];
  item : any;
  private urlBaseApi = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient, private storage: Storage) { 
    this.init();
  }

  UpdateAsist(id: AsistenciaI):Observable<AsistenciaI>{
    let urlAsistencia = 'http://localhost:3000/asistencias?id='
    return this.httpClient.put<AsistenciaI>(urlAsistencia + id, id);
  }
  getInicio(username: String):Observable<UserI[]>{
    return this.httpClient.get<UserI[]>(this.urlBaseApi + 'usuarios?username=' + username);
   }
   postAsistencia(asistencia: AsistenciaI):Observable<AsistenciaI>{
    return this.httpClient.post<AsistenciaI>(this.urlBaseApi + 'asistencias',asistencia);
   }
  getUsers()
  {
    let url = this.urlBaseApi + 'usuarios';
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
    let url = this.urlBaseApi + 'usuarios?username=' + username;
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

  getProfesor(username : String)
  {
    let url = this.urlBaseApi + 'profesores?username=' + username;
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

  getCont(contrasena:String)
  {
    let url = this.urlBaseApi + 'usuarios?contrasena=' + contrasena;
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
  getID(id: string)
  {
    let url = this.urlBaseApi + 'usuarios?id='+id;
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
  getSeccionId(id: String)
  {
    let url = this.urlBaseApi + 'secciones?id='+id;
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
  getSeccion(id:String)
  {
    let url = this.urlBaseApi + 'secciones?idUsuario=' + id;
    this.listadoSecciones = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listadoSecciones.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }
  
  getSecciones()
  {
    let url = this.urlBaseApi + 'secciones';
    this.listadoSecciones = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listadoSecciones.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }
  getAsistencias()
  {
    let url = this.urlBaseApi + 'asistencias';
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
  getAsistencia(id:String)
  {
    let url = this.urlBaseApi + 'asistencias?idUsuario='+ id;
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
  getAsist2(id:String, idAsignaturas: String)
  {
    let url = this.urlBaseApi + 'asistencias?idUsuario=' + id +'&idAsignaturas=' + idAsignaturas;
    this.listadoAsistencias = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listadoAsistencias.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }
  getAsignaturas()
  {
    let url = this.urlBaseApi + 'asignaturas';
    this.listadoAsignaturas = [];
    return new Promise((resolve, rejects) => 
    {
      this.httpClient.get(url).subscribe((data:[]) =>
      {
        resolve(data);
        data.forEach(item => { this.listadoAsignaturas.push(item); })
      },
      error =>
      {
        console.log("Error en el servidor")
      });
    });
  }
  getAsignatura(id: String)
  {
    let url = this.urlBaseApi + 'asignaturas?id='+id;
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

