import{n as V,r as A,u as B}from"./chunk-6ACEU5YF.js";import{R as q,Y as M,Z as p,aa as G,ba as I,da as U,fa as y,ha as D,ja as R,ma as j,pa as O,qa as Q}from"./chunk-ISV26RNZ.js";import{$a as u,Fa as d,Ia as b,K as x,Ma as g,Oa as m,Ua as h,Y as w,Yc as P,Za as e,Zc as k,_a as i,cc as z,ec as T,fb as v,fc as E,lb as _,ma as f,mb as C,nb as N,pb as s,tb as F,ub as L,xa as l,ya as S}from"./chunk-IJ322GAT.js";var Z=["googleButton"];function H(n,a){n&1&&(e(0,"div")(1,"span",18),s(2,"Email o contrase\xF1a incorrecta"),i()())}function J(n,a){n&1&&u(0,"span",15),n&2&&m("nzType","loading")}function K(n,a){n&1&&(e(0,"span"),s(1," Login "),i())}var W=()=>["/signUp"],de=(()=>{let a=class a{constructor(o){this.NgZone=o,this.authentificationService=f(q),this.router=f(T),this.route=f(z),this.form=new U({email:new y("",{validators:p.compose([p.required]),nonNullable:!0}),password:new y("",{validators:p.compose([p.required]),nonNullable:!0})}),this.errorLogin=d(!1),this.loading=d(!1),this.hide=d(!0),this.queryParam=d({}),this.route.queryParams.subscribe(t=>{this.queryParam.set(t)})}ngOnInit(){this.initGoogle()}initGoogle(){}initSession(){this.errorLogin.set(!1);let o={email:this.form.value.email,password:this.form.value.password};this.loading.set(!0),this.authentificationService.signIn(o).pipe(x(()=>this.loading.set(!1))).subscribe({next:t=>{Object.keys(this.queryParam()).length!=0?this.router.navigate([this.queryParam().redirectTo]):this.router.navigate(["/"]),this.authentificationService.storageToken(t.token)},error:()=>{this.errorLogin.set(!0)}})}SingUpGoogle(o){console.log(o)}updateShow(){this.hide.update(o=>!o)}};a.\u0275fac=function(t){return new(t||a)(S(b))},a.\u0275cmp=w({type:a,selectors:[["app-login-user"]],viewQuery:function(t,r){if(t&1&&_(Z,5),t&2){let c;C(c=N())&&(r.googleButton=c.first)}},standalone:!0,features:[F],decls:29,vars:8,consts:[["nz-form","",3,"formGroup","ngSubmit"],[1,"max-w-screen-xl","mx-auto","w-full"],[1,"flex","justify-between","m-8","h-full","items-center","bg-white","py-8","px-4","rounded-sm","shadow"],[1,"flex-1","max-md:hidden"],["src","assets/svg/signIn.svg","alt","imagen de inicio de Sesion",1,"w-full"],[1,"flex-1","flex","justify-center","items-center"],[1,"max-w-sm","w-full","px-2","flex","flex-col","gap-6"],[1,"font-medium","text-2xl"],[1,"text-subTittle"],[1,"flex","flex-col","gap-4"],[1,"input-login"],["type","email","formControlName","email","placeholder","Email","id","email","name","email","autocomplete","username",1,"w-full"],["formControlName","password","placeholder","Contrase\xF1a","id","password","name","password","autocomplete","current-password",1,"w-full",3,"type"],["nz-icon","",1,"text-base","select-none","cursor-pointer",3,"nzType","click"],["type","submit",1,"w-full","cursor-pointer","bg-primary","text-white","border-0","rounded","py-2"],["nz-icon","",3,"nzType"],[1,"text-center"],[1,"font-medium",3,"routerLink","queryParams"],[1,"text-red-600"]],template:function(t,r){t&1&&(e(0,"form",0),v("ngSubmit",function(){return r.initSession()}),e(1,"div",1)(2,"div",2)(3,"div",3),u(4,"img",4),i(),e(5,"div",5)(6,"div",6),u(7,"div"),e(8,"div")(9,"div",7),s(10," Iniciar Sesion "),i(),e(11,"div",8),s(12," Por favor ingrese su email y password "),i()(),e(13,"div",9)(14,"div",10),u(15,"input",11),i(),e(16,"div",10),u(17,"input",12),e(18,"span",13),v("click",function(){return r.updateShow()}),i()(),g(19,H,3,0,"div"),i(),e(20,"div")(21,"button",14),g(22,J,1,1,"span",15)(23,K,2,0),i()(),e(24,"div",16)(25,"span"),s(26," \xBFNo tiene una cuenta ? "),e(27,"a",17),s(28," Registrarse"),i()()()()()()()()),t&2&&(m("formGroup",r.form),l(17),m("type",r.hide()?"password":"text"),l(),m("nzType",r.hide()?"eye-invisible":"eye"),l(),h(19,r.errorLogin()?19:-1),l(3),h(22,r.loading()?22:23),l(5),m("routerLink",L(7,W))("queryParams",r.queryParam()))},dependencies:[B,A,Q,D,M,G,I,R,j,E,k,P,O,V],styles:[".input-login[_ngcontent-%COMP%]{border:0;border-radius:5px;background-color:#ebf1f9;padding:8px 10px;display:flex}.input-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background:transparent;outline:none;border:0;flex:1;align-items:center}"]});let n=a;return n})();export{de as LoginUserComponent};
