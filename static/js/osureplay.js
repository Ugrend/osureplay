/**
 * main.js
 * Created by Ugrend on 2/06/2016.
 */

var DEBUG = true;
var mainArea = document.getElementById('main_zone');
var dragDropZone = document.getElementById('dragdrop');
var dragDropLabel = document.getElementById('drag_label');
var replay = "";
var beatmap =null;
zip.workerScriptsPath = "static/libs/js/";
/**
 * skins.js
 * Created by Ugrend on 4/06/2016.
 */
var osu = osu || {};
//TODO: create PIXI textures
osu.skins = {

    //https://osu.ppy.sh/wiki/Skinning_Standard
    //https://osu.ppy.sh/wiki/Skinning_Interface

    COMBO_COLOURS: [0xFFC000,0x00CA00,0x127CFF,0xF21839],

    //hitbursts
    hit300: "data/hit300.png",
    hit300g: "data/hit300g.png",
    hit300k: "data/hit300k.png",
    hit100: "data/hit100.png",
    hit100k: "data/hit100k.png",
    hit50: "data/hit50.png",
    hit0: "data/hit0.png",

    //Ranking Grades
    ranking_XH: "data/ranking-XH.png",
    ranking_SH: "data/ranking-SH.png",
    ranking_X: "data/ranking-X.png",
    ranking_S: "data/ranking-S.png",
    ranking_A: "data/ranking-A.png",
    ranking_B: "data/ranking-B.png",
    ranking_C: "data/ranking-C.png",
    ranking_D: "data/ranking-D.png",
    ranking_XH_small: "data/ranking-XH.png",
    ranking_SH_small: "data/ranking-SH.png",
    ranking_X_small: "data/ranking-X.png",
    ranking_S_small: "data/ranking-S.png",
    ranking_A_small: "data/ranking-A.png",
    ranking_B_small: "data/ranking-B.png",
    ranking_C_small: "data/ranking-C.png",
    ranking_D_small: "data/ranking-D.png",


    //Interface
    pause_replay: "data/pause-replay.png",
    menu_back: "data/menu-back.png",

    cursor: "data/cursor.png",
    cursortrail: "data/cursortrail.png",
    cursormiddle: "data/cursormiddle.png",
    cursor_smoke: "data/cursor-smoke.png",


    inputoverlay_key: "data/inputoverlay-key.png",

    //Playfield
    section_fail: "data/section-fail.png",
    section_pass: "data/section-pass.png",
    play_warningarrow: "data/play-warningarrow.png",
    play_skip: "data/play-skip.png",

    hitcircle: "data/hitcircle.png",
    hitcicleoverlay: "data/hitcircleoverlay.png",
    approachcircle: "data/approachcircle.png",
    followpoint: "data/followpoint.png",


    default_0: "data/default-0.png",
    default_1: "data/default-1.png",
    default_2: "data/default-2.png",
    default_3: "data/default-3.png",
    default_4: "data/default-4.png",
    default_5: "data/default-5.png",
    default_6: "data/default-6.png",
    default_7: "data/default-7.png",
    default_8: "data/default-8.png",
    default_9: "data/default-9.png",
    //Mods

    selection_mod_doubletime: "data/selection-mod-doubletime.png",
    selection_mod_easy: "data/selection-mod-easy.png",
    selection_mod_flashlight: "data/selection-mod-flashlight.png",
    selection_mod_halftime: "data/selection-mod-halftime.png",
    selection_mod_hardrock: "data/selection-mod-hardrock.png",
    selection_mod_hidden: "data/selection-mod-hidden.png",
    selection_mod_nightcore: "data/selection-mod-nightcore.png",
    selection_mod_nofail: "data/selection-mod-nofail.png",
    selection_mod_perfect: "data/selection-mod-perfect.png",
    selection_mod_spunout: "data/selection-mod-spunout.png",
    selection_mod_suddendeath: "data/selection-mod-suddendeath.png",



    //AUDIO

    audio: {
        applause: 'data/applause.wav',
        combobreak: 'data/combobreak.wav',
        count1s: 'data/count1s.wav',
        count2s: 'data/count2s.wav',
        count3s: 'data/count3s.wav',
        drum_hitclap: 'data/drum-hitclap.wav',
        drum_hitfinish: 'data/drum-hitfinish.wav',
        drum_hitfinish2: 'data/drum-hitfinish2.wav',
        drum_hitnormal: 'data/drum-hitnormal.wav',
        drum_hitnormal19: 'data/drum-hitnormal19.wav',
        drum_hitnormal2: 'data/drum-hitnormal2.wav',
        drum_hitwhistle: 'data/drum-hitwhistle.wav',
        drum_sliderslide: 'data/drum-sliderslide.wav',
        drum_slidertick: 'data/drum-slidertick.wav',
        drum_sliderwhistle: 'data/drum-sliderwhistle.wav',
        failsound: 'data/failsound.wav',
        gos: 'data/gos.wav',
        menuback: 'data/menuback.wav',
        menuclick: 'data/menuclick.wav',
        menuhit: 'data/menuhit.wav',
        normal_hitclap: 'data/normal-hitclap.wav',
        normal_hitfinish: 'data/normal-hitfinish.wav',
        normal_hitnormal: 'data/normal-hitnormal.wav',
        normal_hitwhistle: 'data/normal-hitwhistle.wav',
        normal_sliderslide: 'data/normal-sliderslide.wav',
        normal_slidertick: 'data/normal-slidertick.wav',
        normal_sliderwhistle: 'data/normal-sliderwhistle.wav',
        readys: 'data/readys.wav',
        sectionfail: 'data/sectionfail.wav',
        sectionpass: 'data/sectionpass.wav',
        shutter: 'data/shutter.wav',
        soft_hitclap: 'data/soft-hitclap.wav',
        soft_hitclap19: 'data/soft-hitclap19.wav',
        soft_hitfinish: 'data/soft-hitfinish.wav',
        soft_hitnormal: 'data/soft-hitnormal.wav',
        soft_hitwhistle: 'data/soft-hitwhistle.wav',
        soft_sliderslide: 'data/soft-sliderslide.wav',
        soft_sliderslide2: 'data/soft-sliderslide2.wav',
        soft_slidertick: 'data/soft-slidertick.wav',
        soft_sliderwhistle: 'data/soft-sliderwhistle.wav',
        spinnerbonus: 'data/spinnerbonus.wav',
        spinner_osu: 'data/spinner-osu.wav',
        spinnerspin: 'data/spinnerspin.wav',


    }


};
/**
 * replay_details.js
 * Created by Ugrend on 6/2/2016.
 */

/*
Just adding this for testing will prob remove

 */

function loadBeatMap(){
    osu.beatmaps.BeatmapLoader.load(replay.bmMd5Hash, showReplayData);
}


function showReplayData(beatmap){
    document.getElementById("render_zone").className = "";
    osu.ui.interface.mainscreen.hide_main_screen();
    osu.ui.interface.scorescreen.mods = replay.mods;
    osu.ui.interface.scorescreen.beatmap = beatmap;
    osu.ui.interface.scorescreen.played_by = replay.playerName;
    osu.ui.interface.scorescreen.date_played = replay.time_played;
    osu.ui.interface.scorescreen.total_score = replay.tScore;
    osu.ui.interface.scorescreen.t300Hits = replay.h300;
    osu.ui.interface.scorescreen.t300gHits = replay.hGekis;
    osu.ui.interface.scorescreen.t100Hits = replay.h100;
    osu.ui.interface.scorescreen.t100kHits = replay.hKatus;
    osu.ui.interface.scorescreen.t50Hits = replay.h50;
    osu.ui.interface.scorescreen.tMissHits = replay.hMisses ;
    osu.ui.interface.scorescreen.maxCombo = replay.tCombo;
    osu.ui.interface.scorescreen.grade = replay.grade;
    osu.ui.interface.scorescreen.accuracy = replay.accuracy;
    osu.ui.interface.scorescreen.renderScoreScreen();
}
/**
 * render.js
 * Created by Ugrend on 4/06/2016.
 */


var osu = osu || {};
osu.ui = osu.ui || {};
osu.ui.renderer = {



    renderWidth: window.innerWidth *.98,
    renderHeight: window.innerHeight *.98,
    renderer: null,
    masterStage: new PIXI.Container(),
    render_zone: document.getElementById("render_zone"),
    fixed_aspect: false,


    /**
     *
     * @param child add to renderer stage
     */
    addChild: function(child){
        this.masterStage.addChild(child);
    },
    removeChild: function(child){
        this.masterStage.removeChild(child);
    },

    clearStage: function(){
        this.masterStage.removeChildren();
    },
    animate: function () {
        event_handler.emit(event_handler.EVENTS.RENDER);
        this.renderer.render(this.masterStage);
        requestAnimationFrame(this.animate.bind(this));
    },
    resize: function(){
        var x = window.innerWidth *.98;
        var y = window.innerHeight *.98;

        //just to make my life easier fix the render ratio for game play
        if(this.fixed_aspect) {
            var fixed_ratio_y = (3 / 4) * x;
            var fixed_ratio_x = (4 / 3) * y;

            if (fixed_ratio_y > y) {
                //if we increasing y bigger than the screen we need to make x smaller
                x = fixed_ratio_x;
            }
            else {
                y = fixed_ratio_y;
            }
        }
        this.renderWidth =  x;
        this.renderHeight = y;
        if(this.renderer != null) {
            this.renderer.view.style.width = this.renderWidth + 'px';
            this.renderer.view.style.height = this.renderHeight + 'px';
        }
    },
    start: function () {
        this.resize();
        if(this.renderer == null) {
            this.renderer = PIXI.autoDetectRenderer(this.renderWidth, this.renderHeight);
            this.render_zone.appendChild(this.renderer.view);
            this.animate();
            window.onresize = this.resize.bind(this);
        }else{
            console.log("renderer already started resizing instead");
            this.renderer.width =  this.renderWidth;
            this.renderer.height = this.renderHeight;
            this.renderer.view.width = this.renderWidth;
            this.renderer.view.height = this.renderHeight;
        }

    },
    hide: function () {
        this.render_zone.innerHTML = "";
    },
    show: function(){
        this.render_zone.appendChild(this.renderer.view);
    }
};



/**
 * eventhandler.js
 * Created by Ugrend on 10/06/2016.
 */
var event_handler = {

    EVENTS: Object.freeze({
        BEATMAP_LOADING: 1,
        BEATMAP_LOADED: 2,
        BEATMAP_LOADING_FAILED: 3,
        REPLAY_LOADING: 4,
        REPLAY_LOADED: 5,
        REPLAY_LOAD_FAILED:6,
        BEATMAP_NOTFOUND: 7,
        DB_ERROR: 8,
        ASSET_NOT_FOUND:9,
        RENDER:10,
        UNKNOWN_FILE_ERROR:11,
        INVALID_FILE: 12,
        BEATMAP_SELECTED: 13,
        STOP_REPLAY: 14,
        SETTINGS_CHANGED: 15,
    }),

    __events: {},
    on: function (eventName, fn, alias, parent_object) {
        this.__events[eventName] = this.__events[eventName] || [];
        this.__events[eventName].push({fn: fn, alias: alias, parent: parent_object});
    },
    off: function (eventName, alias,fn) {
        if (this.__events[eventName]) {
            for (var i = 0; i < this.__events[eventName].length; i++) {
                if (this.__events[eventName][i].fn === fn) {
                    this.__events[eventName].splice(i, 1);
                    break;
                }
                if(this.__events[eventName][i].alias == alias){
                    this.__events[eventName].splice(i,1);
                    break;
                }
            }
        }
    },
    emit: function (eventName, data) {
        if(DEBUG && eventName != event_handler.EVENTS.RENDER){
            console.log("EVENT: " + eventName);
            console.log(data);
        }
        if (this.__events[eventName]) {
            this.__events[eventName].forEach(function (obj) {
                if (obj.parent) {
                    obj.parent[obj.fn](data);
                } else {
                    obj.fn(data);
                }

            });
        }
    }
};



event_handler.on(event_handler.EVENTS.BEATMAP_LOADING, function (data) {
    var loading =   new PNotify({
        title: 'Loading beatmap',
        text: "Loading \n" + data,
        type: 'info',
        hide: 'false'
    });
    var alias = Date.now().toString();
    event_handler.on(event_handler.EVENTS.BEATMAP_LOADED, function (data_loaded) {
        var options = {
            type: "success",
            title: "Beatmap Loaded",
            text: data_loaded.filename + "\n has been successfully processed",
            hide: "true"
        };
        loading.update(options);
        //one time only event
        event_handler.off(event_handler.EVENTS.BEATMAP_LOADED, alias);
    }, alias);
});



event_handler.on(event_handler.EVENTS.BEATMAP_LOADING_FAILED, function (data) {
    PNotify.removeAll();
    new PNotify({
        title: 'Beatmap Loading Failed',
        text: "Failed to load beatmap: " + data,
        type: 'error'
    });
});

event_handler.on(event_handler.EVENTS.BEATMAP_LOADING_FAILED, function (data) {
    new PNotify({
        title: 'Beatmap Loading Failed',
        text: "Failed to load beatmap: " + data,
        type: 'error'
    });
});

event_handler.on(event_handler.EVENTS.BEATMAP_NOTFOUND, function (data) {
    new PNotify({
        title: 'Beatmap not found',
        text: "Beatmap not found for replay, \n beatmap md5sum:\n" + data,
        type: 'error'
    });
});
/**
 * beatmap_reader.js
 * Created by Ugrend on 6/06/2016.
 */



