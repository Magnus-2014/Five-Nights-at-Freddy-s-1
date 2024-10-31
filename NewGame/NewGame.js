/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class NewGame extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("text", "./NewGame/costumes/text.svg", { x: 103, y: 17 }),
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
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Help Wanted" },
        this.whenIReceiveHelpWanted
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "NewGame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Night 6" },
        this.whenIReceiveNight6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom Night" },
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
    this.goto(-135, -30);
    this.size = 40;
    this.visible = true;
  }

  *whenIReceiveMessage2() {
    while (true) {
      while (!!this.touching("mouse")) {
        yield;
      }
      this.broadcast("hide");
      while (!this.touching("mouse")) {
        yield;
      }
      if (this.toNumber(this.stage.vars.load) === 0) {
        this.broadcast("NewGame HL");
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.settings) === 0) {
      if (this.toNumber(this.stage.vars.load) === 0) {
        if (this.compare(this.y, this.sprites["Selection"].y) === 0) {
          this.broadcast("NewGame");
        }
      }
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
