/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ready extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("active", "./Ready/costumes/active.png", { x: 186, y: 58 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom Night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Night 7" },
        this.whenIReceiveNight7
      ),
    ];
  }

  *whenIReceiveCustomNight() {
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.goto(175, -110);
    this.size = 50;
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.broadcast("Help Wanted");
    this.broadcast("Night 7");
    this.visible = false;
  }

  *whenIReceiveNight7() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
    this.stage.vars.freddyai = this.stage.vars.ai1;
    this.stage.vars.bonnieai = this.stage.vars.ai2;
    this.stage.vars.chicaai = this.stage.vars.ai3;
    this.stage.vars.foxyai = this.stage.vars.ai4;
    if (
      this.toNumber(this.stage.vars.ai1) === 1 &&
      this.toNumber(this.stage.vars.ai2) === 9 &&
      this.toNumber(this.stage.vars.ai3) === 8 &&
      this.toNumber(this.stage.vars.ai4) === 7
    ) {
      this.broadcast("Creepy End");
      this.stage.vars.ai1 = 1;
      this.stage.vars.ai2 = 3;
      this.stage.vars.ai3 = 3;
      this.stage.vars.ai4 = 1;
    } else {
      this.broadcast("Intro");
    }
  }
}
