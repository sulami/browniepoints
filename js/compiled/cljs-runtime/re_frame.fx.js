goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52519 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52520 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52520);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___52730 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___52730)){
var new_db_52733 = temp__5735__auto___52730;
var fexpr__52531_52734 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52531_52734.cljs$core$IFn$_invoke$arity$1 ? fexpr__52531_52734.cljs$core$IFn$_invoke$arity$1(new_db_52733) : fexpr__52531_52734.call(null,new_db_52733));
} else {
}

var seq__52537 = cljs.core.seq(effects_without_db);
var chunk__52538 = null;
var count__52539 = (0);
var i__52540 = (0);
while(true){
if((i__52540 < count__52539)){
var vec__52563 = chunk__52538.cljs$core$IIndexed$_nth$arity$2(null,i__52540);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52563,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52563,(1),null);
var temp__5733__auto___52739 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52739)){
var effect_fn_52746 = temp__5733__auto___52739;
(effect_fn_52746.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52746.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52746.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52747 = seq__52537;
var G__52748 = chunk__52538;
var G__52749 = count__52539;
var G__52750 = (i__52540 + (1));
seq__52537 = G__52747;
chunk__52538 = G__52748;
count__52539 = G__52749;
i__52540 = G__52750;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52537);
if(temp__5735__auto__){
var seq__52537__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52537__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52537__$1);
var G__52753 = cljs.core.chunk_rest(seq__52537__$1);
var G__52754 = c__4556__auto__;
var G__52755 = cljs.core.count(c__4556__auto__);
var G__52756 = (0);
seq__52537 = G__52753;
chunk__52538 = G__52754;
count__52539 = G__52755;
i__52540 = G__52756;
continue;
} else {
var vec__52575 = cljs.core.first(seq__52537__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52575,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52575,(1),null);
var temp__5733__auto___52757 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52757)){
var effect_fn_52758 = temp__5733__auto___52757;
(effect_fn_52758.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52758.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52758.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52759 = cljs.core.next(seq__52537__$1);
var G__52760 = null;
var G__52761 = (0);
var G__52762 = (0);
seq__52537 = G__52759;
chunk__52538 = G__52760;
count__52539 = G__52761;
i__52540 = G__52762;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__51870__auto___52763 = re_frame.interop.now();
var duration__51871__auto___52764 = (end__51870__auto___52763 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__51871__auto___52764,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__51870__auto___52763);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52519);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___52767 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___52767)){
var new_db_52768 = temp__5735__auto___52767;
var fexpr__52580_52769 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__52580_52769.cljs$core$IFn$_invoke$arity$1 ? fexpr__52580_52769.cljs$core$IFn$_invoke$arity$1(new_db_52768) : fexpr__52580_52769.call(null,new_db_52768));
} else {
}

