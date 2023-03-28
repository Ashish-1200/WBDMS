import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import {equipmodel} from './equipmentinventory.model'


@Injectable({ providedIn:"root"})
export class  equipinventoryservice {


  constructor(private http: HttpClient ){ }

  listequiprep(){
    return this.http.get <equipmodel[]> ("http://localhost:3000/equipmentinventory/list")

  }

  deleteUserrep(id:any){
    return this.http.delete("http://localhost:3000/equipmentinventory/" + id)
  }
}