var BeatmapReader = function (beatmap_zip_file, callback) {
    var beatMap = {
        maps: [],
        assets: []
    };
    var md5sums = [];
    event_handler.emit(event_handler.EVENTS.BEATMAP_LOADING, beatmap_zip_file.name);
    var zip_length = 0;
    var extracted = 0;
    var beatmaps = 0;
    var beatmaps_loaded = 0;

    /**
     * Converts osu data/beatmap config file into a JS object
     * @param data
     * @returns {{version: string, general: {}, metadata: {}, difficulty: {}, events: Array, timing_points: Array, colours: {}, hit_objects: Array}}
     */
    var parse_osu_map_data = function (data) {
        var beatmap_config = {
            version: "",
            name: "",
            general: {},
            metadata: {},
            difficulty: {},
            events: [],
            timing_points: [],
            colours: {},
            hit_objects: [],
            minBPM: -1,
            maxBPM: -1,
            circles: 0,
            sliders: 0,
            spinners: 0,
            time_length: 0,
        };
        var lines = data.replace("\r", "").split("\n");
        beatmap_config.version = lines[0];
        var current_setting = null;
        var parentBPMS = 500;
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].trim();
            if (line === "") {
                continue;
            }
            if (line.indexOf("//") == 0) {
                continue;
            }
            if (line.indexOf("[") == 0) {
                current_setting = line.toLowerCase();
                continue;
            }
            switch (current_setting) {
                case "[general]":
                    var settings = line.split(":");
                    if (settings.length == 2) {
                        beatmap_config.general[settings[0]] = settings[1].trim();
                    }
                    break;
                case "[editor]":
                    break;
                case "[metadata]":
                    var settings = line.split(":");
                    if (settings.length > 1) {
                        // Im not sure if title/creator/etc can have : in them but just to be safe ill assume it can
                        beatmap_config.metadata[settings[0]] = settings.splice(1).join(":").trim()
                    }
                    break;
                case "[difficulty]":
                    var settings = line.split(":");
                    if (settings.length == 2) {
                        beatmap_config.difficulty[settings[0]] = settings[1];
                    }
                    break;
                case "[events]":
                    beatmap_config.events.push(line.split(","));
                    break;
                case "[timingpoints]":
                    var parts = line.split(",");

                    var timingPoint = {
                        offset: +parts[0],
                        millisecondsPerBeat: +parts[1],
                        meter: +parts[2],
                        sampleType: +parts[3],
                        sampleSet: +parts[4],
                        volume: +parts[5],
                        inherited: +parts[6],
                        kaiMode: +parts[7]
                    };

                    if(timingPoint.inherited == 1){
                        parentBPMS = timingPoint.millisecondsPerBeat;
                        if(parentBPMS < beatmap_config.minBPM || beatmap_config.minBPM === -1){
                            if(beatmap_config.minBPM > beatmap_config.maxBPM){
                                beatmap_config.maxBPM = beatmap_config.minBPM;
                            }
                            beatmap_config.minBPM = parentBPMS;
                        }
                    }
                    else{
                        //if inherited and postive we should ignore and multiply by 1
                        //You cant do this in the editor so shouldnt happen, but this is how the game seems to handle it.
                        if(timingPoint.millisecondsPerBeat >= 0){
                            timingPoint.millisecondsPerBeat = parentBPMS;
                        }
                        else{
                            var multiplier = Math.abs(100/timingPoint.millisecondsPerBeat);
                            timingPoint.millisecondsPerBeat = parentBPMS * multiplier;
                        }
                    }
                    beatmap_config.minBPM = Math.round(60000 / beatmap_config.minBPM);
                    if(beatmap_config.maxBPM !=-1) beatmap_config.maxBPM = Math.round(60000 / beatmap_config.maxBPM);

                    beatmap_config.timing_points.push(timingPoint);
                    break;
                case "[colours]":
                    var settings = line.split(":");
                    if (settings.length == 2) {
                        beatmap_config.colours[settings[0]] = settings[1].split(",");
                    }
                    break;
                case "[hitobjects]":
                    var hit_object = osu.objects.HitObjectParser.parse_line(line, beatmap_config.timing_points, beatmap_config.difficulty.SliderMultiplier || 1);
                    switch(hit_object.type) {
                        case osu.objects.HitObjectParser.TYPES.CIRCLE:
                            beatmap_config.circles++;
                            break;
                        case osu.objects.HitObjectParser.TYPES.SLIDER:
                            beatmap_config.sliders++;
                            break;
                        case osu.objects.HitObjectParser.TYPES.SPINNER:
                            beatmap_config.spinners++;
                    }
                    beatmap_config.hit_objects.push(hit_object);
                    break;

            }


        }
        var lastHitObject = beatmap_config.hit_objects[beatmap_config.hit_objects.length-1];
        beatmap_config.time_length = lastHitObject.endTime || lastHitObject.startTime;
        return beatmap_config;
    };


    var beatmap_loaded = function () {
        if (beatmaps_loaded == beatmaps) {


            event_handler.emit(event_handler.EVENTS.BEATMAP_LOADED, {md5sums: md5sums, filename: beatmap_zip_file.name});
            callback(beatMap);
        }
    };

    var create_thumbnail = function (img_data) {
        var MAX_WIDTH = 232;
        var MAX_HEIGHT = 130;
        var canvas = document.createElement("canvas");
        var img = document.createElement("img");
        img.src = img_data;
        var width = img.width;
        var height = img.height;
        if (width > height) {
            if (width > MAX_WIDTH) {
                height *= MAX_WIDTH / width;
                width = MAX_WIDTH;
            }
        } else {
            if (height > MAX_HEIGHT) {
                width *= MAX_HEIGHT / height;
                height = MAX_HEIGHT;
            }
        }
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        return canvas.toDataURL("image/jpeg");
    };

    var processing_complete = function () {
        if (extracted == zip_length) {

            beatmaps = beatMap.maps.length;
            for (var i = 0; i < beatMap.maps.length; i++) {
                var beatmap = beatMap.maps[i];

                beatmap.parsed = parse_osu_map_data(beatmap.data);
                for (var k in beatmap.parsed.metadata) {
                    beatmap[k.toLocaleLowerCase()] = beatmap.parsed.metadata[k];
                }
                beatmap.files = [];
                var background_file_name = beatmap.parsed.events[0][2].replace(/"/g, '');
                var thumbnail = "";
                for (var x = 0; x < beatMap.assets.length; x++) {
                    beatmap.files.push(
                        {
                            md5sum: beatMap.assets[x].md5sum,
                            filename: beatMap.assets[x].filename
                        }
                    );
                    if (beatMap.assets[x].filename == background_file_name) {
                        beatmap.background = beatMap.assets[x].md5sum;
                        thumbnail = create_thumbnail(beatMap.assets[x].data);
                    }
                    if(beatMap.assets[x].filename == beatmap.parsed.general.AudioFilename){
                        beatmap.song = beatMap.assets[x].md5sum;
                    }

                }
                var thumbnail_md5sum = md5(thumbnail);
                beatmap.thumbnail = thumbnail_md5sum;
                beatmap.stars = osu.beatmaps.DifficultyCalculator.calculate_stars(beatmap);
                md5sums.push(beatmap.md5sum);
                database.insert_data(database.TABLES.ASSETS, thumbnail_md5sum, thumbnail, function () {}, function () {});//TODO actually callback properly
                database.insert_data(database.TABLES.BEATMAPS, beatmap.md5sum, beatmap, function () {
                    beatmaps_loaded++;
                    beatmap_loaded();
                }, function () {
                    beatmaps_loaded++;
                    beatmap_loaded();
                });

            }


        }
    };


    zip.createReader(new zip.BlobReader(beatmap_zip_file), function (reader) {

        // get all entries from the zip
        reader.getEntries(function (entries) {
            if (entries.length) {
                zip_length = entries.length;
                for (var i = 0; i < entries.length; i++) {

                    if (entries[i].filename.split(".").pop() == "osu") {
                        var extract_data = function (i) {
                            entries[i].getData(new zip.TextWriter(), function (text) {
                                var filename = entries[i].filename;
                                extracted++;
                                var md5sum = md5(text);
                                beatMap.maps.push({
                                    filename: filename,
                                    data: text,
                                    md5sum: md5sum
                                });
                                //we add beatmaps to the db last to join to all the assets
                                processing_complete();
                            }, function (current, total) {

                            });
                        };
                        extract_data(i);
                    }

                    else if (entries[i].filename.split(".").pop() == "png") {
                        var extract_data = function (i) {
                            entries[i].getData(new zip.Data64URIWriter('image/png'), function (data) {
                                var filename = entries[i].filename;
                                extracted++;
                                var md5sum = md5(data);
                                beatMap.assets.push({
                                    filename: filename,
                                    data: data,
                                    md5sum: md5sum,
                                });
                                database.insert_data(database.TABLES.ASSETS, md5sum, data, processing_complete, processing_complete);
                            }, function (current, total) {

                            });
                        };
                        extract_data(i);
                    }
                    else if (entries[i].filename.split(".").pop() == "wav") {
                        var extract_data = function (i) {
                            entries[i].getData(new zip.Data64URIWriter('audio/wav'), function (data) {
                                var filename = entries[i].filename;
                                extracted++;
                                var md5sum = md5(data);
                                beatMap.assets.push({
                                    filename: filename,
                                    data: data,
                                    md5sum: md5sum
                                });
                                database.insert_data(database.TABLES.ASSETS, md5sum, data, processing_complete, processing_complete);
                            }, function (current, total) {

                            });
                        };
                        extract_data(i)
                    }

                    else if (entries[i].filename.split(".").pop() == "jpg" || entries[i].filename.split(".").pop() == "jpeg") {
                        var extract_data = function (i) {
                            entries[i].getData(new zip.Data64URIWriter('image/jpeg'), function (data) {
                                var filename = entries[i].filename;
                                extracted++;
                                var md5sum = md5(data);
                                beatMap.assets.push({
                                    filename: filename,
                                    data: data,
                                    md5sum: md5sum
                                });

                                database.insert_data(database.TABLES.ASSETS, md5sum, data, processing_complete, processing_complete);
                            }, function (current, total) {

                            });
                        };
                        extract_data(i)
                    }

                    else if (entries[i].filename.split(".").pop() == "mp3") {
                        var extract_data = function (i) {
                            entries[i].getData(new zip.Data64URIWriter('audio/mpeg'), function (data) {
                                var filename = entries[i].filename;
                                extracted++;
                                var md5sum = md5(data);
                                beatMap.assets.push({
                                    filename: filename,
                                    data: data,
                                    md5sum: md5sum
                                });
                                database.insert_data(database.TABLES.ASSETS, md5sum, data, processing_complete, processing_complete);
                            }, function (current, total) {

                            });
                        };
                        extract_data(i)
                    }
                    else {
                        extracted++;
                        processing_complete();
                    }

                }


            }

        });
    }, function (error) {
        console.log(error);
    });

};

/**
 * filereader.js
 * Created by Ugrend on 6/2/2016.
 */
if(typeof window.FileReader === "undefined"){
    dragDropLabel.innerHTML = "Shit won't work on this browser :("
}
else {
    document.body.ondragover = function () {
        return false;
    };
    document.body.ondragend = function () {
        return false;
    };
    document.body.ondrop = function (e) {
        e.preventDefault();

        var file = e.dataTransfer.files[0];
        var reader = new FileReader();
        reader.onloadend = function (event) {

            if(event.target.readyState === 2){
                        var replay_data = event.target.result;
                        ReplayParser(replay_data, function (replay_data) {
                            replay = replay_data; //TODO: not be essentially global
                            loadBeatMap();
                        });
            }else{
                event_handler.emit(event_handler.EVENTS.UNKNOWN_FILE_ERROR);
            }

        };

            if(file.name.split(".").pop() == "osr") {
                reader.readAsBinaryString(file);
            }else if(file.name.split(".").pop() == "osz"){
                //beatmap
                if(beatmap &&  beatmap.locked){
                    event_handler.emit(event_handler.EVENTS.BEATMAP_LOADING_FAILED, "beatmap is locked")
                }else{
                    BeatmapReader(file, function (bm) {
                            beatmap = bm;
                    });
                }

            }else if(file.name.split(".").pop() !== "osk"){
                //skin
            }else{
                event_handler.emit(event_handler.EVENTS.INVALID_FILE);
            }

        return false;
    };
}
/**
 * indexeddb.js
 * Created by Ugrend on 6/06/2016.
 */
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;


var database = {

    __db: null,
    __started: false,
    indexeddb_available: false,

    TABLES: Object.freeze({
        BEATMAPS: "beatmaps",
        REPLAYS: "replays",
        SKINS: "skins",
        ASSETS: "assets",
        OPTIONS: "options"

    }),

    INDEXES: Object.freeze({
        REPLAYS: {
            BEATMAP_ID: 'beatmap_id',
            PLAYER: 'player'
        }

    }),


    init: function (onsucess) {
        var self = this;
        var createDatabase = indexedDB.open("osu", 1);
        createDatabase.onupgradeneeded = function (e) {
            var thisDB = e.target.result;
            for(var k in database.TABLES){
                if (!thisDB.objectStoreNames.contains(database.TABLES[k])) {
                    var table = thisDB.createObjectStore(database.TABLES[k]);
                    if(database.TABLES[k] == database.TABLES.BEATMAPS){
                        table.createIndex("beatmapsetid", "beatmapsetid", {unique: false});
                        table.createIndex("title", "title", {unique: false});
                        table.createIndex("titleunicode", "titleunicode", {unique: false});
                        table.createIndex("artist", "artist", {unique: false});
                        table.createIndex("artistunicode", "artistunicode", {unique: false});
                        table.createIndex("creator", "creator", {unique: false});
                        table.createIndex("tags", "tags", {unique: false});
                    }
                    if(database.TABLES[k] == database.TABLES.REPLAYS){
                        table.createIndex("beatmap_id", "bmMd5Hash", {unique: false});
                        table.createIndex("player", "playerName", {unique: false});

                    }
                }
            }
        };
        createDatabase.onsuccess = function (e) {
            self.__db = e.target.result;
            self.__started = true;
            this.indexeddb_available = true;
            onsucess();
        };
        createDatabase.onerror = function (e) {
            console.log(e);
        };





    },

    insert_data: function (table, md5sum, data, onsuccess, onerror) {
        if (this.__started) {
            var transaction = this.__db.transaction([table], "readwrite").objectStore(table).add(data, md5sum);
            transaction.onsuccess =   onsuccess;
            transaction.onerror = function(e){
                console.log(e.target.error);
                onerror(e);
            };
        }
        else {
            onerror("db not started");
        }

    },
    get_data: function (table, md5sum, onsuccess, onerror) {
        if (this.__started) {
            var query = this.__db.transaction([table], "readonly").objectStore(table).get(md5sum);
            query.onsuccess = function (e) {
              onsuccess({md5sum: md5sum, data:e.target.result});
            };
            query.onerror = onerror;
        } else {
             onerror("db not started");
        }
    },
    get_count: function (table, onsuccess) {
        var countReq = this.__db.transaction([table], "readonly").objectStore(table).count()
        countReq.onsuccess = function () {
            onsuccess(countReq.result);
        }
    },
    delete_data: function (table,key, onsuccess) {
        var request = this.__db.transaction([table], "readwrite").objectStore(table).delete(key);
        request.onsuccess = onsuccess;
    },

    get_all_keys: function (table,callback) {
        var request = this.__db.transaction([table], "readonly").objectStore(table);
        var result = [];
        request.openCursor().onsuccess = function (event) {


            var cursor = event.target.result;
            if(cursor){
                result.push(cursor.key);
                cursor.continue();
            }else{
                callback(result);
            }


        }
    },
    get_data_from_index(table, index, param, onsuccess, onerror){
        var result = [];
        var key = IDBKeyRange.only(param);
        var query = this.__db.transaction([table], "readonly").objectStore(table).index(index).openCursor(key)
            .onsuccess= function (e) {
            var cursor = e.target.result;
            if(cursor){
                result.push(cursor.value);
                cursor.continue();
            }else{
                onsuccess(result);
            }

        };



        query.onsuccess = function (e) {
            onsuccess(e.target.result);
        };
    },
    update_data(table,key,data, onsuccess, onerror){
        onsuccess = onsuccess || function () {};
        onerror = onerror || function () {};
        if (this.__started) {
            var transaction = this.__db.transaction([table], "readwrite").objectStore(table).put(data, key);
            transaction.onsuccess =   onsuccess;
            transaction.onerror = function(e){
                console.log(e.target.error);
                onerror(e);
            };
        }
        else {
            onerror("db not started");
        }

    },


    delete_database: function () {
      if(DEBUG) {
          indexedDB.deleteDatabase('osu');
      }else{
          console.log("no");
      }
    },
    clear_table: function(table_name){
        if(DEBUG){
            var transaction = this.__db.transaction([table_name], "readwrite");
            var objectStore = transaction.objectStore(table_name);
            var objectStoreRequest = objectStore.clear();

            objectStoreRequest.onsuccess = function(event) {
                console.log(table_name + " cleared!");

            }
        }else{
            console.log("no");
        }

    }



};


/**
 * replayreader.js
 * Created by Ugrend on 2/06/2016.
 */


/**
 * Converts a hexdump of a replay file into a JS object
 * @param replay_data {String value of a hexdump of replay file}
 * @returns {{type: *, version: *, bmMd5Hash: *, playerName: *, rMd5Hash: *, h300: *, h100: *, h50: *, hGekis: *, hKatus: *, hMisses: *, tScore: *, tCombo: *, fullClear: *, mods: *, lifeBar: *, timeTicks: *, replayByteLength: *}}
 * @constructor
 */
