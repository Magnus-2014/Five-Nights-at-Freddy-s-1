/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class GreyBar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Slide", "./GreyBar/costumes/Slide.png", { x: 480, y: 10 }),
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
    this.visible = true;
    this.goto(0, 0);
    this.size = this.sprites["FreddyBg"].size;
    yield* this.glide(10, 0, -125);
    while (true) {
      this.goto(0, 125);
      yield* this.glide(20, 0, -125);
      yield;
    }
  }

  *whenIReceiveMessage2() {
    this.effects.brightness = -50;
    this.effects.ghost = 50;
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
