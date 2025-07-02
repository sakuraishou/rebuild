(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/directus.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$directus$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@directus/sdk/dist/index.js [app-client] (ecmascript)");
;
const directus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$directus$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDirectus"])(("TURBOPACK compile-time value", "http://directus:8055")).with((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$directus$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rest"])());
const __TURBOPACK__default__export__ = directus;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/(top)/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$directus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/directus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$directus$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@directus/sdk/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DeviceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DeviceContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
async function HomePage() {
    _s();
    // Directusから'brands'コレクションのデータを取得
    const brands = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$directus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].request((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$directus$2f$sdk$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readItems"])("brands"));
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DeviceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: "ブランド一覧"
            }, void 0, false, {
                fileName: "[project]/src/app/(top)/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: brand.name
                    }, brand.id, false, {
                        fileName: "[project]/src/app/(top)/page.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(top)/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "これは**モバイル**向けの表示です。"
            }, void 0, false, {
                fileName: "[project]/src/app/(top)/page.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "これは**PC**向けの表示です。"
            }, void 0, false, {
                fileName: "[project]/src/app/(top)/page.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(top)/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_s(HomePage, "On/MfDst2MZKhtJ8EIs7crlmOvs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DeviceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@directus/sdk/dist/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "acceptUserInvite": (()=>Vp),
    "aggregate": (()=>ts),
    "auth": (()=>N),
    "authenticateShare": (()=>kp),
    "authentication": (()=>ne),
    "clearCache": (()=>jp),
    "compareContentVersion": (()=>tu),
    "createCollection": (()=>dt),
    "createComment": (()=>ft),
    "createComments": (()=>lt),
    "createContentVersion": (()=>fr),
    "createContentVersions": (()=>lr),
    "createDashboard": (()=>Tt),
    "createDashboards": (()=>xt),
    "createDirectus": (()=>le),
    "createField": (()=>gt),
    "createFlow": (()=>jt),
    "createFlows": (()=>Pt),
    "createFolder": (()=>Ft),
    "createFolders": (()=>Et),
    "createItem": (()=>Ut),
    "createItems": (()=>vt),
    "createNotification": (()=>kt),
    "createNotifications": (()=>$t),
    "createOperation": (()=>Kt),
    "createOperations": (()=>Gt),
    "createPanel": (()=>Ht),
    "createPanels": (()=>_t),
    "createPermission": (()=>Mt),
    "createPermissions": (()=>Bt),
    "createPolicies": (()=>zt),
    "createPolicy": (()=>Xt),
    "createPreset": (()=>er),
    "createPresets": (()=>Zt),
    "createRelation": (()=>rr),
    "createRole": (()=>sr),
    "createRoles": (()=>ar),
    "createShare": (()=>nr),
    "createShares": (()=>ir),
    "createTranslation": (()=>ur),
    "createTranslations": (()=>pr),
    "createUser": (()=>dr),
    "createUsers": (()=>yr),
    "createWebhook": (()=>Tr),
    "createWebhooks": (()=>xr),
    "customEndpoint": (()=>Ju),
    "deleteCollection": (()=>_r),
    "deleteComment": (()=>oo),
    "deleteComments": (()=>ro),
    "deleteContentVersion": (()=>Ta),
    "deleteContentVersions": (()=>xa),
    "deleteDashboard": (()=>io),
    "deleteDashboards": (()=>mo),
    "deleteField": (()=>po),
    "deleteFile": (()=>So),
    "deleteFiles": (()=>yo),
    "deleteFlow": (()=>xo),
    "deleteFlows": (()=>Qo),
    "deleteFolder": (()=>Ro),
    "deleteFolders": (()=>go),
    "deleteItem": (()=>Po),
    "deleteItems": (()=>Oo),
    "deleteNotification": (()=>Fo),
    "deleteNotifications": (()=>Eo),
    "deleteOperation": (()=>vo),
    "deleteOperations": (()=>No),
    "deletePanel": (()=>ko),
    "deletePanels": (()=>$o),
    "deletePermission": (()=>Wo),
    "deletePermissions": (()=>Ko),
    "deletePolicies": (()=>Vo),
    "deletePolicy": (()=>Bo),
    "deletePreset": (()=>Xo),
    "deletePresets": (()=>zo),
    "deleteRelation": (()=>ea),
    "deleteRole": (()=>aa),
    "deleteRoles": (()=>oa),
    "deleteShare": (()=>na),
    "deleteShares": (()=>ia),
    "deleteTranslation": (()=>ha),
    "deleteTranslations": (()=>ua),
    "deleteUser": (()=>la),
    "deleteUsers": (()=>Sa),
    "deleteWebhook": (()=>Da),
    "deleteWebhooks": (()=>Ra),
    "disableTwoFactor": (()=>Xp),
    "enableTwoFactor": (()=>zp),
    "formatFields": (()=>U),
    "generateHash": (()=>Np),
    "generateTwoFactorSecret": (()=>qp),
    "generateUid": (()=>v),
    "getAuthEndpoint": (()=>F),
    "graphql": (()=>Te),
    "importFile": (()=>bt),
    "inviteShare": (()=>Lp),
    "inviteUser": (()=>Hp),
    "isDirectusError": (()=>gh),
    "login": (()=>qe),
    "logout": (()=>Xe),
    "memoryStorage": (()=>L),
    "messageCallback": (()=>w),
    "passwordRequest": (()=>Ze),
    "passwordReset": (()=>tt),
    "pong": (()=>K),
    "promoteContentVersion": (()=>ru),
    "queryToParams": (()=>J),
    "randomString": (()=>au),
    "readActivities": (()=>qa),
    "readActivity": (()=>za),
    "readAssetArrayBuffer": (()=>ms),
    "readAssetBlob": (()=>ss),
    "readAssetRaw": (()=>as),
    "readCollection": (()=>ps),
    "readCollections": (()=>cs),
    "readComment": (()=>ds),
    "readComments": (()=>ys),
    "readContentVersion": (()=>zm),
    "readContentVersions": (()=>qm),
    "readDashboard": (()=>Qs),
    "readDashboards": (()=>fs),
    "readExtensions": (()=>Ts),
    "readField": (()=>bs),
    "readFields": (()=>Rs),
    "readFieldsByCollection": (()=>Ds),
    "readFile": (()=>Is),
    "readFiles": (()=>js),
    "readFlow": (()=>ws),
    "readFlows": (()=>As),
    "readFolder": (()=>Js),
    "readFolders": (()=>Us),
    "readGraphqlSdl": (()=>Gi),
    "readItem": (()=>Gs),
    "readItemPermissions": (()=>am),
    "readItems": (()=>Ls),
    "readMe": (()=>Vm),
    "readNotification": (()=>Hs),
    "readNotifications": (()=>_s),
    "readOpenApiSpec": (()=>Bi),
    "readOperation": (()=>qs),
    "readOperations": (()=>Ms),
    "readPanel": (()=>Zs),
    "readPanels": (()=>Ys),
    "readPermission": (()=>om),
    "readPermissions": (()=>rm),
    "readPolicies": (()=>nm),
    "readPolicy": (()=>cm),
    "readPolicyGlobals": (()=>pm),
    "readPreset": (()=>dm),
    "readPresets": (()=>ym),
    "readProviders": (()=>ot),
    "readRelation": (()=>xm),
    "readRelationByCollection": (()=>Qm),
    "readRelations": (()=>fm),
    "readRevision": (()=>Rm),
    "readRevisions": (()=>gm),
    "readRole": (()=>Pm),
    "readRoles": (()=>Om),
    "readRolesMe": (()=>jm),
    "readSettings": (()=>Em),
    "readShare": (()=>Nm),
    "readShareInfo": (()=>Gp),
    "readShares": (()=>wm),
    "readSingleton": (()=>Jm),
    "readTranslation": (()=>Gm),
    "readTranslations": (()=>Lm),
    "readUser": (()=>Hm),
    "readUserPermissions": (()=>sm),
    "readUsers": (()=>_m),
    "readWebhook": (()=>ei),
    "readWebhooks": (()=>Zm),
    "realtime": (()=>ve),
    "refresh": (()=>st),
    "registerUser": (()=>Bp),
    "registerUserVerify": (()=>Mp),
    "rest": (()=>ju),
    "saveToContentVersion": (()=>eu),
    "schemaApply": (()=>Fi),
    "schemaDiff": (()=>wi),
    "schemaSnapshot": (()=>vi),
    "serverHealth": (()=>Wi),
    "serverInfo": (()=>Hi),
    "serverPing": (()=>qi),
    "sleep": (()=>Je),
    "staticToken": (()=>pe),
    "throwIfCoreCollection": (()=>Q),
    "throwIfEmpty": (()=>r),
    "triggerFlow": (()=>Ap),
    "updateCollection": (()=>an),
    "updateCollectionsBatch": (()=>sn),
    "updateComment": (()=>pn),
    "updateComments": (()=>cn),
    "updateContentVersion": (()=>Xc),
    "updateContentVersions": (()=>qc),
    "updateContentVersionsBatch": (()=>zc),
    "updateDashboard": (()=>Sn),
    "updateDashboards": (()=>yn),
    "updateDashboardsBatch": (()=>dn),
    "updateExtension": (()=>Qn),
    "updateField": (()=>Cn),
    "updateFile": (()=>On),
    "updateFiles": (()=>Dn),
    "updateFilesBatch": (()=>bn),
    "updateFlow": (()=>Fn),
    "updateFlows": (()=>In),
    "updateFlowsBatch": (()=>En),
    "updateFolder": (()=>Un),
    "updateFolders": (()=>Nn),
    "updateFoldersBatch": (()=>vn),
    "updateItem": (()=>Gn),
    "updateItems": (()=>kn),
    "updateItemsBatch": (()=>Ln),
    "updateMe": (()=>Vc),
    "updateNotification": (()=>Vn),
    "updateNotifications": (()=>_n),
    "updateNotificationsBatch": (()=>Hn),
    "updateOperation": (()=>Xn),
    "updateOperations": (()=>qn),
    "updateOperationsBatch": (()=>zn),
    "updatePanel": (()=>rc),
    "updatePanels": (()=>ec),
    "updatePanelsBatch": (()=>tc),
    "updatePermission": (()=>ic),
    "updatePermissions": (()=>sc),
    "updatePermissionsBatch": (()=>mc),
    "updatePolicies": (()=>pc),
    "updatePoliciesBatch": (()=>uc),
    "updatePolicy": (()=>hc),
    "updatePreset": (()=>fc),
    "updatePresets": (()=>Sc),
    "updatePresetsBatch": (()=>lc),
    "updateRelation": (()=>Tc),
    "updateRole": (()=>bc),
    "updateRoles": (()=>Rc),
    "updateRolesBatch": (()=>Dc),
    "updateSettings": (()=>Pc),
    "updateShare": (()=>Ac),
    "updateShares": (()=>Ec),
    "updateSharesBatch": (()=>Fc),
    "updateSingleton": (()=>vc),
    "updateTranslation": (()=>Lc),
    "updateTranslations": (()=>$c),
    "updateTranslationsBatch": (()=>kc),
    "updateUser": (()=>Hc),
    "updateUsers": (()=>Wc),
    "updateUsersBatch": (()=>_c),
    "updateWebhook": (()=>tp),
    "updateWebhooks": (()=>ep),
    "uploadFiles": (()=>Dt),
    "utilitySort": (()=>Wp),
    "utilsExport": (()=>Ep),
    "utilsImport": (()=>Jp),
    "verifyHash": (()=>vp),
    "withOptions": (()=>Eu),
    "withSearch": (()=>wu),
    "withToken": (()=>vu)
});
function F(e) {
    return e ? `/auth/login/${e}` : "/auth/login";
}
var A = "/", W = (e, t)=>(e.endsWith(A) && (e = e.slice(0, -1)), t.startsWith(A) || (t = A + t), e + t), R = (e, t, o)=>{
    let a = e.pathname === A ? t : W(e.pathname, t), s = new globalThis.URL(a, e);
    if (o) for (let [c, n] of Object.entries(J(o)))if (n && typeof n == "object" && !Array.isArray(n)) for (let [p, u] of Object.entries(n))s.searchParams.set(`${c}[${p}]`, String(u));
    else s.searchParams.set(c, n);
    return s;
};
function $(e) {
    return typeof e != "object" || !e ? !1 : "headers" in e && "ok" in e && "json" in e && typeof e.json == "function" && "text" in e && typeof e.json == "function";
}
async function k(e) {
    if (!(typeof e != "object" || !e)) {
        if ($(e)) {
            let t = e.headers.get("Content-Type")?.toLowerCase();
            if (t?.startsWith("application/json") || t?.startsWith("application/health+json")) {
                let o = await e.json();
                if (!e.ok || "errors" in o) throw o;
                return "data" in o ? o.data : o;
            }
            if (t?.startsWith("text/html") || t?.startsWith("text/plain")) {
                let o = await e.text();
                if (!e.ok) throw o;
                return o;
            }
            return e.status === 204 ? null : e;
        }
        if ("errors" in e) throw e;
        return "data" in e ? e.data : e;
    }
}
var D = async (e, t, o = globalThis.fetch)=>(t.headers = typeof t.headers == "object" && !Array.isArray(t.headers) ? t.headers : {}, o(e, t).then((a)=>k(a).catch((s)=>{
            let c = {
                errors: s && typeof s == "object" && "errors" in s ? s.errors : s,
                response: a
            };
            return s && typeof s == "object" && "data" in s && (c.data = s.data), Promise.reject(c);
        })));
var L = ()=>{
    let e = null;
    return {
        get: async ()=>e,
        set: async (t)=>{
            e = t;
        }
    };
};
var _ = {
    msRefreshBeforeExpires: 3e4,
    autoRefresh: !0
}, H = 2 ** 31 - 1, ne = (e = "cookie", t = {})=>(o)=>{
        let a = {
            ..._,
            ...t
        }, s = null, c = null, n = a.storage ?? L(), p = async ()=>n.set({
                access_token: null,
                refresh_token: null,
                expires: null,
                expires_at: null
            }), u = async ()=>{
            try {
                await s;
            } finally{
                s = null;
            }
        }, f = async ()=>{
            let d = await n.get();
            return s || !d?.expires_at || d.expires_at < new Date().getTime() + a.msRefreshBeforeExpires && I().catch((l)=>{}), u();
        }, b = async (d)=>{
            let l = d.expires ?? 0;
            d.expires_at = new Date().getTime() + l, await n.set(d), a.autoRefresh && l > a.msRefreshBeforeExpires && l < H && (c && clearTimeout(c), c = setTimeout(()=>{
                c = null, I().catch((x)=>{});
            }, l - a.msRefreshBeforeExpires));
        }, I = async (d = {})=>(s = (async ()=>{
                let x = await n.get();
                await p();
                let m = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                "credentials" in a && (m.credentials = a.credentials);
                let i = {
                    mode: d.mode ?? e
                };
                e === "json" && x?.refresh_token && (i.refresh_token = x.refresh_token), m.body = JSON.stringify(i);
                let h = R(o.url, "/auth/refresh");
                return D(h.toString(), m, o.globals.fetch).then((y)=>b(y).then(()=>y));
            })(), s);
        async function C(d, l = {}) {
            await p();
            let x = d;
            "otp" in l && (x.otp = l.otp), x.mode = l.mode ?? e;
            let m = F(l.provider), i = R(o.url, m), h = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(x)
            };
            "credentials" in a && (h.credentials = a.credentials);
            let y = await D(i.toString(), h, o.globals.fetch);
            return await b(y), y;
        }
        return {
            refresh: I,
            login: C,
            async logout (d = {}) {
                let l = await n.get(), x = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                "credentials" in a && (x.credentials = a.credentials);
                let m = {
                    mode: d.mode ?? e
                };
                e === "json" && l?.refresh_token && (m.refresh_token = l.refresh_token), x.body = JSON.stringify(m);
                let i = R(o.url, "/auth/logout");
                await D(i.toString(), x, o.globals.fetch), this.stopRefreshing(), await p();
            },
            stopRefreshing () {
                c && clearTimeout(c);
            },
            async getToken () {
                return await f().catch(()=>{}), (await n.get())?.access_token ?? null;
            },
            async setToken (d) {
                return n.set({
                    access_token: d,
                    refresh_token: null,
                    expires: null,
                    expires_at: null
                });
            }
        };
    };
