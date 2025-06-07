import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'App Title';
  protected email = '';
  protected password = '';
  protected remember = false;

  onSubmit() {
    console.log({ email: this.email, password: this.password, remember: this.remember });
  }

}
