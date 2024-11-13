import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.css'
})
export class TodoListItemComponent {
  taskTitle='Titre modifier';
  isCompleted=true;
  message=""

  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];

  completeTast()
  {
    this.isCompleted=false;
    console.log("false")
  }
  updateTitle(title: string)
  {
    this.taskTitle=title;
  }

  isEditable: boolean = false;

  // Cette méthode inverse l'état d'édition
  toggleEdit() {
    this.isEditable = !this.isEditable;
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
}

}
