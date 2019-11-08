//Ajeitar os vetores, a seleção no menu, background image 
var size = 400;
var tela = 0;
var telaselecionada = 2;
var selecionar = true;
var x = 200;
var y = 350;
var xm = [];
var ym = [];
var xd = [];
var yd = []; 
var x0 = [];
var y0 = [];
var numzigs = 3;
var nummelhorias = 1;
var numdebuffs = 1;
var raiosharko = 40;
var raiozig = 20;
var podecolidir = true;
var tempoinv = 0;
var tempoboost = 0;
var vidas = 5;
var pontos = 0;
var dificuldade = "Fácil";
var velocidade = 5;
var velshark = 3;
var velbernie = 5;
var hmax = 1200;
var hmin = 1000;
var tirox = 0;
var tiroy = 0;
var Disparo = false;
var marina;
var bernie;
var sharko;
var zig;
var logo;
var fundodomar;
var marinaperfil,sharkoperfil,zigperfil,bernieperfil;
var zigmorto;


function preload() {
marina = loadImage('marina.png');
bernie = loadImage('bernie.png');
sharko = loadImage('sharko.png');
//zig = loadImage('zig.png');
logo = loadImage('logo.jpg')
fundodomar = loadImage('fundodomar.jpg');
sharkoperfil = loadImage('sharkoperfil.png');
zigperfil = loadImage('zigperfil.png');
marinaperfil = loadImage('marinaperfil.png');
bernieperfil = loadImage('bernieperfil.png');
zigmorto = loadImage('zigmorto.png');
}


function setup() {
  createCanvas(size,size);
  for (i=0;i<numzigs;i++) {
    y0[i] = -random(hmin,hmax);
     
    x0[i] = random(raiozig,size-raiozig);
     
  }
  for (i=0;i<nummelhorias;i++) {
    ym[i] = -random(2000,4000);
    console.log(ym[i]);
    xm[i] = random(50,350);
     
  }
   for (i=0;i<numdebuffs;i++) {
    yd[i] = -random(2000,4000);
    console.log(yd[i]);
    xd[i] = random(50,350);
     
  }
}


