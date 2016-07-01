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


    getRenderWidth: function () {
        return osu.ui.renderer.renderWidth;
    },

    getRenderHeight: function () {
        return osu.ui.renderer.renderHeight;
    },

    create_background: function () {
        var background = PIXI.Texture.fromImage(this.beatmap.background);
        var background_sprite = new PIXI.Sprite(background);
        background_sprite.width = this.getRenderWidth();
        background_sprite.height = this.getRenderHeight();

        this.background_dimmer = new PIXI.Graphics();
        this.background_dimmer.beginFill(0x0, 0.5);
        this.background_dimmer.drawRect(0, 0, this.getRenderWidth(), this.getRenderHeight());
        this.master_container.addChild(background_sprite);
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
        for(var i = 0; i < this.mods.length ; i++ ){
            if(this.mods[i].icon != ""){
                console.log(this.mods[i]);
                var modpng = PIXI.Texture.fromImage(osu.skins[this.mods[i].icon]);
                var modSprite = new PIXI.Sprite(modpng);
                modSprite.position.y = this.getRenderHeight() / 5;
                modSprite.position.x = (this.getRenderWidth() *.95) - (i*50);
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

    initGame: function () {
        event_handler.off(event_handler.EVENTS.RENDER, "replay_text"); //unsubscrbe incase another replay closed early
        osu.ui.renderer.fixed_aspect = true;
        osu.ui.renderer.start();
        this.create_master_container();
        osu.ui.renderer.clearStage();
        osu.ui.renderer.addChild(this.master_container);
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
                if(this.is_doubletime){
                    startTime = startTime *.667;
                    endTime = endTime *.667;
                }

                this.break_times.push(startTime);
                this.warning_arrow_times.push(endTime);
            }
        }
        var comboNum = 0;
        var comboColour = 0;
        var approachRate = parseInt(this.beatmap.map_data.difficulty.ApproachRate);
        if(this.is_hardrock){
            approachRate = approachRate * 1.4;
            if(approachRate > 10) approachRate = 10;
        }
        if(this.is_easy) approachRate = approachRate/2;


        var difficultyCircleSize = parseInt(this.beatmap.map_data.difficulty.CircleSize);
        if(this.is_hardrock && difficultyCircleSize <7) difficultyCircleSize +=1;
        if(this.is_easy && difficultyCircleSize > 1) difficultyCircleSize -=1; //TODO: work out if that's correct
        var circleSize = (this.getRenderWidth() / 640) * (108.848 - (difficultyCircleSize * 8.9646));

        this.approachTime = 0;
        if (approachRate < 5) {
            this.approachTime = (1800 - (approachRate * 120))
        } else {
            this.approachTime = (1200 - ((approachRate - 5) * 150));
        }
        if(this.is_doubletime) this.approachTime =  this.approachTime - (this.approachTime * .33);

        for (i = 0; i < this.beatmap.map_data.hit_objects.length; i++) {
            var hitObjectInt = parseInt(this.beatmap.map_data.hit_objects[i][3]);
            var hitObject = osu.objects.hitobjects.parse_type(hitObjectInt);




            if (comboNum == 0 || hitObject.new_combo) {
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
            var is_circle = hitObject.type == osu.objects.hitobjects.TYPES.CIRCLE;
            var is_slider = hitObject.type == osu.objects.hitobjects.TYPES.SLIDER;
            var is_spinner = hitObject.type == osu.objects.hitobjects.TYPES.CIRCLE;

            if (is_circle|| is_slider) {
                var x = this.calculate_x(parseInt(this.beatmap.map_data.hit_objects[i][0]));
                var y = parseInt(this.beatmap.map_data.hit_objects[i][1]);
                if(this.is_hardrock) y = 384 - y;
                y = this.calculate_y(y);
                var t = parseInt(this.beatmap.map_data.hit_objects[i][2]);
                if(this.is_doubletime) t = t*.667;
                if (is_circle) {
                    this.hit_objects.push({
                        t: t,
                        object: new Circle(this.hit_object_container, this.is_hidden, x, y, this.approachTime, t, circleSize, osu.skins.COMBO_COLOURS[comboColour], comboNum)
                    });
                }
                if(is_slider){
                    this.hit_objects.push({
                        t: t,
                        object: new osu.objects.sliders.Slider(this,this.hit_object_container, this.is_hidden, x, y, this.approachTime, t, circleSize, osu.skins.COMBO_COLOURS[comboColour], comboNum,this.beatmap.map_data.hit_objects[i].slice(5))
                    });


                }


            }

        }

        this.audioLeadIn = parseInt(this.beatmap.map_data.general.AudioLeadIn);
        if(this.is_doubletime) this.audioLeadIn = this.audioLeadIn *.667


        //calculate x,y prior as processing slowly casues it to get out of sync
        //might have to calculate replay times as time passed, as it is starting to get out of sync

        if (!replay.been_rendered) {
            for (var i = 0; i < this.replay_data.length; i++) {
                if (this.replay_data[i].length == 4) {
                    this.replay_data[i][1] = this.calculate_x(this.replay_data[i][1]);
                    this.replay_data[i][2] = this.calculate_y(this.replay_data[i][2]);
                    if(this.is_doubletime){
                        //seems replay data also needs to be speed up
                        this.replay_data[i][0] = this.replay_data[i][0] *.667
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
        }else{
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
            if(this.replay_data[2][0] < 0){
                if(this.audioLeadIn == 0){
                    this.audioLeadIn = this.replay_data[2][0] * -1;
                    if(this.is_doubletime) this.audioLeadIn = this.audioLeadIn *.667;
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
            if (this.hit_objects[i].t - this.approachTime > time) {
                break;
            }
            //draw will return false if the object has been destroyed
            //if it has been destroyed we will set the last object count to that pos so we don't iterate over all the objects later on
            if (!this.hit_objects[i].object.draw(time)) {
                //only allow this to icrement by 1 in case a object is still drawing like a slider.
                if(this.oldest_object_position +1 == i){
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
            if(this.is_doubletime) osu.audio.music.set_playback_speed(1.5);
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