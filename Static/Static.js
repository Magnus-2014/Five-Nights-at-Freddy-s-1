/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Static extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("12", "./Static/costumes/12.png", { x: 480, y: 270 }),
      new Costume("13", "./Static/costumes/13.png", { x: 480, y: 270 }),
      new Costume("14", "./Static/costumes/14.png", { x: 480, y: 270 }),
      new Costume("16", "./Static/costumes/16.png", { x: 480, y: 270 }),
      new Costume("15", "./Static/costumes/15.png", { x: 480, y: 270 }),
      new Costume("17", "./Static/costumes/17.png", { x: 480, y: 270 }),
      new Costume("18", "./Static/costumes/18.png", { x: 480, y: 270 }),
      new Costume("20", "./Static/costumes/20.png", { x: 480, y: 270 }),
    ];

    this.sounds = [new Sound("static2", "./Static/sounds/static2.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "newgame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "help wanted" },
        this.whenIReceiveHelpWanted
      ),
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
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead2),
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
    ];
  }

  *whenIReceiveMessage1() {
    while (true) {
      yield* this.wait(9 / 100);
      this.effects.ghost = this.random(50, 75);
      yield;
    }
  }

  *whenIReceiveNewgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMessage2() {
    yield* this.startSound("static2");
    this.visible = true;
    this.goto(0, 0);
    this.size = 100;
    while (true) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveCamera() {
    this.visible = true;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      yield* this.wait(9 / 100);
      this.effects.ghost = this.random(60, 75);
      yield;
    }
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveDead() {
    this.effects.clear();
    this.broadcast("blip");
    this.stopAllSounds();
    yield* this.startSound("static2");
    this.visible = true;
    while (true) {
      this.costumeNumber++;
      yield;
    }
  }

  *whenIReceiveDead2() {
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      yield* this.wait(15);
    } else {
      yield* this.wait(3);
    }
    this.stopAllSounds();
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("game over");
  }

  *whenIReceiveScream() {
    /* TODO: Implement stop other scripts in sprite */ null;
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
}