var ReplayParser = function(replay_data, callback){
    event_handler.emit(event_handler.EVENTS.REPLAY_LOADING);
    //https://osu.ppy.sh/wiki/Osr_%28file_format%29
    var RP = {
        replay_data: replay_data,
        replay_bytes: null,
        byte_index: 0,

        /*
            Converts binarystring  to byte array
         */
        convert: function(){
            for (var bytes = [], i = 0; i < this.replay_data.length; ++i) {
                bytes.push(this.replay_data.charCodeAt(i) & 0xff)
            }
            this.replay_bytes = bytes;
        },
        //data types
        getByte: function(){
            return this.replay_bytes[this.byte_index++];
        },
        getShort: function(){
            return this.replay_bytes[this.byte_index++]
                | (this.replay_bytes[this.byte_index++] << 8);
        },
        getInteger: function(){
            return this.replay_bytes[this.byte_index++]
                | (this.replay_bytes[this.byte_index++] << 8)
                | (this.replay_bytes[this.byte_index++] << 16)
                | (this.replay_bytes[this.byte_index++] << 24);
        },
        getLong: function(){
            return this.getInteger() + this.getInteger() * 0x100000000;
        },
        getULEB128: function(){
            var t = 0;
            var s = 0;
            while (true) {
                var byte = this.getByte();
                t |= ((byte & 0x7F) << s);
                if ((byte & 0x80) === 0) break;
                s += 7;
            }
            return t;
        },
        getString: function(){

                /*
                From: https://osu.ppy.sh/wiki/Osr_%28file_format%29
                Has three parts; a single byte which will be either
                0x00,indicating that the next two parts are not present, or
                0x0b (decimal 11), indicating that the next two parts are present.
                If it is 0x0b, there will then be a ULEB128,
                representing the byte length of the following string, and then the string itself, encoded in UTF-8. See wikipedia:UTF-8*/
                var startByte = this.getByte();
                if (startByte == 0x0B){
                    var len = this.getULEB128();
                    var s = "";
                    for (var i = 0; i < len; i++) {
                        s += String.fromCharCode(this.getByte());
                    }
                    return s;
                }
                return "";
        }

    };
    RP.convert();
    var replay = {
        type: RP.getByte(),
        version: RP.getInteger(),
        bmMd5Hash: RP.getString(),
        playerName: RP.getString(),
        rMd5Hash: RP.getString(),
        h300: RP.getShort(),
        h100: RP.getShort(),
        h50: RP.getShort(),
        hGekis: RP.getShort(),
        hKatus: RP.getShort(),
        hMisses: RP.getShort(),
        tScore: RP.getInteger(),
        tCombo: RP.getShort(),
        fullClear: RP.getByte(),
        mods: osu.mods.getMods(RP.getInteger()),
        lifeBar: RP.getString(),
        time_played: RP.getLong(),
        replayByteLength: RP.getInteger()
    };
    var epoch = (replay.time_played - 621355968000000000) / 10000 ;
    var date_time = new Date(epoch);
    replay.time_played = date_time.toLocaleString();


    replay.grade = osu.score.getGrade(replay.h300, replay.h100, replay.h50,replay.hMisses, replay.mods).name;
    replay.accuracy = osu.score.getAccuracy(replay.h300, replay.h100, replay.h50,replay.hMisses);

    replay.been_rendered = false;

    LZMA.decompress(
        RP.replay_bytes.slice(RP.byte_index),
        function(data) {
            var replayData = data.split(",");
            for(var i = 0 ; i< replayData.length ; i++){
                var splitData = replayData[i].split("|");
                for(var x = 0; x< splitData.length ; x++){
                    splitData[x] = parseFloat(splitData[x]);
                }
                replayData[i] = splitData;
            }
            replay.replayData = replayData;

            database.insert_data(database.TABLES.REPLAYS, replay.rMd5Hash, replay, function () {
                event_handler.emit(event_handler.EVENTS.REPLAY_LOADED);
                callback(replay);
            }, function () {
                event_handler.emit(event_handler.EVENTS.REPLAY_LOADED);
                callback(replay);
            });
        },
        function(){}
    );

};

/**
 * skinreader.js
 * Created by Ugrend on 6/06/2016.
 */
var SkinReader = function(skin_zip) {
    var skins = {};




    return skins;


};
/**
 * music_controller.js
 * Created by Ugrend on 9/06/2016.
 */
var osu = osu || {};
osu.audio = osu.audio || {};
osu.audio.music =  {

    preview_screen: false,
    preview_time: 0,
    __audio: new Audio(),
    md5sum: "",
    playing: false,
    events_bound: false,

    init: function (src, md5sum) {

        if(!this.events_bound){
            event_handler.on(event_handler.EVENTS.SETTINGS_CHANGED, this.set_volume.bind(this));
            this.events_bound = true;
        }
        //only start again
        if(md5sum != this.md5sum){
            this.md5sum = md5sum;
            this.__audio.pause();
            this.__audio.src = src;
            this.set_volume();
            this.playing = false;
        }
        this.set_playback_speed(1);//reset playback speed if was playing DT/HT
        this.__audio.onended = this.repeat.bind(this);

    },
    set_volume: function () {
        this.__audio.volume = osu.settings.SETTINGS.master_volume * osu.settings.SETTINGS.music_volume;
    },

    stop: function () {
        this.__audio.pause();
        this.__audio.currentTime = 0;
    },

    start: function(){
        if(this.preview_screen){
            if(!this.playing){
                this.__audio.currentTime = this.preview_time;
                this.__audio.play();
                this.playing = true;
            }

        }
        else{
            this.__audio.currentTime = 0;
            this.__audio.play();
        }

    },
    set_position: function (t) {
        this.__audio.currentTime = t;
    },

    play: function(){
        this.__audio.play()
    },
    set_playback_speed: function (rate) {
        this.__audio.playbackRate = rate;

    },

    repeat: function () {
        if(this.preview_screen){
            this.playing = false;
            this.start();
        }

    }












};


/**
 * sound_effects.js
 * Created by Ugrend on 16/06/2016.
 */
var osu = osu || {};
osu.audio = osu.audio || {};
osu.audio.sound = {

    section_success:   {
        __audio: new Audio(src=osu.skins.audio.sectionpass),
        play: function () {
            this.__audio.volume = osu.settings.SETTINGS.master_volume * osu.settings.SETTINGS.sound_effects_volume;
            this.__audio.play();
        }

    }


};
/**
 * beatmaps.js
 * Created by Ugrend on 4/06/2016.
 */
// https://osu.ppy.sh/wiki/Osu_%28file_format%29


var osu = osu || {};
osu.beatmaps = osu.beatmaps || {};


osu.beatmaps.BeatmapPreview = class BeatmapPreview {
    constructor(md5sum, callback) {
        callback = callback || function () {};
        this.loaded = false;
        this.artist = "";
        this.artistunicode = "";
        this.beatmapid = "";
        this.beatmapsetid = "";
        this.creator = "";
        this.md5sum = md5sum;
        this.source = "";
        this.tags = "";
        this.thumbnail_data = "";
        this.title = "";
        this.titleunicode = "";
        this.version = "";
        this.song = "";
        this.preview_song_time = 0;
        this.background = "";

        //difficulty
        this.approachRate = "";
        this.circleSize = "";
        this.overallDifficulty = "";
        this.HPDrain = "";
        this.stars = "";
        this.bpm = 0;
        this.objects = 0;
        this.circles = 0;
        this.sliders = 0;
        this.spinners = 0;
        this.song_length = "";

        var self = this;
        database.get_data(database.TABLES.BEATMAPS,md5sum, function (r) {
            var beatmap = r.data;
            self.artist = beatmap.artist || "";
            //if unicode is same as normal just ignore it so we dont print twice
            self.artistunicode = (beatmap.artistunicode == beatmap.artist ? false : beatmap.artistunicode);
            self.artistunicode = beatmap.artistunicode || null;
            self.beatmapid = beatmap.beatmapid || "";
            self.beatmapsetid = beatmap.beatmapsetid || "";
            self.creator = beatmap.creator || "";
            self.source = beatmap.source || "";
            self.tags = beatmap.tags || "";
            self.title = beatmap.title || "";
            self.titleunicode = (beatmap.titleunicode == beatmap.title ? false : beatmap.titleunicode);
            self.version = beatmap.version || "";
            self.song = beatmap.song || "";
            self.preview_song_time = parseInt(beatmap.parsed.general.PreviewTime) || 0;
            self.background = beatmap.background || "";
            self.approachRate = beatmap.parsed.difficulty.ApproachRate || 0;
            self.circleSize = beatmap.parsed.difficulty.CircleSize || 0;
            self.overallDifficulty = beatmap.parsed.difficulty.OverallDifficulty || 0;
            self.HPDrain = beatmap.parsed.difficulty.HPDrainRate || 0;
            self.minBPM = beatmap.parsed.minBPM;
            self.maxBPM = (beatmap.parsed.maxBPM == -1 ? false : beatmap.parsed.maxBPM);
            self.circles = beatmap.parsed.circles || 0;
            self.sliders = beatmap.parsed.sliders || 0;
            self.spinners = beatmap.parsed.spinners || 0;
            self.objects = self.circles + self.sliders + self.spinners;

            var milliseconds = beatmap.parsed.time_length;
            var seconds = parseInt((milliseconds / 1000) % 60 );
            var minutes = parseInt(((milliseconds / (1000*60)) % 60));
            var hours   = parseInt(((milliseconds / (1000*60*60)) % 24));

            var pad = function (s) {
                return ('00'+s).substring(s.length);
            };

            self.song_length = (hours > 0 ? hours.toString() + ":" : "") + pad(minutes.toString()) + ":"  + pad(seconds.toString());

            database.get_data(database.TABLES.ASSETS,beatmap.thumbnail, function (result) {
                self.thumbnail_data = result.data;
                self.loaded = true;
                callback(this);
            });
        })

    }


    play_song() {
        var preview_time = this.preview_song_time;
        database.get_data(database.TABLES.ASSETS, this.song, function (r) {
            osu.audio.music.preview_time = preview_time / 1000;
            osu.audio.music.preview_screen = true;
            osu.audio.music.init(r.data,r.md5sum);
            osu.audio.music.start();
        });
    }

    load_background(){

        database.get_data(database.TABLES.ASSETS, this.background, function (r) {
            osu.ui.interface.mainscreen.set_background(r.data);
        });
    }


};