function draw() {
  
//INÍCIO
if(tela===0) {
    background(255)
    imageMode(CENTER);
    image(logo,200,100);
    stroke('red')
    strokeWeight(1);
    if(telaselecionada==2) {
    
    rect(24,265,105,50);}
    else {
     rect(188,265,200,50);}
  
    if(keyIsDown(ENTER)) {
     tela=telaselecionada;
      console.log(telaselecionada);
   } 
    if(keyIsDown(RIGHT_ARROW)) {
    telaselecionada = 1}
    if(keyIsDown(LEFT_ARROW)) {
    telaselecionada = 2}
  
    noStroke();
    textSize(30);
    text('JOGAR',25,300);
    text('INSTRUÇÕES',190,300);
    
    
    
    
}
//INSTRUÇÕES
if(tela==1) {
  background(0,150,250);
  imageMode(CENTER);
  image(sharkoperfil,70,50);
  image(zigperfil,330,50); 
  image(marinaperfil,70,300);
  image(bernieperfil,330,300);
  var linhas = ' Você jogará com o personagem Sharko, o tubarão fofo/raivoso que é \n apaixonado pela sereia Marina. Destrua o Zig, seu inimigo mortal,\n para vencer o jogo. Encoste na Marina para ganhar velocidade e \n evite o Bernie (o caramujo, capanga do Zig) se não quiser ficar lento. \n                                                   Atire no CTRL.';
  textSize(12);
  textLeading(20);
  textFont('Georgia');
  text(linhas,0,130);
  stroke('red');
  strokeWeight(1);
  rect(145,260,110,40);
  noStroke();
  textSize(30)
  text('JOGAR',150,290)
  if(keyIsDown(SHIFT)) {
      tela=2}
   
   
  }
    
  
//JOGO
if(tela==2) {
  image(fundodomar,200,200);
  imageMode(CENTER);
  noFill();
  fill(0,0,200);
  textSize(20);
  text('Vidas: '+ vidas,20,20)
  text('Pontos: '+ pontos,150,20);
  text('Dificuldade: '+ dificuldade,200,40);
  text('Velocidade: ' + velshark,20,40);
  
 //SHARKO
  ellipse(x,y,2*raiosharko,2*raiosharko);
  imageMode(CENTER);
  image(sharko,x,y);
  
 //CONTROLE 
  if (keyIsDown(LEFT_ARROW)) {
    x -= velshark;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += velshark;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= velshark;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += velshark;
  }
  if (keyIsDown(CONTROL) && Disparo == false) {
    tirox = x;
    tiroy = y;
    Disparo = true;
  }
  
  //ZIG
  fill('#222222')
  for (i=0;i<numzigs;i++) { 
  ellipse(x0[i],y0[i],2*raiozig,2*raiozig)
  y0[i]=y0[i]+velocidade;
    
   if(y0[i]>size+raiozig) {
   y0[i] = -random(hmin,hmax);
     
   x0[i] = random(raiozig,size-raiozig);  
   }
  }
  
  //MELHORIAS
  noStroke();
  for (i=0;i<nummelhorias;i++) {
  imageMode(CENTER);
  image(marina,xm[i],ym[i]);
   ym[i] = ym[i] + 4;
  if(ym[i]>size+35) {
    ym[i] = -random(2000,3000);
    
    xm[i] = random(50,350); 
  }
  if(dist(x,y,xm[i],ym[i]) < raiosharko + 35) {
    velshark++;
    xm[i] = random(50,350);
    
    ym[i]= random(2000,4000);
    
   }
  }
  
  //DEBUFF
  noStroke();
  for (i=0;i<numdebuffs;i++) {
  imageMode(CENTER);
  image(bernie,xd[i],yd[i]);
   yd[i] = yd[i] + velbernie;
  if(yd[i]>size+35) {
    yd[i] = -random(2000,4000);
    
    xd[i] = random(50,350);    
  }
  if(dist(x,y,xd[i],yd[i]) < raiosharko + 35) {
    velshark = velshark - 2;
    if(velshark<=0) {
      velshark = 1;}
    xd[i] = random(50,350);
    
    yd[i]= random(2000,4000); 
   }
  }
  
  //DISPARO
  fill('#222222')
  if(Disparo) {
   ellipse(tirox,tiroy,5,5);
    tiroy = tiroy - 15;
    if(tiroy < 0) {
    Disparo = false}
    
  //COLISÃO DISPARO-ZIG
    for (i=0;i<numzigs;i++) { 
    if (dist(tirox,tiroy,x0[i],y0[i]) < raiozig + 5) {
    pontos = pontos + 1;
    if(pontos==100) {
    tela = 4}
    tirox = 0;
    tiroy = 0;
    x0[i] = random(raiozig,size-raiozig);
      
    y0[i] = -random(hmin,hmax);
      
      }
    }  
  }
  
  //COLISÃO ZIG-SHARKO
  for (i=0;i<numzigs;i++) { 
   if (dist(x,y,x0[i],y0[i]) < raiosharko + raiozig && podecolidir) {
     podecolidir = false;
     x = size/2;
     y = size-50;
     vidas= vidas - 1;
     if(vidas===0) {
     tela = 3}
   
     x0[i] = random(raiozig,size-raiozig);
      
     y0[i] = -random(hmin,hmax);
    }
   }
  if(!podecolidir) {
    tempoinv++
  
    if(tempoinv==50) {
     podecolidir = true;
     tempoinv = 0;
    }
  }

  //LvL 2
  if(pontos>=10 && pontos<20) {
    dificuldade = "Médio";
    velocidade = 6;
    hmax = 1000;
    hmin = 900;
    velbernie = 7
  }
  
  //LvL 3
  if(pontos>=20 && pontos<30) {
    dificuldade = "Difícil";
    velocidade = 7;
    hmax = 900;
    hmin = 800; 
  }
  
  //LvL 4
  if(pontos>=30 && pontos<40) {
    dificuldade = "Muito Difícil";
    velocidade = 8;
    hmax = 800;
    hmin = 700; 
    velbernie = 8
  }
  
  //LvL 5 
  if(pontos>=40 && pontos<50) {
    dificuldade = "Ultimate";
    velocidade = 9;
    hmax = 700;
    hmin = 600;
  }
  
  //LvL 6
  if(pontos>=50) {
    dificuldade = "???";
    velocidade = 10;
    hamx = 600;
    hmin = 500;
    velbernie = 9
  }
 }
  //DERROTA
if(tela==3) {  
  background(90)
  textSize(50)
  text('Fim de Jogo',50,200)
  
  }
//VITÓRIA
if(tela==4) {
  background(255);
  image(zigmorto,195,120)
  textSize(50)
  text('VITÓRIA',100,300);
  stroke('red')
  rect(30,340,200,40)
  rect(275,340,72,40)
  textSize(25)
  noStroke();
  text('Jogar novamente',33,370);
  text('Menu',280,370);
  
  }
}





