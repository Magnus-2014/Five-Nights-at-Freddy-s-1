/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class FreddyBg extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "freddy 2.0 thumbnail",
        "./FreddyBg/costumes/freddy 2.0 thumbnail.png",
        { x: 480, y: 270 }
      ),
      new Costume("open mouth", "./FreddyBg/costumes/open mouth.png", {
        x: 480,
        y: 270,
      }),
      new Costume("twitch", "./FreddyBg/costumes/twitch.png", {
        x: 480,
        y: 270,
      }),
      new Costume("endo", "./FreddyBg/costumes/endo.png", { x: 480, y: 270 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings Menu" },
        this.whenIReceiveSettingsMenu
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
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
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
    ];

    this.vars.twitch = 11;
  }

  *whenIReceiveSettingsMenu() {
    /* TODO: Implement stop other scripts in sprite */ null;
  }

  *whenIReceiveMessage1() {
    while (true) {
      if (this.toNumber(this.vars.twitch) === 100) {
        this.costume = "endo";
      } else {
        if (this.toNumber(this.vars.twitch) === 99) {
          this.costume = "twitch";
        } else {
          if (this.toNumber(this.vars.twitch) === 98) {
            this.costume = "open mouth";
          } else {
            if (this.compare(this.vars.twitch, 98) < 0) {
              this.costume = "freddy 2.0 thumbnail";
            } else {
              null;
            }
          }
        }
      }
      this.effects.ghost = this.random(10, 75);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.size = 100;
    this.goto(0, 0);
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

  *whenIReceiveMessage2() {
    this.visible = true;
    while (true) {
      yield* this.wait(8 / 100);
      this.vars.twitch = this.random(1, 100);
      yield;
    }
  }
}
