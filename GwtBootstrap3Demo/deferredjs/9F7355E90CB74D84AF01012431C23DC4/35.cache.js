function Fjc(){}
function ujc(a,b,c){Mjb.call(this,a,b,c,(rZb(),qZb))}
function Ojc(a){var b;if(!a.i){b=new Djc(new Fjc);a.i=b}return a.i}
function Njc(a){var b;if(!a.g){b=new ujc(Vib(qkb(a.b)),Ojc(a),Mjc(a));ljb((rkb(a.b),b),Ckb(rkb(a.b)));a.g=b}return a.g}
function Djc(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;ekb(this,(a=new HEb,Lxb(a,(b=new qAb(qzc),Lxb(b,(c=new CDb,c.b='Project Setup',BDb(c),c.c='basic setup and using custom themes',BDb(c),c)),Lxb(b,(d=new KDb,Lxb(d,(i=new WDb,VDb(i,(j=new lBb(3),dFb(j.d,rzc),j)),i)),Lxb(d,(k=new NDb,Lxb(k,new _Bb((n=new zqb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new sZ(n.b.b)).b)),Lxb(k,(o=new Hoc,yEb(o,(p=new zqb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new sZ(p.b.b)).b),Q_(o.ab,uzc,true),o)),k)),d)),Lxb(b,(e=new KDb,Lxb(e,(q=new WDb,VDb(q,(r=new lBb(3),dFb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),Lxb(e,(s=new NDb,Lxb(s,new _Bb((t=new zqb,t.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new sZ(t.b.b)).b)),Lxb(s,(u=new Hoc,yEb(u,(v=new zqb,v.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new sZ(v.b.b)).b),Q_(u.ab,uzc,true),u)),s)),e)),Lxb(b,(f=new KDb,Lxb(f,(w=new WDb,VDb(w,(x=new lBb(3),dFb(x.d,'Custom Theme'),x)),w)),Lxb(f,(y=new NDb,Lxb(y,new _Bb((z=new zqb,z.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new sZ(z.b.b)).b)),Lxb(y,(A=new Hoc,yEb(A,(B=new zqb,B.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new sZ(B.b.b)).b),Q_(A.ab,uzc,true),A)),y)),f)),Lxb(b,(g=new KDb,Lxb(g,(C=new WDb,VDb(C,(D=new lBb(3),dFb(D.d,'Support for IE8'),D)),C)),Lxb(g,(E=new NDb,Lxb(E,new _Bb((F=new zqb,F.b.b+='For support for IE8 you need to inherit the Respond module into your *.gwt.xml.',new sZ(F.b.b)).b)),Lxb(E,(G=new Hoc,yEb(G,(H=new zqb,H.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n',new sZ(H.b.b)).b),Q_(G.ab,uzc,true),G)),E)),g)),b)),a))}
oY(1272,528,Ctc,ujc);oY(1275,533,Dtc,Djc);oY(1276,1,{},Fjc);oY(1283,1,euc);_.Ab=function ckc(){Vlb(this.c,Njc(this.b.b))};var eU=Pob(Oyc,'SetupPresenter',1272),gU=Pob(Oyc,'SetupView',1275),fU=Pob(Oyc,'SetupView_BinderImpl',1276);huc(Pm)(35);