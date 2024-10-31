/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Custom01 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("0", "./Custom01/costumes/0.png", { x: 34, y: 74 }),
      new Costume("1", "./Custom01/costumes/1.png", { x: 34, y: 74 }),
      new Costume("2", "./Custom01/costumes/2.png", { x: 34, y: 74 }),
      new Costume("3", "./Custom01/costumes/3.png", { x: 34, y: 74 }),
      new Costume("4", "./Custom01/costumes/4.png", { x: 34, y: 74 }),
      new Costume("5", "./Custom01/costumes/5.png", { x: 34, y: 74 }),
      new Costume("6", "./Custom01/costumes/6.png", { x: 34, y: 74 }),
      new Costume("7", "./Custom01/costumes/7.png", { x: 34, y: 74 }),
      new Costume("8", "./Custom01/costumes/8.png", { x: 34, y: 74 }),
      new Costume("9", "./Custom01/costumes/9.png", { x: 34, y: 74 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
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
        { name: "Night 7" },
        this.whenIReceiveNight7
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.size = 40;
    this.visible = false;
    this.goto(-140, -40);
    this.createClone();
    this.goto(-40, -40);
    this.createClone();
    this.goto(60, -40);
    this.createClone();
    this.goto(165, -40);
    this.createClone();
    this.visible = false;
    this.goto(0, -150);
  }

  *startAsClone() {
    this.visible = false;
  }

  *startAsClone2() {}

  *whenIReceiveCustomNight() {
    while (true) {
      if (this.compare(this.x, -100) < 0) {
        if (this.compare(this.stage.vars.ai1, 9) > 0) {
          this.costume = this.letterOf(this.stage.vars.ai1, 1);
        } else {
          this.costume = this.letterOf(this.stage.vars.ai1, 0);
        }
      } else {
        if (this.compare(this.x, -100) > 0 && this.compare(this.x, 0) < 0) {
          if (this.compare(this.stage.vars.ai2, 9) > 0) {
            this.costume = this.letterOf(this.stage.vars.ai2, 1);
          } else {
            this.costume = this.letterOf(this.stage.vars.ai2, 0);
          }
        } else {
          if (this.compare(this.x, 0) > 0 && this.compare(this.x, 100) < 0) {
            if (this.compare(this.stage.vars.ai3, 9) > 0) {
              this.costume = this.letterOf(this.stage.vars.ai3, 1);
            } else {
              this.costume = this.letterOf(this.stage.vars.ai3, 0);
            }
          } else {
            if (this.compare(this.x, 100) > 0) {
              if (this.compare(this.stage.vars.ai4, 9) > 0) {
                this.costume = this.letterOf(this.stage.vars.ai4, 1);
              } else {
                this.costume = this.letterOf(this.stage.vars.ai4, 0);
              }
            } else {
              null;
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveCustomNight2() {
    if (this.y === -40) {
      this.effects.ghost = 100;
      this.visible = true;
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
