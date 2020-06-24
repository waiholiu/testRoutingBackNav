import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiStateServiceService {

  constructor() { }


  public expansionPanel : number;

  public scrollPosition: number;

}
