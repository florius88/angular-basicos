import { Injectable } from "@angular/core";
import { v4 as uuid } from 'uuid';

import { Personaje } from "../interfaces/dbz.interface";


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            id: uuid(),
            nombre: 'Goku',
            poder: 15000
        },
        {
            id: uuid(),
            nombre: 'Vegeta',
            poder: 8500
        }
    ];

    get personajes() {
        return [...this._personajes];
    }

    constructor() {}

    agregarNuevoPersonaje(argumento: Personaje) {

        const newCaracter: Personaje = { ...argumento, id: uuid() };

        console.log(newCaracter);
        this._personajes.push(newCaracter);
    }

}