var pe = (e)=>(t)=>{
        let o = e ?? null;
        return {
            async getToken () {
                return o;
            },
            async setToken (a) {
                o = a;
            }
        };
    };
var G = {
    fetch: globalThis.fetch,
    WebSocket: globalThis.WebSocket,
    URL: globalThis.URL,
    logger: globalThis.console
}, le = (e, t = {})=>{
    let o = t.globals ? {
        ...G,
        ...t.globals
    } : G;
    return {
        globals: o,
        url: new o.URL(e),
        with (a) {
            return {
                ...this,
                ...a(this)
            };
        }
    };
};
var V = {}, Te = (e = {})=>(t)=>{
        let o = {
            ...V,
            ...e
        };
        return {
            async query (a, s, c = "items") {
                let n = {
                    method: "POST",
                    body: JSON.stringify({
                        query: a,
                        variables: s
                    })
                };
                "credentials" in o && (n.credentials = o.credentials);
                let p = {};
                if ("getToken" in this) {
                    let b = await this.getToken();
                    b && (p.Authorization = `Bearer ${b}`);
                }
                "Content-Type" in p || (p["Content-Type"] = "application/json"), n.headers = p;
                let u = c === "items" ? "/graphql" : "/graphql/system", f = R(t.url, u);
                return await D(f.toString(), n, t.globals.fetch);
            }
        };
    };
