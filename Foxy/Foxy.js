/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Foxy extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("FoxyScare (5)", "./Foxy/costumes/FoxyScare (5).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (2)", "./Foxy/costumes/FoxyScare (2).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (10)", "./Foxy/costumes/FoxyScare (10).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (6)", "./Foxy/costumes/FoxyScare (6).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (17)", "./Foxy/costumes/FoxyScare (17).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (15)", "./Foxy/costumes/FoxyScare (15).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (1)", "./Foxy/costumes/FoxyScare (1).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (11)", "./Foxy/costumes/FoxyScare (11).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (20)", "./Foxy/costumes/FoxyScare (20).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (16)", "./Foxy/costumes/FoxyScare (16).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (19)", "./Foxy/costumes/FoxyScare (19).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (3)", "./Foxy/costumes/FoxyScare (3).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (21)", "./Foxy/costumes/FoxyScare (21).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (13)", "./Foxy/costumes/FoxyScare (13).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (18)", "./Foxy/costumes/FoxyScare (18).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (4)", "./Foxy/costumes/FoxyScare (4).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (9)", "./Foxy/costumes/FoxyScare (9).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (14)", "./Foxy/costumes/FoxyScare (14).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (12)", "./Foxy/costumes/FoxyScare (12).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (7)", "./Foxy/costumes/FoxyScare (7).png", {
        x: 480,
        y: 216,
      }),
      new Costume("FoxyScare (8)", "./Foxy/costumes/FoxyScare (8).png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [new Sound("knock2", "./Foxy/sounds/knock2.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart3
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart4
      ),
    ];

    this.vars.foxyCooldown = 3.0724517461509073;
    this.vars.foxyAttack = 13;
    this.vars.frame = 21;
    this.vars.powerLoss = 10;
  }

  *whenIReceiveStart() {
    while (true) {
      yield* this.wait(5 + 1 / 100);
      if (
        this.compare(
          this.random(1, 20),
          this.toNumber(this.stage.vars.foxyai) + 1
        ) < 0
      ) {
        if (!(this.compare(this.vars.foxyCooldown, 0) > 0)) {
          this.stage.vars.foxyProgress++;
          if (this.toNumber(this.stage.vars.foxyProgress) === 4) {
            this.vars.foxyAttack = 25;
            while (
              !(
                this.toNumber(this.stage.vars.foxyProgress) === 5 ||
                !(this.compare(this.vars.foxyAttack, 0) > 0)
              )
            ) {
              yield* this.wait(1);
              this.vars.foxyAttack--;
              yield;
            }
            if (this.toNumber(this.stage.vars.foxyProgress) === 4) {
              this.stage.vars.foxyProgress = 6;
            } else {
              while (!(this.toNumber(this.stage.vars.foxyProgress) === 6)) {
                yield;
              }
            }
            if (this.toNumber(this.stage.vars.leftDoor) === 1) {
              this.stage.vars.power += -1 * this.toNumber(this.vars.powerLoss);
              yield* this.startSound("knock2");
              this.stage.vars.foxyProgress = 1;
              this.vars.powerLoss += 50;
            } else {
              if (this.toNumber(this.stage.vars.cams) === 1) {
                this.stage.vars.moniter = 0;
                this.broadcast("office");
              }
              this.broadcast("scream");
              if (this.toNumber(this.stage.vars.jumpscares) === 1) {
                this.costume = "FoxyScare (1)";
                this.vars.frame = 0;
                this.visible = true;
                for (let i = 0; i < 21; i++) {
                  this.costume =
                    "FoxyScare (" + (this.toString(this.vars.frame) + ")");
                  this.vars.frame++;
                  this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
                  yield;
                }
              }
              yield* this.wait(0.001);
              this.stage.vars.killedyou = "Foxy";
              this.broadcast("dead");
            }
          } else {
            null;
          }
        }
      }
      yield;
    }
  }

  *whenIReceiveStart2() {
    while (true) {
      if (this.toNumber(this.stage.vars.cams) === 0) {
        if (this.compare(this.vars.foxyCooldown, 0) > 0) {
          yield* this.wait(0.5);
          this.vars.foxyCooldown -= 0.5;
        }
      }
      yield;
    }
  }

  *whenIReceivePowerOut() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveStart3() {
    while (!(this.toNumber(this.stage.vars.time) === 3)) {
      yield;
    }
    this.stage.vars.foxyai++;
    while (!(this.toNumber(this.stage.vars.time) === 4)) {
      yield;
    }
    this.stage.vars.foxyai++;
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveIntro() {
    this.vars.foxyCooldown = this.random(1, 17.5);
    this.stage.vars.foxyProgress = 1;
    if (this.toNumber(this.stage.vars.level) === 1) {
      this.stage.vars.foxyai = 0;
    } else {
      if (this.toNumber(this.stage.vars.level) === 2) {
        this.stage.vars.foxyai = 1;
      } else {
        if (this.toNumber(this.stage.vars.level) === 3) {
          this.stage.vars.foxyai = 2;
        } else {
          if (this.toNumber(this.stage.vars.level) === 4) {
            this.stage.vars.foxyai = 6;
          } else {
            if (this.toNumber(this.stage.vars.level) === 5) {
              this.stage.vars.foxyai = 5;
            } else {
              if (this.toNumber(this.stage.vars.level) === 6) {
                this.stage.vars.foxyai = 6;
              } else {
                null;
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveStart4() {
    this.vars.powerLoss = 10;
    while (true) {
      if (this.toNumber(this.stage.vars.cams) === 1) {
        this.vars.foxyCooldown = this.random(1, 17.5);
        yield* this.wait(1.1);
      }
      yield;
    }
  }
}
