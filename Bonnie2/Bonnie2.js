/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bonnie2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("bonnie-1", "./Bonnie2/costumes/bonnie-1.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-2", "./Bonnie2/costumes/bonnie-2.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-3", "./Bonnie2/costumes/bonnie-3.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-4", "./Bonnie2/costumes/bonnie-4.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-5", "./Bonnie2/costumes/bonnie-5.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-6", "./Bonnie2/costumes/bonnie-6.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-7", "./Bonnie2/costumes/bonnie-7.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-8", "./Bonnie2/costumes/bonnie-8.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-9", "./Bonnie2/costumes/bonnie-9.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-10", "./Bonnie2/costumes/bonnie-10.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-11", "./Bonnie2/costumes/bonnie-11.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-12", "./Bonnie2/costumes/bonnie-12.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-13", "./Bonnie2/costumes/bonnie-13.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-14", "./Bonnie2/costumes/bonnie-14.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-15", "./Bonnie2/costumes/bonnie-15.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-16", "./Bonnie2/costumes/bonnie-16.png", {
        x: 48,
        y: 48,
      }),
      new Costume("bonnie-17", "./Bonnie2/costumes/bonnie-17.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-18", "./Bonnie2/costumes/bonnie-18.png", {
        x: 50,
        y: 50,
      }),
      new Costume("bonnie-19", "./Bonnie2/costumes/bonnie-19.png", {
        x: 48,
        y: 50,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "loading" },
        this.whenIReceiveLoading
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
    ];

    this.audioEffects.volume = 30;
  }

  *whenIReceiveLoading() {
    this.visible = true;
    yield* this.wait(this.random(5, 10));
    this.visible = false;
    this.broadcast("start");
  }

  *whenIReceiveStart() {
    while (true) {
      yield* this.wait(5);
      if (this.random(1, 500) === 1) {
        this.audioEffects.volume = this.random(10, 50);
        yield* this.playSoundUntilDone("pirate song2");
      }
      yield;
    }
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.size = 60;
    this.goto(220, -120);
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.costumeNumber++;
      yield;
    }
  }
}
