import { defineComponent, withAsyncContext, mergeProps, unref, computed, toValue, reactive, getCurrentInstance, onServerPrefetch, toRef, isRef, ref, shallowRef, nextTick, useSSRContext, createElementBlock, provide, cloneVNode, h } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc, f as fetchDefaults, b as useRuntimeConfig, u as useNuxtApp, a as asyncDataDefaults, c as createError } from './server.mjs';
import { u as useHead } from './composables-DMi9AjS0.mjs';
import { z as hash } from '../_/nitro.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

//#region src/index.ts
const DEBOUNCE_DEFAULTS = { trailing: true };
/**
Debounce functions
@param fn - Promise-returning/async function to debounce.
@param wait - Milliseconds to wait before calling `fn`. Default value is 25ms
@returns A function that delays calling `fn` until after `wait` milliseconds have elapsed since the last time it was called.
@example
```
import { debounce } from 'perfect-debounce';
const expensiveCall = async input => input;
const debouncedFn = debounce(expensiveCall, 200);
for (const number of [1, 2, 3]) {
console.log(await debouncedFn(number));
}
//=> 1
//=> 2
//=> 3
```
*/
function debounce(fn, wait = 25, options = {}) {
	options = {
		...DEBOUNCE_DEFAULTS,
		...options
	};
	if (!Number.isFinite(wait)) throw new TypeError("Expected `wait` to be a finite number");
	let leadingValue;
	let timeout;
	let resolveList = [];
	let currentPromise;
	let trailingArgs;
	const applyFn = (_this, args) => {
		currentPromise = _applyPromised(fn, _this, args);
		currentPromise.finally(() => {
			currentPromise = null;
			if (options.trailing && trailingArgs && !timeout) {
				const promise = applyFn(_this, trailingArgs);
				trailingArgs = null;
				return promise;
			}
		});
		return currentPromise;
	};
	const debounced = function(...args) {
		if (options.trailing) trailingArgs = args;
		if (currentPromise) return currentPromise;
		return new Promise((resolve) => {
			const shouldCallNow = !timeout && options.leading;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				const promise = options.leading ? leadingValue : applyFn(this, args);
				trailingArgs = null;
				for (const _resolve of resolveList) _resolve(promise);
				resolveList = [];
			}, wait);
			if (shouldCallNow) {
				leadingValue = applyFn(this, args);
				resolve(leadingValue);
			} else resolveList.push(resolve);
		});
	};
	const _clearTimeout = (timer) => {
		if (timer) {
			clearTimeout(timer);
			timeout = null;
		}
	};
	debounced.isPending = () => !!timeout;
	debounced.cancel = () => {
		_clearTimeout(timeout);
		resolveList = [];
		trailingArgs = null;
	};
	debounced.flush = () => {
		_clearTimeout(timeout);
		if (!trailingArgs || currentPromise) return;
		const args = trailingArgs;
		trailingArgs = null;
		return applyFn(this, args);
	};
	return debounced;
}
async function _applyPromised(fn, _this, args) {
	return await fn.apply(_this, args);
}

