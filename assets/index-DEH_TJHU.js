var l=Object.defineProperty;var u=(r,e,s)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var i=(r,e,s)=>(u(r,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}})();class d{constructor(e){i(this,"children",[]);i(this,"_parent",null);i(this,"_context");this._context=e}get parent(){return this._parent}set parent(e){this._parent!==e&&(this._parent=e,e==null||e.appendChild(this))}appendChild(e){this.children.indexOf(e)===-1&&(this.children.push(e),e.parent=this)}removeChild(e){const s=this.children.indexOf(e);s!==-1&&(this.children.splice(s,1),e.parent=null)}resize(e,s){console.log("resize",e,s)}render(){console.log("render")}}class h{constructor(){i(this,"datasets",[])}}class p{constructor(e,s){i(this,"root",new d(this));i(this,"data");i(this,"container");i(this,"resizeObserver");this.container=e,this.resizeObserver=new ResizeObserver(o=>{this.root.resize(o[0].contentRect.width,o[0].contentRect.height)}),this.resizeObserver.observe(this.container),this.data=new h}destroy(){this.resizeObserver.disconnect()}}const a=[{year:2010,count:10},{year:2011,count:20},{year:2012,count:15},{year:2013,count:25},{year:2014,count:22},{year:2015,count:30},{year:2016,count:28}],f=document.getElementsByClassName("container")[0],y=new p(f,{type:"line",data:{labels:a.map(r=>r.year),datasets:[{label:"Acquisitions by year",data:a.map(r=>r.count)}]}});console.log(y);