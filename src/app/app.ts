import { AfterViewInit, Component, DoCheck, signal } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  // ngAfterViewInit(): void {
  //   console.log("Creandose desde AfterViewInit");
  // }

  // isDestroyed: boolean = true;
  // countDown = signal(10);
  // intervalId: any;

  // constructor(){
  //   this.intervalId = setInterval(() => {
  //     this.countDown.update(n => n-1);
  //     if(this.countDown() === 0){
  //       clearInterval(this.intervalId);
  //       this.isDestroyed = false;
  //     }
  //   }, 1000)
  // }

  // value = 0;
  // previousValue = 0;
  // changeDetected = false;

  // updateValue() {
  //   this.value++;
  //   setInterval(() => {
  //     this.changeDetected = false;
  //   }, 2000)
  // }

  // ngDoCheck(): void {
  //   if(this.previousValue != this.value){
  //     this.changeDetected = true; //captura el cambio
  //     console.log("Cambio detectado");
  //     this.previousValue = this.value;
  //   }
  // }

  tareas: string[] = [];
  agregarTarea(tarea: string) {
    this.tareas = [...this.tareas, tarea];
  }
}
