/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dist = createCommonjsModule(function (module, exports) {
function t(e,n){if(e===n)return !0;if("object"!=typeof e||null===e||"object"!=typeof n||null===n)return !1;const r=/Function|RegExp|Date|Object|Array/,o=Object.prototype.toString.call(e).slice(8,-1),s=Object.prototype.toString.call(n).slice(8,-1);if("Object"!==o&&"Array"!==o&&"Object"!==s&&"Object"!==s&&r.exec(o)[0]===r.exec(s)[0]&&o===s)return !0;if(Object.keys(e).length!==Object.keys(n).length)return !1;for(let r of Object.keys(e)){const o=t(e[r],n[r]);if(!o)return o}return !0}function e(t){if(!t||"object"!=typeof t)return t;if(/Function|RegExp|Date/.test(Object.prototype.toString.call(t)))return t;const n="Array"===Object.prototype.toString.call(t)?[]:{};for(let r in t)n[r]="object"==typeof t[r]?e(t[r]):t[r];return n}const n={subscribeList:{},pubAndNoSub:{},subscribe(t,e){this.pubAndNoSub[t]&&(e(this.pubAndNoSub[t]),Reflect.deleteProperty(this.pubAndNoSub,t)),this.subscribeList[t]?.push(e)||(this.subscribeList[t]=[e]);},publish(t,e){const n=this.subscribeList[t];n&&0!==n.length?n.forEach((t=>t(e))):this.pubAndNoSub[t]=e;},remove(t,e){const n=this.subscribeList[t];n&&0!==n.length&&(e?n.forEach(((n,r)=>{n===e&&this.subscribeList[t].splice(r,1);})):this.subscribeList[t]=[]);}};exports.debounce=function(t,e=1500,n=!0){let r;return function(...o){r&&clearTimeout(r),n?(r||t.apply(this,o),r=setTimeout((()=>r=null),e)):r=setTimeout((()=>t.apply(this,o)),e);}},exports.deepClone=e,exports.get=function(t,e){return e.replace(/\[(\w+)\]/g,".$1").replace(/\["(\w+)"\]/g,".$1").replace(/\['(\w+)'\]/g,".$1").split(".").reduce(((t,e)=>t?.[e]),t)},exports.getSingle=function(t){let e;return function(...n){return e||(e=t.apply(this,n))}},exports.hasChanged=function(e,n){return !t(e,n)},exports.installEventCenter=function(t){const r=e(n);for(let e in n)t[e]=r[e];return t},exports.isObject=function(t){return null!==t&&"object"==typeof t},exports.isSameDeep=t,exports.isSameShallow=function(t,e){if(t===e)return !0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return !1;if(Object.keys(t).length!==Object.keys(e).length)return !1;for(let n of Object.keys(t))if(t[n]!==e[n])return !1;return !0},exports.parseAreaListData=function(t){const e=[],{province_list:n,city_list:r,county_list:o}=t;for(const t in n){const s=t.substr(0,2),i={};i.value=n[t],i.label=n[t];for(const t in r){const e=t.substr(0,4),n={};if(e.includes(s)){n.value=r[t],n.label=r[t];for(const t in o){const r={};t.includes(e)&&(r.value=o[t],r.label=o[t],n.children.push(r));}i.children.push(n);}}e.push(i);}return e},exports.shallowClone=function(t){if(!t||"object"!=typeof t)return t;if(/Function|RegExp|Date/.test(Object.prototype.toString.call(t)))return t;const e="Array"===Object.prototype.toString.call(t)?[]:{};for(let n in t)e[n]=t[n];return e},exports.throttle=function(t,e=1500,n="timestamp"){if("timestamp"===n){let n=0;return function(...r){const o=Date.now();o-n>e&&(t.apply(this,r),n=o);}}{let n;return function(...r){n||(n=setTimeout((()=>{t.apply(this,r),n=null;}),e));}}};
});
dist.debounce;
var dist_2 = dist.deepClone;
dist.get;
dist.getSingle;
var dist_5 = dist.hasChanged;
dist.installEventCenter;
var dist_7 = dist.isObject;
var dist_8 = dist.isSameDeep;
dist.isSameShallow;
dist.parseAreaListData;
dist.shallowClone;
dist.throttle;

