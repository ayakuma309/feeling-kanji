const { createCanvas, loadImage } = require('canvas');

const createOgp = async (
  req,
  res
) => {
  const { title } = req.query;
  const WIDTH = 1200 ;
  const HEIGHT = 630 ;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // フォントのロード
  const font = await loadImage('./fonts/NotoSansJP-Regular.ttf');
  ctx.font = "60px NotoSansJP-Regular";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const text_title = "入力した文字は" + String(title);
  //ctx.measureText() でテキストの幅を計測し、canvas の幅からテキストの幅を引いた値を x 座標に設定
  const textMetrics = ctx.measureText(text_title);
  const textWidth = textMetrics.width;
  ctx.fillText(text_title, (WIDTH - textWidth) / 2, HEIGHT / 2);
  const buffer = canvas.toBuffer();
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
}

export default createOgp;
