import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

import { CamaraPage } from './camara.page';


describe('INGRESAR CODIGO:', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraPage ],
      imports: [IonicModule.forRoot(),HttpClientModule],
      providers: [Storage]

    }).compileComponents();

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('validar', () => {
    const codigo = (<HTMLInputElement>document.getElementById('codigo')).value='asda';
    expect(codigo).toBeTruthy();
  });

});
