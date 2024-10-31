/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bonnie extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "ScareBonnie (11)",
        "./Bonnie/costumes/ScareBonnie (11).png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "ScareBonnie (10)",
        "./Bonnie/costumes/ScareBonnie (10).png",
        { x: 480, y: 216 }
      ),
      new Costume("ScareBonnie (6)", "./Bonnie/costumes/ScareBonnie (6).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (1)", "./Bonnie/costumes/ScareBonnie (1).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (3)", "./Bonnie/costumes/ScareBonnie (3).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (8)", "./Bonnie/costumes/ScareBonnie (8).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (4)", "./Bonnie/costumes/ScareBonnie (4).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (2)", "./Bonnie/costumes/ScareBonnie (2).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (5)", "./Bonnie/costumes/ScareBonnie (5).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (7)", "./Bonnie/costumes/ScareBonnie (7).png", {
        x: 480,
        y: 216,
      }),
      new Costume("ScareBonnie (9)", "./Bonnie/costumes/ScareBonnie (9).png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "move bonnie" },
        this.whenIReceiveMoveBonnie
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart3
      ),
    ];

    this.vars.frames = 13;
    this.vars.bonnieMove = 2;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      this.vars.bonnieMove = this.random(1, 2);
      yield* this.wait(1);
      yield;
    }
  }

  *whenIReceiveMoveBonnie() {
    this.stage.vars.bonniePosition = this.random(1, 2);
    if (this.toNumber(this.stage.vars.cams) === 1) {
      if (
        this.compare(this.stage.vars.bonnieLocation, this.stage.vars.camera) ===
        0
      ) {
        this.broadcast("inturrupt");
      }
    }
    if (this.toNumber(this.vars.bonnieMove) === 1) {
      if (this.toString(this.stage.vars.bonnieLocation) === "Show Stage") {
        this.stage.vars.bonnieLocation = "Backstage";
      } else {
        if (this.toString(this.stage.vars.bonnieLocation) === "Backstage") {
          this.stage.vars.bonnieLocation = "Dining Area";
        } else {
          if (this.toString(this.stage.vars.bonnieLocation) === "Dining Area") {
            this.stage.vars.bonnieLocation = "Backstage";
          } else {
            if (this.toString(this.stage.vars.bonnieLocation) === "West Hall") {
              this.broadcast("close");
              this.stage.vars.bonnieLocation = "Supply Closet";
            } else {
              if (
                this.toString(this.stage.vars.bonnieLocation) ===
                "W. Hall Corner"
              ) {
                this.broadcast("close");
                this.stage.vars.bonnieLocation = "Supply Closet";
              } else {
                if (
                  this.toString(this.stage.vars.bonnieLocation) ===
                  "Supply Closet"
                ) {
                  this.broadcast("closer");
                  this.stage.vars.bonnieLocation = "Ready to Attack";
                } else {
                  if (
                    this.toString(this.stage.vars.bonnieLocation) ===
                    "Ready to Attack"
                  ) {
                    if (this.toNumber(this.stage.vars.leftDoor) === 1) {
                      this.broadcast("close");
                      this.stage.vars.bonnieLocation = "Dining Area";
                    } else {
                      this.stage.vars.bonnieLocation = "Got You";
                      this.stage.vars.leftLight = 0;
                      /* TODO: Implement stop other scripts in sprite */ null;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (this.toString(this.stage.vars.bonnieLocation) === "Show Stage") {
        this.stage.vars.bonnieLocation = "Dining Area";
      } else {
        if (this.toString(this.stage.vars.bonnieLocation) === "Backstage") {
          this.broadcast("far");
          this.stage.vars.bonnieLocation = "West Hall";
        } else {
          if (this.toString(this.stage.vars.bonnieLocation) === "Dining Area") {
            this.broadcast("far");
            this.stage.vars.bonnieLocation = "West Hall";
          } else {
            if (this.toString(this.stage.vars.bonnieLocation) === "West Hall") {
              this.broadcast("closer");
              this.stage.vars.bonnieLocation = "W. Hall Corner";
            } else {
              if (
                this.toString(this.stage.vars.bonnieLocation) ===
                "W. Hall Corner"
              ) {
                this.broadcast("very close");
                this.stage.vars.bonnieLocation = "Ready to Attack";
              } else {
                if (
                  this.toString(this.stage.vars.bonnieLocation) ===
                  "Supply Closet"
                ) {
                  this.broadcast("far");
                  this.stage.vars.bonnieLocation = "West Hall";
                } else {
                  if (
                    this.toString(this.stage.vars.bonnieLocation) ===
                    "Ready to Attack"
                  ) {
                    if (this.toNumber(this.stage.vars.leftDoor) === 1) {
                      this.broadcast("close");
                      this.stage.vars.bonnieLocation = "Dining Area";
                    } else {
                      this.stage.vars.bonnieLocation = "Got You";
                      this.stage.vars.leftLight = 0;
                      /* TODO: Implement stop other scripts in sprite */ null;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (this.toNumber(this.stage.vars.cams) === 1) {
      if (
        this.compare(this.stage.vars.bonnieLocation, this.stage.vars.camera) ===
        0
      ) {
        this.broadcast("inturrupt");
      }
    }
  }

  *whenIReceiveStart2() {
    while (!(this.toNumber(this.stage.vars.time) === 2)) {
      yield;
    }
    this.stage.vars.bonnieai++;
    while (!(this.toNumber(this.stage.vars.time) === 3)) {
      yield;
    }
    this.stage.vars.bonnieai++;
    while (!(this.toNumber(this.stage.vars.time) === 4)) {
      yield;
    }
    this.stage.vars.bonnieai++;
  }

  *whenIReceiveOffice() {
    if (this.compare(this.stage.vars.power, 0) > 0) {
      if (this.toString(this.stage.vars.bonnieLocation) === "Got You") {
        if (!(this.toString(this.stage.vars.chicaLocation) === "Got You")) {
          this.broadcast("scream");
          if (this.toNumber(this.stage.vars.jumpscares) === 1) {
            this.visible = true;
            for (let i = 0; i < 3; i++) {
              this.vars.frames = 1;
              this.costume = "ScareBonnie (1)";
              while (
                !(this.sprites["Bonnie"].costume.name === "ScareBonnie (11)")
              ) {
                this.costume =
                  "ScareBonnie (" + (this.toString(this.vars.frames) + ")");
                this.vars.frames += 2;
                this.goto(this.sprites["Pan"].x, this.sprites["Pan"].y);
                yield;
              }
              yield;
            }
          }
          yield* this.wait(0.001);
          this.stage.vars.killedyou = "Bonnie";
          this.broadcast("dead");
        }
      }
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceivePowerOut() {
    if (this.toString(this.stage.vars.bonnieLocation) === "Got You") {
      /* TODO: Implement stop other scripts in sprite */ null;
      this.visible = false;
    }
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveIntro() {
    this.stage.vars.bonnieLocation = "Show Stage";
    if (this.toNumber(this.stage.vars.level) === 1) {
      this.stage.vars.bonnieai = 0;
    } else {
      if (this.toNumber(this.stage.vars.level) === 2) {
        this.stage.vars.bonnieai = 3;
      } else {
        if (this.toNumber(this.stage.vars.level) === 3) {
          this.stage.vars.bonnieai = 0;
        } else {
          if (this.toNumber(this.stage.vars.level) === 4) {
            this.stage.vars.bonnieai = 2;
          } else {
            if (this.toNumber(this.stage.vars.level) === 5) {
              this.stage.vars.bonnieai = 5;
            } else {
              if (this.toNumber(this.stage.vars.level) === 6) {
                this.stage.vars.bonnieai = 10;
              } else {
                null;
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveStart3() {
    while (true) {
      yield* this.wait(4.97);
      if (
        this.compare(
          this.random(1, 20),
          this.toNumber(this.stage.vars.bonnieai) + 1
        ) < 0
      ) {
        this.broadcast("move bonnie");
      }
      yield;
    }
  }
}
