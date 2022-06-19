import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../cats.service";


@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.css']
})
export class AllCatsComponent implements OnInit {
  objectKeys=Object.keys
  itemCat:any
  cats:string='birm'
  catsId:any
  constructor(private serv: CatsService) {
  }

  ngOnInit(): void {
 this.getCatBreed()

  }
 getCatBreed(){
    this.serv.getAllCats(this.cats).subscribe(rez=>{
      this.itemCat=rez
      console.log(rez)
    })
 }


}
