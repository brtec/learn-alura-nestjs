import {Main} from "./main.model";
import {Injectable} from "@nestjs/common";

@Injectable()
export class MainService {
    registros: Main[] = [
        new Main("984654","Nome de Teste 1", 9.90),
        new Main("984655","Nome de Teste 2", 4.90),
        new Main("984656","Nome de Teste 3", 14.90)
    ];

    getAll(): Main[] {
        return this.registros;
    }

    getOne(id: number): Main {
        return this.registros[0];
    }

    create(data: Main) {
        this.registros.push(data);
    }

    edit(data: Main): Main {
        return data;
    }

    delete(id: number){
        this.registros.pop()
    }

}