import{j as a,a as e}from"../../../react.jsx-runtime.v17.0.2-5269cbb2.js";import{u as s}from"../../../react.v17.0.2-b58347de.js";import"../../../index-ed20953e-c0ef4b0a.js";const i=({handleDetail:s,court:i})=>a("div",{className:"court-detail",children:[a("div",{className:"left",children:[e("img",{src:"https://unsplash.it/900",alt:""}),e("img",{className:"close-btn",src:"/assets/courts/Fechar Card.svg",alt:"",onClick:s})]}),a("div",{className:"right",children:[e("img",{src:"/assets/courts/courtseparatordetail.svg",alt:""}),a("div",{className:"court-detail-info",children:[e("div",{className:"title",children:"Location"}),e("div",{className:"detail",children:i?.location})]}),a("div",{className:"court-detail-info",children:[e("div",{className:"title",children:"ARTIST"}),e("div",{className:"detail",children:i?.artist})]}),a("div",{className:"court-detail-info",children:[e("div",{className:"title",children:"PARTNERS"}),e("div",{className:"detail",children:i?.partner.map((a=>e("p",{children:a})))})]}),a("div",{className:"court-detail-info",children:[e("div",{className:"title",children:"DURATION"}),e("div",{className:"detail",children:i?.duration})]}),a("div",{className:"court-detail-info",children:[e("div",{className:"title",children:"WHAT WE DID"}),e("div",{className:"detail",children:i?.whaWeDid})]}),a("div",{className:"court-detail-info",children:[e("div",{className:"title",children:"History"}),e("div",{className:"detail history",dangerouslySetInnerHTML:{__html:i?.astro.source}})]}),e("img",{src:"/assets/courts/courtseparatordetail.svg",alt:""})]})]}),t=({first:t,court:l})=>{const[c,r]=s(!1),d=()=>{r(!c)};return a("div",{id:"#court",className:"court",style:{...{minHeight:t?"85vh":"30vh",paddingBottom:t?"10%":""},background:`url(${l?.image})`},onClick:d,children:[e("img",{className:"leftseparator left",src:"/assets/courts/courtseparator.svg",alt:""}),a("div",{className:"titles",style:{marginTop:"auto"},children:[e("div",{className:"court-headline",children:l?.name}),e("div",{className:"court-subtext",children:l?.subname})]}),e("img",{className:"right",src:"/assets/courts/courtseparator.svg",alt:""}),c?e(i,{court:l,handleDetail:d}):""]})};export{t as default};