const setTip = (function () {
    setTimeout(() => {
        function tip(text) {
            console.error(`必须在 app.js 文件 调用 ${text}()，参考：https://www.npmjs.com/package/@savage181855/mini-store`);
        }
        if (!types.isProxyPage)
            tip("proxyPage");
        if (!types.isProxyComponent)
            tip("proxyComponent");
        if (!types.isProxyApp)
            tip("proxyApp");
    });
    const types = {
        isProxyPage: false,
        isProxyComponent: false,
        isProxyApp: false,
    };
    return function (text) {
        types[text] = true;
    };
})();

function getCurrentPagePath() {
    var _a;
    const pages = getCurrentPages();
    return ((_a = pages[pages.length - 1]) === null || _a === void 0 ? void 0 : _a.route) || '';
}

const depStores = {};
const Dep = [];
// not pure function
function updateStoreState() {
    const path = getCurrentPagePath();
    if (!path)
        return;
    const stores = depStores[path];
    if (!stores)
        return;
    stores.forEach((s) => {
        const { mapState, instance, store, watch, mapComputed } = s;
        const stateArr = [];
        if (mapState)
            stateArr.push(...mapState);
        if (mapComputed)
            stateArr.push(...mapComputed);
        const data = {};
        stateArr === null || stateArr === void 0 ? void 0 : stateArr.forEach((key) => {
            if (!dist_8(instance.data[key], store[key])) {
                data[key] = dist_2(store[key]);
            }
        });
        if (JSON.stringify(data) !== "{}")
            instance.setData(data);
        if (watch) {
            Object.keys(watch).forEach((key) => {
                if (!dist_8(instance.watchValue[key], store[key])) {
                    const newValue = dist_2(store[key]);
                    watch[key](instance.watchValue[key], newValue);
                    instance.watchValue[key] = newValue;
                }
            });
        }
    });
}
function clearStoreDep() {
    const path = getCurrentPagePath();
    depStores[path] = [];
}
// not pure function
function removeStoreDep(instance) {
    const path = getCurrentPagePath();
    depStores[path] = depStores[path].filter((item) => item.instance !== instance);
}
// not pure function
function createReactive(target) {
    const deps = new Map();
    const obj = new Proxy(target, {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver);
            if (Dep.length > 0) {
                if (!deps.get(key))
                    deps.set(key, new Set());
                Dep.forEach((item) => {
                    var _a;
                    (_a = deps.get(key)) === null || _a === void 0 ? void 0 : _a.add(item);
                });
            }
            if (dist_7(res))
                return createReactive(res);
            return res;
        },
        set(target, key, value, receiver) {
            var _a;
            const oldV = dist_2(target[key]);
            const res = Reflect.set(target, key, value, receiver);
            if (dist_5(oldV, value)) {
                (_a = deps.get(key)) === null || _a === void 0 ? void 0 : _a.forEach((item) => item(oldV, value));
            }
            updateStoreState();
            return res;
        },
    });
    return obj;
}
// not pure function
function setupActions(plainStore, proxyStore) {
    for (let k in plainStore) {
        if (typeof plainStore[k] === "function") {
            plainStore[k] = plainStore[k].bind(proxyStore);
        }
    }
}
// not pure function
function setupPatchOfStore(plainStore, proxyStore) {
    plainStore.patch = function (val) {
        if (typeof val === "object") {
            for (let k in val) {
                proxyStore[k] = val[k];
            }
        }
        if (typeof val === "function") {
            val(proxyStore);
        }
    };
}
// not pure function
function setupComputed(fns, proxyStore) {
    if (fns) {
        for (let k in fns) {
            fns[k] = fns[k].bind(proxyStore, proxyStore);
            Dep.push(() => (proxyStore[k] = fns[k]()));
            proxyStore[k] = fns[k]();
            Dep.pop();
        }
    }
}
function defineStore(options) {
    const state = options.state;
    const computed = options.computed;
    const plainStore = Object.assign(Object.assign(Object.assign({}, state), options.actions), computed);
    const store = createReactive(plainStore);
    setupActions(plainStore, store);
    setupPatchOfStore(plainStore, store);
    setupComputed(computed, store);
    return function useStore(instance, options) {
        instance[options.storeKey] = store;
        if (instance.type === "app")
            return;
        const o = options;
        const stateKeys = Object.keys(state);
        if (o.mapState) {
            o.mapState.forEach((key) => {
                if (!stateKeys.includes(key)) {
                    console.error(`msg: mapState "${key}" not in ${o.storeKey};\n\n` +
                        `info: filePath: ${instance.is};`);
                    return;
                }
            });
        }
        if (o.watch) {
            // use to compare watch whether to execute
            const watchValue = {};
            Object.keys(o.watch).forEach((key) => {
                if (!stateKeys.includes(key)) {
                    console.error(`msg: watch "${key}" not in ${o.storeKey};\n\n` +
                        `info: filePath: ${instance.is};`);
                    return;
                }
                watchValue[key] = dist_2(store[key]);
            });
            instance.watchValue = watchValue;
        }
        if (o.mapComputed) {
            // use to compare computed function whether to execute
            const computedKeys = Object.keys(computed);
            o.mapComputed.forEach((key) => {
                if (!computedKeys.includes(key)) {
                    console.error(`msg: mapComputed "${key}" not in ${o.storeKey};\n\n` +
                        `info: filePath: ${instance.is};`);
                    return;
                }
            });
        }
        const route = instance.route;
        depStores[route] = depStores[route] || [];
        depStores[route].push(Object.assign(Object.assign({}, o), { instance: instance, store }));
    };
}

