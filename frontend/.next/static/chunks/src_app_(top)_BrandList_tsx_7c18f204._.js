(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/(top)/BrandList.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "BrandList": (()=>BrandList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DeviceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/DeviceContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client"; // クライアントコンポーネントであることを宣言
;
const BrandList = ({ brands })=>{
    _s();
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DeviceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"])(); // フックの使用はこちらで行う
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                children: brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: brand.name
                    }, brand.id, false, {
                        fileName: "[project]/src/app/(top)/BrandList.tsx",
                        lineNumber: 21,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/(top)/BrandList.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 font-bold text-green-600",
                children: "これは**モバイル**向けの表示です。"
            }, void 0, false, {
                fileName: "[project]/src/app/(top)/BrandList.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 font-bold text-blue-600",
                children: "これは**PC**向けの表示です。"
            }, void 0, false, {
                fileName: "[project]/src/app/(top)/BrandList.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
_s(BrandList, "On/MfDst2MZKhtJ8EIs7crlmOvs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$DeviceContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDevice"]
    ];
});
_c = BrandList;
var _c;
__turbopack_context__.k.register(_c, "BrandList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_%28top%29_BrandList_tsx_7c18f204._.js.map