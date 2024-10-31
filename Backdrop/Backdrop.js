/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Backdrop extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("help wanted ad", "./Backdrop/costumes/help wanted ad.png", {
        x: 480,
        y: 270,
      }),
      new Costume("mike stuffed", "./Backdrop/costumes/mike stuffed.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("beat5", "./Backdrop/costumes/beat5.png", { x: 480, y: 270 }),
      new Costume("beat6", "./Backdrop/costumes/beat6.png", { x: 480, y: 270 }),
      new Costume("custom night", "./Backdrop/costumes/custom night.png", {
        x: 480,
        y: 270,
      }),
      new Costume("pink slip", "./Backdrop/costumes/pink slip.png", {
        x: 480,
        y: 270,
      }),
      new Costume("SettingsMenu", "./Backdrop/costumes/SettingsMenu.png", {
        x: 480,
        y: 270,
      }),
      new Costume("NoJSFreddy", "./Backdrop/costumes/NoJSFreddy.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("NoJSBonnie", "./Backdrop/costumes/NoJSBonnie.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("NoJSChica", "./Backdrop/costumes/NoJSChica.svg", {
        x: 240,
        y: 135,
      }),
      new Costume("NoJSFoxy", "./Backdrop/costumes/NoJSFoxy.svg", {
        x: 240,
        y: 135,
      }),
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
        { name: "newgame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(Trigger.BROADCAST, { name: "beat5" }, this.whenIReceiveBeat5),
      new Trigger(
        Trigger.BROADCAST,
        { name: "custom night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "night 7" },
        this.whenIReceiveNight7
      ),
      new Trigger(Trigger.BROADCAST, { name: "beat6" }, this.whenIReceiveBeat6),
      new Trigger(Trigger.BROADCAST, { name: "beat7" }, this.whenIReceiveBeat7),
      new Trigger(
        Trigger.BROADCAST,
        { name: "game over" },
        this.whenIReceiveGameOver
      ),
      new Trigger(Trigger.BROADCAST, { name: "ad" }, this.whenIReceiveAd),
      new Trigger(Trigger.BROADCAST, { name: "ad" }, this.whenIReceiveAd2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Settings Menu" },
        this.whenIReceiveSettingsMenu
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveMessage1() {
    this.goto(0, 0);
    this.visible = false;
  }

  *whenIReceiveNewgame() {
    this.stage.vars.level = 1;
    this.costume = "help wanted ad";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield* this.wait(0);
      yield;
    }
    this.broadcast("help wanted");
    this.broadcast("ad");
  }

  *whenIReceiveBeat5() {
    this.stage.vars.beat5 = 1;
    this.costume = "beat5";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield* this.wait(0);
      yield;
    }
    yield* this.wait(20);
    yield* this.wait(5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield* this.wait(0);
      yield;
    }
    this.visible = false;
    this.broadcast("message1");
    this.stopAllSounds();
  }

  *whenIReceiveCustomNight() {
    this.costume = "custom night";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield* this.wait(0);
      yield;
    }
    this.broadcast("help wanted");
  }

  *whenIReceiveNight7() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenIReceiveBeat6() {
    this.stage.vars.beat6 = 1;
    this.costume = "beat6";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield* this.wait(0);
      yield;
    }
    yield* this.wait(20);
    yield* this.wait(5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield* this.wait(0);
      yield;
    }
    this.visible = false;
    this.broadcast("message1");
    this.stopAllSounds();
  }

  *whenIReceiveBeat7() {
    if (
      this.compare(this.stage.vars.bonnieai, 19) > 0 &&
      this.compare(this.stage.vars.chicaai, 19) > 0 &&
      this.compare(this.stage.vars.foxyai, 19) > 0 &&
      this.compare(this.stage.vars.freddyai, 19) > 0
    ) {
      this.stage.vars.beat420 = 1;
    }
    this.costume = "pink slip";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield* this.wait(0);
      yield;
    }
    yield* this.wait(20);
    yield* this.wait(5);
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield* this.wait(0);
      yield;
    }
    this.visible = false;
    this.broadcast("message1");
    this.stopAllSounds();
  }

  *whenIReceiveGameOver() {
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      this.costume = "mike stuffed";
    } else {
      if (this.toString(this.stage.vars.killedyou) === "Freddy") {
        this.costume = "NoJSFreddy";
      } else {
        if (this.toString(this.stage.vars.killedyou) === "Bonnie") {
          this.costume = "NoJSBonnie";
        } else {
          if (this.toString(this.stage.vars.killedyou) === "Chica") {
            this.costume = "NoJSChica";
          } else {
            if (this.toString(this.stage.vars.killedyou) === "Foxy") {
              this.costume = "NoJSFoxy";
            }
          }
        }
      }
    }
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield* this.wait(0);
      yield;
    }
    if (this.toNumber(this.stage.vars.jumpscares) === 1) {
      yield* this.wait(15);
    } else {
      yield* this.wait(3);
    }
    this.visible = false;
    this.stage.vars.jumpscares = 0;
    this.broadcast("message1");
  }

  *whenIReceiveAd() {
    yield* this.wait(5);
    /* TODO: Implement stop other scripts in sprite */ null;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield* this.wait(0);
      yield;
    }
    this.visible = false;
    this.broadcast("intro");
  }

  *whenIReceiveAd2() {
    while (!this.mouse.down) {
      yield;
    }
    /* TODO: Implement stop other scripts in sprite */ null;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost += 2;
      yield* this.wait(0);
      yield;
    }
    this.visible = false;
    this.broadcast("intro");
  }

  *whenIReceiveSettingsMenu() {
    this.costume = "SettingsMenu";
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 50; i++) {
      this.effects.ghost -= 2;
      yield* this.wait(0);
      yield;
    }
    if (this.toNumber(this.stage.vars.settings) === 1) {
      this.broadcast("help wanted");
    }
  }

  *whenGreenFlagClicked() {
    this.stage.vars.killedyou = "N/A";
  }
}
