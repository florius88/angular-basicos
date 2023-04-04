import { Injectable } from "@angular/core";

import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ];

    get personajes() {
        return [...this._personajes];
    }

    constructor() {}

    agregarNuevoPersonaje(argumento: Personaje) {
        console.log(argumento);
        this._personajes.push(argumento);
    }

}



