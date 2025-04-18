import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialist-grid',
  standalone: false,
  templateUrl: './specialist-grid.component.html',
  styleUrl: './specialist-grid.component.css',
})

export class SpecialistGridComponent {
  specialists = [
    {
      name: 'Cardiologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/448d8269-f1e5-4b9d-b27c-452be0cb182d.png',
    },
    {
      name: 'Dermatologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/0a339a78-c068-4cf0-bae8-c81113a80c07.png',
    },
    {
      name: 'Endocrinologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/0e229510-3913-4173-9dac-77eaa3b0ef26.png',
    },
    {
      name: 'Gastroenterologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/5a7c5339-6417-4b62-927e-0db533af2ed6.png',
    },
    {
      name: 'Hematologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/387825c1-050a-43e6-b01b-017f1aadd4bc.png',
    },
    {
      name: 'Neurologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/9e70445b-177f-44b8-aeef-1353ebf5abad.png',
    },
    {
      name: 'Oncologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/2cd890ee-e710-4afc-acef-7432b7b895ed.png',
    },
    {
      name: 'Pediatrician',
      image:
        'https://cdn.usegalileo.ai/sdxl10/f0564cca-c048-4968-8eba-f7cd3dd4fe6d.png',
    },
    {
      name: 'Psychiatrist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/ed689a25-3297-4992-a5a1-40313d87df98.png',
    },
    {
      name: 'Rheumatologist',
      image:
        'https://cdn.usegalileo.ai/sdxl10/580b8ef6-9d39-45e7-9b49-5e44b9fa446a.png',
    },
  ];
  
  constructor(private router:Router){}

  goToSpecialization(specialty: string) {
    this.router.navigate(['/doctors/specialization', specialty]);
    // console.log(specialty);
  }

}
