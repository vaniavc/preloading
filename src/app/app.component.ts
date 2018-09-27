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
    setInterval(interval => {
      this.next();
    }, 5000);
  }

  next() {
    console.log('DOR');
    const boxes = document.getElementsByClassName('boxes') as any;
    const box = document.getElementsByClassName('box');
    const background = document.getElementsByClassName('container') as any;
    const text = document.getElementsByClassName('text');
    const bg = document.getElementsByClassName('bg');

    // console.log('bg', bg);
    // console.log('box', box);

    if (this.step === 0) {
      console.log('-100', this.step);
      boxes[0].style.left = '-100%';
      this.step = 1;
      box[0].classList.remove('show');
      box[1].classList.add('show');
      text[0].innerHTML = 'Menganalisa data pribadi anda ...';
      text[0].classList.remove('fadeout');
      text[0].classList.add('fadein');
      bg[0].classList.remove('show');
      bg[1].classList.add('show');
    } else if (this.step === 1) {
      console.log('-200', this.step);
      boxes[0].style.left = '-200%';
      box[1].classList.remove('show');
      box[2].classList.add('show');
      text[0].classList.remove('fadein');
      text[0].classList.add('fadeout');
      text[0].innerHTML = 'Menunggu konfirmasi dari sistem kami ...';
      bg[1].classList.remove('show');
      bg[2].classList.add('show');
      this.step = 2;
    } else if (this.step === 2) {
      console.log('0', this.step);
      boxes[0].style.left = '0%';
      box[2].classList.remove('show');
      box[0].classList.add('show');
      text[0].innerHTML =
        'Kami sedang mengecek data anda, silahkan menunggu ...';
      bg[2].classList.remove('show');
      bg[0].classList.add('show');
      this.step = 0;
    }
  }
}
