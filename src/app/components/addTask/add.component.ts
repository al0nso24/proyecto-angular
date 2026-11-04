import {Component} from "@angular/core"
import { AppRoutingModule } from "../../app-routing-module";
import { FormsModule, NgForm } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser"; //crea un objeto con los datos del componente

@Component({
    selector: "app-addTask", //nombre del componente
    templateUrl: "./add.component.html", //vista del componente
    styleUrl: "./add.component.scss", //estilos
    imports: [AppRoutingModule, FormsModule, BrowserModule]
})

export class AddComponent {
    numberTask: number = 10;
    titleTask: string = ""; //empieza vacío para que el usuario ingrese la tarea
    activeButton: boolean = true;

    sendData(form: NgForm){
        if(form.valid){
            console.log(this.titleTask);
        }
    }

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