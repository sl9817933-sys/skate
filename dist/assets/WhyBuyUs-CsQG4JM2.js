import{j as e}from"./index-DTS8MfiA.js";import{r}from"./react-vendor-cxkclgJA.js";const c=[{n:"01",title:"Stock real, no preventa",text:"Lo que ves en el catálogo ya está físicamente en bodega en Colombia. No dependes de tiempos de importación ni de disponibilidad incierta del proveedor."},{n:"02",title:"Precio de importador",text:"Al comprar por volumen directamente del lote, accedes a precio mayorista, sin la carga de importar tú mismo cantidades pequeñas."},{n:"03",title:"Marcas reconocidas",text:"Producto de marcas activas en la escena skate, no genérico ni de imitación. Ideal para tiendas que quieren renovar vitrina con producto de marca."},{n:"04",title:"Atención directa",text:"Cotizas por WhatsApp y hablas directamente con quien tiene el inventario, sin intermediarios ni respuestas automáticas."}];function h(){const[a,o]=r.useState(0),[i,s]=r.useState(window.innerWidth<=560);return r.useEffect(()=>{const t=()=>s(window.innerWidth<=560);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),e.jsxs("section",{className:"whybuy",children:[e.jsxs("div",{className:"container whybuy-inner",children:[e.jsxs("div",{className:"whybuy-head",children:[e.jsx("p",{className:"eyebrow whybuy-eyebrow",children:"Por qué comprarnos"}),e.jsxs("h2",{className:"whybuy-title",children:["Inventario listo,",e.jsx("br",{}),"sin vueltas de importación."]})]}),e.jsx("div",{className:"whybuy-grid",children:c.map((t,n)=>{const d=!i||a===n;return e.jsxs("div",{className:`whybuy-item ${d?"is-open":""} ${i?"is-mobile":""}`,children:[e.jsxs("div",{className:"whybuy-item-header",onClick:()=>i&&o(l=>l===n?null:n),children:[e.jsxs("div",{children:[e.jsx("span",{className:"whybuy-n",children:t.n}),e.jsx("h3",{className:"whybuy-item-title",children:t.title})]}),i&&e.jsx("span",{className:"whybuy-chevron",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M6 9l6 6 6-6"})})})]}),e.jsx("div",{className:"whybuy-item-content",children:e.jsx("p",{className:"whybuy-item-text",children:t.text})})]},t.n)})})]}),e.jsx("style",{children:`
        .whybuy {
          background: var(--off-white);
          padding: 88px 0;
          border-bottom: 1px solid var(--light-gray);
        }
        .whybuy-head { max-width: 560px; margin-bottom: 44px; }
        .whybuy-eyebrow { color: var(--blue); margin-bottom: 16px; }
        .whybuy-title {
          font-size: clamp(30px, 3.6vw, 42px);
          line-height: 1.03;
        }
        .whybuy-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--light-gray);
          border: 1px solid var(--light-gray);
        }
        .whybuy-item {
          background: var(--white);
          padding: 26px;
          display: flex;
          flex-direction: column;
        }
        .whybuy-item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          -webkit-tap-highlight-color: transparent;
        }
        .whybuy-n {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--red);
          font-weight: 700;
          display: block;
        }
        .whybuy-item-title {
          margin-top: 14px;
          font-size: 18px;
          text-transform: none;
          font-family: var(--font-body);
          font-weight: 700;
          letter-spacing: 0;
        }
        .whybuy-chevron {
          margin-top: 12px;
          color: var(--carbon);
          transition: transform 0.3s ease;
        }
        .whybuy-item.is-open .whybuy-chevron {
          transform: rotate(180deg);
        }
        
        .whybuy-item-content {
          display: grid;
          grid-template-rows: 1fr;
          transition: grid-template-rows 0.3s ease;
        }
        .whybuy-item-text {
          min-height: 0;
          overflow: hidden;
          margin-top: 12px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--dark-gray);
          transition: margin-top 0.3s ease, opacity 0.3s ease;
        }

        .whybuy-item.is-mobile .whybuy-item-header {
          cursor: pointer;
        }
        .whybuy-item.is-mobile:not(.is-open) .whybuy-item-content {
          grid-template-rows: 0fr;
        }
        .whybuy-item.is-mobile:not(.is-open) .whybuy-item-text {
          margin-top: 0;
          opacity: 0;
        }

        @media (max-width: 900px) {
          .whybuy-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .whybuy { padding: 56px 0; }
          .whybuy-grid { grid-template-columns: 1fr; }
          .whybuy-item { padding: 22px; }
          .whybuy-item-title { margin-top: 8px; font-size: 17px; }
          .whybuy-chevron { margin-top: 6px; }
        }
      `})]})}export{h as default};
