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
                        replay = ReplayParser(replay_data);
                        showReplayData();
            }else{
                dragDropLabel.innerHTML = "Well ummm, yeh i dont know what to do but something went wrong";
                resetLabel();
            }

        };


            if(file.name.split(".").pop() == "osr") {
                reader.readAsBinaryString(file);
            }else if(file.name.split(".").pop() == "osz"){
                //beatmap
                console.log(BeatmapReader(file));
            }else if(file.name.split(".").pop() !== "osk"){
                //skin
            }else{
                dragDropLabel.innerHTML = "i dont know what that is";
                resetLabel();
            }

        return false;
    };
}