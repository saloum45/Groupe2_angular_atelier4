import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent{
  // Attributs
  // @Input() dataPassed:any;
  dataPassed=JSON.parse(localStorage.getItem('produit') || "{}");

  // Methodes



}
