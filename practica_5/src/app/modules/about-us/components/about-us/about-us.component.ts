import { Component } from '@angular/core';
import Swal from'sweetalert2'; // sweetalert
import { Router } from '@angular/router';
import { AboutUsService } from '../../_services/about-us.service';

declare var $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(private aboutUsService: AboutUsService, // servicio customer de API
    private router: Router,
  ){}
}
