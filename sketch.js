var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj; 
var blocks;
var group;

var sliders;
function setup() {
  createCanvas(6500, 611);
  sliderR = createSlider(0, 255, 0);
  sliderG = createSlider(0, 255, 0);
  sliderB = createSlider(0, 255, 0);
  sliderR.position(625, 200)
  sliderG.position(625, 300)
  sliderB.position(625, 400)
  a = createSprite(50, 50, 100, 100);
  b = createSprite(150, 50, 100, 100);
  c = createSprite(250, 50, 100, 100);
  d = createSprite(350, 50, 100, 100);
  e = createSprite(450, 50, 100, 100);
  f = createSprite(550, 50, 100, 100);
  g = createSprite(50, 150, 100, 100);
  h = createSprite(150, 150, 100, 100);
  i = createSprite(250, 150, 100, 100);
  j = createSprite(350, 150, 100, 100);
  k = createSprite(450, 150, 100, 100);
  l = createSprite(550, 150, 100, 100);
  m = createSprite(50, 250, 100, 100);
  n = createSprite(150, 250, 100, 100);
  o = createSprite(250, 250, 100, 100);
  p = createSprite(350, 250, 100, 100);
  q = createSprite(450, 250, 100, 100);
  r = createSprite(550, 250, 100, 100);
  s = createSprite(50, 350, 100, 100);
  t = createSprite(150, 350, 100, 100);
  u = createSprite(250, 350, 100, 100);
  v = createSprite(350, 350, 100, 100);
  w = createSprite(450, 350, 100, 100);
  x = createSprite(550, 350, 100, 100);
  y = createSprite(50, 450, 100, 100);
  z = createSprite(150, 450, 100, 100);
  aa = createSprite(250, 450, 100, 100);
  ab = createSprite(350, 450, 100, 100);
  ac = createSprite(450, 450, 100, 100);
  ad = createSprite(550, 450, 100, 100);
  ae = createSprite(50, 550, 100, 100);
  af = createSprite(150, 550, 100, 100);
  ag = createSprite(250, 550, 100, 100);
  ah = createSprite(350, 550, 100, 100);
  ai = createSprite(450, 550, 100, 100);
  aj = createSprite(550, 550, 100, 100);

  a.shapeColor = rgb(255, 255, 255);
  b.shapeColor = rgb(255, 255, 255);
  c.shapeColor = rgb(255, 255, 255);
  d.shapeColor = rgb(255, 255, 255);
  e.shapeColor = rgb(255, 255, 255);
  f.shapeColor = rgb(255, 255, 255);
  g.shapeColor = rgb(255, 255, 255);
  h.shapeColor = rgb(255, 255, 255);
  i.shapeColor = rgb(255, 255, 255);
  j.shapeColor = rgb(255, 255, 255);
  k.shapeColor = rgb(255, 255, 255);
  l.shapeColor = rgb(255, 255, 255);
  m.shapeColor = rgb(255, 255, 255);
  n.shapeColor = rgb(255, 255, 255);
  o.shapeColor = rgb(255, 255, 255);
  p.shapeColor = rgb(255, 255, 255);
  q.shapeColor = rgb(255, 255, 255);
  r.shapeColor = rgb(255, 255, 255);
  s.shapeColor = rgb(255, 255, 255);
  t.shapeColor = rgb(255, 255, 255);
  u.shapeColor = rgb(255, 255, 255);
  v.shapeColor = rgb(255, 255, 255);
  w.shapeColor = rgb(255, 255, 255);
  x.shapeColor = rgb(255, 255, 255);
  y.shapeColor = rgb(255, 255, 255);
  z.shapeColor = rgb(255, 255, 255);
  aa.shapeColor = rgb(255, 255, 255);
  ab.shapeColor = rgb(255, 255, 255);
  ac.shapeColor = rgb(255, 255, 255);
  ad.shapeColor = rgb(255, 255, 255);
  ae.shapeColor = rgb(255, 255, 255);
  af.shapeColor = rgb(255, 255, 255);
  ag.shapeColor = rgb(255, 255, 255);
  ah.shapeColor = rgb(255, 255, 255);
  ai.shapeColor = rgb(255, 255, 255);
  aj.shapeColor = rgb(255, 255, 255);


  pixels = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, aa, ab, ac, ad, ae, af, ag, ah, ai, aj];
  
  
}

function draw() {
  background(0, 0, 0);  
  push();
  fill(sliderR.value(), sliderG.value(), sliderB.value());
  rect(625, 500, 100, 100);
  pop();

  if (mousePressedOver(a)){
    a.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(b)){
    b.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(c)){
    c.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(d)){
    d.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(e)){
    e.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(f)){
    f.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(g)){
    g.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(h)){
    h.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(i)){
    i.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(j)){
    j.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(k)){
    k.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(l)){
    l.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(m)){
    m.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(n)){
    n.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(o)){
    o.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(p)){
    p.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(q)){
    q.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(r)){
    r.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(s)){
    s.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(t)){
    t.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(u)){
    u.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(v)){
    v.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(w)){
    w.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(x)){
    x.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(y)){
    y.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(z)){
    z.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(aa)){
    aa.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(ab)){
    ab.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(ac)){
    ac.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(ad)){
    ad.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(ae)){
    ae.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(af)){
    af.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(ag)){
    ag.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(ah)){
    ah.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(ai)){
    ai.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  } else if (mousePressedOver(aj)){
    aj.shapeColor = rgb(sliderR.value(), sliderG.value(), sliderB.value());
  }
  drawSprites();
}