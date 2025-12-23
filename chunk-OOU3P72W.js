import{a as l}from"./chunk-HLPWE7OU.js";import{Eb as f,Mb as m,ab as a,bb as o,gb as d,lb as s,tb as c,wa as r,xb as p}from"./chunk-UQCTGJD2.js";function g(n,t){if(n&1&&f(0,"div",0),n&2){let e=m();c("id","ads-"+e.adConfig.key)}}var C=class n{constructor(t,e){this.renderer=t;this.el=e}adConfig;ngAfterViewInit(){if(!this.adConfig||!l.production)return;let t=document.createElement("script");t.type="text/javascript",t.innerHTML=`
       atOptions = {
         'key' : '${this.adConfig.key}',
         'format' : 'iframe',
         'height' : ${this.adConfig.height},
         'width' : ${this.adConfig.width},
         'params' : {}
       };
     `;let e=document.createElement("script");e.type="text/javascript",e.src=`//handhighlight.com/${this.adConfig.key}/invoke.js`,e.async=!0;let i=this.el.nativeElement.querySelector(`#ads-${this.adConfig.key}`);i.appendChild(t),i.appendChild(e)}ngAfterViewInit1(){}static \u0275fac=function(e){return new(e||n)(o(a),o(r))};static \u0275cmp=d({type:n,selectors:[["adsterra-ad"]],inputs:{adConfig:"adConfig"},decls:1,vars:1,consts:[[3,"id"]],template:function(e,i){e&1&&s(0,g,1,1,"div",0),e&2&&p(i.adConfig.key?0:-1)},encapsulation:2})};export{C as a};