function N(e) {
    return JSON.stringify({
        ...e,
        type: "auth"
    });
}
var K = ()=>JSON.stringify({
        type: "pong"
    });
function* v() {
    let e = 1;
    for(;;)yield String(e), e++;
}
var w = (e, t = 1e3)=>new Promise((o, a)=>{
        let s = (u)=>{
            try {
                let f = JSON.parse(u.data);
                typeof f == "object" && !Array.isArray(f) && f !== null ? (n(), o(f)) : (n(), c());
            } catch  {
                n(), o(u);
            }
        }, c = ()=>a(), n = ()=>{
            clearTimeout(p), e.removeEventListener("message", s), e.removeEventListener("error", c), e.removeEventListener("close", c);
        };
        e.addEventListener("message", s), e.addEventListener("error", c), e.addEventListener("close", c);
        let p = setTimeout(()=>{
            n(), o(void 0);
        }, t);
    });
var B = {
    authMode: "handshake",
    heartbeat: !0,
    debug: !1,
    reconnect: {
        delay: 1e3,
        retries: 10
    }
};
function ve(e = {}) {
    return (t)=>{
        e = {
            ...B,
            ...e
        };
        let o = v(), a = {
            code: "closed"
        }, s = {
            attempts: 0,
            active: !1
        }, c = !1, n = new Set, p = (m)=>"getToken" in m, u = (m, ...i)=>e.debug && t.globals.logger[m]("[Directus SDK]", ...i), f = async (m, i)=>{
            let h = new t.globals.URL(m);
            if (e.authMode === "strict" && p(i)) {
                let y = await i.getToken();
                y && h.searchParams.set("access_token", y);
            }
            return h.toString();
        }, b = async (m)=>{
            if ("url" in e) return await f(e.url, m);
            if ([
                "ws:",
                "wss:"
            ].includes(t.url.protocol)) return await f(t.url, m);
            let i = new t.globals.URL(t.url.toString());
            return i.protocol = t.url.protocol === "https:" ? "wss:" : "ws:", i.pathname = "/websocket", await f(i, m);
        }, I = (m)=>{
            let i = new Promise((h, y)=>{
                if (!e.reconnect || c) return y();
                if (u("info", `reconnect #${s.attempts} ` + (s.attempts >= e.reconnect.retries ? "maximum retries reached" : `trying again in ${Math.max(100, e.reconnect.delay)}ms`)), s.active) return s.active;
                if (s.attempts >= e.reconnect.retries) return s.attempts = -1, y();
                setTimeout(()=>m.connect().then((O)=>(n.forEach((S)=>{
                            m.sendMessage(S);
                        }), O)).then(h).catch(y), Math.max(100, e.reconnect.delay));
            });
            s.attempts += 1, s.active = i.catch(()=>{}).finally(()=>{
                s.active = !1;
            });
        }, C = {
            open: new Set([]),
            error: new Set([]),
            close: new Set([]),
            message: new Set([])
        };
        function d(m) {
            return "type" in m && "status" in m && "error" in m && "code" in m.error && "message" in m.error && m.type === "auth" && m.status === "error";
        }
        async function l(m, i) {
            if (a.code === "open") {
                if (m.error.code === "TOKEN_EXPIRED" && (u("warn", "Authentication token expired!"), p(i))) {
                    let h = await i.getToken();
                    if (!h) throw Error("No token for re-authenticating the websocket");
                    a.connection.send(N({
                        access_token: h
                    }));
                }
                if (m.error.code === "AUTH_TIMEOUT") return a.firstMessage && e.authMode === "public" ? (u("warn", 'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'), e.reconnect = !1) : u("warn", "Authentication timed out!"), a.connection.close();
                if (m.error.code === "AUTH_FAILED") {
                    if (a.firstMessage && e.authMode === "public") return u("warn", 'Authentication failed! Currently the "authMode" is "public" try using "handshake" instead'), e.reconnect = !1, a.connection.close();
                    u("warn", "Authentication failed!");
                }
            }
        }
        let x = async (m)=>{
            for(; a.code === "open";){
                let i = await w(a.connection).catch(()=>{});
                if (i) {
                    if (d(i)) {
                        await l(i, m), a.firstMessage = !1;
                        continue;
                    }
                    if (e.heartbeat && i.type === "ping") {
                        a.connection.send(K()), a.firstMessage = !1;
                        continue;
                    }
                    C.message.forEach((h)=>{
                        a.code === "open" && h.call(a.connection, i);
                    }), a.firstMessage = !1;
                }
            }
        };
        return {
            async connect () {
                if (c = !1, a.code === "connecting") return await a.connection;
                if (a.code !== "closed") throw new Error(`Cannot connect when state is "${a.code}"`);
                let m = this, i = await b(m);
                u("info", `Connecting to ${i}...`);
                let h = new Promise((y, O)=>{
                    let S = !1, T = new t.globals.WebSocket(i);
                    T.addEventListener("open", async (P)=>{
                        if (u("info", "Connection open."), a = {
                            code: "open",
                            connection: T,
                            firstMessage: !0
                        }, s.attempts = 0, s.active = !1, x(m), e.authMode === "handshake" && p(m)) {
                            let g = await m.getToken();
                            if (!g) throw Error("No token for authenticating the websocket. Make sure to provide one or call the login() function beforehand.");
                            T.send(N({
                                access_token: g
                            }));
                            let E = await w(T);
                            if (E && "type" in E && "status" in E && E.type === "auth" && E.status === "ok") u("info", "Authentication successful!");
                            else return O("Authentication failed while opening websocket connection");
                        }
                        C.open.forEach((g)=>g.call(T, P)), S = !0, y(T);
                    }), T.addEventListener("error", (P)=>{
                        u("warn", "Connection errored."), C.error.forEach((g)=>g.call(T, P)), T.close(), a = {
                            code: "error"
                        }, S || O(P);
                    }), T.addEventListener("close", (P)=>{
                        u("info", "Connection closed."), C.close.forEach((g)=>g.call(T, P)), o = v(), a = {
                            code: "closed"
                        }, I(this), S || O(P);
                    });
                });
                return a = {
                    code: "connecting",
                    connection: h
                }, h;
            },
            disconnect () {
                c = !0, a.code === "open" && a.connection.close();
            },
            onWebSocket (m, i) {
                if (m === "message") {
                    let h = function(y) {
                        if (typeof y.data != "string") return i.call(this, y);
                        try {
                            return i.call(this, JSON.parse(y.data));
                        } catch  {
                            return i.call(this, y);
                        }
                    };
                    return C[m].add(h), ()=>C[m].delete(h);
                }
                return C[m].add(i), ()=>C[m].delete(i);
            },
            sendMessage (m) {
                if (a.code !== "open") throw new Error('Cannot send messages without an open connection. Make sure you are calling "await client.connect()".');
                if (typeof m == "string") return a.connection.send(m);
                "uid" in m || (m.uid = o.next().value), a.connection.send(JSON.stringify(m));
            },
            async subscribe (m, i = {}) {
                "uid" in i || (i.uid = o.next().value), n.add({
                    ...i,
                    collection: m,
                    type: "subscribe"
                }), a.code !== "open" && (u("info", "No connection available for subscribing!"), await this.connect()), this.sendMessage({
                    ...i,
                    collection: m,
                    type: "subscribe"
                });
                let h = !0;
                async function* y() {
                    for(; h && a.code === "open";){
                        let S = await w(a.connection).catch(()=>{});
                        if (S) {
                            if ("type" in S && "status" in S && S.type === "subscribe" && S.status === "error") throw S;
                            "type" in S && "uid" in S && S.type === "subscription" && S.uid === i.uid && (yield S);
                        }
                    }
                    e.reconnect && s.active && (await s.active, a.code === "open" && (a.connection.send(JSON.stringify({
                        ...i,
                        collection: m,
                        type: "subscribe"
                    })), yield* y()));
                }
                let O = ()=>{
                    n.delete({
                        ...i,
                        collection: m,
                        type: "subscribe"
                    }), this.sendMessage({
                        uid: i.uid,
                        type: "unsubscribe"
                    }), h = !1;
                };
                return {
                    subscription: y(),
                    unsubscribe: O
                };
            }
        };
    };
}
var Je = (e)=>new Promise((t)=>setTimeout(()=>t(), e));
function qe(e, t = {}) {
    return ()=>{
        let o = F(t.provider), a = e;
        return "otp" in t && (a.otp = t.otp), a.mode = t.mode ?? "cookie", {
            path: o,
            method: "POST",
            body: JSON.stringify(a)
        };
    };
}
var Xe = (e = {})=>()=>{
        let t = {
            mode: e.mode ?? "cookie"
        };
        return t.mode === "json" && e.refresh_token && (t.refresh_token = e.refresh_token), {
            path: "/auth/logout",
            method: "POST",
            body: JSON.stringify(t)
        };
    };
