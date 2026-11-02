import {Component} from "@angular/core"
import { AppRoutingModule } from "../../app-routing-module";
import { FormsModule } from "@angular/forms"; //crea un objeto con los datos del componente

@Component({
    selector: "app-addTask", //nombre del componente
    templateUrl: "./add.component.html", //vista del componente
    styleUrl: "./add.component.scss", //estilos
    imports: [AppRoutingModule, FormsModule]
})

export class AddComponent {
    numberTask: number = 10;
    titleTask: string = ""; //empieza vacío para que el usuario ingrese la tarea
    activeButton: boolean = true;

    sendTask(){
        const sizeTask = this.titleTask.trim().split(""); //convierte un string en un array
        if(sizeTask.length > 0){
            this.activeButton = false;
        }else{
            this.activeButton = true;
        }
        console.log(`Tarea enviada con éxito: ${this.titleTask}`);
    }
}