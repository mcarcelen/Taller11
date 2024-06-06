import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TablaComponent } from './shared/tabla/tabla.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, TablaComponent, HttpClientModule, RouterLink],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'clienteAngular';
  fotos: Foto[] = [];

  constructor(private recursosService: RecursosService){
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.fotos = respuesta as Array<Foto>
    });
  }
}
