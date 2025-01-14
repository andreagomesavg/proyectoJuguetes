
import { Component, inject } from '@angular/core';
import { JugueteService } from '../../services/juguete.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Juguete } from '../../common/juguete';


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
  currentPage=1;

  constructor() {
    this.loadJuguetes();
  }
  protected loadJuguetes(){
    this.jugServie.getJuguetes(this.currentPage).subscribe(
      {
        next: (response) => {
          this.juguetes = response.juguetes; // Asigna los juguetes desde la respuesta
        },
        error: err=>{alert(err.message);},
        complete:() => {console.log('FinalSpace characters loaded')}
      }
    )
  }

}