var Ze = (e, t)=>()=>({
            path: "/auth/password/request",
            method: "POST",
            body: JSON.stringify({
                email: e,
                ...t ? {
                    reset_url: t
                } : {}
            })
        });
var tt = (e, t)=>()=>({
            path: "/auth/password/reset",
            method: "POST",
            body: JSON.stringify({
                token: e,
                password: t
            })
        });
var ot = (e = !1)=>()=>({
            path: e ? "/auth?sessionOnly" : "/auth",
            method: "GET"
        });
var st = (e = {})=>()=>{
        let t = {
            mode: e.mode ?? "cookie"
        };
        return t.mode === "json" && e.refresh_token && (t.refresh_token = e.refresh_token), {
            path: "/auth/refresh",
            method: "POST",
            body: JSON.stringify(t)
        };
    };
var dt = (e, t)=>()=>({
            path: "/collections",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var lt = (e, t)=>()=>({
            path: "/comments",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), ft = (e, t)=>()=>({
            path: "/comments",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var xt = (e, t)=>()=>({
            path: "/dashboards",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), Tt = (e, t)=>()=>({
            path: "/dashboards",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var gt = (e, t, o)=>()=>({
            path: `/fields/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "POST"
        });
var Dt = (e, t)=>()=>({
            path: "/files",
            method: "POST",
            body: e,
            params: t ?? {},
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }), bt = (e, t = {}, o)=>()=>({
            path: "/files/import",
            method: "POST",
            body: JSON.stringify({
                url: e,
                data: t
            }),
            params: o ?? {}
        });
var Pt = (e, t)=>()=>({
            path: "/flows",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), jt = (e, t)=>()=>({
            path: "/flows",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var Et = (e, t)=>()=>({
            path: "/folders",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), Ft = (e, t)=>()=>({
            path: "/folders",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
function j(e) {
    return [
        "directus_access",
        "directus_activity",
        "directus_collections",
        "directus_comments",
        "directus_fields",
        "directus_files",
        "directus_folders",
        "directus_migrations",
        "directus_permissions",
        "directus_policies",
        "directus_presets",
        "directus_relations",
        "directus_revisions",
        "directus_roles",
        "directus_sessions",
        "directus_settings",
        "directus_users",
        "directus_webhooks",
        "directus_dashboards",
        "directus_panels",
        "directus_notifications",
        "directus_shares",
        "directus_flows",
        "directus_operations",
        "directus_translations",
        "directus_versions",
        "directus_extensions"
    ].includes(e);
}
var vt = (e, t, o)=>()=>{
        let a = String(e);
        if (j(a)) throw new Error("Cannot use createItems for core collections");
        return {
            path: `/items/${a}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "POST"
        };
    }, Ut = (e, t, o)=>()=>{
        let a = String(e);
        if (j(a)) throw new Error("Cannot use createItem for core collections");
        return {
            path: `/items/${a}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "POST"
        };
    };
var $t = (e, t)=>()=>({
            path: "/notifications",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), kt = (e, t)=>()=>({
            path: "/notifications",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var Gt = (e, t)=>()=>({
            path: "/operations",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), Kt = (e, t)=>()=>({
            path: "/operations",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var _t = (e, t)=>()=>({
            path: "/panels",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), Ht = (e, t)=>()=>({
            path: "/panels",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var Bt = (e, t)=>()=>({
            path: "/permissions",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), Mt = (e, t)=>()=>({
            path: "/permissions",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var zt = (e, t)=>()=>({
            path: "/policies",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), Xt = (e, t)=>()=>({
            path: "/policies",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var Zt = (e, t)=>()=>({
            path: "/presets",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), er = (e, t)=>()=>({
            path: "/presets",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var rr = (e)=>()=>({
            path: "/relations",
            body: JSON.stringify(e),
            method: "POST"
        });
var ar = (e, t)=>()=>({
            path: "/roles",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), sr = (e, t)=>()=>({
            path: "/roles",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var ir = (e, t)=>()=>({
            path: "/shares",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), nr = (e, t)=>()=>({
            path: "/shares",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var pr = (e, t)=>()=>({
            path: "/translations",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), ur = (e, t)=>()=>({
            path: "/translations",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var yr = (e, t)=>()=>({
            path: "/users",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), dr = (e, t)=>()=>({
            path: "/users",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var lr = (e, t)=>()=>({
            path: "/versions",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), fr = (e, t)=>()=>({
            path: "/versions",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var xr = (e, t)=>()=>({
            path: "/webhooks",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        }), Tr = (e, t)=>()=>({
            path: "/webhooks",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "POST"
        });
var _r = (e)=>()=>({
            path: `/collections/${e}`,
            method: "DELETE"
        });
var U = (e)=>{
    let t = (o, a = [])=>{
        if (typeof o == "object") {
            let s = [];
            for(let c in o){
                let n = o[c] ?? [];
                if (Array.isArray(n)) for (let p of n)s.push(t(p, [
                    ...a,
                    c
                ]));
                else if (typeof n == "object") for (let p of Object.keys(n)){
                    let u = n[p];
                    for (let f of u)s.push(t(f, [
                        ...a,
                        `${c}:${p}`
                    ]));
                }
            }
            return s.flatMap((c)=>c);
        }
        return [
            ...a,
            String(o)
        ].join(".");
    };
    return e.flatMap((o)=>t(o));
}, J = (e)=>{
    let t = {};
    Array.isArray(e.fields) && e.fields.length > 0 && (t.fields = U(e.fields).join(",")), e.filter && Object.keys(e.filter).length > 0 && (t.filter = JSON.stringify(e.filter)), e.search && (t.search = e.search), "sort" in e && e.sort && (t.sort = typeof e.sort == "string" ? e.sort : e.sort.join(",")), typeof e.limit == "number" && e.limit >= -1 && (t.limit = String(e.limit)), typeof e.offset == "number" && e.offset >= 0 && (t.offset = String(e.offset)), typeof e.page == "number" && e.page >= 1 && (t.page = String(e.page)), e.deep && Object.keys(e.deep).length > 0 && (t.deep = JSON.stringify(e.deep)), e.alias && Object.keys(e.alias).length > 0 && (t.alias = JSON.stringify(e.alias)), e.aggregate && Object.keys(e.aggregate).length > 0 && (t.aggregate = JSON.stringify(e.aggregate)), e.groupBy && e.groupBy.length > 0 && (t.groupBy = e.groupBy.join(","));
    for (let [o, a] of Object.entries(e))o in t || (typeof a == "string" || typeof a == "number" || typeof a == "boolean" ? t[o] = String(a) : t[o] = JSON.stringify(a));
    return t;
};
var r = (e, t)=>{
    if (e.length === 0) throw new Error(t);
};
var Q = (e, t)=>{
    if (j(String(e))) throw new Error(t);
};
var ro = (e)=>()=>{
        let t = {};
        return Array.isArray(e) ? (r(e, "keysOrQuery cannot be empty"), t = {
            keys: e
        }) : (r(Object.keys(e), "keysOrQuery cannot be empty"), t = {
            query: e
        }), {
            path: "/comments",
            body: JSON.stringify(t),
            method: "DELETE"
        };
    }, oo = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/comments/${e}`,
            method: "DELETE"
        });
var mo = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/dashboards",
            body: JSON.stringify(e),
            method: "DELETE"
        }), io = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/dashboards/${e}`,
            method: "DELETE"
        });
var po = (e, t)=>()=>(r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), {
            path: `/fields/${e}/${t}`,
            method: "DELETE"
        });
var yo = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/files",
            body: JSON.stringify(e),
            method: "DELETE"
        }), So = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/files/${e}`,
            method: "DELETE"
        });
var Qo = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/flows",
            body: JSON.stringify(e),
            method: "DELETE"
        }), xo = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/flows/${e}`,
            method: "DELETE"
        });
var go = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/folders",
            body: JSON.stringify(e),
            method: "DELETE"
        }), Ro = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/folders/${e}`,
            method: "DELETE"
        });
