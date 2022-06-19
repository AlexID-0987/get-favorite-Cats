import { Component, OnInit } from '@angular/core';
import {CatsService} from "../../cats.service";

@Component({
  selector: 'app-cats-pagination',
  templateUrl: './cats-pagination.component.html',
  styleUrls: ['./cats-pagination.component.css']
})
export class CatsPaginationComponent implements OnInit {
  cangetCats:string='6'
  cangetCatsImput:string='6'
  cangetCatsNumber=Number(this.cangetCatsImput)
  catsJson:any=[]
  cangetBreed:string=' '
  categoriesCatsResponse:string=' '
  responseBreed:any=[]
  categoriesCats:any=[]
  messageFirst:string=''
  constructor(private service:CatsService) { }

  ngOnInit(): void {
    this.getPaginationCats()
    this.allCatsBreeds()
    this.getcategoiesCats()
  }
 cangetAllCats(quantityCats:string){
    this.cangetCats=quantityCats
   console.log(this.cangetCats)
 }
 cangetAllBreeds(typeBreed:string){
    this.cangetBreed=typeBreed
   console.log(this.cangetBreed)
 }
cangetAllCategories(categories:string){
    this.categoriesCatsResponse=categories
  console.log(this.categoriesCatsResponse)
}
 getPaginationCats(){
   this.service.paginationRequest(this.cangetCats,this.cangetBreed,this.categoriesCatsResponse).subscribe(data=>{
     this.catsJson=JSON.stringify(data)
     this.catsJson=JSON.parse(this.catsJson)
     console.log(this.catsJson)
     if(this.catsJson.length===0)
     {
       this.messageFirst='Errors!'
     }
     else {
       if (this.cangetCats == '6') {
         this.cangetCatsNumber = this.catsJson.length = 6
       }
       if (this.cangetCats == '12') {
         this.cangetCatsNumber = this.catsJson.length = 12
       }
       if (this.cangetCats == '18') {
         this.cangetCatsNumber = this.catsJson.length = 18
       }
     }
   })
 }

 allCatsBreeds(){
    this.service.allBreeedsCats().subscribe(data=>{console.log(this.responseBreed=data)})

 }
 getcategoiesCats(){
    this.service.allCategoriesCats().subscribe(categories=>{console.log(this.categoriesCats=categories)})
 }
}
