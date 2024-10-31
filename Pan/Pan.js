/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Pan extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("pan", "./Pan/costumes/pan.png", { x: 2, y: 2 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Office" },
        this.whenIReceiveOffice2
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "Dead" }, this.whenIReceiveDead),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(60, 0);
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.broadcast("Office");
  }

  *whenIReceiveOffice() {
    while (true) {
      if (this.toNumber(this.stage.vars.moniter) === 0) {
        if (this.compare(this.mouse.x, -150) < 0) {
          if (this.compare(this.x, 60) < 0) {
            this.x += 10;
          }
        } else {
          if (this.compare(this.mouse.x, 150) > 0) {
            if (this.compare(this.x, -60) > 0) {
              this.x -= 10;
            }
          } else {
            if (this.compare(this.mouse.x, 50) > 0) {
              if (this.compare(this.x, -60) > 0) {
                this.x -= 5;
              }
            } else {
              if (this.compare(this.mouse.x, -50) < 0) {
                if (this.compare(this.x, 60) < 0) {
                  this.x += 5;
                }
              } else {
                if (this.compare(this.mouse.x, 20) > 0) {
                  if (this.compare(this.x, -60) > 0) {
                    this.x -= 2;
                  }
                } else {
                  if (this.compare(this.mouse.x, -20) < 0) {
                    if (this.compare(this.x, 60) < 0) {
                      this.x += 2;
                    }
                  } else {
                    null;
                  }
                }
              }
            }
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveOffice2() {
    while (true) {
      if (this.compare(this.x, -60) < 0) {
        this.x = -60;
      } else {
        if (this.compare(this.x, 60) > 0) {
          this.x = 60;
        } else {
          null;
        }
      }
      yield;
    }
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }
}