var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var shared_cjs_prod = {};
var hasRequiredShared_cjs_prod;
function requireShared_cjs_prod() {
  if (hasRequiredShared_cjs_prod) return shared_cjs_prod;
  hasRequiredShared_cjs_prod = 1;
  Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
  // @__NO_SIDE_EFFECTS__
  function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(",")) map[key] = 1;
    return (val) => val in map;
  }
  const EMPTY_OBJ = {};
  const EMPTY_ARR = [];
  const NOOP = () => {
  };
  const NO = () => false;
  const isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
  (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
  const isModelListener = (key) => key.startsWith("onUpdate:");
  const extend = Object.assign;
  const remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const isArray = Array.isArray;
  const isMap = (val) => toTypeString(val) === "[object Map]";
  const isSet = (val) => toTypeString(val) === "[object Set]";
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isSymbol = (val) => typeof val === "symbol";
  const isObject = (val) => val !== null && typeof val === "object";
  const isPromise = (val) => {
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
  };
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  const isReservedProp = /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  const isBuiltInDirective = /* @__PURE__ */ makeMap(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  );
  const cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return ((str) => {
      const hit = cache[str];
      return hit || (cache[str] = fn(str));
    });
  };
  const camelizeRE = /-\w/g;
  const camelize = cacheStringFunction(
    (str) => {
      return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
    }
  );
  const hyphenateRE = /\B([A-Z])/g;
  const hyphenate = cacheStringFunction(
    (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
  );
  const capitalize = cacheStringFunction((str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  });
  const toHandlerKey = cacheStringFunction(
    (str) => {
      const s = str ? `on${capitalize(str)}` : ``;
      return s;
    }
  );
  const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  const invokeArrayFns = (fns, ...arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](...arg);
    }
  };
  const def = (obj, key, value, writable = false) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value
    });
  };
  const looseToNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  const toNumber = (val) => {
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
  };
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
  };
  const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
  function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
  }
  function genCacheKey(source, options) {
    return source + JSON.stringify(
      options,
      (_, val) => typeof val === "function" ? val.toString() : val
    );
  }
  const PatchFlags = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "CACHED": -1,
    "-1": "CACHED",
    "BAIL": -2,
    "-2": "BAIL"
  };
  const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `CACHED`,
    [-2]: `BAIL`
  };
  const ShapeFlags = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
  };
  const SlotFlags = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
  };
  const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
  };
  const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
  const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
  const isGloballyWhitelisted = isGloballyAllowed;
  const range = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    start = Math.max(0, Math.min(start, source.length));
    end = Math.max(0, Math.min(end, source.length));
    if (start > end) return "";
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
    lines = lines.filter((_, idx) => idx % 2 === 0);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
      if (count >= start) {
        for (let j = i - range; j <= i + range || end > count; j++) {
          if (j < 0 || j >= lines.length) continue;
          const line = j + 1;
          res.push(
            `${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`
          );
          const lineLength = lines[j].length;
          const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
          if (j === i) {
            const pad = start - (count - (lineLength + newLineSeqLength));
            const length = Math.max(
              1,
              end > count ? lineLength - pad : end - start
            );
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + newLineSeqLength;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value) || isObject(value)) {
      return value;
    }
  }
  const listDelimiterRE = /;(?![^(]*\))/g;
  const propertyDelimiterRE = /:([^]+)/;
  const styleCommentRE = /\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function stringifyStyle(styles) {
    if (!styles) return "";
    if (isString(styles)) return styles;
    let ret = "";
    for (const key in styles) {
      const value = styles[key];
      if (isString(value) || typeof value === "number") {
        const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
        ret += `${normalizedKey}:${value};`;
      }
    }
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (style) {
      props.style = normalizeStyle(style);
    }
    return props;
  }
  const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
  const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
  const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
  const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
  const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  const isBooleanAttr = /* @__PURE__ */ makeMap(
    specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
  );
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
  const attrValidationCache = {};
  function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
      return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
      console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
  }
  const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
  };
  const isKnownHtmlAttr = /* @__PURE__ */ makeMap(
    `accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`
  );
  const isKnownSvgAttr = /* @__PURE__ */ makeMap(
    `xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`
  );
  const isKnownMathMLAttr = /* @__PURE__ */ makeMap(
    `accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`
  );
  function isRenderableAttrValue(value) {
    if (value == null) {
      return false;
    }
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
  }
  const escapeRE = /["'&<>]/;
  function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
      return str;
    }
    let html = "";
    let escaped;
    let index2;
    let lastIndex = 0;
    for (index2 = match.index; index2 < str.length; index2++) {
      switch (str.charCodeAt(index2)) {
        case 34:
          escaped = "&quot;";
          break;
        case 38:
          escaped = "&amp;";
          break;
        case 39:
          escaped = "&#39;";
          break;
        case 60:
          escaped = "&lt;";
          break;
        case 62:
          escaped = "&gt;";
          break;
        default:
          continue;
      }
      if (lastIndex !== index2) {
        html += str.slice(lastIndex, index2);
      }
      lastIndex = index2 + 1;
      html += escaped;
    }
    return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
  }
  const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
  function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
  }
  const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
  function getEscapedCssVarName(key, doubleEscape) {
    return key.replace(
      cssVarNameEscapeSymbolsRE,
      (s) => doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`
    );
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
      return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  const isRef2 = (val) => {
    return !!(val && val["__v_isRef"] === true);
  };
  const toDisplayString = (val) => {
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef2(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
  };
  const replacer = (_key, val) => {
    if (isRef2(val)) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce(
          (entries, [key, val2], i) => {
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
          },
          {}
        )
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
      };
    } else if (isSymbol(val)) {
      return stringifySymbol(val);
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  const stringifySymbol = (v, i = "") => {
    var _a;
    return (
      // Symbol.description in es2019+ so we need to cast here to pass
      // the lib: es2016 check
      isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
    );
  };
  function normalizeCssVarValue(value) {
    if (value == null) {
      return "initial";
    }
    if (typeof value === "string") {
      return value === "" ? " " : value;
    }
    return String(value);
  }
  shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
  shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
  shared_cjs_prod.NO = NO;
  shared_cjs_prod.NOOP = NOOP;
  shared_cjs_prod.PatchFlagNames = PatchFlagNames;
  shared_cjs_prod.PatchFlags = PatchFlags;
  shared_cjs_prod.ShapeFlags = ShapeFlags;
  shared_cjs_prod.SlotFlags = SlotFlags;
  shared_cjs_prod.camelize = camelize;
  shared_cjs_prod.capitalize = capitalize;
  shared_cjs_prod.cssVarNameEscapeSymbolsRE = cssVarNameEscapeSymbolsRE;
  shared_cjs_prod.def = def;
  shared_cjs_prod.escapeHtml = escapeHtml;
  shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
  shared_cjs_prod.extend = extend;
  shared_cjs_prod.genCacheKey = genCacheKey;
  shared_cjs_prod.genPropsAccessExp = genPropsAccessExp;
  shared_cjs_prod.generateCodeFrame = generateCodeFrame;
  shared_cjs_prod.getEscapedCssVarName = getEscapedCssVarName;
  shared_cjs_prod.getGlobalThis = getGlobalThis;
  shared_cjs_prod.hasChanged = hasChanged;
  shared_cjs_prod.hasOwn = hasOwn;
  shared_cjs_prod.hyphenate = hyphenate;
  shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
  shared_cjs_prod.invokeArrayFns = invokeArrayFns;
  shared_cjs_prod.isArray = isArray;
  shared_cjs_prod.isBooleanAttr = isBooleanAttr;
  shared_cjs_prod.isBuiltInDirective = isBuiltInDirective;
  shared_cjs_prod.isDate = isDate;
  shared_cjs_prod.isFunction = isFunction;
  shared_cjs_prod.isGloballyAllowed = isGloballyAllowed;
  shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
  shared_cjs_prod.isHTMLTag = isHTMLTag;
  shared_cjs_prod.isIntegerKey = isIntegerKey;
  shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
  shared_cjs_prod.isKnownMathMLAttr = isKnownMathMLAttr;
  shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
  shared_cjs_prod.isMap = isMap;
  shared_cjs_prod.isMathMLTag = isMathMLTag;
  shared_cjs_prod.isModelListener = isModelListener;
  shared_cjs_prod.isObject = isObject;
  shared_cjs_prod.isOn = isOn;
  shared_cjs_prod.isPlainObject = isPlainObject;
  shared_cjs_prod.isPromise = isPromise;
  shared_cjs_prod.isRegExp = isRegExp;
  shared_cjs_prod.isRenderableAttrValue = isRenderableAttrValue;
  shared_cjs_prod.isReservedProp = isReservedProp;
  shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
  shared_cjs_prod.isSVGTag = isSVGTag;
  shared_cjs_prod.isSet = isSet;
  shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
  shared_cjs_prod.isString = isString;
  shared_cjs_prod.isSymbol = isSymbol;
  shared_cjs_prod.isVoidTag = isVoidTag;
  shared_cjs_prod.looseEqual = looseEqual;
  shared_cjs_prod.looseIndexOf = looseIndexOf;
  shared_cjs_prod.looseToNumber = looseToNumber;
  shared_cjs_prod.makeMap = makeMap;
  shared_cjs_prod.normalizeClass = normalizeClass;
  shared_cjs_prod.normalizeCssVarValue = normalizeCssVarValue;
  shared_cjs_prod.normalizeProps = normalizeProps;
  shared_cjs_prod.normalizeStyle = normalizeStyle;
  shared_cjs_prod.objectToString = objectToString;
  shared_cjs_prod.parseStringStyle = parseStringStyle;
  shared_cjs_prod.propsToAttrMap = propsToAttrMap;
  shared_cjs_prod.remove = remove;
  shared_cjs_prod.slotFlagsText = slotFlagsText;
  shared_cjs_prod.stringifyStyle = stringifyStyle;
  shared_cjs_prod.toDisplayString = toDisplayString;
  shared_cjs_prod.toHandlerKey = toHandlerKey;
  shared_cjs_prod.toNumber = toNumber;
  shared_cjs_prod.toRawType = toRawType;
  shared_cjs_prod.toTypeString = toTypeString;
  return shared_cjs_prod;
}
var shared_cjs_prodExports = /* @__PURE__ */ requireShared_cjs_prod();
const _sfc_main$1 = {
  __name: "NuxtWelcome",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    title: {
      type: String,
      default: "Welcome to Nuxt!"
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.title}`,
      script: [
        {
          innerHTML: `!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)}).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?r.credentials="include":"anonymous"===e.crossOrigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();`
        }
      ],
      style: [
        {
          innerHTML: `*,:after,:before{border-color:var(--un-default-border-color,#e5e7eb);border-style:solid;border-width:0;box-sizing:border-box}:after,:before{--un-content:""}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}h1,h2{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}h1,h2,p,ul{margin:0}ul{list-style:none;padding:0}svg{display:block;vertical-align:middle}*,:after,:before{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 transparent;--un-ring-shadow:0 0 transparent;--un-shadow-inset: ;--un-shadow:0 0 transparent;--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: }`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "antialiased bg-white dark:bg-[#020420] dark:text-white flex flex-col items-center justify-center min-h-screen place-content-center sm:text-base text-[#020420] text-sm" }, _attrs))} data-v-36a6d8be><div class="flex flex-col mt-6 sm:mt-0" data-v-36a6d8be><h1 class="flex flex-col gap-y-4 items-center justify-center" data-v-36a6d8be><a href="https://nuxt.com?utm_source=nuxt-welcome" target="_blank" class="gap-4 inline-flex items-end" data-v-36a6d8be><svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-label="Nuxt" class="h-8 sm:h-12" viewBox="0 0 800 200" data-v-36a6d8be><path fill="#00dc82" d="M168.303 200h111.522c3.543 0 7.022-.924 10.09-2.679A20.1 20.1 0 0 0 297.3 190a19.86 19.86 0 0 0 2.7-10.001 19.86 19.86 0 0 0-2.709-9.998L222.396 41.429a20.1 20.1 0 0 0-7.384-7.32 20.3 20.3 0 0 0-10.088-2.679c-3.541 0-7.02.925-10.087 2.68a20.1 20.1 0 0 0-7.384 7.32l-19.15 32.896L130.86 9.998a20.1 20.1 0 0 0-7.387-7.32A20.3 20.3 0 0 0 113.384 0c-3.542 0-7.022.924-10.09 2.679a20.1 20.1 0 0 0-7.387 7.319L2.709 170A19.85 19.85 0 0 0 0 179.999c-.002 3.511.93 6.96 2.7 10.001a20.1 20.1 0 0 0 7.385 7.321A20.3 20.3 0 0 0 20.175 200h70.004c27.737 0 48.192-12.075 62.266-35.633l34.171-58.652 18.303-31.389 54.93 94.285h-73.233zm-79.265-31.421-48.854-.011 73.232-125.706 36.541 62.853-24.466 42.01c-9.347 15.285-19.965 20.854-36.453 20.854" data-v-36a6d8be></path><path fill="currentColor" d="M377 200a4 4 0 0 0 4-4v-93s5.244 8.286 15 25l38.707 66.961c1.789 3.119 5.084 5.039 8.649 5.039H470V50h-27a4 4 0 0 0-4 4v94l-17-30-36.588-62.98c-1.792-3.108-5.081-5.02-8.639-5.02H350v150zm299.203-56.143L710.551 92h-25.73a9.97 9.97 0 0 0-8.333 4.522L660.757 120.5l-15.731-23.978A9.97 9.97 0 0 0 636.693 92h-25.527l34.348 51.643L608.524 200h24.966a9.97 9.97 0 0 0 8.29-4.458l19.18-28.756 18.981 28.72a9.97 9.97 0 0 0 8.313 4.494h24.736zM724.598 92h19.714V60.071h28.251V92H800v24.857h-27.437V159.5c0 10.5 5.284 15.429 14.43 15.429H800V200h-16.869c-23.576 0-38.819-14.143-38.819-39.214v-43.929h-19.714zM590 92h-15c-3.489 0-6.218.145-8.5 2.523-2.282 2.246-2.5 3.63-2.5 7.066v52.486c0 8.058-.376 12.962-4 16.925-3.624 3.831-8.619 5-16 5-7.247 0-12.376-1.169-16-5-3.624-3.963-4-8.867-4-16.925v-52.486c0-3.435-.218-4.82-2.5-7.066C519.218 92.145 516.489 92 513 92h-15v62.422q0 21.006 11.676 33.292C517.594 195.905 529.103 200 544 200s26.204-4.095 34.123-12.286Q590 175.428 590 154.422z" data-v-36a6d8be></path></svg> <span class="bg-[#00DC42]/10 border border-[#00DC42]/50 font-mono font-semibold group-hover:bg-[#00DC42]/15 group-hover:border-[#00DC42] inline-block leading-none px-2 py-1 rounded sm:px-2.5 sm:py-1.5 sm:text-[14px] text-[#00DC82] text-[12px]" data-v-36a6d8be>4.3.0</span></a></h1><div class="gap-4 grid grid-cols-1 max-w-[980px] mt-6 px-4 sm:gap-6 sm:grid-cols-3 sm:mt-10 w-full" data-v-36a6d8be><div class="bg-gray-50/10 border border-[#00DC42]/50 dark:bg-white/5 flex flex-col gap-1 p-6 rounded-lg sm:col-span-2" data-v-36a6d8be><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/80 dark:text-[#00DC82] flex h-[32px] items-center justify-center rounded text-[#00DC82] w-[32px]" data-v-36a6d8be><svg xmlns="http://www.w3.org/2000/svg" class="size-[18px]" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="m228.1 121.2-143.9-88A8 8 0 0 0 72 40v176a8 8 0 0 0 12.2 6.8l143.9-88a7.9 7.9 0 0 0 0-13.6" opacity=".2" data-v-36a6d8be></path><path fill="currentColor" d="M80 232a15.5 15.5 0 0 1-7.8-2.1A15.8 15.8 0 0 1 64 216V40a15.8 15.8 0 0 1 8.2-13.9 15.5 15.5 0 0 1 16.1.3l144 87.9a16 16 0 0 1 0 27.4l-144 87.9A15.4 15.4 0 0 1 80 232m0-192v176l144-88Z" data-v-36a6d8be></path></svg></div><h2 class="font-semibold mt-1 text-base" data-v-36a6d8be>Get started</h2><p class="dark:text-gray-200 text-gray-700 text-sm" data-v-36a6d8be>Remove this welcome page by replacing <a class="bg-green-50 border border-green-600/10 dark:bg-[#020420] dark:border-white/10 dark:text-[#00DC82] font-bold font-mono p-1 rounded text-green-700" data-v-36a6d8be>&lt;NuxtWelcome/&gt;</a> in <a href="https://nuxt.com/docs/4.x/directory-structure/app" target="_blank" rel="noopener" class="bg-green-50 border border-green-600/20 dark:bg-[#020420] dark:border-white/20 dark:text-[#00DC82] font-bold font-mono hover:border-[#00DC82] p-1 rounded text-green-700" data-v-36a6d8be>app.vue</a> with your own code.</p></div><a href="https://nuxt.com/docs?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-36a6d8be><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-36a6d8be><svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M136 48v128H88V80H40V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8 8 8 0 0 1 8-8h32a8 8 0 0 1 8 8m89.9 149.6-8.3-30.9-46.4 12.5 8.3 30.9a8 8 0 0 0 9.8 5.6l30.9-8.3a8 8 0 0 0 5.7-9.8M184.5 43.1a8.1 8.1 0 0 0-9.8-5.7l-30.9 8.3a8.1 8.1 0 0 0-5.7 9.8l8.3 30.9L192.8 74Z" opacity=".2" data-v-36a6d8be></path><path fill="currentColor" d="M233.6 195.6 192.2 41a16 16 0 0 0-19.6-11.3L141.7 38l-1 .3A16 16 0 0 0 128 32H96a15.8 15.8 0 0 0-8 2.2 15.8 15.8 0 0 0-8-2.2H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h32a15.8 15.8 0 0 0 8-2.2 15.8 15.8 0 0 0 8 2.2h32a16 16 0 0 0 16-16v-99.6l27.8 103.7a16 16 0 0 0 15.5 11.9 20 20 0 0 0 4.1-.5l30.9-8.3a16 16 0 0 0 11.3-19.6M156.2 92.1l30.9-8.3 20.7 77.3-30.9 8.3Zm20.5-46.9 6.3 23.1-30.9 8.3-6.3-23.1ZM128 48v120H96V48Zm-48 0v24H48V48ZM48 208V88h32v120Zm80 0H96v-24h32zm90.2-8.3-30.9 8.3-6.3-23.2 31-8.3z" data-v-36a6d8be></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-36a6d8be></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-36a6d8be>Documentation</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-36a6d8be>We highly recommend you take a look at the Nuxt documentation to level up.</p></a></div><div class="gap-4 grid grid-cols-1 max-w-[980px] mt-4 px-4 sm:gap-6 sm:grid-cols-3 sm:mt-6 w-full" data-v-36a6d8be><a href="https://nuxt.com/modules?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-36a6d8be><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-36a6d8be><svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M64 216a8 8 0 0 1-8-8v-42.7a27.6 27.6 0 0 1-14.1 2.6A28 28 0 1 1 56 114.7V72a8 8 0 0 1 8-8h46.7a27.6 27.6 0 0 1-2.6-14.1A28 28 0 1 1 161.3 64H208a8 8 0 0 1 8 8v42.7a27.6 27.6 0 0 0-14.1-2.6 28 28 0 1 0 14.1 53.2V208a8 8 0 0 1-8 8Z" opacity=".2" data-v-36a6d8be></path><path fill="currentColor" d="M220.3 158.5a8.1 8.1 0 0 0-7.7-.4 20.2 20.2 0 0 1-23.2-4.4 20 20 0 0 1 13.1-33.6 19.6 19.6 0 0 1 10.1 1.8 8.1 8.1 0 0 0 7.7-.4 8.2 8.2 0 0 0 3.7-6.8V72a16 16 0 0 0-16-16h-36.2c.1-1.3.2-2.7.2-4a36.1 36.1 0 0 0-38.3-35.9 36 36 0 0 0-33.6 33.3 36.4 36.4 0 0 0 .1 6.6H64a16 16 0 0 0-16 16v32.2l-4-.2a35.6 35.6 0 0 0-26.2 11.4 35.3 35.3 0 0 0-9.7 26.9 36 36 0 0 0 33.3 33.6 36.4 36.4 0 0 0 6.6-.1V208a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-42.7a8.2 8.2 0 0 0-3.7-6.8M208 208H64v-42.7a8.2 8.2 0 0 0-3.7-6.8 8.1 8.1 0 0 0-7.7-.4 19.6 19.6 0 0 1-10.1 1.8 20 20 0 0 1-13.1-33.6 20.2 20.2 0 0 1 23.2-4.4 8.1 8.1 0 0 0 7.7-.4 8.2 8.2 0 0 0 3.7-6.8V72h46.7a8.2 8.2 0 0 0 6.8-3.7 8.1 8.1 0 0 0 .4-7.7 19.6 19.6 0 0 1-1.8-10.1 20 20 0 0 1 33.6-13.1 20.2 20.2 0 0 1 4.4 23.2 8.1 8.1 0 0 0 .4 7.7 8.2 8.2 0 0 0 6.8 3.7H208v32.2a36.4 36.4 0 0 0-6.6-.1 36 36 0 0 0-33.3 33.6A36.1 36.1 0 0 0 204 176l4-.2Z" data-v-36a6d8be></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-36a6d8be></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-36a6d8be>Modules</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-36a6d8be>Discover our list of modules to supercharge your Nuxt project.</p></a> <a href="https://nuxt.com/docs/4.x/examples?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-36a6d8be><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-36a6d8be><svg xmlns="http://www.w3.org/2000/svg" class="size-5" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M224 56v144a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8" opacity=".2" data-v-36a6d8be></path><path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m0 160H40V56h176zM80 84a12 12 0 1 1-12-12 12 12 0 0 1 12 12m40 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12" data-v-36a6d8be></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-36a6d8be></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-36a6d8be>Examples</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-36a6d8be>Explore different way of using Nuxt features and get inspired.</p></a> <a href="https://nuxt.com/deploy?utm_source=nuxt-welcome" target="_blank" class="bg-gray-50/10 border border-gray-200 dark:bg-white/5 dark:border-white/10 flex flex-col gap-1 group hover:border-[#00DC82] hover:dark:border-[#00DC82] p-6 relative rounded-lg transition-all" data-v-36a6d8be><div class="bg-[#00DC82]/5 border border-[#00DC82] dark:bg-[#020420] dark:border-[#00DC82]/50 dark:text-[#00DC82] flex group-hover:dark:border-[#00DC82]/80 h-[32px] items-center justify-center rounded text-[#00DC82] transition-all w-[32px]" data-v-36a6d8be><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6Zm90.5-67.9v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9Zm-45.3-45.3H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4Z" opacity=".2" data-v-36a6d8be></path><path fill="currentColor" d="M96.6 177a7.9 7.9 0 0 0-10.1 5c-6.6 19.7-27.9 25.8-40.2 27.7 1.9-12.3 8-33.6 27.7-40.2a8 8 0 1 0-5.1-15.1c-16.4 5.4-28.4 18.4-34.8 37.5a91.8 91.8 0 0 0-4.6 26.6 8 8 0 0 0 8 8 91.8 91.8 0 0 0 26.6-4.6c19.1-6.4 32.1-18.4 37.5-34.8a7.9 7.9 0 0 0-5-10.1" data-v-36a6d8be></path><path fill="currentColor" d="M227.6 41.8a15.7 15.7 0 0 0-13.4-13.4c-11.3-1.7-40.6-2.5-69.2 26.1l-9 8.9H74.7a16.2 16.2 0 0 0-11.3 4.7l-32.3 32.4a15.9 15.9 0 0 0-4 15.9 16 16 0 0 0 12.2 11.1l39.5 7.9 41.8 41.8 7.9 39.5a16 16 0 0 0 11.1 12.2 14.7 14.7 0 0 0 4.6.7 15.6 15.6 0 0 0 11.3-4.7l32.4-32.3a16.2 16.2 0 0 0 4.7-11.3V120l8.9-9c28.6-28.6 27.8-57.9 26.1-69.2M74.7 79.4H120l-39.9 39.9-37.7-7.5Zm81.6-13.6c7.8-7.8 28.8-25.6 55.5-21.6 4 26.7-13.8 47.7-21.6 55.5L128 161.9 94.1 128Zm20.3 115.5-32.4 32.3-7.5-37.7 39.9-39.9Z" data-v-36a6d8be></path></svg></div> <svg xmlns="http://www.w3.org/2000/svg" class="absolute dark:text-white/40 group-hover:size-5 group-hover:text-[#00DC82] right-4 size-4 text-[#020420]/20 top-4 transition-all" viewBox="0 0 256 256" data-v-36a6d8be><path fill="currentColor" d="M200 64v104a8 8 0 0 1-16 0V83.3L69.7 197.7a8.2 8.2 0 0 1-11.4 0 8.1 8.1 0 0 1 0-11.4L172.7 72H88a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8" data-v-36a6d8be></path></svg> <h2 class="font-semibold mt-1 text-base" data-v-36a6d8be>Deploy</h2> <p class="dark:text-gray-200 group-hover:dark:text-gray-100 text-gray-700 text-sm" data-v-36a6d8be>Learn how to deploy your Nuxt project on different providers.</p></a></div><footer class="lg:px-8 mb-6 mt-6 mx-auto px-4 sm:mb-0 sm:mt-10 sm:px-6 w-full" data-v-36a6d8be><ul class="flex gap-4 items-center justify-center" data-v-36a6d8be><li data-v-36a6d8be><a href="https://go.nuxt.com/github" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-36a6d8be><span class="sr-only" data-v-36a6d8be>Nuxt GitHub Repository</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-36a6d8be><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" data-v-36a6d8be></path></svg></a></li><li data-v-36a6d8be><a href="https://go.nuxt.com/discord" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-36a6d8be><span class="sr-only" data-v-36a6d8be>Nuxt Discord Server</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-36a6d8be><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 13 13 0 0 0-.617-1.25.08.08 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.1.1 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.08.08 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.08.08 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13 13 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10 10 0 0 0 .372-.292.07.07 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.07.07 0 0 1 .078.01q.181.149.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.08.08 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.08.08 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03M8.02 15.33c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418" data-v-36a6d8be></path></svg></a></li><li data-v-36a6d8be><a href="https://go.nuxt.com/x" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-36a6d8be><span class="sr-only" data-v-36a6d8be>Nuxt on X</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-36a6d8be><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" data-v-36a6d8be></path></svg></a></li><li data-v-36a6d8be><a href="https://go.nuxt.com/bluesky" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-36a6d8be><span class="sr-only" data-v-36a6d8be>Nuxt Bluesky</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-36a6d8be><path fill="currentColor" d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364q.204-.03.415-.056-.207.033-.415.056c-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a9 9 0 0 1-.415-.056q.21.026.415.056c2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8" data-v-36a6d8be></path></svg></a></li><li data-v-36a6d8be><a href="https://go.nuxt.com/linkedin" target="_blank" class="dark:hover:text-white dark:text-gray-400 focus-visible:ring-2 hover:text-[#020420] text-gray-500" data-v-36a6d8be><span class="sr-only" data-v-36a6d8be>Nuxt Linkedin</span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" data-v-36a6d8be><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" data-v-36a6d8be></path></svg></a></li></ul></footer></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/nuxt/dist/app/components/welcome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-36a6d8be"]]);
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function useRequestFetch() {
  return useRequestEvent()?.$fetch || globalThis.$fetch;
}
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function useAsyncData(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (_isAutoKeyNeeded(args[0], args[1])) {
    args.unshift(autoKey);
  }
  let [_key, _handler, options = {}] = args;
  const key = computed(() => toValue(_key));
  if (typeof key.value !== "string") {
    throw new TypeError("[nuxt] [useAsyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [useAsyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  options.server ??= true;
  options.default ??= getDefault;
  options.getCachedData ??= getDefaultCachedData;
  options.lazy ??= false;
  options.immediate ??= true;
  options.deep ??= asyncDataDefaults.deep;
  options.dedupe ??= "cancel";
  options._functionName || "useAsyncData";
  nuxtApp._asyncData[key.value];
  function createInitialFetch() {
    const initialFetchOptions = { cause: "initial", dedupe: options.dedupe };
    if (!nuxtApp._asyncData[key.value]?._init) {
      initialFetchOptions.cachedData = options.getCachedData(key.value, nuxtApp, { cause: "initial" });
      nuxtApp._asyncData[key.value] = createAsyncData(nuxtApp, key.value, _handler, options, initialFetchOptions.cachedData);
    }
    return () => nuxtApp._asyncData[key.value].execute(initialFetchOptions);
  }
  const initialFetch = createInitialFetch();
  const asyncData = nuxtApp._asyncData[key.value];
  asyncData._deps++;
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncReturn = {
    data: writableComputedRef(() => nuxtApp._asyncData[key.value]?.data),
    pending: writableComputedRef(() => nuxtApp._asyncData[key.value]?.pending),
    status: writableComputedRef(() => nuxtApp._asyncData[key.value]?.status),
    error: writableComputedRef(() => nuxtApp._asyncData[key.value]?.error),
    refresh: (...args2) => {
      if (!nuxtApp._asyncData[key.value]?._init) {
        const initialFetch2 = createInitialFetch();
        return initialFetch2();
      }
      return nuxtApp._asyncData[key.value].execute(...args2);
    },
    execute: (...args2) => asyncReturn.refresh(...args2),
    clear: () => {
      const entry = nuxtApp._asyncData[key.value];
      if (entry?._abortController) {
        try {
          entry._abortController.abort(new DOMException("AsyncData aborted by user.", "AbortError"));
        } finally {
          entry._abortController = void 0;
        }
      }
      clearNuxtDataByKey(nuxtApp, key.value);
    }
  };
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key.value]).then(() => asyncReturn);
  Object.assign(asyncDataPromise, asyncReturn);
  return asyncDataPromise;
}
function writableComputedRef(getter) {
  return computed({
    get() {
      return getter()?.value;
    },
    set(value) {
      const ref2 = getter();
      if (ref2) {
        ref2.value = value;
      }
    }
  });
}
function _isAutoKeyNeeded(keyOrFetcher, fetcher) {
  if (typeof keyOrFetcher === "string") {
    return false;
  }
  if (typeof keyOrFetcher === "object" && keyOrFetcher !== null) {
    return false;
  }
  if (typeof keyOrFetcher === "function" && typeof fetcher === "function") {
    return false;
  }
  return true;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = void 0;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = unref(nuxtApp._asyncData[key]._default());
    nuxtApp._asyncData[key].error.value = void 0;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function createAsyncData(nuxtApp, key, _handler, options, initialCachedData) {
  nuxtApp.payload._errors[key] ??= void 0;
  const hasCustomGetCachedData = options.getCachedData !== getDefaultCachedData;
  const handler = _handler ;
  const _ref = options.deep ? ref : shallowRef;
  const hasCachedData = initialCachedData !== void 0;
  const unsubRefreshAsyncData = nuxtApp.hook("app:data:refresh", async (keys) => {
    if (!keys || keys.includes(key)) {
      await asyncData.execute({ cause: "refresh:hook" });
    }
  });
  const asyncData = {
    data: _ref(hasCachedData ? initialCachedData : options.default()),
    pending: computed(() => asyncData.status.value === "pending"),
    error: toRef(nuxtApp.payload._errors, key),
    status: shallowRef("idle"),
    execute: (...args) => {
      const [_opts, newValue = void 0] = args;
      const opts = _opts && newValue === void 0 && typeof _opts === "object" ? _opts : {};
      if (nuxtApp._asyncDataPromises[key]) {
        if ((opts.dedupe ?? options.dedupe) === "defer") {
          return nuxtApp._asyncDataPromises[key];
        }
      }
      {
        const cachedData = "cachedData" in opts ? opts.cachedData : options.getCachedData(key, nuxtApp, { cause: opts.cause ?? "refresh:manual" });
        if (cachedData !== void 0) {
          nuxtApp.payload.data[key] = asyncData.data.value = cachedData;
          asyncData.error.value = void 0;
          asyncData.status.value = "success";
          return Promise.resolve(cachedData);
        }
      }
      if (asyncData._abortController) {
        asyncData._abortController.abort(new DOMException("AsyncData request cancelled by deduplication", "AbortError"));
      }
      asyncData._abortController = new AbortController();
      asyncData.status.value = "pending";
      const cleanupController = new AbortController();
      const promise = new Promise(
        (resolve, reject) => {
          try {
            const timeout = opts.timeout ?? options.timeout;
            const mergedSignal = mergeAbortSignals([asyncData._abortController?.signal, opts?.signal], cleanupController.signal, timeout);
            if (mergedSignal.aborted) {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
              return;
            }
            mergedSignal.addEventListener("abort", () => {
              const reason = mergedSignal.reason;
              reject(reason instanceof Error ? reason : new DOMException(String(reason ?? "Aborted"), "AbortError"));
            }, { once: true, signal: cleanupController.signal });
            return Promise.resolve(handler(nuxtApp, { signal: mergedSignal })).then(resolve, reject);
          } catch (err) {
            reject(err);
          }
        }
      ).then(async (_result) => {
        let result = _result;
        if (options.transform) {
          result = await options.transform(_result);
        }
        if (options.pick) {
          result = pick(result, options.pick);
        }
        nuxtApp.payload.data[key] = result;
        asyncData.data.value = result;
        asyncData.error.value = void 0;
        asyncData.status.value = "success";
      }).catch((error) => {
        if (nuxtApp._asyncDataPromises[key] && nuxtApp._asyncDataPromises[key] !== promise) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (asyncData._abortController?.signal.aborted) {
          return nuxtApp._asyncDataPromises[key];
        }
        if (typeof DOMException !== "undefined" && error instanceof DOMException && error.name === "AbortError") {
          asyncData.status.value = "idle";
          return nuxtApp._asyncDataPromises[key];
        }
        asyncData.error.value = createError(error);
        asyncData.data.value = unref(options.default());
        asyncData.status.value = "error";
      }).finally(() => {
        cleanupController.abort();
        delete nuxtApp._asyncDataPromises[key];
      });
      nuxtApp._asyncDataPromises[key] = promise;
      return nuxtApp._asyncDataPromises[key];
    },
    _execute: debounce((...args) => asyncData.execute(...args), 0, { leading: true }),
    _default: options.default,
    _deps: 0,
    _init: true,
    _hash: void 0,
    _off: () => {
      unsubRefreshAsyncData();
      if (nuxtApp._asyncData[key]?._init) {
        nuxtApp._asyncData[key]._init = false;
      }
      if (!hasCustomGetCachedData) {
        nextTick(() => {
          if (!nuxtApp._asyncData[key]?._init) {
            clearNuxtDataByKey(nuxtApp, key);
            asyncData.execute = () => Promise.resolve();
          }
        });
      }
    }
  };
  return asyncData;
}
const getDefault = () => void 0;
const getDefaultCachedData = (key, nuxtApp, ctx) => {
  if (nuxtApp.isHydrating) {
    return nuxtApp.payload.data[key];
  }
  if (ctx.cause !== "refresh:manual" && ctx.cause !== "refresh:hook") {
    return nuxtApp.static.data[key];
  }
};
function mergeAbortSignals(signals, cleanupSignal, timeout) {
  const list = signals.filter((s) => !!s);
  if (typeof timeout === "number" && timeout >= 0) {
    const timeoutSignal = AbortSignal.timeout?.(timeout);
    if (timeoutSignal) {
      list.push(timeoutSignal);
    }
  }
  if (AbortSignal.any) {
    return AbortSignal.any(list);
  }
  const controller = new AbortController();
  for (const sig of list) {
    if (sig.aborted) {
      const reason = sig.reason ?? new DOMException("Aborted", "AbortError");
      try {
        controller.abort(reason);
      } catch {
        controller.abort();
      }
      return controller.signal;
    }
  }
  const onAbort = () => {
    const abortedSignal = list.find((s) => s.aborted);
    const reason = abortedSignal?.reason ?? new DOMException("Aborted", "AbortError");
    try {
      controller.abort(reason);
    } catch {
      controller.abort();
    }
  };
  for (const sig of list) {
    sig.addEventListener?.("abort", onAbort, { once: true, signal: cleanupSignal });
  }
  return controller.signal;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const key = computed(() => toValue(opts.key) || "$f" + hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]));
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch: watchSources,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    timeout,
    watch: watchSources === false ? [] : [...watchSources || [], _fetchOptions]
  };
  const asyncData = useAsyncData(watchSources === false ? key.value : key, (_, { signal }) => {
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  const segments = [
    toValue(opts.method)?.toUpperCase() || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.query || opts.params]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  if (opts.body) {
    const value = toValue(opts.body);
    if (!value) {
      segments.push(hash(value));
    } else if (value instanceof ArrayBuffer) {
      segments.push(hash(Object.fromEntries([...new Uint8Array(value).entries()].map(([k, v]) => [k, v.toString()]))));
    } else if (value instanceof FormData) {
      const obj = {};
      for (const entry of value.entries()) {
        const [key, val] = entry;
        obj[key] = val instanceof File ? val.name : val;
      }
      segments.push(hash(obj));
    } else if (shared_cjs_prodExports.isPlainObject(value)) {
      segments.push(hash(reactive(value)));
    } else {
      try {
        segments.push(hash(value));
      } catch {
        console.warn("[useFetch] Failed to hash body", value);
      }
    }
  }
  return segments;
}
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const useTime = () => {
  return useState("time", () => (/* @__PURE__ */ new Date()).toLocaleTimeString());
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "/api/hello",
      "$6vU0cswdtK"
      /* nuxt-injected */
    )), __temp = await __temp, __restore(), __temp);
    const time = useTime();
    const config = useRuntimeConfig();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtWelcome = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-1d3c7a54><h1 data-v-1d3c7a54>Welcome to Nuxt 4</h1><p data-v-1d3c7a54>This is the home page.</p><div class="card" data-v-1d3c7a54><h2 data-v-1d3c7a54>Environment Config Demo</h2><p data-v-1d3c7a54><strong data-v-1d3c7a54>Public API Base:</strong> ${ssrInterpolate(unref(config).public.apiBase)}</p><p data-v-1d3c7a54><strong data-v-1d3c7a54>Server Secret Status:</strong> ${ssrInterpolate(unref(data)?.secretConfigured ? "✅ Configured" : "❌ Missing")}</p><p data-v-1d3c7a54><strong data-v-1d3c7a54>Secret Preview:</strong> ${ssrInterpolate(unref(data)?.secretPreview)}</p></div><div class="card" data-v-1d3c7a54><h2 data-v-1d3c7a54>Server Data</h2><p data-v-1d3c7a54>Response: ${ssrInterpolate(unref(data)?.message)}</p></div><div class="card" data-v-1d3c7a54><h2 data-v-1d3c7a54>Composable Demo</h2><p data-v-1d3c7a54>Current Time: ${ssrInterpolate(unref(time))}</p></div>`);
      _push(ssrRenderComponent(_component_NuxtWelcome, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d3c7a54"]]);

export { index as default };
//# sourceMappingURL=index-Df1EdwO6.mjs.map
