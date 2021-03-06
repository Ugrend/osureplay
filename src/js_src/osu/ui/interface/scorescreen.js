/**
 * scorescreen.js
 * Created by Ugrend on 4/06/2016.
 */


var osu = osu || {};
osu.ui = osu.ui || {};
osu.ui.interface = osu.ui.interface || {};
osu.ui.interface.scorescreen = {
    replayStarted: false,
    background: "",
    made_by: "",
    played_by: "",
    date_played: "",
    total_score: 0,
    t300Hits: 0,
    t300gHits: 0,
    t100Hits: 0,
    t100kHits: 0,
    t50Hits: 0,
    tMissHits: 0,
    maxCombo: 0,
    accuracy: "0.00",
    grade: "",
    mods: [],
    beatmap: {},
    master_container: new PIXI.Container(),
    loading: false,

    getRenderWidth: function(){
        return osu.ui.renderer.renderWidth;
    },

    getRenderHeight: function(){
        return osu.ui.renderer.renderHeight;
    },

    map_details_heading_style : {

        font:  Math.round((osu.ui.renderer.renderHeight + osu.ui.renderer.renderWidth)/100).toString() + 'px Lucida Sans Unicode',
        fill: '#FFFFFF'
    },

    map_details_style: {
        font: Math.round((osu.ui.renderer.renderHeight + osu.ui.renderer.renderWidth)/150).toString() +'px Lucida Sans Unicode',
        fill: '#FFFFFF'
    },

    score_font_style: {
        font: 'bold ' + Math.round((osu.ui.renderer.renderHeight + osu.ui.renderer.renderWidth)/36).toString() + 'px  Lucida Sans Unicode',
        fill: '#FFFFFF'
    },




    create_background_container: function(){

        this.beatmap.background = this.beatmap.background || ""; //prevent pixi breaking on undefined background
        var background = PIXI.Texture.fromImage(this.beatmap.background);
        var background_sprite = new PIXI.Sprite(background);
        background_sprite.width = this.getRenderWidth();
        background_sprite.height = this.getRenderHeight();
        this.master_container.addChild(background_sprite);



        var background_dimmer = new PIXI.Graphics();
        background_dimmer.beginFill(0x0, 0.5);
        background_dimmer.drawRect(0, 0, this.getRenderWidth(), this.getRenderHeight());

        this.master_container.addChild(background_dimmer);


    },

    create_map_details_container: function(){
        var map_details_area = new PIXI.Graphics();

        map_details_area.beginFill(0x0,0.8);
        map_details_area.drawRect(0, 0, this.getRenderWidth(), this.getRenderHeight() *.13);
        map_details_area.lineStyle(this.getRenderHeight() *.006,0xE6E6E6,1);
        map_details_area.drawRect(0,this.getRenderHeight() *.13,this.getRenderWidth(),1);

        this.map_name_text = new PIXI.Text(this.beatmap.map_name, this.map_details_heading_style);
        this.map_name_text.x = 5;
        this.map_name_text.y = this.getRenderHeight() *0.01;

        this.map_made_by = new PIXI.Text("Beatmap by " + this.beatmap.author, this.map_details_style);
        this.map_made_by.x = 5;
        this.map_made_by.y = this.map_name_text.y + (this.getRenderHeight() * 0.04);

        this.map_played_by = new PIXI.Text("Played by "+ this.played_by  +" on " + this.date_played + ".", this.map_details_style);
        this.map_played_by.x = 5;
        this.map_played_by.y = this.map_made_by.y + (this.getRenderHeight() * 0.03);

        this.master_container.addChild(map_details_area);
        this.master_container.addChild(this.map_name_text);
        this.master_container.addChild(this.map_made_by);
        this.master_container.addChild(this.map_played_by);
    },

    create_total_score_details_container: function () {
        var scoreBox = new PIXI.Graphics();

        scoreBox.beginFill(0x0,0.7);
        scoreBox.lineStyle(5,0xFFFFFF,1);
        scoreBox.drawRect(this.getRenderWidth() *.015, this.getRenderHeight() *.15, this.getRenderWidth() *.46, this.getRenderHeight() *.1);

        var scoreLabel = new PIXI.Text("Score", this.map_details_heading_style);
        scoreLabel.x = this.getRenderWidth() *.02;
        scoreLabel.y = this.getRenderHeight() *.215;

        this.totalScoreText = new PIXI.Text(this.total_score.toString(),this.score_font_style);
        this.totalScoreText.x = this.getRenderWidth() *.30;
        this.totalScoreText.y = this.getRenderHeight() *.2;
        this.totalScoreText.anchor.set(0.5);

        this.master_container.addChild(scoreBox);
        this.master_container.addChild(scoreLabel);
        this.master_container.addChild(this.totalScoreText);
    },

    create_hit300_details_container: function () {
        var scoreBox300 = new PIXI.Graphics();

        scoreBox300.beginFill(0x0,0.7);
        scoreBox300.lineStyle(5,0xFFFFFF,1);
        scoreBox300.drawRect(this.getRenderWidth() *.015, this.getRenderHeight() *.3, this.getRenderWidth() *.46, this.getRenderHeight() *.1);

        this.total300hitsText = new PIXI.Text(this.t300Hits.toString() + "x", this.score_font_style);
        this.total300hitsText.x = this.getRenderWidth() *.16;
        this.total300hitsText.y = this.getRenderHeight() *.35;
        this.total300hitsText.anchor.set(0.5);

        this.total300ghitsText = new PIXI.Text(this.t300gHits.toString() + "x", this.score_font_style);
        this.total300ghitsText.x = this.getRenderWidth() *.39;
        this.total300ghitsText.y = this.getRenderHeight() *.35;
        this.total300ghitsText.anchor.set(0.5);


        var hit300png = osu.skins.resources.hit300.texture;
        var hit300gpng = osu.skins.resources.hit300g.texture;
        var hit300Sprite = new PIXI.Sprite(hit300png);
        var hit300gSprite = new PIXI.Sprite(hit300gpng);

        hit300Sprite.position.x = this.getRenderWidth() *.05;
        hit300Sprite.position.y = this.getRenderHeight() *.35;
        hit300Sprite.width = this.getRenderWidth() *.05;
        hit300Sprite.height = this.getRenderHeight() *.09;
        hit300Sprite.anchor.set(0.5);

        hit300gSprite.position.x = this.getRenderWidth() *.29;
        hit300gSprite.position.y = this.getRenderHeight() *.35;
        hit300gSprite.width = this.getRenderWidth() *.05;
        hit300gSprite.height = this.getRenderHeight() *.09;
        hit300gSprite.anchor.set(0.5);

        this.master_container.addChild(scoreBox300);
        this.master_container.addChild(this.total300hitsText);
        this.master_container.addChild(this.total300ghitsText);
        this.master_container.addChild(hit300Sprite);
        this.master_container.addChild(hit300gSprite);
    },

    create_hit100_details_container: function () {
        var scoreBox100 = new PIXI.Graphics();

        scoreBox100.beginFill(0x0,0.7);
        scoreBox100.lineStyle(5,0xFFFFFF,1);
        scoreBox100.drawRect(this.getRenderWidth() *.015, this.getRenderHeight() *.43, this.getRenderWidth() *.46, this.getRenderHeight() *.1);

        this.total100hitsText = new PIXI.Text(this.t100Hits.toString() + "x", this.score_font_style);
        this.total100hitsText.x = this.getRenderWidth() *.16;
        this.total100hitsText.y = this.getRenderHeight() *.48;
        this.total100hitsText.anchor.set(0.5);

        this.total100khitsText = new PIXI.Text(this.t100kHits.toString() + "x", this.score_font_style);
        this.total100khitsText.x = this.getRenderWidth() *.39;
        this.total100khitsText.y = this.getRenderHeight() *.48;
        this.total100khitsText.anchor.set(0.5);


        var hit100png = osu.skins.resources.hit100.texture;
        var hit100kpng = osu.skins.resources.hit100k.texture;
        var hit100Sprite = new PIXI.Sprite(hit100png);
        var hit100kSprite = new PIXI.Sprite(hit100kpng);

        hit100Sprite.position.x = this.getRenderWidth() *.05;
        hit100Sprite.position.y = this.getRenderHeight() *.48;
        hit100Sprite.width = this.getRenderWidth() *.05;
        hit100Sprite.height = this.getRenderHeight() *.09;
        hit100Sprite.anchor.set(0.5);

        hit100kSprite.position.x = this.getRenderWidth() *.29;
        hit100kSprite.position.y = this.getRenderHeight() *.48;
        hit100kSprite.width = this.getRenderWidth() *.05;
        hit100kSprite.height = this.getRenderHeight() *.09;
        hit100kSprite.anchor.set(0.5);

        this.master_container.addChild(scoreBox100);
        this.master_container.addChild(this.total100hitsText);
        this.master_container.addChild(this.total100khitsText);
        this.master_container.addChild(hit100Sprite);
        this.master_container.addChild(hit100kSprite);
    },

    create_hit50Misses_details_container: function () {
        var container = new PIXI.Container();
        var scoreBox50 = new PIXI.Graphics();

        scoreBox50.beginFill(0x0,0.7);
        scoreBox50.lineStyle(5,0xFFFFFF,1);
        scoreBox50.drawRect(this.getRenderWidth() *.015, this.getRenderHeight() *.56, this.getRenderWidth() *.46, this.getRenderHeight() *.1);

        this.total50hitsText = new PIXI.Text(this.t50Hits.toString() + "x", this.score_font_style);
        this.total50hitsText.x = this.getRenderWidth() *.16;
        this.total50hitsText.y = this.getRenderHeight() *.61;
        this.total50hitsText.anchor.set(0.5);

        this.totalMissesText = new PIXI.Text(this.tMissHits.toString() + "x", this.score_font_style);
        this.totalMissesText.x = this.getRenderWidth() *.39;
        this.totalMissesText.y = this.getRenderHeight() *.61;
        this.totalMissesText.anchor.set(0.5);


        var hit50png = osu.skins.resources.hit50.texture;
        var hit0png = osu.skins.resources.hit0.texture;
        var hit50Sprite = new PIXI.Sprite(hit50png);
        var hit0Sprite = new PIXI.Sprite(hit0png);


        hit50Sprite.position.x = this.getRenderWidth() *.05;
        hit50Sprite.position.y = this.getRenderHeight() *.61;
        hit50Sprite.width = this.getRenderWidth() *.05;
        hit50Sprite.height = this.getRenderHeight() *.09;
        hit50Sprite.anchor.set(0.5);

        hit0Sprite.position.x = this.getRenderWidth() *.29;
        hit0Sprite.position.y = this.getRenderHeight() *.61;
        hit0Sprite.width = this.getRenderWidth() *.05;
        hit0Sprite.height = this.getRenderHeight() *.09;
        hit0Sprite.anchor.set(0.5);



        this.master_container.addChild(scoreBox50);
        this.master_container.addChild(this.total50hitsText);
        this.master_container.addChild(this.totalMissesText);
        this.master_container.addChild(hit50Sprite);
        this.master_container.addChild(hit0Sprite);


    },

    create_combo_accuracy_details_container: function () {
        var scoreBoxCombo = new PIXI.Graphics();

        var maxComboLabel = new PIXI.Text("Max Combo", this.map_details_heading_style);
        maxComboLabel.x = this.getRenderWidth() *.02;
        maxComboLabel.y = this.getRenderHeight() *.68;

        var accuracyLabel = new PIXI.Text("Accuracy", this.map_details_heading_style);
        accuracyLabel.x = this.getRenderWidth() *.3;
        accuracyLabel.y = this.getRenderHeight() *.68;


        this.maxComboText = new PIXI.Text(this.maxCombo.toString() + "x", this.score_font_style);
        this.maxComboText.x = this.getRenderWidth() *.02;
        this.maxComboText.y = this.getRenderHeight() *.705;

        this.accuracyText = new PIXI.Text(this.accuracy + "%", this.score_font_style);
        this.accuracyText.x = this.getRenderWidth() *.27;
        this.accuracyText.y = this.getRenderHeight() *.705;


        scoreBoxCombo.beginFill(0x0,0.7);
        scoreBoxCombo.lineStyle(5,0xFFFFFF,1);
        scoreBoxCombo.drawRect(this.getRenderWidth() *.015, this.getRenderHeight() *.71, this.getRenderWidth() *.46, this.getRenderHeight() *.1);

        this.master_container.addChild(maxComboLabel);
        this.master_container.addChild(accuracyLabel);
        this.master_container.addChild(scoreBoxCombo);
        this.master_container.addChild(this.maxComboText);
        this.master_container.addChild(this.accuracyText);

    },

    create_grade_details_container: function () {
        var gradepng = osu.skins.resources[osu.score.GRADES[this.grade].large_icn].texture;
        var gradeSprite = new PIXI.Sprite(gradepng);

        gradeSprite.position.x = this.getRenderWidth() *.8;
        gradeSprite.position.y = this.getRenderHeight() *.4;
        gradeSprite.width = this.getRenderWidth() *.3;
        gradeSprite.height = this.getRenderHeight() *.5;
        gradeSprite.anchor.set(0.5);





        var replaypng = osu.skins.resources.pause_replay.texture;
        var replay_Sprite = new PIXI.Sprite(replaypng);
        replay_Sprite.position.x = this.getRenderWidth() *.8;
        replay_Sprite.position.y = this.getRenderHeight() *.8;
        replay_Sprite.width = this.getRenderWidth() *.2;
        replay_Sprite.height = this.getRenderHeight() *.2;
        replay_Sprite.anchor.set(0.5);
        replay_Sprite.interactive = true;
        replay_Sprite.on("mouseup", this.start_replay.bind(this));
        replay_Sprite.on("touchend", this.start_replay.bind(this));


        var backFrames = [];


        if(osu.skins.resources.menu_back_0){
            for(var i = 0; i < 99; i++){
                if(osu.skins.resources["menu_back_"+i]){
                    backFrames.push(osu.skins.resources["menu_back_"+i].texture);
                }else{
                    break;
                }
            }
        }else{
            backFrames.push(osu.skins.resources.menu_back.texture);
        }


        var backAnimation = new PIXI.extras.MovieClip(backFrames);
        backAnimation.position.x = this.getRenderWidth() *.05;
        backAnimation.position.y = this.getRenderHeight() - 50;
        backAnimation.interactive = true;
        //backAnimation.width = this.getRenderWidth() *.2;
        //backAnimation.height = this.getRenderHeight() *.2;
        backAnimation.anchor.set(0.5,1);
        backAnimation.on("mouseup", this.exit.bind(this));
        backAnimation.on("touchend", this.exit.bind(this));
        backAnimation.animationSpeed = 0.1;
        backAnimation.play();

        this.master_container.addChild(gradeSprite);
        for(i = 0; i < this.mods.length ; i++ ){
            if(this.mods[i].icon != ""){
                var modpng = osu.skins.resources[this.mods[i].icon].texture;
                var modSprite = new PIXI.Sprite(modpng);
                modSprite.position.y = this.getRenderHeight() *.7;
                modSprite.position.x = (this.getRenderWidth() *.9) - (i*50);
                modSprite.anchor.set(0.5);
                this.master_container.addChild(modSprite);
            }
        }

        this.master_container.addChild(replay_Sprite);
        this.master_container.addChild(backAnimation);

    },
    exit: function () {
        osu.audio.sound.play_sound(osu.audio.sound.MENUBACK);
        osu.ui.interface.mainscreen.show_main_screen();
    },

    start_replay: function(){
        var self = this;

        if(replay.type != "0"){
            new PNotify({
                title: 'Game mode unsupported',
                text: "Currently only osu! game mode is supported :(",
                type: 'error'
            });
            return;
        }

        var params = getParams();
        if('t' in params){
            var time = 0;
            var hourRegex = /([0-9]+)h/g;
            var minRegex = /([0-9]+)m/g;
            var secRegex = /([0-9]+)s/g;
            var hourMatch = hourRegex.exec(params.t);
            var minMatch = minRegex.exec(params.t);
            var secMatch = secRegex.exec(params.t);
            if(hourMatch && hourMatch[1]){
                time += hourMatch[1] * 3600000;
            }
            if(hourMatch && hourMatch[1]){
                time += hourMatch[1] * 3600000;
            }
            if(minMatch && minMatch[1]){
                time += minMatch[1] * 60000;
            }
            if(secMatch && secMatch[1]){
                time += secMatch[1] * 1000;
            }
            osu.ui.interface.osugame.starting_pos = time;
        }

        if(!osu.audio.music.loaded()){
            setTimeout(function () {
                if(!self.loading){

                    osu.audio.sound.play_sound(osu.audio.sound.MENUHIT);
                    self.loading = new PNotify({
                        title: 'Loading song',
                        type: 'info',
                        hide: false
                    });
                }
                self.start_replay();

            },1000);
            return;
        }
        if(self.loading){

            self.loading.remove()
        }else{
            osu.audio.sound.play_sound(osu.audio.sound.MENUHIT);
        }

        if(this.replayStarted) return; // prevent multi clicks
        this.replayStarted = true;
        setTimeout(function () {
            //ghetto fix to play menu sound
            osu.audio.music.preview_screen = false;

            osu.ui.interface.osugame.replay_data = replay.replayData;
            osu.ui.interface.osugame.beatmap = self.beatmap;
            osu.ui.interface.osugame.mods = self.mods;
            osu.ui.interface.osugame.replay_played_by_text = "REPLAY MODE - Watching " + replay.playerName + " play " + self.beatmap.map_name;
            osu.ui.interface.osugame.initGame();
            osu.audio.music.stop();
            osu.ui.interface.osugame.game_loop();
        },2000);

    },


    create_master_container: function () {
        this.master_container.removeChildren();
        this.create_background_container();
        this.create_map_details_container();
        this.create_total_score_details_container();
        this.create_hit300_details_container();
        this.create_hit100_details_container();
        this.create_hit50Misses_details_container();
        this.create_combo_accuracy_details_container();
        this.create_grade_details_container();

    },

    onRender: function(){

    },

    renderScoreScreen: function(){
        osu.ui.interface.replaycontroller.bindEvents();
        osu.ui.interface.replaycontroller.showPlayIcon();
        osu.ui.interface.replaycontroller.set_position(0);
        osu.ui.interface.replaycontroller.set_duration(this.beatmap.map_data.time_length+2000);
        osu.ui.interface.replaycontroller.disable_progressbar();
        osu.ui.interface.replaycontroller.showBar();
        this.$footer = osu.ui.interface.mainscreen.$footer || $("#footer");
        this.$footer.attr('style','');
        this.$footer.css('display', 'none');
        this.replayStarted = false;
        osu.ui.renderer.fixed_aspect = false;
        osu.ui.renderer.start();
        this.create_master_container();
        osu.ui.renderer.clearStage();
        osu.ui.renderer.addChild(this.master_container);
        var $replayURL = $("#replay_url");
        $replayURL.val("");
        var paramURL = "";
        var params = getParams();

        var autoplay = false;


        if('ap' in params){
            if(params.ap == "1" || params.ap == "t"){
                autoplay = true;
            }
        }

        for(var k in params){
            if(params.hasOwnProperty(k)){
                if(k != "r" && k != 'ap'){
                    paramURL += "&"+k+ '=' + params[k];
                }
            }
        }
        $.ajax({
            url : APIURL + "replays",
            type: 'GET',
            data: {'replay_id': replay.b64md5sum, 'validate_only':true},
            dataType: 'json',
            success: function (data) {
                if(data){
                    if(data.status  != "error"){
                       $replayURL.val(window.location.href.split('?')[0] + "?r=" + data + paramURL);window.history.pushState(data, 'osu Replays', '?r='+data + paramURL);
                    }

                }

            }
        });

        osu.audio.music.init(this.beatmap.song, this.beatmap.song_md5sum);
        osu.audio.music.preview_screen = true;
        if(osu.audio.music.__audio && osu.audio.music.__audio.readyState != 4 && (osu.audio.music.__audio.src != "" || !osu.audio.music.__audio.error)){
            //if it is external we want to reset the position to 0 so it doesnt break bufffering
            osu.audio.music.set_position(0);
            osu.audio.music.preview_screen = false;
        }


        osu.audio.music.preview_time = this.beatmap.map_data.general.PreviewTime / 1000;
        osu.audio.music.start();
        document.getElementById("replay_url_area").className = "";
        document.getElementById("open_config_button_other").className = "";
        document.getElementById("playback_ratio_area").className = "col-lg-1";
            if(autoplay){
                this.start_replay();
            }
    }

};