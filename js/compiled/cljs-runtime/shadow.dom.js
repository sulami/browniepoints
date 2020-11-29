goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50408 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50408(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50415 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50415(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49641 = coll;
var G__49642 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49641,G__49642) : shadow.dom.lazy_native_coll_seq.call(null,G__49641,G__49642));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49653 = arguments.length;
switch (G__49653) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49658 = arguments.length;
switch (G__49658) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49663 = arguments.length;
switch (G__49663) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49671 = arguments.length;
switch (G__49671) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49683 = arguments.length;
switch (G__49683) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49695 = arguments.length;
switch (G__49695) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49700){if((e49700 instanceof Object)){
var e = e49700;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49700;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49710 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49711 = null;
var count__49712 = (0);
var i__49713 = (0);
while(true){
if((i__49713 < count__49712)){
var el = chunk__49711.cljs$core$IIndexed$_nth$arity$2(null,i__49713);
var handler_50497__$1 = ((function (seq__49710,chunk__49711,count__49712,i__49713,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49710,chunk__49711,count__49712,i__49713,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50497__$1);


var G__50500 = seq__49710;
var G__50501 = chunk__49711;
var G__50502 = count__49712;
var G__50503 = (i__49713 + (1));
seq__49710 = G__50500;
chunk__49711 = G__50501;
count__49712 = G__50502;
i__49713 = G__50503;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49710);
if(temp__5735__auto__){
var seq__49710__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49710__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49710__$1);
var G__50505 = cljs.core.chunk_rest(seq__49710__$1);
var G__50506 = c__4556__auto__;
var G__50507 = cljs.core.count(c__4556__auto__);
var G__50508 = (0);
seq__49710 = G__50505;
chunk__49711 = G__50506;
count__49712 = G__50507;
i__49713 = G__50508;
continue;
} else {
var el = cljs.core.first(seq__49710__$1);
var handler_50509__$1 = ((function (seq__49710,chunk__49711,count__49712,i__49713,el,seq__49710__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49710,chunk__49711,count__49712,i__49713,el,seq__49710__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50509__$1);


var G__50511 = cljs.core.next(seq__49710__$1);
var G__50512 = null;
var G__50513 = (0);
var G__50514 = (0);
seq__49710 = G__50511;
chunk__49711 = G__50512;
count__49712 = G__50513;
i__49713 = G__50514;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49727 = arguments.length;
switch (G__49727) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49736 = cljs.core.seq(events);
var chunk__49737 = null;
var count__49738 = (0);
var i__49739 = (0);
while(true){
if((i__49739 < count__49738)){
var vec__49750 = chunk__49737.cljs$core$IIndexed$_nth$arity$2(null,i__49739);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49750,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50526 = seq__49736;
var G__50527 = chunk__49737;
var G__50528 = count__49738;
var G__50529 = (i__49739 + (1));
seq__49736 = G__50526;
chunk__49737 = G__50527;
count__49738 = G__50528;
i__49739 = G__50529;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49736);
if(temp__5735__auto__){
var seq__49736__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49736__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49736__$1);
var G__50532 = cljs.core.chunk_rest(seq__49736__$1);
var G__50533 = c__4556__auto__;
var G__50534 = cljs.core.count(c__4556__auto__);
var G__50535 = (0);
seq__49736 = G__50532;
chunk__49737 = G__50533;
count__49738 = G__50534;
i__49739 = G__50535;
continue;
} else {
var vec__49754 = cljs.core.first(seq__49736__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49754,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49754,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50537 = cljs.core.next(seq__49736__$1);
var G__50538 = null;
var G__50539 = (0);
var G__50540 = (0);
seq__49736 = G__50537;
chunk__49737 = G__50538;
count__49738 = G__50539;
i__49739 = G__50540;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49758 = cljs.core.seq(styles);
var chunk__49759 = null;
var count__49760 = (0);
var i__49761 = (0);
while(true){
if((i__49761 < count__49760)){
var vec__49780 = chunk__49759.cljs$core$IIndexed$_nth$arity$2(null,i__49761);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49780,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49780,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50546 = seq__49758;
var G__50547 = chunk__49759;
var G__50548 = count__49760;
var G__50549 = (i__49761 + (1));
seq__49758 = G__50546;
chunk__49759 = G__50547;
count__49760 = G__50548;
i__49761 = G__50549;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49758);
if(temp__5735__auto__){
var seq__49758__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49758__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49758__$1);
var G__50551 = cljs.core.chunk_rest(seq__49758__$1);
var G__50552 = c__4556__auto__;
var G__50553 = cljs.core.count(c__4556__auto__);
var G__50554 = (0);
seq__49758 = G__50551;
chunk__49759 = G__50552;
count__49760 = G__50553;
i__49761 = G__50554;
continue;
} else {
var vec__49786 = cljs.core.first(seq__49758__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49786,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49786,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50558 = cljs.core.next(seq__49758__$1);
var G__50559 = null;
var G__50560 = (0);
var G__50561 = (0);
seq__49758 = G__50558;
chunk__49759 = G__50559;
count__49760 = G__50560;
i__49761 = G__50561;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49792_50563 = key;
var G__49792_50564__$1 = (((G__49792_50563 instanceof cljs.core.Keyword))?G__49792_50563.fqn:null);
switch (G__49792_50564__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50573 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_50573,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_50573,"aria-");
}
})())){
el.setAttribute(ks_50573,value);
} else {
(el[ks_50573] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49821){
var map__49822 = p__49821;
var map__49822__$1 = (((((!((map__49822 == null))))?(((((map__49822.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49822.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49822):map__49822);
var props = map__49822__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49822__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49825 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49825,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49825,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49825,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49829 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49829,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49829;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49833 = arguments.length;
switch (G__49833) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49842){
var vec__49846 = p__49842;
var seq__49847 = cljs.core.seq(vec__49846);
var first__49848 = cljs.core.first(seq__49847);
var seq__49847__$1 = cljs.core.next(seq__49847);
var nn = first__49848;
var first__49848__$1 = cljs.core.first(seq__49847__$1);
var seq__49847__$2 = cljs.core.next(seq__49847__$1);
var np = first__49848__$1;
var nc = seq__49847__$2;
var node = vec__49846;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49853 = nn;
var G__49854 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49853,G__49854) : create_fn.call(null,G__49853,G__49854));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49857 = nn;
var G__49858 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49857,G__49858) : create_fn.call(null,G__49857,G__49858));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49861 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49861,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49861,(1),null);
var seq__49864_50587 = cljs.core.seq(node_children);
var chunk__49865_50588 = null;
var count__49866_50589 = (0);
var i__49867_50590 = (0);
while(true){
if((i__49867_50590 < count__49866_50589)){
var child_struct_50599 = chunk__49865_50588.cljs$core$IIndexed$_nth$arity$2(null,i__49867_50590);
var children_50600 = shadow.dom.dom_node(child_struct_50599);
if(cljs.core.seq_QMARK_(children_50600)){
var seq__49901_50602 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50600));
var chunk__49903_50603 = null;
var count__49904_50604 = (0);
var i__49905_50605 = (0);
while(true){
if((i__49905_50605 < count__49904_50604)){
var child_50606 = chunk__49903_50603.cljs$core$IIndexed$_nth$arity$2(null,i__49905_50605);
if(cljs.core.truth_(child_50606)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50606);


var G__50607 = seq__49901_50602;
var G__50608 = chunk__49903_50603;
var G__50609 = count__49904_50604;
var G__50610 = (i__49905_50605 + (1));
seq__49901_50602 = G__50607;
chunk__49903_50603 = G__50608;
count__49904_50604 = G__50609;
i__49905_50605 = G__50610;
continue;
} else {
var G__50611 = seq__49901_50602;
var G__50612 = chunk__49903_50603;
var G__50613 = count__49904_50604;
var G__50614 = (i__49905_50605 + (1));
seq__49901_50602 = G__50611;
chunk__49903_50603 = G__50612;
count__49904_50604 = G__50613;
i__49905_50605 = G__50614;
continue;
}
} else {
var temp__5735__auto___50615 = cljs.core.seq(seq__49901_50602);
if(temp__5735__auto___50615){
var seq__49901_50616__$1 = temp__5735__auto___50615;
if(cljs.core.chunked_seq_QMARK_(seq__49901_50616__$1)){
var c__4556__auto___50617 = cljs.core.chunk_first(seq__49901_50616__$1);
var G__50618 = cljs.core.chunk_rest(seq__49901_50616__$1);
var G__50619 = c__4556__auto___50617;
var G__50620 = cljs.core.count(c__4556__auto___50617);
var G__50621 = (0);
seq__49901_50602 = G__50618;
chunk__49903_50603 = G__50619;
count__49904_50604 = G__50620;
i__49905_50605 = G__50621;
continue;
} else {
var child_50622 = cljs.core.first(seq__49901_50616__$1);
if(cljs.core.truth_(child_50622)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50622);


var G__50623 = cljs.core.next(seq__49901_50616__$1);
var G__50624 = null;
var G__50625 = (0);
var G__50626 = (0);
seq__49901_50602 = G__50623;
chunk__49903_50603 = G__50624;
count__49904_50604 = G__50625;
i__49905_50605 = G__50626;
continue;
} else {
var G__50627 = cljs.core.next(seq__49901_50616__$1);
var G__50628 = null;
var G__50629 = (0);
var G__50630 = (0);
seq__49901_50602 = G__50627;
chunk__49903_50603 = G__50628;
count__49904_50604 = G__50629;
i__49905_50605 = G__50630;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50600);
}


var G__50631 = seq__49864_50587;
var G__50632 = chunk__49865_50588;
var G__50633 = count__49866_50589;
var G__50634 = (i__49867_50590 + (1));
seq__49864_50587 = G__50631;
chunk__49865_50588 = G__50632;
count__49866_50589 = G__50633;
i__49867_50590 = G__50634;
continue;
} else {
var temp__5735__auto___50635 = cljs.core.seq(seq__49864_50587);
if(temp__5735__auto___50635){
var seq__49864_50636__$1 = temp__5735__auto___50635;
if(cljs.core.chunked_seq_QMARK_(seq__49864_50636__$1)){
var c__4556__auto___50640 = cljs.core.chunk_first(seq__49864_50636__$1);
var G__50642 = cljs.core.chunk_rest(seq__49864_50636__$1);
var G__50643 = c__4556__auto___50640;
var G__50644 = cljs.core.count(c__4556__auto___50640);
var G__50645 = (0);
seq__49864_50587 = G__50642;
chunk__49865_50588 = G__50643;
count__49866_50589 = G__50644;
i__49867_50590 = G__50645;
continue;
} else {
var child_struct_50646 = cljs.core.first(seq__49864_50636__$1);
var children_50647 = shadow.dom.dom_node(child_struct_50646);
if(cljs.core.seq_QMARK_(children_50647)){
var seq__49914_50648 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50647));
var chunk__49916_50649 = null;
var count__49917_50650 = (0);
var i__49918_50651 = (0);
while(true){
if((i__49918_50651 < count__49917_50650)){
var child_50657 = chunk__49916_50649.cljs$core$IIndexed$_nth$arity$2(null,i__49918_50651);
if(cljs.core.truth_(child_50657)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50657);


var G__50659 = seq__49914_50648;
var G__50660 = chunk__49916_50649;
var G__50661 = count__49917_50650;
var G__50662 = (i__49918_50651 + (1));
seq__49914_50648 = G__50659;
chunk__49916_50649 = G__50660;
count__49917_50650 = G__50661;
i__49918_50651 = G__50662;
continue;
} else {
var G__50664 = seq__49914_50648;
var G__50665 = chunk__49916_50649;
var G__50666 = count__49917_50650;
var G__50667 = (i__49918_50651 + (1));
seq__49914_50648 = G__50664;
chunk__49916_50649 = G__50665;
count__49917_50650 = G__50666;
i__49918_50651 = G__50667;
continue;
}
} else {
var temp__5735__auto___50668__$1 = cljs.core.seq(seq__49914_50648);
if(temp__5735__auto___50668__$1){
var seq__49914_50669__$1 = temp__5735__auto___50668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49914_50669__$1)){
var c__4556__auto___50671 = cljs.core.chunk_first(seq__49914_50669__$1);
var G__50672 = cljs.core.chunk_rest(seq__49914_50669__$1);
var G__50673 = c__4556__auto___50671;
var G__50674 = cljs.core.count(c__4556__auto___50671);
var G__50675 = (0);
seq__49914_50648 = G__50672;
chunk__49916_50649 = G__50673;
count__49917_50650 = G__50674;
i__49918_50651 = G__50675;
continue;
} else {
var child_50676 = cljs.core.first(seq__49914_50669__$1);
if(cljs.core.truth_(child_50676)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50676);


var G__50677 = cljs.core.next(seq__49914_50669__$1);
var G__50678 = null;
var G__50679 = (0);
var G__50680 = (0);
seq__49914_50648 = G__50677;
chunk__49916_50649 = G__50678;
count__49917_50650 = G__50679;
i__49918_50651 = G__50680;
continue;
} else {
var G__50682 = cljs.core.next(seq__49914_50669__$1);
var G__50683 = null;
var G__50684 = (0);
var G__50685 = (0);
seq__49914_50648 = G__50682;
chunk__49916_50649 = G__50683;
count__49917_50650 = G__50684;
i__49918_50651 = G__50685;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50647);
}


var G__50687 = cljs.core.next(seq__49864_50636__$1);
var G__50688 = null;
var G__50689 = (0);
var G__50690 = (0);
seq__49864_50587 = G__50687;
chunk__49865_50588 = G__50688;
count__49866_50589 = G__50689;
i__49867_50590 = G__50690;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49938 = cljs.core.seq(node);
var chunk__49939 = null;
var count__49940 = (0);
var i__49941 = (0);
while(true){
if((i__49941 < count__49940)){
var n = chunk__49939.cljs$core$IIndexed$_nth$arity$2(null,i__49941);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50703 = seq__49938;
var G__50704 = chunk__49939;
var G__50705 = count__49940;
var G__50706 = (i__49941 + (1));
seq__49938 = G__50703;
chunk__49939 = G__50704;
count__49940 = G__50705;
i__49941 = G__50706;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49938);
if(temp__5735__auto__){
var seq__49938__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49938__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__49938__$1);
var G__50708 = cljs.core.chunk_rest(seq__49938__$1);
var G__50709 = c__4556__auto__;
var G__50710 = cljs.core.count(c__4556__auto__);
var G__50711 = (0);
seq__49938 = G__50708;
chunk__49939 = G__50709;
count__49940 = G__50710;
i__49941 = G__50711;
continue;
} else {
var n = cljs.core.first(seq__49938__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50715 = cljs.core.next(seq__49938__$1);
var G__50716 = null;
var G__50717 = (0);
var G__50718 = (0);
seq__49938 = G__50715;
chunk__49939 = G__50716;
count__49940 = G__50717;
i__49941 = G__50718;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49947 = arguments.length;
switch (G__49947) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49950 = arguments.length;
switch (G__49950) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49960 = arguments.length;
switch (G__49960) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___50742 = arguments.length;
var i__4737__auto___50744 = (0);
while(true){
if((i__4737__auto___50744 < len__4736__auto___50742)){
args__4742__auto__.push((arguments[i__4737__auto___50744]));

var G__50746 = (i__4737__auto___50744 + (1));
i__4737__auto___50744 = G__50746;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49982_50748 = cljs.core.seq(nodes);
var chunk__49983_50749 = null;
var count__49984_50750 = (0);
var i__49985_50751 = (0);
while(true){
if((i__49985_50751 < count__49984_50750)){
var node_50753 = chunk__49983_50749.cljs$core$IIndexed$_nth$arity$2(null,i__49985_50751);
fragment.appendChild(shadow.dom._to_dom(node_50753));


var G__50754 = seq__49982_50748;
var G__50755 = chunk__49983_50749;
var G__50756 = count__49984_50750;
var G__50757 = (i__49985_50751 + (1));
seq__49982_50748 = G__50754;
chunk__49983_50749 = G__50755;
count__49984_50750 = G__50756;
i__49985_50751 = G__50757;
continue;
} else {
var temp__5735__auto___50758 = cljs.core.seq(seq__49982_50748);
if(temp__5735__auto___50758){
var seq__49982_50759__$1 = temp__5735__auto___50758;
if(cljs.core.chunked_seq_QMARK_(seq__49982_50759__$1)){
var c__4556__auto___50761 = cljs.core.chunk_first(seq__49982_50759__$1);
var G__50762 = cljs.core.chunk_rest(seq__49982_50759__$1);
var G__50763 = c__4556__auto___50761;
var G__50764 = cljs.core.count(c__4556__auto___50761);
var G__50765 = (0);
seq__49982_50748 = G__50762;
chunk__49983_50749 = G__50763;
count__49984_50750 = G__50764;
i__49985_50751 = G__50765;
continue;
} else {
var node_50770 = cljs.core.first(seq__49982_50759__$1);
fragment.appendChild(shadow.dom._to_dom(node_50770));


var G__50774 = cljs.core.next(seq__49982_50759__$1);
var G__50775 = null;
var G__50776 = (0);
var G__50777 = (0);
seq__49982_50748 = G__50774;
chunk__49983_50749 = G__50775;
count__49984_50750 = G__50776;
i__49985_50751 = G__50777;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49977){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49977));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49996_50784 = cljs.core.seq(scripts);
var chunk__49997_50785 = null;
var count__49998_50786 = (0);
var i__49999_50787 = (0);
while(true){
if((i__49999_50787 < count__49998_50786)){
var vec__50010_50789 = chunk__49997_50785.cljs$core$IIndexed$_nth$arity$2(null,i__49999_50787);
var script_tag_50790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50010_50789,(0),null);
var script_body_50791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50010_50789,(1),null);
eval(script_body_50791);


var G__50792 = seq__49996_50784;
var G__50793 = chunk__49997_50785;
var G__50794 = count__49998_50786;
var G__50795 = (i__49999_50787 + (1));
seq__49996_50784 = G__50792;
chunk__49997_50785 = G__50793;
count__49998_50786 = G__50794;
i__49999_50787 = G__50795;
continue;
} else {
var temp__5735__auto___50797 = cljs.core.seq(seq__49996_50784);
if(temp__5735__auto___50797){
var seq__49996_50801__$1 = temp__5735__auto___50797;
if(cljs.core.chunked_seq_QMARK_(seq__49996_50801__$1)){
var c__4556__auto___50803 = cljs.core.chunk_first(seq__49996_50801__$1);
var G__50804 = cljs.core.chunk_rest(seq__49996_50801__$1);
var G__50805 = c__4556__auto___50803;
var G__50806 = cljs.core.count(c__4556__auto___50803);
var G__50807 = (0);
seq__49996_50784 = G__50804;
chunk__49997_50785 = G__50805;
count__49998_50786 = G__50806;
i__49999_50787 = G__50807;
continue;
} else {
var vec__50020_50809 = cljs.core.first(seq__49996_50801__$1);
var script_tag_50810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020_50809,(0),null);
var script_body_50811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50020_50809,(1),null);
eval(script_body_50811);


var G__50813 = cljs.core.next(seq__49996_50801__$1);
var G__50814 = null;
var G__50815 = (0);
var G__50816 = (0);
seq__49996_50784 = G__50813;
chunk__49997_50785 = G__50814;
count__49998_50786 = G__50815;
i__49999_50787 = G__50816;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__50023){
var vec__50024 = p__50023;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50024,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50024,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50039 = arguments.length;
switch (G__50039) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50051 = cljs.core.seq(style_keys);
var chunk__50052 = null;
var count__50053 = (0);
var i__50054 = (0);
while(true){
if((i__50054 < count__50053)){
var it = chunk__50052.cljs$core$IIndexed$_nth$arity$2(null,i__50054);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50835 = seq__50051;
var G__50836 = chunk__50052;
var G__50837 = count__50053;
var G__50838 = (i__50054 + (1));
seq__50051 = G__50835;
chunk__50052 = G__50836;
count__50053 = G__50837;
i__50054 = G__50838;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50051);
if(temp__5735__auto__){
var seq__50051__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50051__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__50051__$1);
var G__50839 = cljs.core.chunk_rest(seq__50051__$1);
var G__50840 = c__4556__auto__;
var G__50841 = cljs.core.count(c__4556__auto__);
var G__50842 = (0);
seq__50051 = G__50839;
chunk__50052 = G__50840;
count__50053 = G__50841;
i__50054 = G__50842;
continue;
} else {
var it = cljs.core.first(seq__50051__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50845 = cljs.core.next(seq__50051__$1);
var G__50846 = null;
var G__50847 = (0);
var G__50848 = (0);
seq__50051 = G__50845;
chunk__50052 = G__50846;
count__50053 = G__50847;
i__50054 = G__50848;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50064,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50072 = k50064;
var G__50072__$1 = (((G__50072 instanceof cljs.core.Keyword))?G__50072.fqn:null);
switch (G__50072__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50064,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50077){
var vec__50079 = p__50077;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50079,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50079,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50063){
var self__ = this;
var G__50063__$1 = this;
return (new cljs.core.RecordIter((0),G__50063__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50065,other50066){
var self__ = this;
var this50065__$1 = this;
return (((!((other50066 == null)))) && ((this50065__$1.constructor === other50066.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50065__$1.x,other50066.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50065__$1.y,other50066.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50065__$1.__extmap,other50066.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50063){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50115 = cljs.core.keyword_identical_QMARK_;
var expr__50116 = k__4388__auto__;
if(cljs.core.truth_((pred__50115.cljs$core$IFn$_invoke$arity$2 ? pred__50115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50116) : pred__50115.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50116)))){
return (new shadow.dom.Coordinate(G__50063,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50115.cljs$core$IFn$_invoke$arity$2 ? pred__50115.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50116) : pred__50115.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50116)))){
return (new shadow.dom.Coordinate(self__.x,G__50063,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50063),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50063){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50063,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50067){
var extmap__4419__auto__ = (function (){var G__50129 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50067,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50067)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50129);
} else {
return G__50129;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50067),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50067),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k50158,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__50164 = k50158;
var G__50164__$1 = (((G__50164 instanceof cljs.core.Keyword))?G__50164.fqn:null);
switch (G__50164__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50158,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__50165){
var vec__50166 = p__50165;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50166,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50166,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50157){
var self__ = this;
var G__50157__$1 = this;
return (new cljs.core.RecordIter((0),G__50157__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50159,other50160){
var self__ = this;
var this50159__$1 = this;
return (((!((other50160 == null)))) && ((this50159__$1.constructor === other50160.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50159__$1.w,other50160.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50159__$1.h,other50160.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50159__$1.__extmap,other50160.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__50157){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__50182 = cljs.core.keyword_identical_QMARK_;
var expr__50183 = k__4388__auto__;
if(cljs.core.truth_((pred__50182.cljs$core$IFn$_invoke$arity$2 ? pred__50182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50183) : pred__50182.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50183)))){
return (new shadow.dom.Size(G__50157,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50182.cljs$core$IFn$_invoke$arity$2 ? pred__50182.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50183) : pred__50182.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50183)))){
return (new shadow.dom.Size(self__.w,G__50157,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__50157),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__50157){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50157,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50161){
var extmap__4419__auto__ = (function (){var G__50199 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50161,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50161)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50199);
} else {
return G__50199;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50161),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50161),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__50954 = (i + (1));
var G__50955 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50954;
ret = G__50955;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50224){
var vec__50225 = p__50224;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50225,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50235 = arguments.length;
switch (G__50235) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50971 = ps;
var G__50972 = (i + (1));
el__$1 = G__50971;
i = G__50972;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50259 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50259,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50259,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50259,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50263_50987 = cljs.core.seq(props);
var chunk__50264_50988 = null;
var count__50265_50989 = (0);
var i__50266_50990 = (0);
while(true){
if((i__50266_50990 < count__50265_50989)){
var vec__50275_50991 = chunk__50264_50988.cljs$core$IIndexed$_nth$arity$2(null,i__50266_50990);
var k_50992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50275_50991,(0),null);
var v_50993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50275_50991,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50992);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50992),v_50993);


var G__50994 = seq__50263_50987;
var G__50995 = chunk__50264_50988;
var G__50996 = count__50265_50989;
var G__50997 = (i__50266_50990 + (1));
seq__50263_50987 = G__50994;
chunk__50264_50988 = G__50995;
count__50265_50989 = G__50996;
i__50266_50990 = G__50997;
continue;
} else {
var temp__5735__auto___50999 = cljs.core.seq(seq__50263_50987);
if(temp__5735__auto___50999){
var seq__50263_51000__$1 = temp__5735__auto___50999;
if(cljs.core.chunked_seq_QMARK_(seq__50263_51000__$1)){
var c__4556__auto___51001 = cljs.core.chunk_first(seq__50263_51000__$1);
var G__51002 = cljs.core.chunk_rest(seq__50263_51000__$1);
var G__51003 = c__4556__auto___51001;
var G__51004 = cljs.core.count(c__4556__auto___51001);
var G__51005 = (0);
seq__50263_50987 = G__51002;
chunk__50264_50988 = G__51003;
count__50265_50989 = G__51004;
i__50266_50990 = G__51005;
continue;
} else {
var vec__50282_51006 = cljs.core.first(seq__50263_51000__$1);
var k_51007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50282_51006,(0),null);
var v_51008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50282_51006,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_51007);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_51007),v_51008);


var G__51010 = cljs.core.next(seq__50263_51000__$1);
var G__51011 = null;
var G__51012 = (0);
var G__51013 = (0);
seq__50263_50987 = G__51010;
chunk__50264_50988 = G__51011;
count__50265_50989 = G__51012;
i__50266_50990 = G__51013;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50289 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50289,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50289,(1),null);
var seq__50292_51017 = cljs.core.seq(node_children);
var chunk__50294_51018 = null;
var count__50295_51019 = (0);
var i__50296_51020 = (0);
while(true){
if((i__50296_51020 < count__50295_51019)){
var child_struct_51021 = chunk__50294_51018.cljs$core$IIndexed$_nth$arity$2(null,i__50296_51020);
if((!((child_struct_51021 == null)))){
if(typeof child_struct_51021 === 'string'){
var text_51022 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51022),child_struct_51021].join(''));
} else {
var children_51023 = shadow.dom.svg_node(child_struct_51021);
if(cljs.core.seq_QMARK_(children_51023)){
var seq__50325_51029 = cljs.core.seq(children_51023);
var chunk__50327_51030 = null;
var count__50328_51031 = (0);
var i__50329_51032 = (0);
while(true){
if((i__50329_51032 < count__50328_51031)){
var child_51034 = chunk__50327_51030.cljs$core$IIndexed$_nth$arity$2(null,i__50329_51032);
if(cljs.core.truth_(child_51034)){
node.appendChild(child_51034);


var G__51036 = seq__50325_51029;
var G__51037 = chunk__50327_51030;
var G__51038 = count__50328_51031;
var G__51039 = (i__50329_51032 + (1));
seq__50325_51029 = G__51036;
chunk__50327_51030 = G__51037;
count__50328_51031 = G__51038;
i__50329_51032 = G__51039;
continue;
} else {
var G__51040 = seq__50325_51029;
var G__51041 = chunk__50327_51030;
var G__51042 = count__50328_51031;
var G__51043 = (i__50329_51032 + (1));
seq__50325_51029 = G__51040;
chunk__50327_51030 = G__51041;
count__50328_51031 = G__51042;
i__50329_51032 = G__51043;
continue;
}
} else {
var temp__5735__auto___51044 = cljs.core.seq(seq__50325_51029);
if(temp__5735__auto___51044){
var seq__50325_51045__$1 = temp__5735__auto___51044;
if(cljs.core.chunked_seq_QMARK_(seq__50325_51045__$1)){
var c__4556__auto___51047 = cljs.core.chunk_first(seq__50325_51045__$1);
var G__51048 = cljs.core.chunk_rest(seq__50325_51045__$1);
var G__51049 = c__4556__auto___51047;
var G__51050 = cljs.core.count(c__4556__auto___51047);
var G__51051 = (0);
seq__50325_51029 = G__51048;
chunk__50327_51030 = G__51049;
count__50328_51031 = G__51050;
i__50329_51032 = G__51051;
continue;
} else {
var child_51053 = cljs.core.first(seq__50325_51045__$1);
if(cljs.core.truth_(child_51053)){
node.appendChild(child_51053);


var G__51054 = cljs.core.next(seq__50325_51045__$1);
var G__51055 = null;
var G__51056 = (0);
var G__51057 = (0);
seq__50325_51029 = G__51054;
chunk__50327_51030 = G__51055;
count__50328_51031 = G__51056;
i__50329_51032 = G__51057;
continue;
} else {
var G__51060 = cljs.core.next(seq__50325_51045__$1);
var G__51061 = null;
var G__51062 = (0);
var G__51063 = (0);
seq__50325_51029 = G__51060;
chunk__50327_51030 = G__51061;
count__50328_51031 = G__51062;
i__50329_51032 = G__51063;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51023);
}
}


var G__51065 = seq__50292_51017;
var G__51066 = chunk__50294_51018;
var G__51067 = count__50295_51019;
var G__51068 = (i__50296_51020 + (1));
seq__50292_51017 = G__51065;
chunk__50294_51018 = G__51066;
count__50295_51019 = G__51067;
i__50296_51020 = G__51068;
continue;
} else {
var G__51071 = seq__50292_51017;
var G__51072 = chunk__50294_51018;
var G__51073 = count__50295_51019;
var G__51074 = (i__50296_51020 + (1));
seq__50292_51017 = G__51071;
chunk__50294_51018 = G__51072;
count__50295_51019 = G__51073;
i__50296_51020 = G__51074;
continue;
}
} else {
var temp__5735__auto___51076 = cljs.core.seq(seq__50292_51017);
if(temp__5735__auto___51076){
var seq__50292_51077__$1 = temp__5735__auto___51076;
if(cljs.core.chunked_seq_QMARK_(seq__50292_51077__$1)){
var c__4556__auto___51078 = cljs.core.chunk_first(seq__50292_51077__$1);
var G__51079 = cljs.core.chunk_rest(seq__50292_51077__$1);
var G__51080 = c__4556__auto___51078;
var G__51081 = cljs.core.count(c__4556__auto___51078);
var G__51082 = (0);
seq__50292_51017 = G__51079;
chunk__50294_51018 = G__51080;
count__50295_51019 = G__51081;
i__50296_51020 = G__51082;
continue;
} else {
var child_struct_51083 = cljs.core.first(seq__50292_51077__$1);
if((!((child_struct_51083 == null)))){
if(typeof child_struct_51083 === 'string'){
var text_51084 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_51084),child_struct_51083].join(''));
} else {
var children_51087 = shadow.dom.svg_node(child_struct_51083);
if(cljs.core.seq_QMARK_(children_51087)){
var seq__50341_51088 = cljs.core.seq(children_51087);
var chunk__50343_51089 = null;
var count__50344_51090 = (0);
var i__50345_51091 = (0);
while(true){
if((i__50345_51091 < count__50344_51090)){
var child_51092 = chunk__50343_51089.cljs$core$IIndexed$_nth$arity$2(null,i__50345_51091);
if(cljs.core.truth_(child_51092)){
node.appendChild(child_51092);


var G__51093 = seq__50341_51088;
var G__51094 = chunk__50343_51089;
var G__51095 = count__50344_51090;
var G__51096 = (i__50345_51091 + (1));
seq__50341_51088 = G__51093;
chunk__50343_51089 = G__51094;
count__50344_51090 = G__51095;
i__50345_51091 = G__51096;
continue;
} else {
var G__51098 = seq__50341_51088;
var G__51099 = chunk__50343_51089;
var G__51100 = count__50344_51090;
var G__51101 = (i__50345_51091 + (1));
seq__50341_51088 = G__51098;
chunk__50343_51089 = G__51099;
count__50344_51090 = G__51100;
i__50345_51091 = G__51101;
continue;
}
} else {
var temp__5735__auto___51103__$1 = cljs.core.seq(seq__50341_51088);
if(temp__5735__auto___51103__$1){
var seq__50341_51105__$1 = temp__5735__auto___51103__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50341_51105__$1)){
var c__4556__auto___51107 = cljs.core.chunk_first(seq__50341_51105__$1);
var G__51109 = cljs.core.chunk_rest(seq__50341_51105__$1);
var G__51110 = c__4556__auto___51107;
var G__51111 = cljs.core.count(c__4556__auto___51107);
var G__51112 = (0);
seq__50341_51088 = G__51109;
chunk__50343_51089 = G__51110;
count__50344_51090 = G__51111;
i__50345_51091 = G__51112;
continue;
} else {
var child_51113 = cljs.core.first(seq__50341_51105__$1);
if(cljs.core.truth_(child_51113)){
node.appendChild(child_51113);


var G__51114 = cljs.core.next(seq__50341_51105__$1);
var G__51115 = null;
var G__51116 = (0);
var G__51117 = (0);
seq__50341_51088 = G__51114;
chunk__50343_51089 = G__51115;
count__50344_51090 = G__51116;
i__50345_51091 = G__51117;
continue;
} else {
var G__51118 = cljs.core.next(seq__50341_51105__$1);
var G__51119 = null;
var G__51120 = (0);
var G__51121 = (0);
seq__50341_51088 = G__51118;
chunk__50343_51089 = G__51119;
count__50344_51090 = G__51120;
i__50345_51091 = G__51121;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_51087);
}
}


var G__51122 = cljs.core.next(seq__50292_51077__$1);
var G__51123 = null;
var G__51124 = (0);
var G__51125 = (0);
seq__50292_51017 = G__51122;
chunk__50294_51018 = G__51123;
count__50295_51019 = G__51124;
i__50296_51020 = G__51125;
continue;
} else {
var G__51126 = cljs.core.next(seq__50292_51077__$1);
var G__51127 = null;
var G__51128 = (0);
var G__51129 = (0);
seq__50292_51017 = G__51126;
chunk__50294_51018 = G__51127;
count__50295_51019 = G__51128;
i__50296_51020 = G__51129;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___51134 = arguments.length;
var i__4737__auto___51135 = (0);
while(true){
if((i__4737__auto___51135 < len__4736__auto___51134)){
args__4742__auto__.push((arguments[i__4737__auto___51135]));

var G__51136 = (i__4737__auto___51135 + (1));
i__4737__auto___51135 = G__51136;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50355){
var G__50356 = cljs.core.first(seq50355);
var seq50355__$1 = cljs.core.next(seq50355);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50356,seq50355__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50367 = arguments.length;
switch (G__50367) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__46776__auto___51148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46777__auto__ = (function (){var switch__46371__auto__ = (function (state_50377){
var state_val_50378 = (state_50377[(1)]);
if((state_val_50378 === (1))){
var state_50377__$1 = state_50377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50377__$1,(2),once_or_cleanup);
} else {
if((state_val_50378 === (2))){
var inst_50374 = (state_50377[(2)]);
var inst_50375 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50377__$1 = (function (){var statearr_50380 = state_50377;
(statearr_50380[(7)] = inst_50374);

return statearr_50380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50377__$1,inst_50375);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46372__auto__ = null;
var shadow$dom$state_machine__46372__auto____0 = (function (){
var statearr_50381 = [null,null,null,null,null,null,null,null];
(statearr_50381[(0)] = shadow$dom$state_machine__46372__auto__);

(statearr_50381[(1)] = (1));

return statearr_50381;
});
var shadow$dom$state_machine__46372__auto____1 = (function (state_50377){
while(true){
var ret_value__46373__auto__ = (function (){try{while(true){
var result__46374__auto__ = switch__46371__auto__(state_50377);
if(cljs.core.keyword_identical_QMARK_(result__46374__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46374__auto__;
}
break;
}
}catch (e50385){var ex__46375__auto__ = e50385;
var statearr_50386_51152 = state_50377;
(statearr_50386_51152[(2)] = ex__46375__auto__);


if(cljs.core.seq((state_50377[(4)]))){
var statearr_50388_51157 = state_50377;
(statearr_50388_51157[(1)] = cljs.core.first((state_50377[(4)])));

} else {
throw ex__46375__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46373__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51160 = state_50377;
state_50377 = G__51160;
continue;
} else {
return ret_value__46373__auto__;
}
break;
}
});
shadow$dom$state_machine__46372__auto__ = function(state_50377){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46372__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46372__auto____1.call(this,state_50377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46372__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46372__auto____0;
shadow$dom$state_machine__46372__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46372__auto____1;
return shadow$dom$state_machine__46372__auto__;
})()
})();
var state__46778__auto__ = (function (){var statearr_50396 = f__46777__auto__();
(statearr_50396[(6)] = c__46776__auto___51148);

return statearr_50396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46778__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
