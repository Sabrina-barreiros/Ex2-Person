import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Bem vindo ao {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
    
    </a>
  `,
})
export class App {
  name = 'App Person';
}

bootstrapApplication(App);

let primeiro = "Sabrina";
let segundo = "Barreiros";
let ultimo = "Duarte";

document.getElementById('primeiro-nome').innerHTML = primeiro.toString();
document.getElementById('segundo-nome').innerHTML = segundo.toString();
document.getElementById('ultimo-nome').innerHTML = ultimo.toString();
