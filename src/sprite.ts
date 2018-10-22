
import * as Pixi from 'pixi.js';

interface SpriteImageData {
  patternWidth: number;
  patternHeight: number;
  sheetWidth: number;
  sheetHeight: number;
}

export default class Sprite extends Pixi.Sprite {

  private fTexture: Pixi.Texture;
  private fImageData: SpriteImageData;
  private fFrame: number;

  constructor(fileName: string, imageData: SpriteImageData) {
    
    const texture: Pixi.Texture = Pixi.Texture.fromImage(fileName);

    super(texture);
    
    this.fTexture = texture;
    this.fImageData = imageData;
    this.fFrame = 0;

    this.frame = 0;

  }

  public get frame(): number {
    return this.fFrame;
  }

  public set frame(value: number) {
    this.fFrame = value;
    this.updateTextureFrame(value);
  }

  private updateTextureFrame(frameIndex: number): void {

    const amountPerX: number = Math.floor(this.fImageData.sheetWidth / this.fImageData.patternWidth);

    const originX: number = (frameIndex % amountPerX) * this.fImageData.patternWidth;
    const originY: number = Math.floor(frameIndex / amountPerX) * this.fImageData.patternHeight;

    this.texture.frame = new Pixi.Rectangle(originX, originY, this.fImageData.patternWidth, this.fImageData.patternHeight);

  }

}
