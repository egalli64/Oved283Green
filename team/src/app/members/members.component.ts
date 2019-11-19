import { Component, OnInit, ɵangular_packages_core_core_bg } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  red: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  color: string;
  constructor() {
    this.red = ['Maurizio', 'Alberto', 'Greta'];
    this.blue = ['Aurora', 'Luca', 'Marianna'];
    this.green = ['Nigel', 'Yun', 'Nadia', 'Marco'];
    this.yellow = ['Roberta', 'Jacopo', 'Marco'];
  }

  ngOnInit() {
  }
  cambia(sel: HTMLSelectElement) {
    this.color = sel.value;
    console.log(this.color);
  }
  bgChange(txt: HTMLInputElement) {
    txt.value.toLocaleUpperCase;
    if (txt.value === 'greta' || txt.value === 'alberto' || txt.value === 'maurizio') {
      document.bgColor = 'red';
    }
    else if (txt.value === 'aurora' || txt.value === 'luca' || txt.value === 'marianna') {
      document.bgColor = 'blue';
    }
    else if (txt.value === 'nigel' || txt.value === 'yun' || txt.value === 'nadia' || txt.value === 'marco c') {
      document.bgColor = 'green';
    }
    else if (txt.value === 'roberta' || txt.value === 'jacopo' || txt.value === 'marco r') {
      document.bgColor = 'yellow';
    }
    else {
      document.bgColor = 'white';
    }
  }
}
