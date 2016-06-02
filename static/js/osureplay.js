/**
 * Created by Ugrend on 2/06/2016.
 */


var mainArea = document.getElementById('main_zone');
var dragDropZone = document.getElementById('dragdrop');
var dragDropLabel = document.getElementById('drag_label');
var replay = "";
/**
 * Created by Ugrend on 6/2/2016.
 */
function resetLabel(){
    setTimeout(function () {
        dragDropLabel.innerHTML = "Drag osr file here!";
    }, 3000)
}

function hideDropZone(){
    dragDropZone.style.display = 'none';

}
/**
 * Created by Ugrend on 6/2/2016.
 */

/*
Just adding this for testing will prob remove

 */

function showReplayData(){
    mainArea.innerHTML = "";
    for(var k in replay){
        mainArea.innerHTML += '<p>' + k + " : " + replay[k] + "</p>";
    }
}
/**
 * Created by Ugrend on 6/2/2016.
 */
if(typeof window.FileReader === "undefined"){
    dragDropLabel.innerHTML = "Shit won't work on this browser :("
}
else {
    dragDropZone.ondragover = function () {
        return false;
    };
    dragDropZone.ondragend = function () {
        return false;
    };
    dragDropZone.ondrop = function (e) {
        e.preventDefault();

        var file = e.dataTransfer.files[0],
            reader = new FileReader();
        reader.onloadend = function (event) {

            if(event.target.readyState === 2){
                var replay_data = event.target.result;
                replay = new ReplayParser(replay_data);
                showReplayData();

            }else{
                dragDropLabel.innerHTML = "Well ummm, yeh i dont know what to do but something went wrong";
                resetLabel();
            }

        };

        if(file.name.split(".").pop() !== "osr"){
            dragDropLabel.innerHTML = "that aint no osr file manz";
            resetLabel();
        }
        reader.readAsBinaryString(file);
        return false;
    };
}
/**
 * Created by Ugrend on 2/06/2016.
 */


/**
 * Converts a hexdump of a replay file into a JS object
 * @param replay_data {String value of a hexdump of replay file}
 * @returns {{type: *, version: *, bmMd5Hash: *, playerName: *, rMd5Hash: *, h300: *, h100: *, h50: *, hGekis: *, hKatus: *, hMisses: *, tScore: *, tCombo: *, fullClear: *, mods: *, lifeBar: *, timeTicks: *, replayByteLength: *}}
 * @constructor
 */
var ReplayParser = function(replay_data){

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
        mods: RP.getInteger(),
        lifeBar: RP.getString(),
        timeTicks: RP.getLong(),
        replayByteLength: RP.getInteger()
    };

    LZMA.decompress(
      RP.replay_bytes.slice(RP.byte_index),
        function(data) {
            replay.replayData = data;
        },
        function(){}
    );
    return replay;
};

/**
 * Created by ugrend on 2/06/2016.
 */

MODS = {
    NONE: 0,
    NO_FAIL: 1,
    EASY: 2,
    NO_VIDEO: 4,
    HIDDEN: 8,
    HARD_ROCK: 16,
    SUDDEN_DEATH: 32,
    DOUBLE_TIME: 64,
    RELAX: 128,
    HALF_TIME: 256,
    NIGHT_CORE: 512,
    FLASH_LIGHT: 1024,
    AUTO_PLAY: 2048,
    SPUN_OUT: 4096
};

MOD_MULTI = {
    NONE: 1.0,
    NO_FAIL: 0.5,
    EASY: 0.5,
    NO_VIDEO: 1,
    HIDDEN: 1.06,
    HARD_ROCK: 1.06,
    SUDDEN_DEATH: 1,
    DOUBLE_TIME: 1.12,
    RELAX: 0,
    HALF_TIME: 0.3,
    NIGHT_CORE: 1.12,
    FLASH_LIGHT: 1.12,
    AUTO_PLAY: 0,
    SPUN_OUT: 0.9

};