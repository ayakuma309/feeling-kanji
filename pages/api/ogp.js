import { createCanvas, registerFont } from "canvas";
import path from "path";
const createOgp = async (
  req,
  res
) => {
  const { id } = req.query;
  const WIDTH = 1200;
  const HEIGHT = 630;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");
  registerFont(path.resolve("./fonts/NotoSansJP-Regular.otf"), {
    family: "Noto",
  });
  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.font = "60px ipagp";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const text =  String(id);
  ctx.fillText(text, WIDTH / 2, HEIGHT / 2);
  const buffer = canvas.toBuffer();
  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
}

export default createOgp;
