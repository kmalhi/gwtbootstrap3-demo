function Zic(){}
function Oic(a,b,c){ejb.call(this,a,b,c,(LYb(),KYb))}
function gjc(a){var b;if(!a.i){b=new Xic(new Zic);a.i=b}return a.i}
function fjc(a){var b;if(!a.g){b=new Oic(nib(Kjb(a.b)),gjc(a),ejc(a));Fib((Ljb(a.b),b),Wjb(Ljb(a.b)));a.g=b}return a.g}
function Xic(){var a,b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;yjb(this,(a=new _Db,dxb(a,(b=new Kzb(Dyc),dxb(b,(c=new WCb,c.b='Project Setup',VCb(c),c.c='basic setup and using custom themes',VCb(c),c)),dxb(b,(d=new cDb,dxb(d,(i=new oDb,nDb(i,(j=new FAb(3),xEb(j.d,Eyc),j)),i)),dxb(d,(k=new fDb,dxb(k,new tBb((n=new Tpb,n.b.b+='For the basic setup just inherit the basic GwtBootstrap3 module into your *.gwt.xml.',new UY(n.b.b)).b)),dxb(k,(o=new _nc,SDb(o,(p=new Tpb,p.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3"/&gt;\\n &lt;/module&gt;\\n',new UY(p.b.b)).b),q_(o.ab,Hyc,true),o)),k)),d)),dxb(b,(e=new cDb,dxb(e,(q=new oDb,nDb(q,(r=new FAb(3),xEb(r.d,'Bootstrap2 Look-a-like Setup'),r)),q)),dxb(e,(s=new fDb,dxb(s,new tBb((t=new Tpb,t.b.b+='For the setup with a Bootstrap2 look-a-like theme inherit the GwtBootstrap3Theme into your *.gwt.xml.',new UY(t.b.b)).b)),dxb(s,(u=new _nc,SDb(u,(v=new Tpb,v.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.GwtBootstrap3Theme"/&gt;\\n &lt;/module&gt;\\n',new UY(v.b.b)).b),q_(u.ab,Hyc,true),u)),s)),e)),dxb(b,(f=new cDb,dxb(f,(w=new oDb,nDb(w,(x=new FAb(3),xEb(x.d,'Custom Theme'),x)),w)),dxb(f,(y=new fDb,dxb(y,new tBb((z=new Tpb,z.b.b+='1. For the setup with a custom theme inherit the GwtBootstrap3 your *.gwt.xml. <br> 2. Next, download the theme that you wish to use. <br> 3. Then, place the CSS/JS files from the theme either in your public folder or a resource folder. <br> 4. If you use a resource folder, link the resource folder as public path in your *.gwt.xml. <br> 5. Link the CSS/JS files into your *.gwt.xml AFTER the GwtBootstrap3 inherit. <br> <br> ** Since your CSS files are linked last onto the page they will be the priority stylesheet and take priority over the others, giving you the custom theme.',new UY(z.b.b)).b)),dxb(y,(A=new _nc,SDb(A,(B=new Tpb,B.b.b+="&lt;module&gt;\\n \\s\\s&lt;inherits name=\"org.gwtbootstrap3.GwtBootstrap3\"/&gt;\\n\\n \\s\\s&lt;public path='resource'&gt;\\n \\s\\s\\s\\s&lt;include name='css/*.css'/&gt;\\n \\s\\s\\s\\s&lt;include name='js/*.js'/&gt;\\n \\s\\s&lt;/public&gt;\\n\\n \\s\\s&lt;stylesheet src='css/theme.css'/&gt;\\n \\s\\s&lt;script src='js/theme.js'/&gt;\\n &lt;/module&gt;\\n",new UY(B.b.b)).b),q_(A.ab,Hyc,true),A)),y)),f)),dxb(b,(g=new cDb,dxb(g,(C=new oDb,nDb(C,(D=new FAb(3),xEb(D.d,'Support for IE8'),D)),C)),dxb(g,(E=new fDb,dxb(E,new tBb((F=new Tpb,F.b.b+='For support for IE8 you need to inherit the Respond module into your *.gwt.xml.',new UY(F.b.b)).b)),dxb(E,(G=new _nc,SDb(G,(H=new Tpb,H.b.b+='&lt;module&gt;\\n \\s\\s&lt;inherits name="org.gwtbootstrap3.extras.respond.Respond"/&gt;\\n &lt;/module&gt;\\n',new UY(H.b.b)).b),q_(G.ab,Hyc,true),G)),E)),g)),b)),a))}
QX(1269,525,Vsc,Oic);QX(1272,530,Wsc,Xic);QX(1273,1,{},Zic);QX(1280,1,xtc);_.wb=function wjc(){nlb(this.c,fjc(this.b.b))};var GT=hob(_xc,'SetupPresenter',1269),IT=hob(_xc,'SetupView',1272),HT=hob(_xc,'SetupView_BinderImpl',1273);Atc(Em)(35);