var Oo = (e, t)=>()=>{
        let o = {};
        return r(String(e), "Collection cannot be empty"), Q(e, "Cannot use deleteItems for core collections"), Array.isArray(t) ? (r(t, "keysOrQuery cannot be empty"), o = {
            keys: t
        }) : (r(Object.keys(t), "keysOrQuery cannot be empty"), o = {
            query: t
        }), {
            path: `/items/${e}`,
            body: JSON.stringify(o),
            method: "DELETE"
        };
    }, Po = (e, t)=>()=>(r(String(e), "Collection cannot be empty"), Q(e, "Cannot use deleteItem for core collections"), r(String(t), "Key cannot be empty"), {
            path: `/items/${e}/${t}`,
            method: "DELETE"
        });
var Eo = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/notifications",
            body: JSON.stringify(e),
            method: "DELETE"
        }), Fo = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/notifications/${e}`,
            method: "DELETE"
        });
var No = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/operations",
            body: JSON.stringify(e),
            method: "DELETE"
        }), vo = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/operations/${e}`,
            method: "DELETE"
        });
var $o = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/panels",
            body: JSON.stringify(e),
            method: "DELETE"
        }), ko = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/panels/${e}`,
            method: "DELETE"
        });
var Ko = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/permissions",
            body: JSON.stringify(e),
            method: "DELETE"
        }), Wo = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/permissions/${e}`,
            method: "DELETE"
        });
