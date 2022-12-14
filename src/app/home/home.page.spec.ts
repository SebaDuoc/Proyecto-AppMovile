import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { HomePage } from './home.page';

/*describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/

describe('LOGIN:',()=>{
  let component : HomePage;
  let fixture: ComponentFixture<HomePage>;

   beforeEach(waitForAsync(async() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),HttpClientModule],
      providers: [Storage,FormBuilder]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  }));

  it ('validar', async()=>{
    const usuario = (<HTMLInputElement>document.getElementById('usuario')).value='sds';
    const contrasena = (<HTMLInputElement>document.getElementById('contrasena')).value='2313';
    document.getElementById('btnAgregar')?.click();

    expect(usuario).toBeTruthy();
    expect(contrasena).toBeTruthy();

    

  });

});