
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";


@Injectable({ providedIn:"root"})
  export class UpdateformeventService {
  constructor(private http: HttpClient ){ }

  updateformevent(id:any,data:any){
    return this.http.put("http://localhost:3000/event/" +id ,data)


  }





}