import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  filas:any[]=[
    {texto: "Item 1"},
    {texto: "Item 2"},
    {texto: "Item 3"},
    {texto: "Item 4"},
  ]
}
