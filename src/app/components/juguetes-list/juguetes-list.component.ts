
import { Component, inject } from '@angular/core';
import { JugueteService } from '../../services/juguete.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InterfaceJuguete, Juguete } from '../../common/juguete';


@Component({
  selector: 'app-juguetes-list',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './juguetes-list.component.html',
  styleUrl: './juguetes-list.component.css'
})
export class JuguetesListComponent {
  private readonly jugServie: JugueteService = inject(JugueteService);
  juguetes: Juguete[] = [];


  constructor() {
    this.loadJuguetes();
  }
  protected loadJuguetes(){
    this.jugServie.getJuguetesList().subscribe(
      {
        next: (value) => {
          this.juguetes = value.juguetes; // Asigna los juguetes desde la respuesta
        },
        error: err=>{alert(err.message);},
        complete:() => {console.log('Lista de juguetes cargada')}
      }
    )
  }

}
