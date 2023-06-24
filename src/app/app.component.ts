import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './models/player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Who is your favorite football player?';
  http = inject(HttpClient); // Patron de inyección de dependencias. Singleton. Asegura que haya una sola instancia de HttpClient.
  player!: Player;
  playerSearched: string = 'Cristiano Ronaldo';
  render: boolean = false;

  handleSpread(name: string) {
    this.playerSearched = name;
    this.http.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${this.playerSearched}`)
      .subscribe((data: any) => {
        if (data.player != null) {
          this.player = {
            id: data.player[0].idPlayer,
            name: data.player[0].strPlayer,
            images: [
              data.player[0].strRender
            ]
          }
          this.render = true;
        }
      });
  }

  ngOnInit() {
    this.http.get(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${this.playerSearched}`)
      .subscribe((data: any) => {
        if (data.player != null) {
          this.player = {
            id: data.player[0].idPlayer,
            name: data.player[0].strPlayer,
            images: [
              data.player[0].strRender
            ]
          }
          this.render = true;
        }
      });
  }
}