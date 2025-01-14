import { Component, inject, Input, OnInit } from '@angular/core';
import { Juguete } from '../../common/juguete';
import { JugueteService } from '../../services/juguete.service';

@Component({
  selector: 'app-modal-juguete',
  standalone: true,
  imports: [],
  templateUrl: './modal-juguete.component.html',
  styleUrl: './modal-juguete.component.css'
})
export class ModalJugueteComponent implements OnInit{
  @Input("id") id!: number;
  juguete!: Juguete;
  private jugService: JugueteService = inject(JugueteService);

  ngOnInit(): void {
    this.loadJuguete();
  }

  private loadJuguete(){
    this.jugService.getJuguete(this.id).subscribe({
      next: value => {
        this.juguete = value
      },
      error: err => console.error(err),
      complete:() => console.log('Juguete cargado.'),
  
    })
  }


}
