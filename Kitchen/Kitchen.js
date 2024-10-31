/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Kitchen extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./Kitchen/costumes/text.png", { x: 370, y: 54 }),
    ];

    this.sounds = [
      new Sound(
        "OVEN-DRA_1_GEN-HDF18119",
        "./Kitchen/sounds/OVEN-DRA_1_GEN-HDF18119.wav"
      ),
      new Sound(
        "OVEN-DRA_2_GEN-HDF18120",
        "./Kitchen/sounds/OVEN-DRA_2_GEN-HDF18120.wav"
      ),
      new Sound(
        "OVEN-DRAWE_GEN-HDF18122",
        "./Kitchen/sounds/OVEN-DRAWE_GEN-HDF18122.wav"
      ),
      new Sound(
        "OVEN-DRA_7_GEN-HDF18121",
        "./Kitchen/sounds/OVEN-DRA_7_GEN-HDF18121.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    this.goto(0, 95);
    this.visible = false;
  }

  *whenIReceiveCamera() {
    if (this.toString(this.stage.vars.camera) === "Kitchen") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      yield* this.playSoundUntilDone(this.random(1, 4));
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.toString(this.stage.vars.chicaLocation) === "Kitchen") {
        if (this.toNumber(this.stage.vars.cams) === 1) {
          if (this.toString(this.stage.vars.camera) === "Kitchen") {
            this.audioEffects.volume = 75;
          } else {
            this.audioEffects.volume = 20;
          }
        } else {
          this.audioEffects.volume = 10;
        }
      } else {
        this.audioEffects.volume = 0;
      }
      yield;
    }
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
