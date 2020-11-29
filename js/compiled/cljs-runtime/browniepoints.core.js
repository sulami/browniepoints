goog.provide('browniepoints.core');
browniepoints.core.dev_setup = (function browniepoints$core$dev_setup(){
if(browniepoints.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
browniepoints.core.mount_root = (function browniepoints$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [browniepoints.views.main_panel], null),root_el);
});
browniepoints.core.init = (function browniepoints$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("browniepoints.events","initialize-db","browniepoints.events/initialize-db",591757386)], null));

browniepoints.core.dev_setup();

return browniepoints.core.mount_root();
});

//# sourceMappingURL=browniepoints.core.js.map
