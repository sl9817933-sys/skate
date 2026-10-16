import{j as e}from"./index-DTS8MfiA.js";import"./react-vendor-cxkclgJA.js";function z({whatsappNumber:l,cart:c={},totalBoxes:t=0,removeCategory:d,handleBoxAdd:p,handleBoxRemove:m,buildWhatsappHref:x}){const n=Object.values(c),s=n.length>0;function f(a){return a>=6?{label:"10% de Descuento + Flete Gratis + Prioridad FULL",color:"#0033A0"}:a>=3?{label:"Flete Gratis Nacional + 5% de Descuento",color:"#2a7d2e"}:null}function b(a){return a>=6?null:a>=3?{needed:6-a,reward:"10% OFF + Prioridad FULL"}:{needed:3-a,reward:"Flete Gratis + 5% OFF"}}const r=f(t),i=b(t),g=s?n.map(({category:a,qty:o})=>`• ${o} caja${o>1?"s":""} de ${a.name} (${a.boxLabel})`).join(`
`):"• (Sin productos seleccionados aún)",h=r?`
Beneficio aplicable: ${r.label}`:`
Consejo: pidiendo 3+ cajas aplicas a Flete Gratis + 5% OFF`,u=`Hola, acabo de revisar el catálogo digital de *Rotación Mayorista Skate*.

Me gustaría cotizar el siguiente pedido:

*Productos de Interés:*
${g}
*Total de cajas:* ${t}${h}

Por favor confírmame disponibilidad, precios y tiempos de entrega. Gracias.`,v=x(encodeURIComponent(u)),j=Math.min(t/6*100,100),y=3/6*100;return e.jsxs("section",{id:"contacto",className:"contact",children:[e.jsxs("div",{className:"container contact-inner",children:[e.jsxs("div",{className:"contact-left",children:[e.jsx("p",{className:"eyebrow contact-eyebrow",children:"Cotización mayorista B2B"}),e.jsxs("h2",{className:"contact-title",children:["Arma tu pedido",e.jsx("br",{}),"por cajas surtidas."]}),e.jsx("p",{className:"contact-copy",children:"Selecciona las categorías que te interesan y la cantidad de cajas. Te enviamos disponibilidad real, precios y tiempos de entrega por WhatsApp Business."}),e.jsxs("div",{className:"benefit-meter",children:[e.jsxs("div",{className:"benefit-meter-header",children:[e.jsx("span",{className:"eyebrow",children:"Beneficios por volumen"}),e.jsxs("span",{className:"benefit-meter-total",children:[t," caja",t!==1?"s":""]})]}),e.jsxs("div",{className:"benefit-progress-track",children:[e.jsx("div",{className:"benefit-progress-fill",style:{width:`${j}%`}}),e.jsxs("div",{className:"benefit-milestone",style:{left:`${y}%`},children:[e.jsx("span",{className:"milestone-dot","data-active":t>=3}),e.jsxs("span",{className:"milestone-label",children:["3 cajas",e.jsx("br",{}),"Flete Gratis + 5% OFF"]})]}),e.jsxs("div",{className:"benefit-milestone",style:{left:"100%"},children:[e.jsx("span",{className:"milestone-dot","data-active":t>=6}),e.jsxs("span",{className:"milestone-label",children:["6 cajas",e.jsx("br",{}),"10% OFF + Prioridad"]})]})]}),i&&e.jsxs("p",{className:"benefit-hint",children:["Añade ",e.jsxs("strong",{children:[i.needed," caja",i.needed>1?"s":""," más"]})," para desbloquear: ",e.jsx("em",{children:i.reward})]}),r&&e.jsxs("p",{className:"benefit-unlocked",style:{color:r.color},children:[e.jsx("strong",{children:"Beneficio desbloqueado:"})," ",r.label]})]}),e.jsx("div",{className:"contact-direct",children:e.jsx("a",{href:`https://wa.me/${l}`,target:"_blank",rel:"noreferrer",className:"btn btn-whatsapp",children:"WhatsApp directo"})}),e.jsx("p",{className:"contact-disclaimer",children:"Los productos se entregan en surtido aleatorio de diseños según disponibilidad en bodega. Las imágenes del catálogo son de referencia: no garantizamos diseño específico por unidad."})]}),e.jsxs("div",{id:"cotizacion-box",className:"contact-form reg-corners",children:[e.jsxs("div",{className:"form-header",children:[e.jsx("span",{className:"eyebrow",children:"Tu cotización"}),e.jsxs("span",{className:"form-box-count",children:[t," caja",t!==1?"s":""," en total"]})]}),s?e.jsx("ul",{className:"cart-list",children:n.map(({category:a,qty:o})=>e.jsxs("li",{className:"cart-item",children:[e.jsxs("div",{className:"cart-item-info",children:[e.jsx("span",{className:"cart-item-name",children:a.boxLabel}),e.jsxs("span",{className:"cart-item-moq",children:["MOQ ",a.moq," u. · Surtido aleatorio"]})]}),e.jsxs("div",{className:"cart-item-controls",children:[e.jsx("button",{type:"button",className:"qty-btn-sm",onClick:()=>m(a.id),"aria-label":"Quitar una caja",children:"−"}),e.jsx("span",{className:"cart-item-qty",children:o}),e.jsx("button",{type:"button",className:"qty-btn-sm",onClick:()=>p(a),"aria-label":"Añadir una caja",children:"+"}),e.jsx("button",{type:"button",className:"btn-remove",onClick:()=>d(a.id),"aria-label":"Eliminar esta categoría",children:"×"})]})]},a.id))}):e.jsxs("div",{className:"form-empty",children:[e.jsx("p",{children:"Aún no has añadido cajas a tu cotización."}),e.jsxs("p",{children:["Usa los botones ",e.jsx("strong",{children:'"Añadir Caja"'})," en cada categoría del catálogo."]})]}),r&&e.jsx("div",{className:"cart-benefit-tag",style:{borderColor:r.color,color:r.color},children:r.label}),e.jsx("div",{className:"contact-form-actions",children:e.jsx("a",{href:v,target:"_blank",rel:"noreferrer",className:"btn btn-primary",children:"Enviar por WhatsApp"})}),e.jsx("p",{className:"form-footer-note",children:"* Exclusivo para comercio mayorista con RUT/NIT verificado. Los precios finales se confirman por WhatsApp Business."})]})]}),e.jsx("style",{children:`
        .contact { padding: 90px 0; background: var(--off-white); }
        .contact-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .contact-eyebrow { color: var(--blue); margin-bottom: 16px; }
        .contact-title { font-size: clamp(32px, 4vw, 46px); }
        .contact-copy {
          margin-top: 18px;
          color: var(--dark-gray);
          font-size: 15px;
          line-height: 1.7;
          max-width: 460px;
        }

        /* Termómetro */
        .benefit-meter {
          margin-top: 28px;
          background: var(--white);
          border: 1px solid var(--light-gray);
          border-radius: var(--radius);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .benefit-meter-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .benefit-meter-total {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          color: var(--carbon);
        }
        .benefit-progress-track {
          position: relative;
          height: 8px;
          background: var(--light-gray);
          border-radius: 99px;
          margin: 24px 0 36px;
        }
        .benefit-progress-fill {
          height: 100%;
          background: var(--yellow);
          border-radius: 99px;
          transition: width 0.4s ease;
          min-width: 4px;
        }
        .benefit-milestone {
          position: absolute;
          top: -4px;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .milestone-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--light-gray);
          border: 2px solid var(--mid-gray);
          transition: background 0.3s ease, border-color 0.3s ease;
          display: block;
        }
        .milestone-dot[data-active="true"] {
          background: var(--yellow);
          border-color: var(--carbon);
        }
        .milestone-label {
          position: absolute;
          top: 22px;
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          text-align: center;
          color: var(--mid-gray);
          line-height: 1.3;
          white-space: nowrap;
          transform: translateX(-50%);
          left: 50%;
          pointer-events: none;
        }
        .benefit-milestone:last-child .milestone-label {
          left: auto;
          right: 0;
          transform: translateX(0);
          text-align: right;
        }
        .benefit-hint {
          font-size: 13px;
          color: var(--dark-gray);
          line-height: 1.5;
          padding: 8px 12px;
          background: #fffbea;
          border-left: 3px solid var(--yellow);
          border-radius: var(--radius);
        }
        .benefit-hint strong { color: var(--carbon); }
        .benefit-hint em { font-style: normal; font-weight: 600; }
        .benefit-unlocked {
          font-size: 13.5px;
          font-weight: 600;
          line-height: 1.5;
          padding: 8px 12px;
          border-radius: var(--radius);
          background: rgba(0,0,0,0.04);
        }

        .contact-direct {
          margin-top: 24px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .contact-disclaimer {
          margin-top: 20px;
          padding: 14px 16px;
          border-left: 3px solid var(--red);
          background: var(--white);
          font-size: 13px;
          color: var(--dark-gray);
          max-width: 460px;
          line-height: 1.55;
        }

        /* Formulario / resumen */
        .contact-form {
          background: var(--white);
          border: 1px solid var(--light-gray);
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          position: relative;
        }
        .contact-form::before,
        .contact-form::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 24px;
          pointer-events: none;
        }
        .contact-form::before {
          top: -2px;
          left: -2px;
          border-top: 3px solid var(--yellow);
          border-left: 3px solid var(--yellow);
        }
        .contact-form::after {
          bottom: -2px;
          right: -2px;
          border-bottom: 3px solid var(--yellow);
          border-right: 3px solid var(--yellow);
        }
        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 2px solid var(--carbon);
        }
        .form-box-count {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          background: var(--yellow);
          color: var(--carbon);
          padding: 4px 12px;
          border-radius: var(--radius);
        }
        .form-empty {
          text-align: center;
          color: var(--mid-gray);
          font-size: 14px;
          line-height: 1.7;
          padding: 28px 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* Lista del carrito */
        .cart-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cart-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          background: var(--off-white);
          padding: 12px 14px;
          border: 1px solid var(--light-gray);
          border-radius: var(--radius);
          flex-wrap: wrap;
        }
        .cart-item-info {
          display: flex;
          flex-direction: column;
          gap: 3px;
          flex: 1;
          min-width: 160px;
        }
        .cart-item-name {
          font-family: var(--font-display);
          font-size: 14px;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        .cart-item-moq {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--mid-gray);
          letter-spacing: 0.05em;
        }
        .cart-item-controls {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .qty-btn-sm {
          background: var(--white);
          border: 1.5px solid var(--light-gray);
          color: var(--carbon);
          width: 30px;
          height: 30px;
          border-radius: var(--radius);
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.15s, background 0.15s;
        }
        .qty-btn-sm:hover {
          border-color: var(--carbon);
          background: var(--carbon);
          color: var(--white);
        }
        .cart-item-qty {
          font-family: var(--font-mono);
          font-size: 15px;
          font-weight: 700;
          min-width: 24px;
          text-align: center;
        }
        .btn-remove {
          background: none;
          border: none;
          color: var(--red);
          font-size: 20px;
          cursor: pointer;
          padding: 0 4px;
          line-height: 1;
        }
        .btn-remove:hover { color: darkred; }

        .cart-benefit-tag {
          padding: 10px 14px;
          border: 1.5px solid;
          border-radius: var(--radius);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }

        .contact-form-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 4px;
        }
        .contact-form-actions .btn { flex: 1; justify-content: center; }

        .form-footer-note {
          font-size: 11px;
          color: var(--mid-gray);
          line-height: 1.5;
          font-style: italic;
        }

        @media (max-width: 900px) {
          .contact-inner { grid-template-columns: 1fr; }
        }
        @media (max-width: 560px) {
          .contact { padding: 60px 0; }
          .contact-form { padding: 20px; }
          .milestone-label { display: none; }
          .benefit-progress-track { margin-bottom: 16px; }
        }
      `})]})}export{z as default};
