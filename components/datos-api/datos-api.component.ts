import { Component, OnInit } from '@angular/core';
import { DatosApiService } from '../../services/datos-api.service';
import { DatosInterface } from '../../interfaces/datos.interface';

@Component({
  selector: 'app-datos-api',
  imports: [],
  templateUrl: './datos-api.component.html',
  styleUrl: './datos-api.component.scss'
})
export class DatosApiComponent implements OnInit {
  
  datosList: DatosInterface[] = [];
  constructor(private datosApiService: DatosApiService){}
  ngOnInit(): void {
  this.getDatos();
  }

  getDatos(){
    this.datosApiService.getData().subscribe({
      next: (result) =>{
        this.datosList = result;
        console.log(this.datosList);

      },
      error: (err) =>{
        console.log(err);
      }
    })
  }


}
