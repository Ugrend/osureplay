/**
 * slider.js
 * Created by Ugrend on 11/06/2016.
 */
osu = osu || {};
osu.objects = osu.objects || {};
osu.objects.sliders = {
    Slider: class Slider{
        constructor(game,container,is_hidden, x, y, approach_rate, hit_time,diameter, colour, combo, slider_data) {
            this.startCircle = new Circle(container, is_hidden,x,y,approach_rate,hit_time,diameter,colour,combo);
            this.hit_time = hit_time;
            this.sliderGraphics = new PIXI.Graphics();
            this.sliderGraphics.beginFill(colour);
            this.sliderGraphics.lineStyle(5,0xFFFFFF);


            var slider_points = slider_data[0].split("|");
            var slider_type = slider_points[0];
            if(slider_type == osu.objects.sliders.TYPES.LINEAR){
                var draw_to_point = slider_points[1].split(':');
                var final_x = game.calculate_x(draw_to_point[0]);

                var final_y = draw_to_point[1];
                if(game.is_hardrock) final_y = 384 - final_y;
                var final_y = game.calculate_y(final_y);
                this.sliderGraphics.drawCircle(x,y, (diameter-5)/2);
                this.sliderGraphics.drawCircle(final_x,final_y, (diameter-5)/2);

                this.sliderGraphics.lineStyle(diameter,0xFFFFFF);

                this.sliderGraphics.moveTo(x, y);
                this.sliderGraphics.bezierCurveTo(final_x,final_y,final_x,final_y,final_x,final_y);
                this.sliderGraphics.lineStyle(diameter-10, colour);
                this.sliderGraphics.moveTo(x, y);
                this.sliderGraphics.bezierCurveTo(final_x,final_y,final_x,final_y,final_x,final_y);

            }
            var t = this.sliderGraphics.generateTexture();
            var sprite = new PIXI.Sprite(t);
            sprite.position.x = this.sliderGraphics.getBounds().x;
            sprite.position.y = this.sliderGraphics.getBounds().y;
            sprite.alpha = 0.6;

            this.container = container;
            this.drawn = false;
            this.graphics_container = new PIXI.Container();
            this.graphics_container.addChild(sprite);

            this.destroyed = false;
        }

        draw(cur_time){

            var draw_cicle = this.startCircle.draw(cur_time);
            if(this.destroyed && !draw_cicle){
                return false;
            }
            if(!draw_cicle){
                //animate slider ?
            }
            if(!this.drawn){
                this.container.addChildAt(this.graphics_container,0);
                this.drawn = true;
            }
            if(!this.destroyed && cur_time > this.hit_time + 300){
                this.destroy();
            }
            return true;

        }
        destroy(){
            this.destroyed = true;
            this.container.removeChild(this.graphics_container);

        }


    },

    TYPES: Object.freeze({
        BEZIER: "B",
        LINEAR: "L",
    })



};


