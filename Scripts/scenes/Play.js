"use strict";
var scenes;
(function (scenes) {
    class Play extends objects.Scene {
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this.Start();
        }
        // PUBLIC METHODS
        Start() {
            this._ocean = new objects.Ocean();
            this._plane = new objects.Plane();
            this.Main();
        }
        Update() {
            this._plane.Update();
            this._ocean.Update();
        }
        Main() {
            this.addChild(this._ocean);
            this.addChild(this._plane);
        }
    }
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map