module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _endLabel:objects.Label;
        private _backButton:objects.Button;
        private _ocean:objects.Ocean;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            // initialization
            this._endLabel = new objects.Label();
            this._backButton = new objects.Button();
            this._ocean = new objects.Ocean();

            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._endLabel = new objects.Label("End Scene", "80px","Consolas", "#000000", 320, 200, true);
            this._backButton = new objects.Button(config.Game.ASSETS.getResult("backButton"), 320, 400, true);
            this._ocean = new objects.Ocean();
           
            this.Main();
        }        
        
        public Update(): void {
            this._ocean.Update();
        
        }
        
        public Main(): void {

            this.addChild(this._ocean);
            
            this.addChild(this._endLabel);
    
            this.addChild(this._backButton);
    
            this._backButton.on("click", function() {
               config.Game.SCENE_STATE = scenes.State.PLAY;
            });
        }

        
    }
}