import {AfterContentInit, Component, OnDestroy, OnInit} from "@angular/core"
import { AppRoutingModule } from "../../app-routing-module"; //crea un objeto con los datos del componente

@Component({
    selector: "app-addTask", //nombre del componente
    templateUrl: "./add.component.html", //vista del componente
    styleUrl: "./add.component.scss" //estilos
    ,
    imports: [AppRoutingModule]
})

export class AddComponent  implements AfterContentInit {
    // ngOnInit(): void {
    //     console.log("Creandose desde onInit")
    // }

    // constructor(){
    //     console.log("Creandose desde el constructor")
    // }

    ngOnDestroy(): void {
        console.log("El componente ha sido destruido")
    }

    ngAfterContentInit(): void {
        console.log("El contenido proyectado ha sido inicializado")
    }
}