/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class _6thNight extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("string", "./_6thNight/costumes/string.svg", {
        x: 116,
        y: 24,
      }),
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
        { name: "NewGame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Help Wanted" },
        this.whenIReceiveHelpWanted
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
    this.size = 40;
    this.goto(-130, -85);
    if (this.toNumber(this.stage.vars.beat5) === 1) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveMessage2() {
    if (this.toNumber(this.stage.vars.beat5) === 1) {
      while (true) {
        while (!!this.touching("mouse")) {
          yield;
        }
        this.broadcast("hide");
        while (!this.touching("mouse")) {
          yield;
        }
        if (this.toNumber(this.stage.vars.load) === 0) {
          this.broadcast("6Night HL");
        }
        yield;
      }
    }
  }

  *whenthisspriteclicked() {
    if (this.toNumber(this.stage.vars.settings) === 0) {
      if (this.toNumber(this.stage.vars.load) === 0) {
        if (this.compare(this.y, this.sprites["Selection"].y) === 0) {
          this.broadcast("Help Wanted");
          this.broadcast("Night 6");
        }
      }
    }
  }

  *whenIReceiveNewgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveNight6() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.broadcast("Intro");
  }

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveCustomNight() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveSettingsMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }
}
