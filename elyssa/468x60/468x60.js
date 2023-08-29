(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 468,
	height: 60,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"_468_bg.jpg", id:"_468_bg"},
		{src:"_468_btn.png", id:"_468_btn"},
		{src:"_468_elissa.jpg", id:"_468_elissa"},
		{src:"_468_elissa2.jpg", id:"_468_elissa2"},
		{src:"_468_logo.png", id:"_468_logo"},
		{src:"_728_border.png", id:"_728_border"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib._468_bg = function() {
	this.initialize(img._468_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib._468_btn = function() {
	this.initialize(img._468_btn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,74,24);


(lib._468_elissa = function() {
	this.initialize(img._468_elissa);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib._468_elissa2 = function() {
	this.initialize(img._468_elissa2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib._468_logo = function() {
	this.initialize(img._468_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,210,60);


(lib._728_border = function() {
	this.initialize(img._728_border);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgWAXIAAgtIAtAAIAAAtg");
	this.shape.setTransform(238.7,28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AhECQIAAkfICDAAIAAAsIhRAAIAABKIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_1.setTransform(225.8,16.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("Ag+CQIAAkfIAyAAIAAD0IBLAAIAAArg");
	this.shape_2.setTransform(209.5,16.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AhNCQIAAkfIBKAAQAmAAASAUQATAUAAAkQAAANgEAMQgEAMgHAJQgIAKgMAFQATAGALARQAKAQAAAcQABAXgIATQgIATgRALQgRALgcAAgAgbBnIAVAAQARAAAJgLQAIgLAAgXQAAgVgKgLQgJgLgUAAIgQAAgAgbgZIASAAQAMAAAJgJQAKgJAAgSQAAgVgIgJQgIgLgOAAIgTAAg");
	this.shape_3.setTransform(191.2,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AAjCQIgJhAIg0AAIgJBAIgvAAIA1kfIA7AAIA2EfgAATAlIgTh6IAAAAIgTB6IAmAAg");
	this.shape_4.setTransform(172.1,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("Ag2B+QgUgUAAglIAAjWIAxAAIAADYQAAAQAGAIQAHAIAMAAQANAAAGgIQAHgIAAgQIAAjYIAyAAIAADWQgBAlgUAUQgUATgjABQgigBgUgTg");
	this.shape_5.setTransform(153.2,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("Ag+CQIAAkfIAyAAIAAD0IBLAAIAAArg");
	this.shape_6.setTransform(136.2,16.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AAkCQIgKhAIg0AAIgJBAIgvAAIA1kfIA7AAIA1EfgAATAlIgTh6IAAAAIgSB6IAlAAg");
	this.shape_7.setTransform(118.8,16.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AgXCQIg9kfIAxAAIAjDGIAAAAIAkjGIAxAAIg9Efg");
	this.shape_8.setTransform(101,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AgXCQIAAh4Ig8inIAyAAIAhBuIABAAIAhhuIAyAAIg8CnIAAB4g");
	this.shape_9.setTransform(74.4,16.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("Ag+CQIAAkfIAyAAIAAD0IBLAAIAAArg");
	this.shape_10.setTransform(58.5,16.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AhNCQIAAkfIBKAAQAmAAASAUQATAUAAAkQAAANgEAMQgEAMgHAJQgIAKgMAFQATAGALARQAKAQAAAcQABAXgIATQgIATgRALQgRALgcAAgAgbBnIAVAAQARAAAJgLQAIgLAAgXQAAgVgKgLQgJgLgUAAIgQAAgAgbgZIASAAQAMAAAJgJQAKgJAAgSQAAgVgIgJQgIgLgOAAIgTAAg");
	this.shape_11.setTransform(40.2,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgXCQIAAkfIAvAAIAAEfg");
	this.shape_12.setTransform(24.4,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AhKCQIAAkfIBJAAQAkAAAVAVQATAWABAtIAABvQgBAtgTAWQgVAVgkAAgAgZBnIARAAQASABAIgKQAIgJAAgWIAAh8QAAgXgIgKQgIgIgSAAIgRAAg");
	this.shape_13.setTransform(8.9,16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AhECQIAAkfICDAAIAAAsIhRAAIAABKIA+AAIAAApIg+AAIAABVIBXAAIAAArg");
	this.shape_14.setTransform(-9.6,16.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AAdCQIghh3IgMABIgOAAIAAB2IgxAAIAAkfIBGAAQAnAAAWAUQAUAUAAAuQABAXgGAOQgFAPgIAGQgIAJgIADIAqCDgAgegNIASAAQASAAAJgJQAIgKAAgZQAAgagIgJQgJgKgSAAIgSAAg");
	this.shape_15.setTransform(-28.4,16.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AgoCKQgRgKgIgRQgIgQAAgVIAAiSQAAgWAIgQQAIgRARgJQARgKAYgBQAZAAAQALQAQALAIASQAIASAAAVIAAAWIgxAAIAAgXQAAgSgHgJQgHgIgKAAQgNAAgGAIQgGAIAAARIAACPQAAARAGAIQAGAIANAAQANAAAGgIQAFgHAAgPIAAgjIAxAAIAAAiQAAAVgIAQQgIARgQAKQgQAJgZABQgYgBgRgJg");
	this.shape_16.setTransform(-49,16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AAgCQIg9iyIgBAAIAACyIgtAAIAAkfIAuAAIA7CjIABAAIAAijIAtAAIAAEfg");
	this.shape_17.setTransform(-68.9,16.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AgXCQIAAkfIAvAAIAAEfg");
	this.shape_18.setTransform(-84.4,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92,-10,337.4,52);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#034262").s().p("AgLAMIAAgXIAYAAIAAAXg");
	this.shape.setTransform(107,18.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#034262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAvIAvAAIAAAYg");
	this.shape_1.setTransform(99.9,12.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#034262").s().p("AgiBPIAAidIAbAAIAACFIAqAAIAAAYg");
	this.shape_2.setTransform(90.9,12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#034262").s().p("AgpBPIAAidIAoAAQAUAAAKALQAKALAAAUQAAAHgCAGQgBAHgFAGQgEAEgHAEQALACAGAIQAFAKABAPQgBANgEAKQgEALgJAGQgKAGgPAAgAgOA4IALAAQAJAAAFgFQAFgHAAgMQAAgMgGgGQgFgGgKAAIgJAAgAgOgNIAKAAQAGAAAFgFQAFgFAAgKQAAgLgEgGQgFgFgHAAIgKAAg");
	this.shape_3.setTransform(80.8,12.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#034262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_4.setTransform(70.3,12.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#034262").s().p("AgpBPIAAidIApAAQAUAAALAMQAKAMABAYIAAA9QgBAYgKAMQgLAMgUAAgAgNA4IAKAAQAIABAEgFQAFgFAAgMIAAhEQAAgMgFgGQgEgEgIAAIgKAAg");
	this.shape_5.setTransform(60,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#034262").s().p("AAQBPIgRhBIgHAAIgHAAIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAANgDAIQgDAIgEACQgEAFgFACIAXBIgAgPgHIAJAAQAJAAAFgEQAFgGAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_6.setTransform(49.2,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#034262").s().p("AgWBMQgKgGgEgJQgEgJgBgLIAAhQQABgMAEgJQAEgJAKgFQAJgGANAAQAOAAAJAGQAJAFAFAJQAFAJgBAMIAABQQABALgFAJQgFAJgJAGQgJAFgOAAQgNAAgJgFgAgKg0QgDAEAAAKIAABOQAAAIADAFQADAFAHAAQAHAAAEgFQADgFAAgIIAAhOQAAgKgDgEQgEgFgHABQgHgBgDAFg");
	this.shape_7.setTransform(38,12.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#034262").s().p("AglBPIAAidIBLAAIAAAYIgvAAIAAApIAiAAIAAAVIgiAAIAABHg");
	this.shape_8.setTransform(27.8,12.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#034262").s().p("AglBPIAAidIBLAAIAAAYIgvAAIAAApIAiAAIAAAVIgiAAIAABHg");
	this.shape_9.setTransform(18.1,12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#034262").s().p("AATBPIgEgjIgcAAIgFAjIgbAAIAeidIAgAAIAdCdgAALAUIgLhCIAAAAIgJBCIAUAAg");
	this.shape_10.setTransform(8.1,12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#034262").s().p("AgMBPIAAhCIghhbIAbAAIASA8IAAAAIASg8IAcAAIghBbIAABCg");
	this.shape_11.setTransform(-6.5,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#034262").s().p("AgiBPIAAidIAbAAIAACFIAqAAIAAAYg");
	this.shape_12.setTransform(-15.3,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#034262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAvIAvAAIAAAYg");
	this.shape_13.setTransform(-24.6,12.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#034262").s().p("AAfBPIAAh6IAAAAIgZB6IgLAAIgZh6IAAAAIAAB6IgYAAIAAidIAkAAIASBbIAAAAIAThbIAkAAIAACdg");
	this.shape_14.setTransform(-36.5,12.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#034262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAvIAvAAIAAAYg");
	this.shape_15.setTransform(-47.8,12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#034262").s().p("AAQBPIgRhBIgHAAIgHAAIAABBIgcAAIAAidIAnAAQAVAAALALQAMALAAAZQAAANgDAIQgDAIgEACQgEAFgFACIAXBIgAgPgHIAJAAQAJAAAFgEQAFgGAAgOQAAgOgFgGQgFgEgJAAIgJAAg");
	this.shape_16.setTransform(-58.2,12.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#034262").s().p("AgMBPIAAiFIgbAAIAAgYIBOAAIAAAYIgaAAIAACFg");
	this.shape_17.setTransform(-68.2,12.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#034262").s().p("AATBPIgTg6IAAAAIgRA6IgbAAIAfhRIgdhMIAbAAIAPAzIAAAAIAPgzIAbAAIgbBMIAeBRg");
	this.shape_18.setTransform(-77.4,12.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#034262").s().p("AglBPIAAidIBIAAIAAAYIgsAAIAAApIAhAAIAAAVIghAAIAAAvIAvAAIAAAYg");
	this.shape_19.setTransform(-86.9,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-3,205.6,30.4);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgOAPIAAgdIAdAAIAAAdg");
	this.shape.setTransform(115.1,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgZBZQgLgHgGgMQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgIgHgIIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANAAAKAGQAJAGAGAKQAFALACAMIgfAEQgBgMgFgEQgFgFgGAAQgGABgEAEQgEAFAAAIQAAAKAHAIQAGAIAIAJIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_1.setTransform(106.4,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgrBdIAAi6IBUAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAbg");
	this.shape_2.setTransform(95.2,4.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgjBTQgMgMAAgXIAAhfQAAgNAFgLQAFgLALgGQAKgHAQAAQAOAAALAIQALAGAFAMQAGAMAAAOIAAAMIgfAAQAAgOgCgIQgCgIgEgDQgEgDgFAAQgGAAgEAFQgEAEAAAMIAABeQAAAJADAGQAEAFAIAAQAIAAAEgGQAEgGAAgOIAAgSIgTAAIAAgYIAzAAIAABdIgQAAIgFgNQgHAIgIAEQgHAEgJAAQgTAAgMgNg");
	this.shape_3.setTransform(82.6,4.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgrBdIAAi6IBUAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAbg");
	this.shape_4.setTransform(70.7,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgoBdIAAi6IAgAAIAACfIAxAAIAAAbg");
	this.shape_5.setTransform(60.1,4.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgoBdIAAi6IAgAAIAACfIAxAAIAAAbg");
	this.shape_6.setTransform(50,4.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgbBaQgKgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQAMgHAPAAQAQAAALAHQALAGAFALQAGALAAANIAABfQAAANgGALQgFALgLAHQgLAGgQAAQgPAAgMgGgAgMg9QgEAEAAALIAABdQAAALAEAFQAEAFAIAAQAJAAAEgFQAEgFgBgLIAAhdQABgLgEgEQgEgGgJAAQgIAAgEAGg");
	this.shape_7.setTransform(37.9,4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQALgHAPAAQAQAAALAIQALAGAFAMQAFAMAAAOIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHAAgEAGQgEAEAAALIAABdQAAALAEAFQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAANgFALQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_8.setTransform(24.8,4.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AgZBZQgLgHgGgMQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgIgHgIIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANAAAKAGQAJAGAGAKQAFALACAMIgfAEQgBgMgFgEQgFgFgGAAQgGABgEAEQgEAFAAAIQAAAKAHAIQAGAIAIAJIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_9.setTransform(6.8,4.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgjBSQgNgNAAgYIAAiLIAgAAIAACMQAAALAFAFQADAFAIAAQAJAAADgFQAFgFAAgLIAAiMIAgAAIAACLQAAAYgOANQgMANgXAAQgWAAgNgNg");
	this.shape_10.setTransform(-5.4,4.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgbBaQgKgHgFgLQgGgLAAgNIAAhfQAAgNAGgLQAFgLAKgGQALgHAQAAQARAAALAHQAKAGAFALQAGALAAANIAABfQAAANgGALQgFALgKAHQgLAGgRAAQgQAAgLgGgAgMg9QgEAEABALIAABdQgBALAEAFQAEAFAIAAQAJAAAEgFQAEgFgBgLIAAhdQABgLgEgEQgEgGgJAAQgIAAgEAGg");
	this.shape_11.setTransform(-18.4,4.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgPBdIAAi6IAfAAIAAC6g");
	this.shape_12.setTransform(-28.5,4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgjBTQgMgMAAgXIAAhfQAAgNAFgLQAFgLALgGQAKgHAQAAQAOAAALAIQALAGAFAMQAGAMAAAOIAAAMIgfAAQAAgOgCgIQgCgIgEgDQgEgDgFAAQgGAAgEAFQgEAEAAAMIAABeQAAAJADAGQAEAFAIAAQAIAAAEgGQAEgGAAgOIAAgSIgTAAIAAgYIAzAAIAABdIgQAAIgFgNQgHAIgIAEQgHAEgJAAQgTAAgMgNg");
	this.shape_13.setTransform(-38.7,4.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgPBdIAAi6IAfAAIAAC6g");
	this.shape_14.setTransform(-48.8,4.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgOBdIAAidIggAAIAAgdIBdAAIAAAdIggAAIAACdg");
	this.shape_15.setTransform(-57.4,4.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgZBZQgLgHgGgMQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgIgHgIIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANAAAKAGQAJAGAGAKQAFALACAMIgfAEQgBgMgFgEQgFgFgGAAQgGABgEAEQgEAFAAAIQAAAKAHAIQAGAIAIAJIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_16.setTransform(-68.4,4.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgsBdIAAi6IBVAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA3AAIAAAbg");
	this.shape_17.setTransform(-79.5,4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AATBdIgVhNIgIABIgIAAIAABMIghAAIAAi6IAuAAQAZABANANQAOANAAAdQAAAPgDAJQgEAKgFAEQgFAFgFADIAbBUgAgSgIIALAAQALABAFgHQAGgGAAgRQAAgRgGgFQgFgHgLAAIgLAAg");
	this.shape_18.setTransform(-91.8,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgzBdIAAi6IAvAAQAbABAPANQAOANAAAdQAAAegOALQgPANgbAAIgOAAIAABMgAgSgIIAMAAQAOABAGgHQAGgGAAgRQAAgRgGgFQgGgHgOAAIgMAAg");
	this.shape_19.setTransform(-104.8,4.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AgPBdIAAidIgfAAIAAgdIBdAAIAAAdIgfAAIAACdg");
	this.shape_20.setTransform(-122.4,4.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_21.setTransform(-133.2,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-13,261.2,35.2);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgwBdIAAi6IAwAAQAXABANAOQANAOAAAcIAABJQAAAcgNAOQgNAOgXAAgAgPBDIALAAQAKAAAGgGQAFgGgBgPIAAhPQABgPgFgGQgGgGgKAAIgLAAg");
	this.shape.setTransform(71.1,12.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgsBdIAAi6IBVAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA3AAIAAAbg");
	this.shape_1.setTransform(59.1,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgPBdIAAidIgfAAIAAgdIBdAAIAAAdIgfAAIAACdg");
	this.shape_2.setTransform(48,12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgzBdIAAi6IAvAAQAbABAPANQAOANAAAdQAAAegOALQgPANgbgBIgOAAIAABNgAgSgIIAMAAQAOABAGgHQAGgGAAgRQAAgQgGgGQgGgHgOAAIgMAAg");
	this.shape_3.setTransform(36.7,12.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgsBdIAAi6IBVAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA3AAIAAAbg");
	this.shape_4.setTransform(24.4,12.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAGAFAMQAFAMAAAOIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHAAgEAGQgEAEAAALIAABdQAAALAEAFQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAANgFALQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_5.setTransform(11.8,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgaBaQgKgHgGgLQgFgLAAgNIAAhfQAAgNAFgLQAGgLAKgGQALgGAPgBQAQAAALAIQALAGAFAMQAFAMAAAOIAAANIggAAIAAgOQAAgMgFgFQgEgGgHAAQgHAAgEAGQgEAEAAALIAABdQAAALAEAFQAEAFAHAAQAJAAADgFQAEgFAAgJIAAgWIAgAAIAAAVQAAANgFALQgFALgLAHQgLAGgQAAQgPAAgLgGg");
	this.shape_6.setTransform(-1.2,12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_7.setTransform(-13.4,12.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgZBZQgLgIgGgLQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgJgHgHIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANABAKAFQAJAGAGAKQAFALACANIgfADQgBgMgFgFQgFgEgGAAQgGABgEAEQgEAFAAAJQAAAJAHAIQAGAJAIAIIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_8.setTransform(-30.8,12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_9.setTransform(-42.3,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AAYBdIgYh6IAAAAIgUB6IgbAAIgki6IAeAAIAUB2IABAAIAVh2IAYAAIAWB2IABAAIASh2IAeAAIghC6g");
	this.shape_10.setTransform(-57,12.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AAXBdIgGgpIghAAIgGApIgfAAIAii6IAnAAIAiC6gAAMAYIgMhPIAAAAIgLBPIAXAAg");
	this.shape_11.setTransform(-76.9,12.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgZBZQgLgIgGgLQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgJgHgHIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANABAKAFQAJAGAGAKQAFALACANIgfADQgBgMgFgFQgFgEgGAAQgGABgEAEQgEAFAAAJQAAAJAHAIQAGAJAIAIIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_12.setTransform(-88.6,12.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgZBZQgLgIgGgLQgFgMgBgOIAfgFQABAPAFAHQAFAHAGAAQAJAAAEgEQAGgFAAgIQgBgLgGgJQgHgJgHgHIgUgPQgKgJgGgMQgHgLAAgQQAAgXANgMQANgMAWAAQANABAKAFQAJAGAGAKQAFALACANIgfADQgBgMgFgFQgFgEgGAAQgGABgEAEQgEAFAAAJQAAAJAHAIQAGAJAIAIIATAPQAKAIAHAMQAGAMAAAPQAAAQgGAKQgHALgLAGQgLAFgOAAQgPAAgKgHg");
	this.shape_13.setTransform(-100.1,12.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgPBdIAAhOIgnhsIAhAAIAVBIIAAAAIAWhIIAhAAIgnBsIAABOg");
	this.shape_14.setTransform(-111.6,12.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgoBdIAAi6IAhAAIAACfIAwAAIAAAbg");
	this.shape_15.setTransform(-121.9,12.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgrBdIAAi6IBUAAIAAAdIg0AAIAAAxIAnAAIAAAaIgnAAIAAA3IA4AAIAAAbg");
	this.shape_16.setTransform(-132.9,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141,-5,220.8,35.2);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AAOA5IgDgZIgVAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAIAOIgIgvIgGAvIAOAAg");
	this.shape.setTransform(-20.5,18.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgfA5IAAhxIAdAAQAQAAAJAIQAJAHAAATQAAASgJAGQgJAIgQAAIgJAAIAAAvgAgLgEIAIAAQAHAAAEgEQAEgEAAgKQAAgKgEgEQgEgEgHAAIgIAAg");
	this.shape_1.setTransform(-27.9,18.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgVAzQgHgIgBgOIAAg5QABgJADgGQADgHAGgEQAHgEAJAAQAIAAAHAFQAHAEADAHQAEAHAAAJIAAAHIgUAAIgBgNQgBgFgCgCQgDgCgCAAQgEAAgCADQgCADgBAHIAAA5QAAAGACADQADADAEABQAEAAADgEQACgEAAgIIAAgMIgKAAIAAgOIAfAAIAAA5IgKAAIgEgIQgEAFgFACQgEADgFAAQgMAAgHgIg");
	this.shape_2.setTransform(-36.1,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgYA5IAAhxIAUAAIAABgIAdAAIAAARg");
	this.shape_3.setTransform(-46.4,18.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAGAEAEAHQADAGAAAJIAAA5QAAAIgDAHQgEAHgGAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQACAEAFAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgFAAgCAEg");
	this.shape_4.setTransform(-53.8,18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgPA3QgIgEgCgHQgEgHAAgIIAAg5QAAgJAEgGQACgHAIgEQAGgEAJAAQAKAAAHAEQAHAEADAHQADAGAAAJIAAA5QAAAIgDAHQgDAHgHAEQgHAEgKAAQgJAAgGgEgAgHglQgCADAAAGIAAA5QAAAGACADQADAEAEAAQAFAAADgEQACgDAAgGIAAg5QAAgGgCgDQgDgEgFAAQgEAAgDAEg");
	this.shape_5.setTransform(-61.8,18.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_6.setTransform(-69.8,18.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AgPA3QgHgEgDgHQgDgHgBgIIAAg5QABgJADgGQADgHAHgEQAHgEAIAAQAKAAAGAFQAHAEADAHQAEAHAAAJIAAAIIgUAAIAAgJQgBgHgDgDQgCgEgEAAQgEAAgCAEQgDADAAAGIAAA5QAAAGADADQACAEAEAAQAFAAACgDQACgDABgGIAAgOIAUAAIAAANQAAAIgEAHQgDAHgHAEQgGAEgKAAQgIAAgHgEg");
	this.shape_7.setTransform(-77.9,18.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AgPA2QgHgEgDgHQgDgHgBgJIATgDQAAAJAEAEQADAFADAAQAFAAADgDQADgDAAgFQAAgHgEgFIgIgKIgMgJQgGgFgEgHQgEgHAAgKQAAgOAIgHQAIgIANAAQAHAAAGAEQAHADADAHQADAGABAIIgSACQgBgHgEgDQgDgDgDAAQgDAAgCADQgDADAAAGQAAAGAEAFIAIAKIAMAIQAGAGAEAHQAEAHAAAJQAAAKgEAGQgEAHgHADQgHAEgIAAQgIAAgHgFg");
	this.shape_8.setTransform(-85.4,18.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_9.setTransform(-21.2,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AgVAzQgHgIAAgOIAAg5QgBgJAEgGQADgHAGgEQAHgEAJAAQAJAAAGAFQAHAEADAHQAEAHgBAJIAAAHIgTAAIgBgNQgBgFgCgCQgDgCgCAAQgDAAgDADQgDADABAHIAAA5QAAAGABADQACADAFABQAFAAACgEQADgEgBgIIAAgMIgKAAIAAgOIAeAAIAAA5IgJAAIgEgIQgEAFgEACQgFADgFAAQgMAAgHgIg");
	this.shape_10.setTransform(-29.2,0.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_11.setTransform(-35.4,0.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_12.setTransform(-41.6,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AgMA3QgHgCgDgGQgEgFAAgKIAAgJIASAAIAAAJQAAAFACACQACADAEABQADAAADgEQACgDAAgIIAAgaQAAgEgCgCQgDgDgDABQgDgBgCADQgDADgBACIgPAAIAAgQIABgSIAAgYIAuAAIAAAQIgdAAIgCAaIABAAQADgEAEgCQABgBAFAAQALAAAFAIQAFAHAAAOIAAAPQAAASgGAJQgGAJgPAAQgGAAgGgDg");
	this.shape_13.setTransform(-52.7,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AgIAJIAAgRIARAAIAAARg");
	this.shape_14.setTransform(-58.1,5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AACA5IAAgcIggAAIAAgOIAfhHIAUAAIAABHIAKAAIAAAOIgKAAIAAAcgAgPAPIASAAIAAgrIgBAAg");
	this.shape_15.setTransform(-63.5,0.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAOA5IgEgZIgUAAIgDAZIgTAAIAVhxIAXAAIAVBxgAAHAOIgHgvIgHAvIAOAAg");
	this.shape_16.setTransform(-74,0.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AAKA5IAAgzIgTAAIAAAzIgUAAIAAhxIAUAAIAAAvIATAAIAAgvIAUAAIAABxg");
	this.shape_17.setTransform(-85.1,0.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgIA5IAAhgIgTAAIAAgRIA3AAIAAARIgTAAIAABgg");
	this.shape_18.setTransform(-92.2,0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgIA5IAAhxIARAAIAABxg");
	this.shape_19.setTransform(-97.6,0.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AAOA5IgOhKIAAAAIgMBKIgQAAIgWhxIASAAIAMBHIABAAIANhHIAOAAIAOBHIALhHIASAAIgUBxg");
	this.shape_20.setTransform(-105.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.4,-11,97.5,41.2);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgTATIAAgmIAnAAIAAAmg");
	this.shape.setTransform(263.5,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_1.setTransform(252.5,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_2.setTransform(237.4,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape_3.setTransform(221.4,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("Ag5B6IAAjzIBzAAIAAAkIhJAAIAABAIA2AAIAAAjIg2AAIAABsg");
	this.shape_4.setTransform(205.3,11.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgoAPIAAgdIBRAAIAAAdg");
	this.shape_5.setTransform(191.8,14.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AgTB6IAAjPIgpAAIAAgkIB6AAIAAAkIgqAAIAADPg");
	this.shape_6.setTransform(179.5,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AhBB6IAAjzIA/AAQAfAAAQAQQAQARAAAgQAAAKgDALQgDAKgHAIQgGAIgKAEQAQAFAJAOQAJAOAAAXQAAAVgHAQQgGAPgPAKQgOAJgYAAgAgXBYIASAAQAPAAAHgKQAHgKAAgSQAAgTgIgKQgIgJgRAAIgOAAgAgXgVIAQAAQAKAAAIgIQAIgIAAgPQAAgRgHgJQgHgJgMAAIgQAAg");
	this.shape_7.setTransform(164.5,11.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_8.setTransform(148.7,11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("Ag/B6IAAjzIA+AAQAfAAARASQARASAAAmIAABfQAAAmgRASQgRASgfAAgAgVBYIAPAAQAPAAAGgIQAHgIAAgTIAAhpQAAgTgHgIQgGgIgPAAIgPAAg");
	this.shape_9.setTransform(132.3,11.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("Ag/B6IAAjzIA+AAQAfAAARASQARASAAAmIAABfQAAAmgRASQgRASgfAAgAgVBYIAPAAQAPAAAGgIQAHgIAAgTIAAhpQAAgTgHgIQgGgIgPAAIgPAAg");
	this.shape_10.setTransform(107.7,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("Ag5B6IAAjzIBvAAIAAAkIhFAAIAABAIA0AAIAAAjIg0AAIAABIIBJAAIAAAkg");
	this.shape_11.setTransform(92,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AgUB6IAAjPIgoAAIAAgkIB5AAIAAAkIgoAAIAADPg");
	this.shape_12.setTransform(77.5,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AAeB6IgHg2IgsAAIgIA2IgpAAIAtjzIAzAAIAtDzgAAQAfIgQhnIAAAAIgQBnIAgAAg");
	this.shape_13.setTransform(63.3,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AguBrQgRgRAAgfIAAi2IAqAAIAAC3QAAAOAFAGQAGAHAKAAQALAAAGgHQAFgGAAgOIAAi3IAqAAIAAC2QAAAfgRARQgRARgeAAQgdAAgRgRg");
	this.shape_14.setTransform(47.3,11.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("Ag/B6IAAjzIA/AAQAeAAARASQARASAAAmIAABfQAAAmgRASQgRASgeAAgAgVBYIAOAAQAPAAAIgIQAGgIAAgTIAAhpQAAgTgGgIQgIgIgPAAIgOAAg");
	this.shape_15.setTransform(30.3,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AAeB6IgIg2IgsAAIgHA2IgpAAIAujzIAyAAIAtDzgAARAfIgRhnIAAAAIgPBnIAgAAg");
	this.shape_16.setTransform(14.2,11.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AAZB6IgchlIgKAAIgMABIAABkIgqAAIAAjzIA7AAQAigBASARQASARAAAnQgBAUgEAMQgEANgHAFQgHAHgHADIAkBvgAgZgLIAPAAQAPAAAHgIQAIgIgBgWQABgVgIgJQgHgIgPAAIgPAAg");
	this.shape_17.setTransform(-1.5,11.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgvBtQgOgRgBgdIAAh9QAAgRAGgOQAIgPANgIQAOgIAVgBQATABAOAJQAOAJAHAPQAHAPAAATIAAAPIgoAAQAAgSgCgKQgDgKgFgEQgGgEgGAAQgIAAgFAGQgGAGAAAPIAAB8QAAAMAFAHQAEAHALAAQAKAAAGgIQAFgIAAgSIAAgYIgZAAIAAgfIBDAAIAAB6IgVAAIgHgSQgKALgJAFQgJAGgMAAQgagBgQgQg");
	this.shape_18.setTransform(-18.9,11.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("Ag/B6IAAjzIA/AAQAeAAARASQARASAAAmIAABfQAAAmgRASQgRASgeAAgAgVBYIAPAAQAOAAAIgIQAGgIAAgTIAAhpQAAgTgGgIQgIgIgOAAIgPAAg");
	this.shape_19.setTransform(-43.4,11.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AAbB6Ig0iXIAAAAIAACXIgmAAIAAjzIAnAAIAyCKIAAAAIAAiKIAmAAIAADzg");
	this.shape_20.setTransform(-60.4,11.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AAeB6IgIg2IgsAAIgHA2IgpAAIAujzIAyAAIAtDzgAAQAfIgQhnIAAAAIgPBnIAfAAg");
	this.shape_21.setTransform(-76.4,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86,-11,355.5,44.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004262").s().p("AgaA/QgLgKABgTIAAhqIAZAAIAABrQAAAIADAEQADAEAFAAQAGAAADgEQADgEAAgIIAAhrIAZAAIAABqQABATgLAKQgKAKgRAAQgQAAgKgKg");
	this.shape.setTransform(178.2,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAALALQAKALgBAWIAAA3QABAWgKALQgLALgRAAgAgMAzIAJAAQAIABAEgFQAEgFgBgLIAAg9QABgLgEgFQgEgEgIAAIgJAAg");
	this.shape_1.setTransform(168.2,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004262").s().p("AgUBFQgJgFgDgJQgEgIAAgKIAAhJQAAgKAEgIQADgJAJgFQAJgFALAAQANAAAIAFQAIAFAFAJQADAIABAKIAABJQgBAKgDAIQgFAJgIAFQgIAFgNAAQgLAAgJgFgAgJgvQgDAEAAAIIAABHQAAAIADAEQADAEAGAAQAHAAADgEQADgEgBgIIAAhHQABgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_2.setTransform(158.2,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004262").s().p("AgUBFQgIgFgFgJQgEgIAAgKIAAhJQAAgKAEgIQAFgJAIgFQAIgFAMAAQAMAAAJAFQAJAFADAJQAEAIAAAKIAABJQAAAKgEAIQgDAJgJAFQgJAFgMAAQgMAAgIgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_3.setTransform(143.8,10.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_4.setTransform(134.8,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#004262").s().p("AgkBIIAAiPIAkAAQARAAAKALQALALgBAWIAAA3QABAWgLALQgKALgRAAgAgLAzIAIAAQAHABAFgFQAEgFgBgLIAAg9QABgLgEgFQgFgEgHAAIgIAAg");
	this.shape_5.setTransform(121.5,10.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_6.setTransform(112.3,10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_7.setTransform(102.8,10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_8.setTransform(92.8,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_9.setTransform(83.4,10.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#004262").s().p("AghBIIAAiPIBDAAIAAAWIgqAAIAAAlIAfAAIAAAUIgfAAIAABAg");
	this.shape_10.setTransform(74.5,10.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_11.setTransform(65.3,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#004262").s().p("AAQBIIgehYIAAAAIAABYIgWAAIAAiPIAWAAIAdBRIAAAAIAAhRIAWAAIAACPg");
	this.shape_12.setTransform(55.9,10.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#004262").s().p("AARBIIgEggIgZAAIgFAgIgYAAIAbiPIAdAAIAbCPgAAJASIgJg8IAAAAIgIA8IARAAg");
	this.shape_13.setTransform(46.5,10.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#004262").s().p("AAOBIIgPg8IgGAAIgHABIAAA7IgZAAIAAiPIAjAAQATAAAKAKQALAKAAAXQAAAMgDAHQgCAHgEACQgEAFgEABIAVBCgAgOgGIAJAAQAIAAAEgFQAEgEAAgNQAAgNgEgFQgEgEgIAAIgJAAg");
	this.shape_14.setTransform(37.2,10.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_15.setTransform(28.1,10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#004262").s().p("AgLAYIAKgYIgJAAIAAgXIAWAAIAAAXIgMAYg");
	this.shape_16.setTransform(17.5,17.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#004262").s().p("AgTBFQgJgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAJgFQAIgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgDAEAAAIIAABHQAAAIADAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgIgFg");
	this.shape_17.setTransform(10.3,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQANAAAHAGQAJAFAEAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgDAEQgEAEABAIIAABHQgBAIAEAEQADAEAFAAQAHAAADgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgEAJgJAFQgHAFgNAAQgLAAgJgFg");
	this.shape_18.setTransform(0.3,10.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#004262").s().p("AgLBIIAAh5IgYAAIAAgWIBHAAIAAAWIgYAAIAAB5g");
	this.shape_19.setTransform(-8.6,10.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_20.setTransform(-21.2,10.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_21.setTransform(-30.4,10.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgFgIAAgKIAAhJQAAgKAFgIQAEgJAIgFQAIgFAMAAQANAAAIAFQAJAFADAJQAEAIABAKIAABJQgBAKgEAIQgDAJgJAFQgIAFgNAAQgMAAgIgFgAgJgvQgDAEABAIIAABHQgBAIADAEQADAEAGAAQAHAAADgEQADgEAAgIIAAhHQAAgIgDgEQgDgEgHAAQgGAAgDAEg");
	this.shape_22.setTransform(-39.7,10.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#004262").s().p("AANBIIAAhAIgYAAIAABAIgaAAIAAiPIAaAAIAAA7IAYAAIAAg7IAYAAIAACPg");
	this.shape_23.setTransform(-49.7,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#004262").s().p("AgUBFQgIgFgEgJQgEgIAAgKIAAhJQAAgKAEgIQAEgJAIgFQAJgFALAAQAMAAAJAGQAHAFAFAJQAEAJAAALIAAALIgZAAIAAgMQAAgJgDgEQgEgEgFAAQgFAAgEAEQgCAEAAAIIAABHQAAAIACAEQAEAEAFAAQAGAAAEgEQACgDAAgHIAAgSIAZAAIAAARQAAAKgEAIQgFAJgHAFQgJAFgMAAQgLAAgJgFg");
	this.shape_24.setTransform(-59.8,10.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#004262").s().p("AghBIIAAiPIBAAAIAAAWIgnAAIAAAlIAeAAIAAAUIgeAAIAAAqIAqAAIAAAWg");
	this.shape_25.setTransform(-73.4,10.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#004262").s().p("AAMBIIAAhAIgYAAIAABAIgZAAIAAiPIAZAAIAAA7IAYAAIAAg7IAaAAIAACPg");
	this.shape_26.setTransform(-83.1,10.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#004262").s().p("AgTBEQgIgFgFgJQgEgJgBgLIAYgEQABALAEAGQAEAFAEAAQAGAAAEgDQAEgEAAgGQAAgJgFgGQgFgHgGgGIgOgLQgIgHgFgIQgFgJAAgNQAAgRAKgJQAKgKAQAAQAKAAAIAFQAHAEAEAIQAEAIACAKIgYADQgBgJgEgEQgEgDgEAAQgEAAgDAEQgEADAAAHQABAHAFAHIAKAMIAPALQAIAHAFAJQAFAJAAAMQAAAMgFAIQgFAIgJAEQgJAFgKAAQgLAAgIgGg");
	this.shape_27.setTransform(-92.6,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-4,284.4,28);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_elissa2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_elissa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84,60);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,468,60);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_btn();
	this.instance.setTransform(-209,-14);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209,-14,74,24);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._468_logo();
	this.instance.setTransform(-110,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110,0,210,60);


// stage content:
(lib._468x60 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib._728_border();
	this.instance.setTransform(0,0,0.643,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(362));

	// Layer 17
	this.instance_1 = new lib.Symbol4();
	this.instance_1.setTransform(620.5,122,1,1,0,0,0,55,19.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(337).to({_off:false},0).to({y:62},13).wait(12));

	// Layer 16
	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(374,45,1,1,0,0,0,151.5,45);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(331).to({_off:false},0).to({alpha:1},13).wait(18));

	// Layer 6
	this.instance_3 = new lib.Symbol12();
	this.instance_3.setTransform(875.3,60.4,1,1,0,0,0,255.3,38);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(238).to({_off:false},0).to({x:463.3,y:60.9,alpha:1},11).wait(73).to({alpha:0},8).wait(32));

	// Layer 5
	this.instance_4 = new lib.Symbol11();
	this.instance_4.setTransform(771.8,20.5,1,1,0,0,0,172.8,20);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(231).to({_off:false},0).to({x:359.8,y:21,alpha:1},11).wait(80).to({alpha:0},8).wait(32));

	// Layer 3
	this.instance_5 = new lib.Symbol7();
	this.instance_5.setTransform(1000.4,60.2,1,1,0,0,0,249.9,30.8);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(138).to({_off:false},0).to({x:440.4},13).wait(69).to({alpha:0},11).wait(131));

	// Layer 12
	this.instance_6 = new lib.Symbol6();
	this.instance_6.setTransform(941.6,23.2,1,1,0,0,0,191.1,18.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(129).to({_off:false},0).to({x:381.6},13).wait(78).to({alpha:0},11).wait(131));

	// Layer 4
	this.instance_7 = new lib.Symbol10();
	this.instance_7.setTransform(920.1,61,1,1,0,0,0,180.1,23.6);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(40).to({_off:false},0).to({x:520.1},13).wait(66).to({alpha:0},9).wait(234));

	// Layer 2
	this.instance_8 = new lib.Symbol9();
	this.instance_8.setTransform(892.1,28.6,1,1,0,0,0,152.1,23.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(33).to({_off:false},0).to({x:492.1},13).wait(73).to({alpha:0},9).wait(234));

	// Layer 13
	this.instance_9 = new lib.Symbol8();
	this.instance_9.setTransform(264.5,135.2,1,1,0,0,0,60.5,25);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(26).to({_off:false},0).to({y:45.2},13).wait(80).to({alpha:0},9).wait(234));

	// Layer 1
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(89.5,45,1,1,0,0,0,89.5,45);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(331).to({_off:false},0).to({alpha:1},13).wait(18));

	// Layer 11
	this.instance_11 = new lib.Symbol2();
	this.instance_11.setTransform(-110.5,45,1,1,0,0,0,89.5,45);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({_off:false},0).to({x:89.5},13).wait(336));

	// Layer 10
	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(364,45,1,1,0,0,0,364,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(362));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(234,30,468,60);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;