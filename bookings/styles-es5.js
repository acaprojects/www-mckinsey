(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--13-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n  height: 100%;\n  width: 100%;\n}\nbody {\n  background-color: #fff;\n}\n.app,\nbody {\n  font-family: \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif;\n  font-weight: 300;\n}\n.app {\n  position: absolute;\n}\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n}\n.app {\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n* {\n  font-family: \"Helvetica Neue\", \"Helvetica\", Arial, sans-serif;\n  box-sizing: border-box;\n}\n.center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  margin: auto;\n}\n.loading {\n  display: inline-block;\n  padding: 1.5em;\n  border-radius: 1em;\n  color: #000;\n  font-size: 10mm;\n  text-align: center;\n}\n.bounce,\n.bounce .circle,\n.bounce .circle .inner {\n  height: 4em;\n  width: 4em;\n  border-radius: 100%;\n}\n.bounce .circle {\n  -webkit-animation: sk-scaleout 0.8s infinite ease-in-out;\n  animation: sk-scaleout 0.8s infinite ease-in-out;\n}\n.bounce .circle .inner {\n  background-color: #000;\n}\n@-webkit-keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    opacity: 0;\n  }\n}\n@keyframes sk-scaleout {\n  0% {\n    -webkit-transform: scale(0);\n    transform: scale(0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    -webkit-transform: scale(1);\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n.no-script {\n  height: 10em;\n  width: 15em;\n  padding: 0.5em 1em;\n  background-color: #FFF;\n  border-radius: 0.1em;\n  box-shadow: 0 0.1em 0.2em 0.1em rgba(0, 0, 0, 0.2);\n  text-align: center;\n  position: absolute;\n  top: 1em;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n.no-script img {\n  border-radius: 0.2em;\n  height: 6em;\n  width: 6em;\n}\n.no-script .title {\n  padding: 0 1em;\n  font-style: italic;\n  font-size: 1.2em;\n}\n.no-script .content {\n  display: flex;\n}\n.aca-coin {\n  position: relative;\n  height: 4em;\n  width: 4em;\n  padding: 0.5em;\n  margin: 0.5em;\n  border-radius: 100%;\n  background-color: #dd3d5e;\n  -webkit-animation: coin-spin 2s infinite ease-in-out;\n          animation: coin-spin 2s infinite ease-in-out;\n}\n.aca-logo {\n  height: 3em;\n  width: 3em;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iNzc5LjAwMDAwMHB0IiBoZWlnaHQ9IjMyNC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDc3OS4wMDAwMDAgMzI0LjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgo8bWV0YWRhdGE+CkNyZWF0ZWQgYnkgcG90cmFjZSAxLjE0LCB3cml0dGVuIGJ5IFBldGVyIFNlbGluZ2VyIDIwMDEtMjAxNwo8L21ldGFkYXRhPgo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwzMjQuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApIgpmaWxsPSIjZmZmIiBzdHJva2U9Im5vbmUiPgo8cGF0aCBkPSJNNDAwNSAzMjI4IGMtNDQ3IC0yNSAtODM5IC0yMzUgLTExMDkgLTU5NiAtMzE5IC00MjYgLTQxMSAtMTE0NQotMjE2IC0xNjk3IDE2NyAtNDcxIDU0OSAtODAzIDEwMzcgLTkwMiAxMTEgLTIzIDUwNSAtMjYgNjIzIC01IDEyNyAyMyAyODAgNjIKMzgyIDk5IGw5OCAzNSAwIDEwNSBjMCA5NiAtMiAxMDUgLTE3IDEwMCAtMTAgLTMgLTU3IC0yMiAtMTA2IC00MSAtMTkzIC04MAotMzczIC0xMTEgLTYzNyAtMTExIC0yNzQgMCAtNDAxIDI3IC01OTcgMTI5IC0xMTYgNjAgLTE5OSAxMjQgLTMwMyAyMzMgLTE3MgoxNzggLTI3NiAzODggLTMyNSA2NTYgLTM2IDE5NSAtMzYgNTA4IDAgNzAzIDEwMSA1NTUgNDY2IDk1MiA5ODIgMTA3MCA5MyAyMQo0MTUgMzAgNTI1IDE1IDEyNCAtMTggMjc2IC01NiAzNzkgLTk2IDUwIC0xOSA5MyAtMzUgOTUgLTM1IDIgMCA0IDUyIDQgMTE1CmwwIDExNCAtODcgMjcgYy0yMjggNjkgLTQ2OSA5NyAtNzI4IDgyeiIvPgo8cGF0aCBkPSJNNTkxIDE2MzMgYy0zMjEgLTg1MSAtNTg2IC0xNTU0IC01ODkgLTE1NjEgLTMgLTkgMjQgLTEyIDExNiAtMTIKbDEyMCAwIDYwIDE2MiBjMzMgOTAgMTEzIDMwOCAxNzggNDg2IGwxMTkgMzIyIDY3NSAwIDY3NSAwIDEwNCAtMjgyIGM1NyAtMTU2CjEzNyAtMzc0IDE3OCAtNDg2IGw3NSAtMjAyIDExOSAwIGM4OSAwIDExOSAzIDExOCAxMyAwIDYgLTI2MCA3MDcgLTU3NyAxNTU3CmwtNTc3IDE1NDUgLTEwNSAzIC0xMDYgMyAtNTgzIC0xNTQ4eiIvPgo8cGF0aCBkPSJNNjQwNSAzMTYzIGMtMzggLTk5IC0xMTU5IC0zMDcyIC0xMTYzIC0zMDg2IC00IC0xNSA2IC0xNyAxMTQgLTE3CmwxMTkgMCAxMDQgMjgzIGM1NyAxNTUgMTM3IDM3MyAxNzggNDg1IGw3NSAyMDIgNjc2IC0yIDY3NiAtMyAxNzYgLTQ4MCAxNzcKLTQ4MCAxMjIgLTMgMTIzIC0zIC04IDIzIGMtNCAxMiAtMjY0IDcxMyAtNTc5IDE1NTggbC01NzMgMTUzNSAtMTA1IDMgYy05MyAyCi0xMDUgMSAtMTEyIC0xNXoiLz4KPC9nPgo8L3N2Zz4K);\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n}\n@-webkit-keyframes coin-spin {\n  0% {\n    -webkit-transform: rotateY(0deg) translateY(0%);\n            transform: rotateY(0deg) translateY(0%);\n  }\n  49% {\n    -webkit-transform: rotateY(179deg) translateY(20%);\n            transform: rotateY(179deg) translateY(20%);\n  }\n  50% {\n    -webkit-transform: rotateY(181deg) translateY(20%);\n            transform: rotateY(181deg) translateY(20%);\n  }\n  100% {\n    -webkit-transform: rotateY(359deg) translateY(0%);\n            transform: rotateY(359deg) translateY(0%);\n  }\n}\n@keyframes coin-spin {\n  0% {\n    -webkit-transform: rotateY(0deg) translateY(0%);\n            transform: rotateY(0deg) translateY(0%);\n  }\n  49% {\n    -webkit-transform: rotateY(179deg) translateY(20%);\n            transform: rotateY(179deg) translateY(20%);\n  }\n  50% {\n    -webkit-transform: rotateY(181deg) translateY(20%);\n            transform: rotateY(181deg) translateY(20%);\n  }\n  100% {\n    -webkit-transform: rotateY(359deg) translateY(0%);\n            transform: rotateY(359deg) translateY(0%);\n  }\n}\n.shadow {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  -webkit-animation: floating-shadow 2s infinite ease-in-out;\n          animation: floating-shadow 2s infinite ease-in-out;\n  width: 48px;\n  height: 6px;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 100%;\n}\n@-webkit-keyframes floating-shadow {\n  0% {\n    -webkit-transform: translateX(-50%) scale(1);\n            transform: translateX(-50%) scale(1);\n  }\n  45% {\n    -webkit-transform: translateX(-50%) scale(1.3);\n            transform: translateX(-50%) scale(1.3);\n  }\n  55% {\n    -webkit-transform: translateX(-50%) scale(1.3);\n            transform: translateX(-50%) scale(1.3);\n  }\n  100% {\n    -webkit-transform: translateX(-50%) scale(1);\n            transform: translateX(-50%) scale(1);\n  }\n}\n@keyframes floating-shadow {\n  0% {\n    -webkit-transform: translateX(-50%) scale(1);\n            transform: translateX(-50%) scale(1);\n  }\n  45% {\n    -webkit-transform: translateX(-50%) scale(1.3);\n            transform: translateX(-50%) scale(1.3);\n  }\n  55% {\n    -webkit-transform: translateX(-50%) scale(1.3);\n            transform: translateX(-50%) scale(1.3);\n  }\n  100% {\n    -webkit-transform: translateX(-50%) scale(1);\n            transform: translateX(-50%) scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9zdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBOztFQUVJLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURHQTtFQUNJLHNCQUFBO0FDQUo7QURHQTs7RUFFSSw2REFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0FDQUo7QURHQTs7RUFFSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNBSjtBREdBO0VBQ0ksTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQ0FKO0FERUE7RUFDSSw2REFBQTtFQUNBLHNCQUFBO0FDQ0o7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtFQUVBLGdDQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREVBOzs7RUFHSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLHdEQUFBO0VBQ0EsZ0RBQUE7QUNDSjtBREVBO0VBQ0ksc0JBQUE7QUNDSjtBREVBO0VBQ0k7SUFBSSwyQkFBQTtFQ0VOO0VEREU7SUFBSyxVQUFBO0VDSVA7RURIRTtJQUFNLDJCQUFBO0lBQTJCLFVBQUE7RUNPbkM7QUFDRjtBRExBO0VBQ0k7SUFBSSwyQkFBQTtJQUEyQixtQkFBQTtFQ1NqQztFRFJFO0lBQUssVUFBQTtFQ1dQO0VEVkU7SUFBTSwyQkFBQTtJQUEyQixtQkFBQTtJQUFtQixVQUFBO0VDZXREO0FBQ0Y7QURiQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0RBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0FDZUo7QURaQTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNlSjtBRFpBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNlSjtBRFpBO0VBQ0ksYUFBQTtBQ2VKO0FEWkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0RBQUE7VUFBQSw0Q0FBQTtBQ2VKO0FEWkE7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHFoRUFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtBQ2VKO0FEWkE7RUFDSTtJQUFPLCtDQUFBO1lBQUEsdUNBQUE7RUNnQlQ7RURmRTtJQUFPLGtEQUFBO1lBQUEsMENBQUE7RUNrQlQ7RURqQkU7SUFBTyxrREFBQTtZQUFBLDBDQUFBO0VDb0JUO0VEbkJFO0lBQU8saURBQUE7WUFBQSx5Q0FBQTtFQ3NCVDtBQUNGO0FEM0JBO0VBQ0k7SUFBTywrQ0FBQTtZQUFBLHVDQUFBO0VDZ0JUO0VEZkU7SUFBTyxrREFBQTtZQUFBLDBDQUFBO0VDa0JUO0VEakJFO0lBQU8sa0RBQUE7WUFBQSwwQ0FBQTtFQ29CVDtFRG5CRTtJQUFPLGlEQUFBO1lBQUEseUNBQUE7RUNzQlQ7QUFDRjtBRHBCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0FDc0JKO0FEbkJBO0VBQ0k7SUFBTSw0Q0FBQTtZQUFBLG9DQUFBO0VDdUJSO0VEdEJFO0lBQU0sOENBQUE7WUFBQSxzQ0FBQTtFQ3lCUjtFRHhCRTtJQUFNLDhDQUFBO1lBQUEsc0NBQUE7RUMyQlI7RUQxQkU7SUFBTSw0Q0FBQTtZQUFBLG9DQUFBO0VDNkJSO0FBQ0Y7QURsQ0E7RUFDSTtJQUFNLDRDQUFBO1lBQUEsb0NBQUE7RUN1QlI7RUR0QkU7SUFBTSw4Q0FBQTtZQUFBLHNDQUFBO0VDeUJSO0VEeEJFO0lBQU0sOENBQUE7WUFBQSxzQ0FBQTtFQzJCUjtFRDFCRTtJQUFNLDRDQUFBO1lBQUEsb0NBQUE7RUM2QlI7QUFDRiIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFwcCxcbmJvZHl7XG4gICAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFwcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5odG1sLFxuYm9keSB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmFwcCB7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIGJvdHRvbTowO1xuICAgIHJpZ2h0OjB9XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIFwiSGVsdmV0aWNhXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcbn1cblxuLmNlbnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDo1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgbWFyZ2luOmF1dG87XG59XG5cbi5sb2FkaW5nIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6MWVtO1xuICAgIGNvbG9yOiMwMDA7XG4gICAgZm9udC1zaXplOjEwbW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5ib3VuY2UsXG4uYm91bmNlIC5jaXJjbGUsXG4uYm91bmNlIC5jaXJjbGUgLmlubmVyIHtcbiAgICBoZWlnaHQ6NGVtO1xuICAgIHdpZHRoOjRlbTtcbiAgICBib3JkZXItcmFkaXVzOjEwMCU7XG59XG5cbi5ib3VuY2UgLmNpcmNsZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246c2stc2NhbGVvdXQgLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjpzay1zY2FsZW91dCAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5ib3VuY2UgLmNpcmNsZSAuaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcbiAgICAwJSB7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCl9XG4gICAgMjAlIHtvcGFjaXR5OjF9XG4gICAgMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eTowfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcbiAgICAwJSB7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfVxuICAgIDIwJSB7b3BhY2l0eToxfVxuICAgIDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjB9XG59XG5cbi5uby1zY3JpcHQge1xuICAgIGhlaWdodDogMTBlbTtcbiAgICB3aWR0aDogMTVlbTtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IC4xZW07XG4gICAgYm94LXNoYWRvdzogMCAuMWVtIC4yZW0gLjFlbSByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMWVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcbn1cblxuLm5vLXNjcmlwdCBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgd2lkdGg6IDZlbVxufVxuXG4ubm8tc2NyaXB0IC50aXRsZSB7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMS4yZW1cbn1cblxuLm5vLXNjcmlwdCAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleFxufVxuXG4uYWNhLWNvaW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDQuMGVtO1xuICAgIHdpZHRoOiA0LjBlbTtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBtYXJnaW46IDAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkM2Q1ZTtcbiAgICBhbmltYXRpb246Y29pbi1zcGluIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5hY2EtbG9nbyB7XG4gICAgaGVpZ2h0OiAzLjBlbTtcbiAgICB3aWR0aDogMy4wZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCemRHRnVaR0ZzYjI1bFBTSnVieUkvUGdvOElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElESXdNREV3T1RBMEx5OUZUaUlLSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5VVVpOHlNREF4TDFKRlF5MVRWa2N0TWpBd01UQTVNRFF2UkZSRUwzTjJaekV3TG1SMFpDSStDanh6ZG1jZ2RtVnljMmx2YmowaU1TNHdJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lDaUIzYVdSMGFEMGlOemM1TGpBd01EQXdNSEIwSWlCb1pXbG5hSFE5SWpNeU5DNHdNREF3TURCd2RDSWdkbWxsZDBKdmVEMGlNQ0F3SURjM09TNHdNREF3TURBZ016STBMakF3TURBd01DSUtJSEJ5WlhObGNuWmxRWE53WldOMFVtRjBhVzg5SW5oTmFXUlpUV2xrSUcxbFpYUWlQZ284YldWMFlXUmhkR0UrQ2tOeVpXRjBaV1FnWW5rZ2NHOTBjbUZqWlNBeExqRTBMQ0IzY21sMGRHVnVJR0o1SUZCbGRHVnlJRk5sYkdsdVoyVnlJREl3TURFdE1qQXhOd284TDIxbGRHRmtZWFJoUGdvOFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d3TGpBd01EQXdNQ3d6TWpRdU1EQXdNREF3S1NCelkyRnNaU2d3TGpFd01EQXdNQ3d0TUM0eE1EQXdNREFwSWdwbWFXeHNQU0lqWm1abUlpQnpkSEp2YTJVOUltNXZibVVpUGdvOGNHRjBhQ0JrUFNKTk5EQXdOU0F6TWpJNElHTXRORFEzSUMweU5TQXRPRE01SUMweU16VWdMVEV4TURrZ0xUVTVOaUF0TXpFNUlDMDBNallnTFRReE1TQXRNVEUwTlFvdE1qRTJJQzB4TmprM0lERTJOeUF0TkRjeElEVTBPU0F0T0RBeklERXdNemNnTFRrd01pQXhNVEVnTFRJeklEVXdOU0F0TWpZZ05qSXpJQzAxSURFeU55QXlNeUF5T0RBZ05qSUtNemd5SURrNUlHdzVPQ0F6TlNBd0lERXdOU0JqTUNBNU5pQXRNaUF4TURVZ0xURTNJREV3TUNBdE1UQWdMVE1nTFRVM0lDMHlNaUF0TVRBMklDMDBNU0F0TVRreklDMDRNQW90TXpjeklDMHhNVEVnTFRZek55QXRNVEV4SUMweU56UWdNQ0F0TkRBeElESTNJQzAxT1RjZ01USTVJQzB4TVRZZ05qQWdMVEU1T1NBeE1qUWdMVE13TXlBeU16TWdMVEUzTWdveE56Z2dMVEkzTmlBek9EZ2dMVE15TlNBMk5UWWdMVE0ySURFNU5TQXRNellnTlRBNElEQWdOekF6SURFd01TQTFOVFVnTkRZMklEazFNaUE1T0RJZ01UQTNNQ0E1TXlBeU1RbzBNVFVnTXpBZ05USTFJREUxSURFeU5DQXRNVGdnTWpjMklDMDFOaUF6TnprZ0xUazJJRFV3SUMweE9TQTVNeUF0TXpVZ09UVWdMVE0xSURJZ01DQTBJRFV5SURRZ01URTFDbXd3SURFeE5DQXRPRGNnTWpjZ1l5MHlNamdnTmprZ0xUUTJPU0E1TnlBdE56STRJRGd5ZWlJdlBnbzhjR0YwYUNCa1BTSk5OVGt4SURFMk16TWdZeTB6TWpFZ0xUZzFNU0F0TlRnMklDMHhOVFUwSUMwMU9Ea2dMVEUxTmpFZ0xUTWdMVGtnTWpRZ0xURXlJREV4TmlBdE1USUtiREV5TUNBd0lEWXdJREUyTWlCak16TWdPVEFnTVRFeklETXdPQ0F4TnpnZ05EZzJJR3d4TVRrZ016SXlJRFkzTlNBd0lEWTNOU0F3SURFd05DQXRNamd5SUdNMU55QXRNVFUyQ2pFek55QXRNemMwSURFM09DQXRORGcySUd3M05TQXRNakF5SURFeE9TQXdJR000T1NBd0lERXhPU0F6SURFeE9DQXhNeUF3SURZZ0xUSTJNQ0EzTURjZ0xUVTNOeUF4TlRVM0Ntd3ROVGMzSURFMU5EVWdMVEV3TlNBeklDMHhNRFlnTXlBdE5UZ3pJQzB4TlRRNGVpSXZQZ284Y0dGMGFDQmtQU0pOTmpRd05TQXpNVFl6SUdNdE16Z2dMVGs1SUMweE1UVTVJQzB6TURjeUlDMHhNVFl6SUMwek1EZzJJQzAwSUMweE5TQTJJQzB4TnlBeE1UUWdMVEUzQ213eE1Ua2dNQ0F4TURRZ01qZ3pJR00xTnlBeE5UVWdNVE0zSURNM015QXhOemdnTkRnMUlHdzNOU0F5TURJZ05qYzJJQzB5SURZM05pQXRNeUF4TnpZZ0xUUTRNQ0F4TnpjS0xUUTRNQ0F4TWpJZ0xUTWdNVEl6SUMweklDMDRJREl6SUdNdE5DQXhNaUF0TWpZMElEY3hNeUF0TlRjNUlERTFOVGdnYkMwMU56TWdNVFV6TlNBdE1UQTFJRE1nWXkwNU15QXlDaTB4TURVZ01TQXRNVEV5SUMweE5Yb2lMejRLUEM5blBnbzhMM04yWno0Syk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xufVxuXG5Aa2V5ZnJhbWVzIGNvaW4tc3BpbntcbiAgICAwJSAgIHsgdHJhbnNmb3JtOnJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWSgwJSk7fVxuICAgIDQ5JSAgeyB0cmFuc2Zvcm06cm90YXRlWSgxNzlkZWcpIHRyYW5zbGF0ZVkoMjAlKTt9XG4gICAgNTAlICB7IHRyYW5zZm9ybTpyb3RhdGVZKDE4MWRlZykgdHJhbnNsYXRlWSgyMCUpO31cbiAgICAxMDAlIHsgdHJhbnNmb3JtOnJvdGF0ZVkoMzU5ZGVnKSB0cmFuc2xhdGVZKDAlKTt9XG59XG5cbi5zaGFkb3d7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgYW5pbWF0aW9uOmZsb2F0aW5nLXNoYWRvdyAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuQGtleWZyYW1lcyBmbG9hdGluZy1zaGFkb3d7XG4gICAgMCUgIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMS4wKX1cbiAgICA0NSUgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjMpO31cbiAgICA1NSUgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjMpO31cbiAgICAxMDAleyB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjApO31cbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5hcHAsXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5hcHAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hcHAge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbioge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmNlbnRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9hZGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMS41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtc2l6ZTogMTBtbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm91bmNlLFxuLmJvdW5jZSAuY2lyY2xlLFxuLmJvdW5jZSAuY2lyY2xlIC5pbm5lciB7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogNGVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uYm91bmNlIC5jaXJjbGUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogc2stc2NhbGVvdXQgMC44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uOiBzay1zY2FsZW91dCAwLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uYm91bmNlIC5jaXJjbGUgLmlubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgfVxuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgc2stc2NhbGVvdXQge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIH1cbiAgMjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi5uby1zY3JpcHQge1xuICBoZWlnaHQ6IDEwZW07XG4gIHdpZHRoOiAxNWVtO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlci1yYWRpdXM6IDAuMWVtO1xuICBib3gtc2hhZG93OiAwIDAuMWVtIDAuMmVtIDAuMWVtIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLm5vLXNjcmlwdCBpbWcge1xuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgaGVpZ2h0OiA2ZW07XG4gIHdpZHRoOiA2ZW07XG59XG5cbi5uby1zY3JpcHQgLnRpdGxlIHtcbiAgcGFkZGluZzogMCAxZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLm5vLXNjcmlwdCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hY2EtY29pbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiA0ZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW46IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQzZDVlO1xuICBhbmltYXRpb246IGNvaW4tc3BpbiAycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmFjYS1sb2dvIHtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAzZW07XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQnpkR0Z1WkdGc2IyNWxQU0p1YnlJL1BnbzhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREl3TURFd09UQTBMeTlGVGlJS0lDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OVVVaTh5TURBeEwxSkZReTFUVmtjdE1qQXdNVEE1TURRdlJGUkVMM04yWnpFd0xtUjBaQ0krQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR3SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpQ2lCM2FXUjBhRDBpTnpjNUxqQXdNREF3TUhCMElpQm9aV2xuYUhROUlqTXlOQzR3TURBd01EQndkQ0lnZG1sbGQwSnZlRDBpTUNBd0lEYzNPUzR3TURBd01EQWdNekkwTGpBd01EQXdNQ0lLSUhCeVpYTmxjblpsUVhOd1pXTjBVbUYwYVc4OUluaE5hV1JaVFdsa0lHMWxaWFFpUGdvOGJXVjBZV1JoZEdFK0NrTnlaV0YwWldRZ1lua2djRzkwY21GalpTQXhMakUwTENCM2NtbDBkR1Z1SUdKNUlGQmxkR1Z5SUZObGJHbHVaMlZ5SURJd01ERXRNakF4TndvOEwyMWxkR0ZrWVhSaFBnbzhaeUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnd0xqQXdNREF3TUN3ek1qUXVNREF3TURBd0tTQnpZMkZzWlNnd0xqRXdNREF3TUN3dE1DNHhNREF3TURBcElncG1hV3hzUFNJalptWm1JaUJ6ZEhKdmEyVTlJbTV2Ym1VaVBnbzhjR0YwYUNCa1BTSk5OREF3TlNBek1qSTRJR010TkRRM0lDMHlOU0F0T0RNNUlDMHlNelVnTFRFeE1Ea2dMVFU1TmlBdE16RTVJQzAwTWpZZ0xUUXhNU0F0TVRFME5Rb3RNakUySUMweE5qazNJREUyTnlBdE5EY3hJRFUwT1NBdE9EQXpJREV3TXpjZ0xUa3dNaUF4TVRFZ0xUSXpJRFV3TlNBdE1qWWdOakl6SUMwMUlERXlOeUF5TXlBeU9EQWdOaklLTXpneUlEazVJR3c1T0NBek5TQXdJREV3TlNCak1DQTVOaUF0TWlBeE1EVWdMVEUzSURFd01DQXRNVEFnTFRNZ0xUVTNJQzB5TWlBdE1UQTJJQzAwTVNBdE1Ua3pJQzA0TUFvdE16Y3pJQzB4TVRFZ0xUWXpOeUF0TVRFeElDMHlOelFnTUNBdE5EQXhJREkzSUMwMU9UY2dNVEk1SUMweE1UWWdOakFnTFRFNU9TQXhNalFnTFRNd015QXlNek1nTFRFM01nb3hOemdnTFRJM05pQXpPRGdnTFRNeU5TQTJOVFlnTFRNMklERTVOU0F0TXpZZ05UQTRJREFnTnpBeklERXdNU0ExTlRVZ05EWTJJRGsxTWlBNU9ESWdNVEEzTUNBNU15QXlNUW8wTVRVZ016QWdOVEkxSURFMUlERXlOQ0F0TVRnZ01qYzJJQzAxTmlBek56a2dMVGsySURVd0lDMHhPU0E1TXlBdE16VWdPVFVnTFRNMUlESWdNQ0EwSURVeUlEUWdNVEUxQ213d0lERXhOQ0F0T0RjZ01qY2dZeTB5TWpnZ05qa2dMVFEyT1NBNU55QXROekk0SURneWVpSXZQZ284Y0dGMGFDQmtQU0pOTlRreElERTJNek1nWXkwek1qRWdMVGcxTVNBdE5UZzJJQzB4TlRVMElDMDFPRGtnTFRFMU5qRWdMVE1nTFRrZ01qUWdMVEV5SURFeE5pQXRNVElLYkRFeU1DQXdJRFl3SURFMk1pQmpNek1nT1RBZ01URXpJRE13T0NBeE56Z2dORGcySUd3eE1Ua2dNekl5SURZM05TQXdJRFkzTlNBd0lERXdOQ0F0TWpneUlHTTFOeUF0TVRVMkNqRXpOeUF0TXpjMElERTNPQ0F0TkRnMklHdzNOU0F0TWpBeUlERXhPU0F3SUdNNE9TQXdJREV4T1NBeklERXhPQ0F4TXlBd0lEWWdMVEkyTUNBM01EY2dMVFUzTnlBeE5UVTNDbXd0TlRjM0lERTFORFVnTFRFd05TQXpJQzB4TURZZ015QXROVGd6SUMweE5UUTRlaUl2UGdvOGNHRjBhQ0JrUFNKTk5qUXdOU0F6TVRZeklHTXRNemdnTFRrNUlDMHhNVFU1SUMwek1EY3lJQzB4TVRZeklDMHpNRGcySUMwMElDMHhOU0EySUMweE55QXhNVFFnTFRFM0Ntd3hNVGtnTUNBeE1EUWdNamd6SUdNMU55QXhOVFVnTVRNM0lETTNNeUF4TnpnZ05EZzFJR3czTlNBeU1ESWdOamMySUMweUlEWTNOaUF0TXlBeE56WWdMVFE0TUNBeE56Y0tMVFE0TUNBeE1qSWdMVE1nTVRJeklDMHpJQzA0SURJeklHTXROQ0F4TWlBdE1qWTBJRGN4TXlBdE5UYzVJREUxTlRnZ2JDMDFOek1nTVRVek5TQXRNVEExSURNZ1l5MDVNeUF5Q2kweE1EVWdNU0F0TVRFeUlDMHhOWG9pTHo0S1BDOW5QZ284TDNOMlp6NEspO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuQGtleWZyYW1lcyBjb2luLXNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpIHRyYW5zbGF0ZVkoMCUpO1xuICB9XG4gIDQ5JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE3OWRlZykgdHJhbnNsYXRlWSgyMCUpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MWRlZykgdHJhbnNsYXRlWSgyMCUpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNTlkZWcpIHRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG4uc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgYW5pbWF0aW9uOiBmbG9hdGluZy1zaGFkb3cgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG5Aa2V5ZnJhbWVzIGZsb2F0aW5nLXNoYWRvdyB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMSk7XG4gIH1cbiAgNDUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMS4zKTtcbiAgfVxuICA1NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxLjMpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgxKTtcbiAgfVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--13-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/mckinsey-bookings-ui/mckinsey-bookings-ui/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es5.js.map