var Vo = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/policies",
            body: JSON.stringify(e),
            method: "DELETE"
        }), Bo = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/policies/${e}`,
            method: "DELETE"
        });
var zo = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/presets",
            body: JSON.stringify(e),
            method: "DELETE"
        }), Xo = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/presets/${e}`,
            method: "DELETE"
        });
var ea = (e, t)=>()=>(r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), {
            path: `/relations/${e}/${t}`,
            method: "DELETE"
        });
var oa = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/roles",
            body: JSON.stringify(e),
            method: "DELETE"
        }), aa = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/roles/${e}`,
            method: "DELETE"
        });
var ia = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/shares",
            body: JSON.stringify(e),
            method: "DELETE"
        }), na = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/shares/${e}`,
            method: "DELETE"
        });
var ua = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/translations",
            body: JSON.stringify(e),
            method: "DELETE"
        }), ha = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/translations/${e}`,
            method: "DELETE"
        });
var Sa = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/users",
            body: JSON.stringify(e),
            method: "DELETE"
        }), la = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/users/${e}`,
            method: "DELETE"
        });
var xa = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/versions",
            body: JSON.stringify(e),
            method: "DELETE"
        }), Ta = (e)=>()=>(r(e, "Key cannot be empty"), {
            path: `/versions/${e}`,
            method: "DELETE"
        });
var Ra = (e)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/webhooks",
            body: JSON.stringify(e),
            method: "DELETE"
        }), Da = (e)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/webhooks/${e}`,
            method: "DELETE"
        });
var qa = (e)=>()=>({
            path: "/activity",
            params: e ?? {},
            method: "GET"
        }), za = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/activity/${e}`,
            params: t ?? {},
            method: "GET"
        });
var ts = (e, t)=>()=>{
        let o = String(e);
        return r(o, "Collection cannot be empty"), {
            path: j(o) ? `/${o.substring(9)}` : `/items/${o}`,
            method: "GET",
            params: {
                ...t.query ?? {},
                ...t.groupBy ? {
                    groupBy: t.groupBy
                } : {},
                aggregate: t.aggregate
            }
        };
    };
var as = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/assets/${e}`,
            params: t ?? {},
            method: "GET",
            onResponse: (o)=>o.body
        }), ss = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/assets/${e}`,
            params: t ?? {},
            method: "GET",
            onResponse: (o)=>o.blob()
        }), ms = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/assets/${e}`,
            params: t ?? {},
            method: "GET",
            onResponse: (o)=>o.arrayBuffer()
        });
var cs = ()=>()=>({
            path: "/collections",
            method: "GET"
        }), ps = (e)=>()=>(r(e, "Collection cannot be empty"), {
            path: `/collections/${e}`,
            method: "GET"
        });
var ys = (e)=>()=>({
            path: "/comments",
            params: e ?? {},
            method: "GET"
        }), ds = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/comments/${e}`,
            params: t ?? {},
            method: "GET"
        });
var fs = (e)=>()=>({
            path: "/dashboards",
            params: e ?? {},
            method: "GET"
        }), Qs = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/dashboards/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Ts = ()=>()=>({
            path: "/extensions/",
            method: "GET"
        });
var Rs = ()=>()=>({
            path: "/fields",
            method: "GET"
        }), Ds = (e)=>()=>(r(e, "Collection cannot be empty"), {
            path: `/fields/${e}`,
            method: "GET"
        }), bs = (e, t)=>()=>(r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), {
            path: `/fields/${e}/${t}`,
            method: "GET"
        });
var js = (e)=>()=>({
            path: "/files",
            params: e ?? {},
            method: "GET"
        }), Is = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/files/${e}`,
            params: t ?? {},
            method: "GET"
        });
var As = (e)=>()=>({
            path: "/flows",
            params: e ?? {},
            method: "GET"
        }), ws = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/flows/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Us = (e)=>()=>({
            path: "/folders",
            params: e ?? {},
            method: "GET"
        }), Js = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/folders/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Ls = (e, t)=>()=>(r(String(e), "Collection cannot be empty"), Q(e, "Cannot use readItems for core collections"), {
            path: `/items/${e}`,
            params: t ?? {},
            method: "GET"
        }), Gs = (e, t, o)=>()=>(r(String(e), "Collection cannot be empty"), Q(e, "Cannot use readItem for core collections"), r(String(t), "Key cannot be empty"), {
            path: `/items/${e}/${t}`,
            params: o ?? {},
            method: "GET"
        });
var _s = (e)=>()=>({
            path: "/notifications",
            params: e ?? {},
            method: "GET"
        }), Hs = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/notifications/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Ms = (e)=>()=>({
            path: "/operations",
            params: e ?? {},
            method: "GET"
        }), qs = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/operations/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Ys = (e)=>()=>({
            path: "/panels",
            params: e ?? {},
            method: "GET"
        }), Zs = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/panels/${e}`,
            params: t ?? {},
            method: "GET"
        });
var rm = (e)=>()=>({
            path: "/permissions",
            params: e ?? {},
            method: "GET"
        }), om = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/permissions/${e}`,
            params: t ?? {},
            method: "GET"
        }), am = (e, t)=>()=>(r(String(e), "Collection cannot be empty"), {
            path: `/permissions/me/${t ? `${e}/${t}` : `${e}`}`,
            method: "GET"
        }), sm = ()=>()=>({
            path: "/permissions/me",
            method: "GET"
        });
var nm = (e)=>()=>({
            path: "/policies",
            params: e ?? {},
            method: "GET"
        }), cm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/policies/${e}`,
            params: t ?? {},
            method: "GET"
        }), pm = ()=>()=>({
            path: "/policies/me/globals",
            method: "GET"
        });
