"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
exports.modules = {

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("graphql-request");;

/***/ }),

/***/ "(api)/./pages/api/comments.js":
/*!*******************************!*\
  !*** ./pages/api/comments.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ asynchandler)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_0__]);\ngraphql_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst graphqlAPI = \"https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clj8rn3z21krg01uee5u10qw1/master\";\nconst graphtoken = process.env.BOOKISHWIZ_TOKEN;\n/** *************************************************************\r\n* Any file inside the folder pages/api is mapped to /api/* and  *\r\n* will be treated as an API endpoint instead of a page.         *\r\n*************************************************************** */ // export a default function for API route to work\nasync function asynchandler(req, res) {\n    const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(graphqlAPI, {\n        headers: {\n            authorization: `Bearer ${graphtoken}`\n        }\n    });\n    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\r\n    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {\r\n      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }\r\n    }\r\n  `;\n    const result = await graphQLClient.request(query, {\n        name: req.body.name,\n        email: req.body.email,\n        comment: req.body.comment,\n        slug: req.body.slug\n    });\n    return res.status(200).send(result);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFFckQsTUFBTUUsVUFBVSxHQUFHQyx1RkFBMkM7QUFDOUQsTUFBTUcsVUFBVSxHQUFHSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0csZ0JBQWdCO0FBQy9DO0FBTUEsZUFBZSxlQUFlQyxZQUFZLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ25ELE1BQU1DLGFBQWEsR0FBRyxJQUFJWCxhQUFhLENBQUVFLFVBQVUsRUFBRztRQUNwRFUsT0FBTyxFQUFFO0FBQ1BDLFVBQWEsRUFBRSxDQUFDLE9BQU8sRUFBRVAsVUFBVSxDQUFDLENBQUM7U0FDdEM7S0FDRixDQUFDO0lBRUYsTUFBTVEsS0FBSyxHQUFHYixHQUFHLENBQUM7SUFNbEI7O1FBRUVrQixLQUFLLEVBQUVWLEdBQUcsZ0RBQUNTLEVBQUk7UUFDZkUsT0FBTyxFQUFFWCxHQUFHLENBQUNTLElBQUksQ0FBQ0UsT0FBTztRQUN6QkMsSUFBSSxFQUFFWixHQUFHLENBQUNTLElBQUksQ0FBQ0csSUFBSTtLQUNwQixDQUFDO0lBRUY7Q0FDRCIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2cvLi9wYWdlcy9hcGkvY29tbWVudHMuanM/MjVhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xyXG5cclxuY29uc3QgZ3JhcGhxbEFQSSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JPT0tJU0hXSVpfRU5EUE9JTlQ7XHJcbmNvbnN0IGdyYXBodG9rZW4gPSBwcm9jZXNzLmVudi5CT09LSVNIV0laX1RPS0VOO1xyXG4vKiogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4qIEFueSBmaWxlIGluc2lkZSB0aGUgZm9sZGVyIHBhZ2VzL2FwaSBpcyBtYXBwZWQgdG8gL2FwaS8qIGFuZCAgKlxyXG4qIHdpbGwgYmUgdHJlYXRlZCBhcyBhbiBBUEkgZW5kcG9pbnQgaW5zdGVhZCBvZiBhIHBhZ2UuICAgICAgICAgKlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8vIGV4cG9ydCBhIGRlZmF1bHQgZnVuY3Rpb24gZm9yIEFQSSByb3V0ZSB0byB3b3JrXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFzeW5jaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGNvbnN0IGdyYXBoUUxDbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCgoZ3JhcGhxbEFQSSksIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dyYXBodG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHF1ZXJ5ID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gQ3JlYXRlQ29tbWVudCgkbmFtZTogU3RyaW5nISwgJGVtYWlsOiBTdHJpbmchLCAkY29tbWVudDogU3RyaW5nISwgJHNsdWc6IFN0cmluZyEpIHtcclxuICAgICAgY3JlYXRlQ29tbWVudChkYXRhOiB7bmFtZTogJG5hbWUsIGVtYWlsOiAkZW1haWwsIGNvbW1lbnQ6ICRjb21tZW50LCBwb3N0OiB7Y29ubmVjdDoge3NsdWc6ICRzbHVnfX19KSB7IGlkIH1cclxuICAgIH1cclxuICBgO1xyXG5cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBncmFwaFFMQ2xpZW50LnJlcXVlc3QocXVlcnksIHtcclxuICAgIG5hbWU6IHJlcS5ib2R5Lm5hbWUsXHJcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXHJcbiAgICBjb21tZW50OiByZXEuYm9keS5jb21tZW50LFxyXG4gICAgc2x1ZzogcmVxLmJvZHkuc2x1ZyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3VsdCk7XHJcbn0iXSwibmFtZXMiOlsiR3JhcGhRTENsaWVudCIsImdxbCIsImdyYXBocWxBUEkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQk9PS0lTSFdJWl9FTkRQT0lOVCIsImdyYXBodG9rZW4iLCJCT09LSVNIV0laX1RPS0VOIiwiYXN5bmNoYW5kbGVyIiwicmVxIiwicmVzIiwiZ3JhcGhRTENsaWVudCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwicXVlcnkiLCJyZXN1bHQiLCJyZXF1ZXN0IiwibmFtZSIsImJvZHkiLCJlbWFpbCIsImNvbW1lbnQiLCJzbHVnIiwic3RhdHVzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments.js"));
module.exports = __webpack_exports__;

})();