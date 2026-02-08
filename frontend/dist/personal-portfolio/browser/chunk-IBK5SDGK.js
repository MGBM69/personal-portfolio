import{ba as M,da as U,fa as R,ga as T,ia as W,ja as X,ma as J,n as q,na as Q,o as f,oa as K,pa as Z,ra as tt,sa as et,ta as nt,u as Y,ua as it,va as I,wa as ot}from"./chunk-XDP6N6TI.js";import{$a as g,$b as o,Ca as w,Kb as v,Nb as _,Ob as G,Qa as p,Va as A,_b as D,ac as x,ba as b,bc as P,ca as S,ea as B,fb as m,fc as H,ga as u,gb as y,jb as F,jc as $,kb as k,kc as O,na as s,oa as d,sb as z,tb as V,ub as L,vb as j,wb as N,xb as e,yb as n,zb as a}from"./chunk-LQ65F3YM.js";var lt=`
    .p-floatlabel {
        display: block;
        position: relative;
    }

    .p-floatlabel label {
        position: absolute;
        pointer-events: none;
        top: 50%;
        transform: translateY(-50%);
        transition-property: all;
        transition-timing-function: ease;
        line-height: 1;
        font-weight: dt('floatlabel.font.weight');
        inset-inline-start: dt('floatlabel.position.x');
        color: dt('floatlabel.color');
        transition-duration: dt('floatlabel.transition.duration');
    }

    .p-floatlabel:has(.p-textarea) label {
        top: dt('floatlabel.position.y');
        transform: translateY(0);
    }

    .p-floatlabel:has(.p-inputicon:first-child) label {
        inset-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label,
    .p-floatlabel:has(input[placeholder]) label,
    .p-floatlabel:has(textarea[placeholder]) label {
        top: dt('floatlabel.over.active.top');
        transform: translateY(0);
        font-size: dt('floatlabel.active.font.size');
        font-weight: dt('floatlabel.active.font.weight');
    }

    .p-floatlabel:has(input.p-filled) label,
    .p-floatlabel:has(textarea.p-filled) label,
    .p-floatlabel:has(.p-inputwrapper-filled) label {
        color: dt('floatlabel.active.color');
    }

    .p-floatlabel:has(input:focus) label,
    .p-floatlabel:has(input:-webkit-autofill) label,
    .p-floatlabel:has(textarea:focus) label,
    .p-floatlabel:has(.p-inputwrapper-focus) label {
        color: dt('floatlabel.focus.color');
    }

    .p-floatlabel-in .p-inputtext,
    .p-floatlabel-in .p-textarea,
    .p-floatlabel-in .p-select-label,
    .p-floatlabel-in .p-multiselect-label,
    .p-floatlabel-in .p-multiselect-label:has(.p-chip),
    .p-floatlabel-in .p-autocomplete-input-multiple,
    .p-floatlabel-in .p-cascadeselect-label,
    .p-floatlabel-in .p-treeselect-label {
        padding-block-start: dt('floatlabel.in.input.padding.top');
        padding-block-end: dt('floatlabel.in.input.padding.bottom');
    }

    .p-floatlabel-in:has(input:focus) label,
    .p-floatlabel-in:has(input.p-filled) label,
    .p-floatlabel-in:has(input:-webkit-autofill) label,
    .p-floatlabel-in:has(textarea:focus) label,
    .p-floatlabel-in:has(textarea.p-filled) label,
    .p-floatlabel-in:has(.p-inputwrapper-focus) label,
    .p-floatlabel-in:has(.p-inputwrapper-filled) label,
    .p-floatlabel-in:has(input[placeholder]) label,
    .p-floatlabel-in:has(textarea[placeholder]) label {
        top: dt('floatlabel.in.active.top');
    }

    .p-floatlabel-on:has(input:focus) label,
    .p-floatlabel-on:has(input.p-filled) label,
    .p-floatlabel-on:has(input:-webkit-autofill) label,
    .p-floatlabel-on:has(textarea:focus) label,
    .p-floatlabel-on:has(textarea.p-filled) label,
    .p-floatlabel-on:has(.p-inputwrapper-focus) label,
    .p-floatlabel-on:has(.p-inputwrapper-filled) label,
    .p-floatlabel-on:has(input[placeholder]) label,
    .p-floatlabel-on:has(textarea[placeholder]) label {
        top: 0;
        transform: translateY(-50%);
        border-radius: dt('floatlabel.on.border.radius');
        background: dt('floatlabel.on.active.background');
        padding: dt('floatlabel.on.active.padding');
    }

    .p-floatlabel:has([class^='p-'][class$='-fluid']) {
        width: 100%;
    }

    .p-floatlabel:has(.p-invalid) label {
        color: dt('floatlabel.invalid.color');
    }
`;var mt=["*"],ft=`
    ${lt}

    /* For PrimeNG */
    .p-floatlabel:has(.ng-invalid.ng-dirty) label {
        color: dt('floatlabel.invalid.color');
    }
`,ht={root:({instance:t})=>["p-floatlabel",{"p-floatlabel-over":t.variant==="over","p-floatlabel-on":t.variant==="on","p-floatlabel-in":t.variant==="in"}]},at=(()=>{class t extends U{name="floatlabel";style=ft;classes=ht;static \u0275fac=(()=>{let i;return function(c){return(i||(i=w(t)))(c||t)}})();static \u0275prov=b({token:t,factory:t.\u0275fac})}return t})();var rt=new B("FLOATLABEL_INSTANCE"),bt=(()=>{class t extends it{_componentStyle=u(at);$pcFloatLabel=u(rt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(I,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}variant="over";static \u0275fac=(()=>{let i;return function(c){return(i||(i=w(t)))(c||t)}})();static \u0275cmp=m({type:t,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:2,hostBindings:function(l,c){l&2&&D(c.cx("root"))},inputs:{variant:"variant"},features:[H([at,{provide:rt,useExisting:t},{provide:nt,useExisting:t}]),k([I]),F],ngContentSelectors:mt,decls:1,vars:0,template:function(l,c){l&1&&(_(),G(0))},dependencies:[f,M,ot],encapsulation:2,changeDetection:0})}return t})(),st=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=y({type:t});static \u0275inj=S({imports:[bt,M,M]})}return t})();var dt=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Gt=`
    ${dt}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`;var pt=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=y({type:t});static \u0275inj=S({})}return t})();var h=class t{apiUrl=`${et.apiUrl}/thoughts`;http=u(Y);submitThought(r){return this.http.post(this.apiUrl,r)}getThoughts(){return this.http.get(this.apiUrl)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=b({token:t,factory:t.\u0275fac,providedIn:"root"})};var E=class t{constructor(r,i){this.fb=r;this.thoughtService=i;this.thoughtForm=this.fb.group({name:["",T.required],position:[""],message:["",[T.required,T.maxLength(1e3)]]})}thoughtForm;submitting=!1;thoughtSubmitted=new A;submitThought(){if(this.thoughtForm.invalid)return;this.submitting=!0;let r=this.thoughtForm.value;this.thoughtService.submitThought(r).subscribe({next:()=>{this.thoughtForm.reset(),this.submitting=!1,this.thoughtSubmitted.emit()},error:()=>{this.submitting=!1}})}static \u0275fac=function(i){return new(i||t)(g(Z),g(h))};static \u0275cmp=m({type:t,selectors:[["app-thought-form"]],outputs:{thoughtSubmitted:"thoughtSubmitted"},decls:15,vars:3,consts:[[1,"font-monospace",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","placeholder","Your Name here!","formControlName","name",1,"form-control"],["for","position",1,"form-label"],["type","text","id","position","placeholder","Your position (optional)","formControlName","position",1,"form-control"],["for","message",1,"form-label"],["id","message","rows","4","placeholder","What do you think about me?","formControlName","message",1,"form-control"],["type","submit",1,"btn","btn-outline-success",3,"disabled"]],template:function(i,l){i&1&&(e(0,"form",0),v("ngSubmit",function(){return l.submitThought()}),e(1,"div",1)(2,"label",2),o(3,"Name"),n(),a(4,"input",3),n(),e(5,"div",1)(6,"label",4),o(7,"Position"),n(),a(8,"input",5),n(),e(9,"div",1)(10,"label",6),o(11,"Message"),n(),a(12,"textarea",7),n(),e(13,"button",8),o(14),n()()),i&2&&(N("formGroup",l.thoughtForm),p(13),N("disabled",l.submitting),p(),P(" ",l.submitting?"Submitting...":"Submit Thought"," "))},dependencies:[f,tt,J,R,W,X,Q,K,st,pt],encapsulation:2})};var vt=(t,r)=>r.id;function xt(t,r){t&1&&(e(0,"div",54)(1,"strong",58),o(2,"Loading..."),n(),a(3,"div",59),n())}function St(t,r){if(t&1&&(e(0,"div",57)(1,"div",60)(2,"div",61)(3,"p",62),o(4),n(),e(5,"p",63),o(6),n()(),e(7,"div",64)(8,"p",65),o(9),n()(),e(10,"div",66)(11,"small"),o(12),$(13,"date"),n()()()()),t&2){let i=r.$implicit;p(4),x(i.name),p(2),x(i.position),p(3),x(i.message),p(3),x(O(13,4,i.createdAt,"medium"))}}var ut=class t{constructor(r){this.thoughtService=r}thoughts=[];loading=!1;ngOnInit(){this.loadThoughts()}loadThoughts(){this.loading=!0,this.thoughtService.getThoughts().subscribe({next:r=>{this.thoughts=r,this.loading=!1},error:()=>{this.loading=!1}})}static \u0275fac=function(i){return new(i||t)(g(h))};static \u0275cmp=m({type:t,selectors:[["app-home"]],decls:88,vars:1,consts:[[1,"container","mt-3"],[1,"row","g-2"],[1,"col-12","col-md-8"],[1,"card","card","h-100"],[1,"card-header","font-monospace"],[1,"card-body"],[1,"card-title","font-monospace"],[1,"mt-3","mb-1"],["href","https://github.com/MGBM69","target","_blank",1,"btn","btn-outline-dark"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-github"],["d","M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"],["href","https://www.linkedin.com/in/banuka-magamulla-87bb04294/","target","_blank",1,"btn","btn-outline-dark","ms-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-linkedin"],["d","M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"],["href","https://www.instagram.com/banukamalshan/","target","_blank",1,"btn","btn-outline-dark","ms-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-instagram"],["d","M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"],[1,"card","font-monospace",2,"width","18rem"],[1,"card-header"],[1,"list-group","list-group-flush"],[1,"list-group-item","d-flex","align-items-center","gap-2"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 100 100",1,"tech-icon"],["fill","#e23237","d","M3 16.575 49.52 0l47.77 16.28-7.735 61.547L49.52 100 10.11 78.121z"],["fill","#b52e31","d","M97.291 16.28 49.52 0v100l40.037-22.136z"],["fill","#fff","d","M49.593 11.676 20.606 76.17l10.829-.185 5.82-14.549h26.003L69.63 76.17l10.35.184zm.074 20.663 9.797 20.479H41.048z"],["fill","#6cb52d","clip-path","url(#a)"],["d","M91.059 5.746c-1.437 3.493-3.295 6.59-5.35 9.363C76.641 5.87 63.958 0 49.963 0 22.468-.001 0 22.343 0 49.938 0 64.355 6.168 77.335 15.953 86.5l1.858 1.66A49.68 49.68 0 0 0 49.939 99.9c26.257 0 47.882-20.486 49.74-46.347 1.486-12.559-2.328-28.635-8.62-47.808"],["d","M23.186 86.92c-1.437 1.858-4.112 2.056-5.97.62-1.858-1.437-2.056-4.113-.62-5.97 1.437-1.858 4.113-2.056 5.97-.62 1.76 1.437 2.057 4.112.62 5.97"],["d","M90.762 71.983C78.5 88.358 52.143 82.81 35.349 83.626c0 0-2.998.199-5.97.62 0 0 1.14-.52 2.576-1.04 11.84-4.113 17.414-4.955 24.622-8.646 13.5-6.91 26.976-22.046 29.676-37.701-5.152 15.036-20.808 28.016-35.026 33.267-9.785 3.617-27.397 7.11-27.397 7.11l-.718-.422c-11.94-5.87-12.361-31.83 9.487-40.178 9.586-3.716 18.653-1.66 29.057-4.112 11.023-2.577 23.805-10.825 28.932-21.626 5.722 17.415 12.733 44.39.174 61.086"],["id","a"],["fill","#fff","d","M0 0h100v100H0z"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 100 100","width","24","height","24","preserveAspectRatio","xMidYMid meet"],["fill","#5382a1","d","M36.753 77.336s-3.822 2.222 2.72 2.974c7.924.904 11.973.774 20.706-.879 0 0 2.296 1.44 5.502 2.687-19.576 8.39-44.304-.486-28.928-4.782"],["fill","#5382a1","d","M34.36 66.387s-4.286 3.173 2.26 3.85c8.464.873 15.15.945 26.717-1.283 0 0 1.6 1.622 4.115 2.51-23.668 6.92-50.03.545-33.092-5.077"],["fill","#e76f00","d","M54.527 47.815c4.823 5.554-1.267 10.551-1.267 10.551s12.247-6.322 6.622-14.24C54.63 36.743 50.6 33.074 72.41 20.425c0 0-34.234 8.55-17.883 27.39"],["fill","#5382a1","d","M80.418 85.434s2.827 2.33-3.115 4.133c-11.3 3.423-47.03 4.456-56.956.136-3.568-1.552 3.124-3.706 5.228-4.159 2.195-.475 3.45-.387 3.45-.387-3.968-2.795-25.648 5.49-11.012 7.861 39.913 6.473 72.757-2.914 62.405-7.584"],["fill","#5382a1","d","M38.59 55.044s-18.174 4.317-6.436 5.884c4.956.664 14.837.514 24.04-.258 7.522-.634 15.075-1.983 15.075-1.983s-2.653 1.136-4.571 2.446c-18.457 4.854-54.11 2.596-43.846-2.37 8.68-4.195 15.738-3.72 15.738-3.72"],["fill","#5382a1","d","M71.193 73.268c18.762-9.75 10.088-19.118 4.033-17.856-1.484.309-2.146.576-2.146.576s.551-.863 1.603-1.236c11.978-4.212 21.19 12.42-3.867 19.007 0 0 .29-.26.377-.491"],["fill","#e76f00","d","M59.882 0s10.39 10.395-9.855 26.377C33.793 39.2 46.325 46.51 50.02 54.861c-9.476-8.55-16.43-16.077-11.765-23.082C45.103 21.496 64.075 16.51 59.882 0"],["fill","#5382a1","d","M40.434 99.686c18.009 1.153 45.663-.64 46.318-9.161 0 0-1.26 3.23-14.883 5.796-15.371 2.892-34.329 2.555-45.573.7 0 0 2.302 1.906 14.138 2.665"],["fill","#017acb","d","M0 0h100v100H0z"],["fill","#fff","d","M48.016 37.031h4.797v8.282h-12.97v36.843h-9.374V45.312H17.5v-8.28h30.516m36.61 41.219c-1.907 2.016-3.954 3.14-7.36 4.063-1.485.406-1.735.421-5.078.406-3.344-.016-3.61-.016-5.235-.438-4.203-1.078-7.594-3.187-9.906-6.172-.656-.843-1.734-2.593-1.734-2.812 0-.063.156-.203.359-.297s.625-.36.969-.562c.343-.204.968-.579 1.39-.797.422-.22 1.64-.938 2.703-1.579 1.063-.64 2.032-1.156 2.141-1.156.11 0 .313.219.469.485.937 1.578 3.125 3.593 4.672 4.28.953.407 3.062.86 4.078.86.937 0 2.656-.406 3.578-.828.984-.453 1.484-.906 2.078-1.812.406-.641.453-.813.438-2.032 0-1.125-.063-1.437-.375-1.953-.875-1.437-2.063-2.187-6.875-4.312-4.97-2.203-7.204-3.516-9.016-5.282-1.344-1.312-1.61-1.67-2.453-3.312-1.094-2.11-1.235-2.797-1.25-5.937-.016-2.204.031-2.922.265-3.672.329-1.125 1.391-3.297 1.875-3.844 1-1.172 1.36-1.531 2.063-2.11 2.125-1.75 5.438-2.906 8.61-3.015.359 0 1.546.062 2.656.14 3.187.266 5.359 1.047 7.453 2.72 1.578 1.25 3.968 4.187 3.734 4.577-.156.235-6.39 4.391-6.797 4.516-.25.078-.422-.016-.765-.422-2.125-2.547-2.985-3.094-5.047-3.219-1.469-.093-2.25.078-3.235.735-1.03.687-1.53 1.734-1.53 3.187.015 2.125.827 3.125 3.827 4.61 1.938.953 3.594 1.734 3.719 1.734.188 0 4.203 2 5.25 2.625 4.875 2.86 6.86 5.797 7.375 10.86.375 3.812-.703 7.296-3.047 9.765"],["fill","#8cc84b","d","M46.279 1.067c2.479-1.42 5.709-1.426 8.186 0 12.464 7.042 24.931 14.074 37.393 21.12 2.343 1.321 3.911 3.93 3.887 6.63v42.371c.018 2.813-1.705 5.483-4.178 6.774-12.422 7.004-24.838 14.016-37.259 21.02-2.53 1.447-5.825 1.335-8.277-.23-3.724-2.16-7.455-4.308-11.18-6.465-.76-.453-1.619-.815-2.156-1.552.475-.64 1.324-.72 2.015-1 1.554-.495 2.982-1.288 4.41-2.058.361-.247.802-.153 1.148.069 3.185 1.826 6.342 3.705 9.537 5.513.682.394 1.372-.129 1.955-.453 12.19-6.89 24.396-13.754 36.584-20.646a1.21 1.21 0 0 0 .664-1.191c.009-13.977.002-27.957.005-41.934a1.31 1.31 0 0 0-.781-1.308C75.852 20.756 63.479 13.773 51.102 6.8a1.29 1.29 0 0 0-1.458-.002c-12.378 6.975-24.749 13.964-37.126 20.935-.506.23-.845.738-.785 1.302q.002 20.966 0 41.936a1.19 1.19 0 0 0 .673 1.176c3.303 1.873 6.61 3.733 9.916 5.6 1.861 1.002 4.148 1.597 6.199.83 1.81-.65 3.08-2.497 3.045-4.42.017-13.895-.009-27.793.013-41.686-.046-.617.54-1.127 1.14-1.069 1.586-.01 3.175-.021 4.762.005.663-.015 1.119.649 1.037 1.27-.007 13.984.017 27.968-.01 41.952.003 3.726-1.528 7.781-4.975 9.605-4.247 2.2-9.496 1.733-13.691-.376-3.632-1.813-7.098-3.952-10.666-5.894C6.697 76.68 4.983 73.999 5 71.189V28.817c-.026-2.756 1.604-5.412 4.021-6.713Q27.651 11.588 46.28 1.067"],["fill","#8cc84b","d","M57.114 30.417c5.417-.348 11.216-.206 16.091 2.462 3.774 2.046 5.867 6.338 5.933 10.53-.105.566-.696.878-1.236.84-1.572-.003-3.144.02-4.716-.011-.667.025-1.054-.59-1.138-1.179-.451-2.006-1.545-3.993-3.434-4.96-2.898-1.452-6.26-1.38-9.42-1.349-2.308.123-4.79.322-6.744 1.68-1.5 1.027-1.957 3.102-1.421 4.773.505 1.2 1.89 1.587 3.023 1.944 6.529 1.708 13.447 1.538 19.85 3.785 2.651.916 5.245 2.697 6.152 5.472 1.187 3.72.667 8.168-1.98 11.154-2.146 2.458-5.273 3.796-8.39 4.522-4.149.925-8.454.949-12.666.538-3.962-.451-8.084-1.492-11.142-4.191-2.614-2.27-3.892-5.808-3.765-9.223.03-.576.605-.978 1.157-.93 1.583-.014 3.165-.018 4.748.001.632-.045 1.101.501 1.133 1.097.292 1.912 1.01 3.918 2.678 5.051 3.216 2.075 7.253 1.933 10.936 1.991 3.052-.135 6.477-.176 8.967-2.193 1.314-1.15 1.703-3.075 1.348-4.73-.384-1.398-1.847-2.05-3.103-2.476-6.444-2.038-13.44-1.299-19.822-3.604-2.59-.916-5.096-2.647-6.092-5.309-1.389-3.767-.752-8.427 2.172-11.313 2.852-2.87 6.968-3.976 10.881-4.372"],["fill","#6e81b6","fill-rule","evenodd","d","M50 75.677c27.614 0 50-11.345 50-25.338S77.614 25 50 25 0 36.345 0 50.339s22.386 25.338 50 25.338","clip-rule","evenodd"],["fill","#fff","fill-rule","evenodd","d","m60.133 58.528 2.48-12.764c.56-2.881.095-5.03-1.382-6.388-1.431-1.314-3.86-1.953-7.427-1.953H49.51l1.229-6.324a.812.812 0 0 0-.798-.969h-5.928a.81.81 0 0 0-.798.659l-2.634 13.55c-.24-1.524-.83-2.835-1.774-3.916-1.74-1.99-4.49-3-8.176-3H19.14a.814.814 0 0 0-.798.658l-5.33 27.43a.81.81 0 0 0 .798.968h5.974c.39 0 .724-.276.798-.66l1.29-6.634h4.447c2.334 0 4.295-.252 5.826-.75 1.566-.51 3.006-1.373 4.276-2.562a13.1 13.1 0 0 0 2.526-3.136l-1.065 5.48a.81.81 0 0 0 .798.968h5.929c.39 0 .723-.276.798-.658l2.926-15.056H52.4c1.734 0 2.242.345 2.38.493.125.135.385.612.093 2.116l-2.358 12.136a.813.813 0 0 0 .798.968h6.023a.81.81 0 0 0 .797-.656","clip-rule","evenodd"],["fill","#000","fill-rule","evenodd","d","M28.197 42.565q3.405 0 4.54 1.257 1.133 1.258.54 4.315-.621 3.184-2.388 4.546-1.77 1.362-5.383 1.362h-3.635l2.231-11.48zm-14.559 23.1h5.975l1.418-7.291h5.118q3.387 0 5.575-.713 2.187-.712 3.977-2.386a12.2 12.2 0 0 0 2.431-3.045q.93-1.665 1.32-3.674.949-4.877-1.429-7.598t-7.563-2.721H18.97zm30.203-34.721h5.928l-1.417 7.293h5.282q4.984 0 6.876 1.738t1.135 5.634l-2.48 12.765h-6.023L55.5 46.237q.403-2.072-.296-2.825t-2.974-.753h-4.738l-3.054 15.715H38.51z","clip-rule","evenodd"],[1,"container","my-5"],[1,"text-center","mb-4","font-monospace"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-6"],[3,"thoughtSubmitted"],[1,"mt-3","text-center","mb-2"],[1,"font-monospace"],[1,"d-flex","align-items-center"],[1,"d-flex","justify-content-center","mb-5","mt-5"],[1,"row","row-cols-1","row-cols-md-4","g-3","justify-content-center"],[1,"col","d-flex","justify-content-center"],["role","status"],["aria-hidden","true",1,"spinner-border","ms-auto"],[1,"card","border-success","mb-3","card","h-100","font-monospace",2,"max-width","18rem"],[1,"card-header","bg-transparent","border-success"],[1,"fw-bolder","fs-5"],[1,"text-end","fs-6","mt-0"],[1,"card-body","text-success"],[1,"card-text"],[1,"card-footer","bg-transparent","border-success"]],template:function(i,l){i&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),o(5," What should you know about me "),n(),e(6,"div",5)(7,"h5",6),o(8," I' m Banuka Malshan. A 23-year-old full-stack developer who believes the best code is written by great teams. I thrive on collaboration, turning ideas into reality alongside people who inspire me. When I'm not crafting digital experiences, you'll find me cherishing life's simple moments with the people I love and finding ways to lift others up. I'm driven by curiosity, fueled by connection, and always ready to build something meaningful \u2014 both in code and in life. "),n(),e(9,"div",7)(10,"a",8),s(),e(11,"svg",9),a(12,"path",10),n()(),d(),e(13,"a",11),s(),e(14,"svg",12),a(15,"path",13),n()(),d(),e(16,"a",14),s(),e(17,"svg",15),a(18,"path",16),n()()()()()(),d(),e(19,"div",17)(20,"div",18),o(21,"My Hands Dirty By"),n(),e(22,"ul",19)(23,"li",20),s(),e(24,"svg",21),a(25,"path",22)(26,"path",23)(27,"path",24),n(),d(),e(28,"span"),o(29,"Angular"),n()(),e(30,"li",20),s(),e(31,"svg",21)(32,"g",25),a(33,"path",26)(34,"path",27)(35,"path",28),n(),e(36,"defs")(37,"clipPath",29),a(38,"path",30),n()()(),d(),e(39,"span"),o(40,"Spring Boot"),n()(),e(41,"li",20),s(),e(42,"svg",31),a(43,"path",32)(44,"path",33)(45,"path",34)(46,"path",35)(47,"path",36)(48,"path",37)(49,"path",38)(50,"path",39),n(),d(),e(51,"span"),o(52,"Java"),n()(),e(53,"li",20),s(),e(54,"svg",21),a(55,"path",40)(56,"path",41),n(),d(),e(57,"span"),o(58,"Typescript"),n()(),e(59,"li",20),s(),e(60,"svg",21),a(61,"path",42)(62,"path",43),n(),d(),e(63,"span"),o(64,"Nodejs"),n()(),e(65,"li",20),s(),e(66,"svg",21),a(67,"path",44)(68,"path",45)(69,"path",46),n(),d(),e(70,"span"),o(71,"Php"),n()()()()()(),e(72,"section",47)(73,"h2",48),o(74,"What do you think about me?"),n(),a(75,"div",49),e(76,"div",50)(77,"app-thought-form",51),v("thoughtSubmitted",function(){return l.loadThoughts()}),n()()(),a(78,"hr"),e(79,"section")(80,"div",52)(81,"h2",53),o(82,"Thoughts about Banuka"),n()(),z(83,xt,4,0,"div",54),e(84,"div",55)(85,"div",56),L(86,St,14,7,"div",57,vt),n()()()),i&2&&(p(83),V(l.loading?83:-1),p(3),j(l.thoughts))},dependencies:[E,f,q],styles:[".tech-icon[_ngcontent-%COMP%]{width:1.2rem;height:1.2rem;flex-shrink:0;filter:contrast(1.1)}"]})};export{ut as Home};
