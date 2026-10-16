import{j as e}from"./index-DTS8MfiA.js";import"./react-vendor-cxkclgJA.js";const i=[{n:"01",title:"Más diversidad, menos stock repetido",text:"Cada caja combina diseños distintos, así que tu inventario final no se satura de una sola línea gráfica."},{n:"02",title:"Rotación constante",text:"La selección responde a lo que se mueve en bodega, no a un catálogo fijo que se queda quieto en tus estantes."},{n:"03",title:"Compra al por mayor, un solo pedido",text:"Defines la cantidad por categoría y nosotros garantizamos equilibrio de diseños dentro del paquete."},{n:"04",title:"Imágenes reales de referencia",text:"Cada ficha muestra una foto real de una unidad del surtido, para que tengas una idea fiel del estilo y la calidad, aunque el diseño exacto varíe."}];function o(){return e.jsxs("section",{className:"why",children:[e.jsxs("div",{className:"container why-inner",children:[e.jsxs("div",{className:"why-head",children:[e.jsx("p",{className:"eyebrow why-eyebrow",children:"Modelo de surtido"}),e.jsxs("h2",{className:"why-title",children:["Vendemos por caja,",e.jsx("br",{}),"no por unidad exacta."]}),e.jsx("p",{className:"why-copy",children:"No prometemos una gráfica específica: garantizamos una combinación equilibrada. Es la forma más eficiente de mover volumen sin generar stock muerto de un solo diseño, ni para nosotros ni para ti."})]}),e.jsx("div",{className:"why-grid",children:i.map(a=>e.jsxs("div",{className:"why-item",children:[e.jsx("span",{className:"why-n",children:a.n}),e.jsx("h3",{className:"why-item-title",children:a.title}),e.jsx("p",{className:"why-item-text",children:a.text})]},a.n))})]}),e.jsx("style",{children:`
        .why {
          background: var(--carbon);
          color: var(--white);
          padding: 88px 0;
        }
        .why-inner {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
        }
        .why-eyebrow { color: var(--yellow); margin-bottom: 16px; }
        .why-title {
          font-size: clamp(34px, 4vw, 48px);
          line-height: 1.02;
        }
        .why-copy {
          margin-top: 22px;
          color: var(--light-gray);
          font-size: 15px;
          line-height: 1.7;
          max-width: 420px;
        }
        .why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255,255,255,0.12);
        }
        .why-item {
          background: var(--carbon);
          padding: 26px;
        }
        .why-n {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--yellow);
          font-weight: 700;
        }
        .why-item-title {
          margin-top: 14px;
          font-size: 19px;
          text-transform: none;
          font-family: var(--font-body);
          font-weight: 700;
          letter-spacing: 0;
        }
        .why-item-text {
          margin-top: 10px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--light-gray);
        }

        @media (max-width: 900px) {
          .why-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .why { padding: 60px 0; }
          .why-grid { grid-template-columns: 1fr; }
        }
      `})]})}export{o as default};
