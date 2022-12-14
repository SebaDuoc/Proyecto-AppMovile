import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { InicioPage } from './inicio.page';

/*
describe('INICIO:', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPage ],
      imports: [IonicModule.forRoot(),HttpClientModule],
      providers: [Storage] 
    }).compileComponents();

    fixture = TestBed.createComponent(InicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('En caso de que no se seleccione nada en el radio-group', () => {
    const radio = (<HTMLInputElement>document.getElementById('tipoAsignatura')).value='004D';

    document.getElementById('btnGetAsignatura')?.click();
      expect(component.tipoAsignatura).toEqual(radio);
  });
});*/



