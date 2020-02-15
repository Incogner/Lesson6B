"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this._playLabel = new objects.Label();
            this._nextButton = new objects.Button();
            this._ocean = new objects.Ocean();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this._playLabel = new objects.Label("Play Game", "80px", "Consolas", "#000000", 320, 200, true);
            this._nextButton = new objects.Button(config.Game.ASSETS.getResult("nextButton"), 320, 400, true);
            this._ocean = new objects.Ocean();
            this.Main();
        }
        Update() {
            this._ocean.Update();
        }
        Main() {
            this.addChild(this._ocean);
            this.addChild(this._playLabel);
            this.addChild(this._nextButton);
            this._nextButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.END;
            });
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map