import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public veiculoService: VeiculoService) {}

  ngOnInit() {}
}