var seq__52581 = cljs.core.seq(effects_without_db);
var chunk__52582 = null;
var count__52583 = (0);
var i__52584 = (0);
while(true){
if((i__52584 < count__52583)){
var vec__52609 = chunk__52582.cljs$core$IIndexed$_nth$arity$2(null,i__52584);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52609,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52609,(1),null);
var temp__5733__auto___52770 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52770)){
var effect_fn_52771 = temp__5733__auto___52770;
(effect_fn_52771.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52771.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52771.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52772 = seq__52581;
var G__52773 = chunk__52582;
var G__52774 = count__52583;
var G__52775 = (i__52584 + (1));
seq__52581 = G__52772;
chunk__52582 = G__52773;
count__52583 = G__52774;
i__52584 = G__52775;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52581);
if(temp__5735__auto__){
var seq__52581__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52581__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52581__$1);
var G__52776 = cljs.core.chunk_rest(seq__52581__$1);
var G__52777 = c__4556__auto__;
var G__52778 = cljs.core.count(c__4556__auto__);
var G__52779 = (0);
seq__52581 = G__52776;
chunk__52582 = G__52777;
count__52583 = G__52778;
i__52584 = G__52779;
continue;
} else {
var vec__52618 = cljs.core.first(seq__52581__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52618,(1),null);
var temp__5733__auto___52782 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52782)){
var effect_fn_52783 = temp__5733__auto___52782;
(effect_fn_52783.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52783.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52783.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52784 = cljs.core.next(seq__52581__$1);
var G__52785 = null;
var G__52786 = (0);
var G__52787 = (0);
seq__52581 = G__52784;
chunk__52582 = G__52785;
count__52583 = G__52786;
i__52584 = G__52787;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__52625){
var map__52626 = p__52625;
var map__52626__$1 = (((((!((map__52626 == null))))?(((((map__52626.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52626.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52626):map__52626);
var effect = map__52626__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52626__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52626__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__52631 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52632 = null;
var count__52633 = (0);
var i__52634 = (0);
while(true){
if((i__52634 < count__52633)){
var effect = chunk__52632.cljs$core$IIndexed$_nth$arity$2(null,i__52634);
re_frame.fx.dispatch_later(effect);


var G__52796 = seq__52631;
var G__52797 = chunk__52632;
var G__52798 = count__52633;
var G__52799 = (i__52634 + (1));
seq__52631 = G__52796;
chunk__52632 = G__52797;
count__52633 = G__52798;
i__52634 = G__52799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52631);
if(temp__5735__auto__){
var seq__52631__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52631__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52631__$1);
var G__52802 = cljs.core.chunk_rest(seq__52631__$1);
var G__52803 = c__4556__auto__;
var G__52804 = cljs.core.count(c__4556__auto__);
var G__52805 = (0);
seq__52631 = G__52802;
chunk__52632 = G__52803;
count__52633 = G__52804;
i__52634 = G__52805;
continue;
} else {
var effect = cljs.core.first(seq__52631__$1);
re_frame.fx.dispatch_later(effect);


var G__52807 = cljs.core.next(seq__52631__$1);
var G__52808 = null;
var G__52809 = (0);
var G__52810 = (0);
seq__52631 = G__52807;
chunk__52632 = G__52808;
count__52633 = G__52809;
i__52634 = G__52810;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__52646 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__52647 = null;
var count__52648 = (0);
var i__52649 = (0);
while(true){
if((i__52649 < count__52648)){
var vec__52668 = chunk__52647.cljs$core$IIndexed$_nth$arity$2(null,i__52649);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52668,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52668,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___52818 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52818)){
var effect_fn_52820 = temp__5733__auto___52818;
(effect_fn_52820.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52820.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52820.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52821 = seq__52646;
var G__52822 = chunk__52647;
var G__52823 = count__52648;
var G__52824 = (i__52649 + (1));
seq__52646 = G__52821;
chunk__52647 = G__52822;
count__52648 = G__52823;
i__52649 = G__52824;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52646);
if(temp__5735__auto__){
var seq__52646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52646__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52646__$1);
var G__52825 = cljs.core.chunk_rest(seq__52646__$1);
var G__52826 = c__4556__auto__;
var G__52827 = cljs.core.count(c__4556__auto__);
var G__52828 = (0);
seq__52646 = G__52825;
chunk__52647 = G__52826;
count__52648 = G__52827;
i__52649 = G__52828;
continue;
} else {
var vec__52676 = cljs.core.first(seq__52646__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52676,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52676,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___52831 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52831)){
var effect_fn_52833 = temp__5733__auto___52831;
(effect_fn_52833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__52836 = cljs.core.next(seq__52646__$1);
var G__52837 = null;
var G__52838 = (0);
var G__52839 = (0);
seq__52646 = G__52836;
chunk__52647 = G__52837;
count__52648 = G__52838;
i__52649 = G__52839;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52689 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52690 = null;
var count__52691 = (0);
var i__52692 = (0);
while(true){
if((i__52692 < count__52691)){
var event = chunk__52690.cljs$core$IIndexed$_nth$arity$2(null,i__52692);
re_frame.router.dispatch(event);


var G__52850 = seq__52689;
var G__52851 = chunk__52690;
var G__52852 = count__52691;
var G__52853 = (i__52692 + (1));
seq__52689 = G__52850;
chunk__52690 = G__52851;
count__52691 = G__52852;
i__52692 = G__52853;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52689);
if(temp__5735__auto__){
var seq__52689__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52689__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52689__$1);
var G__52857 = cljs.core.chunk_rest(seq__52689__$1);
var G__52858 = c__4556__auto__;
var G__52859 = cljs.core.count(c__4556__auto__);
var G__52860 = (0);
seq__52689 = G__52857;
chunk__52690 = G__52858;
count__52691 = G__52859;
i__52692 = G__52860;
continue;
} else {
var event = cljs.core.first(seq__52689__$1);
re_frame.router.dispatch(event);


var G__52863 = cljs.core.next(seq__52689__$1);
var G__52864 = null;
var G__52865 = (0);
var G__52866 = (0);
seq__52689 = G__52863;
chunk__52690 = G__52864;
count__52691 = G__52865;
i__52692 = G__52866;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52699 = cljs.core.seq(value);
var chunk__52701 = null;
var count__52702 = (0);
var i__52703 = (0);
while(true){
if((i__52703 < count__52702)){
var event = chunk__52701.cljs$core$IIndexed$_nth$arity$2(null,i__52703);
clear_event(event);


var G__52871 = seq__52699;
var G__52872 = chunk__52701;
var G__52873 = count__52702;
var G__52874 = (i__52703 + (1));
seq__52699 = G__52871;
chunk__52701 = G__52872;
count__52702 = G__52873;
i__52703 = G__52874;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52699);
if(temp__5735__auto__){
var seq__52699__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52699__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__52699__$1);
var G__52877 = cljs.core.chunk_rest(seq__52699__$1);
var G__52878 = c__4556__auto__;
var G__52879 = cljs.core.count(c__4556__auto__);
var G__52880 = (0);
seq__52699 = G__52877;
chunk__52701 = G__52878;
count__52702 = G__52879;
i__52703 = G__52880;
continue;
} else {
var event = cljs.core.first(seq__52699__$1);
clear_event(event);


var G__52882 = cljs.core.next(seq__52699__$1);
var G__52883 = null;
var G__52884 = (0);
var G__52885 = (0);
seq__52699 = G__52882;
chunk__52701 = G__52883;
count__52702 = G__52884;
i__52703 = G__52885;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
