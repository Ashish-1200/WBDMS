import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";


@Injectable({ providedIn:"root"})
export class  VieweventService {
  constructor(private http: HttpClient ){ }

  vieweventForm(id:any)
 {
  const url = `http://localhost:3000/event/${id}`;
  return this.http.get(url);
  

}
  }
