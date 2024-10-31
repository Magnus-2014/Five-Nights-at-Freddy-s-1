/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Settingsbutton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Deselected", "./Settingsbutton/costumes/Deselected.png", {
        x: 480,
        y: 122.5,
      }),
      new Costume("Selected", "./Settingsbutton/costumes/Selected.png", {
        x: 480,
        y: 123,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "newgame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "custom night" },
        this.whenIReceiveCustomNight
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
        { name: "night 6" },
        this.whenIReceiveNight6
      ),
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
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
    ];
  }

  *whenIReceiveNewgame() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveCustomNight() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveHelpWanted() {
    this.visible = false;
  }

  *whenIReceiveNight6() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMessage1() {
    this.goto(-210, -125);
    this.size = 10;
    this.visible = true;
  }

  *whenIReceiveMessage2() {
    this.moveAhead();
    this.stage.vars.settings = 0;
    while (true) {
      if (this.touching("mouse")) {
        this.stage.vars.settingsHighlight = 1;
      } else {
        this.stage.vars.settingsHighlight = 0;
      }
      yield;
    }
  }

  *whenIReceiveMessage3() {
    while (true) {
      if (this.toNumber(this.stage.vars.settingsHighlight) === 1) {
        this.costume = "Selected";
      } else {
        this.costume = "Deselected";
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    this.broadcast("Settings Menu");
    /* TODO: Implement stop other scripts in sprite */ null;
    this.stage.vars.settings = 1;
  }

  *whenGreenFlagClicked() {
    this.stage.vars.jumpscares = 0;
  }

  *whenIReceiveDead() {}
}
