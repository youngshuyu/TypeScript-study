const canvas = document.querySelector("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
canvas.width = screen.availWidth;
canvas.height = screen.availHeight;

const bytes: string[] = "young0101".split("");
const data = Array(Math.ceil(canvas.width / 10)).fill(0);
console.log(bytes);

const codeRain = () => {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#0f0";
  data.forEach((item, index) => {
    ctx.fillText(
      bytes[Math.floor(Math.random() * bytes.length)],
      index * 10,
      item + 10
    );
    data[index] =
      item > canvas.height || item > 10000 * Math.random() ? 0 : item + 10;
  });
};
setInterval(codeRain, 50);
