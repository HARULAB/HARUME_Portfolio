import{r as a}from"./index.BmW6Ki2V.js";var m={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c;function v(){if(c)return n;c=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(u,e,t){var i=null;if(t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),"key"in e){t={};for(var d in e)d!=="key"&&(t[d]=e[d])}else t=e;return e=t.ref,{$$typeof:o,type:u,key:i,ref:e!==void 0?e:null,props:t}}return n.Fragment=r,n.jsx=s,n.jsxs=s,n}var l;function h(){return l||(l=1,m.exports=v()),m.exports}var x=h();const f=a.createContext(),E=({children:o})=>{const[r,s]=a.useState("light");a.useEffect(()=>{const e=localStorage.getItem("theme");e?s(e):window.matchMedia("(prefers-color-scheme: dark)").matches&&s("dark")},[]),a.useEffect(()=>{r==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("theme",r)},[r]);const u=()=>{s(e=>e==="light"?"dark":"light")};return x.jsx(f.Provider,{value:{theme:r,toggleTheme:u},children:o})};function k({children:o}){return x.jsx(E,{children:o})}export{k as P,x as j};
