/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Continue extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./Continue/costumes/text.svg", { x: 103, y: 19 }),
    ];

    this.sounds = [];

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
        { name: "message1" },
        this.whenIReceiveMessage3
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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
    this.moveAhead();
    this.goto(-135, -55);
    this.size = 40;
    this.visible = true;
  }

  *whenIReceiveMessage2() {
    this.goto(-135, -55);
    this.size = 40;
    this.visible = true;
  }

  *whenIReceiveMessage3() {
    while (true) {
      while (!!this.touching("mouse")) {
        yield;
      }
      this.broadcast("hide");
      while (!this.touching("mouse")) {
        yield;
      }
      if (this.toNumber(this.stage.vars.load) === 0) {
        this.broadcast("continue hl");
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.settings) === 0) {
      if (this.toNumber(this.stage.vars.load) === 0) {
        if (this.compare(this.y, this.sprites["Selection"].y) === 0) {
          this.broadcast("help wanted");
          this.broadcast("continue");
        }
      }
    }
  }

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("intro");
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveNewgame() {
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
