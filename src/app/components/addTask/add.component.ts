import {Component, OnInit} from "@angular/core"
import { AppRoutingModule } from "../../app-routing-module";
//FormBuilder = crea un formulario
//FormGroup = agrupa los elementos del formulario
//FormControl = individualmente para cada elemento
import { FormsModule, NgForm, FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser"; //crea un objeto con los datos del componente

@Component({
    selector: "app-addTask", //nombre del componente
    templateUrl: "./add.component.html", //vista del componente
    styleUrl: "./add.component.scss", //estilos
    imports: [AppRoutingModule, FormsModule, BrowserModule]
})

export class AddComponent implements OnInit {

    constructor(private fb: FormBuilder){

    }

    form!: FormGroup;

    ngOnInit(): void {
        this.form = this.fb.group({
            //El formulario empieza vacío y necesita un valor para ser enviado
            //maxLength = 50 caracteres
            title: new FormControl("", [Validators.required , Validators.maxLength(50)])
        })
    }

    sendTaskTitle(): void{
        if(this.form.valid){
            console.log(this.form.value.title);
        }
    }
















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