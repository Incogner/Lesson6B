"use strict";
var scenes;
(function (scenes) {
    class End extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this._endLabel = new objects.Label();
            this._backButton = new objects.Button();
            this._ocean = new objects.Ocean();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this._endLabel = new objects.Label("End Scene", "80px", "Consolas", "#000000", 320, 200, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 400, true);
            this._ocean = new objects.Ocean();
            this.Main();
        }
        Update() {
            this._ocean.Update();
        }
        Main() {
            this.addChild(this._ocean);
            this.addChild(this._endLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=End.js.map