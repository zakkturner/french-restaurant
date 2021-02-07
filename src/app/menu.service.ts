import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private _showMenu = false;
  public get showMenu(): boolean {
    return this._showMenu;
  }
  public set showMenu(v: boolean) {
    this._showMenu = v;
  }
  constructor() {}
}
