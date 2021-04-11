(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Avocado_s Nigthmare _1__atlas_1", frames: [[1120,0,598,778],[1120,780,450,860],[556,0,562,852],[609,854,489,750],[0,0,554,1374],[0,1376,607,612]]},
		{name:"Avocado_s Nigthmare _1__atlas_2", frames: [[703,1812,175,93],[880,1879,163,90],[532,532,268,866],[550,1400,348,410],[802,532,83,410],[703,1907,175,93],[550,1812,151,196],[532,1400,5,131],[550,2010,137,36],[0,0,512,622],[0,624,530,530],[514,0,530,530],[0,1156,530,500],[0,1658,548,371],[880,1812,232,65]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2563,1380);


(lib.CachedBmp_8 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2563,1380);


(lib.CachedBmp_6 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2563,1460);


(lib.CachedBmp_3 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2563,1460);


(lib.babyCarriage = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.curtain = function() {
	this.initialize(img.curtain);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5334,3830);


(lib.photoBaby = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.sushi = function() {
	this.initialize(ss["Avocado_s Nigthmare _1__atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.wasabi = function() {
	this.initialize(img.wasabi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2480,3508);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.פהכועס = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8996E").s().p("AARASQgGgDgFABQgmADAJgmIAKAAQADARAQACIAKAAQAFAFADAGQACAEAAAFQgFAAgEgCg");
	this.shape.setTransform(2.5665,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C96048").s().p("AAFAUQgQgDgDgRQAFgEADgGQACgEAAgFIAJAAQgGAaAOAHQACABAAAFIgKAAg");
	this.shape_1.setTransform(2.65,28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E18866").s().p("AABARQgZgGgZgKQAAgEgCgEQgDgGgFgFQAUABALAHQAEACAFAAQAYAYAbgWQAIgHAKgFQAFAFADAGQACAEAAAEQgLASgbAAQgJAAgMgCg");
	this.shape_2.setTransform(10.15,31.8959);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#564036").s().p("AgEATQAAgFgCgEQgDgGgFgEQAFgFADgGQACgEAAgFIAJAAQAAAKAEAIQABACAFAAIAAAJQABAMgLAAIgJgCg");
	this.shape_3.setTransform(8.6772,29.0918);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#69382A").s().p("AgiAEQAVAGgBgPIAAgKIATAAIAKAAIAKAAIAKAAIAAAKQgKAFgIAGQgNAKgMAAQgNAAgNgMg");
	this.shape_4.setTransform(11.65,30.6386);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0BAA3").s().p("AgJAPQAAgFgCgEQgDgGgFgEQAWgVAOAXQADACAAAFQAAAFgCABQgIAEgKAAIgJAAg");
	this.shape_5.setTransform(9.15,25.4931);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDD7BC").s().p("AAAAPIgTAAQgFAAgBgCQgEgIAAgJQAKAAAIgEQACgBAAgFIAJAAIAUAAIAKAAQAAAFgCACQgIAHgKAFIAAAKIgKAAg");
	this.shape_6.setTransform(12.15,27.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E8815C").s().p("AgTAFQARgDAGgOQABgCAFAAIAKAAQAAAFgDADQgLARgZAEIAAgKg");
	this.shape_7.setTransform(21.15,28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F68D70").s().p("AgRAMQgCgCAAgFIAAgJQAUAFAEgOQAAgBAFAAQAFAAACADQADACAAAFQgFAAgBACQgHAOgQADQgFAAgDgDg");
	this.shape_8.setTransform(20.15,27.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E98761").s().p("AgLALQgDgGgFgFIAAgJQAVAHADgQQAAgBAFAAQAAAFACACQADADAFAAIAAAJQAAAFgDAEQgIALgSAAQAAgFgCgEg");
	this.shape_9.setTransform(17.15,30);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#704A38").s().p("AgEATIgKAAIgKAAIAAgKQAKgFAIgGQACgDAAgFIAAgKQAEAFAGADQAEACAFAAQAAAFACADQADACAFAAIAAAJQgFAAAAABQgCALgMAAQgFAAgFgCg");
	this.shape_10.setTransform(15.65,27.096);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7B4E3C").s().p("AABALQgCgGgFgFQAAgEgDgDQgCgCgFAAIAAgKIAKAAIAJAAQAZALgTAaQgBACgFAAQAAgFgCgEg");
	this.shape_11.setTransform(19.8684,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B59E87").s().p("AADAGQgIgJgTgBIAAgKIAdAAIAKAAQAFAFADAGQACADAAAFQgFAAgEACQgGADgFAFQAAgFgCgEg");
	this.shape_12.setTransform(17.65,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3BBA1").s().p("AALANQgGgDgFgFIAAAKIgJAAIgUAAIAAgKIAAgTIAUAAIAJAAQATABAJAKQACADAAAFIgKAAIAAAKQgFAAgEgCg");
	this.shape_13.setTransform(15.15,24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#582B1C").s().p("Ag7AAIAKAAQAeAAAcgFQABAAAAgFIAeAAIAKAAQAFAAACACQADADAAAFIgKAAIgeAAIAAAJIgKAAIgTAAIgKABIgPABQgTAAgGgLg");
	this.shape_14.setTransform(13.15,22.1283);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#523123").s().p("AASAhQgMgIgTAAQAAgFgCgBQgPgHAHgaQARABgCgVIAFAAQAJAAAIAEQACABAAAFQAFAFADAGQACAEAAAFQAAAEgCAEQgDAGgFAFQAFAFADAGQACAEAAAFQgFAAgDgCg");
	this.shape_15.setTransform(5.5386,27.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#714A39").s().p("AAZAUQAAgFgDgEQgOgVgWAUQAAgFgCgBQgIgEgKAAIAAgJQAFAAADgCQACgDAAgFIAKAAQAIARAfgGIAKgBIAAATIAAAKIgKAAg");
	this.shape_16.setTransform(8.65,24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#904E3C").s().p("AgdgEIAKAAIAnAAIAKAAQAAAEgBAAQgdAFgdAAIAAgJg");
	this.shape_17.setTransform(11.15,21.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FE9A72").s().p("AgiAFIgKAAIAAgJIAxAAIAKAAIAUAAIAKAAIAAAEQgjAFgiAAIgKAAg");
	this.shape_18.setTransform(11.65,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CD6E51").s().p("AgJAUIgKAAIAAgKQAFgFADgFQACgEAAgFQAFAAACgDQACgCAAgFIAKAAIAKAAQAAAFgCACQgDADgFAAIAAAJIgFAAQABAUgNAAIgCAAg");
	this.shape_19.setTransform(4.15,24.0049);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FB9B76").s().p("AgOAZIAAgKQAOgQAJgVQABgCAFAAQAAAFgCAEQgDAGgFAFIAAAJQAAAFgCAEQgDAGgEAFIgKAAg");
	this.shape_20.setTransform(1.65,25.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EF8E6B").s().p("AAFAKIgJAAIgKAAIgKAAIAAgKQAKgEALgDQADgCAFAAIAKAAIAKAAIAAAJIgKAAIAAAKIgKAAg");
	this.shape_21.setTransform(6.65,21);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A75037").s().p("AAPAKIgnAAIAAgKQAKAAAIgDQACgBAAgFIAJAAQgBAPAVgBIAAAFIgKAAg");
	this.shape_22.setTransform(37.65,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E47550").s().p("AgTAKQAVgJALgSQACgCAFAAIAAAKQAAAFgCADQgNARgYAEIAAgKg");
	this.shape_23.setTransform(25.15,25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#653526").s().p("AgZAjQgFAAgCgDQgDgCAAgFIAAgKIAKAAQAFgFAGgDQAEgCAFAAQAFAAABgDQASgagYgKIAJAAIAKAAQAbgHgGAbIgBAKQgFAAgBACQgHAOgRADIAAAKQgEAAAAABQgCALgMAAQgFAAgGgCg");
	this.shape_24.setTransform(20.7473,23.532);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6E3A29").s().p("AgDAKQAFgagaAHIAAgKIAnAAIAKAAQAAAFgCACQgDADgFAAIAAAJQAAAFgCADQgIAHgJAFIABgKg");
	this.shape_25.setTransform(24.65,21);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FAA577").s().p("AgOAJIgKAAIgUAAIAAgJQAkgJAGADQAMAGAOgEIAMgEQAEgCAFAAIAAAKQgFAAgCABQgLAKgUAAQgJAAgMgCg");
	this.shape_26.setTransform(17.65,18.114);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#843B26").s().p("AgTAPIAAgKQAFAAADgDQACgCAAgEIAAgKIAJAAQAKAAAIAEQACABAAAFQgFAAAAABQgHASgWAAIgFAAg");
	this.shape_27.setTransform(28.15,19.5089);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CD6043").s().p("AgaAOQgIgEgKAAIAAgKQAoAAAVgRQADgCAFAAIAKAAIAKAAQAAAFgCABQgIAEgKAAIAAAJQgFAAgEACQgUAIgUAKQAAgFgCgBg");
	this.shape_28.setTransform(32.65,17);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D57155").s().p("AgJAPIgeAAIgKAAIgoAAIAAgKQAjAAAjgFIAAgEQAkAGAQgNQACgDAFAAIAoAAIAKAAIAAAKIgKAAIgoAAIAAAJIgKAAIgKAAIgKAAIgKAAIAAAKIgJAAg");
	this.shape_29.setTransform(18.15,19.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F88B67").s().p("AAUAFIgKAAIgnAAIAAgJIAdAAIAKAAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_30.setTransform(25.15,17.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FA976F").s().p("AgiAPIgKAAIAAgKQArgGAlgMQAEgBAFAAIAAAKQgFAAgDACQgWARgnAAIgKAAg");
	this.shape_31.setTransform(30.65,15.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E78966").s().p("AAFAPQgCgLgLAAQgEAAgHACIAAgJIAGgBIACgCQACgCAAgFQAUgGAEAPQAAABAFAAIAAAJIgKAAIAAAKQgFAAAAgBg");
	this.shape_32.setTransform(63.15,28.4143);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FA9772").s().p("AgBANQgIgIgFgJIAAgKIAKAAIAJAAQAFAFADAGQACADAAAFIgKAAIAAAKQgFAAgBgCg");
	this.shape_33.setTransform(65.65,30.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FC956E").s().p("AAWARQgWgRgdgJIAAgKIAKAAQAdAKASAVQACADAAAFQgFAAgDgDg");
	this.shape_34.setTransform(69.15,33);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#67392A").s().p("AAPAPQgfgCgSgQQAKAAAIgEQACgBAAgFQAVgGADAPQAAABAFAAQAFAEAGADQAEACAFAAQAAAFgCACQgDADgFAAIgKgBg");
	this.shape_35.setTransform(76.65,32.4143);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D67156").s().p("AAUAiQgDgNgQADIgFABQAAgFgCgDQgSgVgegKQAAgFgCgEQgDgGgFgFQAZAJAWALIAOAIQADACAFAAQASAQAgACIAKABIAAAKQgFAAgEADQgMAGgTABQgFAAAAgBg");
	this.shape_36.setTransform(72.65,32.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E8D6BB").s().p("AAKARQgDgPgVAGIAAgJIAAgKQAWgRAGAkIABAKQgFAAAAgBg");
	this.shape_37.setTransform(76.65,30.2324);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#623D30").s().p("AAVAcIgOgIQgVgLgZgJIgKAAIAAgJQAFgFADgGQACgEAAgFIAcANQAaAMAaAMQAEACAFAAIAAAKQAAAFgCABQgIAEgKAAQgFAAgEgCg");
	this.shape_38.setTransform(70.15,29);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#674131").s().p("AAUAYQgEgPgUAGIgBgFQgKgBgHgEQgKgFgBgMIgBgCQAFAAADgCQACgDAAgFQAdAKAcAOQACAAAAAFQAAAFgCAEQgDAGgFAFQgFAAAAgBg");
	this.shape_39.setTransform(62.65,25.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EC936D").s().p("AALAXQgXgLgRgQIAAgKQAFAAACgDQADgCAAgFIAKAAIAJAAIAAAAIABACQABAMAKAGQAHAEAKAAIABAFQAAAFgCACIgCACIgGABIAAAKQgFAAgEgCg");
	this.shape_40.setTransform(59.15,26.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#654333").s().p("AAEAPIgIAAIgKAAIAAgKIAAgJIAAgIIAAgCIAKAAQgBAQAUgCIAAAFQAAAFgCADQgDACgFAAIgBAAg");
	this.shape_41.setTransform(58.65,22.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E78E69").s().p("AAKAYQgTgEgKgPQAAgFgCgDQgDgGgFgFQAFAAADgCQACgDAAgFQATAKAUAJQAFABAFAAIAAAJQAAAFgDADQgCACgFAAIAAAKIgKgBg");
	this.shape_42.setTransform(54.15,23.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E36C48").s().p("AhFAUQApgXApgUQAMgGAPAAIAeAAIAAAKIgKAAIgeAAIAAAKQgFAAgFACQgvAOgqAXIAAgKg");
	this.shape_43.setTransform(34.15,21);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E77C56").s().p("AAQAOQgYgGgQgMIAAgKIAKAAQgBAQAVgFIAJgBQAFAEADAGQACAEAAAFIgJgBg");
	this.shape_44.setTransform(49.65,22.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#DE6743").s().p("AApANQgjgSg3ABIAAgKIAeAAIAKAAQAfADAUAOQADACAFAAIAAAKQgFAAgEgCg");
	this.shape_45.setTransform(42.15,20.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EB9474").s().p("AgTAAQAFAAADgCQACgCAAgFQAVgGADAPQAAAAAFAAQAAAFgCACQgDADgFAAIgJABIgJABQgMAAABgMg");
	this.shape_46.setTransform(50.1478,21.033);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#664334").s().p("AAeAYQgUgJgTgKQgFAAAAgBQgDgOgWAGIAAgKQAFAAACgDQADgCAAgFQAdABANAQQACADAFAAQAFAEAGADIAHACIACAAIAAACIAAAIIAAAKQgFAAgFgBg");
	this.shape_47.setTransform(53.15,20.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F28D6D").s().p("AheAyQAAgFgDgCQgCgDgFAAIAAgKQARgDAHgPQABgCAFAAQAKgFAIgGQACgDAAgFQAbACAIgUQAAgCAFAAQATgKAVgIQAEgCAFAAIAoAAIAKAAIAKAAIAKAAQAAAFgCACQgDADgFAAIgeAAQgPAAgMAGQgpAUgpAXQgFAAgCACQgLATgWAJIAAAKIgKAAg");
	this.shape_48.setTransform(31.65,22);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EA8C6C").s().p("AAUAUQgFAAgDgCQgTgPgggDIAAgJQAFAAADgDQACgCAAgFIAKAAIAKAAQAKATAdAAIAKAAIAAAKQAAAFgDADQgCACgFAAIgKAAg");
	this.shape_49.setTransform(45.15,19);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EEDECB").s().p("AASAMQgOgPgcgBIAAgKIAUAAIAJAAQAKAKAHALQADADAAAFQgFAAgCgDg");
	this.shape_50.setTransform(52.65,18.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#B2A390").s().p("AgdAPQgTgEgLgOQAKAAAIgEQACgBAAgFQAbgHAHAPQABACAEAAIALAAIAnAAIAKAAIAAAJIgKAAIgfAAIgJAAIgKAAIgTAAIAAAKIgKgBg");
	this.shape_51.setTransform(52.15,16.3886);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5F3D2C").s().p("AAKAUQgcgBgLgTQAFgEADgGQACgEAAgFIATAAIAKAAQAAAFgCABQgIAEgJAAQAKAOATAEIAKABQAAAFgDACQgCADgFAAIgKAAg");
	this.shape_52.setTransform(47.15,17);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5D3022").s().p("AAFAUIgJAAIgKAAIgKAAIAAgFQgVABABgQQAqgDAcgOQAEgCAFAAQAFAAADACQACADAAAFIgKAAIgKAAIAAAJQAAAFgCAEQgDAGgFAFIgKAAg");
	this.shape_53.setTransform(42.6477,15);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#CA674D").s().p("AgsAPIAAgKQArgGAkgMQAFgBAFAAIAAAKQgFAAgEACQgdANgpAEIgKAAg");
	this.shape_54.setTransform(41.65,13.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FA976D").s().p("Ag2AZIgKAAIAAgKIAAgKIAMgDIABAAIAFAAIADAAIADgCIABAAIALAAIADAAIADgBIADgBIAFgBIAEgBIAFgCIADgDIAYgBIADAAIAFgCIAGAAIAEgBIACgBIADAAIAEgBIADgCIAGgCIADgBIABgCIABgCIACAAQAAAFgCABQgIAEgKAAIAAAKQgFAAgFABQgkALgrAHIAAAKIgKAAg");
	this.shape_55.setTransform(41.65,12.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#713926").s().p("AgTAKQgFAAgDgDQgCgCAAgFQAPAAANgEQABAAAAgFIAKAAQAKAAAIAEQACABAAAEQgFAAgDACQgMAIgTAAIgKAAg");
	this.shape_56.setTransform(57.15,10.025);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D97156").s().p("AgdAAQAKAAAIgDQACgBAAgFIAdAAIAKAAQAAAFgBAAQgdAJgdAFIAAgKg");
	this.shape_57.setTransform(49.15,11);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E77458").s().p("AgEAKIgKAAIgKAAIAAgKQAKAAAIgDQACgBAAgFIATAAIAKAAQAAAFgCABQgIADgKAAIAAAKIgJAAg");
	this.shape_58.setTransform(57.65,8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#96513E").s().p("AgvARQgCgCgFAAIAAgKQAegFAcgJQABAAAAgFQAKgFAKgDQAFgCAFAAIAKAAIAKAAQAAAFgCAAQgNAFgPAAQAAAFACACQADADAFAAQAAAEgCAAQgoAMglANQAAgFgDgDg");
	this.shape_59.setTransform(51.65,11.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FA956E").s().p("AgOAPIgeAAIAAgKQAngFAegNQAFgBAFAAIAKAAQAAAFgCABQgIAEgKAAIAAAJQgFAAgFACQgKADgJAFIgKAAg");
	this.shape_60.setTransform(52.65,8.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DCD2BD").s().p("AgdgFIAxAAIAKAAIAAAJIgKABIgSABQgVAAgKgLg");
	this.shape_61.setTransform(71.15,17.6283);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#968676").s().p("AgigMIAAgJIA7AAIAKAAQAAAEgCACQgIAEgKgBIAAAKIAAAJQAAAGgCADIgDAHQACgqguAHg");
	this.shape_62.setTransform(77.65,19.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999489").s().p("AAEAJQgEgOgUAFIAAgJQA4gCgUATQgCACgFAAQgFAAAAgBg");
	this.shape_63.setTransform(60.2735,16.9861);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FBF7E6").s().p("AACATIgJAAIgBAAIgIgCQgGgDgFgFQAAgFgCgEQgIgKgKgKIAKAAIAeAAIAJAAQAWgGADAPQAAABAFAAQAAAFADACQAaAagcAAQgLAAgUgEg");
	this.shape_64.setTransform(57.9177,19.1184);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B25F46").s().p("AgBAJQgIgEgKAAIAAgJQAKAAAIgEQABgBAAgFIAKAAIAKAAQAAAFgCACQgDADgFAAQAAAEACACQADADAFAAQAAAFgCABQgIAEgKAAQAAgFgBgBg");
	this.shape_65.setTransform(60.15,8.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E47456").s().p("AAFAKIgTAAIgKAAIAAgKQAaADAPgKQADgCAFAAQAAAFgDADQgCABgFAAIAAAKIgKAAg");
	this.shape_66.setTransform(63.65,6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FDA073").s().p("AgOAPIgKAAIgUAAIgKAAIAAgKIBjgSIAKgBIAAAKIgKAAQgFAAgDACQgPAKgagDIAAAKIgKAAg");
	this.shape_67.setTransform(61.65,5.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EEE3C9").s().p("AgTAAIAAgJIAdAAIAKAAIAAAJIAAAKQgIgLgfABg");
	this.shape_68.setTransform(69.15,12);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#7E4531").s().p("AhDARQgCgCAAgFQAFAAADgDQACgCAAgFIAUAAIAKAAIBFgSIAKgBQAKAAAIAEQACABAAAFQgFAAgFABQg3AThAAJQgFAAgDgDg");
	this.shape_69.setTransform(68.15,7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F88865").s().p("AgYAAQANgLAaACIAKAAQAAAFgBABQgaAFgWAIIAAgKg");
	this.shape_70.setTransform(69.65,3.9667);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#D06149").s().p("AgxAKQAFAAACgCQADgDAAgFIAKAAQAWgHAagHQABAAAAgFIAKAAIAKAAIAKAAQAAAFgCABQgIAEgKAAIAAAJIgKABIhFATIAAgKg");
	this.shape_71.setTransform(70.15,5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AF604B").s().p("AgGAJQgIgEgKAAIAAgJQAKAAAIgEQACgBAAgFIAJAAIAKAAIAKAAQAAAFgCABQgIAEgKAAQAFAEAGADQAEACAFAAQAAAFgBABQgOAEgOAAQAAgFgCgBg");
	this.shape_72.setTransform(75.65,4.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#844E3E").s().p("AgdAKIgKAAIAAgKQAFAAADgCQACgCAAgFIAnAAIAKAAQAFAFAGADQAEABAFAAQAAAFgBAAQgdAFgdAAIgKAAg");
	this.shape_73.setTransform(83.15,34);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E0C8B2").s().p("AAUAPIgnAAQgFAAgEgCQgGgDgFgFQA3AKARgbQACgCAFAAIAAAKQAAAEgCAEQgDAGgFAFIgKAAg");
	this.shape_74.setTransform(82.15,31.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#6A2E20").s().p("AgDASQgGgDgFgFQAFgFADgFQACgEAAgFQAEAAADgCQACgDAAgFQAFAAADACQACADAAAFQAAAFgCAEQgDAFgFAFIAAAKQgFAAgDgCg");
	this.shape_75.setTransform(86.65,32);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#D6BEAA").s().p("AgKAPIAAgKIAAgJQAPABgBgVIAFAAIABAJQAFAVgPgBIAAAKQAAAFgDADQgCACgFAAIAAgKg");
	this.shape_76.setTransform(87.2688,28.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D5674C").s().p("AgyAjQAeAAAcgFQABAAAAgFIAAgKQAFgFADgGQACgEAAgEQATgLAGgcQAAgBAFAAIABAKQAFAWgQgCIAAAKIAAAJQgIAcgYAHQgQAFgNAAQgSAAgKgKg");
	this.shape_77.setTransform(86.2688,31.4983);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#F9956B").s().p("AAPAhQg/gDgkgYQATAAAMgGQAEgDAFAAIAKAAIAKAAQASAQAogMQAXgGAIgcIAKAAIAKAAQgFAUgHATQgIAcgsAAIgGgBg");
	this.shape_78.setTransform(83.65,35.3563);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#723E2D").s().p("AgLARQgDgCgFAAIAAgKQARABgGgVIgBgJIAJAAIAKAAIAKAAIAAAKQgFAAAAABQgGAbgSALQAAgFgCgDg");
	this.shape_79.setTransform(89.15,28.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F9956A").s().p("AgJAtIgKAAIAAgKIAAgKQAQABgFgVIgBgJQASgLAGgcQAAgBAFAAIAAAKQgFAjgPAYIAAAKIAAAKIgJAAg");
	this.shape_80.setTransform(92.15,27.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CE7052").s().p("AgPAoIAAgKIAAgKQAFgFADgGQACgEAAgFQAQgHgGggIgBgKQARANgGAkIgBAKQgFAAAAABQgGAcgSALIAAgKg");
	this.shape_81.setTransform(92.7783,22);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A55842").s().p("AgFAZIAAg7IAJAAIAAAKIAAAKIABAKQAGAfgQAIIAAgKg");
	this.shape_82.setTransform(92.7783,18.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#623527").s().p("AgEA3IgKAAIAAgKIAAgeQAcATgHg6QgCgPAAgPIAKAAIAAA7IAAAKQAAAFgCAEQgDAGgFAFIAAAKIAAAKIgJAAg");
	this.shape_83.setTransform(90.65,20.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FBA177").s().p("AACAnQAGglgQgMIAAgKIAAgKIAAgKIAAgIIAAAAIABAAQAYAhgLA/QAAABgFAAIABgKg");
	this.shape_84.setTransform(94.0812,18.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D8C6B0").s().p("AAoAjIAAgKQAAgKgFgFQgFgFgHgEQgcgTgsgGIAAgKQA5ACAhAaQAEACAFAAIAAAdIAAAKIgKAAg");
	this.shape_85.setTransform(84.15,22.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CEC2B2").s().p("AgdALQAdgGASgQQACgCAAgFIAKAAQAAASgMAIQgQALgMAAQgLAAgIgIg");
	this.shape_86.setTransform(86.15,14.9083);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ECD3B4").s().p("AAABjQAAgFgBgBQgcgOgegKIAAgFQgVACABgRQBFAPglgmQgCgCAAgFQAFAAADgCQATgTg5ACIgKAAIgnAAQgJgLgCABIAAAKQgFAAgBgCQgHgPgbAHIgKAAIgUAAIAAgKIAKAAIAKAAQAlgNApgMQACAAAAgFQAcADAOgKQADgDAFAAQAKAAAIgEQACgBAAgFQBAgJA3gUQAFgBAFAAQAPAAAOgEQABgBAAgFQBBgFARAsQADALAFAKQgggMgvAIQghAHgwgDIgKAAIgeAAIAAAKQgVAIgcAFQgCAABFCLIgcgNg");
	this.shape_87.setTransform(66.15,16.0997);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#49352B").s().p("AAmAwQgFAAgDgDQghgZg6gCIAAgKQAKAAAIgEQACgBAAgEQAKgKAKgFIAAAFQASAQAdgTQAMgIAAgTIAAgKIAKAAQAFAKAEAKQABAFAAAFQAAAPACAOQAGAsgQAAQgFAAgHgEg");
	this.shape_88.setTransform(85.3181,17.2407);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FBF7E7").s().p("ABQBrIgBgKQgGglgXARIAAAKQgFAAgEgCQgagNgagMQhGiKACgBQAcgFAWgIQAfgCAIAMIAAgKIAAgKQAwADAhgGQAvgJAgAMQAFAFADAGQACAEAAAFQAAAFgCADQgTARgdAFIAAgFQgKAFgKAKIgKAAIg8AAIgKAAIgxAAQANARAkgGIAKgBQAvgHgCApIADgFQACgEAAgFQAsAGAdATQAHAEAFAFQAFAFAAAKIAAAKIgFAAQABAWgQgCIAAAKIAAAKQgFAAgCADQgNAUghAAQgMAAgPgDgAizg0IAAgKQACgBAJALIgLAAg");
	this.shape_89.setTransform(70.15,21.27);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#794637").s().p("AgEAUQAAgFgCgEQgDgGgFgFQAFgEADgGQACgEAAgFQAJAFAIAIQACACAAAEIAAAKIgKAAIAAAKIgJAAg");
	this.shape_90.setTransform(88.65,11);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#683626").s().p("AAqAVQgRgshAAFQgFAAgEgCQgGgDgFgFQAKAAAIgEQACgBAAgFQApgHAUAPQADACAFAAQAEAaARALQAEACAFAAIAAAKQAAAFgCAEQgDAGgFAFQgFgKgDgKg");
	this.shape_91.setTransform(82.15,6.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DB644C").s().p("AAlANQgUgOgpAGIgKAAIgKAAIAAgJQAZAAAXgFQABAAAAgFIAUAAIAKAAQAFAKADAKQACAEAAAFQgFAAgDgCg");
	this.shape_92.setTransform(80.65,2.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F98663").s().p("AgTAKIgKAAIgKAAIAAgKQATAAANgGQADgDAEAAIAeAAIAKAAQAAAFgBAAQgYAEgYAAIAAAKIgKAAg");
	this.shape_93.setTransform(77.15,2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FD9E74").s().p("AAZAFIgUAAIgJAAIgeAAIAAgJQAiAAAiAEIABAFIgKAAg");
	this.shape_94.setTransform(80.65,0.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#BA5B45").s().p("AAGARQgQgMgEgYQAQADAHAPQABABAFAAIAAAKIAAAKQgFAAgEgDg");
	this.shape_95.setTransform(86.65,6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F8956C").s().p("AAOAXQgHgPgQgDQAAgFgCgDQgDgLgFgKQAdAKAJAdQABAFAAAFQgFAAgBgCg");
	this.shape_96.setTransform(86.15,3.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F58E60").s().p("AAAABIAAgBIAAgCIAAAAIABAAIAAACIgBACIAAABIAAgCg");
	this.shape_97.setTransform(99.575,11);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#D26F53").s().p("AAFAUIgJAAQAAgFgCgFQgDgKgFgJIAAgKQAFAFAGADQADACAFAAIAAABIAAACIAAACIACACIACACIACABIAEABIAAAIIAAAKIgKAAg");
	this.shape_98.setTransform(91.65,13);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E78463").s().p("AALAcQgGgDgFgFQAAgFgBgCQgIgIgKgFIAAgJIAAgKIAAgKQAZATAMAfQACAEAAAEIAAABQgFAAgEgCg");
	this.shape_99.setTransform(90.15,9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F99C6E").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_100.setTransform(102.925,7.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.פהכועס, new cjs.Rectangle(0,0,103,38.7), null);


(lib.פהשמח = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(-64.5,4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,4,87.5,46.5);


(lib.פהאישה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87557").s().p("AgwABIgCAAIAAgBIgBAAIgBAAIgBAAIAIAAIgBAAIgBABIgBAAgAA1AAIABAAIAAAAIgBAAg");
	this.shape.setTransform(50.075,52.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD504C").s().p("AgPgJQA2AJgjAJIgJABQgPAAAFgTg");
	this.shape_1.setTransform(30.1165,36.0481);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CE3532").s().p("AAUAPQglgCgMgbQAdAKAcANQACABAAAFIgKAAg");
	this.shape_2.setTransform(21.5,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B82C2B").s().p("AAUAFIgnAAQgFAAgDgDQgCgCAAgEQAdAAAdAEQABAAAAAFIgKAAg");
	this.shape_3.setTransform(36.5,34.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D63634").s().p("AAUAOQglgCgMgaQAUAAAKAIQAEACAFAAQgBAPAVgBIAAAFIgKgBg");
	this.shape_4.setTransform(27.5,32.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AF4239").s().p("AAKAPIgKAAIAAgFQgUABABgPQAKAAAIgEQABgBAAgFQAKAAAIAEQACABAAAFIgKAAQAFAEADAGQACAEAAAFIgKAAg");
	this.shape_5.setTransform(30.4977,32.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E83634").s().p("AAPAZQgFAAgDgDQgWgQgJgeQAcARATAYQACADAAAFIgKAAg");
	this.shape_6.setTransform(16,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D33D2F").s().p("AgIAIQgWgagOgkQAWAJAMATQABACAFAAQAEAAACACQADADAAAFQAJAeAXAQQADADAFAAIAAAKIAAAKQgfgSgWgdg");
	this.shape_7.setTransform(13,31.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E63535").s().p("AAOAXQgMgTgVgIIAAgKIAAgKQAVAIAMATQABACAFAAIAAAKIAAAKQgFAAgBgCg");
	this.shape_8.setTransform(10.5,26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#984237").s().p("AAfAcQgLgIgUAAQAAgFgBgBQgcgOgegJIAAgKIAAgKQAKAFAKADQAFACAFAAQAYAUAjAGQAUAEAKAJQAAAFgCABQgIAEgKAAQgFAAgEgCg");
	this.shape_9.setTransform(24.5,29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1CDB9").s().p("AAPANQgKgDgJgFQgFAAgDgDQgHgGgFgKQAcAFASARQADACAAAFQgFAAgFgCg");
	this.shape_10.setTransform(19,25.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFCEBB").s().p("AAIASQgMgNgKgOIAAgKQAUAIAIAVQABAFAAAFQgFAAgCgCg");
	this.shape_11.setTransform(14,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AD3730").s().p("AAwAvQgUgOgWgNQAAgFgCgBQgcgNgTgUQAAgFgBAAQgPgDAGgWQAFAFAGADQAEACAFAAQAFAKAHAIQADACAFAAIAKAAQAJAPAMAMQADACAFAAIAKAAQAFAKAHAHQADADAFAAIAAAKIAAAKQgFAAgDgDg");
	this.shape_12.setTransform(12.9143,23);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F24543").s().p("AATAcQgMgUgVgIQAAgEgCgBQgPgHgDgRIAKAAIAKAAQASAVAdAMQACABAAAFQAAAFgDACQgCADgFAAIAAAKQgFAAgBgCg");
	this.shape_13.setTransform(10,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D73B32").s().p("AARAgQgagbgPgnIAKAAQAKAFAGAHQADADAAAFQADAQAPAHQACABAAAFIAAAKIAAAKQgFAAgDgDg");
	this.shape_14.setTransform(6,22.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DF3C31").s().p("AAAAOQgEAAgCgCQgIgIgFgJQATgRARATQADADAAAEIgKAAIAAAKIgKAAg");
	this.shape_15.setTransform(3.5,17.5861);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4D2B23").s().p("AAGAcQgGgDgEgFQAAgFgCgEQgDgGgFgFQAPACgEgWIgBgJIAJAAQgFAWAOADQABAAAAAEIAAAUIAAAKQgFAAgEgCg");
	this.shape_16.setTransform(8,16);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E44442").s().p("AAKAPIgKAAQAAgFgCgCQgHgIgKgEIAAgKIAKAAIAJAAIAKAAQgGAVAPADQABAAAAAFIgKAAg");
	this.shape_17.setTransform(6.5,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C13832").s().p("AAZAjIgKAAQAAgFgDgDQgQgTgUARQAAgFgCgEQgDgGgFgFQARgDgGgaIgBgKIAqAvQACACAFAAQAFAFADAGQACAEAAAFIgKAAg");
	this.shape_18.setTransform(4,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#48231E").s().p("AATAtQgFAAgCgDIgqguIAAgKIAAgUQAKgFAKgEQAFgBAFAAQAOAKAKANQAFAHAAAKIAAATIABAJQAFAVgOAAIgCAAg");
	this.shape_19.setTransform(4.6188,11.5048);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D83A33").s().p("AgIA2IAAgRIABgBIgBAAIAAhaIAFAAQAEAFADAGQACAEAAAFIAAAKIAAAKIAAATIAAAKIABAKQAGAbgQADIgFgBg");
	this.shape_20.setTransform(0.8783,9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D35644").s().p("AAeAKIg7AAQAAgFgCgEQgDgFgFgFQAdALAogCIAKAAIAAAKIgKAAg");
	this.shape_21.setTransform(4.5,5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AB3731").s().p("AAkAHQgSgJggACQgFAAgFABQgKAEgKAFIAAgKIAAgJIA7AAIAKAAQAKAFAIAHQACACAAAFQgFAAgEgDg");
	this.shape_22.setTransform(6,7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#693028").s().p("AgOAeIAAgUQAAgKgFgFQgKgOgPgKQAhgDARALQAEACAFAAIAUAAIAKAAIAAAKIgKAAIgnAAIAAAdIAAAKIgKAAg");
	this.shape_23.setTransform(9,9.9578);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D83F38").s().p("AApARQgOgJgbACIgJAAIgUAAQAAgFgCgCQgIgHgKgFIAAgKIAUAAIAKAAQAVAMAcAHIAKAAQAFAFADAGQACAEAAAFQgFAAgEgDg");
	this.shape_24.setTransform(13.5,7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F3E4CB").s().p("AAPAKIgnAAIAAgKIAAgJQARANAgABIAAAFIgKAAg");
	this.shape_25.setTransform(30,16);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A23D35").s().p("AATAOQgXgEgYgFQgVgFgUgJIAAgKQAbgCAOAKQAEACAFAAQAhAPA4gBIAAAFIgKAAIgeAAIAAAKQgFgFgGgBg");
	this.shape_26.setTransform(20.5,9.9826);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#822E22").s().p("AAUAJQgggGglgDIAAgJIAeAAIAKAAIAJAAIAKAAQADAQAbgGIAKgBQAAAFgCABQgIAEgKAAIgKgBg");
	this.shape_27.setTransform(28.5,12);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C93431").s().p("AgngFQAnAAAnAFIABAEIgKAAIgeAAIgJABIgMABQgQAAgCgLg");
	this.shape_28.setTransform(33.5,11.6283);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F24C44").s().p("AAUAjIgKAAQgoACgdgMIgKgBQgcgGgWgNQA3gJArgXQATgKAgADQAAAFgCADQgDACgFAAQATAkA9gCQAFAAAGADQAEACAFAAQAAAFgCABQgfAPgtAAIgWgBg");
	this.shape_29.setTransform(23.5,4.4987);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CE3326").s().p("ABZAZIgBgBIgBAAIgBAAIgBAAIhaAAIgCAAIgBAAIgBAAIAAABIgJAAIgBAAIgBgBIgBAAIAAAAIgCAAIgEAAIgBAAIgBAAIgBAAIAAABQgygFgwgJIgLgCQgmgGgMgbQAiAGAcAJQBIAZBfgCQAsAAAjgLQAigKAlgHIAAAKQgFAAgDACQggAbg8AAIgBAAg");
	this.shape_30.setTransform(46.5,49.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F44540").s().p("AgdAPQAZgTAZgRQAEgDAFAAQAAAFgCADQgWAbgjAOIAAgKg");
	this.shape_31.setTransform(69.5,39.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D2392E").s().p("AgdAZIAAgKQAFAAACgDQADgCAAgFQAagHAHgfQABgBAFAAQAAAFACACQADADAFAAQAAAFgCADQgZAdggAWIAAgKg");
	this.shape_32.setTransform(68.5,45.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D1372C").s().p("AgRAPQgCgCAAgFIAAgJQAZgFAOgKIAAAEQAAAGgCACQgNAMgOAKQgFgBgDgCg");
	this.shape_33.setTransform(72.5,41.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E63834").s().p("Ag1A/QgGgDgFgFIAAgKQAKgFAHgHQADgDAAgFQAkgOAVgbQACgDAAgFQAWgSAVgUQACgCAFAAQAAAFgCAEQgDAGgFAFIAAAKIAAAKQAAAFgDAEQgHALgKAJIAAgFQgOAKgZAFIAAAKQgFAAgBABQgHAfgbAIQgFAAgEgCg");
	this.shape_34.setTransform(71,39.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CF3D2E").s().p("AgTAUIAAgKQAFgFADgFQACgEAAgFQAQgDAHgPQABgCAFAAQAAAFgBAFQgNAegZATIAAgKg");
	this.shape_35.setTransform(78.5,34);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F5453F").s().p("AgUAhQgPgHAHgaIAKAAQAigDgSgfQgBgBAFgCQAagFADAWIAAAKIAAAKQgFAAgCABQgVAUgVASQAAgFgCgBg");
	this.shape_36.setTransform(74.3886,33.12);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#90372E").s().p("AgYAKIAAgKQAKgEAIgIQACgCAAgFIAJAAQAFAVAJgTQABgCAFAAQAAAFgDADQgRAUgdALIAAgKg");
	this.shape_37.setTransform(73,27);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E23533").s().p("AhSA3QgcgJgigGQgigQgagYQgagXgOgkIAAgKIAAgKIAKAAQAcAXAXAbIAIALQAQAXAKgJIAGAEQA/ApBfAJQA8AYA9gSQATgFAKgBIAFgFQAFgFAKgBQAagDAOgQQAFAFAGADQAEACAFAAQAAAFgDADQgCACgFAAIAAAKQglAHgiALQgjALgsABIgHAAQhaAAhGgZg");
	this.shape_38.setTransform(42,42.9769);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F84544").s().p("AgdgEIAKAAIAKAAIAdAAIAKAAQAAAEgBAAQgRAFgMAAQgTAAgKgJg");
	this.shape_39.setTransform(48.5,47.507);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FC5050").s().p("AgYBKIgeAAQAAgFgCAAQgNgFgPAAQgdgUgogMQglgMgEgtIA8AAIAKAAQCbAQBVg2QAEgCAFAAQADAMAbgNQAdgOALAPIgKAAQgHAbAPAHQACABAAAFQgFAAgEADQgaARgZATIAAAKQgKAAgHAFIgQALQgHAEgFAFQgSARglAEQgjAEgOgKIAAAKIgKAAg");
	this.shape_40.setTransform(53,39.5996);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F0403E").s().p("AhyAXIAAgKIAAgKIAKAAQAPAAANAFQACAAAAAFIgKAAIgKAAQASARApgLQABgBAAgFIAAgKQAPAKAigEQAlgEASgQQAFgFAHgEIAQgLQAHgFAKAAQAAAFgDADQgHAHgKAFIAAAKQgOAPgaADQgKABgFAFIgFAFQgKABgTAFQgZAIgbAAQgiAAgigOg");
	this.shape_41.setTransform(55,45.6654);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F44642").s().p("AgIBAIgGgEQgKAKgQgZIgIgKQgXgbgcgWQAAgFgCgDQgTgZgdgRQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFQAWANAUAOQADADAFAAQAMAcAmACIAKAAQAMAbAlACIAKABIAKAAIAKAAIAKAAQAAAFADACQACADAFAAQASAQAqgCIAAAFIgKAAIg8AAQAEAuAlAMQAoAMAdAUIgKAAIAAAKIAAAKQhggJg+gqgAAUAFQAjgJg3gKQgGAZAagGg");
	this.shape_42.setTransform(28.5,36.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#CD3534").s().p("AheAXIAAgFQgqACgSgRIAoAAIAKAAIAeAAIAKAAQAXASAugBQAbAAADgRQBAgEAvgXQAEgCAFAAIAAAKQgFAAgEACQhCAphsAAQgfAAgjgEg");
	this.shape_43.setTransform(50,34.6741);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A33330").s().p("AgxgIIBZAAIAKAAQgDAQgbAAIgDABQgsAAgWgRg");
	this.shape_44.setTransform(48.5,35.8507);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#85372C").s().p("AAPAjIhZAAIgKAAIgeAAQAAgFgBAAQgdgFgeAAIgKAAQAAgFgCgEQgDgGgFgFIAKAAIAeAAIAKAAQAgAWA6gBQAtgBAsgEQAFgBAFgFIAKAAIAKAAQAWgIAbgGQABgBAAgEQAngKAggSQAEgCAFAAIAAAKQAAAFgCABQgXAOgZAJQgFAAgEACQgvAWhAAGIgKAAg");
	this.shape_45.setTransform(51,31.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#A0433B").s().p("AgsAAQAKAAAIgEQACgBAAgFIAdAAIAKAAIAUAAIAKAAIAAAKIgKAAIgxAAIAAAJIgJABIgKABQgMAAABgLg");
	this.shape_46.setTransform(35.9978,13.1188);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BF8871").s().p("AgdgEIAUAAIAJAAIAUAAIAKAAQAAAEgBAAQgdAFgdAAIAAgJg");
	this.shape_47.setTransform(56.5,14.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F5E5C8").s().p("AgdgFQAdAAAdAFQABAAAAAEIgKABIgSABQgVAAgKgLg");
	this.shape_48.setTransform(42.5,17.6283);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BC8E79").s().p("AgdgFIAxAAIAKAAIAAAJIgKABIgSABQgVAAgKgLg");
	this.shape_49.setTransform(38.5,14.6283);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#804936").s().p("AAyAFIhtAAIAAgJIAyAAIAJAAIAyAAIAKAAIAAAJIgKAAg");
	this.shape_50.setTransform(47.5,14.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#86261D").s().p("AA3AFIgyAAIgJAAIgyAAIgKAAIAAgJIAyAAIAKAAIA7AAIAKAAIAAAJIgKAAg");
	this.shape_51.setTransform(41,13.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A52D28").s().p("AAjAFIgUAAIgKAAIgxAAIAAgJIAKAAIAKAAIAnAAIAKAAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_52.setTransform(52,13.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CB2F2F").s().p("AAjAJIgKAAIgKAAIg7AAIAAgJQAqAGATgLQAIgFAJADQAGACAFAFIAAAJIgKAAg");
	this.shape_53.setTransform(45,12.09);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F54241").s().p("AgYASQgqAAgSgRQA8AFAlgSQACgBAAgFIAyAAIAKAAIAKAAQggAkhLABIgCgBg");
	this.shape_54.setTransform(34,7.8503);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F85551").s().p("AA8AeIgyAAQgFAAgEgCQgFgDgFAAQg9ACgTgkQAFAAADgCQACgDAAgFQA5gUA+AVQAWAHAcACIAAAJIgFAAQABAWgQgCIAAAKIgKAAg");
	this.shape_55.setTransform(34.5,2.9937);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F04845").s().p("AgOAPIAAgKQAPACgBgVIAFAAIAKAAIAAAKQAAAEgCADQgIAHgJAFIgKAAg");
	this.shape_56.setTransform(43,4.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D3493A").s().p("AAUAFIgxAAIAAgJIAxAAIAKAAIAAAJIgKAAg");
	this.shape_57.setTransform(47.5,3.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D43033").s().p("AAPAHIgnAAIAAgJQAbgCAWgCIAAAEIAAAJIgKAAg");
	this.shape_58.setTransform(52,12.25);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F14B47").s().p("AAPAPIgTAAQgFAAgDgCQgHgIgFgJIAAgKIAKAAIAKAAIAJAAQgFAZAZgBIAAAFIgKAAg");
	this.shape_59.setTransform(53,4.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C43333").s().p("AAZAFIgnAAIgKAAIgKAAIAAgJIA7AAIAKAAIAAAJIgKAAg");
	this.shape_60.setTransform(58,12.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EC4643").s().p("AhBAqIAAgKQAZgKAXgNQACgCAAgFQAdgJASgWQACgDAAgFQAWAHADgQQAAgBAFAAIABAKQAGAbgbgHQADARAPAGQACABAAAFQAAAFgCADQgDACgFAAQgDgWgaAGQgGABABACQATAegjADQgKgPgdAOQgOAHgIAAQgHAAgBgGg");
	this.shape_61.setTransform(72.0973,28.788);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#922E2B").s().p("AgYATIAAgKQAVgIALgTQACgCAFAAIAKAAQAAAFgCADQgIAHgKAFIAAAJQgFAAAAABQgBALgMAAQgFAAgGgCg");
	this.shape_62.setTransform(78,23.096);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8B281F").s().p("AAUAFIgUAAIgJAAIgUAAIAAgJIAnAAIAKAAQAFAAADACQACACAAAFIgKAAg");
	this.shape_63.setTransform(59.5,13.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F4E9D0").s().p("AgigEIA7AAIAKAAIAAAEQgjAFgiAAIAAgJg");
	this.shape_64.setTransform(68,16.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#923128").s().p("AgdgFIAnAAIAKAAQAFAAACACQADADAAAEIgKAAIgKAAIgKABIgLABQgQAAgCgLg");
	this.shape_65.setTransform(66.5,12.6283);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#B86559").s().p("AgVACQgDgCgFAAIAAgJIAKAAIAKAAQADAQAagGIAKgBQAAAFgBAAQgYAFgYAAQAAgFgCgDg");
	this.shape_66.setTransform(64.5,13);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#ED5D4E").s().p("AgsAKIAAgKQAbACAOgIQADgDAFAAIAeAAIAKAAQAAAFgBAAQgnAJgnAFIgKAAg");
	this.shape_67.setTransform(57,2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EC6452").s().p("AgigFIAeAAIAJAAQAPAAAOAEQABABAAAEIgKAAQgMACgKAAQgYAAgNgLg");
	this.shape_68.setTransform(67,1.6149);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A6392F").s().p("AgbACQgCgCgFAAIAAgJIAxAAIAKAAQAFAAACACQADADAAAEIgKABQgbABgWAIQAAgFgDgDg");
	this.shape_69.setTransform(72,12);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BE675C").s().p("AAPAKIgdAAQAAgFgDgCQgCgDgFAAIAAgJIAKAAIAKAAQADAQAagCIAAAFIgKAAg");
	this.shape_70.setTransform(77,11);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E43535").s().p("AhFA7IgKAAIgUAAIgBgFQgngFgoAAIgKAAIgKAAIAAgFQg4ABgigQQAAgFgCgEQgDgGgFgFQAdALApgBIAKAAQASARAqAAQBOAAAggkQAKgFAIgIQACgCAAgFIAxAAIAKAAQAFAKAIAHQACADAFAAQAcApBSgHIAKAAQAeAAAegDQAUgCAUAAIAKAAIAAAKIgKAAIAAAKIgKAAIgyAAIAAAKIgKAAIgoAAIgKAAIgKAAIgKAAIg8AAIAAgFQgWADgcACQgFgFgGgCQgJgDgHAEQgNAIgWAAQgMAAgPgCgAEigUIgKAAIgKAAIgUAAQAAgFgCgEQgDgGgFgFQAYAKAkAFIAAAFIgKAAgAAogeIgKAAIgKAAIgxAAIgKAAIAAgKIBPAAIAKAAIAAAKIgKAAgAC+gyIgeAAIgKAAIgKAAIgKAAIgeAAIAAgKQAyAAAxAFIABAFIgKAAg");
	this.shape_71.setTransform(47.5,6.1256);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FB5250").s().p("AgMAbQgagGgjAAIAAgFQgbACAHgaQAogFAngJQABgBAAgFIAKAAIAJAAQARARArgGIAKgBIAKAAQAFAFADAGQACAEAAAEQgkAAgZAIQgJACgDAFQgIANgPAAIgMgCg");
	this.shape_72.setTransform(62.936,3.8766);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E53634").s().p("AgTAUIAAgKQAFAAACgCQADgDAAgFQAOgJAJgSQABgCAFAAQAAAFgCAEQgDAGgFAFIAAAJIAAAKQgFAAgBACQgGAPgRADIAAgKg");
	this.shape_73.setTransform(79.5,30);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D33D2D").s().p("AgYAeIAAgKQAFgFADgGQACgEAAgFQAKgJAHgMQACgDAAgFQAFgFAGgDQAEgCAFAAQAAAFgCAEQgPAqggAcIAAgKg");
	this.shape_74.setTransform(83,27);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F04341").s().p("AgQAoQgPgHgDgRQAaAHgFgaIgBgKIAAgKQAKgFAGgHQADgDAAgFQAigJgEAdIAAAKQAAAFgDAEQgHAKgKAKQgFAAgBACQgJASgOAKQAAgFgCgBg");
	this.shape_75.setTransform(80.0458,25.3934);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#57201E").s().p("AgTAUIAAgKIAAgKQAPgJAPgIQAEgCAFAAQAAAFgCACQgNAMgOAKIAAAKIgKAAg");
	this.shape_76.setTransform(81.5,19);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D24031").s().p("AgOAPIAAgKQAOgJAJgSQABgCAFAAIgBAKQgGAbgWAMIAAgKg");
	this.shape_77.setTransform(87,20.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#D73635").s().p("AgOAjQAFgdgjAJIAAgKQAPgJAMgNQADgCAAgFQAQgDAHgPQABgCAFAAQARADAHAPQABACAFAAQAAAFgCACQgDADgFAAQgFAAgBACQgJARgPAKIAAAKIAAAKQgFAAgDACQgGADgFAFIAAgKg");
	this.shape_78.setTransform(85,19.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC3A32").s().p("AACArQgHgPgRgDIAAgKIAAgKQALgFAHgGQACgDAAgFQAQABgFgWIgCgJQAIALAHAGIAAAsQgGAKgJAIIAAAKQgEAAgBgCg");
	this.shape_79.setTransform(88.75,12.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#DE3934").s().p("AgHgCIAAgKIAOAAIAAAaQgHgGgHgKg");
	this.shape_80.setTransform(90.25,8.35);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#CE3938").s().p("AgdAFIAAgJIAxAAIAKAAQAAAEgBAAQgYAFgYAAIgKAAg");
	this.shape_81.setTransform(78.5,9.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F54743").s().p("AiQgHIAUAAIAKAAQAjgBAaAHQAaAFAKgRQADgEAJgDQAZgIAjABIAUAAIAKAAIA6AgQACACAAAFIgKAAIg8AAIAAAKQgUAAgUACQgeADgdAAIgKAAIgVABQhBAAgYgjg");
	this.shape_82.setTransform(67,6.8171);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EA3B3D").s().p("AAeAFIgKAAIgxAAIgKAAIAAgJIA7AAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_83.setTransform(78.5,8.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7D3A31").s().p("AgJAPIAAgKIAAgFQgbACgDgQQAZAAAXgFQABAAAAgFIAKAAIAKAAIAKAAIAAAKQgFAAgFACQgbALgMAaIAAgKg");
	this.shape_84.setTransform(80.5,11.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#5B2220").s().p("AgYAfIAAgKQAlgVgUgZQgCgDgFAAIAAgKIAKAAQAagHADARIAAAKQAAAFgCADQgIAHgKAEIAAAKIAAAKQgFAAAAACQgHAPgRADIAAgKg");
	this.shape_85.setTransform(86,12.8979);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#862927").s().p("AAJAPIgBgKQgCgQgaAHIAAgKIAKAAIAKAAIAJAAIAKAAIABAJQAFAUgOAAIgCAAg");
	this.shape_86.setTransform(87.6188,9.5048);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#E85143").s().p("AAUAUQAAgFgCgBIg5ghIAKAAIAKAAQAVAIAcABIAKABIAAAJQAAAFgCADQgDACgFAAIAAAKIgKAAg");
	this.shape_87.setTransform(79.5,6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D03B35").s().p("AgJAPIgKAAIgKAAIAAgKIAAgJQAFAAACgDQADgCAAgFIAnAAIAKAAQAAAFgCACQgDADgFAAIAAAJIgKAAIgKAAIAAAKIgJAAg");
	this.shape_88.setTransform(85.5,7.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D13C34").s().p("AgHAKIgKAAIAAgKQAFAAADgCQACgCAAgFIAUAAIAEAAIAAAJIgPAAIAAAKIgJAAg");
	this.shape_89.setTransform(89.25,7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F68B6E").s().p("AAhAFIgVAAIgKAAIgmAAIAAgJQAkAAAlAEIAAAFIgEAAg");
	this.shape_90.setTransform(87.25,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91,52.1);


(lib.womansmile2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E87557").s().p("Ag7gHIBtAAIAKAAQgSAQgqAAQgpAAgSgQg");
	this.shape.setTransform(53,52.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CE3532").s().p("AAUAPQglgCgMgbQAdAKAcANQACABAAAFIgKAAg");
	this.shape_1.setTransform(25,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F1CDB9").s().p("AAPANQgKgDgJgFQgFAAgDgDQgHgGgFgKQAcAFATARQACACAAAFQgFAAgFgCg");
	this.shape_2.setTransform(22.5,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1D8C1").s().p("ABBAZIgeAAQAAgFgCgBQgIgEgKAAQgLgJgSgEQgkgFgYgVQAyAAAdAUQAUAOAoAAQAFAAADAGQACAEAAAFIgKAAg");
	this.shape_3.setTransform(32.5,29.4994);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FD504C").s().p("AgPgJQA2AJgjAJIgJABQgPAAAFgTg");
	this.shape_4.setTransform(33.6165,36.0481);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#984237").s().p("AAfAcQgLgIgUAAQAAgFgBgBQgcgOgegJIAAgKIAAgKQAKAFAKADQAFACAFAAQAYAUAjAGQATAEALAJQAAAFgCABQgIAEgKAAQgFAAgEgCg");
	this.shape_5.setTransform(28,29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D63634").s().p("AAUAOQglgCgMgaQAUAAAKAIQAEACAFAAQgBAPAVgBIAAAFIgKgBg");
	this.shape_6.setTransform(31,32.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AF4239").s().p("AAKAPIgKAAIAAgFQgUABABgPQAKAAAIgEQABgBAAgFQAKAAAIAEQACABAAAFIgKAAQAFAEADAGQACAEAAAFIgKAAg");
	this.shape_7.setTransform(33.9977,32.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E83634").s().p("AAPAZQgFAAgDgDQgWgQgJgeQAcARATAYQACADAAAFIgKAAg");
	this.shape_8.setTransform(19.5,32.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D33D2F").s().p("AgIAIQgWgagOgkQAWAJAMATQABACAFAAQAEAAACACQADADAAAFQAJAeAXAQQADADAFAAIAAAKIAAAKQgfgSgWgdg");
	this.shape_9.setTransform(16.5,31.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E63535").s().p("AAOAXQgMgTgVgIIAAgKIAAgKQAVAIAMATQABACAFAAIAAAKIAAAKQgFAAgBgCg");
	this.shape_10.setTransform(14,26.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EFCEBB").s().p("AAIASQgMgNgKgOIAAgKQAUAIAHAVQACAFAAAFQgFAAgCgCg");
	this.shape_11.setTransform(17.5,22);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F24543").s().p("AATAcQgMgUgVgIQAAgEgCgBQgPgHgDgRIAKAAIAKAAQASAVAdAMQACABAAAFQAAAFgDACQgCADgFAAIAAAKQgFAAgBgCg");
	this.shape_12.setTransform(13.5,24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AD3730").s().p("AAwAvQgUgOgWgNQAAgFgCgBQgcgNgTgUQAAgFgBAAQgPgDAGgWQAFAFAGADQAEACAFAAQAFAKAHAIQADACAFAAIAKAAQAJAPAMAMQADACAFAAIAKAAQAFAKAHAHQADADAFAAIAAAKIAAAKQgFAAgDgDg");
	this.shape_13.setTransform(16.4143,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D2B23").s().p("AAGAcQgGgDgEgFQAAgFgCgEQgDgGgFgFQAQACgFgWIgBgJIAJAAQgFAWAOADQABAAAAAEIAAAUIAAAKQgFAAgEgCg");
	this.shape_14.setTransform(11.5,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A79E91").s().p("AgYAUIAAgKIAAgTQAFAAACgDQADgCAAgFQATAFASAJQACABAAAEIgKAAIgdAAIAAAKIAAAKIgKAAg");
	this.shape_15.setTransform(17.5,19);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4E352D").s().p("AgCAXQgHgIgFgKIAAgJIAAgUIAKAAQAEAFAGADQAEACAFAAQAAAFgCACQgDADgFAAIAAATIAAAKQgFAAgCgCg");
	this.shape_16.setTransform(14.5,18.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D73B32").s().p("AASAgQgbgbgPgnIAKAAQAKAFAGAHQADADAAAFQADAQAPAHQACABAAAFIAAAKIAAAKQgFAAgCgDg");
	this.shape_17.setTransform(9.5,22.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E44442").s().p("AAKAPIgKAAQAAgFgCgCQgHgIgKgEIAAgKIAKAAIAJAAIAKAAQgGAVAPADQABAAAAAFIgKAAg");
	this.shape_18.setTransform(10,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DF3C31").s().p("AAAAOQgEAAgDgCQgHgIgFgJQATgRARATQADADAAAEIgKAAIAAAKIgKAAg");
	this.shape_19.setTransform(7,17.5861);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C13832").s().p("AAZAjIgKAAQAAgFgDgDQgQgTgUARQAAgFgCgEQgDgGgFgFQARgDgGgaIgBgKIAqAvQACACAFAAQAFAFADAGQACAEAAAFIgKAAg");
	this.shape_20.setTransform(7.5,14.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D83A33").s().p("AAHA1QgcgqgEhBIAdAAIAKAAQAFAFADAGQACAEAAAFIAAAKIAAAKIAAATIAAAKIABAKQAGAbgRADQgFAAgCgCg");
	this.shape_21.setTransform(2.6283,9.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#48231E").s().p("AATAtQgFAAgCgDIgqguIAAgKIAAgUQAKgFAKgEQAFgBAFAAQAOAKAKANQAFAHAAAKIAAATIABAJQAFAVgOAAIgCAAg");
	this.shape_22.setTransform(8.1188,11.5048);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#693028").s().p("AgOAeIAAgUQAAgKgFgFQgKgOgPgKQAhgDARALQAEACAFAAIAUAAIAKAAIAAAKIgKAAIgnAAIAAAdIAAAKIgKAAg");
	this.shape_23.setTransform(12.5,9.9578);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AB3731").s().p("AAkAHQgSgJggACQgFAAgFABQgKAEgKAFIAAgKIAAgJIA7AAIAKAAQAKAFAIAHQACACAAAFQgFAAgEgDg");
	this.shape_24.setTransform(9.5,7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D35644").s().p("AAeAKIg7AAQAAgFgCgEQgDgFgFgFQAdALAogCIAKAAIAAAKIgKAAg");
	this.shape_25.setTransform(8,5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F3E4CB").s().p("AAPAKIgnAAIAAgKIAAgJQARANAgABIAAAFIgKAAg");
	this.shape_26.setTransform(33.5,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F5E4CA").s().p("AAZAFIg7AAIAAgJQAiAAAjAEIAAAFIgKAAg");
	this.shape_27.setTransform(17.5,14.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FCF8E7").s().p("AAAAXIgHgCIgKAKQgEAFgEgFIgRgZQAAgFgCgBQgSgIgTgFQgGAAgDgCQgHgDgEgFIAAgKIA7AAIAKAAQArAHAuACIAKABIAAAKQgEAFgGAAIgKgBQhMgFA4AWQAFADAFAAQAoAAAUAPIAFAFQgVADgTAAQgjAAgbgLg");
	this.shape_28.setTransform(24.25,18.4203);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D83F38").s().p("AApARQgNgJgcACIgJAAIgUAAQAAgFgCgCQgIgHgKgFIAAgKIAUAAIAKAAQAVAMAcAHIAKAAQAFAFADAGQACAEAAAFQgFAAgEgDg");
	this.shape_29.setTransform(17,7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#822E22").s().p("AAUAJQgggGglgDIAAgJIAeAAIAKAAIAJAAIAKAAQADAQAbgGIAKgBQAAAFgCABQgIAEgKAAIgKgBg");
	this.shape_30.setTransform(32,12);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A23D35").s().p("AATAOQgXgEgYgFQgVgFgUgJIAAgKQAcgCANAKQAEACAFAAQAhAPA4gBIAAAFIgKAAIgeAAIAAAKQgFgFgGgBg");
	this.shape_31.setTransform(24,9.9826);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F24C44").s().p("AAUAjIgKAAQgpACgcgMIgKgBQgcgGgWgNQA3gJArgXQATgKAgADQAAAFgCADQgDACgFAAQATAkA9gCQAFAAAGADQAEACAFAAQAAAFgCABQgfAPgtAAIgWgBg");
	this.shape_32.setTransform(27,4.4987);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D1372C").s().p("AgRAPQgCgCAAgFIAAgJQAZgFAOgKIAAAEQAAAGgCACQgNAMgOAKQgFgBgDgCg");
	this.shape_33.setTransform(76,41.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CE3326").s().p("ABQAZIhtAAQgygFgxgJIgMgCQgkgGgNgbQAjAGAbAJQBIAZBfgCQAtAAAigLQAigKAlgHIAAAKQgFAAgDACQggAbg8AAIgKAAg");
	this.shape_34.setTransform(50,49.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D2392E").s().p("AgdAZIAAgKQAFAAACgDQADgCAAgFQAagHAHgfQABgBAFAAQAAAFADACQACADAFAAQAAAFgCADQgZAdggAWIAAgKg");
	this.shape_35.setTransform(72,45.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F44540").s().p("AgdAPQAZgTAagRQADgDAFAAQAAAFgCADQgWAbgjAOIAAgKg");
	this.shape_36.setTransform(73,39.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9BFAA").s().p("AgYAAIAAgJIAnAAIAKAAQAAAFgBABQgaAFgWAIIAAgKg");
	this.shape_37.setTransform(63.5,32);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E63834").s().p("Ag1A/QgGgDgFgFIAAgKQAKgFAHgHQADgDAAgFQAkgOAVgbQACgDAAgFQAWgSAVgUQACgCAFAAQAAAFgCAEQgDAGgFAFIAAAKIAAAKQAAAFgDAEQgHALgKAJIAAgFQgOAKgZAFIAAAKQgFAAgBABQgHAfgbAIQgFAAgEgCg");
	this.shape_38.setTransform(74.5,39.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E6CEB7").s().p("AgxAUQAxgUAqgbQADgCAFAAQAAAFgCACQgIAIgKAFIAAAJQgFAAgEACQgeASgoAKIAAgKg");
	this.shape_39.setTransform(71,28);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#90372E").s().p("AgYAKIAAgKQAKgEAIgIQACgCAAgFIAJAAQAFAVAJgTQABgCAFAAQAAAFgCADQgSAUgdALIAAgKg");
	this.shape_40.setTransform(76.5,27);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E23533").s().p("AhSA3QgbgJgjgGQghgQgbgYQgagXgOgkIAAgKIAAgKIAKAAQAbAXAYAbIAIALQAQAXAKgJIAGAEQA/ApBfAJQA8AYA9gSQATgFAKgBIAFgFQAFgFAKgBQAZgDAPgQQAFAFAGADQAEACAFAAQAAAFgCADQgDACgFAAIAAAKQglAHgiALQgiALgtABIgHAAQhaAAhGgZg");
	this.shape_41.setTransform(45.5,42.9769);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F84544").s().p("AgdgEIAKAAIAKAAIAdAAIAKAAQAAAEgCAAQgQAFgMAAQgTAAgKgJg");
	this.shape_42.setTransform(52,47.507);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F0403E").s().p("AhyAXIAAgKIAAgKIAKAAQAPAAANAFQACAAAAAFIgKAAIgKAAQASARAogLQACgBAAgFIAAgKQAPAKAigEQAlgEASgQQAFgFAHgEIAQgLQAHgFAKAAQAAAFgCADQgIAHgKAFIAAAKQgPAPgZADQgKABgFAFIgFAFQgKABgTAFQgZAIgbAAQgiAAgigOg");
	this.shape_43.setTransform(58.5,45.6654);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FC5050").s().p("AgYBKIgeAAQAAgFgCAAQgNgFgPAAQgdgUgogMQglgMgEgtIA8AAIAKAAQCaAQBWg2QAEgCAFAAQADAMAagNQAegOALAPIgKAAQgHAbAPAHQACABAAAFQgFAAgDADQgbARgZATIAAAKQgKAAgHAFIgQALQgHAEgFAFQgSARglAEQgjAEgOgKIAAAKIgKAAg");
	this.shape_44.setTransform(56.5,39.5996);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F44642").s().p("AgIBAIgGgEQgKAKgQgZIgIgKQgYgbgbgWQAAgFgCgDQgTgZgdgRQAAgFgDgDQgCgCgFAAIAAgKIAAgKIAAgKQAFAAACgDQADgCAAgFQAXANATAOQADADAFAAQAMAcAmACIAKAAQAMAbAlACIAKABIAKAAIAKAAIAKAAQAAAFADACQACADAFAAQASAQAqgCIAAAFIgKAAIg8AAQAEAuAlAMQAoAMAdAUIgKAAIAAAKIAAAKQhggJg+gqgAAUAFQAjgJg3gKQgGAZAagGg");
	this.shape_45.setTransform(32,36.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B82C2B").s().p("AAUAFIgnAAQgFAAgCgDQgDgCAAgEQAdAAAdAEQABAAAAAFIgKAAg");
	this.shape_46.setTransform(40,34.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CD3534").s().p("AheAXIAAgFQgqACgSgRIAoAAIAKAAIAeAAIAKAAQAWASAvgBQAbAAADgRQBAgEAvgXQAEgCAFAAIAAAKQgFAAgEACQhCAphsAAQgfAAgjgEg");
	this.shape_47.setTransform(53.5,34.6741);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A33330").s().p("AgxgIIBZAAIAKAAQgDAQgbAAIgDABQgsAAgWgRg");
	this.shape_48.setTransform(52,35.8507);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#85372C").s().p("AAPAjIhZAAIgKAAIgeAAQAAgFgBAAQgdgFgeAAIgKAAQAAgFgCgEQgDgGgFgFIAKAAIAeAAIAKAAQAhAWA5gBQAtgBAsgEQAFgBAFgFIAKAAIAKAAQAWgIAbgGQABgBAAgEQAogKAfgSQAEgCAFAAIAAAKQAAAFgCABQgXAOgZAJQgFAAgEACQgvAWhAAGIgKAAg");
	this.shape_49.setTransform(54.5,31.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E6C5AE").s().p("AhegKQBEAIBHACIAKAAIAeAAIAKAAQgFAEgFABQgtAEgsABIgHABQg1AAgegVg");
	this.shape_50.setTransform(49.5,33.0547);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EFE0C7").s().p("AAUAFIgKAAIgKAAIgdAAIAAgJIAxAAIAKAAIAAAJIgKAAg");
	this.shape_51.setTransform(58,32.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#A52D28").s().p("AAjAFIgUAAIgKAAIgxAAIAAgJIAKAAIAKAAIAnAAIAKAAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_52.setTransform(55.5,13.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#86261D").s().p("AA3AFIgyAAIgJAAIgyAAIgKAAIAAgJIAyAAIAKAAIA7AAIAKAAIAAAJIgKAAg");
	this.shape_53.setTransform(44.5,13.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BC8E79").s().p("AgdgFIAxAAIAKAAIAAAJIgKABIgSABQgVAAgKgLg");
	this.shape_54.setTransform(42,14.6283);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#804936").s().p("AAyAFIhtAAIAAgJIAyAAIAJAAIAyAAIAKAAIAAAJIgKAAg");
	this.shape_55.setTransform(51,14.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F5E5C8").s().p("AgdgFQAdAAAdAFQABAAAAAEIgKABIgSABQgVAAgKgLg");
	this.shape_56.setTransform(46,17.6283);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A0433B").s().p("AgsAAQAKAAAIgEQACgBAAgFIAdAAIAKAAIAUAAIAKAAIAAAKIgKAAIgxAAIAAAJIgJABIgKABQgMAAABgLg");
	this.shape_57.setTransform(39.4978,13.1188);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C93431").s().p("AgngFQAnAAAoAFIAAAEIgKAAIgeAAIgJABIgMABQgQAAgCgLg");
	this.shape_58.setTransform(37,11.6283);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F54241").s().p("AgYASQgqAAgSgRQA8AFAlgSQACgBAAgFIAyAAIAKAAIAKAAQggAkhLABIgCgBg");
	this.shape_59.setTransform(37.5,7.8503);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F04845").s().p("AgOAPIAAgKQAPACgBgVIAFAAIAKAAIAAAKQAAAEgCADQgIAHgJAFIgKAAg");
	this.shape_60.setTransform(46.5,4.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F85551").s().p("AA8AeIgyAAQgFAAgEgCQgFgDgFAAQg9ACgTgkQAFAAADgCQACgDAAgFQA5gUA+AVQAWAHAcACIAAAJIgFAAQABAWgQgCIAAAKIgKAAg");
	this.shape_61.setTransform(38,2.9937);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D43033").s().p("AAPAHIgnAAIAAgJQAbgCAWgCIAAAEIAAAJIgKAAg");
	this.shape_62.setTransform(55.5,12.25);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#CB2F2F").s().p("AAjAJIgKAAIgKAAIg7AAIAAgJQAqAGATgLQAIgFAJADQAGACAFAFIAAAJIgKAAg");
	this.shape_63.setTransform(48.5,12.09);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D3493A").s().p("AAUAFIgxAAIAAgJIAxAAIAKAAIAAAJIgKAAg");
	this.shape_64.setTransform(51,3.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F14B47").s().p("AAPAPIgTAAQgFAAgCgCQgIgIgFgJIAAgKIAKAAIAKAAIAJAAQgFAZAZgBIAAAFIgKAAg");
	this.shape_65.setTransform(56.5,4.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FF997E").s().p("AAjAFIgKAAIgKAAIgxAAIgKAAIAAgJIBPAAIAKAAIAAAJIgKAAg");
	this.shape_66.setTransform(51.5,2.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#7C6F61").s().p("AAFAKQABgPgUAFIAAgJQAVAHADgQQAAgBAFAAIAAATIAAAKQAAAFgCADQgDACgFAAIAAgKg");
	this.shape_67.setTransform(77.5,21);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C8C3B3").s().p("AgYAAQAbABAOgJQADgCAFAAIAAAKQgFAAgDABQgKAKgJAAQgLAAgLgLg");
	this.shape_68.setTransform(73.5,21.1454);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F9EBCE").s().p("AhAgEIB3AAIAKAAIgBAEQhAAFhAAAIAAgJg");
	this.shape_69.setTransform(56.5,17.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BF8871").s().p("AgdgEIAUAAIAJAAIAUAAIAKAAQAAAEgBAAQgdAFgdAAIAAgJg");
	this.shape_70.setTransform(60,14.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8B281F").s().p("AAUAFIgUAAIgJAAIgUAAIAAgJIAnAAIAKAAQAFAAADACQACACAAAFIgKAAg");
	this.shape_71.setTransform(63,13.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#F4E9D0").s().p("AgigEIA7AAIAKAAIAAAEQgjAFgiAAIAAgJg");
	this.shape_72.setTransform(71.5,16.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B86559").s().p("AgVACQgDgCgFAAIAAgJIAKAAIAKAAQADAQAagGIAKgBQAAAFgBAAQgYAFgYAAQAAgFgCgDg");
	this.shape_73.setTransform(68,13);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C43333").s().p("AAZAFIgnAAIgKAAIgKAAIAAgJIA7AAIAKAAIAAAJIgKAAg");
	this.shape_74.setTransform(61.5,12.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#ED5D4E").s().p("AgsAKIAAgKQAbACAOgIQADgDAFAAIAeAAIAKAAQAAAFgBAAQgnAJgnAFIgKAAg");
	this.shape_75.setTransform(60.5,2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E43535").s().p("Ag7AnIgKAAIgUAAIAAgFQgogFgoAAIgKAAIgKAAIAAgFQg4ABgigQQAAgFgCgEQgDgFgFgFQAcAKAqAAIAKAAQASAQAqAAQBOAAAggkQAKgFAIgIQACgCAAgFIAxAAIAKAAQAFAKAIAHQACADAFAAQAcApBSgHIAKAAQAeAAAegDQAUgCAUAAIAKAAIAAAKIgKAAIAAAKIgKAAIgyAAIAAAKIgKAAIgoAAIgKAAIgKAAIgKAAIg8AAIAAgFQgWADgcACQgFgFgGgCQgJgDgIAEQgMAIgWAAQgMAAgPgCg");
	this.shape_76.setTransform(50,8.1256);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#923128").s().p("AgdgFIAnAAIAKAAQAFAAACACQADADAAAEIgKAAIgKAAIgKABIgLABQgQAAgCgLg");
	this.shape_77.setTransform(70,12.6283);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A6392F").s().p("AgbACQgCgCgFAAIAAgJIAxAAIAKAAQAFAAADACQACADAAAEIgKABQgbABgWAIQAAgFgDgDg");
	this.shape_78.setTransform(75.5,12);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FB5250").s().p("AgMAbQgagGgjAAIAAgFQgbACAHgaQAogFAngJQABgBAAgFIAKAAIAJAAQARARArgGIAKgBIAKAAQAFAFADAGQACAEAAAEQgkAAgZAIQgJACgDAFQgIANgPAAIgMgCg");
	this.shape_79.setTransform(66.436,3.8766);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EC6452").s().p("AgigFIAeAAIAJAAQAPAAAOAEQABABAAAEIgKAAQgMACgKAAQgYAAgNgLg");
	this.shape_80.setTransform(70.5,1.6149);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FC826C").s().p("AAoAFIgeAAIgKAAIgJAAIgKAAIgeAAIAAgJQAxAAAxAEIABAFIgKAAg");
	this.shape_81.setTransform(66,0.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F06C56").s().p("AAUAKIgKAAIgKAAIgTAAQAAgFgCgEQgDgFgFgFQAZAJAhAFIABAFIgKAAg");
	this.shape_82.setTransform(78,3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F5453F").s().p("AgUAhQgPgHAHgaIAKAAQAigDgSgfQgBgBAFgCQAagFADAWIAAAKIAAAKQgFAAgCABQgVAUgVASQAAgFgCgBg");
	this.shape_83.setTransform(77.8886,33.12);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CF3D2E").s().p("AgTAUIAAgKQAFgFADgFQACgEAAgFQAQgDAHgPQABgCAFAAQAAAFgBAFQgNAegZATIAAgKg");
	this.shape_84.setTransform(82,34);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E53634").s().p("AgTAUIAAgKQAFAAACgCQADgDAAgFQAOgJAJgSQABgCAFAAQAAAFgCAEQgDAGgFAFIAAAJIAAAKQgFAAgBACQgGAPgRADIAAgKg");
	this.shape_85.setTransform(83,30);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#D33D2D").s().p("AgYAeIAAgKQAFgFADgGQACgEAAgFQAKgJAHgMQACgDAAgFQAFgFAGgDQAEgCAFAAQAAAFgCAEQgPAqggAcIAAgKg");
	this.shape_86.setTransform(86.5,27);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#D24031").s().p("AgOAPIAAgKQAOgJAJgSQABgCAFAAIgBAKQgGAbgWAMIAAgKg");
	this.shape_87.setTransform(90.5,20.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#EC4643").s().p("AhBAqIAAgKQAZgKAXgNQACgCAAgFQAdgJASgWQACgDAAgFQAWAHADgQQAAgBAFAAIABAKQAGAbgbgHQADARAPAGQACABAAAFQAAAFgCADQgDACgFAAQgDgWgaAGQgGABABACQATAegjADQgKgPgdAOQgOAHgIAAQgHAAgBgGg");
	this.shape_88.setTransform(75.5973,28.788);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F04341").s().p("AgQAoQgPgHgDgRQAaAHgFgaIgBgKIAAgKQAKgFAGgHQADgDAAgFQAigJgEAdIAAAKQAAAFgDAEQgHAKgKAKQgFAAgBACQgJASgOAKQAAgFgCgBg");
	this.shape_89.setTransform(83.5458,25.3934);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#922E2B").s().p("AgYATIAAgKQAVgIALgTQACgCAFAAIAKAAQAAAFgCADQgIAHgKAFIAAAJQgFAAAAABQgBALgMAAQgFAAgGgCg");
	this.shape_90.setTransform(81.5,23.096);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#4F2C24").s().p("AgdATIAAgKQAFAAADgCQACgDAAgEQAFAAACgCQADgDAAgFQAOgKAQgIQAEgCAFAAIAAAKQgFAAgCACQgMATgUAIIAAAKQgFAAgBACQgEAKgEAAQgDAAgDgMg");
	this.shape_91.setTransform(80,23.0887);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#42372F").s().p("AgTAKIAAgTQAFgFAGgDQAEgCAEAAQAFAFAGADQAEACAFAAIAAAJQgFAAgEACQgPAIgPAKIAAgKg");
	this.shape_92.setTransform(81,20);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FDFBEB").s().p("AA3BVQhHgDhEgHQAAgFgCgEQgDgGgFAAQgogBgUgOQgegUgyAAQAAgFgDgCQgSgSgdgEIgKAAQAAgFgCgFQgHgWgVgIIAAgKIAeAAIAKAAIARAZQADAFAFgFIAKgKIAGADQAsARA8gKIgGgEQgTgPgogBQgFAAgGgCQg5gXBOAFIAKAAQAFAAAFgFIAoAAIAKAAIA8AAIAKAAQANARAlgGIAJgBIAKAAQBBAABAgFIABgFIAoAAIAKAAQAjAAAjgFIAAgFQAeAAAdAFQABAAAAAFIAAAKQgFAAgEACQgGADgFAFQgFAAAAABQgDAQgWgHQgFAAgDACQgOALgcgDQAUAZAWgXQADgCAFAAQAVgGgBAQIAAAKQAAAFgCADQgDACgFAAIAAAJIgKAAQgFAAgDACQgrAbgxAVIAAAKIgKAAIgoAAIAAAKIgKAAIgyAAIAAAKIgKAAg");
	this.shape_93.setTransform(48.5,24.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#57201E").s().p("AgTAUIAAgKIAAgKQAPgJAPgIQAEgCAFAAQAAAFgCACQgNAMgOAKIAAAKIgKAAg");
	this.shape_94.setTransform(85,19);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D73635").s().p("AgOAjQAFgdgjAJIAAgKQAPgJANgNQACgCAAgFQAQgDAHgPQABgCAFAAQARADAHAPQABACAFAAQAAAFgCACQgDADgFAAQgFAAgBACQgJARgPAKIAAAKIAAAKQgFAAgDACQgGADgFAFIAAgKg");
	this.shape_95.setTransform(88.5,19.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#3B2A23").s().p("AgeArQgGgDgFgFIAAgKQARgDACgRIABgJQANgbAagLQAFgCAFAAQAFAAACADQAVAagmAUIAAAKIAAAKQgFAAgEACQgPAIgPAKQgFAAgEgCg");
	this.shape_96.setTransform(85.2352,14.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#ECD1B3").s().p("AAQAtQAAgFgBAAQgcgFgeAAIgKAAIg8AAIAAgFQgigBgQgOIAAAKIgKgBQgvgCgrgHIgBgFQgigFgjAAIAAAKIAAAKIgKAAQAAgFgBAAQgPgDAGgVIAAgKIAAgeIAoAAIAKAAQAUAKAVAEQAYAGAYAEQAGABAFAFQAlADAhAGIAKABQgBAQAVgGIAKgBIAKAAQANARAlgGIAKgBIBtAAIAKAAQAeAAAdgFQABAAAAgFIAUAAIAKAAQAZAAAYgFQABAAAAgEIAKAAIAKAAQAWgIAcgBIAKgBIAeAAIAKAAIAAAKIAAAJIgBAKQgCARgRADQAAgFgBAAQgdgFgeAAIgKAAIg8AAIAAAKIgKAAIgoAAIgKAAIh4AAIAAAKIgKAAg");
	this.shape_97.setTransform(47.4143,13.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BE675C").s().p("AAPAKIgdAAQAAgFgDgCQgCgDgFAAIAAgJIAKAAIAKAAQADAQAagCIAAAFIgKAAg");
	this.shape_98.setTransform(80.5,11);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#CE3938").s().p("AgdAFIAAgJIAxAAIAKAAQAAAEgBAAQgYAFgYAAIgKAAg");
	this.shape_99.setTransform(82,9.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F54743").s().p("AiQgHIAUAAIAKAAQAjgBAaAHQAaAFALgRQACgEAJgDQAZgIAjABIAUAAIAKAAIA6AgQACACAAAFIgKAAIg8AAIAAAKQgUAAgUACQgeADgdAAIgKAAIgVABQhBAAgYgjg");
	this.shape_100.setTransform(70.5,6.8171);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#7D3A31").s().p("AgJAPIAAgKIAAgFQgbACgDgQQAZAAAXgFQABAAAAgFIAKAAIAKAAIAKAAIAAAKQgFAAgFACQgbALgMAaIAAgKg");
	this.shape_101.setTransform(84,11.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EA3B3D").s().p("AAeAFIgKAAIgxAAIgKAAIAAgJIA7AAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_102.setTransform(82,8.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E85143").s().p("AAUAUQAAgFgCgBIg5ghIAKAAIAKAAQAVAIAcABIAKABIAAAJQAAAFgCADQgDACgFAAIAAAKIgKAAg");
	this.shape_103.setTransform(83,6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#D03B35").s().p("AgJAPIgKAAIgKAAIAAgKIAAgJQAFAAADgDQACgCAAgFIAnAAIAKAAQAAAFgDACQgCADgFAAIAAAJIgKAAIgKAAIAAAKIgJAAg");
	this.shape_104.setTransform(89,7.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#5B2220").s().p("AgYAfIAAgKQAmgVgVgZQgCgDgFAAIAAgKIAKAAQAagHADARIAAAKQAAAFgDADQgHAHgKAEIAAAKIAAAKQgFAAAAACQgHAPgRADIAAgKg");
	this.shape_105.setTransform(89.5,12.8979);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#862927").s().p("AAJAPIgBgKQgCgQgaAHIAAgKIAKAAIAKAAIAJAAIAKAAIABAJQAFAUgOAAIgCAAg");
	this.shape_106.setTransform(91.1188,9.5048);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CC3A32").s().p("AgFArQgHgPgRgDIAAgKIAAgKQAKgFAHgGQADgDAAgFQAPABgFgWIgBgJQAKAPAKAFIAEgIQABgCAFAAIgBAKQgFAlgYAWIAAAKQgEAAgBgCg");
	this.shape_107.setTransform(93,12.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#DE3934").s().p("AgOgEIAAgKIATAAIAKAAIAAAKIAAAJQgFAAgBACIgEAIQgJgFgKgOg");
	this.shape_108.setTransform(94.5,8.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D13C34").s().p("AgOAKIgKAAIAAgKQAFAAACgCQADgCAAgFIATAAIAKAAQAFAAADACQACADAAAEIgKAAIgTAAIAAAKIgKAAg");
	this.shape_109.setTransform(93.5,7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F68B6E").s().p("AAeAFIgUAAIgKAAIgnAAIAAgJQAnAAAnAEIABAFIgKAAg");
	this.shape_110.setTransform(91,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.womansmile2, new cjs.Rectangle(0,0,96,53.7), null);


(lib.womanmouth3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.womanmouth3, new cjs.Rectangle(0,0,81.5,45), null);


(lib.womanmouth2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB3020").s().p("AADADIgDgBIAAAAIgDgBIgDgBIgFgBIgBgBIgDgBIAVAAIAKAAIAAAGIgNAAg");
	this.shape.setTransform(32.5,49.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD986E").s().p("AAFACIADABIACACIgFgDgAgJgEIACAAIABABIACABIACACIgHgEg");
	this.shape_1.setTransform(22.65,49.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED3C3B").s().p("AAZAFIg7AAIAAgJIAxAAIAKAAQAFAAACADQADABAAAFIgKAAg");
	this.shape_2.setTransform(24.6,28.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D33839").s().p("AAAAPQgEAAgDgCQgMgNgUgEQAAgFgDgCQgCgDgFAAIAAgKQAcACAUAMQABABAAAFQAIAQAggGIAKgBIAAAKQgFAAgDADQgKAHgKAAQgLAAgLgKg");
	this.shape_3.setTransform(32.1,29.4712);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C53C3D").s().p("AgYAAQAfAGALgOQACgCAFAAIAAAKIAAAJIgKABIgPABQgSAAgGgLg");
	this.shape_4.setTransform(34.6,29.1283);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CF4333").s().p("AgPAJIAAgCIgBgCIgBgCIgBgBIgBgCIgBgCIgBgBIAAgCIABgCIAAgCIAAgBIAUAAIAJAAQAFAAAEADQAPAHghAKIgKAAIgEABIgBgCg");
	this.shape_5.setTransform(2.2403,31.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FB504E").s().p("AgDAIQgIgEgFgJQAYgUAIAfQACAIgGAAQgFAAgKgGg");
	this.shape_6.setTransform(13.7786,32.629);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E43734").s().p("AgdAmQgKgXgPgPQAjgJgQgIQgEgCgFAAIAAgKQAPAAANgFQACAAAAgFIAKAAIAJAAIAAAKQAIARAggGIAKgBQAAAFgBAAQg1APgZAnQgFAAAAgCg");
	this.shape_7.setTransform(7.6,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DC3B39").s().p("AgigFIAUAAIAKAAIAdAAIAKAAQAAAFgCAAQgIAEgKAAIgKABIgOABQgTAAgGgLg");
	this.shape_8.setTransform(11.6,29.6283);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A82F31").s().p("AAAAUIgTAAIAAgKIAAgKQARgCAGgPQABgCAFAAIAKAAQAAAFgCACQgIAIgKAEQAAAFACACQADADAFAAIAAAKIgKAAg");
	this.shape_9.setTransform(10.1,27);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E63838").s().p("AAUAFIgKAAIgnAAIAAgJIAxAAIAKAAIAAAJIgKAAg");
	this.shape_10.setTransform(18.1,28.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC5050").s().p("AAkAuIghgKIgZgKQgqgTgUgsQAUAAATgFQABAAAAgFIAKAAIA7AAIAKAAQAUAFAMAMQADADAFAAQAYAughAYQgHAFgKAAQgGAAgHgCg");
	this.shape_11.setTransform(24.6175,33.8212);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C53D3C").s().p("AgxAKIgeAAIAAgKQAhgGAlgCIAJgBIA8AAIAKAAIAKAAIAAAJIgKAAIgyAAIgKAAIgxAAIAAAKIgKAAg");
	this.shape_12.setTransform(19.1,28);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#611E1A").s().p("AAZAFIg7AAIAAgJIAKAAIAKAAQAYAAAYAEQABAAAAAFIgKAAg");
	this.shape_13.setTransform(22.6,26.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#74302A").s().p("AAAAPIgTAAIAAgKQAWgDAKgNQACgDAFAAIAAAKIAAAJIgKAAIAAAKIgKAAg");
	this.shape_14.setTransform(18.1,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#492523").s().p("AgJAUQABgUgQAAIAAgJQAFAAACgCQADgDAAgFIAKAAIATAAIAKAAQAAAFgCAEQgIAPgTAFIAAAKg");
	this.shape_15.setTransform(16.6,24);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5C1E1C").s().p("AgqASQgCgDAAgFQAKgFAIgGQACgDAAgFQAFgFAGgDQAEgCAFAAQAPgBgBAUIAFAAIAUAAIAKAAIAAAKIgKABQgkACghAHQgFAAgDgCg");
	this.shape_16.setTransform(14.6,25.9977);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C63F3F").s().p("AgTAPIAAgKQAPgJAPgIQAEgCAFAAQAAAFgDADQgCACgFAAIAAAJQgFAAgEACQgFADgFAFIgKAAg");
	this.shape_17.setTransform(13.1,23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DE3937").s().p("AgkAkQgPgGgDgSIAAgKQASgLAKgSQACgFAAgEQASAmAhgNQAUgIADgXIACAHQADAJAAAJIAAAKQgFABgCACQgKAOgXACIAAAKIgKAAQgFABgDACQgQAHgPALQAAgGgCgBg");
	this.shape_18.setTransform(14.6,19.75);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E53A3B").s().p("AgOAjIgKAAIAAgKQAQACgFgXIgBgIIAAgKQAQACgCgWIAFAAQADARAPAHQACABAAAFIAAAJQgFAAgBACQgHAPgQADIAAAKIgKAAg");
	this.shape_19.setTransform(8.6,24.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DD3D37").s().p("AgPAeIgUAAIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBQApgMAVgjQACgCAFAAIABAJQAFAWgQgCIAAAKQAAAFgCAAQgNAFgOAAIAAAKIgKAAg");
	this.shape_20.setTransform(3.7188,27);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3534E").s().p("AgTACIAAgJQAFAAACgDQADgCAAgFIAJAAQADARAPAGQACABAAAFQAAAFgBAAQgHABgHAAQgSAAgGgQg");
	this.shape_21.setTransform(18.1,6.8345);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2F1F1C").s().p("AgEAZIgKAAIgKAAIgUAAIAAgKQAUgFAIgPQACgEAAgFIAAgKIAKAAIATAAIAKAAIAKAAIAKAAQAAAFgDADQgRAQgUAPIAAAKIgJAAg");
	this.shape_22.setTransform(20.6,23.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D4CEC0").s().p("AAUAFIgdAAIgKAAIgKAAIAAgJQAdAAAdAEQABAAAAAFIgKAAg");
	this.shape_23.setTransform(26.1,20.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#99645D").s().p("AAFAUIgTAAIAAgKIAAgKIAAgJQAFAAADgDQACgCAAgFIAJAAIAKAAQAAAFgCACQgIAIgJAEQAEAFAGADQAEACAFAAIAAAKIgKAAg");
	this.shape_24.setTransform(21.6,19);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EFC9AF").s().p("AgnASIgUAAIAAgKQAygZBFABIAAAFIAAAKIAAAJIgKAAIhPAAIAAAKIgKAAg");
	this.shape_25.setTransform(32.1,14.2495);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F14842").s().p("Ag7AfIAAgKQARglAVgiQACgDAAgFQAIAWAegHQABAAAAgFIAKAAIAKAAQAWAVgIAMQgXAcAdgCQAAAFgCADQgJALgTABIAAAKQAAAFgCACQgDADgFAAQAAgKgDgJIgCgGQgDAWgTAIQgJADgIAAQgWAAgNgcg");
	this.shape_26.setTransform(18.1,12.9447);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F54643").s().p("AgaAQQAIgLgWgVIAvgQIAYgJQAOgGgGAVQAAAFgCAEQgDAGgFAFIAAAJQgFAAgBACQgHAPgQADIAAAKQAAAFgCABQgIAEgKAAIgEAAQgXAAAVgbg");
	this.shape_27.setTransform(26.2006,9.6931);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EF6152").s().p("AgnAYIgKAAIAAgKQAYgZAkgKQAbgGAMAMQgFAFgGAAQgaADgJANQgKASgbAAIgGAAg");
	this.shape_28.setTransform(22.1,2.6201);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DE3636").s().p("AgdAFQARgDAHgOQABgCAEAAIAUAAIAKAAQAAAFgCABQgcANgdAKIAAgKg");
	this.shape_29.setTransform(29.1,11.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FA5451").s().p("AgsAjIgKAAQAAgFgCgBQgPgHgDgRQAgACAMgSQAJgPAZgCQAGgBAFgFQAlgCAQAUQACACAFAAQAAAFgCAFQgGAVgWAIQAHgVgPAGIgYAJIgvAQIgKAAg");
	this.shape_30.setTransform(25.6,4.4861);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E63535").s().p("AAtAjIhFAAIgKAAIgUAAIAAgKQAFgFADgGQACgEAAgFQAWgHAGgWQACgFAAgFIATAAIAKAAIAKAAIAAAKIAAAKQAPATANAWQACADAAAFIgKAAg");
	this.shape_31.setTransform(34.6,6.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#DD4938").s().p("AgOADIAAgCIAAgHQALgJARAEQABAAAAAFQAAAFgCADIAAAAQgIALgTAAIAAgKg");
	this.shape_32.setTransform(65.6,38.6657);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D73129").s().p("AgHALQgHgLgKgJIAngJIAKgBIAAAEIAAAGQAAAFgCADQgNALgOAKQAAgFgDgEg");
	this.shape_33.setTransform(71.6,31);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C45535").s().p("AAAAFIAAgFIAAgEIABgBIgBACIAAACIAAABIAAACIAAABIAAACIAAAAg");
	this.shape_34.setTransform(74.175,29.45);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E53936").s().p("AASAqQgUgXgigLIgIgDQgFAAgDgCQgMgHgKgKIAeAAIAKAAQAigKAhgOQACgBAAgFQAUAFASAJQACABAAAFIgKABIgoAJQAKAKAHAKQADAEAAAFIAAACQgBAEgCACQgHAMgKAKQgFAAgCgDg");
	this.shape_35.setTransform(66.6,31.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#DF4132").s().p("AgQALQgDgGgFgFIAAgJQAWAGACgPQAAgBAFAAQAKAAAIAEQACABAAAFQAAAFgCABQgXAHgOAQQAAgFgCgEg");
	this.shape_36.setTransform(59.6,43);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E03F34").s().p("AgBAOQgIgEgKAAIAAgKQAWACAJgNIACgGQABgCAFAAIAAAIIAAACIAAAJQAAAFgDADQgHAHgKAFQAAgFgBgBg");
	this.shape_37.setTransform(62.1,40);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F44642").s().p("AAnBOIgFgFQgNAggagfQgKgKgPAYQgRgNgggCQgZgBgSgIIgGgCQg1gXg7gVIAAAIIgHAAIAAAAIgDAAQgBgDgCgBQgXgRgOgaQAagnA1gPQABgBAAgFQAKAAAIgEQACgBAAgFIAoAAIAKAAQAAAFgBABQgTAEgUAAQAUAtAqAUIAaAKIAiAJQARAFAMgIQAggXgXgwQAUASAVgPQADgDAFAAQAAAFgDADQgHAHgKAFQgFA7A3AAQBLAABLgEIBSACQgJAOgXgCIAAAKQgFAAAAABQgDAQgWgHIAAAKQgFAAAAABQgDAQgWgHQgFgWgIAVQgCAGgFAAQgggCgNAMQgFAFgGgFQgHgHgYARQgNAJgMAAQgOAAgOgOgAjcg9QAFAKAIAEQAYANgEgPQgFgTgLAAQgHAAgKAHg");
	this.shape_38.setTransform(34.2,38.1744);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D83C2D").s().p("AgxAUIAAgKQAmgCASgUQADgCAAgFQAWAGADgPQAAgBAFAAQAFAFADAGQACAEAAAFIgKAAIAAAJQgFAAgEACQgiATguAJIAAgKg");
	this.shape_39.setTransform(53.1,46);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#CF2E21").s().p("AAMAEIgEgBIg5AAIAAgGIBZAAIAKAAIAAAGIgFABIghAAg");
	this.shape_40.setTransform(39.1,49.425);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#D03728").s().p("AgTABIAAgJIAdAAIAKAAIAAAJIgKAAIgKAAIAAAFIAAAAIgEABIgPACIAAgIg");
	this.shape_41.setTransform(46.1,48.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E33731").s().p("ABuAtIhaAAIgKAAIgVAAIgPgBIgEgBIgKgBIgBgBIgDgBIgDgCIgBAAIgEgBIgJgBIgEgBIgGgBIgEgBIgDgCIgDgBIgBgBIgDgBIgBAAIgDAAIgHgCIgEgBIgMAAIgDgCIgDgCIgDgBIgDgBIgDgBIgDgCIgFgBIgDgCIgGgBIgBgCIgDgCIgDgCIgEgBIAAAAIgCgCIgCgCIgCgBIgCgBIgDgDIgDgCIgCgBIgCgCIgCgCIgDgCIgDgBIgBgCIgBgBIgDgCIgCgCIgCgCIgEgBIAAgBIgCgBIgCgCIgEgBIgEgDIgEgCIgDgBIgEgBIgCAAIAAgIQA7AVA1AXIAGABQASAHAZACQAgABARAOQAOgYAKAKQAbAeANgfIAFAFQAZAZAcgVQAYgQAHAHQAGAFAFgFQANgLAgABQAFAAACgFQAIgWAFAXQAAAEgDACQgTAVgmACIAAAKIgKAAIgeAAIAAAKIgKAAg");
	this.shape_42.setTransform(32.1,44.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#261312").s().p("AgTApQAAgFgCgBQgUgMgcgCIgKAAQAAgFgBAAQgYgFgZAAIAAgKQAUgOARgRQADgDAAgFIAeAAIAKAAQAlAHAQgLIAHAAQAnAEAoAAQAZAQANAYQACAEAAAFIgKAAIg8AAIAAAKIgKAAIgKAAIAAAKIgKAAQgFAAgCADQgHAKgQAAQgJAAgKgDg");
	this.shape_43.setTransform(34.1,24.8765);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#65201E").s().p("AAoAFIhZAAIAAgJIA7AAIAKAAIAUAAIAKAAIAAAJIgKAAg");
	this.shape_44.setTransform(45.1,26.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C23B3B").s().p("ABQAFIipAAIAAgJIAKAAIAKAAIBZAAIAKAAIAyAAIAKAAIAAAJIgKAAg");
	this.shape_45.setTransform(47.1,27.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FD5151").s().p("AipgKQAKgFAIgHQACgDAAgFQBkgeBtATIAKABQAKAKAMAIQADACAFAAIAJADQAhALAVAXQACACAFAAQAAAFgCADQgIAHgKAFQAAgFgBAAQgSgEgLAJQgFAAAAACIgDAGIhSgCQhKAEhLAAQg3AAAFg7g");
	this.shape_46.setTransform(52.0792,34.0816);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DF3C3B").s().p("AiBAGIAAgJIAAgKIAKAAICpAAIAKAAQAogFAVANQAEACAFAAIAAAJIgKAAIgeAAIgKgBQhtgShkAdIAAgKg");
	this.shape_47.setTransform(50.1,29.4404);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#882324").s().p("AAgAPQgFAAgEgCQgVgMgnAEIAAgJQAPAAAOgFQACAAAAgFQAfAHANAWg");
	this.shape_48.setTransform(59.85,27.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5D2320").s().p("AAFAPIgxAAIAAgKIAeAAIAKAAQApADgUgPQgCgCAAgFIAKAAQAKAFAIAIQACABAAAFQAAAFgBAAQgOAFgPAAIgKAAg");
	this.shape_49.setTransform(54.6,25.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#7E302D").s().p("AAKAPQgFAAgDgCQgLgIgKgJIAAgKQATAKASAMQACACAAAFIgKAAg");
	this.shape_50.setTransform(55.1,22.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3F2E28").s().p("AAGAUQAAgFgBgBQgfgHgHgaIAUAAIAKAAQAJAKALAHQAEACAFAAQAAAFACACQARANgdAAIgKAAg");
	this.shape_51.setTransform(53.5233,24.0174);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#592F27").s().p("AAKAPIgTAAQgFAAgDgCQgCgDAAgFQAFgFADgFQACgEAAgFIAJAAQAFAKAIAHQACACAFAAIAAAKIgKAAg");
	this.shape_52.setTransform(51.1,20.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#311E1A").s().p("AAtAZIgeAAIgKAAIgTAAQAAgFgCgEQgNgZgZgPIAKAAIAKAAIAeAAIAJAAQAAAFACADQADACAFAAQAHAaAgAIQABAAAAAFIgKAAg");
	this.shape_53.setTransform(48.6,23.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C9B4AB").s().p("AAFAKIgdAAIAAgKQAUAAASgEQABAAAAgFIAKAAQAAAFgCAEQgDAFgFAFIgKAAg");
	this.shape_54.setTransform(47.6,20);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FAF4E5").s().p("Ag7AYQAAgFgBAAQgdgFgeAAQgFAAgEgCQgGgDgFgFQAKgEAIgIQACgCAAgFQAVAGAEgPQAAgBAFAAIAUAAIAKAAIBtAAIAKAAIAUAAIAKAAQAcAHAPATQACADAFAAQAAAFgBAAQgTAFgUAAIAAAKIgKAAIgKAAQgoAAgngFIgGAAQgLAHgSAAQgLAAgOgCg");
	this.shape_55.setTransform(35.1,18.6324);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F7EBD3").s().p("AAyAFIhtAAIAAgJIBPAAIAKAAQAPAAAOAEQABAAAAAFIgKAAg");
	this.shape_56.setTransform(35.1,15.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#9F4037").s().p("AAUAUQgFAAgCgDQgOgTgcgHIAAgKQAkAIAVAXQACADAAAFIgKAAg");
	this.shape_57.setTransform(47.1,17);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EFC5AC").s().p("AAUAPIgUAAQAAgFAAAAQgOgFgPAAIAAgJIAAgKIAKAAIAKAAQAJAOAUAEIAKABIAAAKIgKAAg");
	this.shape_58.setTransform(41.1,14.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E03A37").s().p("AAPAiQAAgFgCgDQgUgYglgHIAAgKIAAgKQAggTAIAaQAAADAEAFQAVASAYAQQgFAAgEACQgGADgFAFIgKAAg");
	this.shape_59.setTransform(48.6,15.6033);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#BA3F38").s().p("AhZAiIgKAAIgKAAIAAgKQATAAAJgLQACgEAAgFQAKAAAIgEQACAAAAgFQAegKAcgOQABgBAAgFIBGAAIAKAAQAKAKASAFQACAAAAAFQgFAAAAABQgEAPgVgGIgKAAIgKAAIAAgFQhFAAgyAYIAAAKQgFAAAAABQgCALgMAAQgFAAgGgCg");
	this.shape_60.setTransform(32.1,13.596);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BC4338").s().p("AAKAOQgTgEgKgOQAUAGAEgPQAAgBAFAAQAFAAACACQADADAAAFIAAAJIAAAKIgKgBg");
	this.shape_61.setTransform(42.1,13.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F54D49").s().p("AAZAKIg7AAIAAgKIAAgJQAlADAeAKQACABAAAFIgKAAg");
	this.shape_62.setTransform(40.6,4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F88A6B").s().p("AAUAFIgxAAIAAgJQAdAAAdAEQABAAAAAFIgKAAg");
	this.shape_63.setTransform(47.1,0.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F65751").s().p("AA2AgQgpgIgbgQQAAgFgCgBQgegLgmgCIgKAAIAAgKQAtAFAagNQAEgCAFAAIAxAAIAKAAQAZAUAWAVQADADAAAFQgPAKgRAEIgDAAIgGAAg");
	this.shape_64.setTransform(45.6,4.225);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EB5A47").s().p("AAGAXQgWgLACgkQARASAKAWQACAEAAAFQgFAAgEgCg");
	this.shape_65.setTransform(57.588,10.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F44641").s().p("ABaBDIgygEQgYgQgUgTQgFgFAAgDQgIgZggASQAAgFgDgDQgCgCgFAAQAAgEgCgBQgSgFgKgJQAAgFgCgEQgNgVgPgUIA8AAIAKAAQAcAQAoAIQAGABADgBQARgEAPgKQAFAFADAGQACAEAAAFQgDAkAYALQAEACAFAAQAKAFAHAHQADADAAAFIgVAdQgEAFgEAAIgBAAg");
	this.shape_66.setTransform(49.1,11.7271);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E03F38").s().p("AgYgCQARACgGgWIgBgKQAVAYAQAaQACAEAAAFQgFAAgEACQgHAEgGAAQgRAAgKgjg");
	this.shape_67.setTransform(63.6,20.2815);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#DE3736").s().p("AAZBBIAFAAQgMgXgggHQAAgFgCgCQgIgIgKgFQAAgFgCgCQgSgMgUgKQgFAAgCgCQgIgIgFgKQAFgFAGgDQAEgCAFAAIAyAEQAFABAEgGIAUgdQAFAFADAGQACAEAAAFIABAJQAGAWgRgBQANAuAcgPQAEgCAFAAQAUAPARASQADACAAAFQAAAFgCABQghAOgjAKIAAgKg");
	this.shape_68.setTransform(60.6,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.womanmouth2, new cjs.Rectangle(0,0,74.3,50.3), null);


(lib.woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(80.1,10.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman, new cjs.Rectangle(0,0,299,443.1), null);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.start = new cjs.Text("Start", "normal 700 96px 'Rubik'", "#FFFFFF");
	this.start.name = "start";
	this.start.textAlign = "center";
	this.start.lineHeight = 119;
	this.start.lineWidth = 528;
	this.start.parent = this;
	this.start.setTransform(250.3,11.2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.start);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("A9uKjQg5AAgpgQQhlgpAAiOIAAu3QAAjHDHAAMA7dAAAQDHAAAADHIAAO3QAADHjHAAg");
	this.shape.setTransform(254.85,67.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.start}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,0,532.1,135.1);


(lib.sidescreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_19();
	this.instance.setTransform(0,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_18();
	this.instance_1.setTransform(140.8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sidescreen, new cjs.Rectangle(0,0,182.3,205), null);


(lib.Scene_1_wasabi = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wasabi
	this.instance = new lib.wasabi();
	this.instance.setTransform(892,-7,0.144,0.144);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(374).to({_off:false},0).wait(131));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.rigthHandWoman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E773A").s().p("AAAABIABgBIgBABg");
	this.shape.setTransform(0.1098,66.4266,1,1,54.5249);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AALEHIgEgDIgIgFIABgDIAAgBIgBgFQgBgFACgKQAGgxAOgvIAJgfQAFgSACgNIAAgBQgOAigZAzQgTAngNASQgIAMgJAEIgDABIgCACIgBAAQgQAEgRgMQgHgFgDgHQgCgEABgNIgCgBIAEgIIAEgQQADgHAHgNQAnhFAOhNQACgOAAgHIAAgFQABgEgBgEQgDgIgLgCQgGgBgKADIhEAQQgPAEgHAAQgKAAgQgFQgSgFgLgJQgOgLABgRQABgJAHgLQAIgMANgKIAOgFQAQgGAXgOIAMgIIAQgEIAngNIAqgSIAogQIAPgFQAVgGALgHIAMgLQAXgWAKgUQACgFAEgEICEBMIgGAQIgBACIgBABQAAAFgDAGQgfBAgHBFIgDAXIgEBBIgBAnIABAhIAAARIACAWQAAAJgDANQgGAXgMATQgLAQgLAFQgHACgIgBQgIgBgFgFQgEgDgCgGIgBgHQgDgOACgaIABgWQAEgngGgVIgCABQgPAogLAiIgEAVIgDAMIgEAOQgLAfgTAEQgEADgDABIgDAAQgIAAgKgIgAjxhEIACgCIgBACg");
	this.shape_1.setTransform(28.8304,58.7293,1,1,54.5249);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1E231C").s().p("AluEvQgDgsgJgrQAggDAagIQAygPAmgVQB1gnBbhBQA0gjAQgPIARgPQDFjwALgyQAKgwBEAIQAoAPgJBBIgBAKQg4B3hHBmIgKALQhIBIhoBRIgCACIgIAGQgrAigRAFIg2AdQhBAnhsAkIAWgGIgUAGQhCAUhEARIgBgeg");
	this.shape_2.setTransform(92.9412,33.2434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rigthHandWoman, new cjs.Rectangle(0,0,130.9,85.8), null);


(lib.rigthHandMan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E773A").s().p("AAAABIABgBIgBABg");
	this.shape.setTransform(11.4838,148.341,0.9998,0.9998,3.9986);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AALEHIgEgDIgIgFIABgDIAAgBIgBgFQgBgFACgKQAGgxAOgvIAJgfQAFgSACgNIAAgBQgOAigZAzQgTAngNASQgIAMgJAEIgDABIgCACIgBAAQgQAEgRgMQgHgFgDgHQgCgEABgNIgCgBIAEgIIAEgQQADgHAHgNQAnhFAOhNQACgOAAgHIAAgFQABgEgBgEQgDgIgLgCQgGgBgKADIhEAQQgPAEgHAAQgKAAgQgFQgSgFgLgJQgOgLABgRQABgJAHgLQAIgMANgKIAOgFQAQgGAXgOIAMgIIAQgEIAngNIAqgSIAogQIAPgFQAVgGALgHIAMgLQAXgWAKgUQACgFAEgEICEBMIgGAQIgBACIgBABQAAAFgDAGQgfBAgHBFIgDAXIgEBBIgBAnIABAhIAAARIACAWQAAAJgDANQgGAXgMATQgLAQgLAFQgHACgIgBQgIgBgFgFQgEgDgCgGIgBgHQgDgOACgaIABgWQAEgngGgVIgCABQgPAogLAiIgEAVIgDAMIgEAOQgLAfgTAEQgEADgDABIgDAAQgIAAgKgIgAjxhEIACgCIgBACg");
	this.shape_1.setTransform(23.7984,121.2824,0.9998,0.9998,3.9986);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191E1B").s().p("AiEF/IgKgtIgch3QgCgGAAgPIgBghIgFhAQgFgvAKhOIACgEIACgKIABgBIAJgjIABgBIAAgBIAHgYQAJgfACgDIAPggIAOglQAahFAnhCIAIgGIBdhsIABgFIAMgMQALgKAOgIIAfgSIAJgEIADABQAaAcAIAMQAIALADALQADAKgYAdIgNARIAAABIgEACIgBACIgCACIgBAEIgHAJIgSAXIgbAiIgBABIAAABIgBABIgEAEIgDAEIgCACIgCABIgBACIgCADIgCABIgBACIgBADIgCACIgaAlIAAAAIgEALQgSAvgPAYQgNAYAAAEQhXC5A7DgQABAEACAEQARA4AdAvQARAiAXAdIhxBCQgmg+gfhBgABMmdIAAABIACgEIgCADgAA5nHIABgCIABABIAAgDIAAAAIgCAEg");
	this.shape_2.setTransform(45.5531,51.9674,0.9998,0.9998,0,3.9986,-176.0014);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rigthHandMan, new cjs.Rectangle(0.2,0.2,63.099999999999994,148.3), null);


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Replay", "normal 700 96px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 119;
	this.text.lineWidth = 528;
	this.text.parent = this;
	this.text.setTransform(266.05,4.7);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("A9uKjQg5AAgpgQQhlgpAAiOIAAu3QAAjHDHAAMA7dAAAQDHAAAADHIAAO3QAADHjHAAg");
	this.shape.setTransform(254.85,67.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,532.1,135.1);


(lib.questionmark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhpCcQgyAAgBgzIAAjSQABgyAygBIDSAAQAzABAAAyIAADSQAAAzgzAAg");
	this.shape.setTransform(55.3,134.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AifJHIgHgEIgCgDIAAAAQgbkjDYipIC0iWIAFgGIAAgBQBYizithcIgSgGIgBgBQiRgWhYAyQhfBDggCWIkrgmQABj2D0iWQFnieEWCoQCaBaA7CgQBTEDkJDLQiIBdhABoIAAABIgCAEIgCAGIgCADIgCAIQgCAHgBA8QgBAyABAYIgCAFIgFACIgGACQhKADhIAAQhJAAhIgDg");
	this.shape_1.setTransform(55.7793,58.5837);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.questionmark, new cjs.Rectangle(0,0,111.6,150.5), null);


(lib.mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_17();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mouth, new cjs.Rectangle(0,0,87.5,46.5), null);


(lib.manmouth3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.manmouth3, new cjs.Rectangle(0,0,75.5,98), null);


(lib.manmouth2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FC9C70").s().p("AggARIgFgEIgFgCIA0gUIAOgGQAEgCAFAAQAAAFADACQACADAFAAQAAAFgBAAIgHACQghAKggAIIgCgBg");
	this.shape.setTransform(5.725,18.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E77952").s().p("AgkAXIgIgDIgFAAQASgMATgKIALgGQABgBAAgEQAcACAOgKQADgCAFAAQAAAFgCACQgDACgFABIAAAKQgFAAgEABIgOAGIg0AUIgBgBg");
	this.shape_1.setTransform(5.025,17.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0845B").s().p("AgdAAQAQgFATgCIAOgBIAKgBQAAAFgBAAIgSAFQgUAFgUAEIAAgKg");
	this.shape_2.setTransform(15.05,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EF9368").s().p("AAeAKIhDAAIgCAAIAAgBIAAgJQAcgBAVgHQAFgBAFAAQAFAFAGADQAEABAFAAIAAAKIgKAAg");
	this.shape_3.setTransform(18.05,17);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3885E").s().p("AhAAUIAAgKIADAAQA6gOA6gOIAKgBIAAAKQgZAJgaAEIgHACQgbANgrABIgBAAg");
	this.shape_4.setTransform(24.55,10);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F99E6F").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_5.setTransform(32.7,0.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F79D75").s().p("ABVAFIizAAIAAgJICzAAIAKAAIAAAJIgKAAg");
	this.shape_6.setTransform(31.55,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DF6F4F").s().p("ABaAFIizAAQgFAAgEgCQgGgDgFgEIDRAAIAKAAQAAAEgDACQgCADgFAAIgKAAg");
	this.shape_7.setTransform(31.05,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA8661").s().p("AAPAKIgnAAIAAgKQAFAAACgCQADgCAAgFQATAAATAFQABAAAAAEIAAAKIgKAAg");
	this.shape_8.setTransform(43.55,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E28258").s().p("AAUAFIgxAAIAAgJQAdAAAdAEQABAAAAAFIgKAAg");
	this.shape_9.setTransform(49.05,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F3835A").s().p("AAyAXQgfgKgcgNQgZgKgWgMIgDgCIAFABQAgAHAfAIIApAMQAFABAFAAIAAAKIAAAKQgFAAgFgCg");
	this.shape_10.setTransform(52.05,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FEAB7F").s().p("AAMARQgGgCgFAAIgGAAQgngDgEgfQAjgBAZAGQATAFAQAIQACABAAADIgBAGQgDALgOAAQgIAAgLgDg");
	this.shape_11.setTransform(40.975,12.0266);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FD976D").s().p("AD1AxIgCAAQgfgGglgDQAAgFgBAAQgdgFgeAAQAAgFgBAAQgTgFgUAAIgKAAIjRAAQgFAAgFABQgWAHgcACIAAAJIAAABIgKAAIgeAAQgFAAgDgDQgCgCAAgFIAAgKQAFAAADgCQACgDAAgFIACAAQAJgBAHgDQACgBAAgFQAUgDAVgFIASgGQABAAAAgFIABAAQArgBAcgNIAHgCQAagEAZgKIBjAAIAKAAQADARAbgGIADAAIAHgBIADACQAWAMAZALQAdANAfAJQAFACAFAAQAFAAACACQADADAAAFQgFAAgEACQgGADgFAFQADARAbgCIAAAFIgKgBgAAPgnQAEAhAoACIAGAAQAFAAAGACQAfAJAGgRIAAgGQAAgEgCgBQgQgIgTgFQgYgFggAAIgFAAg");
	this.shape_12.setTransform(34.55,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA7851").s().p("AAtAFIhjAAIAAgJQA2AAA3AEIAAAFIgKAAg");
	this.shape_13.setTransform(36.55,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FB976B").s().p("AkIA8IAAgKQAhgOAegQIAigUIACAAQAogZA3gOIAPgEIADAAIAJgDIANgDIAdgGIAagDQAggDAmAEQARABAKAMQACAEAFACIAGACQAiAJAcASIAGADQAKAGARADIAOACQAGAAAFAFIAEAEIAFAGIABAAIAAAKQgFAAgFgBIgpgMQgggJgggHIgFgBIgHABIgDAAQgbAGgDgQIAAgFQg3gFg2AAIgKABQg7AOg6AOIgDAAIAAAKIgKABIgOABQgUACgQAGIAAAKQAAAFgCABQgHAEgJAAIgCAAQgFAAgEADQgLAIgUAAIgKgBg");
	this.shape_14.setTransform(31.55,9.9979);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E58059").s().p("AgKAHIgBgFIgBgDQgDgGgFgFQAUADAQAIIAFACIAAABIAAAEIgBAEIgBADQgMgGgRAAg");
	this.shape_15.setTransform(68.175,19.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FD9B71").s().p("AAdAUQgFAAgDgCQgVgMgdgGIAAgJIAAgKIAXAMQARAJARAMQACABAAAFIgBAAg");
	this.shape_16.setTransform(61.05,14);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FC976D").s().p("AAUAOIgGgBIgYgFIgJgDQAAgFgCgDIgBgDQgDgEgEgEIAPAEIAYAFIAHABIADAAQAFAEADAGIABAEIABAFIgKgBg");
	this.shape_17.setTransform(64.05,18.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9966A").s().p("AAPAPIgKAAIAAgFQgaACgDgQQAFgFAGgDQAEgCAFAAQAJAAAIAEQACABAAAFQAEAEADADIABADQACAEAAAFIgKAAg");
	this.shape_18.setTransform(59.55,17.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EB7952").s().p("AAlAUIgHgBIgZgFIgOgEQAAgFgCgBQgIgEgKAAQAAgEgDgDQgCgCgFAAIAAgKQAdAGAVAMQADABAFAAIABAAQAKAFAHAIQACACABAEIAAABIgDAAg");
	this.shape_19.setTransform(62.05,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.manmouth2, new cjs.Rectangle(0,0,70.3,20.7), null);


(lib.man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(-2.8,0,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(0,155.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man, new cjs.Rectangle(-2.8,0,225,430), null);


(lib.leftHandWoman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#191E1B").s().p("AgBCvQgQgkgHgmIgBgEIgpiCQAJgzAHgXQANgsAWgnQADgEAEgCIABABIAdAMQAFASACAaIABAQQABAMgOAmQgPAnAVA4QATA5AHAMIALAdIAEAJIADAIIgHgGIg1BCIgIgWg");
	this.shape.setTransform(6.6875,19.6625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AgNDRQgQgMgMgRQgHgKgCgHIgGgTIgFgNIgKgbIgNggIgYg0IgJgSQgcg1gtgqQgFgEgCgEIAAgBIgCgBIgKgLIAfgmIA1hBIAHAFIAAABQAOALAbAMIANAFQALACATgCIANAAIAmAAIAoABIAjgBIAPgDIAEACIAIABQAYAFAOgBIANAAQAOAEAKAHQAKAHADAHQAGANgIAOQgGAKgNAKQgLAKgIADQgHACgMABIg9AJQgJABgEADQgJAEAAAIIADAGIABAEQACAGAHALQAkA6A1AsIAHAGIAHAIIAJALIAFAFIgBACQAFAJAAAEQAAAHgFAHQgKAPgOACIAAAAIgDgBIgDAAQgIAAgKgIQgQgLgbgXIgCgCQglghgWgZIAAACQAGAKAKANQAMAPAFAIIANARQASAaAQAcQAFAIABAEQABADgBACIABAAIACACIgGAHIgDAEQgGALgIABQgDABgEgBQgQADgTgWIgIgJIgGgKIgKgQIgPgSIgdgiIgCAAQACAQALAaIAEAIIAHARQAKAVACALIABAHQABAFgCAEQgDAGgGADQgGADgHAAQgKAAgNgJg");
	this.shape_1.setTransform(25.2707,54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftHandWoman, new cjs.Rectangle(0,0,46.3,76.5), null);


(lib.leftHandMan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E773A").s().p("AABAAIgBAAIABAAg");
	this.shape.setTransform(45.075,148.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7E0E9").s().p("AgfEPQgDgBgEgDQgTgEgLgfIgEgOIgDgMIgEgVQgLgigPgoIgCgBQgGAVAEAnIABAWQACAagDAOIgBAHQgCAGgEADQgFAFgIABQgIABgHgCQgLgFgLgQQgMgTgGgXQgDgNAAgJIACgWIAAgRIABghIgBgnIgEhBIgDgXQgHhFgfhAQgDgGAAgFIgBgBIgBgCIgGgQICEhMQAEAEACAFQAKAUAXAWIAMALQALAHAVAGIAPAFIAoAQIAqASIAnANIAQAEIAMAIQAXAOAQAGIAOAFQANAKAIAMQAHALABAJQABARgOALQgLAJgSAFQgQAFgKAAQgHAAgPgEIhEgQQgKgDgGABQgLACgDAIQgBAEABAEIAAAFQAAAHACAOQAOBNAnBFQAHANADAHIAEAQIAEAIIgCABQABANgCAEQgDAHgHAFQgRAMgQgEIgBAAIgCgCIgDgBQgJgEgIgMQgNgSgTgnQgZgzgOgjIAAACQACANAFASIAJAfQAOAvAGAxQACAKgBAFIgCAFIAAABIACADIgIAFIgEADQgKAIgIAAIgDAAgADwhGIACACIgBAAIgBgCg");
	this.shape_1.setTransform(34.675,120.4924);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#191E1B").s().p("AiFF/IgJgtIgch3QgCgGAAgQIgBggQgBgSgEgvQgFguAKhOIAAAAIACgFIACgJIABgBIAJgjIAAgBIABgBIAGgYQAJgfADgDQACgEAMgcIAPglQAahFAnhCIAIgGIBchsIACgFIAMgMQALgKAOgIIAfgSIAJgEIADABQAZAcAIALQAIAMAEALQADAKgYAdIgNARIgBABIgDACIgBACIgCACIgBAEIgHAJIgSAXIgbAiIgBABIgBABIAAAAIAAABIgEAEIgDAEIgCACIgCABIgBACIgCADIgCABIgBACIgBADIgCACIgaAlIAAAAIgEALQgSAvgPAYQgOAYABAEQhXC5A7DgQABAEACAEQARA4AdAvQARAiAXAdIhxBCQgmg+gghBgABMmdIAAABIACgEIgCADgAA5nHIABgCIABABIAAgDIAAAAIgCAEgABjlHIAAAAIgBABIgBACIgCADIgFAFIgDACgAB7liIgCACIgBABIgCABIAFgEg");
	this.shape_2.setTransform(18.0981,51.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.leftHandMan, new cjs.Rectangle(0,0,58.9,148.4), null);


(lib.doctor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(41.45,72.7,0.2357,0.2357);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(0,0,0.2357,0.2357);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.doctor, new cjs.Rectangle(0,0,120.7,146.7), null);


(lib.bed = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-6.8,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bed, new cjs.Rectangle(-6.8,0,281,426), null);


(lib.babygirl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.babygirl, new cjs.Rectangle(0,0,244.5,375), null);


(lib.babyboy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDB7A9").s().p("AgngEIBFAAIAKAAQAAAEgBAAQgVAFgRAAQgXAAgRgJg");
	this.shape.setTransform(291.35,505.5191);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#928A7E").s().p("AAAAZQAAgjgJgYQAdAPgPA1QAAABgFAAIAAgKg");
	this.shape_1.setTransform(305.3723,495.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ABA596").s().p("AgsgIIBPAAIAKAAQgDAQgbABQgpgBgSgQg");
	this.shape_2.setTransform(163.85,505.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B7365").s().p("AgiAKIAAgKQAiAAAagIQAEgBAFAAQAAAFgCABQgYANgkAAIgHAAg");
	this.shape_3.setTransform(171.85,504.0068);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9AAA83").s().p("AgngFQAnAAAoAFIAAAEIgKAAQgOACgLAAQgcAAgQgLg");
	this.shape_4.setTransform(215.35,465.625);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#291F09").s().p("AAbDrIhPAAQgKgKgTgEIgLgCQhFgJAJhVQAbgwA+gQIAMgCQAngEAnAEQAKABALAEQAVAIgCgRQAIgwgMgXIgLgaQgEgNAAgTQACgvgGgjQgHgmAAgoQAcACAXAGQAQAFgBAcQgBAEAFAFQAEB5AVBjIAKAwQAIAnADArQAFAygzgBQgFAAgEACQgaAIgjAAIAAAKIgKAAg");
	this.shape_5.setTransform(164.6109,481.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#89806F").s().p("AAAAnQgEgnAAgnIAJAAIAABFIAAAKIgFgBg");
	this.shape_6.setTransform(275.85,497);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F9186").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_7.setTransform(283.975,480);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ACC295").s().p("AhFgEICBAAIAKAAIAAAEQhGAFhFAAIAAgJg");
	this.shape_8.setTransform(250.35,465.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#271D07").s().p("AAjDmIhFAAQgNgMgagEQgngFgggTIAAgKIAAhGIAAgKIAAhQQARgSgFgpQgCgUAAgUQASgXgIgvIAAgKIAAgKIAAgUQATgeApgJIAKgBIAAAKQAIAwgSAWIAABQIAAAKIgKAAIAABFIAAAKQgKBEA1gWQAogRA4ABQAkATAaAdQADACAFAAQAKAYAAAkIAAAKQAAAFgCAEQgcAuhGAFIgKAAg");
	this.shape_9.setTransform(290.85,482);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#898576").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_10.setTransform(277.975,470);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B09453").s().p("AAABPQgEhPAAhPIAJAAIAACVIAAAKIgFgBg");
	this.shape_11.setTransform(187.85,321);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A39F5A").s().p("AhAgGQAPgKAkAFQAhAFAagDQAkgEgaARIgLAJIhjABIgBAAQgPAAAGgUg");
	this.shape_12.setTransform(236.8428,225.7394);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#251A01").s().p("AACAPQgNgLgDgWIATAAIAKAAQACAlgJAAQgDAAgDgEg");
	this.shape_13.setTransform(219.8806,206.8581);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#433915").s().p("AAWAdQgVgJgTgKQAAgFgCgBQgPgGAHgbIAKAAQADAWAOALQAQAOgEgvQANAWAGAcIABAJQgFAAgEgBg");
	this.shape_14.setTransform(220.2386,208);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#793C1F").s().p("AgNMTQhNgCg2gWQjThTh1iyQg8hbgthrQgrhogDiTIAAgKIAAiVIAAgKIAAgyQARgNgCgmIAAgKQADgpAMgcIAuhsQArhnBChTQBNhjB/gyIAMgGQA4gnBdgCIBjAAIAKAAQBSADA5AcQA8AeA6AiQAkAWAfAcQCaCOBDDgQASA9AKA7QAWCGgKCZIgBALQgSCIgvBoIgYA0QhfDLjHBhQgxAZg+AOQg0ANhFAAIgSAAg");
	this.shape_15.setTransform(250.7813,323.7121);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B18657").s().p("AAtAFIhjAAIAAgJQA2AAA3AEIAAAFIgKAAg");
	this.shape_16.setTransform(248.85,244.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#32280B").s().p("AAyBVIhjAAQAAgFgBAAQhfgXgYhbQAUAKAUAJQAFABAFAAQAeAdApARIARAHQAhATAcgXQBQgPAPhTQAFgaAoAFIgBAKQgQB1hdAqIgKAAg");
	this.shape_17.setTransform(235.35,212.4597);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AFC49A").s().p("AgBA2QgFg2AAg2QARAXgGAuQgCAUAAAUIgEgBg");
	this.shape_18.setTransform(76.0158,305.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A6B796").s().p("AgFAeIAAhFIAJAAIAAAKQAHAvgQAWIAAgKg");
	this.shape_19.setTransform(76.975,256);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A2B256").s().p("AgGAyIAAhtIAJAAQAAAUACAUQAGAzgRAcIAAgKg");
	this.shape_20.setTransform(128.0158,286);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2B230D").s().p("AnJG4QgEgHgFgFQgagYALg9QAUgZARgbQADgDAAgFQAngLAggRQAEgCAFAAQBwi3CYiOIAfgdQBNhIBZg8QBdg/BVhGQBKgzBNgvQAngXAKApQAFAFABAGQAGAagPAJQgiAWggAXQgzAng1AjQgTANgcACIAAAKQiGBWh2BmQidCIh4CvQgKAKACAUQAFArANAlQAHAqgYAOQgyAbgrAlIgQAAQg1AAgRghg");
	this.shape_21.setTransform(48.5972,305.7317);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AEBE8F").s().p("AgBA2QgFg2AAg2QARAWgGAvQgCAUAAAUIgEgBg");
	this.shape_22.setTransform(308.0158,147.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C3C2BC").s().p("AgNAOQgFgHAAgJIAAgUQAugMgLAnQgGAVgJAAQgGAAgJgMg");
	this.shape_23.setTransform(258.238,182.3004);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#31280C").s().p("AhHA8IgGgMQgRgcAFgyQAPgZAUgUQAdgfBBAKQAFABAFAFQAaAYAOAkQAKBohGAYQgFABgFAAIgNAAQg6AAgUgngAgngoIAAAUQAAAKAFAHQAUAbALgjQAHgggZAAQgHAAgLADg");
	this.shape_24.setTransform(260.3449,184.0976);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#93B674").s().p("AAAAnQgFgnAAgnQAQAWgHAvIAAAKIgEgBg");
	this.shape_25.setTransform(306.975,136);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#C5C6C3").s().p("AgNANQgFgFAAgJIAAgUQAugMgLAoQgFASgJAAQgGAAgKgMg");
	this.shape_26.setTransform(203.2543,182.2293);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2E240A").s().p("AghBjQg/glANhwIAAgKQAnguBaAKQAFABADAGQAPAkANAiQAEAOAAAOQgKBahjAAIgKAAgAgrgoIAAAUQAAAKAFAFQAXAaAIggQAIgggZAAQgIAAgLADg");
	this.shape_27.setTransform(205.7145,184.1274);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ABC193").s().p("AgFAeIAAhFIAJAAIAAAKQAHAugQAXIAAgKg");
	this.shape_28.setTransform(368.9625,339);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ECEA91").s().p("AA3aGQiOgJhtgmQg6gUgygaQjDhjiMibIgmgqQgbgdgTgjQgbgwgcgtQgQgagNgdQgCgGgFgGQgXgfgNgoQgTg6gVg6IgKgeQgkhugLiOIgDg8QgEjhAAjhQARgXgDgwQgCgaAEgXQAGglAEghQAIhGAOg8QAOg+AMhDIADgLQAVg4AHhJQADggARgWQAFgGAAgKQgBguAQgbQAFgHABgKQAMg+AUgzIAMgdQAMgfAMgiQABgDAFgFQAFgFAAgKQAAgoAPgXQAFgHACgKQAIgeAMgdQAXgzAUg0QBSjYCYiQQCXiPENgXQBJgGA3ASQAoANAdAaQAoAjAbAtQAMAUANARQAPAUAGAmQAAACAKAAQACBIAMBDQAEAXABAcQAECTAWB8IAJAwIABALQADApANAcQAPAegBAzIABALQAbB+AqBvQAKAaALAiQARA2AOA6QAQA+AgAqIAJANQAcAuAXA3IALAYQA0BkA5BaIAJAOQAOAZALAjQABADAFAFQAFAFADAJQARA4AaAvQAEAIACAJQAIAfAMAdQBYDOgZE6IgBALQgDBMgUA2QgLAegJAeQgKAfgQAWQgFAHgEAIQgpBrhDBTQiECjjHBdQgMAGgOADQgGACgGAEQgQAOgXAHQgYAGgQAOQhCgBg2ANQgrALg5AAIgogBgAovKvIAFABQADCTArBoQAtBrA8BbQB1CyDTBTQA2AWBMACQBRACA7gPQA+gOAxgZQDHhhBfjLIAYg0QAvhoASiIIABgLQAKiagWiGQgKg7gSg9QhDjgiaiNQgfgcgkgWQg6gig8geQg5gchSgDIgBgFQg2gFg2AAIAAAKQhdACg4AnIgMAGQh/AyhNBiQhCBTgrBnIguBsQgMAcgDApIAAAKQACAmgRANIAAAyIAAAKIgKAAQAABQAFBPgAiGlfQgGAVAQAAIBkgBIAKgJQAZgSgiAEQgaADgjgFQgMgBgKAAQgTAAgJAGgAkAoFQACABAAAFQAXBbBgAXQABABAAAFIBkAAIAKAAQBbgrARh1IABgKQgogFgFAaQgQBThOAQQgcAWgigSIgRgIQgpgRgegdIgBgKQgHgcgMgWIgKAAIgUAAIgKAAQgHAbAPAHgABttFQgUAUgOAaQgGAzARAcIAHAMQAWArBGgEQAFAAAEgCQBHgXgKhpQgOgkgagYQgFgFgGgBQgQgDgOAAQgrAAgWAXgAnQs1IgBAKQgNBxBAAlIAKAAQBkAAAKhaQAAgPgFgOQgMgigQgkQgCgGgGgBQgRgCgPAAQhCAAgfAmg");
	this.shape_29.setTransform(243.893,260.2125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D8D771").s().p("AA2d7QgegFgoAAQhJAAg6gQQg9gQg5gVQjXhNikiEQijiDhui5Qhvi4gzj2QgMg9gJg9QgLhFgHhGQgNiGAFicQARgbgFg1QgCgUAAgUQACiUASiDIAIg8QAGg9AKgyIAciAQA1jwBEjmQAQg4ASg4QBKjfBUjWIAJgYQArhvBEhRIAKgMQB9ipDJhbIARgIQBkgvCOgJQCegJBjA0QAwAaAkAnQCMCbAREVQABAUAFATQALAogBA9IAAALQAFAnAGAnQAKA9gBBQIAAAKQADBNAMA/IAPBFQAaB4ApBuIAFAMQAdBTAjBMQAYAyAVA0IAIAQIDCGIQAyBmAxBoQAWAxARA3QARA9ATA5QAJAegBApQAAAKAFAEQAMAJgCAbQgFCWgaCBQgZB5gnBuQgoBvg4BcIgJAOQh3CvidCJQgWATgXASQhIA4hcAmQhrAsh8AUIhOANQgNACgQAAQgXAAgcgFgAA15jQkNAWiXCQQiYCQhSDXQgUA0gXAzQgMAdgIAfQgCAJgFAHQgPAXAAAoQAAAKgFAFQgFAFgBADQgMAjgMAeIgMAeQgUAygMA/QgBAJgFAIQgQAbABAtQAAAKgFAHQgRAWgDAgQgHBJgVA3IgDAMQgMBDgOA+QgOA8gIBGQgEAhgGAlQgEAVACAcQADAwgRAWQAADhAEDhIADA8QALCPAkBtIAKAeQAVA6ATA7QANAnAXAgQAFAFACAGQANAdAQAaQAcAtAbAxQATAjAbAcIAmAqQCMCbDDBkQAyAaA6AUQBtAlCOAJQBSAFA6gOQA2gNBCAAQAQgNAYgHQAXgGAQgOQAGgFAGgBQAOgEAMgFQDHheCEiiQBDhTAphrQAEgJAFgGQAQgWAKgfQAJgfALgdQAUg3ADhMIABgKQAZk7hYjOQgMgdgIgeQgCgKgEgHQgagwgRg4QgDgJgFgFQgFgFgBgDQgLgjgOgYIgJgPQg5hbg0hjIgLgYQgXg3gcgtIgJgOQgggpgQg+QgOg7gRg2QgLghgKgbQgqhugbh/IgBgLQABgygPgeQgNgcgDgpIgBgLIgJgxQgWh8gEiTQgBgcgEgWQgMhDgChJQgKAAAAgBQgGgmgPgUQgNgRgMgUQgbgtgogkQgdgagogNQgpgNgzAAIgkACg");
	this.shape_30.setTransform(240.0639,256.8972);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#517726").s().p("EADNAkaIjlAAIAAgFQgogFgoAAQhtgGhkgQQgigFgjgKQgjgJgvgEIAAAUIAAAKQgFgFAAgEQACgcgQgEQgXgHgcgCQgigVgtgMIgMgEQgzgQgogXIgQgIQhdgyhPhCQhkhUhVhmQiGighXjTQgWgygPg3QgSg+gWg3QgCgGAAgFQgCgvgPggQgDgGgBgFIgJgxQgGgdgEgpIgZkPQAAgUACgUQAGgvgSgXQAAhGAEhFQADgrgRgSIAAgKQAcgCATgMQA1gkAzgmQAggYAjgVQAOgJgFgbQgCgGgFgFQgJgpgnAYQhOAuhKAzIAAgKIAAhQQASgWgHgwIgBgKIAAgKIAAhGQASgWgDgwQAAgFACgGQAQgyAChEQAAgFACgGQANgsAKgtQAIggAGglIANg9QANhBAQg4QAhh4AnhuQBLjcBhjHQAxhlA1hiQADgGAFgFQAkgmAegwQAUghAYgeQCDilC1hwQAwgdAygZQBHgiBQgXQBEgTBQgIIAWgBQA7gFA7gJQABgBAAgKQAKgxApgQQANgFAPACQA0AFASgbQAcgqgDhOIAAgKQAGhKAVg3QATgxAdgqQA9gBAqAPIAjAMQAgAJAeAPQAWAcgbAbQgFAFgDAKQgHAigQAcQgPAbgDApQgBAFgDAGQgQAogCA7QgBAbARADQAbAhA0AMQAzAKgKBLQgUAaAxALQALADALAJQAxApAtAtQAPAPANASQAgArAcAwQAbAuAPBAQAIAdALAZQAHAMACAOIAEAMQAPAvAEA+QACA5AQAtQAGASAAAUIAABaQAAAoAFAoIAFAAIAAAKIAAAKQAAA3AFA3IAFAAQAPA9gCBPQgBAmANAZQAFAHABAKQAHBEAXA0QARAlAQAqIAqB3QAEAMAJALQAOAQAGAfQABACAJADIAMAFQAEACAFAAQAAAFgCABQgIAEgKAAQAHAnAZATQADACAFAAQAJBDAbAtIAiA6QAbAwATA7IAJAYQATAnAVAgIAJAPIBgDKQAZAzAVA5QARAsALAyQAJAtAKAqIADAMQAXBvABCAIgKAAIAABGIAAAKQAGAzgLAfQgEANgGAMQgNAZgBAmQgBAjgKAZQgNAggJAmQgMAzgYAoQgPAagNAfIgIAYQgKAigOAZIgcAzQg2BihEBSQiFCiitB6IgMAJQgqAggxAcQguAbhDAIIAAAKIgKABQgpAJgTAeQgFgFgFAAQgeAAgeAEQgOABgNAHQgpAUhIgHIgKAAIiCAAIAAAKIgKAAgAuwJEIAAAKQgFCcANCGQAHBGALBFQAJA9ANA9QAzD2BuC4QBuC5CjCDQCkCEDXBNQA5AVA8AQQA6AQBJAAQApAAAeAFQAvAJAigGIBNgNQB9gUBqgsQBcgmBIg4QAXgSAWgTQCdiJB4ivIAJgOQA3hcAohvQAnhuAZh5QAaiBAFiWQACgbgMgJQgFgEAAgKQACgpgJgeQgUg5gRg9QgRg3gWgxQgxhogyhmIjCmIIgHgQQgWg0gXgyQgkhMgdhTIgFgMQgphugah4IgPhFQgMg/gDhNIAAgKQABhQgKg9QgGgngFgnIAAgLQACg9gMgoQgFgTgBgUQgQkViNibQgjgngwgaQhkg0ifAJQiNAJhkAvIgRAIQjJBbh9CpIgKAMQhDBRgsBvIgJAYQhUDWhJDfQgSA4gRA4QhDDmg2DwIgbB/QgLAygGA9IgHA8QgTCEgCCUIgKAAIAABug");
	this.shape_31.setTransform(221.85,232.9932);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#2A210C").s().p("AmXEbQgZgTgHgnQAKAAAIgEQACgBAAgFQDihFC/hqIAPgJQBNgnA/g0QAnggAXgsQAFgIAAgKIAAg8QALgtA7ACQARAAAJgNQAKgRAiADQAcACAWAIQAbAiACA4IABAKIgmA+QgCADAAAFQgxAahHAEIgKAAQiVCRjJBcIhNAkQghAQgnALQgiAKgcAPQgIAEgKADQgZAHgaAEQgaAEgNAMQgFAAgDgCg");
	this.shape_32.setTransform(370.35,193.4525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.babyboy, new cjs.Rectangle(0,0,414.4,506.7), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.womanmouth2();
	this.instance.setTransform(146.3,18.95,0.3807,0.4031,0,0,0,37.9,25.8);

	this.instance_1 = new lib.mouth();
	this.instance_1.setTransform(22.4,19.05,0.5143,0.5486,0,0,0,43.6,23.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9E47C").s().p("Ag4BvIgDgDIgBgBIgBgDIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgBIgcAAIgGgBIgDgBIgCgBIgFgBIgFgCIgHgCIgGgBIgBgBIgGgCIgFgCIgEgBIgFgBIgFgBIgFgCIgHgDIgCgDIgEgCIgCgCIgDgDIAAgDIgBgCIAAgDIAAgCIAAgCIAAgCIAAgDIAAgDIAAgCIAAgCIABgDIAAgCIADgCIACgBIAEgCIAFgDIAEgBIABgBIADgBIAMAAIADgBIACgCIAEAAIACgBIADgBIAGgCIADgBIACgBIAEAAIALgDIAEgBIAGgBIAEAAIAAg6ICLAAIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgCIAAgDIABgDIACgCIADgCIAEgBIAAgBIAFACIACACIABACIABADIABADIAAACIAAACIAAADIAAADIAAACIAAACIAAADIBjAAIAABLIhTAAIAAABIACACIABADIAAACIAAACIAAADIAAACIAAACIAAADIAAADIAAACIgBACIgBACIgBACIAAABIgBACIgBADIgBACIgDABIgEABIAAACIAAADIgBADIgBACIgDACIgEACIgBAAIgCAAIgXAAIgGgCIgEgBIgHACIgFADIgCADIACABIABADIABADIABACIACACIABADIABADIACACIAAACIAAADIgCADIgBACIgCACIgCACIgCABIgDABIgCAAIgEgCIgDgDIgCgCIgBgCIgDgDIgEgDIgCgCIgBgCIgBgDIAAgCIAAgCIgFgBIgCAAIAAABIAAACIAAADIgBADIAAACIgCACIgCADIgCACIgDABIgEgBIgTABIAAACIAAACIAAADIAAACIAAACIAAADIAAADIAAACIAAACIAAADIAAADIgCACIgBACIgDACIgDABIgFgCgAhcgDIgFABIgGABIgFABIgFAAIgEACIgDABIgEAAIgCACIgDABIgEAAIgCABIgEABIgLABIgDADIAAADIAAACIAAACIABACIAHADIAEACIAEAAIAEABIAFACIAGACIAEABIABABIAFABIAFABIADAAIABgCIADgDIACgCIADgBIArgBIAIgBIgDgBIgFgBIgFgDIgDgCIgBgCIgBAAIgDABIgFgCIgCgDIgCgCIAAgCIgGAAIgGgCIgCgDIgBgCIgBgBIABgCIAAgCIgDABg");
	this.shape.setTransform(25.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#94AE35").s().p("AgNAUIgCAAIgFAAIgCAAIgCAAIgBgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgCIgBgBIABAAIAAgCIAAgBIAAAAIAAgBIABAAIAAgBIABgBIAAgBIABgBIABAAIABgBIACAAIACAAIADgBIABAAIABAAIACgBIABAAIACAAIAAgBIABgBIABAAIABgBIABAAIACgBIABAAIABgBIABgBIABAAIABgBIABAAIACgBIABAAIABgBIACAAIAAgBIABgBIAAAAIABgBIABgBIAAAAIABgBIABAAIABgBIAAgBIABAAIABgBIABAAIABgBIABAAIACAAIABAAIABAAIACAAIABABIABABIAAAAIABABIABAAIAAABIABABIAAAAIABABIAAAAIAAABIAAACIAAACIAAABIAAABIAAAAIgBABIAAAAIgBABIAAABIgBABIgBABIgBAAIAAABIAAAAIAAAAIgBABIgBAAIgBABIAAAAIgBABIAAABIgBAAIgBABIgBABIgBAAIgBABIgBAAIgBABIgBAAIgBABIgCAAIgBABIAAAAIgBAAIgBAAIAAABIgCABIgBAAIAAAAIgCABIgCAAIgBABIAAAAIAAABIgBABIgBAAIgBABIgBAAIgCABIgBABIgBAAIgCABIgBAAIgBAAg");
	this.shape_1.setTransform(136.5,7.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D9E37B").s().p("AgSByIgFgBIgDgCIgBgDIgBgDIABgCIAAgDIACgCIACgBIiDAAIAAirIA8AAIAAAAIABgBIAAAAIAAgBIABgBIAAAAIAAgBIABgBIAAgBIABAAIABgBIABAAIABgBIACAAIABAAIABgBIACAAIABgBIABAAIABgBIABAAIABgBIABgBIABgBIABAAIABgBIACAAIAAgBIABAAIACgBIABAAIABAAIAAAAIABgBIABAAIABAAIABgBIABAAIABgBIACAAIABgBIABAAIABgCIAAAAIABgBIAAAAIABgBIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgCIABAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIAAgCIABAAIACgBIABAAIAAAAIACAAIABAAIACAAIACAAIABABIABABIABAAIABABIABABIADACIABADIABABIABgCIACgDIAFgBIAAAAIABAAIAEABIADADIABADIABACIABACIABADIAEADIADABIABADIAAADIABACIAAACIAAADIAAADIAAABICVAAIAACrIiGAAIgCABIgDACIgBAAIgGADIgDABIgDABIgEABIgCADIgDACIgFABIgDACIgDAAIgBAAg");
	this.shape_2.setTransform(144.075,17.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,160.1,31.8), null);


(lib.Scene_1_woman = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// woman
	this.instance = new lib.leftHandWoman();
	this.instance.setTransform(454.2,340.8,0.7304,0.7304,0,0,0,23.1,38.2);

	this.instance_1 = new lib.rigthHandWoman();
	this.instance_1.setTransform(509.8,339.6,0.613,0.613,0,0,0,65.5,42.9);

	this.instance_2 = new lib.woman();
	this.instance_2.setTransform(489.75,350,0.6091,0.6091,0,0,0,149.5,221.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350}},{t:this.instance_1,p:{skewY:0,x:509.8,y:339.6}},{t:this.instance,p:{skewY:0,x:454.2,y:340.8}}]},1).to({state:[{t:this.instance_2,p:{skewY:0,x:489.75,y:350}},{t:this.instance_1,p:{skewY:0,x:509.8,y:339.6}},{t:this.instance,p:{skewY:0,x:454.2,y:340.8}}]},73).to({state:[{t:this.instance_2,p:{skewY:180,x:792.55,y:396.7}},{t:this.instance_1,p:{skewY:180,x:772.5,y:386.3}},{t:this.instance,p:{skewY:180,x:828.1,y:387.5}}]},239).wait(180));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_texts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// texts
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC00FF").s().p("EggzAJVQj6jVgBllQAAk8DIjgQDbj4FsgBQCCAAB/AlICSAkQAwABAVgUQAUgSAOgkIAyAAIARHbIg0AAQhFijhKhRQiFiNjWAAQjZAAilCmQilCjABF6QgBE4ClCuQCkCwDxAAIBggHIBogZQBRgaATgSQAVgUAAgmIAAloQAAiDglgfQglggh8gJIAAgpII/AAIAAApQhTAHgdAUQguAkAABuIAAG9QAAAojBBCQjEBCi0AAQlKgBjjjAgAdGLpQgigjgBgzQAAgzAlgiQAlgkAwAAQAyAAAkAkQAmAiAAAzQAAAxgkAkQglAjgxAAQg1AAgkgigAKJL2IAAgeQBogLAkgfQAkgfAAhcIAAw0QgBhKgLgaQgXgwhDABIghADIgtALIAAglIFlhqQAGABAFAGIABAcIAAUpQgBBfAiAeQAMALAYAHQAlAMA/AGIAAAegAiKL2IAAglQBmgHAigcQAfgbABhYIAAnyQAAhsgVguQgUgwg2AAIhDALIAAgkIFMh+QAGAAAFAFIABAXIAAC1QBGhiBCg3QBBg4BHABQA5gBAjAjQAjAhAAAyQAAAugbAeQgbAfgpAAQgpAAgrgmQgpgmgZAAQgnAAg5A+Qg4A9AABDIAAHxQAABeAsAlQAsAlBngDIAAAlgArZL2IAAgeQB1gNAfgcQAegdAAiBIAAoOQAAhGgJgdQgRgtg1AAIgXADIhDASIAAgiIFlh8IACARIAAMWQAAB9AeAgQAeAgBrAKIAAAegAeKGDIALhyIAeiDICUmAQAYhTAAhHQAAh2g8hcQg7hciBAAQhaAAg8AwQg9AwAAArQAAAYAsAzQAvA0gBAsQAAAjgbAcQgbAcgnAAQgrAAgjglQgkgnAAhLQABhwBhhnQBihnDDAAQCqAABvBfQBvBfAACpQAACPimDVQi4DngfDPgAoqpIQgigiAAguQAAgwAigiQAhgjAwAAQAvAAAiAiQAhAhAAAyQAAAughAiQgiAhgvAAQgwAAghghg");
	this.shape.setTransform(372.4,504.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("ANwPDQg3gfAAhEQAAgPAEgNQAIgZAWgTQAfgcAyAAQAbAAA4AVIBSAWQA7AABDiXIALgVQA6iEABgsIgEgYIgIgaIlbrtQglhSgbgZQgegbg4gHIAAggIHSAAIAAAgIhRAJQg0APAAArIAGAhIEUJWIDSoqIAShUQgBgcgTgPQgVgOgegBIgigCIAAggIEuAAIAAAgQgsAFgXAbQgXAZgRAvIlbOXIgkBdQg1B6gxBPQgRAcgSAXQhSBrh/AAQg+AAg2gfgAijF7QiRicAAjqQAAjcCLiWQCMiYDaAAQDaAACPCQQCQCOAADvQAADZiLCjQiLCijdAAQjTAAiTibgAAGmZQhtBjAAD2QgBDEBaCpQBXCqCeAAQB8AABChyQBFhwAAi5QgBi+hWipQhUioiiAAQhYAAg/A6gA8nH0IAAgrIALAAQB+gIAnghQAogjABh+IAAvrQgBh9gogjQgngjh+gIIgLgBIAAgpIJ4AAQEPAACgBXQCfBXAADVQAACghwBUQg/Avh9AfQCbAlBuBXQBuBYAACdQAAEIj0BjQiCA0i8AAgA1qFGQAAA6AiASQAgARB5AAQCtAAB1hFQB0hDAAi+QABi9iJhFQiJhFjVAAIhrgBgA1ZuBQgRAMAAA3IAAH+IDWgEQBygCBMgiQCPhCAAisQAAjKilhGQhcgni6AAQhGAAgRAMg");
	this.shape_1.setTransform(372.4,166.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ar1EqQhxh4AAirQAAi8B2h5QBLhNBlgcQA9gSBHAAQBGAAA8ASQBhAcBKBIQB8B3AAC8QAAC9h8B5Qh5B0i0AAQjAAAh5iAgAp3jeQgaBWgBCIQAACMAbBWQAzCgCIAAQCGAAAzigQAbhWAAiMQAAi+g5hhQg5hhhigBQiJAAgyCjgAJtGSIkYl2IAAAAIAADqQAABAAVAWQAVAWBAACIAAAeImVAAIAAgeQA8gCAWgVQAXgTAAhEIAAoQQAAhGgagVQgTgOg8gFIAAgeIGBAAQB4AABKAZQCQAyAACEQAABihLA5Qg5AphBALID/FWQAJAOAMAEIAbAGIAAAcgAFkliQgPAMAAAbIAAExQB1gCA0gfQAygfAAhyQAAhFgUgpQghhEhYAAQgwAAgPAMg");
	this.shape_2.setTransform(372.4,335.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("AoSEIQiLhtAAibQAAiZCLhuQCMhtDFgBQDEABCLBtQCMBuAACZQAACbiMBtQiLBujEgBQjFABiMhugAFcAWQgRgRAAgYQAAgYARgSQASgRAZAAQAZAAARARQASASAAAYQAAAYgSARQgRASgZAAQgZAAgSgSgAHghPQgNgNAAgUQAAgSANgNQAOgOATAAQATAAANAOQANANAAASQAAAUgNANQgNANgTAAQgTAAgOgNgAJgieQgLgLAAgPQAAgPALgLQALgLAPAAQAPAAAKALQALALAAAPQAAAPgLALQgKAKgPAAQgPAAgLgKg");
	this.shape_3.setTransform(256.175,254.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AiNEIQiMhuAAiaQAAiaCMhtQCLhtDEAAQDFAACMBtQCLBtAACaQAACaiLBuQiMBujFAAQjEAAiLhugAmwAXQgSgSAAgXQAAgaASgRQARgSAZAAQAZAAASASQARASAAAYQAAAYgRASQgSASgZAAQgZAAgRgSgAoghQQgNgNAAgSQAAgTANgOQANgNATAAQATAAAOANQANAOAAATQAAASgNANQgOAOgTAAQgTAAgNgOgAqSifQgLgKAAgPQAAgPALgLQAKgLAPABQAPgBALALQALALAAAPQAAAPgLAKQgLALgPAAQgPAAgKgLg");
	this.shape_4.setTransform(623.775,255.3);

	this.text = new cjs.Text("It's your turn", "normal 400 21px 'PT Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 84;
	this.text.parent = this;
	this.text.setTransform(770.65,235.85,0.9999,0.9999);
	if(!lib.properties.webfonts['PT Sans']) {
		lib.webFontTxtInst['PT Sans'] = lib.webFontTxtInst['PT Sans'] || [];
		lib.webFontTxtInst['PT Sans'].push(this.text);
	}

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF9900").s().p("AE3IiQjMAvhrAAQkgAAjLiyQjMiyAAj7QAAj8DMiyQDLiyEggBQEgABDMCyQDMCyABD8QAAD4jHCwIB9DWg");
	this.shape_5.setTransform(774.35,267.3);

	this.instance = new lib.questionmark();
	this.instance.setTransform(501.35,175.7,1,1,0,0,0,55.8,75.2);

	this.instance_1 = new lib.questionmark();
	this.instance_1.setTransform(501.35,175.7,1,1,0,0,0,55.8,75.2);

	this.instance_2 = new lib.questionmark();
	this.instance_2.setTransform(501.35,175.7,1,1,0,0,0,55.8,75.2);

	this.instance_3 = new lib.questionmark();
	this.instance_3.setTransform(501.35,175.7,1,1,0,0,0,55.8,75.2);

	this.instance_4 = new lib.questionmark();
	this.instance_4.setTransform(501.35,175.7,1,1,0,0,0,55.8,75.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhpCcQgzAAABgyIAAjTQgBgyAzAAIDTAAQAyAAAAAyIAADTQAAAygyAAg");
	this.shape_6.setTransform(1063.9284,300.4546,0.7014,0.6931,0,0,8.8683);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AifJHIgHgEIgCgDIAAAAQgbkjDYipIC0iWIAFgGIAAgBQBYizithcIgSgGIgBgBQiRgWhYAyQhfBDggCWIkrgmQABj2D0iWQFnieEWCoQCaBaA7CgQBTEDkJDLQiIBdhABoIAAABIgCAEIgCAGIgCADIgCAIQgCAHgBA8QgBAyABAYIgCAFIgFACIgGACQhKADhIAAQhJAAhIgDg");
	this.shape_7.setTransform(1064.3526,247.735,0.7016,0.6932,0,0,8.868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},79).to({state:[]},52).to({state:[{t:this.shape_4}]},15).to({state:[]},65).to({state:[{t:this.shape_5},{t:this.text,p:{scaleX:0.9999,scaleY:0.9999,x:770.65,y:235.85,text:"It's your turn",font:"normal 400 21px 'PT Sans'",color:"#000000",lineHeight:28,lineWidth:84}}]},44).to({state:[]},41).to({state:[{t:this.instance,p:{regY:75.2,scaleX:1,scaleY:1,x:501.35,y:175.7,regX:55.8}}]},16).to({state:[{t:this.instance_1,p:{regY:75.2,scaleX:1,scaleY:1,x:501.35,y:175.7,regX:55.8}},{t:this.instance,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2,regX:55.8}}]},8).to({state:[{t:this.instance_2,p:{regY:75.2,scaleX:1,scaleY:1,x:501.35,y:175.7,regX:55.8}},{t:this.instance_1,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2,regX:55.8}},{t:this.instance,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}}]},8).to({state:[{t:this.instance_3,p:{regY:75.2,scaleX:1,scaleY:1,x:501.35,y:175.7}},{t:this.instance_2,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2,regX:55.8}},{t:this.instance_1,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}}]},8).to({state:[{t:this.instance_4},{t:this.instance_3,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2}},{t:this.instance_2,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance_1,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}},{t:this.instance,p:{regY:75.4,scaleX:0.8689,scaleY:0.8689,x:137.75,y:141,regX:55.9}}]},8).to({state:[{t:this.instance_4},{t:this.instance_3,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2}},{t:this.instance_2,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance_1,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}},{t:this.instance,p:{regY:75.4,scaleX:0.8689,scaleY:0.8689,x:137.75,y:141,regX:55.9}},{t:this.shape_7},{t:this.shape_6}]},8).to({state:[{t:this.instance_4},{t:this.instance_3,p:{regY:75.4,scaleX:0.611,scaleY:0.611,x:880.1,y:240.2}},{t:this.instance_2,p:{regY:75.3,scaleX:0.5538,scaleY:0.5538,x:732.2,y:122.95,regX:55.9}},{t:this.instance_1,p:{regY:75.5,scaleX:0.608,scaleY:0.608,x:340.35,y:139.8,regX:56.1}},{t:this.instance,p:{regY:75.4,scaleX:0.8689,scaleY:0.8689,x:137.75,y:141,regX:55.9}},{t:this.shape_7},{t:this.shape_6}]},7).to({state:[]},13).to({state:[{t:this.text,p:{scaleX:0.9998,scaleY:0.9998,x:1071.3,y:284.25,text:"Wasabi",font:"normal 400 43px 'PT Sans'",color:"#FFFFFF",lineHeight:52.95,lineWidth:161}}]},106).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_doctor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// doctor
	this.instance = new lib.doctor();
	this.instance.setTransform(968.95,304.45,2.1209,2.1209,0,0,0,60.6,73.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(138).to({_off:false},0).wait(160).to({regX:60.5,regY:73.8,scaleX:2.1203,scaleY:2.1203,skewY:180,x:268.5,y:379.6},0).wait(23).to({_off:true},119).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(718.8,314.4);
	new cjs.ButtonHelper(this.start, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EDF9").s().p("EhmVA7AMAAAh1/MDMrAAAMAAAB1/g");
	this.shape.setTransform(644.875,369.125);

	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(63.9,29.9,0.5,0.5);

	this.instance_1 = new lib.babyCarriage();
	this.instance_1.setTransform(586,97,0.4034,0.4034);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(564.85,51.5,0.5,0.5);

	this.text = new cjs.Text("Doctor", "normal 400 21px 'PT Sans'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 183;
	this.text.parent = this;
	this.text.setTransform(1132.75,88.4,2.3387,4.013);
	if(!lib.properties.webfonts['PT Sans']) {
		lib.webFontTxtInst['PT Sans'] = lib.webFontTxtInst['PT Sans'] || [];
		lib.webFontTxtInst['PT Sans'].push(this.text);
	}

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(0.2,-9.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(63.9,29.9,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_4();
	this.instance_5.setTransform(0.2,-9.85,0.5,0.5);

	this.instance_6 = new lib.sidescreen();
	this.instance_6.setTransform(1082.8,262.7,1,1,0,0,0,91.2,102.5);

	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(958.35,33.4,0.5,0.5);

	this.instance_8 = new lib.bed();
	this.instance_8.setTransform(808.1,434.1,1,1,0,0,0,137.1,213);

	this.instance_9 = new lib.CachedBmp_7();
	this.instance_9.setTransform(0.2,30.5,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_9();
	this.instance_10.setTransform(0.2,30.5,0.5,0.5);

	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.setTransform(1021.6,307.6,0.2374,0.2374,0,0,0,0.4,0.8);
	new cjs.ButtonHelper(this.replay, 0, 1, 1);

	this.instance_11 = new lib.sushi();
	this.instance_11.setTransform(1052.8,256.8,0.4525,0.4525,11.4611);

	this.instance_12 = new lib.curtain();
	this.instance_12.setTransform(928,153,0.0584,0.0584);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.start}]}).to({state:[{t:this.instance_3},{t:this.text,p:{scaleX:2.3387,scaleY:4.013,x:1132.75,y:88.4,text:"Doctor",font:"normal 400 21px 'PT Sans'",lineHeight:28,lineWidth:183}},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_5},{t:this.text,p:{scaleX:2.3387,scaleY:4.013,x:1132.75,y:88.4,text:"Doctor",font:"normal 400 21px 'PT Sans'",lineHeight:28,lineWidth:183}},{t:this.instance_2},{t:this.instance_1},{t:this.instance_4}]},152).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},160).to({state:[{t:this.instance_10}]},181).to({state:[{t:this.instance_12},{t:this.text,p:{scaleX:0.2374,scaleY:0.2374,x:1080.4,y:228.7,text:"THE END",font:"normal 400 96px 'PT Sans'",lineHeight:119.25,lineWidth:528}},{t:this.instance_11},{t:this.replay}]},26).wait(25));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_babygirl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// babygirl
	this.instance = new lib.babygirl();
	this.instance.setTransform(640.95,256.4,0.1537,0.1537,0,0,0,122.6,188.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(147).to({_off:false},0).to({_off:true},66).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_babyboy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// babyboy
	this.instance = new lib.babyboy();
	this.instance.setTransform(233.25,255.5,0.133,0.133,0,0,0,207.8,254.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(80).to({_off:false},0).to({_off:true},53).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.man2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rigthHandMan();
	this.instance.setTransform(135.45,93.15,0.5543,0.5543,2.7567,0,0,38.6,10.6);

	this.instance_1 = new lib.leftHandMan();
	this.instance_1.setTransform(32.75,135.5,0.6233,0.6233,0,0,0,29.4,74.3);

	this.instance_2 = new lib.man();
	this.instance_2.setTransform(78.2,129.4,0.6019,0.6019,0,0,0,127.1,215);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,149.4,258.9);


(lib.mansmile = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.פהשמח("synched",0);
	this.instance.setTransform(115.1,24.1,1,1,0,0,0,50.6,28.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mansmile, new cjs.Rectangle(0,0,87.5,46.5), null);


(lib.Scene_1_פה = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// פה
	this.instance = new lib.Symbol3();
	this.instance.setTransform(427.85,281.4,1,1,0,0,0,80,15.8);
	this.instance._off = true;

	this.instance_1 = new lib.manmouth3();
	this.instance_1.setTransform(353.55,265.25,0.6165,0.1715,0,0,0,0.1,0.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9E47C").s().p("Ag4BvIgDgDIgBgCIgBgCIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgBIgcAAIgGgBIgDgBIgCgBIgFgBIgFgCIgHgCIgGgBIgBgBIgGgCIgFgCIgEgBIgFgBIgFgBIgFgCIgHgDIgCgDIgEgCIgDgCIgCgDIAAgDIgBgCIAAgCIAAgDIAAgCIAAgCIAAgDIAAgDIAAgCIAAgCIABgDIAAgCIACgCIADgBIAEgCIAFgDIAEgBIABgBIADgBIAMAAIADgBIACgBIAEgBIACgBIADgBIAGgCIADgBIACgBIAEAAIALgCIAEgCIAGgBIAEAAIAAg6ICLAAIAAgCIAAgDIAAgCIAAgDIAAgDIAAgCIAAgCIAAgDIABgDIACgCIADgCIAEgBIAAgBIAFACIACACIABACIABADIABADIAAACIAAACIAAADIAAADIAAACIAAADIAAACIBjAAIAABLIhTAAIAAABIACADIABACIAAACIAAACIAAADIAAACIAAACIAAADIAAADIAAACIgBACIgBADIgBABIAAABIAAACIgCADIgBACIgDABIgEABIAAACIAAADIgBADIgBACIgDACIgEACIgCAAIgBAAIgXAAIgGgCIgEgBIgHACIgFADIgCADIACABIABADIABADIABACIACACIABADIABADIACACIAAACIAAADIgCADIgBACIgCACIgCACIgCABIgDABIgCAAIgEgCIgDgDIgCgCIgBgCIgDgDIgEgDIgCgCIgBgCIgBgDIAAgCIAAgCIgFgBIgCAAIAAABIAAACIAAADIgBADIAAACIgCACIgCADIgCACIgDABIgEgBIgTABIAAACIAAACIAAADIAAACIAAACIAAADIAAADIAAACIAAACIAAADIAAADIgCACIgBACIgDACIgDABIgFgCgAhcgDIgFABIgGABIgFABIgFAAIgEACIgDABIgEABIgCABIgDABIgEAAIgCABIgEABIgLABIgDADIAAADIAAACIAAACIABADIAHACIAEACIAEAAIAEABIAFACIAGACIAEABIABABIAFABIAFABIADAAIABgCIADgDIACgCIADgBIArgBIAIgBIAAAAIAAAAIgDgBIgFgBIgFgDIgDgDIgCgBIAAAAIgDABIgFgCIgCgCIgCgDIAAgCIgGAAIgGgCIgCgCIgBgDIgBgBIABgCIAAgCIgDABg");
	this.shape.setTransform(373.45,276.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9E37B").s().p("AgSByIgFgBIgDgCIgBgDIgBgDIABgCIAAgCIACgDIACgBIiDAAIAAirIA8AAIAAgBIABAAIAAAAIAAgBIABgBIAAAAIAAgBIABAAIAAgCIABAAIABgBIABAAIABgBIACAAIABAAIABgBIACAAIABgBIABAAIABgBIABAAIABgBIABgBIABAAIABgBIABgBIACAAIAAgBIABAAIACgBIABAAIABAAIAAAAIABgBIABAAIABAAIABgBIABAAIABgBIACAAIABgBIABAAIABgBIAAgBIABgBIAAAAIABgBIAAgBIABAAIABgBIABAAIAAgBIABAAIAAgBIABAAIAAgBIABgBIABgBIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIAAgCIABAAIACgBIABAAIAAAAIACAAIABAAIACAAIACAAIABABIABABIABAAIABABIAAAAIABABIADACIABADIAAABIACgCIACgDIAFgBIAAAAIABAAIAEABIADADIABADIABACIABACIABADIAEADIADABIABADIAAADIABACIAAACIAAADIAAADIAAABICVAAIAACrIiHAAIgBABIgDACIgBABIgGACIgDABIgDABIgEABIgCADIgDACIgFABIgDACIgDAAIgBAAg");
	this.shape_1.setTransform(491.925,282.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94AE35").s().p("AgNAUIgCAAIgFAAIgCAAIgCAAIgBgBIgBgBIgBAAIAAgBIgBgBIAAgBIgBAAIAAgBIAAAAIAAgBIAAgCIgBgBIABAAIAAgCIAAgBIAAAAIAAgBIABAAIAAgBIABgBIAAgBIABgBIABAAIABgBIACAAIACAAIADgBIABAAIABAAIACgBIABAAIACAAIAAgBIABgBIABAAIABgBIABAAIACgBIABAAIABgBIABgBIABAAIABgBIABAAIACgBIABAAIABgBIACAAIAAgBIABgBIAAAAIABgBIABgBIAAAAIABgBIABAAIABgBIAAgBIABAAIABgBIABAAIABgBIABAAIACAAIABAAIABAAIACAAIABABIABABIAAAAIABABIABAAIAAABIABABIAAAAIABABIAAAAIAAABIAAACIAAACIAAABIAAABIAAAAIgBABIAAAAIgBABIAAABIgBABIgBABIgBAAIAAABIAAAAIgBAAIAAABIgBAAIgBABIAAAAIgBABIAAABIgBAAIgBABIgBABIgBAAIgBABIgBAAIgBABIgBAAIgBABIgCAAIgBABIAAAAIgBAAIgBAAIAAABIgCABIgBAAIAAAAIgCABIgCAAIgBABIAAAAIAAABIgBABIgBAAIgBABIgBAAIgCABIgBABIgBAAIgCABIgBAAIgBAAg");
	this.shape_2.setTransform(484.35,272.725);

	this.instance_2 = new lib.mansmile();
	this.instance_2.setTransform(620.15,333.1,0.4825,0.4374,0,0,0,57.6,23.4);

	this.instance_3 = new lib.פהאישה("synched",0);
	this.instance_3.setTransform(789.95,331.75,0.3551,0.4844,0,0,0,45.9,26.7);

	this.instance_4 = new lib.womanmouth2();
	this.instance_4.setTransform(790.85,331.35,0.4972,0.6294,0,0,0,37.1,25.2);

	this.instance_5 = new lib.womanmouth3();
	this.instance_5.setTransform(847.45,342.75,0.7976,0.6459,0,0,0,110.7,42.4);

	this.instance_6 = new lib.פהכועס();
	this.instance_6.setTransform(763.85,341.4,0.6207,0.999,0,3.6115,-176.3945,-196.2,10);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9E47C").s().p("AivBRIAAihIFeAAIAAChg");
	this.shape_3.setTransform(609.85,332.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},83).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[]},12).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{regY:0.3,scaleX:0.6165,scaleY:0.1715,y:265.25,regX:0.1,x:353.55}}]},26).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{regY:0.9,scaleX:0.6225,scaleY:0.1088,y:265.3,regX:0.1,x:353.55}}]},55).to({state:[]},9).to({state:[{t:this.instance_3},{t:this.instance_2}]},98).to({state:[{t:this.instance_4},{t:this.instance_1,p:{regY:101.4,scaleX:0.5336,scaleY:0.3836,y:358.9,regX:121,x:659.15}}]},53).to({state:[{t:this.shape_3},{t:this.instance_6},{t:this.instance_5}]},9).to({state:[{t:this.shape_3},{t:this.instance_6},{t:this.instance_5}]},1).wait(196));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(83).to({_off:false},0).wait(1).to({regX:80.1,regY:15.9,x:427.95,y:281.5},0).wait(37).to({regX:80,regY:15.8,x:427.85,y:281.4},0).to({_off:true},12).wait(447));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_mouth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// mouth
	this.instance = new lib.womansmile2();
	this.instance.setTransform(477.8,289.1,0.4286,0.5854,0,0,180,85.4,34.6);

	this.instance_1 = new lib.mansmile();
	this.instance_1.setTransform(382.65,280.95,0.7081,0.6296,0,-5.8546,0,57.6,23.2);

	this.instance_2 = new lib.manmouth2();
	this.instance_2.setTransform(374.95,274,1,1,0,0,0,35.2,10.3);

	this.instance_3 = new lib.mouth();
	this.instance_3.setTransform(607.3,336.6,0.6898,0.6378,0,0,0,43.7,23.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{x:382.65,y:280.95}},{t:this.instance,p:{regX:85.4,regY:34.6,scaleX:0.4286,scaleY:0.5854,x:477.8,y:289.1,skewY:180}}]},1).to({state:[{t:this.instance_1,p:{x:380.6,y:275.9}},{t:this.instance,p:{regX:85.4,regY:34.6,scaleX:0.4286,scaleY:0.5854,x:477.8,y:289.1,skewY:180}}]},1).to({state:[{t:this.instance_1,p:{x:380.6,y:275.9}},{t:this.instance,p:{regX:85.4,regY:34.6,scaleX:0.4286,scaleY:0.5854,x:477.8,y:289.1,skewY:180}}]},13).to({state:[{t:this.instance_1,p:{x:380.6,y:275.9}},{t:this.instance,p:{regX:85.4,regY:34.6,scaleX:0.4286,scaleY:0.5854,x:477.8,y:289.1,skewY:180}}]},3).to({state:[{t:this.instance_1,p:{x:380.6,y:275.9}},{t:this.instance,p:{regX:85.4,regY:34.6,scaleX:0.4286,scaleY:0.5854,x:477.8,y:289.1,skewY:180}}]},1).to({state:[{t:this.instance_1,p:{x:380.6,y:275.9}},{t:this.instance,p:{regX:85.4,regY:34.6,scaleX:0.4286,scaleY:0.5854,x:477.8,y:289.1,skewY:180}}]},35).to({state:[{t:this.instance_1,p:{x:380.6,y:275.9}},{t:this.instance,p:{regX:85.4,regY:34.6,scaleX:0.4286,scaleY:0.5854,x:477.8,y:289.1,skewY:180}}]},2).to({state:[]},27).to({state:[{t:this.instance,p:{regX:47.6,regY:10.1,scaleX:0.5181,scaleY:0.6381,x:496.05,y:274.35,skewY:180}},{t:this.instance_2}]},50).to({state:[]},3).to({state:[{t:this.instance,p:{regX:47.6,regY:10.1,scaleX:0.5181,scaleY:0.6381,x:496.05,y:274.35,skewY:180}},{t:this.instance_2}]},1).to({state:[{t:this.instance,p:{regX:47.6,regY:10.1,scaleX:0.5181,scaleY:0.6381,x:496.05,y:274.35,skewY:180}},{t:this.instance_2}]},6).to({state:[{t:this.instance,p:{regX:47.5,regY:10.2,scaleX:0.518,scaleY:0.6381,x:498.15,y:274.95,skewY:180}}]},1).to({state:[{t:this.instance_3},{t:this.instance,p:{regX:48.2,regY:27.1,scaleX:0.4473,scaleY:0.4989,x:793.1,y:331.9,skewY:0}}]},169).to({state:[]},61).wait(564));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_man = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// man
	this.instance = new lib.rigthHandMan();
	this.instance.setTransform(419.65,342.25,0.5543,0.5543,6.9812,0,0,31.9,74.4);

	this.instance_1 = new lib.leftHandMan();
	this.instance_1.setTransform(324.9,349.95,0.6233,0.6233,0,0,0,29.4,74.3);

	this.instance_2 = new lib.man();
	this.instance_2.setTransform(370.35,343.85,0.6019,0.6019,0,0,0,127.1,215);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAA676").s().p("AgxgIIBZAAIAKAAQgDAQgbAAIgDABQgsAAgWgRg");
	this.shape.setTransform(367.65,310.7507);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4A172").s().p("AgQAAIAAgJQA/AAg2ASQgEABgFAAIAAgKg");
	this.shape_1.setTransform(378.3907,309.8994);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F39363").s().p("AgTAUQgogOgegZQATAAAMAHQAEADAFAAQAXAQAuAAQAbAAADgQIAeAAIAKAAIAAAJQgKAKgMAGIgJAEg");
	this.shape_2.setTransform(367.65,310.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4A673").s().p("AgJgBQAQgDgCgbIAFAAQAAAUgBATQgDAYgEAAQgDAAgIghg");
	this.shape_3.setTransform(316.65,265.1108);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E86647").s().p("AgiAPIAAgKQAVgNAagLQACAAAAgFIAKAAIAKAAIAAAKQAAAFgDACQgeATgkANIAAgKg");
	this.shape_4.setTransform(382.15,303.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E66A49").s().p("AgiAUIAAgKQAFAAACgDQADgCAAgFQAegIAVgSQADgDAFAAQAAAFgDADQgZAhgpASIAAgKg");
	this.shape_5.setTransform(389.15,298.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5CEB7").s().p("AgYAFIAAgJQAUAAAKgIQAEgCAFAAQAFAAACACQADADAAAFQgFAAgCACQgOAQgcABIAAgKg");
	this.shape_6.setTransform(383.15,293.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E26C49").s().p("AgTAKIAAgKQAPgJAPgIQAEgCAFAAQAAAFgDADQgRAQgTAPIAAgKg");
	this.shape_7.setTransform(394.65,293.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0C9B5").s().p("AgOAPQAAgFgDgDQgCgCgFAAIAAgJIAngJIAKgBQAAAFgCAEQgIAJgTABIAAAKIgKAAg");
	this.shape_8.setTransform(387.15,291.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7D4D34").s().p("Ag2AtIAAgKQAUgBAIgKQACgEAAgFQAjgOAVgbQADgDAAgFQAFgFAGgDQAEgCAFAAIAAAKQAAAFgCADQgnAtg6AaIgKAAg");
	this.shape_9.setTransform(392.15,288.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E6D0B8").s().p("AgdAPQAZgTAagSQADgCAFAAQAAAFgDADQgVAbgjAOIAAgKg");
	this.shape_10.setTransform(392.65,287.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E96446").s().p("AgTAOIAAgKIAAgJQALgKASAAIAKAAIAAAKIAAAJQgFAAgBACQgFAKgNAAQgGAAgJgCg");
	this.shape_11.setTransform(376.65,305.5114);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F1855E").s().p("AgxgIIBZAAIAKAAQgDAQgbAAIgDABQgsAAgWgRg");
	this.shape_12.setTransform(369.65,307.7507);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA6041").s().p("AgdgEIAdAAIAKAAIAKAAIAKAAQAAAEgBAAQgRAFgMAAQgTAAgKgJg");
	this.shape_13.setTransform(369.65,305.407);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FD8A66").s().p("AgiAUIgKAAIgKAAIgKAAIAAgKQAzABAegSQADgCAFAAQAKgJAUgBIAKAAQAAAFgCAAQgbALgVANIgKAAQgSABgLAJIgKAAg");
	this.shape_14.setTransform(377.15,302.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#ECD7BD").s().p("AgiAEQArAEATgVQACgCAFAAIAAAKIAAAJQgFAAAAABQgDAPgWgGIgJABIgMABQgQAAgCgMg");
	this.shape_15.setTransform(377.15,294.5283);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#74422E").s().p("AgOAKQAAgFgCgCQgDgDgFAAIAAgJIAnAAIAKAAIAAAJQAAAFgCAAQgNAFgOAAIgKAAg");
	this.shape_16.setTransform(375.15,297.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DDC0A6").s().p("AAZAKIgnAAIgKAAIgKAAIAAgKQAWAGADgOQAAgBAFAAQADAQAagGIAKgBIAAAKIgKAAg");
	this.shape_17.setTransform(374.15,295.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#75432E").s().p("AgxAPIAAgKQAWAGADgOQAAgBAFAAQAcgBAOgRQACgCAFAAIAKAAIAKAAQAAAFgDADQgCACgFAAIAAAKQgFAAgDACQghAUgwAHIAAgKg");
	this.shape_18.setTransform(382.65,295.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C66A4D").s().p("Ag7gIIAKAAIBZAAIAKAAIAKAAQgSAQgqABQgpgBgSgQg");
	this.shape_19.setTransform(368.65,299.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FEA479").s().p("AgcAWIgeAAQAAgFgBAAQgPgEAGgUQAvgLAhAFIATABIAFAAQAUgTAPAYQgFAAgEACQgfARgxAAIAAAKIgKAAg");
	this.shape_20.setTransform(372.5643,302.7302);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FD8461").s().p("AAUAJQgVgHgcgCIAAgJQAiAAAXANQACABAAAFQgFAAgFgBg");
	this.shape_21.setTransform(361.65,303.8991);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E65D3E").s().p("ABGAPIhZAAIgKgBQgcgBgWgIIAAgJIAAgKQAcACAWAGQAFACAFAAIAKAAIAJAAQARAQAqgLQABgBAAgEIAKAAIAKAAIAAAJIAAAKIgKAAg");
	this.shape_22.setTransform(366.65,305.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#9A8574").s().p("AAoAFIhPAAQgFAAgDgDQgCgCAAgEIAKAAIA7AAIAKAAIAKAAIAKAAIAAAJIgKAAg");
	this.shape_23.setTransform(367.65,297.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#BBA083").s().p("AAPAKQgcgBgLgSQAbACAUALQACABAAAFIgKAAg");
	this.shape_24.setTransform(358.15,295.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#572A18").s().p("AAoAFIhZAAIAAgJIBPAAIAKAAQAFAAADADQACABAAAFIgKAAg");
	this.shape_25.setTransform(368.65,298.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E6D4BA").s().p("AAZAFIg7AAIAAgJIA7AAIAKAAIAAAJIgKAAg");
	this.shape_26.setTransform(367.15,296.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#99543F").s().p("AgEAKIgKAAIgUAAIAAgKQAPAAAOgEQABAAAAgFIAJAAIAUAAIAKAAIAAAJIgKAAIgUAAIAAAKIgJAAg");
	this.shape_27.setTransform(374.15,271.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F9EFD9").s().p("AgsgIIBPAAIAKAAQgDARgbgBQgpABgSgRg");
	this.shape_28.setTransform(366.15,275.75);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#884A36").s().p("AAeAFIhFAAIAAgJIBFAAIAKAAIAAAJIgKAAg");
	this.shape_29.setTransform(366.65,272.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F6CEB0").s().p("Ag7gIIAKAAIBFAAIAKAAIAUAAIAKAAQgSAQgqAAQgpAAgSgQg");
	this.shape_30.setTransform(367.65,273.75);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AA604A").s().p("AhPAAQAPAAAOgFQABAAAAgFIB3AAIAKAAQAAAFgBAAQgOAFgPAAIgKAAIhFAAIAAAJIgKAAIgKABIgMABQgQAAgCgLg");
	this.shape_31.setTransform(365.65,272.0283);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F39D6D").s().p("AAPAJQgXgFgQgNQAYAAAYAFQABAAAAAEIAAAKIgKgBg");
	this.shape_32.setTransform(361.15,263.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EB8160").s().p("AA8AFIgKAAIh3AAIAAgJICBAAIAKAAIAAAJIgKAAg");
	this.shape_33.setTransform(367.65,270.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EC9463").s().p("AhBABIAAgJQA8AAA7AEQAXABgXAFQgeAHgdAAQgeAAgegIg");
	this.shape_34.setTransform(370.2125,264.7814);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FEAB7A").s().p("AAUAFIgxAAIAAgJQAdAAAdAEQABAAAAAFIgKAAg");
	this.shape_35.setTransform(372.65,267.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FCA474").s().p("AhFgGICBAAIAKAAIAAAJQgoAAgmADIgOABQggAAgPgNg");
	this.shape_36.setTransform(362.65,267.6049);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DFD7C4").s().p("AgTgEQATgBAMgHQADgCAFAAIAAAKQgFAAgBACQgMARgHAAQgJAAgFgTg");
	this.shape_37.setTransform(394.65,279.4131);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D7D3C0").s().p("AgsgDIBFgDQAngCgmAIIgVAEQgMADgKAAQgSAAgJgKg");
	this.shape_38.setTransform(387.1188,281.2689);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#B68974").s().p("AgdgEIAUAAIAJAAIAUAAIAKAAQAAAEgBAAQgdAFgdAAIAAgJg");
	this.shape_39.setTransform(377.65,272.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F1D1B2").s().p("AgdAAQAFAAADgDQACgCAAgFIAKAAIAJAAIAUAAIAKAAQAAAFgCABQgIAEgKAAIAAAJIgKABIgLABQgQAAgCgLg");
	this.shape_40.setTransform(390.65,272.0283);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#713720").s().p("AAUAFIgUAAIgJAAIgUAAIAAgJIAnAAIAKAAQAFAAACADQADABAAAFIgKAAg");
	this.shape_41.setTransform(380.65,271.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D87150").s().p("AAeAFIgnAAIgKAAIgUAAIAAgJIBFAAIAKAAIAAAJIgKAAg");
	this.shape_42.setTransform(378.65,270.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#893825").s().p("AgdgFIAdAAIAKAAQAKAAAIAEQACABAAAEIgKAAIgKAAIgKABIgLABQgQAAgCgLg");
	this.shape_43.setTransform(387.65,270.5283);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#AB6E52").s().p("AAKAKIgdAAQAAgFgDgCQgCgDgFAAIAAgJIAKAAIAKAAQADAQAagGIAKgBQAAAFgCACQgDADgFAAIgKAAg");
	this.shape_44.setTransform(385.65,270.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FEA979").s().p("Ag2gEIBjAAIAKAAIAAAEQg3AFg2AAIAAgJg");
	this.shape_45.setTransform(383.15,267.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DE7E5F").s().p("AgTAFIgKAAIAAgJIAxAAIAKAAQAAAEgBABQgTAEgTAAIgKAAg");
	this.shape_46.setTransform(393.65,268.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A76954").s().p("AAKAKIgTAAQAAgFgCgBQgIgEgKAAIAAgJIAKAAIAKAAIAJAAIAKAAQAFAFAGADQAEABAFAAQAAAFgDACQgCADgFAAIgKAAg");
	this.shape_47.setTransform(391.65,269.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#733E2A").s().p("ABaAtQgFAAgEgCQgygPgygNQAAgFgDgDQgCgCgFAAQgFAAgEgCQglgQgYgfQA3AZA2AWQAFACAFAAQALATAdABIAKAAIAKAAIAKAAQAAAFACACQADADAFAAIAAAKIgKAAg");
	this.shape_48.setTransform(353.65,294.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F88E66").s().p("AAFAdQgSgEgLgPQAAgFACgBQAOgGgQgRQAFAAACgDQADgCAAgFQAFAAACACQADADAAAFQAOAYAPAPIgIAEQgCABAAAFIgKgBg");
	this.shape_49.setTransform(352.15,297.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7926C").s().p("AgqAyIgKAAQAAgFgCgBQgXgOgjAAIgKAAQgdgBgLgTQAAgFACgBIAIgEQgPgOgPgZQAzANAxAPQAFACAFAAQARAQArAAQApAAASgQQAPAAANgFQACAAAAgFQAwgHAhgVQAEgCAFAAQAfADgdAeQgCACAAAFQAAAFgDACQgCACgFAAIAAAKIgKAAIgKAAIgKAAQgUABgKAJQgPgXgUASIgFAAIgTgBQgigFguALQgGAWAPADQABAAAAAFIgKAAg");
	this.shape_50.setTransform(369.97,299.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E7D2B8").s().p("ABfAtIgKAAIgKAAQAAgFgCgBQgUgMgcgCQgFAAgFgCQg2gXg3gYQAAgFgCgEQgDgGgFgFQAyAUAxAWQAyAWA8APIAAAKIgKAAg");
	this.shape_51.setTransform(353.15,292.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E66948").s().p("AgogBQgngcgUgtIAKAAQAoAuAzAeQADADAFAAQALAPATAEIAKABQALATAdABIAKAAIAAAKIAAAKIAAAKQhPgfg9gtg");
	this.shape_52.setTransform(348.65,298.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F48C68").s().p("AAlAvQgzgfgogtQAFgFADgGQACgEAAgFQAKAFALADQAEACAFAAQAXAfAlAQQAEACAFAAQAAAFgDACQgCADgFAAQAQARgOAHQgCABAAAFQgFAAgDgDg");
	this.shape_53.setTransform(345.15,293.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8F533E").s().p("AAQATQgLgEgJgFQAAgFgCgBQgPgGgDgRQAagCAHAVQABAAAFAAQAFAFADAGQACAEAAAFQgFAAgEgBg");
	this.shape_54.setTransform(341.15,287.8911);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E2754F").s().p("AAKAOQgSgNgJgUQAlACgDAlIgFAAQAAgFgCgBg");
	this.shape_55.setTransform(335.411,287.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E38261").s().p("AAUAtQgFAAgEgCQgGgDgFgFIAFAAQADglglgCQgFAAgBgCQgEgIAAgKQAFgFADgGQACgEAAgFQAPAKAOAFIAAgFQAKAKAHALQADAEAAAFQADAQAPAHQACABAAAFQAAAFgCAEQgDAGgFAFIgKAAg");
	this.shape_56.setTransform(336.65,286.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#6C3B27").s().p("AgOgCIAAgKIAKAAIAJAAQAFAFADAGQACAEAAAEIAAAGQgPgGgOgJg");
	this.shape_57.setTransform(335.15,282.15);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5E3B2F").s().p("AAjAtIgKAAQgFAAgCgDQgggqgegsIAKAAIAKAAQAYAfAkAQQAEACAFAAQAAAFgCACQgDADgFAAQAAAFACACQADADAFAAIAAAKIAAAKIgKAAg");
	this.shape_58.setTransform(331.15,276.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E78563").s().p("AAXA/Qgkgsgag1IAAgKIAAgUQAFAAADADQACACAAAFQAdAtAhApQACADAFAAIAAAKQAAAFgCAEQgDAGgFAFQgFAAgCgCg");
	this.shape_59.setTransform(329.65,277.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F7A976").s().p("AgTAFQAKgFAIgGQABgDAAgFQAFAFAGACIAJADQgIAQgfADIAAgKg");
	this.shape_60.setTransform(319.65,259.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EE9664").s().p("AgTAZIAAgxQAKgJATgBIAKAAQAAAFgCADQgIAHgKAFIAAAKIAAAJIgEAAQACAbgRADIAAgKg");
	this.shape_61.setTransform(317.65,261.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F5946A").s().p("AAEA1QgagoADhDQATAAATAEQABABAAAFIgKAAIgTAAQAAAUAFATQAAABAEAAQAAAJAEAIQABACAFAAIAAAKIAAAUIAAAKQgFAAgBgCg");
	this.shape_62.setTransform(324.6347,268.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E3CBB2").s().p("AgnAZIAAgKIAAgnIAUAAIAKAAQATAKAVAIQAEACAFAAQAAAEgCACQgDADgFAAIAAAKQgFAAgDgDQgSgLghAEIAAAKIAAAKIgKAAg");
	this.shape_63.setTransform(331.65,269.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#9C4F3C").s().p("AgUAXQgEgIAAgKIAAgJIAAgUIAnAAIAKAAIAAAKIgKAAIgdAAIAAAdIAAAKQgFAAgBgCg");
	this.shape_64.setTransform(327.15,267.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E0815C").s().p("AgZATQgEgTAAgTIAUAAIAJAAQAPAAANAEQACABAAAFIgKAAIgnAAIAAATIAAAKQgFAAgBgBg");
	this.shape_65.setTransform(326.65,265.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5F2C1E").s().p("AgOAeQAAgFgCgCQgDgDgFAAIAAgKIAAgKIAAgdIAdAAIAKAAIAKAAIAAAKIgKAAIgTAAIAAAnIAAAKIgKAAg");
	this.shape_66.setTransform(328.15,268.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DB7452").s().p("AAUAFIgxAAIAAgJIAxAAIAKAAIAAAJIgKAAg");
	this.shape_67.setTransform(357.65,270.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#82432D").s().p("ABLAYQg+gHg5gMQgFAAgEgCQgVgHgUgKIAAgKIAKAAIAKAAQADARAbgGIAKgBQAYAPAjAFQAgAHAmACQAAAFgDACQgCADgFAAIgKgBg");
	this.shape_68.setTransform(340.15,268.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ECD2B5").s().p("ACbAVIhQABIgKAAIhPAAQgeAAgegDIgKgCQgogFgngGIh5gXIAAgJQAFgBADgCQACgDAAgEQA6AMA+AHIAKAAQAFAFAGAEQAEABAFAAIA8AAIAKAAQADAQAbgGIAKgBQARARAqAAQAqAAASgRIAKAAQAeAAAdgDQABgBAAgFIAUAAIAKAAIAeAAIAKAAQADAQAbgGIAKgBQgFAGgFgBQhIgGgcAfIgFAFQABgQgQAAg");
	this.shape_69.setTransform(363.15,272.65);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#80422B").s().p("AAKAFIg7AAIAAgJIAeAAIAKAAIAxAAIAKAAQAAAEgBAAQgOAFgPAAIgKAAg");
	this.shape_70.setTransform(355.65,271.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#4D4138").s().p("AAAALIgJAAQgFAAgDgDQgCgCAAgFQAFAAADgCQACgCAAgFQAVgGADAOQAAABAFAAQAAAFgDACQgCADgFAAIgKAAg");
	this.shape_71.setTransform(336.65,277.8143);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#9A9183").s().p("AgagCQAFAAACgCQACgDABgFQAWAHAQANIAGAEIgCABQgdAAgXgPg");
	this.shape_72.setTransform(340.4,279.1508);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#EE9870").s().p("AgxgFQAxAAAyAFIAAAEIgKAAIgxAAIgKABIgMABQgQAAgCgLg");
	this.shape_73.setTransform(337.65,266.5283);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B36147").s().p("AgSAIQgGgDgFgFQAFAAACgCQADgCAAgFIAnAAIAKAAIAAAJIgKAAIgdAAIAAAKQgFAAgEgCg");
	this.shape_74.setTransform(351.65,270.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E2744D").s().p("AgOAKIAAgKQAQgCAHgPQABgCAFAAIAAAKQAAAFgCACQgNAMgOAKIAAgKg");
	this.shape_75.setTransform(398.15,289.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F38E69").s().p("AhHBJQAcgegfgDIAAgKQAFAAACgCQADgDAAgFQA7gZAmguQACgDAAgFQARgDAHgPQABgCAFAAIAKAAIgBAKQgCARgRADIAAAKIAAAKQgFAAgBACQgHAPgRADIAAAJIAAAKQgFAAgEACQgQAIgOAKIAAAKIAAAKQgFAAgDADQgVASgfAJQAAgFADgCg");
	this.shape_76.setTransform(394.15,290.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EC825A").s().p("AgYAeIAAgKIAAgKQARgDACgQIABgKQAQgDAHgPQABgCAFAAQAAAFgCAEQgVAmgaAgIAAgKg");
	this.shape_77.setTransform(402.15,284.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E98669").s().p("AgTAUIAAgKIAAgKQAFAAACgCQADgCAAgFQAFgFAFgDQAEgCAFAAQAFAFADAGQACAEAAAEQgFAAgBACQgHAPgQADIgKAAg");
	this.shape_78.setTransform(402.65,280.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#683B2C").s().p("AgTAUIAAgKQARABgGgUIgBgKQAVAGADgPQAAgBAFAAIAAAKQAAAFgDACQgCADgFAAIAAAJIAAAKQgFAAgBACQgGAPgRADIAAgKg");
	this.shape_79.setTransform(399.65,281.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#44382F").s().p("AgKATQAAgFgCgBQgIgEgKAAIAAgJQAZgEAQgNQADgDAFAAQAXAKgVANQgCABAAAFQgFAAAAABQgDALgLAAQgEAAgGgCg");
	this.shape_80.setTransform(399.7705,277.996);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EC8764").s().p("AgLAXQgDgFgFgFIAAgKIAAgJQAKgGAHgHQACgCAAgGQAKgEAKAAIAAAEIgBALQgGAggWAQQAAgFgCgEg");
	this.shape_81.setTransform(405.65,277.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FDFAEA").s().p("AAoCBIgKAAIg7AAQg8gPgzgXQgxgWgygUQgFAAgBgBQgHgVgbACQAAgFgDgDQgHgMgKgJQAAgFgCgEQgDgGgFgFIAAgKIAAgKIAKAAIAKAAQAYAQAfgBIgFgEQgRgOgXgHQgFAAAAgBQgDgPgWAGQgFAAgEgCQglgRgYgfIAAgKIAAgKQAigDASALQADACAFAAIB5AXQAnAHAoAFIAKABQAeAEAeAAQASARApAAQAbAAADgRIBQgBQAQAAgBAQIAFgFQAcggBIAHQAFAAAFgFQA6gCAqgQQAFgCAFAAQAKAAAIAEQACABAAAFIAAAKQgDAWgbgCIAAAKQgFAAgDADQgQANgaAEQgFAAgDADQgNAHgTAAQALAoAXgmQABgCAFAAQAKAAAIAEQACABAAAFIABAKQAGAVgRgBIAAAJQgFAAgEACQgGADgFAFQgFAAgDADQgbARgZAUIAAAKIgKABIgoAJIAAAKQgFAAgEADQgLAHgUAAQgFAAgCADQgTAWgsgFQgFAAAAABQgCALgMAAQgFAAgGgCgADmgXIhGADQANARAlgJIAUgFQAhgGgXAAIgKAAg");
	this.shape_82.setTransform(366.65,282.9538);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#693A29").s().p("AgiA8QAAgFACgBQAVgOgXgKIAAgKQAbACACgWIABgJQAEAAAAgCQAQgngeABQgFAAgDgCQgCgDAAgFQAPAAAMgEQACgBAAgFIAKAAQAWADgCAbIAAAKQgFAAgBACQgJASgPAJIAAAKIAAAKQAAAFgDADQgGAHgKAFIAAAKIAAAKQgFAAgEACQgGADgFAFIAAgKg");
	this.shape_83.setTransform(405.1798,272.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F7926A").s().p("ADIAPIgeAAIgKAAIgKAAIgKAAIhGAAIgKAAIiBAAIgKAAIgyAAIgKAAIgoAAQgmgCgggHQgkgFgYgPIAyAAIAKAAIB4AAIAKAAQASAQArgCQAngEAnAAIAyAAIAKAAIAKAAIAKAAQA3AAA3gFIAAgFIBaAAIAKAAIAAAKIgKAAIgKAAIgKAAIgyAAIAAAJIgKAAIgKAAIAAAKIgKAAg");
	this.shape_84.setTransform(367.65,268.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EED5B8").s().p("Ag2AKQAKAAAIgEQACgBAAgFQAFAAACgCQADgCAAgFQAmAEAWgMQAEgCAFAAIAKAAIAAAKIAAAJQgFAAgFACQgqAQg5ACIAAgKg");
	this.shape_85.setTransform(397.15,270.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E4D2B7").s().p("AADAOQgHgEgKAAIAAgKIAAgJQAFAAACgCQADgDAAgFQAegBgQAnQAAABgFAAQAAgFgCgBg");
	this.shape_86.setTransform(404.1833,269.8988);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#814830").s().p("AgYAJQgFAAgEgCQgGgDgFgEQAUAAATgEQABgBAAgFIAJAAIAKAAQAPAAANAFQACAAAAAFQgFAAgEABQgQAKgYAAIgUgCg");
	this.shape_87.setTransform(397.15,268.9596);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FBA277").s().p("AAUAFIgKAAIgnAAIAAgJIAxAAIAKAAIAAAJIgKAAg");
	this.shape_88.setTransform(403.65,265.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AA6D56").s().p("AAFAKQAAgFgCAAQgMgFgPAAIAAgJIAdAAIAKAAQAAAFADADQACABAFAAQAAAFgDACQgCADgFAAIgKAAg");
	this.shape_89.setTransform(401.15,267.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#DF8D69").s().p("AgEAFIgeAAIAAgJIAKAAIAKAAIAnAAIAKAAQAAAEgBABQgOAEgPAAIgJAAg");
	this.shape_90.setTransform(402.15,266.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F6986B").s().p("AAIARQgDgGgFgFIAAgJQABgQgUAGIAAgKQA2gKgUA5QAAACgFAAQAAgFgCgEg");
	this.shape_91.setTransform(409.6802,266.327);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DA7758").s().p("AgEAjQgKAAgKAFIAAgKIAAgKQAPgKAJgRQAAgCAFAAQAQACgFgXIgBgJQAFAFADAGQACAEAAAFIgBAKQgFAhgXAQg");
	this.shape_92.setTransform(408.15,270.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#DD6F52").s().p("AAEAaIAAgKQACgagVgDIAAgKIAKAAQAUgGgBAQIAAAKIABAIQAFAVgOAAIgCAAg");
	this.shape_93.setTransform(408.2688,267.323);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FEA675").s().p("AAKAeQAMg4gqgDIAAgKQA5ACgWBMQgBABgFAAIABgKg");
	this.shape_94.setTransform(414.7394,262.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F09664").s().p("AANAjQgCgzgggSIAKAAQAqADgMA4IgBAKg");
	this.shape_95.setTransform(413.8225,263.4);

	this.instance_3 = new lib.man2("synched",0);
	this.instance_3.setTransform(366.85,343.75,1,1,0,0,0,74.7,129.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(0.2,1,1).p("Ahyg/IDlAAIAAB/IjlAAg");
	this.shape_96.setTransform(376.45,277.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D9E47C").s().p("AhyBAIAAh/IDlAAIAAB/g");
	this.shape_97.setTransform(376.45,277.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:31.9,regY:74.4,rotation:6.9812,x:419.65,y:342.25,scaleX:0.5543,scaleY:0.5543}}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.instance_3}]},8).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:39.2,regY:17.2,rotation:-8.017,x:427.55,y:311.2,scaleX:0.5543,scaleY:0.5543}}]},8).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:39.2,regY:17.3,rotation:-17.0052,x:427.6,y:311.25,scaleX:0.5543,scaleY:0.5543}}]},6).to({state:[{t:this.instance_2,p:{regX:127.1,regY:215,x:370.35,y:343.85}},{t:this.instance_1,p:{regX:29.4,regY:74.3,x:324.9,y:349.95,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:40.3,regY:12.2,rotation:-43.7105,x:428.45,y:308.5,scaleX:0.5542,scaleY:0.5542}}]},6).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.5,regY:74.5,x:562.45,y:407.5,scaleX:0.6233,scaleY:0.6233,rotation:0}},{t:this.instance,p:{regX:40.4,regY:12.5,rotation:-4.0092,x:666.05,y:366.05,scaleX:0.5541,scaleY:0.5541}}]},284).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.55,y:376,scaleX:0.6232,scaleY:0.6232,rotation:-14.9971}},{t:this.instance,p:{regX:40.4,regY:12.7,rotation:-24.7181,x:666.15,y:366,scaleX:0.5541,scaleY:0.5541}}]},15).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.4,regY:12.7,rotation:-39.7159,x:666.15,y:365.85,scaleX:0.554,scaleY:0.554}}]},8).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.4,regY:12.7,rotation:-54.7135,x:666.25,y:365.75,scaleX:0.554,scaleY:0.554}}]},8).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.2,regY:12.7,rotation:-84.7133,x:666.2,y:365.7,scaleX:0.5539,scaleY:0.5539}}]},7).to({state:[{t:this.instance_2,p:{regX:127.2,regY:215.2,x:607.9,y:401.35}},{t:this.instance_1,p:{regX:29.6,regY:24.2,x:562.7,y:375.9,scaleX:0.6232,scaleY:0.6232,rotation:-29.9934}},{t:this.instance,p:{regX:40.2,regY:12.8,rotation:-119.6816,x:666.3,y:365.45,scaleX:0.5539,scaleY:0.5539}}]},8).wait(134));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.AvocadosNigthmare1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,520,529,937];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.background.start;
		var self = this;
		self.stop();
		self.start.addEventListener("click", startPlaying);
		
		function startPlaying()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.start = undefined;
	}
	this.frame_520 = function() {
		this.replay = this.background.replay;
	}
	this.frame_529 = function() {
		var self = this;
		self.stop();
		self.replay.addEventListener("click", playAgain);
		
		function playAgain()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_937 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(519).call(this.frame_520).wait(9).call(this.frame_529).wait(408).call(this.frame_937).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(28).to({regX:0.2,regY:0.2,scaleX:0.8063,scaleY:0.8063,x:551.5,y:358.75},0).wait(1).to({regX:0,regY:0,x:551.35,y:358.6},0).wait(6).to({regX:0.4,regY:0.4,scaleX:0.6458,scaleY:0.6458,x:496.75,y:369.4},0).wait(1).to({regX:0,regY:0,x:496.5,y:369.15},0).wait(8).to({regX:0.4,regY:0.5,scaleX:0.5309,scaleY:0.5309,x:442.45,y:367.75},0).wait(1).to({regX:0,regY:0,x:442.25,y:367.5},0).wait(8).to({regX:0.6,regY:0.7,scaleX:0.4365,scaleY:0.4365,x:382.05,y:352.65},0).wait(1).to({regX:0,regY:0,x:381.8,y:352.35},0).wait(8).to({regX:0.8,regY:0.9,scaleX:0.337,scaleY:0.337,x:347.6,y:334.15},0).wait(1).to({regX:0,regY:0,x:347.35,y:333.85},0).wait(9).to({regX:0.9,regY:1.2,scaleX:0.2836,scaleY:0.2836,x:323.95,y:317.2},0).wait(1).to({regX:0,regY:0,x:323.7,y:316.85},0).wait(8).to({regX:1.2,regY:1.5,scaleX:0.2363,scaleY:0.2363,x:334,y:299.75},0).wait(38).to({regX:1.4,scaleX:0.2953,scaleY:0.2953,x:334.05,y:299.8},0).wait(4).to({regY:1.6,scaleX:0.3723,scaleY:0.3723,x:334.1,y:299.9},0).wait(4).to({regX:1.5,regY:1.8,scaleX:0.5605,scaleY:0.5605,x:382.35,y:317.85},0).wait(4).to({regX:1.7,regY:1.9,scaleX:0.6103,scaleY:0.6103,x:419.95,y:338.85},0).wait(4).to({regX:1.9,regY:2.1,scaleX:0.5339,scaleY:0.5339,x:526.6,y:367.55},0).wait(4).to({regX:2.1,regY:2.5,scaleX:0.4404,scaleY:0.4404,x:526.7,y:356.35},0).wait(4).to({regX:2.2,regY:2.7,scaleX:0.3535,scaleY:0.3535,x:509.35,y:337.25},0).wait(4).to({regX:3,regY:3.4,scaleX:0.2856,scaleY:0.2856,x:574.8,y:312.25},0).wait(67).to({regX:3.1,scaleX:0.3522,scaleY:0.3522,x:574.9,y:312.3},0).wait(7).to({regY:3.5,scaleX:0.5047,scaleY:0.5047,y:312.35},0).wait(9).to({regX:3.2,scaleX:0.6112,scaleY:0.6112,x:687.65,y:321.25},0).wait(11).to({regX:3.4,regY:3.6,x:850.95,y:315.35},0).wait(7).to({regX:3.5,regY:3.7,scaleX:0.4584,scaleY:0.4584,x:931,y:330.9},0).wait(8).to({regX:4.3,regY:4.5,scaleX:0.2793,scaleY:0.2793,x:880.5,y:292.05},0).wait(42).to({regX:4.7,regY:4.9,scaleX:0.9299,scaleY:0.9299,x:642.35,y:382.45},0).wait(138).to({regX:4.8,regY:5,scaleX:0.749,scaleY:0.749,x:757.7,y:378.5},0).wait(4).to({regX:4.9,regY:5.1,scaleX:0.5201,scaleY:0.5201,x:890.2,y:331.55},0).wait(5).to({regX:5.1,regY:5.4,scaleX:0.3611,scaleY:0.3611,x:988,y:285.55},0).wait(5).to({regX:5.5,regY:5.7,scaleX:0.2487,scaleY:0.2487,x:1047.45,y:267.75},0).wait(15).to({regX:5.7,regY:5.9,scaleX:0.228,scaleY:0.228,x:1076.95,y:264.85},0).wait(41).to({_off:true},24).wait(408));

	// mouth_obj_
	this.mouth = new lib.Scene_1_mouth();
	this.mouth.name = "mouth";
	this.mouth.depth = 0;
	this.mouth.isAttachedToCamera = 0
	this.mouth.isAttachedToMask = 0
	this.mouth.layerDepth = 0
	this.mouth.layerIndex = 0
	this.mouth.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(54).to({regX:102.4,regY:195.2,scaleX:2.2911,scaleY:2.2911},0).wait(29).to({regX:182.5,regY:214.3,scaleX:4.2325,scaleY:4.2325,x:0.25},0).wait(50).to({regX:28.3,regY:118,scaleX:1.6386,scaleY:1.6386,x:0},0).wait(3).to({regX:183.9,regY:174.2,scaleX:1.873,scaleY:1.873,x:0.05},0).wait(7).to({regX:282.3,regY:209,scaleX:2.829,scaleY:2.829,x:0},0).wait(170).to({regX:42.8,regY:43.1,scaleX:1.0754,scaleY:1.0754},0).wait(625));

	// doctor_obj_
	this.doctor = new lib.Scene_1_doctor();
	this.doctor.name = "doctor";
	this.doctor.depth = 0;
	this.doctor.isAttachedToCamera = 0
	this.doctor.isAttachedToMask = 0
	this.doctor.layerDepth = 0
	this.doctor.layerIndex = 1
	this.doctor.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.doctor).wait(138).to({regX:183.9,regY:174.2,scaleX:1.873,scaleY:1.873,x:0.05},0).wait(132).to({regX:700.5,regY:190.2,scaleX:3.5798,scaleY:3.5798,x:0,y:0.05},0).wait(28).to({regX:42.8,regY:43.1,scaleX:1.0754,scaleY:1.0754,y:0},0).wait(142).to({regX:554.8,regY:141.7,scaleX:1.9228,scaleY:1.9228,x:0.1,y:0.1},0).to({_off:true},1).wait(497));

	// babyboy_obj_
	this.babyboy = new lib.Scene_1_babyboy();
	this.babyboy.name = "babyboy";
	this.babyboy.depth = 0;
	this.babyboy.isAttachedToCamera = 0
	this.babyboy.isAttachedToMask = 0
	this.babyboy.layerDepth = 0
	this.babyboy.layerIndex = 2
	this.babyboy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.babyboy).wait(80).to({regX:142.1,regY:214.7,scaleX:3.5263,scaleY:3.5263,x:0.05,y:0.05},0).wait(53).to({regX:28.3,regY:118,scaleX:1.6386,scaleY:1.6386,x:0,y:0},0).to({_off:true},1).wait(804));

	// babygirl_obj_
	this.babygirl = new lib.Scene_1_babygirl();
	this.babygirl.name = "babygirl";
	this.babygirl.depth = 0;
	this.babygirl.isAttachedToCamera = 0
	this.babygirl.isAttachedToMask = 0
	this.babygirl.layerDepth = 0
	this.babygirl.layerIndex = 3
	this.babygirl.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.babygirl).wait(147).to({regX:391.2,regY:208.5,scaleX:3.5018,scaleY:3.5018,x:0.2,y:0.2},0).wait(66).to({_off:true},1).wait(724));

	// texts_obj_
	this.texts = new lib.Scene_1_texts();
	this.texts.name = "texts";
	this.texts.setTransform(372.4,325.7,1,1,0,0,0,372.4,325.7);
	this.texts.depth = 0;
	this.texts.isAttachedToCamera = 0
	this.texts.isAttachedToMask = 0
	this.texts.layerDepth = 0
	this.texts.layerIndex = 4
	this.texts.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.texts).wait(80).to({regX:247.7,regY:307.1,scaleX:3.5263,scaleY:3.5263,y:325.85},0).wait(52).to({regX:255.6,regY:316.8,scaleX:1.6386,scaleY:1.6386,x:372.5,y:325.75},0).wait(15).to({regX:497.5,regY:301.4,scaleX:3.5018,scaleY:3.5018,x:372.45,y:325.55},0).wait(109).to({regX:804.5,regY:281.2,scaleX:3.5798,scaleY:3.5798,x:372.3,y:325.8},0).wait(57).to({regX:389.1,regY:345.9,scaleX:1.0754,scaleY:1.0754,x:372.4,y:325.65},0).wait(166).to({regX:1014.6,regY:255.6,scaleX:4.3869,scaleY:4.3869,x:372.25,y:325.55},0).to({_off:true},26).wait(433));

	// wasabi_obj_
	this.wasabi = new lib.Scene_1_wasabi();
	this.wasabi.name = "wasabi";
	this.wasabi.depth = 0;
	this.wasabi.isAttachedToCamera = 0
	this.wasabi.isAttachedToMask = 0
	this.wasabi.layerDepth = 0
	this.wasabi.layerIndex = 5
	this.wasabi.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.wasabi).wait(374).to({regX:42.8,regY:43.1,scaleX:1.0754,scaleY:1.0754},0).to({_off:true},131).wait(433));

	// פה_obj_
	this.פה = new lib.Scene_1_פה();
	this.פה.name = "פה";
	this.פה.depth = 0;
	this.פה.isAttachedToCamera = 0
	this.פה.isAttachedToMask = 0
	this.פה.layerDepth = 0
	this.פה.layerIndex = 6
	this.פה.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.פה).wait(2).to({regX:586,regY:313.8,x:586,y:313.8},0).wait(81).to({regX:182.5,regY:214.3,scaleX:4.2325,scaleY:4.2325,x:0.25,y:0},0).wait(1).to({regX:586,regY:313.8,scaleX:1,scaleY:1,x:403.6,y:99.55},0).wait(37).to({regX:144.7,regY:193,scaleX:3.3865,scaleY:3.3865,x:0.2,y:0.05},0).wait(12).to({regX:28.3,regY:118,scaleX:1.6386,scaleY:1.6386,x:0,y:0},0).wait(1).to({regX:586,regY:313.8,scaleX:1,scaleY:1,x:557.75,y:195.85},0).wait(16).to({regX:391.2,regY:208.5,scaleX:3.5018,scaleY:3.5018,x:0.2,y:0.2},0).wait(1).to({regX:586,regY:313.8,scaleX:1,scaleY:1,x:194.9,y:105.4},0).wait(8).to({regX:391.2,regY:208.5,scaleX:3.5018,scaleY:3.5018,x:0.2,y:0.2},0).wait(55).to({regX:348.4,regY:184.3,scaleX:2.8395,scaleY:2.8395,x:0.05,y:0},0).wait(9).to({regX:250.3,regY:128.8,scaleX:1.9812,scaleY:1.9812,x:0,y:-0.05},0).wait(98).to({regX:42.8,regY:43.1,scaleX:1.0754,scaleY:1.0754,y:0},0).wait(63).to({_off:true},196).wait(358));

	// man_obj_
	this.man = new lib.Scene_1_man();
	this.man.name = "man";
	this.man.depth = 0;
	this.man.isAttachedToCamera = 0
	this.man.isAttachedToMask = 0
	this.man.layerDepth = 0
	this.man.layerIndex = 7
	this.man.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.man).wait(29).to({regX:35.2,regY:68.3,scaleX:1.2402,scaleY:1.2402,x:-0.05},0).wait(284).to({regX:42.8,regY:43.1,scaleX:1.0754,scaleY:1.0754,x:0},0).wait(46).to({_off:true},134).wait(445));

	// woman_obj_
	this.woman = new lib.Scene_1_woman();
	this.woman.name = "woman";
	this.woman.depth = 0;
	this.woman.isAttachedToCamera = 0
	this.woman.isAttachedToMask = 0
	this.woman.layerDepth = 0
	this.woman.layerIndex = 8
	this.woman.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.woman).wait(74).to({regX:142.1,regY:214.7,scaleX:3.5263,scaleY:3.5263,x:0.05,y:0.05},0).wait(239).to({regX:42.8,regY:43.1,scaleX:1.0754,scaleY:1.0754,x:0,y:0},0).to({_off:true},180).wait(445));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(644.9,369.1,1,1,0,0,0,644.9,369.1);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 9
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(153).to({regX:575.3,regY:313.9,scaleX:3.5018,scaleY:3.5018,y:369.3},0).wait(160).to({regX:642.5,regY:386.3,scaleX:1.0754,scaleY:1.0754,y:369.1},0).wait(181).to({regX:1076.8,regY:265.6,scaleX:4.3869,scaleY:4.3869,x:645.1,y:369.4},0).wait(26).to({_off:true},25).wait(393));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1351,746.7);
// library properties:
lib.properties = {
	id: '3DA2F29F93C1474199487BA3D22ABD76',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/CachedBmp_9.png?1618074837996", id:"CachedBmp_9"},
		{src:"images/CachedBmp_7.png?1618074837996", id:"CachedBmp_7"},
		{src:"images/CachedBmp_4.png?1618074837996", id:"CachedBmp_4"},
		{src:"images/CachedBmp_1.png?1618074837996", id:"CachedBmp_1"},
		{src:"images/curtain.png?1618074837996", id:"curtain"},
		{src:"images/wasabi.png?1618074837996", id:"wasabi"},
		{src:"images/Avocado_s Nigthmare _1__atlas_1.png?1618074837804", id:"Avocado_s Nigthmare _1__atlas_1"},
		{src:"images/Avocado_s Nigthmare _1__atlas_2.png?1618074837804", id:"Avocado_s Nigthmare _1__atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3DA2F29F93C1474199487BA3D22ABD76'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;