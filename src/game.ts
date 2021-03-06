
import * as Pixi from 'pixi.js';
import Sprite from './sprite';

export default class Game {

	private fApp: Pixi.Application;
	private fTest: number = 0;
	private fSprite: Sprite;

	/**
	 * Inicjuje silnik graficzny gry.
	 */
	public init(): void {

		// stwórz aplikację Pixi.js
		this.fApp = new Pixi.Application(1024, 768, { backgroundColor: 0x000000 });

		// dodajemy klasę .game-window do okna, aby można było ją ostylować
		this.fApp.view.classList.add('game-window');

		// dodajemy html stworzony przez pixi do <body>
		document.body.appendChild(this.fApp.view);

	}

	/**
	 * Uruchamia grę.
	 */
	public run(): void {

		this.fSprite = new Sprite( require('../data/monster.gif') , {
			patternWidth: 32,
			patternHeight: 32,
			sheetWidth: 96,
			sheetHeight: 2048,
		} );

		this.fApp.stage.addChild(this.fSprite);

		this.fSprite.x = 300;
		this.fSprite.y = 200;

		this.fApp.ticker.add(() => {
			const delta: number = this.fApp.ticker.elapsedMS / 1000;
			this.timeSlice(delta);
		});
		
	} 

	/**
	 * Ta funkcja jest uruchamiana za każdym razem kiedy Pixi.js narysuje kolejną klatkę animacji. W
	 * argumencie tej funkcji przekazywana jest ilość sekund która upłynęła od ostatniej aktualizacji animacji.
	 */
	public timeSlice(delta: number): void {
		this.fTest += delta * 6;
		this.fSprite.frame = Math.floor(this.fTest) % 30 * 3;
		console.log(this.fSprite.frame);
	}

}
 