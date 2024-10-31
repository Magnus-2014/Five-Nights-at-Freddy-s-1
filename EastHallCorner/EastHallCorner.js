/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class EastHallCorner extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("clear", "./EastHallCorner/costumes/clear.png", {
        x: 480,
        y: 216,
      }),
      new Costume("kids vanish", "./EastHallCorner/costumes/kids vanish.png", {
        x: 480,
        y: 216,
      }),
      new Costume("shutdown", "./EastHallCorner/costumes/shutdown.png", {
        x: 480,
        y: 216,
      }),
      new Costume(
        "five missing",
        "./EastHallCorner/costumes/five missing.png",
        { x: 480, y: 216 }
      ),
      new Costume(
        "close year end",
        "./EastHallCorner/costumes/close year end.png",
        { x: 480, y: 216 }
      ),
      new Costume("chica", "./EastHallCorner/costumes/chica.png", {
        x: 480,
        y: 216,
      }),
      new Costume("freddy", "./EastHallCorner/costumes/freddy.png", {
        x: 480,
        y: 216,
      }),
      new Costume("open mouth", "./EastHallCorner/costumes/open mouth.png", {
        x: 480,
        y: 216,
      }),
      new Costume("twitch", "./EastHallCorner/costumes/twitch.png", {
        x: 480,
        y: 216,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moniter" },
        this.whenIReceiveMoniter
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera2
      ),
    ];

    this.vars.article = 3;
    this.vars.visions = 3;
    this.vars.twitch = 6;
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    while (true) {
      this.goto(this.sprites["ShowStage"].x, this.sprites["ShowStage"].y);
      yield;
    }
  }

  *whenIReceiveCamera() {
    if (this.toString(this.stage.vars.chicaLocation) === "E. Hall Corner") {
      this.costume = "chica";
    } else {
      if (this.toString(this.stage.vars.freddyLocation) === "E. Hall Corner") {
        this.costume = "freddy";
      } else {
        if (this.toNumber(this.vars.visions) === 1) {
          if (this.toNumber(this.vars.article) === 1) {
            this.costume = "kids vanish";
          } else {
            if (this.toNumber(this.vars.article) === 2) {
              this.costume = "shutdown";
            } else {
              if (this.toNumber(this.vars.article) === 3) {
                this.costume = "close year end";
              } else {
                if (this.toNumber(this.vars.article) === 4) {
                  this.costume = "five missing";
                } else {
                  null;
                }
              }
            }
          }
        } else {
          this.costume = "clear";
        }
      }
    }
    if (this.toString(this.stage.vars.camera) === "E. Hall Corner") {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveMoniter() {
    this.vars.visions = this.random(1, 100);
    this.vars.article = this.random(1, 4);
    if (this.toString(this.stage.vars.chicaLocation) === "E. Hall Corner") {
      this.costume = "chica";
    } else {
      if (this.toString(this.stage.vars.freddyLocation) === "E. Hall Corner") {
        this.costume = "freddy";
      } else {
        if (this.toNumber(this.vars.visions) === 1) {
          if (this.toNumber(this.vars.article) === 1) {
            this.costume = "kids vanish";
          } else {
            if (this.toNumber(this.vars.article) === 2) {
              this.costume = "shutdown";
            } else {
              if (this.toNumber(this.vars.article) === 3) {
                this.costume = "close year end";
              } else {
                if (this.toNumber(this.vars.article) === 4) {
                  this.costume = "five missing";
                } else {
                  null;
                }
              }
            }
          }
        } else {
          this.costume = "clear";
        }
      }
    }
  }

  *whenIReceiveCamera2() {
    while (true) {
      if (this.compare(this.stage.vars.level, 3) > 0) {
        if (this.toString(this.stage.vars.chicaLocation) === "E. Hall Corner") {
          yield* this.wait(5 / 100);
          this.vars.twitch = this.random(1, 30);
          if (this.compare(this.vars.twitch, 25) < 0) {
            this.costume = "chica";
          } else {
            if (
              this.compare(this.vars.twitch, 24) > 0 &&
              this.compare(this.vars.twitch, 29) < 0
            ) {
              this.costume = "twitch";
            } else {
              if (this.compare(this.vars.twitch, 28) > 0) {
                this.costume = "open mouth";
              } else {
                null;
              }
            }
          }
        }
      } else {
        null;
      }
      yield;
    }
  }
}
