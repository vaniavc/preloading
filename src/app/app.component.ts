import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  step = 0;

  ngOnInit() {
    setInterval(_ => {
      this.btnNext();
    }, 5000);
  }

  btnNext() {
    console.log('DOR');
    const boxes = document.getElementsByClassName('boxes') as any;
    const box = document.getElementsByClassName('box');
    const background = document.getElementsByClassName('container') as any;
    const text = document.getElementsByClassName('text');

    if (this.step === 0) {
      boxes[0].style.left = '0%';
      this.step = 1;
      box[0].classList.remove('show');
      box[1].classList.add('show');
      text[0].innerHTML = 'Menganalisa data pribadi anda ...';
      text[0].classList.add('fadein');
      background[0].style.backgroundImage =
        'linear-gradient(to right, #37CFDD, #5680DA)';
    } else if (this.step === 1) {
      boxes[0].style.left = '-75%';
      box[1].classList.remove('show');
      box[2].classList.add('show');
      text[0].innerHTML = 'Menunggu konfirmasi dari sistem kami ...';
      text[0].classList.remove('fadein');
      text[0].classList.add('fadeout');
      background[0].style.backgroundImage =
        'linear-gradient(to right, #8C55E9, #4B74E7)';
      this.step = 2;
    } else if (this.step === 2) {
      boxes[0].style.left = '75%';
      box[2].classList.remove('show');
      box[0].classList.add('show');
      text[0].innerHTML =
        'Kami sedang mengecek data anda, silahkan menunggu ...';
      text[0].classList.remove('fadeout');
      background[0].style.backgroundImage =
        'linear-gradient(to right, #43cda3, #569bdd)';
      this.step = 0;
    }

    // console.log(text);
  }
}