var ym = (e)=>()=>({
            path: "/presets",
            params: e ?? {},
            method: "GET"
        }), dm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/presets/${e}`,
            params: t ?? {},
            method: "GET"
        });
var fm = ()=>()=>({
            path: "/relations",
            method: "GET"
        }), Qm = (e)=>()=>({
            path: `/relations/${e}`,
            method: "GET"
        }), xm = (e, t)=>()=>(r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), {
            path: `/relations/${e}/${t}`,
            method: "GET"
        });
var gm = (e)=>()=>({
            path: "/revisions",
            params: e ?? {},
            method: "GET"
        }), Rm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/revisions/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Om = (e)=>()=>({
            path: "/roles",
            params: e ?? {},
            method: "GET"
        }), Pm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/roles/${e}`,
            params: t ?? {},
            method: "GET"
        }), jm = (e)=>()=>({
            path: "/roles/me",
            params: e ?? {},
            method: "GET"
        });
var Em = (e)=>()=>({
            path: "/settings",
            params: e ?? {},
            method: "GET"
        });
var wm = (e)=>()=>({
            path: "/shares",
            params: e ?? {},
            method: "GET"
        }), Nm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/shares/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Jm = (e, t)=>()=>(r(String(e), "Collection cannot be empty"), Q(e, "Cannot use readSingleton for core collections"), {
            path: `/items/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Lm = (e)=>()=>({
            path: "/translations",
            params: e ?? {},
            method: "GET"
        }), Gm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/translations/${e}`,
            params: t ?? {},
            method: "GET"
        });
var _m = (e)=>()=>({
            path: "/users",
            params: e ?? {},
            method: "GET"
        }), Hm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/users/${e}`,
            params: t ?? {},
            method: "GET"
        }), Vm = (e)=>()=>({
            path: "/users/me",
            params: e ?? {},
            method: "GET"
        });
var qm = (e)=>()=>({
            path: "/versions",
            params: e ?? {},
            method: "GET"
        }), zm = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/versions/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Zm = (e)=>()=>({
            path: "/webhooks",
            params: e ?? {},
            method: "GET"
        }), ei = (e, t)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/webhooks/${e}`,
            params: t ?? {},
            method: "GET"
        });
var Fi = (e)=>()=>({
            method: "POST",
            path: "/schema/apply",
            body: JSON.stringify(e)
        });
var wi = (e, t = !1)=>()=>({
            method: "POST",
            path: "/schema/diff",
            params: t ? {
                force: t
            } : {},
            body: JSON.stringify(e)
        });
var vi = ()=>()=>({
            method: "GET",
            path: "/schema/snapshot"
        });
var Gi = (e = "item")=>()=>({
            method: "GET",
            path: e === "item" ? "/server/specs/graphql" : "/server/specs/graphql/system"
        });
var Wi = ()=>()=>({
            method: "GET",
            path: "/server/health"
        });
var Hi = ()=>()=>({
            method: "GET",
            path: "/server/info"
        });
var Bi = ()=>()=>({
            method: "GET",
            path: "/server/specs/oas"
        });
var qi = ()=>()=>({
            method: "GET",
            path: "/server/ping"
        });
