/**
 * calculate_replay.js
 * Created by Ugrend on 21/07/2016.
 */



var osu  = osu || {};

osu.calculateReplay = function (hitobjects, replayframes, unscaledCircleSize) {
    //Pre calculate replay hits on hitobjects
    //returns an array of when keys were pressed at what time and if it was a hit
    var isIn = function(objectPos,curPos, radius){
        //check if vector is in circle/slider
        var distance = Math.hypot(objectPos.x - (curPos.orig_x || curPos.x), objectPos.y - (curPos.orig_y || curPos.y))
        var result = distance <= radius;
        return result;
    };


    var replayOffset = (replayframes[2].orig_t || replayframes[2].t) *-1;
    if(replayOffset < 0) replayOffset =1;
    var lastFrame = 2;

    var keyPresses = [];
    var K1M1Down = false;
    var K2M2Down = false;
    var keyDown = false;
    var radius = (unscaledCircleSize /2);
    var M1 = false;
    var M2 = false;
    var K1 = false;
    var K2 = false;
    var SMOKE = false;



    for(var i = 0; i < hitobjects.length; i++){
        var hitObject = hitobjects[i];

        var hitTime = hitObject.startTime;
        var IS_HIT = false;
        var sliderPoints = hitObject.object.ticks || [];
        var repeatCount = hitObject.repeatCount || 0;
        var currentRepeat = 0;

        if(hitObject.is_slider){
            var startPoint = {
                x: hitObject.x,
                y: hitObject.y,
                hitCount: 1,
                timesHit:0
            };
            var endPoint = hitObject.object.curves.points[hitObject.object.curves.points.length-1];
            endPoint.hitCount = 1;
            endPoint.timesHit = 0;

            if(repeatCount === 0){
                for(var z = 0; z< sliderPoints.length;z++){
                    sliderPoints[z].hitCount = 1;
                    sliderPoints[z].timesHit = 0;
                }

                sliderPoints.push(startPoint);
                sliderPoints.push(endPoint);
            }else{
                //Need to work out if a object should be 'hit' twice or more for repeats

            }




        }

        //TODO: some maps (mostly or all troll) can have sliders and circles at the same time
        // so may need to take that into account later
        var REPLAYHIT = false;
        for(true; lastFrame < replayframes.length; lastFrame++){
            var replayFrame = replayframes[lastFrame];
            if(typeof replayFrame != "object") break; //Last frame seems to be a string
            var difference = hitTime - ((replayFrame.orig_t || replayFrame.t)  -replayOffset);

            if(hitObject.is_circle && difference < hitObject.hitOffset.HIT_50*-1){
                break;
            }else if(difference < ((hitObject.endTime - hitObject.startTime)*-1)){
                break;

            }

            var isClick = false; // if this is a hold or click (if button is down)
            M1 = false;
            M2 = false;
            K1 = false;
            K2 = false;
            SMOKE = false;


            for(var j = 0 ; j < replayFrame.keys.length ; j++){
                var key = replayFrame.keys[j];
                if(key == osu.keypress.KEYS.M1 || key == osu.keypress.KEYS.K1){
                    if(K1M1Down == false){
                        isClick = true;
                        K1M1Down = true;
                        keyDown = true;
                    }

                    M1 = (key == osu.keypress.KEYS.M1);
                    K1 = (key == osu.keypress.KEYS.K1);
                }

                if(key == osu.keypress.KEYS.M2 || key == osu.keypress.KEYS.K2){
                    if(K2M2Down == false){
                        isClick = true;
                        K2M2Down = true;
                        keyDown = true;
                    }

                    M2 = (key == osu.keypress.KEYS.M2);
                    K2 = (key == osu.keypress.KEYS.K2);
                }
                if(key == osu.keypress.KEYS.SMOKE ){
                    SMOKE = true;
                }
            }


            if(!M1 && !K1){
                K1M1Down = false;
            }
            if(!M2 && !K2){
                K2M2Down = false;
            }
            if(!K1M1Down && !K2M2Down){
                keyDown = false;
            }

            difference = Math.abs(difference);
            var circleHit = false;
            if(!hitObject.is_spinner && isClick && !IS_HIT && isIn(hitObject,replayFrame,radius)){
                if(difference <= hitObject.hitOffset.HIT_300){
                    //Hit is a 300
                    hitObject.hitType = 'HIT_300';
                    hitObject.hitTime = (replayFrame.orig_t || replayFrame.t) - replayOffset;
                    IS_HIT = true;
                    REPLAYHIT = true;
                    circleHit = true;
                }else if (difference <= hitObject.hitOffset.HIT_100){
                    //Hit is a 100
                    hitObject.hitType = 'HIT_100';
                    hitObject.hitTime = (replayFrame.orig_t || replayFrame.t) - replayOffset;
                    IS_HIT = true;
                    REPLAYHIT = true;
                    circleHit = true;
                }else if (difference  <= hitObject.hitOffset.HIT_50){
                    //Hit is a 50
                    hitObject.hitType = 'HIT_50';
                    hitObject.hitTime = (replayFrame.orig_t || replayFrame.t) - replayOffset;
                    IS_HIT = true;
                    REPLAYHIT = true;
                    circleHit = true;
                }else if (difference  <= hitObject.hitOffset.HIT_MISS){
                    //Hit to early and is a miss
                    hitObject.hitType = 'HIT_MISS';
                    hitObject.hitTime = (replayFrame.orig_t || replayFrame.t) - replayOffset;
                    IS_HIT = true;
                    REPLAYHIT = true;
                    circleHit = true;
                }
            }

            keyPresses.push({
                M1: M1,
                M2: M2,
                K1: K1,
                K2: K2,
                SMOKE: SMOKE,
                REPLAYHIT: circleHit,
                ID: i,
                t: (replayFrame.orig_t || replayFrame.t) -replayOffset
            });
            
            if(REPLAYHIT && hitObject.is_circle){
                replayFrame++;
                break;
            }
            //TODO: its possible to still get points after missing intial circle
            if(REPLAYHIT && hitObject.is_slider){
                if(hitObject.object.scoreBreak){
                    replayFrame++;
                    break;
                }
                var duration = hitObject.duration / hitObject.repeatCount+1; //how long it takes to go 1 way
                var t = difference - (currentRepeat*duration);

                if(t <= duration) {
                    var sliderPos;
                    if (currentRepeat == 0 || currentRepeat % 2 == 0) {
                        sliderPos = hitObject.object.curves.get_point(t/duration); //where we should be at this point in time;
                    }else{
                        sliderPos = hitObject.object.curves.get_point(1-(t/duration)); //where we should be at this point in time;
                    }
                    //TODO: this will need to be reworked alot, just getting the idea going
                    for(var z = 0; z < sliderPoints.length; z++){
                        if(isIn(sliderPos,sliderPoints[z],radius*3)){
                            //TODO: need to not hit the same point multiple times
                            sliderPoints[z].timesHit++
                        }
                    }

                    if(isIn(sliderPos,replayFrame,radius *3)){
                        hitObject.object.scoreBreak = false;
                    }else{
                        var sliderBreak = false;
                        for(z = 0; z < sliderPoints.length; z++){
                            if(sliderPoints[z].timesHit < sliderPoints[z].hitCount){
                                sliderBreak = replayFrame.t -replayOffset;
                            }
                        }
                        hitObject.object.scoreBreak = sliderBreak;
                    }

                }else{
                    if(repeatCount > 0){
                        currentRepeat++;
                        repeatCount--;
                        replayFrame--; //rerun this frame
                        break;
                    }else{
                        replayFrame++;
                        break;
                    }
                }

            }

            if(hitObject.is_spinner){
                var centerPoint = {x:osu.helpers.constants.OSU_GAME_WIDTH/2,
                    y:osu.helpers.constants.OSU_GAME_HEIGHT/2};
                var angle = Math.atan2(centerPoint.y - (replayFrame.orig_y || replayFrame.y), centerPoint.x - (replayFrame.orig_x || replayFrame.x));
                if(keyDown){
                    hitObject.object.rotations.push({
                        a: angle,
                        t: (replayFrame.orig_t || replayFrame.t)
                    });
                }
            }

        }
    }

    return keyPresses;


};
