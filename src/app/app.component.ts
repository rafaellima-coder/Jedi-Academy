
import { Component } from '@angular/core';

@Component({
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 luke = {name: ' Luke', isJedi: true, temple: 'Coruscant' };
 han = {name: ' Han', isJedi: false};
 leia = {name: ' Leia', isJedi: false };
}
