import{j as e,P as ns}from"./Providers.Bu2R9sgc.js";import{r as t}from"./index.BmW6Ki2V.js";function os(){const[je,Fa]=t.useState([]),oe=t.useRef(null),ye=t.useRef(null),I=t.useRef(null),Ne=t.useRef(null),Re=t.useRef(null),we=t.useRef(null),ce=t.useRef(null),ke=t.useRef(null),de=t.useRef(null),pe=t.useRef(null),xe=t.useRef(null),Ce=t.useRef(null),Me=t.useRef(null),Le=t.useRef(null),ze=t.useRef(null),Te=t.useRef(null),Se=t.useRef(null),Ee=t.useRef(null),Ae=t.useRef(null),Ie=t.useRef(null),De=t.useRef(null),fe=t.useRef(null),Pe=t.useRef(null),Ha=t.useRef(null),Fe=t.useRef(null),He=t.useRef(null),$e=t.useRef(null),$a=t.useRef(null),Be=t.useRef(null),We=t.useRef(null),Ge=t.useRef(null),Oe=t.useRef(null),Ue=t.useRef(null),qe=t.useRef(null),Qe=t.useRef(null),Xe=t.useRef(null),Ve=t.useRef(null),Ye=t.useRef(null),Ke=t.useRef(null),_e=t.useRef(null),Je=t.useRef(null),Ze=t.useRef(null),ea=t.useRef(null),aa=t.useRef(null),sa=t.useRef(null),ta=t.useRef(null),na=t.useRef(null),la=t.useRef(null),ia=t.useRef(null),ra=t.useRef(null),oa=t.useRef(null),ca=t.useRef(null),da=t.useRef(null),F=t.useRef(null),he=t.useRef(null),p=t.useRef({img:null,w:0,h:0,pixels:null,locked:!1}).current,Ba={diag:"9つの指標で画像を数値化します。Exposure(露出)、WB(ホワイトバランス)、Tint(色かぶり)などの基本項目に加え、Clarity(明瞭度)なども判定します。",meter:"視覚的なバー表示です。Tempは左が寒色(青)、右が暖色(オレンジ)。Tintは左が緑、右がマゼンタ寄りを示します。",hue:"画像に含まれる色相(色味)の分布です。山が高いほどその色が支配的です。",wave:"Waveform (Luminance) は画像の左から右への輝度分布です。上が明るく(白)、下が暗い(黒)。露出の偏りがわかります。",vec:"Vectorscopeは色彩情報を円形にプロットします。中心が無彩色、外側ほど高彩度。肌色は左上(10-11時方向)のラインに乗るのが理想です。"},H=s=>{he.current&&(he.current.textContent=Ba[s]||"No info"),F.current&&(F.current.style.display="flex")};t.useEffect(()=>{const s=a=>a.current,k=a=>s(a)?.getContext("2d"),T=(a,r)=>{const c=s(r);c&&(c.textContent=a,a.includes("WARM")?c.style.color="#ffaa55":a.includes("COOL")?c.style.color="#55aaff":a.includes("MAG")?c.style.color="#ff55ff":a.includes("GRN")?c.style.color="#55ff55":c.style.color="#fff")},pa=a=>"#"+(16777216+(a.r<<16)+(a.g<<8)+a.b).toString(16).slice(1).toUpperCase(),G=(a,r,c)=>{const o=s(a);o&&(r<c[0]?o.textContent=c[2]:r>c[1]?o.textContent=c[3]:o.textContent="")},v=s(ye),O=a=>{a.preventDefault(),v.classList.add("drag-active")},xa=a=>{a.preventDefault(),v.classList.remove("drag-active")},fa=a=>{a.preventDefault(),v.classList.remove("drag-active"),va(a.dataTransfer.files[0])};v&&(v.addEventListener("dragenter",O),v.addEventListener("dragover",O),v.addEventListener("dragleave",xa),v.addEventListener("drop",fa));const U=s(oe),ha=a=>va(a.target.files[0]);U&&U.addEventListener("change",ha);const q=s(ke),ga=a=>s(Re).style.display=a.target.checked?"block":"none";q&&q.addEventListener("change",ga);const Q=s(de);Q&&Q.addEventListener("change",A);const X=s(pe);X&&X.addEventListener("input",A);const V=s(xe);V&&V.addEventListener("change",A);const C=s(I),Y=s(Ne),ma=a=>{p.locked||!p.pixels||ba(a.offsetX,a.offsetY)},ua=a=>{p.pixels&&(p.locked=!p.locked,p.locked||ba(a.offsetX,a.offsetY))};C&&(C.addEventListener("mousemove",ma),C.addEventListener("click",ua));function ba(a,r){if(!C||!Y)return;Y.style.left=a+"px",Y.style.top=r+"px",Y.style.borderColor=p.locked?"#f00":"rgba(255,255,255,0.8)";const c=p.w/C.offsetWidth,o=p.h/C.offsetHeight,x=Math.floor(a*c),i=(Math.floor(r*o)*p.w+x)*4;if(i<0||i>=p.pixels.length)return;const f=p.pixels[i],n=p.pixels[i+1],d=p.pixels[i+2],h="#"+((1<<24)+(f<<16)+(n<<8)+d).toString(16).slice(1),g=(.299*f+.587*n+.114*d).toFixed(0);s(Xe).style.backgroundColor=h,s(Ve).textContent=h.toUpperCase(),s(Ye).textContent=`${f}, ${n}, ${d}`,s(Ke).textContent=g}function va(a){if(!a||!a.type.startsWith("image/"))return;s(ce).style.display="flex",s(ca).textContent=(a.size/1024).toFixed(1)+" KB",s(da).textContent=a.type.split("/")[1].toUpperCase();const r=new FileReader;r.onload=c=>{const o=new Image;o.onload=()=>{p.img=o;const l=Math.min(1,1200/o.width);p.w=s(I).width=Math.floor(o.width*l),p.h=s(I).height=Math.floor(o.height*l),s(ra).textContent=o.width,s(oa).textContent=o.height,s(we).style.display="none";const i=k(I);i.drawImage(o,0,0,p.w,p.h),p.pixels=i.getImageData(0,0,p.w,p.h).data,setTimeout(()=>{Ga(),A(),s(ce).style.display="none"},50)},o.src=c.target.result},r.readAsDataURL(a)}function A(){if(!p.img)return;const a=k(I);if(!a)return;const r=p.w,c=p.h,o=s(xe).value;a.drawImage(p.img,0,0,r,c);const x=a.getImageData(0,0,r,c),l=x.data,i=s(de).checked,f=s(pe).value*2.55;for(let n=0;n<l.length;n+=4){const d=l[n],h=l[n+1],g=l[n+2],N=.299*d+.587*h+.114*g;if(o==="grayscale")l[n]=l[n+1]=l[n+2]=N;else if(o==="saturation"){const j=Math.max(d,h,g),M=Math.min(d,h,g),b=j===0?0:(j-M)/j*255;l[n]=b>128?(b-128)*2:0,l[n+1]=b>128?255-(b-128)*2:b*2,l[n+2]=b<128?255-b*2:0}i&&N>f&&o!=="saturation"&&n/4%8<4&&Math.floor(n/4/r)%8<4&&(l[n]=255,l[n+1]=0,l[n+2]=0)}a.putImageData(x,0,0)}function Ga(){const a=p.pixels;if(!a)return;const r=a.length,c=4;let o=0,x=0,l=0,i=0,f=0,n=0,d=0,h=0,g=0,N=255,j=0,M={r:0,g:0,b:0},b={r:255,g:255,b:255},S=new Int32Array(360),ya=new Int32Array(256),Na=new Int32Array(256),Ra=new Int32Array(256),K=0,wa=0;const _=k(aa),$=300,J=100;_&&_.clearRect(0,0,$,J);const Z=k(ta),L=160,E=160;Z&&Z.clearRect(0,0,L,E);const ee=k(la),B=300,ae=100;ee&&ee.clearRect(0,0,B,ae);const ka=new Uint32Array($*J),Ca=new Float32Array(L*E),Ma=new Float32Array(L*E),La=new Float32Array(L*E),za=new Uint32Array(L*E),Ta=new Uint32Array(B*ae);for(let R=0;R<r;R+=4*c){const m=a[R],u=a[R+1],y=a[R+2],w=.299*m+.587*u+.114*y;o+=w,x+=m,l+=u,i+=y,w<N&&(N=w,b={r:m,g:u,b:y}),w>j&&(j=w,M={r:m,g:u,b:y}),w>220&&K++,w<30&&wa++,w>=75&&w<=175&&(n+=m,d+=u,h+=y,g++),ya[m]++,Na[u]++,Ra[y]++;const le=Math.max(m,u,y),_a=Math.min(m,u,y),W=le-_a;let ie=0,ue=0;W!==0&&(ue=W/le,ie=(le===m?(u-y)/W:le===u?2+(y-m)/W:4+(m-u)/W)*60,ie<0&&(ie+=360)),S[Math.floor(ie)]++,f+=ue;const Ja=Math.floor(R/4%p.w/p.w*$),Za=Math.floor((1-w/255)*(J-1));ka[Za*$+Ja]++;const es=-.1687*m-.3313*u+.5*y,as=.5*m-.4187*u-.0813*y,be=Math.floor(L/2+as*.6),ve=Math.floor(E/2-es*.6);if(be>=0&&be<L&&ve>=0&&ve<E){const re=ve*L+be;Ca[re]+=m,Ma[re]+=u,La[re]+=y,za[re]++}const ss=Math.floor(w/255*(B-1)),ts=Math.floor((1-ue)*(ae-1));Ta[ts*B+ss]++}const z=r/(4*c),D=o/z,P=f/z,se=x/z,ge=l/z,te=i/z,Xa=Math.abs(D-128);s(Ae).textContent=Xa<25?"FLAT":"CRISP",s(Me).textContent=D.toFixed(0),G(Le,D,[80,175,"暗い","明るい"]);const Sa=j-N;if(s(ze).textContent=Sa.toFixed(0),G(Te,Sa,[100,220,"狭い","広い"]),s(Se).textContent=(P*100).toFixed(0)+"%",G(Ee,P*100,[10,45,"低い","高い"]),g>0){const R=(n/g).toFixed(0),m=(d/g).toFixed(0),u=(h/g).toFixed(0);s(fe).textContent=`${R},${m},${u}`}else s(fe).textContent="N/A";const ne=se-te;T(ne>8?"WARM":ne<-8?"COOL":"OK",Ie),T(ge>(se+te)/2?"GRN":"MAG",De),s($e).textContent=(K/z*100).toFixed(1)+"%";const Ea=wa/z*100;s(Fe).textContent=Ea.toFixed(1)+"%",G(He,Ea,[0,10,"","多め"]),s(We).textContent=pa(M),s(Be).textContent=pa(b);const Aa=(.299*M.r+.587*M.g+.114*M.b)/255,Ia=(.299*b.r+.587*b.g+.114*b.b)/255,Va=(Math.max(Aa,Ia)+.05)/(Math.min(Aa,Ia)+.05);s(Pe).textContent=Va.toFixed(1)+":1",s(Ge).textContent=`露出: ${D<80?"暗部寄り":D>175?"明部寄り":"適正範囲"} / ${K/z*100>2?"⚠️ ハイライト飽和あり":"ハイライト保持良好"}`,s(Ue).style.width=P*100+"%",s(Oe).textContent=(P*100).toFixed(0)+"%";let Ya=50+ne*1.5;s(qe).style.left=Math.max(0,Math.min(100,Ya))+"%";let Ka=50+(ge-(se+te)/2)*2;s(Qe).style.left=Math.max(0,Math.min(100,Ka))+"%",_&&ja(_,ka,$,J,"green"),Z&&Oa(Z,Ca,Ma,La,za,L,E),ee&&ja(ee,Ta,B,ae,"white"),Ua(k(_e),S),qa(k(Ze),ya,Na,Ra),Qa(a);let me=0,Da=0;S.forEach((R,m)=>{R>Da&&(Da=R,me=m)});const Pa=["赤","黄","緑","シアン","青","マゼンタ","赤"][Math.floor((me+30)%360/60)];s(Je).textContent=`ピーク: ${me}° (${Pa}) 付近`,s(ea).textContent=`R:${se.toFixed(0)} G:${ge.toFixed(0)} B:${te.toFixed(0)}`,s(sa).textContent=`Luminance Peak: ${j}`,s(na).textContent=`彩度平均: ${(P*100).toFixed(0)}%`,s(ia).textContent="Sat/Lum相関分布",s(Ce).textContent=`【AI分析】
ベースは${ne>10?"暖色系":"寒色系"}で、${Pa}が支配的です。露出は${D.toFixed(0)}/255で、${P>.3?"鮮やかな":"落ち着いた"}トーンでまとめられています。${K/z>.02?"ハイライトの白飛びに注意してください。":"階調は綺麗に保たれています。"}`}function ja(a,r,c,o,x){if(!a)return;const l=a.createImageData(c,o);let i=0;for(let n=0;n<r.length;n++)r[n]>i&&(i=r[n]);const f=i>0?255/Math.log(i+1):0;for(let n=0;n<r.length;n++)if(r[n]>0){const d=Math.min(255,Math.log(r[n]+1)*f*1.5),h=n*4;x==="green"?(l.data[h]=0,l.data[h+1]=255,l.data[h+2]=100):(l.data[h]=255,l.data[h+1]=255,l.data[h+2]=255),l.data[h+3]=d}a.putImageData(l,0,0)}function Oa(a,r,c,o,x,l,i){if(!a)return;const f=a.createImageData(l,i);let n=0;for(let d=0;d<x.length;d++)x[d]>n&&(n=x[d]);for(let d=0;d<x.length;d++){const h=x[d];if(h===0)continue;const g=r[d]/h,N=c[d]/h,j=o[d]/h,M=Math.min(1,Math.log(h+1)/Math.log(n+1)),b=Math.floor(M*255),S=d*4;f.data[S]=Math.round(g),f.data[S+1]=Math.round(N),f.data[S+2]=Math.round(j),f.data[S+3]=b}a.putImageData(f,0,0),a.strokeStyle="rgba(255,255,255,0.14)",a.lineWidth=1,a.beginPath(),a.moveTo(l/2,0),a.lineTo(l/2,i),a.moveTo(0,i/2),a.lineTo(l,i/2),a.stroke(),a.beginPath(),a.arc(l/2,i/2,l/2-2,0,Math.PI*2),a.stroke(),a.strokeStyle="rgba(255,200,150,0.35)",a.lineWidth=1.2,a.beginPath(),a.moveTo(l/2,i/2),a.lineTo(l/2-Math.floor(l*.22),i/2-Math.floor(i*.28)),a.stroke()}function Ua(a,r){if(!a)return;a.fillStyle="#000",a.fillRect(0,0,300,50);const c=Math.max(...r);for(let o=0;o<360;o++){a.fillStyle=`hsl(${o}, 90%, 60%)`;const x=r[o]/c*50;a.fillRect(o/360*300,50-x,1,x)}}function qa(a,r,c,o){if(!a)return;a.fillStyle="#000",a.fillRect(0,0,300,80);const x=Math.max(Math.max(...r),Math.max(...c),Math.max(...o));a.globalCompositeOperation="screen";const l=(i,f)=>{a.fillStyle=f,a.beginPath(),a.moveTo(0,80);for(let n=0;n<256;n++)a.lineTo(n/255*300,80-i[n]/x*80);a.lineTo(300,80),a.fill(),a.strokeStyle=f,a.stroke()};l(r,"rgba(255,0,0,0.6)"),l(c,"rgba(0,255,0,0.6)"),l(o,"rgba(0,100,255,0.6)"),a.globalCompositeOperation="source-over"}function Qa(a){const r={};for(let i=0;i<a.length;i+=80){const f=a[i],n=a[i+1],d=a[i+2];if(a[i+3]<128)continue;const h=Math.floor(f/10)*10,g=Math.floor(n/10)*10,N=Math.floor(d/10)*10,j=`${h},${g},${N}`;r[j]=(r[j]||0)+1}const o=Object.keys(r).sort((i,f)=>r[f]-r[i]),x=[],l=45;for(let i of o){if(x.length>=5)break;const[f,n,d]=i.split(",").map(Number);x.some(g=>Math.abs(g.r-f)+Math.abs(g.g-n)+Math.abs(g.b-d)<l)||x.push({r:f,g:n,b:d})}Fa(x)}return()=>{v&&(v.removeEventListener("dragenter",O),v.removeEventListener("dragover",O),v.removeEventListener("dragleave",xa),v.removeEventListener("drop",fa)),U&&U.removeEventListener("change",ha),q&&q.removeEventListener("change",ga),Q&&Q.removeEventListener("change",A),X&&X.removeEventListener("input",A),V&&V.removeEventListener("change",A),C&&(C.removeEventListener("mousemove",ma),C.removeEventListener("click",ua))}},[]);const Wa=s=>"#"+((1<<24)+(s.r<<16)+(s.g<<8)+s.b).toString(16).slice(1).toUpperCase();return e.jsxs(ns,{children:[e.jsx("style",{jsx:!0,global:!0,children:`
        :root {
            --bg-app: #121212;
            --bg-panel: #181818;
            --bg-box: #222;
            --accent: #c9b658;
            --accent-dim: rgba(0, 136, 255, 0.1);
            --text-main: #eee;
            --text-sub: #888;
            --border: #333;
            --scrollbar-bg: #1a1a1a;
            --scrollbar-thumb: #444;
        }
        /* Overriding app body to match tool's design */
        body {
            background-color: var(--bg-app) !important;
            color: var(--text-main) !important;
            font-family: "Noto Sans JP", "Inter", sans-serif;
            margin: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        * {
            box-sizing: border-box;
        }
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: var(--scrollbar-bg);
        }
        ::-webkit-scrollbar-thumb {
            background: var(--scrollbar-thumb);
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }

        .color-tool-header {
            height: 48px;
            background: var(--bg-panel);
            border-bottom: 1px solid var(--border);
            display: flex;
            align-items: center;
            padding: 0 20px;
            justify-content: space-between;
            flex-shrink: 0;
        }
        .color-tool-header h1 {
            font-size: 15px;
            font-weight: 700;
            margin: 0;
            color: #fff;
            letter-spacing: 0.5px;
        }
        .color-tool-header h1 span {
            color: var(--accent);
            font-weight: 400;
        }
        .btn {
            background: var(--accent);
            color: #fff;
            border: none;
            padding: 6px 14px;
            border-radius: 4px;
            font-size: 12px;
            cursor: pointer;
            font-weight: 600;
            transition: filter 0.2s;
        }
        .btn:hover {
            filter: brightness(1.1);
        }
        .main-container {
            display: grid;
            grid-template-columns: 1fr 420px;
            flex: 1;
            overflow: hidden;
        }
        .viewport {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 15px;
            background-image: radial-gradient(#333 1px, transparent 1px);
            background-size: 24px 24px;
            position: relative;
        }
        .stage-wrapper {
            flex: 1;
            display: flex;
            flex-direction: column;
            min-height: 0;
            position: relative;
        }
        .stage {
            flex: 1;
            border: 1px solid var(--border);
            background: #000;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
            transition: border-color 0.2s, background-color 0.2s;
        }
        .stage.drag-active {
            border-color: var(--accent);
            background-color: rgba(0, 136, 255, 0.05);
        }
        canvas#mainCanvas {
            max-width: 100%;
            max-height: 100%;
            display: block;
            cursor: crosshair;
        }
        #pickerTarget {
            position: absolute;
            width: 20px;
            height: 20px;
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 2px;
            box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.5);
            pointer-events: none;
            display: block; /* Always visible for React version */
            z-index: 10;
            transform: translate(-50%, -50%);
        }
        #pickerTarget::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 4px;
            height: 4px;
            background: red;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
        .overlay-grid {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; display: none;
            background: linear-gradient(to right, transparent 33.3%, rgba(255,255,255,0.15) 33.3%, rgba(255,255,255,0.15) 33.6%, transparent 33.6%, transparent 66.6%, rgba(255,255,255,0.15) 66.6%, rgba(255,255,255,0.15) 66.9%, transparent 66.9%), linear-gradient(to bottom, transparent 33.3%, rgba(255,255,255,0.15) 33.3%, rgba(255,255,255,0.15) 33.6%, transparent 33.6%, transparent 66.6%, rgba(255,255,255,0.15) 66.6%, rgba(255,255,255,0.15) 66.9%, transparent 66.9%);
        }
        .toolbar {
            display: flex; gap: 15px; background: var(--bg-panel); padding: 8px 20px;
            border-radius: 50px; border: 1px solid var(--border); align-self: center;
            font-size: 11px; color: #ccc; align-items: center; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 20;
        }
        select {
            background: #2a2a2a; color: #eee; border: 1px solid #444; padding: 4px 8px;
            border-radius: 4px; font-size: 11px; outline: none;
        }
        #loadingOverlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.7); display: none; justify-content: center;
            align-items: center; z-index: 50; color: var(--accent);
            font-weight: 700; letter-spacing: 1px; backdrop-filter: blur(2px);
        }
        .instruments {
            background: var(--bg-panel); border-left: 1px solid var(--border);
            padding: 15px; overflow-y: auto; display: flex; flex-direction: column; gap: 12px;
        }
        .box {
            background: var(--bg-box); border: 1px solid #333; border-radius: 6px;
            padding: 12px; position: relative;
        }
        .box-head {
            font-size: 11px; font-weight: 700; color: #fff; margin-bottom: 10px;
            display: flex; justify-content: space-between; align-items: center;
            border-left: 3px solid var(--accent); padding-left: 8px;
        }
        .help-icon {
            color: #666; cursor: pointer; font-size: 10px; width: 16px; height: 16px;
            display: flex; justify-content: center; align-items: center; border-radius: 50%;
            background: #333; transition: color 0.2s;
        }
        .help-icon:hover { color: #fff; background: #444; }
        .summary-text { font-size: 10px; color: #999; margin-top: 10px; padding-top: 8px; border-top: 1px solid #333; line-height: 1.5; }
        .ai-box { background: linear-gradient(145deg, #1a2530, #222); border: 1px solid #2a4055; }
        .ai-badge { color: #4da6ff; font-size: 11px; font-weight: 700; display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
        .diag-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; }
        .diag-item { background: rgba(255,255,255,0.03); padding: 6px; border-radius: 4px; text-align: center; border: 1px solid transparent; }
        .val-wrap { display: flex; justify-content: center; align-items: baseline; gap: 5px; }
        .diag-qual { font-size: 9px; color: #666; font-weight: bold; background: #1a1a1a; padding: 1px 3px; border-radius: 3px; }
        .diag-label { font-size: 9px; color: #777; display: block; margin-bottom: 2px; text-transform: uppercase; }
        .diag-val { font-size: 11px; font-weight: 700; color: #eee; }
        .meter-wrap { margin-bottom: 8px; }
        .meter-label { display: flex; justify-content: space-between; font-size: 10px; color: #aaa; margin-bottom: 4px; }
        .meter-bar { height: 6px; background: #111; border-radius: 3px; position: relative; overflow: hidden; }
        .meter-fill { height: 100%; position: absolute; top: 0; left: 0; transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1); }
        .marker { width: 2px; height: 100%; background: #fff; position: absolute; top: 0; z-index: 2; box-shadow: 0 0 4px rgba(255,255,255,0.8); transform: translateX(-50%); transition: left 0.4s ease-out; }
        .bg-grad-temp { background: linear-gradient(90deg, #3498db, #eee, #f39c12); }
        .bg-grad-tint { background: linear-gradient(90deg, #2ecc71, #eee, #9b59b6); }
        canvas.scope { width: 100%; display: block; background: #000; border-radius: 3px; }
        .rgb-labels { display: flex; justify-content: space-between; padding: 2px 4px; font-size: 9px; color: #666; font-family: monospace; }
        .picker-row { display: flex; gap: 12px; align-items: center; font-size: 11px; }
        .picker-swatch { width: 40px; height: 40px; border: 1px solid #555; border-radius: 4px; background: #000; box-shadow: 0 2px 5px rgba(0,0,0,0.5); }
        .picker-data { display: flex; flex-direction: column; gap: 2px; }
        .picker-data div { display: flex; gap: 10px; color: #888; }
        .picker-data span { color: #fff; font-family: monospace; font-weight: 700; min-width: 60px; }
        .palette-item { text-align: center; }
        .swatch { width: 100%; height: 35px; border-radius: 4px; border: 1px solid #555; margin-bottom: 5px; cursor: pointer; transition: transform 0.1s ease-in-out; box-shadow: 0 2px 5px rgba(0,0,0,0.5); }
        .swatch:hover { transform: scale(1.08); }
        .hex-code { font-family: monospace; font-size: 10px; color: #888; }
        .vectorscope-wrapper { position: relative; width: 160px; height: 160px; }
        .vec-label { position: absolute; font-size: 10px; font-weight: bold; pointer-events: none; text-shadow: 0 0 3px #000; }
        #helpModal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 2000; justify-content: center; align-items: center; backdrop-filter: blur(4px); }
        .modal-content { background: #252525; padding: 25px; width: 320px; border-radius: 8px; border: 1px solid #444; box-shadow: 0 20px 50px rgba(0,0,0,0.8); }
        @media (max-width: 900px) {
            .main-container { grid-template-columns: 1fr; }
            .viewport { min-height: 400px; }
            body { height: auto; overflow: auto; }
        }
      `}),e.jsxs("header",{className:"color-tool-header",children:[e.jsxs("h1",{children:["Pro Color ",e.jsx("span",{children:"Analyzer"}),e.jsx("small",{style:{fontSize:"10px",color:"#666",fontWeight:400,marginLeft:"5px"},children:"POLISHED"})]}),e.jsx("input",{type:"file",ref:oe,accept:"image/*",style:{display:"none"}}),e.jsx("button",{className:"btn",onClick:()=>oe.current.click(),children:"＋ 画像を開く"})]}),e.jsxs("div",{className:"main-container",children:[e.jsxs("div",{className:"viewport",children:[e.jsx("div",{className:"stage-wrapper",children:e.jsxs("div",{className:"stage",ref:ye,children:[e.jsx("canvas",{ref:I,id:"mainCanvas"}),e.jsx("div",{ref:Ne,id:"pickerTarget"}),e.jsx("div",{className:"overlay-grid",ref:Re,id:"gridOverlay"}),e.jsxs("div",{ref:we,id:"placeholder",style:{position:"absolute",color:"#666",fontSize:"13px",pointerEvents:"none",textAlign:"center",lineHeight:1.6},children:[e.jsx("span",{style:{fontSize:"24px",color:"#444"},children:"📥"}),e.jsx("br",{}),"画像をここにドロップ",e.jsx("br",{}),"または右上のボタン"]}),e.jsx("div",{ref:ce,id:"loadingOverlay",children:"Analyzing..."})]})}),e.jsxs("div",{className:"toolbar",children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",ref:ke})," 三分割"]}),e.jsx("div",{style:{width:"1px",height:"14px",background:"#444"}}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"5px",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",ref:de})," ゼブラ"]}),e.jsx("input",{type:"range",ref:pe,min:"50",max:"100",defaultValue:"95",style:{width:"60px",cursor:"pointer"},title:"Zebra Level"}),e.jsx("div",{style:{width:"1px",height:"14px",background:"#444"}}),e.jsxs("select",{ref:xe,children:[e.jsx("option",{value:"normal",children:"通常表示"}),e.jsx("option",{value:"grayscale",children:"輝度 (白黒)"}),e.jsx("option",{value:"saturation",children:"彩度 (ヒートマップ)"})]})]})]}),e.jsxs("div",{className:"instruments",children:[e.jsxs("div",{className:"box ai-box",children:[e.jsxs("div",{className:"ai-badge",children:[e.jsx("svg",{width:"12",height:"12",fill:"currentColor",viewBox:"0 0 16 16",style:{marginTop:"-1px"},children:e.jsx("path",{d:"M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM2.5 8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A.5.5 0 0 0 8.5 8h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3zm3.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"})}),"AI Insight"]}),e.jsx("div",{style:{fontSize:"11px",lineHeight:"1.6",color:"#ddd"},ref:Ce,children:"画像を読み込むと、AIによる美的分析と改善提案が表示されます。"})]}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"box-head",children:["Diagnosis (総合診断)",e.jsx("span",{className:"help-icon",onClick:()=>H("diag"),children:"?"})]}),e.jsxs("div",{className:"diag-grid",children:[e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"露出"}),e.jsxs("div",{className:"val-wrap",children:[e.jsx("span",{className:"diag-val",ref:Me,children:"-"}),e.jsx("span",{className:"diag-qual",ref:Le})]})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"Dレンジ"}),e.jsxs("div",{className:"val-wrap",children:[e.jsx("span",{className:"diag-val",ref:ze,children:"-"}),e.jsx("span",{className:"diag-qual",ref:Te})]})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"彩度"}),e.jsxs("div",{className:"val-wrap",children:[e.jsx("span",{className:"diag-val",ref:Se,children:"-"}),e.jsx("span",{className:"diag-qual",ref:Ee})]})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"明瞭度"}),e.jsx("span",{className:"diag-val",ref:Ae,children:"-"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"色温度"}),e.jsx("span",{className:"diag-val",ref:Ie,children:"-"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"色かぶり"}),e.jsx("span",{className:"diag-val",ref:De,children:"-"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"中間調バランス"}),e.jsx("span",{className:"diag-val",ref:fe,children:"-"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"コントラスト比"}),e.jsxs("div",{className:"val-wrap",children:[e.jsx("span",{className:"diag-val",ref:Pe,children:"-"}),e.jsx("span",{className:"diag-qual",ref:Ha})]})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"黒の割合"}),e.jsxs("div",{className:"val-wrap",children:[e.jsx("span",{className:"diag-val",ref:Fe,children:"-"}),e.jsx("span",{className:"diag-qual",ref:He})]})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"白の割合"}),e.jsxs("div",{className:"val-wrap",children:[e.jsx("span",{className:"diag-val",ref:$e,children:"-"}),e.jsx("span",{className:"diag-qual",ref:$a})]})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"最も暗い色"}),e.jsx("span",{className:"diag-val",ref:Be,children:"-"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"最も明るい色"}),e.jsx("span",{className:"diag-val",ref:We,children:"-"})]})]}),e.jsx("div",{className:"summary-text",ref:Ge,children:"画像データ待ち..."})]}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"box-head",children:["Meters ",e.jsx("span",{className:"help-icon",onClick:()=>H("meter"),children:"?"})]}),e.jsxs("div",{className:"meter-wrap",children:[e.jsxs("div",{className:"meter-label",children:[e.jsx("span",{children:"Sat (彩度)"}),e.jsx("span",{ref:Oe,children:"--"})]}),e.jsx("div",{className:"meter-bar",children:e.jsx("div",{className:"meter-fill",ref:Ue,style:{background:"linear-gradient(90deg, #777, #f0f)",width:"0%"}})})]}),e.jsxs("div",{className:"meter-wrap",children:[e.jsxs("div",{className:"meter-label",children:[e.jsx("span",{children:"Temp (色温度)"}),e.jsx("span",{children:"Cool | Warm"})]}),e.jsx("div",{className:"meter-bar bg-grad-temp",children:e.jsx("div",{className:"marker",ref:qe,style:{left:"50%"}})})]}),e.jsxs("div",{className:"meter-wrap",children:[e.jsxs("div",{className:"meter-label",children:[e.jsx("span",{children:"Tint (色かぶり)"}),e.jsx("span",{children:"Grn | Mag"})]}),e.jsx("div",{className:"meter-bar bg-grad-tint",children:e.jsx("div",{className:"marker",ref:Qe,style:{left:"50%"}})})]})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"box-head",children:"Picker (Click to Lock)"}),e.jsxs("div",{className:"picker-row",children:[e.jsx("div",{className:"picker-swatch",ref:Xe}),e.jsxs("div",{className:"picker-data",children:[e.jsxs("div",{children:["HEX: ",e.jsx("span",{ref:Ve,children:"--"})]}),e.jsxs("div",{children:["RGB: ",e.jsx("span",{ref:Ye,children:"--"})]}),e.jsxs("div",{children:["Lum: ",e.jsx("span",{ref:Ke,children:"--"})]})]})]})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"box-head",children:"Color Palette (Top 5)"}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"8px"},children:je.length===0?e.jsx("div",{style:{gridColumn:"1/-1",textAlign:"center",color:"#555"},children:"No Data"}):je.map((s,k)=>{const T=Wa(s);return e.jsxs("div",{className:"palette-item",children:[e.jsx("div",{className:"swatch",style:{backgroundColor:T},title:`Click to copy: ${T}`,onClick:()=>{navigator.clipboard.writeText(T),alert("Copied: "+T)}}),e.jsx("div",{className:"hex-code",children:T})]},k)})})]}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"box-head",children:["Hue (色相)",e.jsx("span",{className:"help-icon",onClick:()=>H("hue"),children:"?"})]}),e.jsx("canvas",{ref:_e,className:"scope",height:"50",width:"300"}),e.jsx("div",{className:"summary-text",ref:Je,children:"--"})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"box-head",children:"RGB (バランス)"}),e.jsx("canvas",{ref:Ze,className:"scope",height:"80",width:"300"}),e.jsxs("div",{className:"rgb-labels",children:[e.jsx("span",{children:"Bk"}),e.jsx("span",{children:"Shd"}),e.jsx("span",{children:"Mid"}),e.jsx("span",{children:"Hgh"}),e.jsx("span",{children:"Wt"})]}),e.jsx("div",{className:"summary-text",ref:ea,children:"--"})]}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"box-head",children:["Waveform (輝度)",e.jsx("span",{className:"help-icon",onClick:()=>H("wave"),children:"?"})]}),e.jsx("canvas",{ref:aa,className:"scope",height:"100",width:"300"}),e.jsx("div",{className:"summary-text",ref:sa,children:"--"})]}),e.jsxs("div",{className:"box",children:[e.jsxs("div",{className:"box-head",children:["Vectorscope (Pro)",e.jsx("span",{className:"help-icon",onClick:()=>H("vec"),children:"?"})]}),e.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:"5px"},children:e.jsxs("div",{className:"vectorscope-wrapper",children:[e.jsx("canvas",{ref:ta,width:"160",height:"160",style:{background:"#000",borderRadius:"50%",border:"1px solid #333"}}),e.jsx("span",{className:"vec-label",style:{top:"38px",left:"148px",color:"#f55"},children:"R"}),e.jsx("span",{className:"vec-label",style:{top:0,left:"75px",color:"#f5f"},children:"Mg"}),e.jsx("span",{className:"vec-label",style:{top:"38px",left:"2px",color:"#55f"},children:"B"}),e.jsx("span",{className:"vec-label",style:{bottom:"38px",left:"2px",color:"#5ff"},children:"Cy"}),e.jsx("span",{className:"vec-label",style:{bottom:0,left:"75px",color:"#5f5"},children:"G"}),e.jsx("span",{className:"vec-label",style:{bottom:"38px",left:"148px",color:"#ff5"},children:"Y"})]})}),e.jsx("div",{className:"summary-text",ref:na,children:"--"})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"box-head",children:"Sat vs Lum"}),e.jsx("canvas",{ref:la,className:"scope",height:"100",width:"300"}),e.jsx("div",{className:"summary-text",ref:ia,children:"--"})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"box-head",children:"Image Data"}),e.jsxs("div",{className:"diag-grid",style:{gridTemplateColumns:"1fr 1fr"},children:[e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"Width"}),e.jsx("span",{className:"diag-val",ref:ra,children:"--"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"Height"}),e.jsx("span",{className:"diag-val",ref:oa,children:"--"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"File Size"}),e.jsx("span",{className:"diag-val",ref:ca,children:"--"})]}),e.jsxs("div",{className:"diag-item",children:[e.jsx("span",{className:"diag-label",children:"Type"}),e.jsx("span",{className:"diag-val",ref:da,children:"--"})]})]})]})]})]}),e.jsx("div",{ref:F,id:"helpModal",onClick:s=>{s.currentTarget.style.display="none"},children:e.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[e.jsx("h3",{style:{color:"var(--accent)",marginTop:0},children:"Help"}),e.jsx("p",{ref:he,style:{fontSize:"13px",lineHeight:1.6,color:"#ccc"}}),e.jsx("button",{className:"btn",onClick:()=>{F.current&&(F.current.style.display="none")},style:{width:"100%",marginTop:"15px",background:"#444",border:"1px solid #555"},children:"閉じる"})]})})]})}export{os as default};