var an = (e, t, o)=>()=>(r(e, "Collection cannot be empty"), {
            path: `/collections/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        }), sn = (e, t)=>()=>({
            path: "/collections",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        });
var cn = (e, t, o)=>()=>{
        let a = {};
        return Array.isArray(e) ? (r(e, "keysOrQuery cannot be empty"), a = {
            keys: e
        }) : (r(Object.keys(e), "keysOrQuery cannot be empty"), a = {
            query: e
        }), a.data = t, {
            path: "/comments",
            params: o ?? {},
            body: JSON.stringify(a),
            method: "PATCH"
        };
    }, pn = (e, t, o)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/comments/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var yn = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/dashboards",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), dn = (e, t)=>()=>({
            path: "/dashboards",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Sn = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/dashboards/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var Qn = (e, t, o)=>()=>(e !== null && r(e, "Bundle cannot be an empty string"), r(t, "Name cannot be empty"), {
            path: e ? `/extensions/${e}/${t}` : `/extensions/${t}`,
            params: {},
            body: JSON.stringify(o),
            method: "PATCH"
        });
var Cn = (e, t, o, a)=>()=>(r(e, "Keys cannot be empty"), r(t, "Field cannot be empty"), {
            path: `/fields/${e}/${t}`,
            params: a ?? {},
            body: JSON.stringify(o),
            method: "PATCH"
        });
var Dn = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/files",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), bn = (e, t)=>()=>({
            path: "/files",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), On = (e, t, o)=>()=>(r(e, "Key cannot be empty"), t instanceof FormData ? {
            path: `/files/${e}`,
            params: o ?? {},
            body: t,
            method: "PATCH",
            headers: {
                "Content-Type": "multipart/form-data"
            }
        } : {
            path: `/files/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var In = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/flows",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), En = (e, t)=>()=>({
            path: "/flows",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Fn = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/flows/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var Nn = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/folders",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), vn = (e, t)=>()=>({
            path: "/folders",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Un = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/folders/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var kn = (e, t, o, a)=>()=>{
        let s = {};
        return r(String(e), "Collection cannot be empty"), Q(e, "Cannot use updateItems for core collections"), Array.isArray(t) ? (r(t, "keysOrQuery cannot be empty"), s = {
            keys: t
        }) : (r(Object.keys(t), "keysOrQuery cannot be empty"), s = {
            query: t
        }), s.data = o, {
            path: `/items/${e}`,
            params: a ?? {},
            body: JSON.stringify(s),
            method: "PATCH"
        };
    }, Ln = (e, t, o)=>()=>(r(String(e), "Collection cannot be empty"), Q(e, "Cannot use updateItems for core collections"), {
            path: `/items/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        }), Gn = (e, t, o, a)=>()=>(r(String(t), "Key cannot be empty"), r(String(e), "Collection cannot be empty"), Q(e, "Cannot use updateItem for core collections"), {
            path: `/items/${e}/${t}`,
            params: a ?? {},
            body: JSON.stringify(o),
            method: "PATCH"
        });
var _n = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/notifications",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), Hn = (e, t)=>()=>({
            path: "/notifications",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Vn = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/notifications/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var qn = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/operations",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), zn = (e, t)=>()=>({
            path: "/operations",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Xn = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/operations/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var ec = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/panels",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), tc = (e, t)=>()=>({
            path: "/panels",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), rc = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/panels/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var sc = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/permissions",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), mc = (e, t)=>()=>({
            path: "/permissions",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), ic = (e, t, o)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/permissions/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var pc = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/policies",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), uc = (e, t)=>()=>({
            path: "/policies",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), hc = (e, t, o)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/policies/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var Sc = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/presets",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), lc = (e, t)=>()=>({
            path: "/presets",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), fc = (e, t, o)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/presets/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var Tc = (e, t, o, a)=>()=>(r(e, "Collection cannot be empty"), r(t, "Field cannot be empty"), {
            path: `/relations/${e}/${t}`,
            params: a ?? {},
            body: JSON.stringify(o),
            method: "PATCH"
        });
var Rc = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/roles",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), Dc = (e, t)=>()=>({
            path: "/roles",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), bc = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/roles/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var Pc = (e, t)=>()=>({
            path: "/settings",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        });
var Ec = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/shares",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), Fc = (e, t)=>()=>({
            path: "/shares",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Ac = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/shares/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var vc = (e, t, o)=>()=>(r(String(e), "Collection cannot be empty"), Q(e, "Cannot use updateSingleton for core collections"), {
            path: `/items/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var $c = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/translations",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), kc = (e, t)=>()=>({
            path: "/translations",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Lc = (e, t, o)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/translations/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var Wc = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/users",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), _c = (e, t)=>()=>({
            path: "/users",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Hc = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/users/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        }), Vc = (e, t)=>()=>({
            path: "/users/me",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        });
var qc = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/versions",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), zc = (e, t)=>()=>({
            path: "/versions",
            params: t ?? {},
            body: JSON.stringify(e),
            method: "PATCH"
        }), Xc = (e, t, o)=>()=>(r(e, "Key cannot be empty"), {
            path: `/versions/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var ep = (e, t, o)=>()=>(r(e, "Keys cannot be empty"), {
            path: "/webhooks",
            params: o ?? {},
            body: JSON.stringify({
                keys: e,
                data: t
            }),
            method: "PATCH"
        }), tp = (e, t, o)=>()=>(r(String(e), "Key cannot be empty"), {
            path: `/webhooks/${e}`,
            params: o ?? {},
            body: JSON.stringify(t),
            method: "PATCH"
        });
var jp = ()=>(e = !1)=>({
            method: "POST",
            path: `/utils/cache/clear${e ? "?system" : ""}`
        });
var Ep = (e, t, o, a)=>()=>({
            method: "POST",
            path: `/utils/export/${e}`,
            body: JSON.stringify({
                format: t,
                query: o,
                file: a
            })
        });
var Ap = (e, t, o)=>()=>e === "GET" ? {
            path: `/flows/trigger/${t}`,
            params: o ?? {},
            method: "GET"
        } : {
            path: `/flows/trigger/${t}`,
            body: JSON.stringify(o ?? {}),
            method: "POST"
        };
var Np = (e)=>()=>({
            method: "POST",
            path: "/utils/hash/generate",
            body: JSON.stringify({
                string: e
            })
        }), vp = (e, t)=>()=>({
            method: "POST",
            path: "/utils/hash/verify",
            body: JSON.stringify({
                string: e,
                hash: t
            })
        });
var Jp = (e, t)=>()=>({
            path: `/utils/import/${e}`,
            method: "POST",
            body: t,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
var kp = (e, t, o = "cookie")=>()=>({
            path: "/shares/auth",
            method: "POST",
            body: JSON.stringify({
                share: e,
                password: t,
                mode: o
            })
        }), Lp = (e, t)=>()=>({
            path: "/shares/invite",
            method: "POST",
            body: JSON.stringify({
                share: e,
                emails: t
            })
        }), Gp = (e)=>()=>({
            path: `/shares/info/${e}`,
            method: "GET"
        });
var Wp = (e, t, o)=>()=>({
            method: "POST",
            path: `/utils/sort/${e}`,
            body: JSON.stringify({
                item: t,
                to: o
            })
        });
var Hp = (e, t, o)=>()=>({
            path: "/users/invite",
            method: "POST",
            body: JSON.stringify({
                email: e,
                role: t,
                ...o ? {
                    invite_url: o
                } : {}
            })
        }), Vp = (e, t)=>()=>({
            path: "/users/invite/accept",
            method: "POST",
            body: JSON.stringify({
                token: e,
                password: t
            })
        }), Bp = (e, t, o = {})=>()=>({
            path: "/users/register",
            method: "POST",
            body: JSON.stringify({
                email: e,
                password: t,
                ...o
            })
        }), Mp = (e)=>()=>({
            path: "/users/register/verify-email",
            params: {
                token: e
            },
            method: "GET"
        }), qp = (e)=>()=>({
            path: "/users/me/tfa/generate",
            method: "POST",
            body: JSON.stringify({
                password: e
            })
        }), zp = (e, t)=>()=>({
            path: "/users/me/tfa/enable",
            method: "POST",
            body: JSON.stringify({
                secret: e,
                otp: t
            })
        }), Xp = (e)=>()=>({
            path: "/users/me/tfa/disable",
            method: "POST",
            body: JSON.stringify({
                otp: e
            })
        });
var eu = (e, t)=>()=>(r(e, "ID cannot be empty"), {
            path: `/versions/${e}/save`,
            method: "POST",
            body: JSON.stringify(t)
        }), tu = (e)=>()=>(r(e, "ID cannot be empty"), {
            path: `/versions/${e}/compare`,
            method: "GET"
        }), ru = (e, t, o)=>()=>(r(e, "ID cannot be empty"), {
            path: `/versions/${e}/promote`,
            method: "POST",
            body: JSON.stringify(o ? {
                mainHash: t,
                fields: o
            } : {
                mainHash: t
            })
        });
var au = (e)=>()=>({
            method: "GET",
            path: "/utils/random/string",
            params: e !== void 0 ? {
                length: e
            } : {}
        });
var M = {}, ju = (e = {})=>(t)=>{
        let o = {
            ...M,
            ...e
        };
        return {
            async request (a) {
                let s = a();
                if (s.headers || (s.headers = {}), "Content-Type" in s.headers ? s.headers["Content-Type"] === "multipart/form-data" && delete s.headers["Content-Type"] : s.headers["Content-Type"] = "application/json", "getToken" in this && !("Authorization" in s.headers)) {
                    let u = await this.getToken();
                    u && (s.headers.Authorization = `Bearer ${u}`);
                }
                let c = R(t.url, s.path, s.params), n = {
                    method: s.method ?? "GET",
                    headers: s.headers ?? {}
                };
                "credentials" in o && (n.credentials = o.credentials), s.body && (n.body = s.body), s.onRequest && (n = await s.onRequest(n)), o.onRequest && (n = await o.onRequest(n));
                let p = await D(c.toString(), n, t.globals.fetch);
                return "onResponse" in s && (p = await s.onResponse(p, n)), "onResponse" in e && (p = await e.onResponse(p, n)), p;
            }
        };
    };
function Eu(e, t) {
    return ()=>{
        let o = e();
        return typeof t == "function" ? o.onRequest = t : o.onRequest = (a)=>({
                ...a,
                ...t
            }), o;
    };
}
function wu(e) {
    return ()=>{
        let t = e();
        return t.method === "GET" && t.params && (t.method = "SEARCH", t.body = JSON.stringify({
            query: {
                ...t.params,
                fields: U(t.params.fields ?? [])
            }
        }), delete t.params), t;
    };
}
function vu(e, t) {
    return ()=>{
        let o = t();
        return e && (o.headers || (o.headers = {}), o.headers.Authorization = `Bearer ${e}`), o;
    };
}
function Ju(e) {
    return ()=>e;
}
function gh(e) {
    return typeof e == "object" && e !== null && "errors" in e && Array.isArray(e.errors) && "message" in e.errors[0] && "extensions" in e.errors[0] && "code" in e.errors[0].extensions;
}
;
 //# sourceMappingURL=index.js.map
}}),
}]);

//# sourceMappingURL=_17046b60._.js.map