function callUseStoreRef(instance, stores) {
    stores === null || stores === void 0 ? void 0 : stores.forEach((s) => {
        const { useStoreRef } = s, rest = __rest(s, ["useStoreRef"]);
        useStoreRef(instance, rest);
    });
}
function proxyApp() {
    setTip("isProxyApp");
    const originApp = App;
    App = function (options) {
        const rest = __rest(options, ["stores"]);
        const newOptions = Object.assign(Object.assign({}, rest), { onLaunch(o) {
                var _a;
                this.type = "app";
                const { stores } = options;
                callUseStoreRef(this, stores);
                (_a = options === null || options === void 0 ? void 0 : options.onLaunch) === null || _a === void 0 ? void 0 : _a.call(this, o);
            } });
        return originApp(newOptions);
    };
}
function proxyPage(globalOptions) {
    setTip("isProxyPage");
    const OriginPage = Page;
    Page = function (options) {
        const rest = __rest(options, ["stores"]);
        let newOptions = Object.assign(Object.assign(Object.assign({}, globalOptions), rest), { onLoad(o) {
                var _a, _b;
                const { stores } = options;
                callUseStoreRef(this, stores);
                (_a = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.onLoad) === null || _a === void 0 ? void 0 : _a.call(this, o);
                (_b = options === null || options === void 0 ? void 0 : options.onLoad) === null || _b === void 0 ? void 0 : _b.call(this, o);
            },
            onShow() {
                var _a, _b;
                updateStoreState();
                (_a = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.onShow) === null || _a === void 0 ? void 0 : _a.call(this);
                (_b = options === null || options === void 0 ? void 0 : options.onShow) === null || _b === void 0 ? void 0 : _b.call(this);
            },
            onUnload() {
                var _a, _b;
                clearStoreDep();
                (_a = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.onUnload) === null || _a === void 0 ? void 0 : _a.call(this);
                (_b = options === null || options === void 0 ? void 0 : options.onUnload) === null || _b === void 0 ? void 0 : _b.call(this);
            } });
        const hooks = [
            "onReady",
            "onHide",
            "onPullDownRefresh",
            "onReachBottom",
            "onPageScroll",
            "onResize",
            "onTabItemTap",
        ];
        newOptions = mixinHooks(hooks, newOptions, globalOptions, options);
        return OriginPage(newOptions);
    };
}
function proxyComponent(globalOptions) {
    setTip("isProxyComponent");
    const OriginComponent = Component;
    Component = function (options) {
        const rest = __rest(options, ["stores"]);
        let newOptions = Object.assign(Object.assign(Object.assign({}, globalOptions), rest), { attached() {
                var _a, _b;
                this.route = getCurrentPagePath();
                const { stores } = options;
                callUseStoreRef(this, stores);
                updateStoreState();
                (_a = options === null || options === void 0 ? void 0 : options.attached) === null || _a === void 0 ? void 0 : _a.call(this);
                (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.attached) === null || _b === void 0 ? void 0 : _b.call(this);
            },
            detached() {
                var _a, _b;
                removeStoreDep(this);
                (_a = options === null || options === void 0 ? void 0 : options.detached) === null || _a === void 0 ? void 0 : _a.call(this);
                (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.detached) === null || _b === void 0 ? void 0 : _b.call(this);
            }, lifetimes: {
                attached() {
                    var _a, _b, _c, _d;
                    this.route = getCurrentPagePath();
                    const { stores } = options;
                    callUseStoreRef(this, stores);
                    updateStoreState();
                    (_b = (_a = options === null || options === void 0 ? void 0 : options.lifetimes) === null || _a === void 0 ? void 0 : _a.attached) === null || _b === void 0 ? void 0 : _b.call(this);
                    (_d = (_c = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.lifetimes) === null || _c === void 0 ? void 0 : _c.attached) === null || _d === void 0 ? void 0 : _d.call(this);
                },
                detached() {
                    var _a, _b, _c, _d;
                    removeStoreDep(this);
                    (_b = (_a = options === null || options === void 0 ? void 0 : options.lifetimes) === null || _a === void 0 ? void 0 : _a.detached) === null || _b === void 0 ? void 0 : _b.call(this);
                    (_d = (_c = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.lifetimes) === null || _c === void 0 ? void 0 : _c.detached) === null || _d === void 0 ? void 0 : _d.call(this);
                },
            } });
        const hooks = [
            "created",
            "ready",
            "moved",
            "error",
            "lifetimes.created",
            "lifetimes.ready",
            "lifetimes.moved",
            "lifetimes.error",
            "pageLifetimes.show",
            "pageLifetimes.hide",
            "pageLifetimes.resize",
        ];
        newOptions = mixinHooks(hooks, newOptions, globalOptions, options);
        return OriginComponent(newOptions);
    };
}
/** 全局混入hook */
function mixinHooks(hooks, newOptions, globalOptions, options) {
    const newO = dist_2(newOptions);
    hooks.forEach((name) => {
        var _a, _b;
        // 这里分割的原因是要注入 lifetimes.created 这种 hook
        const paths = name.split(".");
        const len = paths.length;
        const indexOne = paths[0];
        if (len === 1) {
            newO[indexOne] = function () {
                var _a, _b;
                (_a = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions[indexOne]) === null || _a === void 0 ? void 0 : _a.call(this, ...arguments);
                (_b = options === null || options === void 0 ? void 0 : options[indexOne]) === null || _b === void 0 ? void 0 : _b.call(this, ...arguments);
            };
        }
        else {
            const indexTwo = paths[1];
            // pageLifetimes 的生命周期会覆盖this上的生命周期
            if (((_a = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions[indexOne]) === null || _a === void 0 ? void 0 : _a[indexTwo]) ||
                ((_b = options === null || options === void 0 ? void 0 : options[indexOne]) === null || _b === void 0 ? void 0 : _b[indexTwo])) {
                newO[indexOne][indexTwo] = function () {
                    var _a, _b, _c, _d;
                    (_b = (_a = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions[indexOne]) === null || _a === void 0 ? void 0 : _a[indexTwo]) === null || _b === void 0 ? void 0 : _b.call(this, ...arguments);
                    (_d = (_c = options === null || options === void 0 ? void 0 : options[indexOne]) === null || _c === void 0 ? void 0 : _c[indexTwo]) === null || _d === void 0 ? void 0 : _d.call(this, ...arguments);
                };
            }
        }
    });
    return newO;
}

defineStore({
    state: {
        count: 0
    },
    actions: {
        add() {
            this.add;
        }
    }
});

export { clearStoreDep, defineStore, proxyApp, proxyComponent, proxyPage, removeStoreDep, updateStoreState };
