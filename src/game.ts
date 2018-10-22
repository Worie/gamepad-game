
import * as Pixi from 'pixi.js';

export default class Game {

	private fApp: Pixi.Application;

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

		const sprite: Pixi.Sprite = Pixi.Sprite.fromImage( require('../data/monster.gif') );
		sprite.texture.frame = new Pixi.Rectangle(0, 0, 32, 32);
		this.fApp.stage.addChild(sprite);

		sprite.x = 300;
		sprite.y = 200;

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
		console.log('d2', delta);
	}

}
 