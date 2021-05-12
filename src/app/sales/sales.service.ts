import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError, of } from "rxjs";
import { catchError } from "rxjs/operators";

import { MonthlySales } from "./monthly-sales";

@Injectable({
  providedIn: "root"
})

export class SalesService {
  private salesUrl = "api/sales/sales.json";

  constructor(private http: HttpClient) { }

  getSalesByMonth(): Observable<MonthlySales[]>{
    // return this.http.get<MonthlySales[]>(this.salesUrl).pipe(catchError(this.handleError));
    return of(this.getSales());
  }

  private handleError(err: HttpErrorResponse){
    let errorMessage = "";
    if (err.error instanceof ErrorEvent){
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    return throwError(errorMessage);
  }

  private getSales = (): MonthlySales[] => {
    return [
      { month: "January", revenue: 35763 },
      { month: "February", revenue: 29456 },
      { month: "March", revenue: 50782 },
      { month: "April", revenue: 51913 },
      { month: "May", revenue: 26283 },
      { month: "June", revenue: 25478 },
      { month: "July", revenue: 10293 },
      { month: "August", revenue: 26090 },
      { month: "September", revenue: 43892 },
      { month: "October", revenue: 20487 },
      { month: "November", revenue: 45721 },
      { month: "December", revenue: 55093 }
    ];
  }
}
