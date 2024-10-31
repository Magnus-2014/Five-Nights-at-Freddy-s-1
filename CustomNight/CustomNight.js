/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class CustomNight extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("string", "./CustomNight/costumes/string.svg", {
        x: 155,
        y: 24,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
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
        { name: "Continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom Night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings Menu" },
        this.whenIReceiveSettingsMenu
      ),
    ];
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.settings) === 0) {
      if (this.toNumber(this.stage.vars.load) === 0) {
        if (this.compare(this.y, this.sprites["Selection"].y) === 0) {
          this.broadcast("Custom Night");
        }
      }
    }
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

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMessage1() {
    if (this.toNumber(this.stage.vars.beat6) === 1) {
      while (true) {
        while (!!this.touching("mouse")) {
          yield;
        }
        this.broadcast("hide");
        while (!this.touching("mouse")) {
          yield;
        }
        if (this.toNumber(this.stage.vars.load) === 0) {
          this.broadcast("Custom HL");
        }
        yield;
      }
    }
  }

  *whenIReceiveCustomNight() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMessage2() {
    this.goto(-115, -110);
    this.size = 40;
    if (this.toNumber(this.stage.vars.beat6) === 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveSettingsMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
