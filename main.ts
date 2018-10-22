import './main.scss';
import Game from './src/game';

// kod obsługujący full reload ;p
if ((window as any).game) {
  window.location.reload();
}

const game = new Game();
game.init();
game.run();

// zapisujemy do kodu obsługującgeo full reload
(window as any).game = game;

