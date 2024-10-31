/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class AiSet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ai set", "./AiSet/costumes/ai set.png", { x: 308, y: 80 }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(
        Trigger.BROADCAST,
        { name: "custom night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "night 7" },
        this.whenIReceiveNight7
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "custom night" },
        this.whenIReceiveCustomNight2
      ),
    ];
  }

  *startAsClone() {
    this.visible = false;
  }

  *whenIReceiveCustomNight() {
    if (this.y === -40) {
      this.effects.ghost = 100;
      this.visible = true;
      for (let i = 0; i < 50; i++) {
        this.effects.ghost -= 2;
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.size = 25;
    this.visible = false;
    this.goto(-155, -40);
    this.createClone();
    this.goto(-50, -40);
    this.createClone();
    this.goto(50, -40);
    this.createClone();
    this.goto(155, -40);
    this.createClone();
    this.visible = false;
    this.goto(0, -150);
  }

  *whenIReceiveNight7() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveCustomNight2() {
    while (true) {
      if (this.touching("mouse") && this.mouse.down) {
        if (this.compare(this.x, -100) < 0) {
          if (this.compare(this.mouse.x, this.x) < 0) {
            if (this.compare(this.stage.vars.ai1, 0) > 0) {
              this.stage.vars.ai1--;
            }
          } else {
            if (this.compare(this.mouse.x, this.x) > 0) {
              if (this.compare(this.stage.vars.ai1, 20) < 0) {
                this.stage.vars.ai1++;
              }
            } else {
              null;
            }
          }
        } else {
          if (this.compare(this.x, -100) > 0 && this.compare(this.x, 0) < 0) {
            if (this.compare(this.mouse.x, this.x) < 0) {
              if (this.compare(this.stage.vars.ai2, 0) > 0) {
                this.stage.vars.ai2--;
              }
            } else {
              if (this.compare(this.mouse.x, this.x) > 0) {
                if (this.compare(this.stage.vars.ai2, 20) < 0) {
                  this.stage.vars.ai2++;
                }
              } else {
                null;
              }
            }
          } else {
            if (this.compare(this.x, 0) > 0 && this.compare(this.x, 100) < 0) {
              if (this.compare(this.mouse.x, this.x) < 0) {
                if (this.compare(this.stage.vars.ai3, 0) > 0) {
                  this.stage.vars.ai3--;
                }
              } else {
                if (this.compare(this.mouse.x, this.x) > 0) {
                  if (this.compare(this.stage.vars.ai3, 20) < 0) {
                    this.stage.vars.ai3++;
                  }
                } else {
                  null;
                }
              }
            } else {
              if (this.compare(this.x, 100) > 0) {
                if (this.compare(this.mouse.x, this.x) < 0) {
                  if (this.compare(this.stage.vars.ai4, 0) > 0) {
                    this.stage.vars.ai4--;
                  }
                } else {
                  if (this.compare(this.mouse.x, this.x) > 0) {
                    if (this.compare(this.stage.vars.ai4, 20) < 0) {
                      this.stage.vars.ai4++;
                    }
                  } else {
                    null;
                  }
                }
              } else {
                null;
              }
            }
          }
        }
      }
      yield* this.wait(0.1);
      yield;
    }
  }
}
