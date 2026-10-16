import{j as e}from"./index-DTS8MfiA.js";import{r as j}from"./react-vendor-cxkclgJA.js";const o={fill:"none",strokeWidth:1.6,strokeLinecap:"round",strokeLinejoin:"round"};function y({size:a=28,color:r="currentColor"}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 32 32",stroke:r,...o,children:[e.jsx("path",{d:"M4 20c2-6 6-9 12-9s10 3 12 9"}),e.jsx("circle",{cx:"9",cy:"22",r:"2.4"}),e.jsx("circle",{cx:"23",cy:"22",r:"2.4"}),e.jsx("path",{d:"M9 19.6h14"})]})}function w({size:a=28,color:r="currentColor"}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 32 32",stroke:r,...o,children:[e.jsx("path",{d:"M5 16c0-6 3-10 11-10s11 4 11 10-3 10-11 10S5 22 5 16Z"}),e.jsx("path",{d:"M8 12h16M8 20h16"})]})}function k({size:a=28,color:r="currentColor"}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 32 32",stroke:r,...o,children:[e.jsx("path",{d:"M16 6v8M9 22h14"}),e.jsx("path",{d:"M16 14 9 22M16 14l7 8"}),e.jsx("circle",{cx:"9",cy:"22",r:"2.2"}),e.jsx("circle",{cx:"23",cy:"22",r:"2.2"})]})}function N({size:a=28,color:r="currentColor"}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 32 32",stroke:r,...o,children:[e.jsx("circle",{cx:"16",cy:"16",r:"10"}),e.jsx("circle",{cx:"16",cy:"16",r:"3.4"})]})}function z({size:a=28,color:r="currentColor"}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 32 32",stroke:r,...o,children:[e.jsx("circle",{cx:"16",cy:"16",r:"10"}),e.jsx("circle",{cx:"16",cy:"16",r:"4.5"}),e.jsx("circle",{cx:"16",cy:"6.4",r:"1",fill:r}),e.jsx("circle",{cx:"24.2",cy:"11.2",r:"1",fill:r}),e.jsx("circle",{cx:"24.2",cy:"20.8",r:"1",fill:r}),e.jsx("circle",{cx:"16",cy:"25.6",r:"1",fill:r}),e.jsx("circle",{cx:"7.8",cy:"20.8",r:"1",fill:r}),e.jsx("circle",{cx:"7.8",cy:"11.2",r:"1",fill:r})]})}function C({size:a=28,color:r="currentColor"}){return e.jsxs("svg",{width:a,height:a,viewBox:"0 0 32 32",stroke:r,...o,children:[e.jsx("rect",{x:"7",y:"7",width:"18",height:"18",rx:"1.5"}),e.jsx("path",{d:"M7 13h18M13 7v18"})]})}const u={board:y,deck:w,truck:k,wheel:N,bearing:z,accessory:C},b=["#FFD100","#0033A0","#121212","#E5E5E5","#CE1126"];function F(a){let r=0;for(let i=0;i<a.length;i++)r=r*31+a.charCodeAt(i)>>>0;return r}function q({seed:a,icon:r,tiles:i=9}){const c=u[r]||u.board,n=F(a);return e.jsxs("div",{className:"mosaic",role:"img","aria-label":"Vista de referencia del surtido de diseños",children:[Array.from({length:i}).map((l,p)=>{const d=n+p*97,t=d%5===0?"#1A1A1A":"#FFFFFF",m=b[(d>>3)%b.length],x=(d>>6)%7-3;return e.jsx("div",{className:"mosaic-tile",style:{background:t,transform:`rotate(${x}deg)`},children:e.jsx(c,{size:22,color:m})},p)}),e.jsx("style",{children:`
        .mosaic {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          background: var(--light-gray);
          border: 1px solid var(--light-gray);
          aspect-ratio: 1 / 1;
          width: 100%;
        }
        .mosaic-tile {
          display: flex;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1 / 1;
        }
      `})]})}function M({product:a,icon:r,categoryName:i}){const[c,n]=j.useState(!1),l=a.image&&!c;return e.jsxs("article",{className:"pcard reg-corners",children:[e.jsxs("div",{className:"pcard-media",children:[l?e.jsx("img",{src:a.image,alt:`${a.name} — ${i} al por mayor, catálogo skate B2B LET Procurement`,loading:"lazy",onError:()=>n(!0)}):e.jsx(q,{seed:a.id,icon:r,tiles:4}),e.jsx("span",{className:"pcard-random-badge",children:"Surtido aleatorio"})]}),e.jsxs("div",{className:"pcard-body",children:[e.jsxs("p",{className:"eyebrow pcard-sku",children:["Ref. ",a.sku]}),e.jsx("h3",{className:"pcard-title",children:a.name}),e.jsx("p",{className:"pcard-note",children:"Este diseño puede estar en tu caja surtida."})]}),e.jsx("style",{children:`
        .pcard {
          background: var(--white);
          border: 1px solid var(--light-gray);
          display: flex;
          flex-direction: column;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .pcard:hover {
          border-color: var(--carbon);
          box-shadow: 0 4px 18px rgba(0,0,0,0.08);
        }
        .pcard-media {
          position: relative;
          padding: 14px;
          background: var(--off-white);
          border-bottom: 1px solid var(--light-gray);
          aspect-ratio: 1 / 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .pcard-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s ease;
        }
        .pcard:hover .pcard-media img {
          transform: scale(1.04);
        }
        .pcard-random-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 8px;
          background: var(--yellow);
          color: var(--carbon);
          border-radius: var(--radius);
        }
        .pcard-body {
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          flex: 1;
        }
        .pcard-sku {
          font-size: 10px;
          color: var(--mid-gray);
        }
        .pcard-title {
          font-size: 15px;
          line-height: 1.15;
          letter-spacing: 0.02em;
        }
        .pcard-note {
          font-size: 11px;
          line-height: 1.45;
          color: var(--mid-gray);
          font-style: italic;
        }

        @media (max-width: 560px) {
          .pcard-body { padding: 10px 10px 12px; }
          .pcard-media { padding: 10px; }
          .pcard-title { font-size: 12px; }
          .pcard-note { display: none; }
          .pcard-sku { font-size: 9px; }
        }
      `})]})}function A(a){return a>=6?{level:3,label:"Flete Gratis + 10% OFF + Prioridad FULL",color:"#0033A0"}:a>=3?{level:2,label:"Flete Gratis + 5% de Descuento",color:"#2a7d2e"}:{level:1,label:null,color:null}}function P(a){return a>=6?null:a>=3?{needed:6-a,reward:"10% OFF + Prioridad FULL"}:{needed:3-a,reward:"Flete Gratis Nacional + 5% OFF"}}function L({category:a,index:r,onBoxAdd:i,onBoxRemove:c,cartQty:n,totalBoxes:l}){const p=u[a.icon],d=String(r+1).padStart(2,"0"),[t,m]=j.useState(1),x=9,f=Math.ceil(a.products.length/x),v=a.products.slice((t-1)*x,t*x),g=A(l),h=P(l);return e.jsxs("section",{id:a.slug,className:"catsec",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"catsec-head",children:[e.jsxs("div",{className:"catsec-head-left",children:[e.jsx("span",{className:"catsec-num",children:d}),e.jsx(p,{size:30,color:"var(--carbon)"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"catsec-title",children:a.name}),e.jsx("p",{className:"catsec-intro",children:a.intro})]})]}),e.jsx("div",{className:"catsec-assortment-notice",children:e.jsxs("span",{children:[e.jsx("strong",{children:"Los modelos que ves son de referencia."})," Al pedir una caja, recibirás un surtido aleatorio de los diseños disponibles en bodega al momento del despacho. No garantizamos ningún modelo específico."]})}),e.jsx("div",{className:"catsec-grid",children:v.map(s=>e.jsx(M,{product:s,icon:a.icon,categoryName:a.name},s.id))}),f>1&&e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"btn btn-outline-dark",disabled:t===1,onClick:()=>m(s=>s-1),children:"Anterior"}),e.jsxs("span",{className:"page-info",children:["Página ",t," de ",f]}),e.jsx("button",{className:"btn btn-outline-dark",disabled:t===f,onClick:()=>m(s=>s+1),children:"Siguiente"})]}),e.jsxs("div",{className:"box-panel reg-corners",children:[e.jsxs("div",{className:"box-panel-info",children:[e.jsx("span",{className:"box-panel-label",children:a.boxLabel}),e.jsxs("p",{className:"box-panel-desc",children:["Pedido mínimo: ",e.jsxs("strong",{children:[a.moq," unidades"]})," por caja · Surtido aleatorio de los modelos del catálogo."]}),h&&e.jsx("div",{className:"benefit-nudge",children:e.jsxs("span",{children:["Añade ",e.jsxs("strong",{children:[h.needed," caja",h.needed>1?"s":""," más"]})," (cualquier categoría) para desbloquear: ",e.jsx("em",{children:h.reward})]})}),g.level>=2&&e.jsx("div",{className:"benefit-active",style:{borderColor:g.color},children:e.jsxs("span",{style:{color:g.color},children:["Beneficio activo: ",g.label]})})]}),e.jsxs("div",{className:"box-panel-actions",children:[e.jsxs("div",{className:"qty-control",children:[e.jsx("button",{className:"qty-btn",onClick:()=>c(a.id),disabled:n===0,"aria-label":"Quitar una caja",children:"−"}),e.jsxs("span",{className:"qty-value",children:[n," ",e.jsxs("span",{className:"qty-unit",children:["caja",n!==1?"s":""]})]}),e.jsx("button",{className:"qty-btn",onClick:()=>i(a),"aria-label":"Añadir una caja",children:"+"})]}),n===0?e.jsx("button",{className:"btn btn-primary box-cta",onClick:()=>i(a),children:"Añadir Caja a Cotización"}):e.jsxs("a",{href:"#cotizacion-box",className:"btn btn-outline-dark box-cta",children:["Ver Cotización (",n," caja",n!==1?"s":"",") →"]})]})]})]}),e.jsx("style",{children:`
        .catsec {
          padding: 72px 0;
          border-bottom: 1px solid var(--light-gray);
        }
        .catsec-head {
          display: flex;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 24px;
          padding-bottom: 28px;
          border-bottom: 3px solid var(--carbon);
        }
        .catsec-head-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .catsec-num {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--mid-gray);
        }
        .catsec-title {
          font-size: clamp(32px, 4vw, 44px);
        }
        .catsec-intro {
          margin-top: 8px;
          max-width: 520px;
          color: var(--mid-gray);
          font-size: 14.5px;
        }

        /* Aviso surtido */
        .catsec-assortment-notice {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: #fffbea;
          border: 1.5px solid var(--yellow);
          border-radius: var(--radius);
          padding: 14px 18px;
          margin-bottom: 28px;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--dark-gray);
        }
        .notice-icon {
          font-size: 20px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* Galería visual */
        .catsec-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }

        /* Paginación */
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
        }
        .page-info {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--mid-gray);
        }

        /* Panel de caja */
        .box-panel {
          margin-top: 36px;
          background: var(--carbon);
          color: var(--white);
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }
        .box-panel-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          min-width: 220px;
        }
        .box-panel-label {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.5vw, 26px);
          letter-spacing: 0.04em;
          color: var(--yellow);
          text-transform: uppercase;
        }
        .box-panel-desc {
          font-size: 13.5px;
          color: rgba(255,255,255,0.7);
          line-height: 1.5;
        }
        .box-panel-desc strong {
          color: var(--white);
        }

        /* Nudge de beneficio */
        .benefit-nudge {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-top: 6px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.06);
          border-left: 3px solid var(--yellow);
          border-radius: var(--radius);
          font-size: 13px;
          color: rgba(255,255,255,0.85);
          line-height: 1.5;
        }
        .benefit-nudge strong { color: var(--yellow); }
        .benefit-nudge em { color: var(--white); font-style: normal; font-weight: 600; }
        .benefit-nudge-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }

        .benefit-active {
          margin-top: 6px;
          padding: 8px 14px;
          border: 1.5px solid;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 600;
          background: rgba(255,255,255,0.05);
        }

        /* Controles de cantidad */
        .box-panel-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
        }
        .qty-control {
          display: flex;
          align-items: center;
          gap: 0;
          background: rgba(255,255,255,0.08);
          border: 1.5px solid rgba(255,255,255,0.2);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .qty-btn {
          background: none;
          border: none;
          color: var(--white);
          font-size: 22px;
          width: 44px;
          height: 44px;
          cursor: pointer;
          transition: background 0.15s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
        }
        .qty-btn:hover:not(:disabled) {
          background: var(--yellow);
          color: var(--carbon);
        }
        .qty-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        .qty-value {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 700;
          min-width: 64px;
          text-align: center;
          color: var(--white);
        }
        .qty-unit {
          font-size: 10px;
          font-weight: 400;
          color: rgba(255,255,255,0.5);
          margin-left: 4px;
        }
        .box-cta {
          justify-content: center;
          white-space: nowrap;
        }

        @media (max-width: 760px) {
          .box-panel {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }
          .box-panel-actions {
            align-items: flex-start;
            width: 100%;
          }
          .box-cta { width: 100%; justify-content: center; }
        }
        @media (max-width: 560px) {
          .catsec { padding: 52px 0; }
          .catsec-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .catsec-assortment-notice { font-size: 12px; padding: 12px 14px; }
        }
      `})]})}export{L as default};
