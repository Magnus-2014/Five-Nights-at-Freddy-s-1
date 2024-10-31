/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class WestHallCorner extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("clear", "./WestHallCorner/costumes/clear.png", {
        x: 480,
        y: 216,
      }),
      new Costume("freddy rip", "./WestHallCorner/costumes/freddy rip.png", {
        x: 480,
        y: 216,
      }),
      new Costume("bonnie", "./WestHallCorner/costumes/bonnie.png", {
        x: 480,
        y: 216,
      }),
      new Costume("twitch", "./WestHallCorner/costumes/twitch.png", {
        x: 480,
        y: 216,
      }),
      new Costume("open mouth", "./WestHallCorner/costumes/open mouth.png", {
        x: 480,
        y: 216,
      }),
      new Costume(
        "Golden Freddy",
        "./WestHallCorner/costumes/Golden Freddy.png",
        { x: 480, y: 216 }
      ),
    ];

    this.sounds = [
      new Sound(
        "Laugh_Giggle_Girl_1",
        "./WestHallCorner/sounds/Laugh_Giggle_Girl_1.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "office" },
        this.whenIReceiveOffice
      ),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "camera" },
        this.whenIReceiveCamera2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "moniter" },
        this.whenIReceiveMoniter
      ),
    ];

    this.vars.vision = 44;
    this.vars.twitch = 5;
    this.vars.girlLaugh = 0;
  }

  *whenGreenFlagClicked() {
    this.size = 125;
    this.visible = false;
  }

  *whenIReceiveOffice() {
    this.visible = false;
  }

  *whenIReceiveStart() {
    this.vars.girlLaugh = 0;
    while (true) {
      this.goto(this.sprites["ShowStage"].x, this.sprites["ShowStage"].y);
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

  *whenIReceiveCamera() {
    while (true) {
      if (this.compare(this.stage.vars.level, 3) > 0) {
        if (
          this.toString(this.stage.vars.bonnieLocation) === "W. Hall Corner"
        ) {
          yield* this.wait(5 / 100);
          this.vars.twitch = this.random(1, 30);
          if (this.compare(this.vars.twitch, 25) < 0) {
            this.costume = "bonnie";
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

  *whenIReceiveCamera2() {
    if (this.toString(this.stage.vars.bonnieLocation) === "W. Hall Corner") {
      this.costume = "bonnie";
    } else {
      if (this.toNumber(this.stage.vars.goldenFreddy) === 1) {
        this.costume = "Golden Freddy";
      } else {
        if (this.toNumber(this.vars.vision) === 1) {
          this.costume = "freddy rip";
        } else {
          this.costume = "clear";
        }
      }
    }
    if (this.toString(this.stage.vars.camera) === "W. Hall Corner") {
      this.visible = true;
      if (this.toNumber(this.vars.girlLaugh) === 1) {
        yield* this.startSound("Laugh_Giggle_Girl_1");
        this.vars.girlLaugh = 0;
        this.broadcast("golden freddy");
      }
    } else {
      this.visible = false;
    }
  }

  *whenIReceiveMoniter() {
    this.vars.vision = this.random(1, 100);
    if (this.toString(this.stage.vars.bonnieLocation) === "W. Hall Corner") {
      this.costume = "bonnie";
    } else {
      if (this.toNumber(this.stage.vars.goldenFreddy) === 1) {
        this.costume = "Golden Freddy";
        this.vars.girlLaugh = 1;
      } else {
        if (this.toNumber(this.vars.vision) === 1) {
          this.costume = "freddy rip";
        } else {
          this.costume = "clear";
        }
      }
    }
  }
}
