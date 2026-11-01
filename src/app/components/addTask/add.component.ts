import {AfterContentInit, Component, EventEmitter, OnDestroy, OnInit, Output} from "@angular/core"
import { AppRoutingModule } from "../../app-routing-module"; //crea un objeto con los datos del componente

@Component({
    selector: "app-addTask", //nombre del componente
    templateUrl: "./add.component.html", //vista del componente
    styleUrl: "./add.component.scss" //estilos
    ,
    imports: [AppRoutingModule]
})

export class AddComponent {
    // ngOnInit(): void {
    //     console.log("Creandose desde onInit")
    // }

    // constructor(){
    //     console.log("Creandose desde el constructor")
    // }

    // ngOnDestroy(): void {
    //     console.log("El componente ha sido destruido")
    // }

    // ngAfterContentInit(): void {
    //     console.log("El contenido proyectado ha sido inicializado")
    // }

    @Output() taskAdded = new EventEmitter<string>();

    agregarTarea(title: string){
        const tarea = title.trim(); //quita los espacios en blanco al inicio y al final
        if(tarea.length > 0){ //si hay algo escrito en el input
            this.taskAdded.emit(tarea); //agrega la tarea
        }
    }
}