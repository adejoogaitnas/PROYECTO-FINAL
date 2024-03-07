
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-object-window',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './objeto-window.component.html',
  styleUrl: './objeto-window.component.css'
})
export class ObjetoWindowComponent {

  newWindow: Window | null = null;

  openNewWindow(): void {
    this.newWindow = window.open("", "", "width=500px,height=400px,left=50px,top=100px");
  }

  closeWindow(): void {
    if (this.newWindow) {
      this.newWindow.close();
    }
  }

  moveWindowTo(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.moveTo(500, 600);
    }
  }

  resizeWindow(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeTo(1000, 500);
    }
  }

  printPage(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.print();
    }
  }

  resizeToWindow(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.resizeTo(800, 800);
    }
  }

  alertWindow(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.alert();
    }
  }

  confirmWindow(): void {
    if (this.newWindow) {
      this.newWindow.focus();
      this.newWindow.confirm();
    }
  }

  
}