"use strict";
var scenes;
(function (scenes) {
    class Start extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this._startLabel = new objects.Label();
            this._startButton = new objects.Button();
            this._ocean = new objects.Ocean();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this._startLabel = new objects.Label("The Game", "80px", "Consolas", "#FFF000", 320, 200, true);
            this._startButton = new objects.Button("./Assets/images/startButton.png", 320, 400, true);
            this._ocean = new objects.Ocean();
            this.Main();
        }
        Update() {
            this._ocean.Update();
        }
        Main() {
            this.addChild(this._ocean);
            this.addChild(this._startLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }
    }
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map