osu.beatmaps.BeatmapLoader = {
        beatmap_found: false,
        map_name: "",
        required_files: [],
        background: "",
        map_data: "",
        assets: [],
        song: "",
        __beatmap: "",
        __files_needed: [],
        md5sum: "",

        load: function (md5sum, onsuccess, onerror) {
            //clear out old data
            this.beatmap_found = false;
            this.map_name = false;
            this.required_files = [];
            this.assets = [];
            this.song = "";
            this.song_md5sum = "";
            this.__beatmap = "";
            this.__files_needed = [];
            this.background = "";

            this.md5sum = md5sum;
            this.onsuccess = onsuccess;
            this.onerror = onerror;
            // check if last loaded beatmap has our data first (incase indexeddb is unavailable/etc)
            if (beatmap) {
                for (var i = 0; i < beatmap.maps.length; i++) {
                    if (beatmap.maps[i].md5sum == md5sum) {
                        beatmap.locked = true; //lock the data to prevent droping another beatmap
                        this.map_data = beatmap.maps[i].parsed;
                        this.required_files = beatmap.maps[i].files;
                        this.assets = beatmap.assets;
                        this.beatmap_found = true;
                        break;
                    }
                }
                if (this.beatmap_found) {
                    this.__beatmap_loaded();
                }
                else {
                    this.__look_in_db();
                }
            } else {
                this.__look_in_db();
            }
        },

        __look_in_db: function () {
            database.get_data(database.TABLES.BEATMAPS, this.md5sum, this.__load_bm_from_db.bind(this), function (e) {
                event_handler.emit(event_handler.EVENTS.DB_ERROR, e.event.error);
            });
        },
        __load_bm_from_db: function (result) {

            if (result && result.data) {
                this.__beatmap = result.data;
                this.map_data = this.__beatmap.parsed;
                this.required_files = this.__beatmap.files;
                this.__files_needed = this.__beatmap.files.slice(0);
                var file_to_get = this.__files_needed.pop().md5sum;
                database.get_data(database.TABLES.ASSETS, file_to_get, this.__load_assets_from_db.bind(this), function (e) {
                    event_handler.emit(event_handler.EVENTS.DB_ERROR, e.event.error);
                });
            } else {
                event_handler.emit(event_handler.EVENTS.BEATMAP_NOTFOUND, result.md5sum);
            }
        },
        __load_assets_from_db: function (result) {
            if (result && result.data) {
                this.assets.push(result);
            } else {
                event_handler.emit(event_handler.EVENTS.ASSET_NOT_FOUND, result.md5sum)
            }
            if (this.__files_needed.length) {
                var file_to_get = this.__files_needed.pop().md5sum;
                database.get_data(database.TABLES.ASSETS, file_to_get, this.__load_assets_from_db.bind(this), function (e) {
                    event_handler.emit(event_handler.EVENTS.DB_ERROR, e.event.error);
                });
            } else {
                this.beatmap_found = true;
                this.__beatmap_loaded();
            }

        }
        ,

        __beatmap_loaded: function () {
            if (this.beatmap_found) {
                this.__process_beatmap();
                this.onsuccess(this);
            } else {
                event_handler.emit(event_handler.EVENTS.BEATMAP_NOTFOUND, this.md5sum);
                this.onerror("beatmap not found: " + this.md5sum);

            }
        },

        __process_beatmap: function () {
            this.song_md5sum =this.__lookup_file_md5(this.map_data.general.AudioFilename)
            this.song = this.__get_asset_from_md5(this.song_md5sum);
            this.background = this.__get_asset_from_md5(this.__lookup_file_md5(this.map_data.events[0][2].replace(/"/g, '')));
            this.map_name = this.map_data.metadata.Artist + " - " + this.map_data.metadata.Title + " [" + this.map_data.metadata.Version + "]";
            this.author = this.map_data.metadata.Creator;
        },
        __lookup_file_md5: function (filename) {
            for (var i = 0; i < this.required_files.length; i++) {
                if (this.required_files[i].filename == filename) {
                    return this.required_files[i].md5sum;
                }
            }
        },
        __get_asset_from_md5: function (md5) {
            for (var i = 0; i < this.assets.length; i++) {
                if (this.assets[i].md5sum == md5) {
                    return this.assets[i].data;
                }
            }
        }
};

/**
 * difficuly_calculator.js
 * Created by Ugrend on 23/06/2016.
 *
 * Referenced from https://github.com/Tom94/AiModtpDifficultyCalculator
 */

var osu = osu || {};
osu.beatmaps = osu.beatmaps || {};

osu.beatmaps.DifficultyCalculator = {
    __DIFFICULTY_TYPES:{DIFFICULTY_SPEED:0, DIFFICULTY_AIM:1},


    __STAR_SCALING_FACTOR: 0.045,
    __EXTREME_SCALING_FACTOR: 0.5,
    __PLAY_WIDTH: 512,
    __STRAIN_STEP: 400,
    __DELAY_WEIGHT: 0.9,
    __BEATMAP: null,
    __HIT_OBJECTS: [],
    STAR_RATING: -1,


    calculate_stars: function (beatmap) {
        this.__BEATMAP = beatmap;
        this.STAR_RATING = -1;
        var circleSize = (this.__PLAY_WIDTH / 16.0) * (1.0 - 0.7 * (beatmap.parsed.difficulty.CircleSize - 5.0) / 5.0);
        return 5;
    }





};
/**
 * gametypes.js
 * Created by Ugrend on 3/06/2016.
 */

osu = osu || {};

osu.GAMETYPES = {
    NORMAL: 0,
    TAIKO: 1,
    CTB: 2,
    MANIA: 3
};
/**
 * constants.js
 * Created by Ugrend on 6/07/2016.
 */

osu = osu || {};
osu.helpers = osu.helpers || {};
osu.helpers.constants = {
    OSU_GAME_HEIGHT: 384,
    OSU_GAME_WIDTH: 512,
    DOUBLE_TIME_MULTI: .667,


};
/**
 *
 *
 * Created by Ugrend on 3/07/2016.
 */

osu = osu || {};
osu.helpers = osu.helpers || {};
osu.helpers.math = {

    distance: function (x1,y1,x2,y2) {
        var v1 = Math.abs(x1 - x2);
        var v2 = Math.abs(y1 - y2);
        return Math.sqrt((v1 * v1) + (v2 * v2));
    },

    slope: function(x1,y1,x2,y2){
        if(x1 == x2){
            return null;
        }
        return (y2 - y1) / (x2 - x1);
    },

    intercept: function(x, y, slope){
        if(slope === null){
            return x;
        }
        return y - slope * x;
    },

    getLiniearPoints(x1, y1, x2, y2, minDistance){
        minDistance = minDistance || null;
        var m = this.slope(x1,y1,x2,y2);
        var b = this.intercept(x1, y1, m);

        var lastPoint = null;
        var coordinates = [];
        for (var x = x1; x <= x2; x++) {
            var y = m * x + b;
            var point = {x:x,y:y};
            if(minDistance){
                if(lastPoint){
                    if(this.distance(lastPoint.x,lastPoint.y,point.x,point.y) < minDistance){
                        continue;
                    }

                }

            }
            lastPoint = point;
            coordinates.push(point);
        }
        return coordinates;
    },
    angleDeg: function (x1,x2,y1,y2) {
        return   Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    }

};



/**
 * keypress.js
 * Created by Ugrend on 5/06/2016.
 */

var osu  = osu || {};

/*

 Part	Data Type	Description
 w	Long	Time in milliseconds since the previous action
 x	Float	x-coordinate of the cursor from 0 - 512
 y	Float	y-coordinate of the cursor from 0 - 384
 z	Integer	Bitwise combination of keys/mouse buttons pressed (M1 = 1, M2 = 2, K1 = 5, K2 = 10)


 */
osu.keypress = Object.freeze({

    KEYS: {
        NONE : 0,
        M1: 1,
        M2: 2,
        K1: 5,
        K2: 10,
        C: 16
    },

    //TODO: need to work out how this works, its returning wrong keys i think
    getKeys: function(keys_int){
        var keys = [];
        if (keys_int == 0) {
            keys.push(this.KEYS.NONE);
            return keys;
        }
        for (var k in this.KEYS) {
            var bit = keys_int & this.KEYS[k];
            if (bit == this.KEYS[k] && bit != 0) {
                keys.push(this.KEYS[k]);
            }
        }
        return keys;
    }

});


/**
 * mods.js
 * Created by Ugrend on 2/06/2016.
 */
//https://osu.ppy.sh/wiki/Game_Modifiers
//https://github.com/ppy/osu-api/wiki#mods
var osu  = osu || {};


osu.mods = Object.freeze({

    //anything higher than 4096 i don't really care about i don't think except maybe perfect?
    __mods: {

        NONE: {value: 0, multi: 1.0, code: "", name: "No Mod", icon: ""},
        NO_FAIL: {value: 1, multi: 0.5, code: "NF", name: "No Fail", icon: "selection_mod_nofail"},
        EASY: {value: 2, multi: 0.5, code: "EZ", name: "Easy", icon: "selection_mod_easy"},
        NO_VIDEO: {value: 4, multi: 1.0, code: "", name: "No Video", icon: ""},
        HIDDEN: {value: 8, multi: 1.06, code: "HD", name: "Hidden", icon: "selection_mod_hidden"},
        HARD_ROCK: {value: 16, multi: 1.06, code: "HR", name: "Hard Rock", icon: "selection_mod_hardrock"},
        SUDDEN_DEATH: {value: 32, multi: 1.0, code: "SD", name: "Sudden Death", icon: "selection_mod_suddendeath"},
        DOUBLE_TIME: {value: 64, multi: 1.12, code: "DT", name: "Double Time", icon: "selection_mod_doubletime"},
        RELAX: {value: 128, multi: 0, code: "", name: "", icon: ""},
        HALF_TIME: {value: 256, multi: 0.3, code: "HT", name: "Half Time", icon: "selection_mod_halftime"},
        NIGHT_CORE: {value: 512, multi: 1.12, code: "NT", name: "Night Core", icon: "selection_mod_nightcore"},
        FLASH_LIGHT: {value: 1024, multi: 1.12, code: "FL", name: "Flash Light", icon: "selection_mod_flashlight"},
        AUTO_PLAY: {value: 2048, multi: 0, code: "", name: "Auto Play", icon: ""},
        SPUN_OUT: {value: 4096, multi: 0.9, code: "SO", name: "Spun Out", icon: "selection_mod_spunout"},
        RELAX_2: {value: 8192, multi: 0, code: "AP", name: "Auto Pilot", icon:""},
        PERFECT: {value: 16384, multi: 1, code: "PF", name: "Perfect", icon:"selection_mod_perfect"}
    },
    /**
     * gets used mods based on replay mod int value
     * @param mod_bit_int {Number} value of replay mod output
     * @returns {Array} of mods
     */
    getMods: function(mod_bit_int){
        var mods = [];
        if (mod_bit_int == 0) {
            mods.push(this.__mods.NONE);
            return mods;
        }
        for (var k in this.__mods) {
            var bit = mod_bit_int & this.__mods[k].value;
            if (bit == this.__mods[k].value) {
                mods.push(this.__mods[k]);
            }
        }
        return mods;
    },
    /**
     * Gets mod based on value
     * @param mod_int {Number} value of desired mod
     * @returns {object} Mod object or Empty object if nothing found
     */
    getModFromVal: function(mod_int){
        for (var k in this.__mods) {
            if (this.__mods[k].value == mod_int) {
                return this.__mods[k];
            }
        }
        return {}
    }
});


/**
 * circle.js
 * Created by Ugrend on 11/06/2016.
 */

    //TODO: THIS WILL MOVE ONCE SKIN SECTION IS DONE
var hit_circle_texture = PIXI.Texture.fromImage(osu.skins.hitcircle);
var hit_circle_overlay = PIXI.Texture.fromImage(osu.skins.hitcicleoverlay);
var approach_circle_texture = PIXI.Texture.fromImage(osu.skins.approachcircle);

var hit_numbers = {
    num_0: PIXI.Texture.fromImage(osu.skins.default_1),
    num_1: PIXI.Texture.fromImage(osu.skins.default_1),
    num_2: PIXI.Texture.fromImage(osu.skins.default_2),
    num_3: PIXI.Texture.fromImage(osu.skins.default_3),
    num_4: PIXI.Texture.fromImage(osu.skins.default_4),
    num_5: PIXI.Texture.fromImage(osu.skins.default_5),
    num_6: PIXI.Texture.fromImage(osu.skins.default_6),
    num_7: PIXI.Texture.fromImage(osu.skins.default_7),
    num_8: PIXI.Texture.fromImage(osu.skins.default_8),
    num_9: PIXI.Texture.fromImage(osu.skins.default_9)
};


osu = osu || {};
osu.objects = osu.objects || {};
osu.objects.Circle = class Circle{
    constructor(hitObject){
        this.hitObject = hitObject;
        this.last_draw_time = 0;
        this.drawn = false;
        this.destroyed = false;
        this.hidden_time = this.hitObject.approachRate / 3.3;
    }
    init(){
        this.circleContainer = new PIXI.Container();
        this.circleSprite =  new PIXI.Sprite(hit_circle_texture);
        this.circleSprite.tint = this.hitObject.colour;
        this.circleSprite.anchor.set(0.5);
        this.circleSprite.height = this.hitObject.size;
        this.circleSprite.width = this.hitObject.size;

        if(!this.hitObject.game.is_hidden) {
            this.approchCircleSprite = new PIXI.Sprite(approach_circle_texture);
            this.approchCircleSprite.tint = this.hitObject.colour;
            this.approchCircleSprite.anchor.set(0.5);
            this.approchCircleSprite.width = this.hitObject.size * 2.5;
            this.approchCircleSprite.height = this.hitObject.size * 2.5;
            this.circleContainer.addChild(this.approchCircleSprite);
        }


        this.circleOverlaySprite =  new PIXI.Sprite(hit_circle_overlay);
        this.circleOverlaySprite.height = this.hitObject.size;
        this.circleOverlaySprite.width = this.hitObject.size;
        this.circleOverlaySprite.anchor.set(0.5);
        this.circleContainer.addChild(this.circleSprite);
        this.circleContainer.addChild(this.circleOverlaySprite);

        var comboString = this.hitObject.combo.toString();
        this.comboNumSprites = [];
        for(var i = 0; i< comboString.length ; i++){
            this.comboNumSprites.push(new PIXI.Sprite(hit_numbers["num_"+comboString.charAt(i)]));
        }

        if(this.comboNumSprites.length > 1){
            this.comboSprite1 = this.comboNumSprites[0];
            this.comboSprite2 = this.comboNumSprites[1];
            this.comboSprite1.x -= this.hitObject.size/10;
            this.comboSprite2.x += this.hitObject.size/10;
            this.comboSprite1.anchor.set(0.5);
            this.comboSprite2.anchor.set(0.5);
            this.circleContainer.addChild(this.comboSprite1);
            this.circleContainer.addChild(this.comboSprite2);
        }else{
            this.comboSprite1 = this.comboNumSprites[0];
            this.comboSprite1.anchor.set(0.5);
            this.circleContainer.addChild(this.comboSprite1);
        }
        this.circleContainer.x = this.hitObject.x;
        this.circleContainer.y =  this.hitObject.y;


    }

    updatePositions(){
        this.circleContainer.x =  this.hitObject.x;
        this.circleContainer.y =  this.hitObject.y;
    }


    draw(cur_time){

        if(this.destroyed){
            //object is no longer rendered but still might have some logic (eg being missed, is hidden etc)
            if(cur_time < this.hitObject.startTime + 500){
                return true;
            }
            return false;
        }
        if(this.drawn && this.hitObject.game.is_hidden && cur_time > this.hitObject.startTime - this.hidden_time){
            this.destroy();
            this.destroyed = true;
        }

        if(!this.destroyed && cur_time > this.hitObject.startTime + 110 ){
            this.destroy();
            this.destroyed = true;
        }

        if(!this.destroyed && cur_time < this.hitObject.startTime + this.hitObject.approachRate){
            if(!this.hitObject.game.is_hidden){
                //dont need to calculate this so often
                if(Date.now() - this.last_draw_time > 35) {
                    var time_diff = this.hitObject.startTime - cur_time;
                    var scale = 1 + (time_diff / this.hitObject.approachRate) * 2.5;
                    if (scale < 1) scale = 1;
                    this.approchCircleSprite.width = this.hitObject.size * scale;
                    this.approchCircleSprite.height = this.hitObject.size * scale;
                    this.last_draw_time = Date.now();
                }
            }
            if(!this.drawn){
                this.hitObject.game.hit_object_container.addChildAt(this.circleContainer,0);
                this.drawn = true;
            }
        }
        return true;
    }

    hit(time){

    }

    destroy(){
        this.hitObject.game.hit_object_container.removeChild(this.circleContainer);
    }

};

/**
 * followpoint.js
 * Created by Ugrend on 6/07/2016.
 */
osu = osu || {};
osu.objects = osu.objects || {};
osu.objects.FollowPoint = class FollowPoint{
    constructor(hitObject1, hitObject2){
        this.hitObject1 = hitObject1;
        this.hitObject2 = hitObject2;
        this.drawn = false;
        this.destroyed = false;
    }

    init(){
        this.x1 = this.hitObject1.endX || this.hitObject1.x;
        this.y1 = this.hitObject1.endY  || this.hitObject1.y;
        this.x2 = this.hitObject2.x;
        this.y2 = this.hitObject2.y;
        this.drawTime = this.hitObject1.endTime || this.hitObject1.startTime;
        this.points = osu.helpers.math.getLiniearPoints(this.x1, this.y1, this.x2, this.y2, 20);
        this.angle = osu.helpers.math.angleDeg(this.x1, this.y1, this.x2, this.y2);

        this.followPointContainer = new PIXI.Container();
        var arrowTexture =  PIXI.Texture.fromImage(osu.skins.followpoint);
        for(var i = 0 ; i < this.points.length; i++){
            var arrowSprite = new PIXI.Sprite(arrowTexture);
            arrowSprite.anchor.set(0.5);
            arrowSprite.position.x = this.points[i].x;
            arrowSprite.position.y = this.points[i].y;
            this.followPointContainer.addChild(arrowSprite);
        }
        var graphicsLine = new PIXI.Graphics();
        graphicsLine.moveTo(this.x1, this.y1);
        graphicsLine.lineStyle(3,0xFFFFFF);
        graphicsLine.lineTo(this.x2,this.y2);
        this.followPointContainer.addChild(graphicsLine);

    }

    draw(cur_time){
        if(this.destroyed){
            return false;
        }

        if(!this.drawn && cur_time >= this.drawTime){
            this.hitObject1.game.hit_object_container.addChildAt(this.followPointContainer,0);
            this.drawn = true;
            return true;
        }
        if(!this.destroyed && cur_time > this.hitObject2.startTime){
            this.destroy();
            this.destroyed = true;
        }


        return true;
    }
    destroy(){
        this.hitObject1.game.hit_object_container.removeChild(this.followPointContainer);
    }

};


/**
 * hitobjects.js
 * Created by Ugrend on 17/06/2016.
 */

osu = osu || {};
osu.objects = osu.objects || {};


osu.objects.HitObjectParser = {
    TYPES: {
        CIRCLE: 1,
        SLIDER: 2,
        NEW_COMBO: 4,
        SPINNER: 8,
    },

    HIT_SOUNDS: {
        SOUND_NORMAL: 0,
        SOUND_WHISTLE: 2,
        SOUND_FINISH: 4,
        SOUND_CLAP: 8,
    },
    HIT_ADDITIONS: {
        NORMAL: 1,
        SOFT: 2,
        DRUM: 3,
    },

    SLIDER_TYPES: {
        CATMULL: "C",
        BEZIER: "B",
        LINEAR: "L",
        PASSTHROUGH: "P"
    },

    parse_type: function (hitObjectInt) {
        var newCombo = false;
        if ((hitObjectInt & this.TYPES.NEW_COMBO)) {
            newCombo = true;
        }
        if ((hitObjectInt & osu.objects.HitObjectParser.TYPES.CIRCLE)) {
            return {type: this.TYPES.CIRCLE, new_combo: newCombo}
        }
        if ((hitObjectInt & osu.objects.HitObjectParser.TYPES.SLIDER)) {
            return {type: this.TYPES.SLIDER, new_combo: newCombo}
        }
        if ((hitObjectInt & osu.objects.HitObjectParser.TYPES.SPINNER)) {
            return {type: this.TYPES.SPINNER, new_combo: newCombo}
        }
    },
    parse_line: function (line, timing, sliderMulti) {

        var get_timing_point = function (offset) {
            for(var i = timing.length -1 ; i >=0 ; i--){
                if(timing[i].offset <= offset)  return timing[i];
            }
            return timing[0];
        };

        var parse_additions = function (strAdditions) {
            if(!strAdditions) return {};
            var additions = {};
            var adds = strAdditions.split(":");
            if(adds.length > 0){
                additions.sample = +adds[0];
            }
            if(adds.length > 1){
                additions.additionalSample = +adds[1];
            }
            if(adds.length > 2){
                additions.customSampleIndex = +adds[2];
            }
            if(adds.length > 3){
                additions.hitSoundVolume = +adds[3];
            }
            if(adds.length > 4){
                additions.hitsound = +adds[4];
            }

            return {};
        };

        var hitObject = {};

        var hitArray = line.split(',');

        var type = this.parse_type(+hitArray[3]);

        hitObject.x = +hitArray[0];
        hitObject.y = +hitArray[1];
        hitObject.startTime = +hitArray[2];
        hitObject.type = type.type;
        hitObject.newCombo = type.new_combo;
        hitObject.hitSounds = [];
        hitObject.timing = get_timing_point(hitObject.startTime);

        var soundByte = +hitArray[4];
        if ((soundByte & this.HIT_SOUNDS.SOUND_WHISTLE) == this.HIT_SOUNDS.SOUND_WHISTLE)
            hitObject.hitSounds.push(this.HIT_SOUNDS.SOUND_WHISTLE);
        if ((soundByte & this.HIT_SOUNDS.SOUND_FINISH) == this.HIT_SOUNDS.SOUND_FINISH)
            hitObject.hitSounds.push(this.HIT_SOUNDS.SOUND_FINISH);
        if ((soundByte & this.HIT_SOUNDS.SOUND_CLAP) == this.HIT_SOUNDS.SOUND_CLAP)
            hitObject.hitSounds.push(this.HIT_SOUNDS.SOUND_CLAP);
        if (hitObject.hitSounds.length === 0)
            hitObject.hitSounds.push(this.HIT_SOUNDS.SOUND_NORMAL);


        if (hitObject.type == this.TYPES.CIRCLE) {
            hitObject.additions = parse_additions(hitArray[5]);
        }
        if (hitObject.type == this.TYPES.SPINNER) {
            hitObject.endTime = +hitArray[5];
            hitObject.additions = +hitArray[6];
        }
        if (hitObject.type == this.TYPES.SLIDER) {
            var sliderData = hitArray[5].split("|");
            hitObject.sliderType = sliderData[0];
            hitObject.repeatCount = +hitArray[6];
            hitObject.pixelLength = +hitArray[7];
            hitObject.additions = parse_additions(hitArray[10]);
            hitObject.edges =[];
            var sounds    = [];
            var additions = [];
            if (hitArray[8])  sounds = hitArray[8].split('|');
            if (hitArray[9])  additions = hitArray[9].split('|');
            for (var x = 0; x < hitObject.repeatCount+1 ; x++) {
                var edge = {
                    sounds: [],
                    additions: parse_additions(additions[x])
                };

                if (sounds[x]) {
                    soundByte = sounds[x];
                    //TODO: function this
                    if ((soundByte & this.HIT_SOUNDS.SOUND_WHISTLE) == this.HIT_SOUNDS.SOUND_WHISTLE)
                        edge.sounds.push(this.HIT_SOUNDS.SOUND_WHISTLE);
                    if ((soundByte & this.HIT_SOUNDS.SOUND_FINISH) == this.HIT_SOUNDS.SOUND_FINISH)
                        edge.sounds.push(this.HIT_SOUNDS.SOUND_FINISH);
                    if ((soundByte & this.HIT_SOUNDS.SOUND_CLAP) == this.HIT_SOUNDS.SOUND_CLAP)
                        edge.sounds.push(this.HIT_SOUNDS.SOUND_CLAP);
                    if (hitObject.hitSounds.length === 0)
                        edge.sounds.push(this.HIT_SOUNDS.SOUND_NORMAL);
                } else {
                    edge.sounds.push(this.HIT_SOUNDS.SOUND_NORMAL);
                }

                hitObject.edges.push(edge);
            }

            hitObject.points = [];
            for(var i = 1; i < sliderData.length; i++){
                var points = sliderData[i].split(":");
                hitObject.points.push({x:+points[0], y:+points[1]});
            }


            var beats = (hitObject.pixelLength * hitObject.repeatCount) /(100*sliderMulti)
            hitObject.duration = Math.ceil(beats * hitObject.timing.millisecondsPerBeat);
            hitObject.endTime = hitObject.startTime + hitObject.duration;

        }


        return hitObject;
    },


    //https://gist.github.com/peppy/1167470
    create_stacks: function (hitobjects, stackLeniency, circleSize, hardrock) {

        for (var i = hitobjects.length - 1; i > 0; i--) {
            var hitObjectI = hitobjects[i];
            if (hitObjectI.stack != 0 || hitObjectI.type == osu.objects.HitObjectParser.TYPES.SPINNER) continue;

            if (hitObjectI.type == osu.objects.HitObjectParser.TYPES.CIRCLE) {
                for (var n = i - 1; n >= 0; n--) {
                    var hitObjectN = hitobjects[n];
                    if (hitObjectN.type == osu.objects.HitObjectParser.TYPES.SPINNER) continue;

                    var timeI = hitObjectI.startTime - (1000 * stackLeniency); //convert to miliseconds
                    var timeN = hitObjectN.startTime;
                    if (timeI > timeN) break;

                    var distance = osu.helpers.math.distance(hitObjectI.x, hitObjectI.y, hitObjectN.x, hitObjectN.y);
                    if (distance < 3) {
                        hitObjectN.stack = hitObjectI.stack + 1;
                        hitObjectI = hitObjectN;
                    }
                }
            }
        }

        for (i = 0; i < hitobjects.length; i++) {
            var hitObject = hitobjects[i];
            var stack = hitObject.stack;
            var offset = (stack * (circleSize * 0.05));
            var x = hitObject.x - offset;
            var y = hitObject.y - offset;
            if (hardrock)
                y = y + offset;

            hitObject.x = x;
            hitObject.y = y;
            hitObject.init();
        }



    },

    calculate_follow_points: function (hitobjects, game) {

        for(var i = 0; i < hitobjects.length -1; i++){
            var hitObject1 = hitobjects[i];
            var hitObject2 = hitobjects[i+1];
            if (hitObject1.type == osu.objects.HitObjectParser.TYPES.SPINNER) continue;
            if (hitObject2.type == osu.objects.HitObjectParser.TYPES.SPINNER) continue;
            if(hitObject2.newCombo) continue;

            var startX = game.calculate_original_x(hitObject1.endX || hitObject1.x);
            var startY = game.calculate_original_x(hitObject1.endY || hitObject1.y);
            var endX = game.calculate_original_x(hitObject2.x);
            var endY = game.calculate_original_x(hitObject2.y);
            var distance = osu.helpers.math.distance(startX,startY,endX,endY);
            if(distance > 50){
                hitObject1.followPoint = new osu.objects.FollowPoint(hitObject1, hitObject2);
                hitObject1.followPoint.init();
            }
        }

    }

};
osu.objects.HitObject = class HitObject{
    constructor(hitObjectData, size, approachRate, game){
        this._x = 0;
        this._y = 0;
        this.game = game;
        this.combo = 1;
        this.colour = 0xFFFFFF;
        this.stack = 0;
        this.size = size;
        this.approachRate = approachRate;
        this.followPoint = false;

        $.extend(this, hitObjectData);
        if(this.game.is_hardrock) this._y = 384 - this._y;
        switch (this.type){
            case osu.objects.HitObjectParser.TYPES.CIRCLE:
                this.object = new osu.objects.Circle(this);
                break;
            case osu.objects.HitObjectParser.TYPES.SLIDER:
                this.object = new osu.objects.Slider(this);
                break;
            case osu.objects.HitObjectParser.TYPES.SPINNER:
                this.object = new osu.objects.Spinner(this);
        }
        this.initialised = false;
    }
    set x(v){
        this._x = v;
        if(this.initialised) this.object.updatePositions();
    };
    get x() { return this._x}
    set y(v){
        this._y = v;
        if(this.initialised) this.object.updatePositions();
    };
    get y() { return this._y}

    init(){
        this.x = this.game.calculate_x(this.x);
        this.y = this.game.calculate_y(this.y);
        if(this.game.is_doubletime){
            this.startTime *= osu.helpers.constants.DOUBLE_TIME_MULTI;
            if(this.endTime) this.endTime *= osu.helpers.constants.DOUBLE_TIME_MULTI;
        }
        this.object.init();
        this.initialised = true;
    }

    draw(cur_time){
        var followResult = false;
        if(this.followPoint){
            followResult = this.followPoint.draw(cur_time);
        }
        return this.object.draw(cur_time) ||  followResult;
    }




};
/**
 * slider.js
 * Created by Ugrend on 11/06/2016.
 */
osu = osu || {};
osu.objects = osu.objects || {};
osu.objects.Slider = class Slider{
    constructor(hitObject){
        this.hitObject = hitObject;
        this.last_draw_time  =0;
        this.drawn = false;
        this.destroyed = false;
        this.initialised = false;
        /*this is just used if we need to move the slider,
        once generated the x,y coords of the slider will differ from the hitObject x,y
        storing the originals will allow to move the slider by the difference
         */
        this.originalX = this.hitObject.x;
        this.originalY = this.hitObject.y;
        this.hidden_time = this.hitObject.approachRate / 3.3;

    }
    init(){
        this.startCircle = new osu.objects.Circle(this.hitObject);
        this.startCircle.init();

        var sliderGraphics = new PIXI.Graphics();
        var points = this.hitObject.points;
        for(var i = 0 ; i < points.length ; i++){
            points[i].x = this.hitObject.game.calculate_x(points[i].x);
            if(this.hitObject.game.is_hardrock) points[i].y = osu.helpers.constants.OSU_GAME_HEIGHT - points[i].y;
            points[i].y = this.hitObject.game.calculate_x(points[i].y);

        }

        //endpoint (technically this is wrong but i no like math)
        var final_x = points[points.length-1].x;
        var final_y = points[points.length-1].y;
        this.hitObject.endX = final_x;
        this.hitObject.endY =final_y;

        //ghetto sliders o baby
        if(this.hitObject.sliderType == osu.objects.sliders.TYPES.LINEAR){


            //TODO: move this out of the if statement once other sliders are done
            sliderGraphics.beginFill(this.hitObject.colour);
            sliderGraphics.lineStyle(5,0xFFFFFF);
            //startpoint
            sliderGraphics.drawCircle(this.hitObject.x, this.hitObject.y, (this.hitObject.size -5 )/2);



            sliderGraphics.drawCircle(final_x, final_y, (this.hitObject.size -5 )/2);



            //Creates border on slider
            sliderGraphics.lineStyle(this.hitObject.size,0xFFFFFF);
            sliderGraphics.moveTo(this.hitObject.x, this.hitObject.y);
            sliderGraphics.lineTo(final_x, final_y);
            //Creates fill on slider
            sliderGraphics.lineStyle(this.hitObject.size-10, this.hitObject.colour);
            sliderGraphics.moveTo(this.hitObject.x, this.hitObject.y);
            sliderGraphics.lineTo(final_x, final_y);
        }

        //convert to texture so it doesnt look ugly :D
        var t = sliderGraphics.generateTexture();
        var sprite = new PIXI.Sprite(t);
        sprite.position.x = sliderGraphics.getBounds().x;
        sprite.position.y = sliderGraphics.getBounds().y;
        sprite.alpha = 0.6;
        this.sliderGraphicsContainer = new PIXI.Container();
        this.sliderGraphicsContainer.addChild(sprite);
        this.initialised = true;
    }

    updatePositions(){
        this.startCircle.updatePositions();

        var moveX = this.originalX - this.hitObject.x;
        var moveY = this.originalY - this.hitObject.y;
        //the container x,y may differ from the hitobject xy so we move it by the difference change.
        this.sliderGraphicsContainer.x -= moveX;
        this.sliderGraphicsContainer.y -= moveY;
        this.originalX = this.hitObject.x;
        this.originalY = this.hitObject.y;
    }
    hit(time){

    }

    draw(cur_time){
        var drawCircle = this.startCircle.draw(cur_time);
        //object is no longer rendered but still might have some logic (eg being missed, is hidden etc)
        if(this.destroyed && !drawCircle){
            if(cur_time < this.hitObject.endTime + 500){
                return true;
            }
            return false;
        }
        //TODO: should this be at the slider endtime, or use start time?
        if(this.drawn && this.hitObject.game.is_hidden && cur_time > this.hitObject.endTime - this.hidden_time){
            this.destroy();
            this.destroyed = true;
        }

        if(!drawCircle){
            //animate slider ?
        }

        if(!this.drawn){
            this.hitObject.game.hit_object_container.addChildAt(this.sliderGraphicsContainer,0);
            this.drawn = true;
        }

        if(!this.destroyed && cur_time > this.hitObject.endTime + 110){
            this.destroy();
            this.destroyed = true;
        }
        return true;
    }

    destroy(){
        this.destroyed = true;
        this.hitObject.game.hit_object_container.removeChild(this.sliderGraphicsContainer);

    }



};
osu.objects.sliders = {
    TYPES: Object.freeze({
        BEZIER: "B",
        LINEAR: "L",
    })



};



/**
 * spinner.js
 * Created by Ugrend on 11/06/2016.
 */
osu = osu || {};
osu.objects = osu.objects || {};
osu.objects.Spinner = class Spinner{
    constructor(hitObject){

    }
    init(){

    }
    draw(){
        return false;
    }

};

/**
 * score.js
 * Created by ugrend on 2/06/2016.
 */

var osu  = osu || {};
osu.score = {


    /*
     Accuracy = Total points of hits / (Total number of hits * 300)
     Total points of hits 	(Number of 50s * 50 + Number of 100s * 100 + Number of 300s * 300)
     Total number of hits 	(Number of misses + Number of 50's + Number of 100's + Number of 300's)

     For reference: 300 = 6/6, 100 = 2/6, 50 = 1/6, Miss = 0/6.

     */
    GRADES: Object.freeze({
        SS: {name:"SS",small_icn:"ranking_X_small",large_icn:"ranking_X"},
        S:  {name:"S",small_icn:"ranking_S_small",large_icn:"ranking_S"},
        A:  {name:"A",small_icn:"ranking_A_small",large_icn:"ranking_A"},
        B:  {name:"B",small_icn:"ranking_B_small",large_icn:"ranking_B"},
        C:  {name:"C",small_icn:"ranking_C_small",large_icn:"ranking_C"},
        D:  {name:"D",small_icn:"ranking_D_small",large_icn:"ranking_D"},
        SSH:  {name:"SSH",small_icn:"ranking_XH_small",large_icn:"ranking_XH"},
        SH:  {name:"SH",small_icn:"ranking_SH_small",large_icn:"ranking_SH"}
    }),


    /**
     *
     * @param h300  {Number}
     * @param h100  {Number}
     * @param h50   {Number}
     * @param hMisses {Number}
     * @returns
     */
    getGrade: function(h300,h100,h50,hMisses,mods){
        /*
         SS = 100% Accuracy
         S = Over 90% 300s, less than 1% 50s and no misses.
         A = Over 80% 300s and no misses OR over 90% 300s.
         B = Over 70% 300s and no misses OR over 80% 300s.
         C = Over 60% 300s.
         D = Anything else.


         Special grades

         Silver SS (SSH) = Normal grade SS with 'hidden' and/or 'flashlight' mod.
         Silver S (SH) = Normal grade S with 'hidden' and/or 'flashlight' mod.

         */
        var is_silver = false;
        for(var i =0; i < mods.length ; i++){
            if(mods[i].code == "FL" || mods[i].code == "HD"){
                is_silver = true;
            }
        }


        var total_hits =  h300 + h100 + h50 + hMisses;
        if(h300 == total_hits){
            if(is_silver) return this.GRADES.SSH;else return this.GRADES.SS
        }
        if((h300/total_hits)*100 > 90) {
            if (hMisses > 0 || (h50 / total_hits) * 100 > 1) {
                return this.GRADES.A;
            }
             if(is_silver) return this.GRADES.SH; else return this.GRADES.S;
        }
        if((h300/total_hits)*100 > 80) {
            if (hMisses > 0) {
                return this.GRADES.B;
            }
            return this.GRADES.A;
        }
        if((h300/total_hits)*100 > 70) {
            if (hMisses > 0) {
                return this.GRADES.C;
            }
            return this.GRADES.B;
        }
        if((h300/total_hits)*100 > 60) {
            return this.GRADES.C;
        }
        return this.GRADES.D;
    },

    getAccuracy: function(h300,h100,h50,hMisses){
        //TODO: This calculation doesn't seem to get same results as game, i must be missing something
        var maxHits = h300 + h100 + h50 + hMisses;
        var percent = (h300 * 300 + h100* 100 + h50 * 50) / (maxHits * 300) * 100;
        return parseFloat(percent).toFixed(2);
    },

    parseAccuracyFromReplay: function (replay) {
        return this.getAccuracy(replay.h300 + replay.hGekis, replay.h100 + replay.hKatus, replay.h50, replay.hMisses)
    }





};
/**
 * settings.js
 * Created by Ugrend on 9/06/2016.
 */


osu = osu || {};
osu.settings = {

    DEFAULTS: Object.freeze({
        background_dim: 0.3,
        master_volume: 1.0,
        music_volume: 0.6,
        sound_effects: 0.8,
        use_beatmap_skins: false,
        use_beatmap_hitsounds: false,

    }),
    SETTINGS:{


        _background_dim: 0.3,
        _master_volume: 1.0,
        _music_volume: 0.6,
        _sound_effects_volume: 0.8,
        _use_beatmap_skins: false,
        _use_beatmap_hitsounds: false,


        get background_dim(){return this._background_dim},
        set background_dim(v) { this._background_dim = v; event_handler.emit(event_handler.EVENTS.SETTINGS_CHANGED);},
        get master_volume(){return this._master_volume;},
        set master_volume(v) { this._master_volume = v; event_handler.emit(event_handler.EVENTS.SETTINGS_CHANGED);},
        get music_volume(){return this._music_volume},
        set music_volume(v) { this._music_volume = v; event_handler.emit(event_handler.EVENTS.SETTINGS_CHANGED);},
        get sound_effects_volume(){return this._sound_effects_volume},
        set sound_effects_volume(v) { this._sound_effects_volume = v; event_handler.emit(event_handler.EVENTS.SETTINGS_CHANGED);},
        get use_beatmap_skins(){return this._use_beatmap_skins},
        set use_beatmap_skins(v) { this._use_beatmap_skins = v; event_handler.emit(event_handler.EVENTS.SETTINGS_CHANGED);},
        get use_beatmap_hitsounds(){return this._use_beatmap_hitsounds},
        set use_beatmap_hitsounds(v) { this._use_beatmap_hitsounds = v; event_handler.emit(event_handler.EVENTS.SETTINGS_CHANGED);},

    },


    init: function () {
        var self = this;
        event_handler.on(event_handler.EVENTS.SETTINGS_CHANGED, this.save_settings.bind(this));

        database.get_data(database.TABLES.OPTIONS,"options", function (e) {
            if(e.data){
                for(var k in e.data){
                    if(e.data.hasOwnProperty(k)){
                        if(k.indexOf("_") == 0){
                            self.SETTINGS[k] = e.data[k];
                        }
                    }
                }
            }
            self.onloaded();
            event_handler.emit(event_handler.EVENTS.SETTINGS_CHANGED);
        });
    },
    save_settings: function () {
        database.update_data(database.TABLES.OPTIONS,"options",this.SETTINGS);
    },

    onloaded: function () {

    }





};

/**
 * main_screen.js
 * Created by Ugrend on 20/06/2016.
 */
var osu = osu || {};
osu.ui = osu.ui || {};
osu.ui.interface = osu.ui.interface || {};
osu.ui.interface.mainscreen = {

    beatmap_count: -1,
    replay_count: -1,
    key_count: 0,
    processed_count: 0,
    displaying_main_screen: false,
    loaded: false,
    beatmap_keys: [],
    beatmaps: [],
    current_selection: false,
    beatmap_selection_template: "",
    replay_selection_template: "",
    $beatmap_section_html: null,
    $replay_section_html: null,
    cached_dom: false,
    events_bound: false,
    replays: [],
    beatmapSearch: null,
    replaySearch: null,
    $currentSelectionHtml: "",


    init: function () {
        this.cacheDom();
        this.bind_events();

        this.$master_volume_slider.val(osu.settings.SETTINGS.master_volume * 100);
        this.$music_volume_slider.val(osu.settings.SETTINGS.music_volume * 100);
        this.$sound_volume_slider.val(osu.settings.SETTINGS.sound_effects_volume * 100);
        this.$background_dim_slider.val(osu.settings.SETTINGS.background_dim * 100);

        var self = this;
        database.get_count(database.TABLES.BEATMAPS, function (count) {
            self.beatmap_count = count;
            self.show_selection();
        });
        database.get_count(database.TABLES.REPLAYS, function (count) {
            self.replay_count = count;
            self.show_selection();
        });
        event_handler.on(event_handler.EVENTS.BEATMAP_LOADED,this.on_load_file.bind(this));
        //event_handler.on(event_handler.EVENTS.REPLAY_LOADED, this.on_load_file.bind(this)); // we may not care about a new replay

    },
    cacheDom: function () {
        if(!this.cached_dom){
            this.beatmap_selection_template = document.getElementById("beatmap_select_template").innerHTML;
            this.replay_selection_template = document.getElementById("replay_select_template").innerHTML;
            this.$beatmap_section_html = $("#song_selection_area");
            this.$replay_section_html = $("#replay_select_area");
            this.mapped_by = document.getElementById("mapped_by");
            this.map_length_and_objects = document.getElementById("map_length_and_objects");
            this.map_object_type_counts = document.getElementById("map_object_type_counts");
            this.map_difficulty = document.getElementById("map_difficulty");
            this.map_name = document.getElementById("map_name");

            this.$beatmap_search_field = $("#filter_maps_search");
            this.$replay_search_field = $("#filter_players_search");

            this.$master_volume_slider = $("#master_volume");
            this.$music_volume_slider = $("#music_volume");
            this.$sound_volume_slider = $("#sound_volume");
            this.$background_dim_slider = $("#background_dim");

            this.cached_dom = true;
        }

    },

    bind_events: function () {
        //init script can be called multiple times if no maps/replays exist
        if(!this.events_bound){
            var self = this;
            this.$beatmap_search_field.on('input', function (e) {
                var searchParam = e.currentTarget.value;
                if(self.beatmapSearch && searchParam != ""){
                    self.$beatmap_section_html.find(".beatmap_preview:not([class*='hidden'])").addClass("hidden");
                    self.beatmapSearch.search(searchParam, function (result) {
                       for(var i = 0; i < result.length ; i++){
                           self.$beatmap_section_html.find("#"+result[i].md5sum).removeClass("hidden");
                       }
                    });
                }else{
                    self.$beatmap_section_html.find(".beatmap_preview").removeClass("hidden");
                    self.$currentSelectionHtml[0].scrollIntoViewIfNeeded();
                }


            });

            this.$replay_search_field.on('input', function (e) {
                var searchParam = e.currentTarget.value;
                if(self.replaySearch && searchParam != ""){
                    self.$replay_section_html.find(".replay_preview:not([class*='hidden'])").addClass("hidden");
                    self.replaySearch.search(searchParam, function (result) {
                        for(var i = 0; i < result.length ; i++){
                            self.$replay_section_html.find("#"+result[i].rMd5Hash).removeClass("hidden");
                        }
                    });
                }else{
                    self.$replay_section_html.find(".replay_preview").removeClass("hidden");
                }
            });

            this.$master_volume_slider.on("input", function (e) {
               osu.settings.SETTINGS.master_volume = e.currentTarget.value / 100;
            });
            this.$music_volume_slider.on("input", function (e) {
                osu.settings.SETTINGS.music_volume = e.currentTarget.value / 100;
            });
            this.$sound_volume_slider.on("input", function (e) {
                osu.settings.SETTINGS.sound_effects_volume = e.currentTarget.value / 100;
            });
            this.$background_dim_slider.on("input", function (e) {
                osu.settings.SETTINGS.background_dim = e.currentTarget.value / 100;
            });


            //On beatmap select click highlight the clicked item, and unhighlight any other items
            this.$beatmap_section_html.on("click",".beatmap_preview", function (event) {
                var clickedObject = $(this);
                var md5sum = clickedObject.attr("id");
                self.highlight_beatmap(clickedObject);
                self.select_beatmap(md5sum, false);
            });

            //on replay click open replay
            $(this.$replay_section_html).on("click",".replay_preview", function (event) {
                var id = $(this).attr('id');
                for(var i = 0; i < self.replays.length ; i ++){
                    if(self.replays[i].rMd5Hash == id){
                        replay = self.replays[i];
                        break;
                    }
                }
                loadBeatMap();
            });

            //Escape out of replay back to main screen
            document.onkeyup = function (e) {
                e = e || window.event;
                //27 is Escape
                if(e.keyCode == 27){
                    if(self.loaded && !self.displaying_main_screen){
                        //if a replay is playing we can stop it
                        event_handler.emit(event_handler.EVENTS.STOP_REPLAY);
                        self.show_main_screen();
                    }
                }

            }
        }

        this.events_bound = true;


    },
    highlight_beatmap($beatmapHtml){
        this.$currentSelectionHtml =$beatmapHtml;
        this.$beatmap_section_html.find(".song_preview_row").removeClass('song_preview_unselected').removeClass('song_preview_mouseover').removeClass('song_preview_selected').addClass('song_preview_unselected');
        //resize everything back to unselected size
        this.$beatmap_section_html.find(".beatmap_preview").removeClass("col-xs-9").removeClass("col-xs-8").removeClass("col-xs-7")
            .removeClass('col-xs-offset-5').removeClass('col-xs-offset-4').removeClass('col-xs-offset-3')
            .addClass('col-xs-offset-5').addClass('col-xs-7');
        $beatmapHtml.removeClass("col-xs-9").removeClass("col-xs-8").removeClass("col-xs-7")
            .removeClass('col-xs-offset-5').removeClass('col-xs-offset-4').removeClass('col-xs-offset-3')
            .addClass('col-xs-offset-3').addClass('col-xs-9');
        $beatmapHtml.find('.song_preview_row').removeClass('song_preview_unselected').addClass('song_preview_selected');
        $beatmapHtml[0].scrollIntoViewIfNeeded();

    },


    select_beatmap(md5sum,highlight_map){
        this.$replay_section_html.html(""); //clear current replay select




        var beatmap = null;
        for(var i = 0; i < this.beatmaps.length ; i++){
            if(this.beatmaps[i].md5sum == md5sum){
                beatmap = this.beatmaps[i];
                break;
            }
        }

        this.map_name.innerHTML = Mustache.render("{{source}} "+
            "({{#artistunicode}}{{artistunicode}}{{/artistunicode}}{{^artistunicode}}{{artist}}{{/artistunicode}}) - "+
            "{{#titleunicode}}{{titleunicode}}{{/titleunicode}}{{^titleunicode}}{{title}}{{/titleunicode}}  [{{version}}]",beatmap);
        this.mapped_by.innerHTML = "Mapped by " + beatmap.creator;
        this.map_length_and_objects.innerHTML =
            "Length: " + beatmap.song_length +
            " BPM: " +  (beatmap.maxBPM ? beatmap.maxBPM + " - " : "") + beatmap.minBPM  +
            " Objects: " + beatmap.objects;
        this.map_object_type_counts.innerHTML =
            "Circles: " +  beatmap.circles  +
            " Sliders: "+  beatmap.sliders  +
            " Spinners " + beatmap.spinners ;
        this.map_difficulty.innerHTML =
            "CS: " + beatmap.circleSize +
            " AR: " + beatmap.approachRate +
            " OD: " + beatmap.overallDifficulty +
            " HP: " + beatmap.HPDrain +
            " Stars: " + beatmap.stars;
        beatmap.play_song();
        beatmap.load_background();
        var self = this;
        database.get_data_from_index(database.TABLES.REPLAYS,database.INDEXES.REPLAYS.BEATMAP_ID,beatmap.md5sum, function (replays) {
            self.replays = replays;
            replays.sort(function (a,b) {
                if (a.tScore > b.tScore)
                    return -1;
                if (a.tScore < b.tScore)
                    return 1;
                //if same score (rare but would happen on easier maps) sort by date played
                var aDate = new Date(a.time_played);
                var bDate = new Date(b.time_played);
                if(aDate > bDate){
                    return -1;
                }
                if(aDate < bDate){
                    return 1;
                }
                return 0;
            });
            for(i = 0; i < self.replays.length; i++){
                self.replays[i].grade_img = osu.skins[osu.score.GRADES[self.replays[i].grade].small_icn];
            }

            self.replaySearch = new Bloodhound({
                datumTokenizer: function (datum) {
                    return Bloodhound.tokenizers.whitespace(datum.playerName);
                },
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: self.replays
            });
            self.render_replay(self.replays);


        });
        this.current_selection = beatmap;
        if(highlight_map){
                this.highlight_beatmap($("#"+md5sum));
        }
    },
    render_replay(replays){
        var content = Mustache.render(this.replay_selection_template, {replays:replays});
        this.$replay_section_html.append(content);
    },


    show_selection: function () {
        if(this.beatmap_count > 0 && this.replay_count > 0){
            var self = this;
            database.get_all_keys(database.TABLES.BEATMAPS, function (keys) {
                self.key_count = keys.length; //even though this should be same as beatmap count just to be safe we will check again
                for(var i = 0; i < keys.length ; i++){
                    self.beatmap_keys.push(keys[i]);
                    var beatmap = new osu.beatmaps.BeatmapPreview(keys[i], function () {
                        self.processed_count++;
                        self.songs_processed();
                    });
                    self.beatmaps.push(beatmap);
                }
            });
        }
        if(this.beatmap_count == 0 || this.replay_count == 0){
            document.getElementById("loading").className = "hidden";
            document.getElementById("no_beatmaps_replays").className = "";
        }
    },
    songs_processed: function () {
        if(this.key_count == this.processed_count){
            this.beatmaps.sort(function (a,b) {
                if (a.title < b.title)
                    return -1;
                if (a.title > b.title)
                    return 1;
                //if same beatmap order by star difficulty
                if(a.stars < b.stars){
                    return -1;
                }
                if(a.stars > b.stars){
                    return 1;
                }
                return 0;
            });
            for(var i =0; i < this.beatmaps.length; i++){
                this.render_song(this.beatmaps[i]);
            }
            this.beatmapSearch = new Bloodhound({
                datumTokenizer: function (datum) {
                    var matchon = datum.title + " " + datum.artist + " " + datum.tags;
                    return Bloodhound.tokenizers.whitespace(matchon);
                },
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                local: this.beatmaps
            });
            this.show_main_screen();
        }
    },
    show_main_screen: function () {
        document.getElementById("loading").className = "hidden";
        document.getElementById("no_beatmaps_replays").className = "hidden";
        document.getElementById("container").className = "";
        document.getElementById("render_zone").className = "hidden";
        this.loaded = true;
        this.displaying_main_screen = true;
        if(!this.current_selection){
            //select random beatmap
            this.select_beatmap(this.beatmaps[Math.floor(Math.random()*this.beatmaps.length)].md5sum, true);
        }else{
            this.current_selection.load_background();
        }
        this.$beatmap_search_field.focus();
    },
    hide_main_screen: function () {
        document.getElementById("container").className = "hidden";
        this.displaying_main_screen = false;
        this.remove_background();
    },

    set_background: function (background_data) {
        document.body.style.background = "url("+background_data+") no-repeat center fixed";
        document.body.style.backgroundSize = "100% 100%";
    },
    remove_background: function () {
        document.body.style.background = "";
    },
    display_new_song: function (md5sum) {

        if(this.displaying_main_screen){
            //make main selection

        }
    },

    load_song: function (md5sum) {
        var self = this;
        var curr_length = this.beatmaps.length;
        var beatmap = new osu.beatmaps.BeatmapPreview(md5sum, function () {
            self.render_song(self.beatmaps[curr_length+1]); //some reason we havent finished loading on this callback ??
            self.display_new_song(md5sum);
        });
        this.beatmaps.push(beatmap);
        this.beatmap_keys.push(md5sum);
    },

    render_song: function (beatmap) {
        var content = Mustache.render(this.beatmap_selection_template, {beatmaps:beatmap});
        this.$beatmap_section_html.append(content);
    },

    on_load_file: function (data) {
        if(!this.loaded){
            this.init();
        }
        else {
            for(var i = 0; i < data.md5sums.length; i++){
                if(this.beatmap_keys.indexOf(data.md5sums[i]) == -1){
                    this.load_song(data.md5sums[i])
                }
            };

        }
    }

};

/**
 * osu_game.js
 * Created by Ugrend on 5/06/2016.
 */


/*

 Main Game Window

 x ranges from 0 to 512 (inclusive) and y ranges from 0 to 384 (inclusive).


 4:3 aspect ratio
 */


var osu = osu || {};
osu.ui = osu.ui || {};
osu.ui.interface = osu.ui.interface || {};
osu.ui.interface.osugame = {


    master_container: new PIXI.Container(),
    replay_data: [],
    key_1_count: 0,
    key_2_count: 0,
    key_3_count: 0,
    key_4_count: 0,
    key_1_pressed: false,
    key_2_pressed: false,
    key_3_pressed: false,
    key_4_pressed: false,
    beatmap: {},
    expected_replay_movment_time: null,
    gone_over: 0,
    has_started: false,
    audioLeadIn: 0,
    countdown_started: false,
    curr_replay_frame: 0,
    mods: [],
    oldest_object_position: 0,
    replay_intro_time: -1,
    end_skip_frame: -1,
    skip_frames: [],
    flash_count: 0,
    warning_arrow_times: [],
    break_times: [],
    replay_played_by_text: "",
    hit_objects: [],
    events_bound: false,


    getRenderWidth: function () {
        return osu.ui.renderer.renderWidth;
    },

    getRenderHeight: function () {
        return osu.ui.renderer.renderHeight;
    },
    create_dimmer: function () {


        this.background_dimmer = this.background_dimmer || new PIXI.Container();
        this.background_dimmer.removeChildren();
        var dimmer = new PIXI.Graphics();
        dimmer.beginFill(0x0, osu.settings.SETTINGS.background_dim);
        dimmer.drawRect(0, 0, this.getRenderWidth(), this.getRenderHeight());
        this.background_dimmer.addChild(dimmer);


    },


    create_background: function () {

        this.beatmap.background = this.beatmap.background || ""; //prevent pixi breaking on undefined background
        var background = PIXI.Texture.fromImage(this.beatmap.background);
        var background_sprite = new PIXI.Sprite(background);
        background_sprite.width = this.getRenderWidth();
        background_sprite.height = this.getRenderHeight();
        this.master_container.addChild(background_sprite);

        this.create_dimmer();
        this.master_container.addChild(this.background_dimmer);


    },


    tint_untint_key: function (key, do_tint) {
        if (do_tint) {
            key.tint = 0xFFFF00;
        }
        else {
            key.tint = 0xFFFFFF;
        }
    },


    create_key_press: function () {
        this.keypress_area = new PIXI.Container();
        var keypress_texture = PIXI.Texture.fromImage(osu.skins.inputoverlay_key);
        this.keypress_1 = new PIXI.Sprite(keypress_texture);
        this.keypress_2 = new PIXI.Sprite(keypress_texture);
        this.keypress_3 = new PIXI.Sprite(keypress_texture);
        this.keypress_4 = new PIXI.Sprite(keypress_texture);
        //TODO: Style text
        this.keypress_1_Text = new PIXI.Text(this.key_1_count > 0 && this.key_1_count.toString() || "K1");
        this.keypress_2_Text = new PIXI.Text(this.key_2_count > 0 && this.key_2_count.toString() || "K2");
        this.keypress_3_Text = new PIXI.Text(this.key_3_count > 0 && this.key_3_count.toString() || "M1");
        this.keypress_4_Text = new PIXI.Text(this.key_4_count > 0 && this.key_4_count.toString() || "M2");

        this.keypress_1.tint = 0xFFFF00;


        this.keypress_1.x = this.getRenderWidth() - 40;
        this.keypress_1.y = this.getRenderHeight() / 2 - 50;
        this.keypress_1.anchor.set(0.5);
        this.keypress_1_Text.anchor.set(0.5);
        this.keypress_1_Text.x = this.keypress_1.x;
        this.keypress_1_Text.y = this.keypress_1.y;


        this.keypress_2.x = this.getRenderWidth() - 40;
        this.keypress_2.y = this.getRenderHeight() / 2;
        this.keypress_2.anchor.set(0.5);
        this.keypress_2_Text.anchor.set(0.5);
        this.keypress_2_Text.x = this.keypress_2.x;
        this.keypress_2_Text.y = this.keypress_2.y;

        this.keypress_3.x = this.getRenderWidth() - 40;
        this.keypress_3.y = this.getRenderHeight() / 2 + 50;
        this.keypress_3.anchor.set(0.5);
        this.keypress_3_Text.anchor.set(0.5);
        this.keypress_3_Text.x = this.keypress_3.x;
        this.keypress_3_Text.y = this.keypress_3.y;

        this.keypress_4.x = this.getRenderWidth() - 40;
        this.keypress_4.y = this.getRenderHeight() / 2 + 100;
        this.keypress_4.anchor.set(0.5);
        this.keypress_4_Text.anchor.set(0.5);
        this.keypress_4_Text.x = this.keypress_4.x;
        this.keypress_4_Text.y = this.keypress_4.y;


        this.keypress_area.addChild(this.keypress_1);
        this.keypress_area.addChild(this.keypress_2);
        this.keypress_area.addChild(this.keypress_3);
        this.keypress_area.addChild(this.keypress_4);
        this.keypress_area.addChild(this.keypress_1_Text);
        this.keypress_area.addChild(this.keypress_2_Text);
        this.keypress_area.addChild(this.keypress_3_Text);
        this.keypress_area.addChild(this.keypress_4_Text);

        this.master_container.addChild(this.keypress_area);


    },


    create_cursor: function () {
        this.cursor = new PIXI.Container();
        var cursor_texture = PIXI.Texture.fromImage(osu.skins.cursor);
        var cursor_middle_texture = PIXI.Texture.fromImage(osu.skins.cursormiddle);
        var cursor_sprite = new PIXI.Sprite(cursor_texture);
        var cursor_middle_sprite = new PIXI.Sprite(cursor_middle_texture);

        cursor_sprite.anchor.set(0.5);
        cursor_middle_sprite.anchor.set(0.5);

        this.cursor.addChild(cursor_sprite);
        this.cursor.addChild(cursor_middle_sprite);
        this.cursor.x = this.getRenderWidth() / 2;
        this.cursor.y = this.getRenderHeight() / 2;
        this.master_container.addChild(this.cursor);
    },
    create_skip_container: function () {
        this.skip_container = new PIXI.Container();
        var skip_texture = new PIXI.Texture.fromImage(osu.skins.play_skip);
        var skip_sprite = new PIXI.Sprite(skip_texture);
        skip_sprite.anchor.set(0.5);
        skip_sprite.x = this.calculate_x(512);
        skip_sprite.y = this.calculate_y(384);
        skip_sprite.interactive = true;
        skip_sprite.on("mouseup", this.skip_intro.bind(this));
        this.skip_container.visible = false;

        this.skip_container.addChild(skip_sprite);
        this.master_container.addChild(this.skip_container);

    },

    create_play_warn_arrows_container: function () {
        this.arrow_container = new PIXI.Container();
        var arrow_texture = new PIXI.Texture.fromImage(osu.skins.play_warningarrow);
        var skip_arrow_sprite_1 = new PIXI.Sprite(arrow_texture);
        var skip_arrow_sprite_2 = new PIXI.Sprite(arrow_texture);
        var skip_arrow_sprite_3 = new PIXI.Sprite(arrow_texture);
        var skip_arrow_sprite_4 = new PIXI.Sprite(arrow_texture);
        skip_arrow_sprite_1.anchor.set(0.5);
        skip_arrow_sprite_2.anchor.set(0.5);
        skip_arrow_sprite_3.anchor.set(0.5);
        skip_arrow_sprite_4.anchor.set(0.5);
        skip_arrow_sprite_1.x = this.calculate_x(25);
        skip_arrow_sprite_1.y = this.calculate_y(19);
        skip_arrow_sprite_2.scale.x = -1; //flip arrow
        skip_arrow_sprite_2.x = this.calculate_x(487);
        skip_arrow_sprite_2.y = this.calculate_y(19);


        skip_arrow_sprite_3.x = this.calculate_x(25);
        skip_arrow_sprite_3.y = this.calculate_y(365);
        skip_arrow_sprite_4.scale.x = -1; //flip arrow
        skip_arrow_sprite_4.x = this.calculate_x(487);
        skip_arrow_sprite_4.y = this.calculate_y(365);


        this.arrow_container.addChild(skip_arrow_sprite_1);
        this.arrow_container.addChild(skip_arrow_sprite_2);
        this.arrow_container.addChild(skip_arrow_sprite_3);
        this.arrow_container.addChild(skip_arrow_sprite_4);
        this.arrow_container.visible = false;
        this.master_container.addChild(this.arrow_container);

    },
    create_success_container: function () {
        this.success_container = new PIXI.Container();
        var success_texture = new PIXI.Texture.fromImage(osu.skins.section_pass);
        var success_sprite = new PIXI.Sprite(success_texture);
        success_sprite.anchor.set(0.5);
        success_sprite.x = this.getRenderWidth() / 2;
        success_sprite.y = this.getRenderHeight() / 2;
        this.success_container.visible = false;
        this.success_container.addChild(success_sprite);
        this.master_container.addChild(this.success_container);
    },
    create_fail_container: function () {
        this.fail_container = new PIXI.Container();
        var fail_texture = new PIXI.Texture.fromImage(osu.skins.section_fail);
        var fail_sprite = new PIXI.Sprite(fail_texture);
        fail_sprite.anchor.set(0.5);
        fail_sprite.x = this.getRenderWidth() / 2;
        fail_sprite.y = this.getRenderHeight() / 2;
        this.fail_container.visible = false;
        this.fail_container.addChild(fail_sprite);
        this.master_container.addChild(this.fail_container);
    },

    create_replay_by_text: function () {
        this.replay_text = new PIXI.Text(this.replay_played_by_text, {
            font: "20px Arial",
            fill: "#FFFFFF"
        });
        this.replay_text.y = this.getRenderHeight() / 10;
        this.replay_text.x = this.getRenderWidth() / 2;
        this.master_container.addChild(this.replay_text);
    },
    create_mod_container: function () {
        for (var i = 0; i < this.mods.length; i++) {
            if (this.mods[i].icon != "") {
                console.log(this.mods[i]);
                var modpng = PIXI.Texture.fromImage(osu.skins[this.mods[i].icon]);
                var modSprite = new PIXI.Sprite(modpng);
                modSprite.position.y = this.getRenderHeight() / 5;
                modSprite.position.x = (this.getRenderWidth() * .95) - (i * 50);
                modSprite.anchor.set(0.5);
                this.master_container.addChild(modSprite);
            }
        }
    },


    create_master_container: function () {
        this.hit_object_container = new PIXI.Container();

        this.create_background();
        this.create_key_press();
        this.create_mod_container();
        this.create_replay_by_text();
        this.master_container.addChild(this.hit_object_container);
        this.create_skip_container();
        this.create_success_container();
        this.create_fail_container();
        this.create_play_warn_arrows_container();
        this.create_cursor();

    },

    flash_warning_arrows: function () {
        if (this.flash_count < 15) {
            var self = this;
            setTimeout(function () {
                self.arrow_container.visible = !self.arrow_container.visible;
                self.flash_count++;
                self.flash_warning_arrows()
            }, 150);

        } else {
            this.arrow_container.visible = false;
            this.flash_count = 0;
        }

    },

    show_success: function () {
        this.success_container.visible = true;
        osu.audio.sound.section_success.play();
        var self = this;
        setTimeout(function () {
            self.success_container.visible = false;
        }, 4000);
    },
    show_failure: function () {
        this.fail_container.visible = true;
        var self = this;
        setTimeout(function () {
            self.fail_container.visible = false;
        }, 4000);
    },
    bind_events: function () {
        if (!this.events_bound) {
            event_handler.on(event_handler.EVENTS.SETTINGS_CHANGED, this.create_dimmer.bind(this));
            this.events_bound = true;
        }

    },

    initGame: function () {
        event_handler.off(event_handler.EVENTS.RENDER, "replay_text"); //unsubscrbe incase another replay closed early
        osu.ui.renderer.fixed_aspect = true;
        osu.ui.renderer.start();
        this.create_master_container();
        osu.ui.renderer.clearStage();
        osu.ui.renderer.addChild(this.master_container);
        this.bind_events();

        this.has_started = false;
        this.countdown_started = false;
        this.curr_replay_frame = 0;
        this.expected_replay_movment_time = null;
        this.hit_objects = [];
        this.oldest_object_position = 0;
        this.warning_arrow_times = [];
        this.is_hidden = false;
        this.is_hardrock = false;
        this.is_easy = false;
        this.is_halftime = false;
        this.is_doubletime = false;
        for (var i = 0; i < this.mods.length; i++) {
            var mod = this.mods[i].code;
            if (mod == "HD") this.is_hidden = true;
            if (mod == "HR") this.is_hardrock = true;
            if (mod == "EZ") this.is_easy = true;
            if (mod == "DT" || mod == "NT") this.is_doubletime = true;
            if (mod == "HT") this.is_halftime = true;

        }

        for (i = 0; i < this.beatmap.map_data.events.length; i++) {
            //2 looks to be breaks
            if (this.beatmap.map_data.events[i][0] == "2") {
                var startTime = parseInt(this.beatmap.map_data.events[i][1]);
                var endTime = parseInt(this.beatmap.map_data.events[i][2]) - 2300
                if (this.is_doubletime) {
                    startTime *= osu.helpers.constants.DOUBLE_TIME_MULTI;
                    endTime *= osu.helpers.constants.DOUBLE_TIME_MULTI;
                }

                this.break_times.push(startTime);
                this.warning_arrow_times.push(endTime);
            }
        }
        var comboNum = 0;
        var comboColour = 0;
        var approachRate = parseInt(this.beatmap.map_data.difficulty.ApproachRate);
        if (this.is_hardrock) {
            approachRate = approachRate * 1.4;
            if (approachRate > 10) approachRate = 10;
        }
        if (this.is_easy) approachRate = approachRate / 2;


        var difficultyCircleSize = parseInt(this.beatmap.map_data.difficulty.CircleSize);
        if (this.is_hardrock && difficultyCircleSize < 7) difficultyCircleSize += 1;
        if (this.is_easy && difficultyCircleSize > 1) difficultyCircleSize -= 1; //TODO: work out if that's correct
        var unScaledDiameter = (108.848 - (difficultyCircleSize * 8.9646));
        var circleSize = (this.getRenderWidth() / 640) * unScaledDiameter;

        this.approachTime = 0;
        if (approachRate < 5) {
            this.approachTime = (1800 - (approachRate * 120))
        } else {
            this.approachTime = (1200 - ((approachRate - 5) * 150));
        }
        if (this.is_doubletime) this.approachTime = this.approachTime - (this.approachTime * .33);

        for (i = 0; i < this.beatmap.map_data.hit_objects.length; i++){
            var hitObject = new osu.objects.HitObject(this.beatmap.map_data.hit_objects[i], circleSize, this.approachTime, this);
            if (comboNum == 0 || hitObject.newCombo) {
                comboNum = 1;
                if (comboColour == osu.skins.COMBO_COLOURS.length - 1) {
                    comboColour = 0;
                }
                else {
                    comboColour++;
                }
            } else {
                comboNum++;
            }
            hitObject.colour = osu.skins.COMBO_COLOURS[comboColour];
            hitObject.combo = comboNum;

            this.hit_objects.push(hitObject);
        }

        osu.objects.HitObjectParser.create_stacks(this.hit_objects, parseFloat(this.beatmap.map_data.general.StackLeniency) || 0.7, unScaledDiameter, this.is_hardrock);
        osu.objects.HitObjectParser.calculate_follow_points(this.hit_objects, this);

        this.audioLeadIn = parseInt(this.beatmap.map_data.general.AudioLeadIn);
        if (this.is_doubletime) this.audioLeadIn = this.audioLeadIn * osu.helpers.constants.DOUBLE_TIME_MULTI;


        //calculate x,y prior as processing slowly casues it to get out of sync
        //might have to calculate replay times as time passed, as it is starting to get out of sync

        if (!replay.been_rendered) {
            for (var i = 0; i < this.replay_data.length; i++) {
                if (this.replay_data[i].length == 4) {
                    this.replay_data[i][1] = this.calculate_x(this.replay_data[i][1]);
                    this.replay_data[i][2] = this.calculate_y(this.replay_data[i][2]);
                    if (this.is_doubletime) {
                        //seems replay data also needs to be speed up
                        this.replay_data[i][0] *= osu.helpers.constants.DOUBLE_TIME_MULTI;
                    }
                }
            }
            replay.been_rendered = true;
        }

        this.skip_frames = [];

        //calculate skip values
        var skip_time = -1;
        var skip_frame = -1;
        this.end_skip_frame = -1;
        var time_count = 0;
        for (var i = 0; i < this.replay_data.length; i++) {
            if (this.replay_data[i][2] < 0 && this.replay_data[i][0] > 0) {
                skip_time = this.replay_data[i][0];
                skip_frame = i;
                break;
            }
            if (i > 5) {
                //no need to go too far into the future
                break;
            }
        }
        if (skip_time > -1) {
            this.warning_arrow_times.push(skip_time);
            for (var i = skip_frame + 1; i < this.replay_data.length; i++) {
                if (this.replay_data[i][0] >= 0) {
                    if (time_count < skip_time) {
                        time_count += this.replay_data[i][0]
                    } else {
                        this.end_skip_frame = i;
                        break;
                    }
                }
            }
            var time_difference = time_count - skip_time;
            if (time_difference > 0) {
                var i = this.end_skip_frame;
                while (time_difference > 0) {
                    var remainder = time_difference % this.replay_data[i][0];
                    if (remainder > 0 && remainder != time_difference) {
                        this.skip_frames.push({
                            frame: i,
                            minus: remainder
                        });
                        time_difference -= remainder;
                        i++
                    } else {
                        this.skip_frames.push({
                            frame: i,
                            minus: remainder
                        });
                        time_difference = 0;

                    }

                }

            }
        } else {
            /*TODO: SEEMS IF 3rd object in replay array if negative you need to 'take' that time away from the replay or DELAY the start of the song by that much (BUT NOT ALL THE TIME)
             *       However I am not sure if the song already has a audioleadin does it also get taken away or not :S
             *       All replays do seem to have a negative in this position
             *       everything will freeze in sync = Positive X,y negative time has audio leadin
             *       Cold Green Eyes = has skip sequence in sync negative time, positve x,y,
             *       kabaneri = no audio leadin no skip, positive x,y negative time , OUT OF SYNC by the time set in here (349 MS)
             *
             *       Maybe if no audio leadin, no skip , no etc theres a min intro time of 349ms?
             *          THIS IS NOT THE CASE
             *
             *       FREEDOMDIVE , no audio leadin, no skip , no etc, setting intro time of 349ms CAUSED OUT OF SYNC by 349MS
             *       NEED TO LOAD NEGATIVE FROM REPLAY NOT FORCE 349ms
             *
             *         Replay data must have something with break data in it soemwhere, everything will freeze- time freeze seems to get slightly out of sync after a break
             *         however insane difficulty with DT, on the break the replay gets WAY WAY out of sync and ends up being way way way ahead of the song
             *         Watching side by side with real game, the beatmap itself seems in sync, its the replay that breaks
             *
             *         Skips are completly broken with DT
             *
             */
            if (this.replay_data[2][0] < 0) {
                if (this.audioLeadIn == 0) {
                    this.audioLeadIn = this.replay_data[2][0] * -1;
                    if (this.is_doubletime) this.audioLeadIn *= osu.helpers.constants.DOUBLE_TIME_MULTI;
                }

            }


        }

        event_handler.on(event_handler.EVENTS.RENDER, this.move_replay_text.bind(this), "replay_text")

    },

    move_replay_text: function () {
        if (this.replay_text.x < (-this.replay_text.width + 5)) {
            this.replay_text.x = this.getRenderWidth();
        }
        this.replay_text.x -= 1.5;
    },

    /*osu coords are 512/384 but we dont want 0,512/etc to appear almost off screen
     So instead will devide by a bigger but same aspect ratio and increase the original x/y by the difference/2
     */
    calculate_x: function (x) {
        x = parseInt(x);
        var result = (this.getRenderWidth() / 640) * (x + 64);
        return result;
    },
    calculate_y: function (y) {
        y = parseInt(y);
        return (this.getRenderHeight() / 480) * (y + 48);
    },
    calculate_original_x: function (x) {
        x = parseInt(x);
        return (x + 64) / (this.getRenderWidth() / 640) ;

    },
    calculate_original_y: function (y) {
        y = parseInt(y);
        return   (y + 48) / (this.getRenderHeight() / 480);
    },

    render_object: function () {

        var time = Date.now() - this.date_started;
        for (var x = 0; x < this.warning_arrow_times.length; x++) {
            if (time > this.warning_arrow_times[x]) {
                this.warning_arrow_times.splice(x, 1);
                this.flash_warning_arrows();
                break;
            }
        }
        for (var x = 0; x < this.break_times.length; x++) {
            if (time > this.break_times[x] + 2000) {
                this.break_times.splice(x, 1);
                //TODO: check performance to toggle correct break screen
                this.show_success();
                break;
            }
        }

        for (var i = this.oldest_object_position; i < this.hit_objects.length; i++) {
            if (this.hit_objects[i].startTime - this.approachTime > time) {
                break;
            }
            //draw will return false if the object has been destroyed
            //if it has been destroyed we will set the last object count to that pos so we don't iterate over all the objects later on
            if (!this.hit_objects[i].draw(time)) {
                //only allow this to icrement by 1 in case a object is still drawing like a slider.
                if (this.oldest_object_position + 1 == i) {
                    this.oldest_object_position = i;
                }

            }
        }
    },

    skip_intro: function () {
        if (this.replay_intro_time != -1) {
            for (var i = 0; i < this.skip_frames.length; i++) {
                var frame = this.skip_frames[i].frame;
                var minus = this.skip_frames[i].minus;
                this.replay_data[frame][0] -= minus
            }
            osu.audio.music.set_position(this.replay_intro_time / 1000);
            this.curr_replay_frame = this.end_skip_frame;
            this.expected_replay_movment_time = null;// clear current movement frame
            //set the time we started back in time so objects will spawn
            var elapsed_time = Date.now() - this.date_started;

            this.date_started -= (this.replay_intro_time - elapsed_time);

        }

    },


    game_loop: function () {
        //TODO: check if i need to do something with replays also
        if (!this.has_started && this.audioLeadIn == 0) {
            if (this.is_doubletime) osu.audio.music.set_playback_speed(1.5);
            osu.audio.music.start();
            this.date_started = Date.now();
            this.has_started = true;
        } else {

            if (!this.countdown_started) {
                var self = this;
                setTimeout(function () {
                    self.audioLeadIn = 0;
                }, this.audioLeadIn);
                this.countdown_started = true;
            }

        }
        var difference = 0;
        var time = Date.now();
        if (this.has_started) {
            if (this.replay_intro_time > -1 && this.date_started + this.replay_intro_time < Date.now()) {
                this.replay_intro_time = -1;
                this.skip_container.visible = false;
            }


            this.render_object();
        }


        if (this.expected_replay_movment_time) {

            if (time < this.expected_replay_movment_time) {
                // isnt time yet
                setTimeout(this.game_loop.bind(this), 0);
                return;
            }
            // if we have gone over remove the difference from next action to keep in sync
            difference = time - this.expected_replay_movment_time;
        }

        if (this.replay_data.length == this.curr_replay_frame) {
            this.time_finished = Date.now();
            this.cursor.x = this.getRenderWidth() / 2;
            this.cursor.y = this.getRenderHeight() / 2;
            event_handler.off(event_handler.EVENTS.RENDER, "replay_text");
            osu.ui.interface.scorescreen.renderScoreScreen();
            return;
        }
        var next_movment = this.replay_data[this.curr_replay_frame];
        this.curr_replay_frame++;
        if (next_movment.length == 4) {

            var x = next_movment[1];
            var y = next_movment[2];

            if (next_movment[0] < 0 || next_movment[2] < 0) {
                /*
                 TODO: SEEMS IF 3rd object in array if negative you need to 'take' that time away from the replay or DELAY the start of the song by that much
                 It seems if Y coord is negative it indicates how much time to skip ahead
                 I have had a map replay where it will go



                 8383T , -500Y

                 which does seem to be the skip value

                 on the next frame
                 -8383 , 310Y
                 Which would also to be with the skip but i cant see how it would be used
                 The replay would then continue as normal

                 To skip I would need to calculate the time spent in the skip duration and skip that far ahead in the replay


                 */
                if (next_movment[2] < 0 && next_movment[0] > 0) {
                    this.replay_intro_time = next_movment[0];
                    this.skip_container.visible = true;
                }
                this.cursor.x = x;
                this.cursor.y = y;
                this.expected_replay_movment_time = null;
                this.game_loop();
            }
            else {
                var next_tick = next_movment[0] - difference;
                this.expected_replay_movment_time = Date.now() + next_tick;
                this.cursor.x = x;
                this.cursor.y = y;
                this.game_loop();
            }
        }
        else {
            this.expected_replay_movment_time = null;
            this.game_loop();
        }

    }


};
/**
 var keys_pressed = osu.keypress.getKeys(parseInt(next_movment[3]));
 var tint_1 = false;
 var tint_2 = false;
 var tint_3 = false;
 var tint_4 = false;
 //TODO: fix this
 for (var k in osu.keypress.KEYS) {
                var key_int = osu.keypress.KEYS[k];
                if(keys_pressed.indexOf(key_int) != -1){
                    if(key_int == osu.keypress.KEYS.NONE){
                        tint_1 = false;
                        tint_2 = false;
                        tint_3 = false;
                        tint_4 = false;
                    }
                    if(key_int == osu.keypress.KEYS.K1){
                        tint_1 = true;
                    }
                    if(key_int == osu.keypress.KEYS.K2){
                        tint_2 = true;
                    }
                    if(key_int == osu.keypress.KEYS.M1){
                        tint_3 = true;
                    }
                    if(key_int == osu.keypress.KEYS.M2){
                        tint_4 = true;
                    }
                }

            }


 this.tint_untint_key(this.keypress_1,tint_1);
 this.tint_untint_key(this.keypress_2,tint_2);
 this.tint_untint_key(this.keypress_3,tint_3);
 this.tint_untint_key(this.keypress_4,tint_4);






 **/
/**
 * scorescreen.js
 * Created by Ugrend on 4/06/2016.
 */


var osu = osu || {};
osu.ui = osu.ui || {};
osu.ui.interface = osu.ui.interface || {};
osu.ui.interface.scorescreen = {
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
        font: 'bold ' + Math.round((osu.ui.renderer.renderHeight + osu.ui.renderer.renderWidth)/32).toString() + 'px  Lucida Sans Unicode',
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


        var hit300png = PIXI.Texture.fromImage(osu.skins.hit300);
        var hit300gpng = PIXI.Texture.fromImage(osu.skins.hit300g);
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


        var hit100png = PIXI.Texture.fromImage(osu.skins.hit100);
        var hit100kpng = PIXI.Texture.fromImage(osu.skins.hit100k);
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


        var hit50png = PIXI.Texture.fromImage(osu.skins.hit50);
        var hit0png = PIXI.Texture.fromImage(osu.skins.hit0);
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
        var gradepng = PIXI.Texture.fromImage(osu.skins[osu.score.GRADES[this.grade].large_icn]);
        var gradeSprite = new PIXI.Sprite(gradepng);

        gradeSprite.position.x = this.getRenderWidth() *.8;
        gradeSprite.position.y = this.getRenderHeight() *.4;
        gradeSprite.width = this.getRenderWidth() *.3;
        gradeSprite.height = this.getRenderHeight() *.5;
        gradeSprite.anchor.set(0.5);





        var replaypng = PIXI.Texture.fromImage(osu.skins.pause_replay);
        var replay_Sprite = new PIXI.Sprite(replaypng);
        replay_Sprite.position.x = this.getRenderWidth() *.8;
        replay_Sprite.position.y = this.getRenderHeight() *.8;
        replay_Sprite.width = this.getRenderWidth() *.2;
        replay_Sprite.height = this.getRenderHeight() *.2;
        replay_Sprite.anchor.set(0.5);
        replay_Sprite.interactive = true;
        replay_Sprite.on("mouseup", this.start_replay.bind(this));


        var backpng = PIXI.Texture.fromImage(osu.skins.menu_back);
        var back_Sprite = new PIXI.Sprite(backpng);
        back_Sprite.position.x = this.getRenderWidth() *.1;
        back_Sprite.position.y = this.getRenderHeight() *.9;
        back_Sprite.interactive = true;
        back_Sprite.width = this.getRenderWidth() *.2;
        back_Sprite.height = this.getRenderHeight() *.2;
        back_Sprite.anchor.set(0.5);
        back_Sprite.on("mouseup", this.exit.bind(this));

        this.master_container.addChild(gradeSprite);
        for(var i = 0; i < this.mods.length ; i++ ){
            if(this.mods[i].icon != ""){
                var modpng = PIXI.Texture.fromImage(osu.skins[this.mods[i].icon]);
                var modSprite = new PIXI.Sprite(modpng);
                modSprite.position.y = this.getRenderHeight() *.7;
                modSprite.position.x = (this.getRenderWidth() *.9) - (i*50);
                modSprite.anchor.set(0.5);
                this.master_container.addChild(modSprite);
            }
        }

        this.master_container.addChild(replay_Sprite);
        this.master_container.addChild(back_Sprite);

    },
    exit: function () {
        osu.ui.interface.mainscreen.show_main_screen();
    },

    start_replay: function(){
        osu.audio.music.stop();
        osu.audio.music.preview_screen = false;
        osu.ui.interface.osugame.replay_data = replay.replayData;
        osu.ui.interface.osugame.beatmap = this.beatmap;
        osu.ui.interface.osugame.mods = this.mods;
        osu.ui.interface.osugame.replay_played_by_text = "REPLAY MODE - Watching " + replay.playerName + " play " + this.beatmap.map_name;
        osu.ui.interface.osugame.initGame();
        osu.ui.interface.osugame.game_loop();
    },


    create_master_container: function () {

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
        osu.ui.renderer.fixed_aspect = false;
        osu.ui.renderer.start();
        this.create_master_container();
        osu.ui.renderer.clearStage();
        osu.ui.renderer.addChild(this.master_container);

        osu.audio.music.init(this.beatmap.song, this.beatmap.song_md5sum);
        osu.audio.music.preview_screen = true;
        osu.audio.music.preview_time = this.beatmap.map_data.general.PreviewTime / 1000;
        osu.audio.music.start();


    }

};
/**
 * launcher.js
 * Created by Ugrend on 22/06/2016.
 */

if (!window.indexedDB) {
    console.log("no index db = no storage ")
}
else {
    database.init(function () {
        osu.settings.onloaded = function () {
            osu.ui.interface.mainscreen.init();
        };
        osu.settings.init();
    });
}
