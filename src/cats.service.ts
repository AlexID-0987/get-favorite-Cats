import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CatsService {
endpoint='https://api.thecatapi.com/v1/images/search?breed_id=beng'
  constructor(private http:HttpClient) { }

  getAllCats(nameBreedCat:string){
  let endpointBreed='https://api.thecatapi.com/v1/images/search?&breed_id='+`${nameBreedCat}`
  return this.http.get(endpointBreed)
}

paginationRequest(limit:string,breeds:string,catsCategories:string){
  let endpointPagination='https://api.thecatapi.com/v1/images/search?limit='+`${limit}`+'&page=50&order=DESC&breed_name='+`${breeds}`+'&category_name='+`${catsCategories}`
  return this.http.get(endpointPagination)
}
allBreeedsCats(){
  let allbreeds='https://api.thecatapi.com/v1/breeds'
  return this.http.get(allbreeds)
}
allCategoriesCats(){
  let categoriesCats='https://api.thecatapi.com/v1/categories'
  return this.http.get(categoriesCats)
}
}
