import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Dağ Bisikleti',
      imageUrl: 'assets/biking.jpeg',
      username: 'cbbik',
      content: 'Çok Hızlı Sürdüm',
    },
    {
      title: 'Tırmanış',
      imageUrl: 'assets/mountain.jpg',
      username: 'cbdag',
      content: 'Hadi Tırmanalım',
    },
    {
      title: 'Doğa Yürüyüşü',
      imageUrl: 'assets/tree.jpg',
      username: 'cbtırman',
      content: 'Hadi Biraz Turlayalım',
    },
  ];
}
