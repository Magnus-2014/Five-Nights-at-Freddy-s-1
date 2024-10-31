/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BlipFlash2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("430", "./BlipFlash2/costumes/430.png", { x: 480, y: 134 }),
      new Costume("434", "./BlipFlash2/costumes/434.png", { x: 480, y: 116 }),
      new Costume("435", "./BlipFlash2/costumes/435.png", { x: 480, y: -82 }),
      new Costume("436", "./BlipFlash2/costumes/436.png", { x: 480, y: 244 }),
      new Costume("437", "./BlipFlash2/costumes/437.png", { x: 480, y: 126 }),
      new Costume("438", "./BlipFlash2/costumes/438.png", { x: 480, y: 256 }),
      new Costume("439", "./BlipFlash2/costumes/439.png", { x: 480, y: -48 }),
    ];

    this.sounds = [new Sound("XSCREAM", "./BlipFlash2/sounds/XSCREAM.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "help wanted" },
        this.whenIReceiveHelpWanted
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "newgame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "scream" },
        this.whenIReceiveScream
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "night 6" },
        this.whenIReceiveNight6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "custom night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings Menu" },
        this.whenIReceiveSettingsMenu
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
    ];

    this.audioEffects.volume = 0;
  }

  *whenIReceiveMessage1() {
    this.visible = true;
    while (true) {
      this.costumeNumber++;
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenIReceiveMessage2() {
    while (true) {
      yield* this.wait(8 / 100);
      this.effects.ghost = this.random(1, 50);
      yield;
    }
  }

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveNewgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMessage3() {
    while (true) {
      yield* this.wait(30 / 100);
      if (this.random(0, 2) === 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }

  *whenIReceiveScream() {
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      this.audioEffects.volume = 100;
    } else {
      this.audioEffects.volume = 0;
    }
    yield* this.startSound("XSCREAM");
  }

  *whenIReceiveNight6() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveCustomNight() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveSettingsMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveStart() {
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      this.audioEffects.volume = 100;
    } else {
      this.audioEffects.volume = 0;
    }
  }
}
