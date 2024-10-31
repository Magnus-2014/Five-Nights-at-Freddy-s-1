/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Border extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("white rectangle", "./Border/costumes/white rectangle.svg", {
        x: 234,
        y: 128,
      }),
    ];

    this.sounds = [
      new Sound(
        "Vocals_Breaths_S_35972012",
        "./Border/sounds/Vocals_Breaths_S_35972012.wav"
      ),
      new Sound(
        "Vocals_Breaths_S_35972006",
        "./Border/sounds/Vocals_Breaths_S_35972006.wav"
      ),
      new Sound(
        "Vocals_Breaths_S_35972008",
        "./Border/sounds/Vocals_Breaths_S_35972008.wav"
      ),
      new Sound(
        "Vocals_Breaths_S_35972014",
        "./Border/sounds/Vocals_Breaths_S_35972014.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera2
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
    ];

    this.audioEffects.volume = 0;
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveCamera() {
    this.visible = true;
    if (
      this.toString(this.stage.vars.bonnieLocation) === "Got You" ||
      this.toString(this.stage.vars.chicaLocation) === "Got You"
    ) {
      this.audioEffects.volume = 50;
      yield* this.wait(10);
      if (this.toNumber(this.stage.vars.cams) === 1) {
        this.stage.vars.moniter = 0;
        this.broadcast("office");
      }
    }
  }

  *whenIReceiveOffice() {
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveCamera2() {
    if (
      this.toString(this.stage.vars.bonnieLocation) === "Got You" ||
      this.toString(this.stage.vars.chicaLocation) === "Got You"
    ) {
      while (true) {
        yield* this.playSoundUntilDone(this.random(1, 4));
        yield;
      }
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }
}
