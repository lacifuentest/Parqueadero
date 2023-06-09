import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  UsuarioForm = this.fb.group({
  
    Nombre: ["", Validators.required],
    Apellido: [null, Validators.required],
    Email: [null, Validators.required],
    Celular: null,

    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Usuario agregado',
      'Click en el boton',
      'success'
    )
  }
}
