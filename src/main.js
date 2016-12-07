const gr = require('grimoirejs').default;
const {MaterialFactory} = require('grimoirejs-fundamental').default.Material;

const fxaa = require('./fxaa.sort');
MaterialFactory.addSORTMaterial("fxaa", fxaa);
gr.registerNode("render-fxaa", [], {
  material: "new(fxaa)"
}, "render-quad");

const vignetting = require('./vignetting.sort');
MaterialFactory.addSORTMaterial("vignetting", vignetting);
gr.registerNode("render-vignetting", [], {
  material: "new(vignetting)"
}, "render-quad");

const aberration = require('./aberration.sort');
MaterialFactory.addSORTMaterial("aberration", aberration);
gr.registerNode("render-aberration", [], {
  material: "new(aberration)"
}, "render-quad");

const hud = require('./hud.sort');
MaterialFactory.addSORTMaterial("hud", hud);
gr.registerNode("render-hud", [], {
  material: "new(hud)"
}, "render-quad");
