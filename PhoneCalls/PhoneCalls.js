/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PhoneCalls extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("mute bar", "./PhoneCalls/costumes/mute bar.png", {
        x: 120,
        y: 30,
      }),
    ];

    this.sounds = [
      new Sound("voiceover1c", "./PhoneCalls/sounds/voiceover1c.wav"),
      new Sound("voiceover2a", "./PhoneCalls/sounds/voiceover2a.wav"),
      new Sound("voiceover3", "./PhoneCalls/sounds/voiceover3.wav"),
      new Sound("voiceover4", "./PhoneCalls/sounds/voiceover4.wav"),
      new Sound("voiceover5", "./PhoneCalls/sounds/voiceover5.wav"),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "newgame" },
        this.whenIReceiveNewgame
      ),
      new Trigger(Trigger.BROADCAST, { name: "dead" }, this.whenIReceiveDead),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
    ];

    this.audioEffects.volume = 50;

    this.vars.death = 0;
  }

  *whenGreenFlagClicked() {
    this.vars.death = 0;
    this.size = 50;
    this.goto(-200, 117);
    this.visible = false;
  }

  *whenIReceiveStart() {
    if (this.compare(this.stage.vars.level, 6) < 0) {
      if (this.toNumber(this.vars.death) === 0) {
        yield* this.wait(20);
        this.moveAhead();
        this.visible = true;
        yield* this.wait(40);
        this.visible = false;
      }
    }
  }

  *whenIReceiveWin() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.vars.death = 0;
    yield* this.wait(3);
    this.visible = false;
  }

  *whenIReceiveNewgame() {
    this.vars.death = 0;
  }

  *whenIReceiveDead() {
    this.vars.death = 1;
    /* TODO: Implement stop other scripts in sprite */ null;
    this.visible = false;
  }

  *whenthisspriteclicked() {
    /* TODO: Implement stop other scripts in sprite */ null;
    this.audioEffects.volume = 0;
    this.visible = false;
  }

  *whenIReceiveStart2() {
    if (this.compare(this.stage.vars.level, 6) < 0) {
      if (this.toNumber(this.vars.death) === 0) {
        this.audioEffects.volume = 100;
        this.effects.ghost = 25;
        if (this.toNumber(this.stage.vars.level) === 1) {
          yield* this.playSoundUntilDone("voiceover1c");
          this.visible = false;
        } else {
          if (this.toNumber(this.stage.vars.level) === 2) {
            yield* this.playSoundUntilDone("voiceover2a");
            this.visible = false;
          } else {
            if (this.toNumber(this.stage.vars.level) === 3) {
              yield* this.playSoundUntilDone("voiceover3");
              this.visible = false;
            } else {
              if (this.toNumber(this.stage.vars.level) === 4) {
                yield* this.playSoundUntilDone("voiceover4");
                this.visible = false;
              } else {
                if (this.toNumber(this.stage.vars.level) === 5) {
                  yield* this.playSoundUntilDone("voiceover5");
                  this.visible = false;
                } else {
                  null;
                }
              }
            }
          }
        }
        while (true) {
          if (this.toNumber(this.stage.vars.cams) === 1) {
            this.audioEffects.volume = 50;
          } else {
            this.audioEffects.volume = 100;
          }
          yield;
        }
      }
    }
  }
}
