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
    launched_replay_from_url: false,


    init: function () {
        this.cacheDom();
        this.bind_events();

        this.$master_volume_slider.val(osu.settings.SETTINGS.master_volume * 100);
        this.$music_volume_slider.val(osu.settings.SETTINGS.music_volume * 100);
        this.$sound_volume_slider.val(osu.settings.SETTINGS.sound_effects_volume * 100);
        this.$background_dim_slider.val(osu.settings.SETTINGS.background_dim * 100);
        this.$skin_select.val(osu.settings.SETTINGS.selected_skin);

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

    launchReplayFromURL: function () {
        if (window.location.href.match(/\?./)) {
            var queryDict = getParams();
            if(queryDict.r){
                osu.webapi.replays.loadReplay(queryDict.r);
            }
        }
        else{
            //allow loading replay data from # so can load in replay frame from a iframe
            if(location.hash.replace(/#/,"") != ""){

                var replayB64 = decodeURI(location.hash.replace(/#/,""));
                location.hash = "";
                ReplayParser(base64ToUint8Array(replayB64), function (replay_data) {
                    replay = replay_data; //TODO: not be essentially global
                    loadBeatMap();
                });
            }
        }

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
            this.$footer = $("#footer");
            this.$beatmap_search_field = $("#filter_maps_search");
            this.$replay_search_field = $("#filter_players_search");
            this.$title_and_search = $("#title_and_search");
            this.$details_replay_search = $("#details_replay_search");
            this.$asset_server_url = $("#asset_server_url");
            this.$song_server_url = $("#song_server_url");
            this.$save_asset_servers_btn = $("#save_asset_servers_btn");
            this.$master_volume_slider = $("#master_volume");
            this.$music_volume_slider = $("#music_volume");
            this.$sound_volume_slider = $("#sound_volume");
            this.$background_dim_slider = $("#background_dim");
            this.$skin_select = $("#skin_select");
            this.cached_dom = true;
            this.$deleteBeatmapModel = $("#delete_beatmap_modal");
            this.$deleteButton = this.$deleteBeatmapModel.find("#deleteMapButton");
            this.$deleteOtherDifficultiesCheckBox = this.$deleteBeatmapModel.find("#delete_other_difficulties");
            this.$deleteAssetsCheckBox = this.$deleteBeatmapModel.find("#delete_assets");
        }

    },

    bind_events: function () {
        //init script can be called multiple times if no maps/replays exist
        if(!this.events_bound){


            $("#replay_playback_speed").on('change', function (e) {
                osu.ui.interface.osugame.setPlayBackMulti(e.currentTarget.value);
            });

            $("#open_config_button_other").on('click', function () {
                osu.ui.interface.osugame.toggle_settings();
            });

            var self = this;
            this.$save_asset_servers_btn.on('click', function () {
                osu.settings.SETTINGS.asset_server = self.$asset_server_url.val();
                osu.settings.SETTINGS.song_url = self.$song_server_url.val();
            });

            this.$skin_select.on('change',function () {
                osu.settings.SETTINGS.selected_skin = self.$skin_select.val();
                osu.skins.init();
            });


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
                osu.audio.sound.play_sound(osu.audio.sound.MENUCLICK);
            });
            this.$music_volume_slider.on("input", function (e) {
                osu.settings.SETTINGS.music_volume = e.currentTarget.value / 100;
                osu.audio.sound.play_sound(osu.audio.sound.MENUCLICK);
            });
            this.$sound_volume_slider.on("input", function (e) {
                osu.settings.SETTINGS.sound_effects_volume = e.currentTarget.value / 100;
                osu.audio.sound.play_sound(osu.audio.sound.MENUCLICK);
            });
            this.$background_dim_slider.on("input", function (e) {
                osu.settings.SETTINGS.background_dim = e.currentTarget.value / 100;
                osu.audio.sound.play_sound(osu.audio.sound.MENUCLICK);
            });


            //On beatmap select click highlight the clicked item, and unhighlight any other items
            this.$beatmap_section_html.on("click",".beatmap_preview", function (event) {
                osu.audio.sound.play_sound(osu.audio.sound.MENUCLICK);
                var clickedObject = $(this);
                var md5sum = clickedObject.attr("id");
                self.highlight_beatmap(clickedObject);
                self.select_beatmap(md5sum, false);
            });
            //on right click allow deleting of map/etc
            this.$beatmap_section_html.on('contextmenu',".beatmap_preview",function (e) {
                e.preventDefault();
                self.deletion_id = $(this).attr("id");
                self.$deleteBeatmapModel.modal('show');
            });


            this.$deleteButton.on("click", self.delete_map.bind(self));

            //on replay click open replay
            $(this.$replay_section_html).on("click",".replay_preview", function (event) {
                osu.audio.sound.play_sound(osu.audio.sound.MENUHIT);
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
                        if(!osu.ui.interface.osugame.has_started){
                            self.show_main_screen();
                        }

                    }
                }

            }
        }

        this.events_bound = true;


    },

    _delete_other_difficulties(id){
        var delete_array = [];
        var self = this;
        var parentMap = false;
        for(var i = 0; i < this.beatmaps.length ; i++){
            var beatmap = this.beatmaps[i];
            if(beatmap.md5sum == id) {
                parentMap = beatmap;
                break;
            }
        }
        if(parentMap){
            var beatmapSet = parentMap.beatmapsetid;

            for(i = 0; i < this.beatmaps.length ; i++){
                beatmap = this.beatmaps[i];
                if(beatmap.beatmapsetid == beatmapSet) {
                    delete_array.push(beatmap.md5sum);
                }
            }
        }
        for(i = 0 ; i< delete_array.length; i++){
            self.$beatmap_section_html.find("#" +delete_array[i]).hide();
            database.delete_data(database.TABLES.BEATMAPS,delete_array[i]);
        }
    },

    delete_map(id,other_difficulties,include_assets){
        var self = this;
        //check id if object, if so came from ui not console
        if(typeof id == "object"){
            id = this.deletion_id;
            other_difficulties = this.$deleteOtherDifficultiesCheckBox.is(':checked');
            include_assets = this.$deleteAssetsCheckBox.is(':checked');
        }
        self.$beatmap_section_html.find("#" +id).hide();


        if(include_assets){
            database.get_data(database.TABLES.BEATMAPS,id,function (result) {
                if(other_difficulties){
                    self._delete_other_difficulties(id);
                }
                var beatmap = result.data;
                for(var i = 0; i<beatmap.files.length; i++){
                    database.delete_data(database.TABLES.ASSETS,beatmap.files[i].md5sum);
                }
                database.delete_data(database.TABLES.BEATMAPS,id)
            });
        }


        if(other_difficulties && !include_assets){
            this._delete_other_difficulties(id);
        }

        if(!other_difficulties && !include_assets){
            database.delete_data(database.TABLES.BEATMAPS,id);

        }
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
                self.replays[i].grade_img = osu.skins.resources[osu.score.GRADES[self.replays[i].grade].small_icn].url;
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
            this.show_main_screen();
            //document.getElementById("no_beatmaps_replays").className = "";
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
        osu.ui.interface.replaycontroller.hideBar();
        document.getElementById("loading").className = "hidden";
        document.getElementById("no_beatmaps_replays").className = "hidden";
        document.getElementById("container").className = "";
        document.getElementById("main_menu").className = "";
        document.getElementById("render_zone").className = "hidden";
        document.getElementById("replay_url_area").className = "hidden";
        document.getElementById("playback_ratio_area").className = "hidden";
        document.getElementById("open_config_button_other").className = "hidden";

        this.$asset_server_url.val(osu.settings.SETTINGS.asset_server);
        this.$song_server_url.val(osu.settings.SETTINGS.song_url);

        if(this.$footer.css('display') =='none'){
            this.$footer.toggle("slide", {direction: "down"});
        }

        if(this.$replay_section_html.css('display') == "none"){
            this.$replay_section_html.toggle("slide", {direction: "left"});
        }
        if(this.$title_and_search.css('display') == "none"){
            this.$title_and_search.toggle("slide", {direction: "up"});
        }
        if(this.$details_replay_search.css('display') == "none"){
            this.$details_replay_search.toggle("slide", {direction: "up"});
        }
        if(this.$beatmap_section_html.css('display') == "none"){
            this.$beatmap_section_html.toggle("slide", {direction: "right"}); //right looks broken
        }

        this.$skin_select.empty();
        this.$skin_select.append('<option value="0">Default</option>');
        for(var i = 0; i < osu.skins.skins.length; i++){
            this.$skin_select.append('<option value="'+ osu.skins.skins[i].md5sum +'">'+ osu.skins.skins[i].name  +'</option>')
        }
        this.$skin_select.val(osu.settings.SETTINGS.selected_skin);


        this.$footer.find('#skin_settings').attr('style','');
        this.$footer.find('#skin_select_field').attr('style','');
        this.loaded = true;
        this.displaying_main_screen = true;
        if(!this.current_selection && this.beatmaps.length){
            //select random beatmap
            this.select_beatmap(this.beatmaps[Math.floor(Math.random()*this.beatmaps.length)].md5sum, true);
        }else if(this.beatmaps.length){
            this.current_selection.load_background();
        }
        this.$beatmap_search_field.focus();

        if(!this.launched_replay_from_url){
            //We need to wait for mainscreen to load before we try launch replay as it can prevent the replay from every actually loading
            //once we have loaded it atleast once we wont try again
            this.launched_replay_from_url = true;
            this.launchReplayFromURL();
        }

    },
    hide_main_screen: function () {
        console.log(this.$footer.css('display'));
        if(this.$footer.css('display') !='none'){
            this.$footer.toggle("slide", {direction: "down"});
        }
        if(this.$beatmap_section_html.css('display') != "none"){
            this.$beatmap_section_html.toggle("slide", {direction: "right"});
        }
        if(this.$replay_section_html.css('display') != "none"){
            this.$replay_section_html.toggle("slide", {direction: "left"});
        }
        if(this.$title_and_search.css('display') != "none"){
            this.$title_and_search.toggle("slide", {direction: "up"});
        }
        if(this.$details_replay_search.css('display') != "none"){
            this.$details_replay_search.toggle("slide", {direction: "up"});
        }
        this.displaying_main_screen = false;
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
