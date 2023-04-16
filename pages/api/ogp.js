const { createCanvas, loadImage } = require('canvas');

const createOgp = async (
  req,
  res
) => {
  const { title,meaning,description } = req.query;
  const WIDTH = 1200 ;
  const HEIGHT = 630 ;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.font = "60px ipagp";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const text_title = "入力した文字は" + String(title) + "なのねん";
  const text_meaning = "入力した文字は" + String(meaning) + "なのねん";
  const text_description = "入力した文字は" + String(description) + "なのねん";
  ctx.fillText(text_title, WIDTH / 2, HEIGHT / 2);
  ctx.fillText(text_meaning, WIDTH / 2, HEIGHT / 2);
  ctx.fillText(text_description, WIDTH / 2, HEIGHT / 2);
  const buffer = canvas.toBuffer();
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
}

export default createOgp;
