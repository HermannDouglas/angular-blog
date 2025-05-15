import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string = 'assets/imagem-noticia-1.png';

  @Input()
  contentTitle: string = 'MINHA NOTICIA';

  @Input()
  contentDescription: string =
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt non aut vero tempora iste corporis esse eos repellat laudantium, beatae adipisci, nihil iure numquam maxime vitae dolorum, dicta eveniet voluptas?';

  constructor() {}

  ngOnInit(): void {}
}
