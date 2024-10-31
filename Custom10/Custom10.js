/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Custom10 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Custom10/costumes/1.png", { x: 34, y: 74 }),
      new Costume("2", "./Custom10/costumes/2.png", { x: 34, y: 74 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom Night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom Night" },
        this.whenIReceiveCustomNight2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Custom Night" },
        this.whenIReceiveCustomNight3
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Night 7" },
        this.whenIReceiveNight7
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    this.visible = false;
    this.goto(-155, -40);
    this.createClone();
    this.goto(-55, -40);
    this.createClone();
    this.goto(45, -40);
    this.createClone();
    this.goto(150, -40);
    this.createClone();
    this.visible = false;
    this.goto(0, -150);
  }

  *startAsClone() {
    this.visible = false;
  }

  *whenIReceiveCustomNight() {
    while (true) {
      if (this.x === -155) {
        if (this.compare(this.stage.vars.ai1, 9) > 0) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      if (this.x === -55) {
        if (this.compare(this.stage.vars.ai2, 9) > 0) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      if (this.x === 45) {
        if (this.compare(this.stage.vars.ai3, 9) > 0) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      if (this.x === 150) {
        if (this.compare(this.stage.vars.ai4, 9) > 0) {
          this.visible = true;
        } else {
          this.visible = false;
        }
      }
      yield;
    }
  }

  *whenIReceiveCustomNight2() {
    while (true) {
      if (this.compare(this.x, -100) < 0) {
        this.costume = this.letterOf(this.stage.vars.ai1, 0);
      } else {
        if (this.compare(this.x, -100) > 0 && this.compare(this.x, 0) < 0) {
          this.costume = this.letterOf(this.stage.vars.ai2, 0);
        } else {
          if (this.compare(this.x, 0) > 0 && this.compare(this.x, 100) < 0) {
            this.costume = this.letterOf(this.stage.vars.ai3, 0);
          } else {
            if (this.compare(this.x, 100) > 0) {
              this.costume = this.letterOf(this.stage.vars.ai4, 0);
            } else {
              null;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveCustomNight3() {
    if (this.y === -40) {
      this.effects.ghost = 100;
      for (let i = 0; i < 50; i++) {
        this.effects.ghost -= 2;
        yield;
      }
    }
  }

  *whenIReceiveNight7() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
