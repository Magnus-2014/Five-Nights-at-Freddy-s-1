/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BG", "./Stage/costumes/BG.png", { x: 480, y: 360 }),
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 0,
        y: 0,
      }),
    ];

    this.sounds = [
      new Sound("darkness music", "./Stage/sounds/darkness music.wav"),
      new Sound("ColdPresc B", "./Stage/sounds/ColdPresc B.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "intro" }, this.whenIReceiveIntro),
      new Trigger(
        Trigger.BROADCAST,
        { name: "continue" },
        this.whenIReceiveContinue
      ),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "power out" },
        this.whenIReceivePowerOut
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "night 7" },
        this.whenIReceiveNight7
      ),
      new Trigger(Trigger.KEY_PRESSED, { key: "l" }, this.whenKeyLPressed),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "newgame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage1
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "night 6" },
        this.whenIReceiveNight6
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "custom night" },
        this.whenIReceiveCustomNight
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "message1" },
        this.whenIReceiveMessage2
      ),
    ];

    this.vars.level = 1;
    this.vars.leftLight = 0;
    this.vars.leftDoor = 0;
    this.vars.moniter = 0;
    this.vars.cams = 0;
    this.vars.camera = "Show Stage";
    this.vars.rightDoor = 0;
    this.vars.rightLight = 0;
    this.vars.power = 962.6000000000004;
    this.vars.time = 0;
    this.vars.bonnieai = 0;
    this.vars.bonnieLocation = "Show Stage";
    this.vars.bonniePosition = 2;
    this.vars.chicaLocation = "Show Stage";
    this.vars.chicaPosition = 2;
    this.vars.chicaai = 0;
    this.vars.foxyProgress = 1;
    this.vars.foxyai = 0;
    this.vars.freddyLocation = "Show Stage";
    this.vars.freddyai = 0;
    this.vars.beat5 = 0;
    this.vars.goldenFreddy = 7;
    this.vars.beat6 = 0;
    this.vars.ai1 = 0;
    this.vars.ai2 = 0;
    this.vars.ai3 = 0;
    this.vars.ai4 = 20;
    this.vars.beat420 = 0;
    this.vars.play = 0;
    this.vars.level2 = 1;
    this.vars.iniLevel = 1;
    this.vars.load = 0;
    this.vars.settings = 0;
    this.vars.settingsHighlight = 0;
    this.vars.jumpscares = 0;
    this.vars.killedyou = "N/A";
  }

  *whenIReceiveIntro() {
    /* TODO: Implement stop other scripts in stage */ null;
    this.audioEffects.volume = 50;
  }

  *whenIReceiveContinue() {
    /* TODO: Implement stop other scripts in stage */ null;
    this.vars.play = 1;
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in stage */ null;
  }

  *whenIReceivePowerOut() {
    /* TODO: Implement stop other scripts in stage */ null;
  }

  *whenIReceiveNight7() {
    /* TODO: Implement stop other scripts in stage */ null;
  }

  *whenKeyLPressed() {
    if (this.toNumber(this.vars.settings) === 0) {
      this.vars.load = 1;
      if (this.toNumber(this.vars.play) === 0) {
        yield* this.askAndWait("What night were you on? 1, 2, 3, 4, or 5?");
        if (
          this.compare(this.answer, 0) > 0 &&
          this.compare(this.answer, 6) < 0 &&
          this.answer.length === 1
        ) {
          this.vars.level2 = this.answer;
          yield* this.askAndWait("Did you beat the game? 1=yes 0=no");
          if (this.toNumber(this.answer) === 0) {
            this.vars.iniLevel = this.vars.level2;
            this.vars.beat5 = 0;
            this.vars.beat6 = 0;
            this.vars.beat420 = 0;
            this.broadcast("message1");
          } else {
            if (this.toNumber(this.answer) === 1) {
              yield* this.askAndWait("Did you beat the 6th Night? 1=Yes 0=No");
              if (this.toNumber(this.answer) === 0) {
                this.vars.iniLevel = this.vars.level2;
                this.vars.beat5 = 1;
                this.vars.beat6 = 0;
                this.vars.beat420 = 0;
                this.broadcast("message1");
              } else {
                if (this.toNumber(this.answer) === 1) {
                  yield* this.askAndWait(
                    "Did you beat 20/20/20/20 on Custom Night? 1=Yes 0=No"
                  );
                  if (this.toNumber(this.answer) === 0) {
                    this.vars.iniLevel = this.vars.level2;
                    this.vars.beat5 = 1;
                    this.vars.beat6 = 1;
                    this.vars.beat420 = 0;
                    this.broadcast("message1");
                  } else {
                    if (this.toNumber(this.answer) === 1) {
                      this.vars.iniLevel = this.vars.level2;
                      this.vars.beat5 = 1;
                      this.vars.beat6 = 1;
                      this.vars.beat420 = 1;
                      this.broadcast("message1");
                    } else {
                      this.vars.load = 0;
                    }
                  }
                } else {
                  this.vars.load = 0;
                }
              }
            } else {
              this.vars.load = 0;
            }
          }
        } else {
          this.vars.load = 0;
        }
      }
    }
  }

  *whenIReceiveDead() {
    /* TODO: Implement stop other scripts in stage */ null;
  }

  *whenIReceiveStart() {
    while (true) {
      yield* this.playSoundUntilDone("ColdPresc B");
      yield;
    }
  }

  *whenIReceiveNewgame() {
    this.vars.play = 1;
  }

  *whenIReceiveMessage1() {
    this.vars.play = 0;
    this.audioEffects.volume = 100;
    while (true) {
      yield* this.playSoundUntilDone("darkness music");
      yield;
    }
  }

  *whenIReceiveNight6() {
    /* TODO: Implement stop other scripts in stage */ null;
    this.vars.play = 1;
  }

  *whenIReceiveCustomNight() {
    this.vars.play = 1;
  }

  *whenIReceiveMessage2() {
    this.vars.load = 0;
  }
}
