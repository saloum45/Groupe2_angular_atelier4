import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  // Attributs
  dataPass=false;
  produits=[
    {
      id:1,
      titre:"Setup gamer",
      image:"https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?cs=srgb&dl=pexels-xxss-is-back-777001.jpg&fm=jpg",
      prix:750000,
      description:"Un PC Gamer est conçu spécifiquement pour le jeu grâce à sa puissance et ses capacités supérieures à un ordinateur bureautique. Les composants ont été étudiés pour une utilisation intensive et pour gérer une importante consommation de ressources."
    },
    {
      id:2,
      titre:"Chevrolet",
      image:"https://images.pexels.com/photos/16038653/pexels-photo-16038653/free-photo-of-voiture-chevrolet-pickup-dans-los-angeles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      prix:5000000,
      description:"Chevrolet malibu 2013 essence automatique mutation récente intérieur semi-cuir grand écran en parfait état papiers en règles climatisation bi-zon à 5.000.000"
    },
    {
      id:3,
      titre:"BMW X6",
      image:"https://www.bmw.fr/content/dam/bmw/common/all-models/m-series/x6m/2023/highlights/bmw-m-series-x6-m-gallery-image-impressionen-03_890.jpg",
      prix:100000000,
      description:"La conception allie l'agilité d'un tout-terrain et la sportivité d'un coupé. Il est construit sur la base d'une X5 mais est plus long de 3 cm. Intérieurement, il utilise largement les instruments et pièces de la X5. Quelques ajouts l'en distinguent comme les appuis genoux et les palettes au volant. Seul vrai changement majeur, le passage de trois sièges arrière à deux sièges sport individuels (bien qu'une option pour obtenir une troisième place soit créée en 2011). "
    },
    {
      id:4,
      titre:"Iphone 15",
      image:"https://images.pexels.com/photos/18525574/pexels-photo-18525574/free-photo-of-unboxing-iphone-15-pro-max-box-in-natural-titanium-color-mention-zana_qaradaghy-on-instagram-while-use-this-photo-follow-on-instagram-zana_qaradaghy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      prix:500000,
      description:"Lors des premières semaines de vente du téléphone, certains utilisateurs constatent que les iPhone 15 chauffent plus que d'ordinaire, avec des températures pouvant atteindre jusqu'à 47°C, particulièrement sur les versions Pro1. Les plaintes poussent Apple à sortir un communiqué confirmant que divers bugs logiciels et une mauvaise optimisation de certaines applications provoquent une surchauffe de l'appareil2. Le 7 octobre 2023, Apple sort une mise à jour de son système d'exploitation iOS 17.0.3 censée corriger le problème3. Malgré cette dernière, les problèmes de surchauffe persistent, et des utilisateurs notent même que des brûlures au niveau de l'écran ont fait leur apparition4. "
    },
    {
      id:5,
      titre:"Moto MT07",
      image:"https://monimoto.com/media/yamaha-mt-07-1.jpg",
      prix:43900,
      description:"Le disque dur interne se présente sous la forme d'un boîtier qui est composé : de disques en métal, en verre ou en céramique empilés (appelés Platters en anglais) montés autour d'un axe ; de têtes de lecture et d'écriture qui sont des micro-aimants ; d'une interface de connexion à la carte mère.."
    },
    {
      id:6,
      titre:"Airpod",
      image:"https://i0.wp.com/www.softtradingsn.com/wp-content/uploads/2019/08/4992-Airpod.jpg?fit=800%2C800&ssl=1",
      prix:30000,
      description:"Les AirPods sont légers et offrent une forme ajustée. Ils se positionnent parfaitement dans votre oreille pour plus de confort et une meilleure orientation du son. Leur tige est 33 % plus courte que celle des AirPods de 2ᵉ génération et inclut un capteur de pression pour contrôler facilement votre musique et vos appels."
    }
  ]


  // Methodes
  saveCard(produit:any){
    this.dataPass=true;
    console.warn(produit);
    localStorage.setItem('produit',JSON.stringify(produit));
  }
}
