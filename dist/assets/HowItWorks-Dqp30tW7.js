import{j as e,p as h}from"./index-DTS8MfiA.js";import{r as i}from"./react-vendor-cxkclgJA.js";function w(){const[n,r]=i.useState(0),[o,a]=i.useState(window.innerWidth<=560);return i.useEffect(()=>{const t=()=>a(window.innerWidth<=560);return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),e.jsxs("section",{className:"how",children:[e.jsxs("div",{className:"container how-inner",children:[e.jsx("p",{className:"eyebrow how-eyebrow on-dark",children:"Cómo funciona"}),e.jsxs("h2",{className:"how-title",children:["De catálogo a",e.jsx("br",{}),"pedido despachado."]}),e.jsx("div",{className:"how-steps",children:h.map((t,s)=>{const p=!o||n===s;return e.jsxs("div",{className:`how-step ${p?"is-open":""} ${o?"is-mobile":""}`,children:[e.jsxs("div",{className:"how-step-header",onClick:()=>o&&r(l=>l===s?null:s),children:[e.jsxs("div",{children:[e.jsx("span",{className:"how-step-n",children:t.n}),e.jsx("h3",{className:"how-step-title",children:t.title})]}),o&&e.jsx("span",{className:"how-chevron",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M6 9l6 6 6-6"})})})]}),e.jsx("div",{className:"how-step-content",children:e.jsx("p",{className:"how-step-text",children:t.text})})]},t.n)})})]}),e.jsx("style",{children:`
        .how {
          background: var(--carbon);
          color: var(--white);
          padding: 88px 0;
        }
        .how-eyebrow { color: var(--yellow); margin-bottom: 16px; }
        .how-title {
          font-size: clamp(30px, 3.6vw, 42px);
          line-height: 1.03;
          max-width: 520px;
        }
        .how-steps {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
        }
        .how-step {
          border-top: 2px solid var(--yellow);
          padding-top: 18px;
          display: flex;
          flex-direction: column;
        }
        .how-step-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          -webkit-tap-highlight-color: transparent;
        }
        .how-step-n {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--yellow);
          font-weight: 700;
          display: block;
        }
        .how-step-title {
          margin-top: 12px;
          font-size: 17px;
          text-transform: none;
          font-family: var(--font-body);
          font-weight: 700;
          letter-spacing: 0;
        }
        .how-chevron {
          margin-top: 10px;
          color: var(--yellow);
          transition: transform 0.3s ease;
        }
        .how-step.is-open .how-chevron {
          transform: rotate(180deg);
        }
        
        .how-step-content {
          display: grid;
          grid-template-rows: 1fr;
          transition: grid-template-rows 0.3s ease;
        }
        .how-step-text {
          min-height: 0;
          overflow: hidden;
          margin-top: 10px;
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--light-gray);
          transition: margin-top 0.3s ease, opacity 0.3s ease;
        }

        .how-step.is-mobile .how-step-header {
          cursor: pointer;
        }
        .how-step.is-mobile:not(.is-open) .how-step-content {
          grid-template-rows: 0fr;
        }
        .how-step.is-mobile:not(.is-open) .how-step-text {
          margin-top: 0;
          opacity: 0;
        }

        @media (max-width: 900px) {
          .how-steps { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .how { padding: 56px 0; }
          .how-steps { grid-template-columns: 1fr; gap: 22px; }
        }
      `})]})}export{w as default};
