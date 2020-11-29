
shadow.cljs.devtools.client.env.module_loaded('app');

try { browniepoints.core.init(); } catch (e) { console.error("An error occurred when calling (browniepoints.core/init)"); throw(e); }