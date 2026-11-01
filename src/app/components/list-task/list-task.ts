import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-task',
  standalone: false,
  templateUrl: './list-task.html',
  styleUrl: './list-task.scss',
})

export class ListTask {
  @Input() tareas: string[] = []; //Lista de tareas recibidas desde el componente padre
}
