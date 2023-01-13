export function shortHandCurrency(num) {
  const units = ["M", "B", "T", "Q"];
  const unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
  const r = unit % 3;
  const x = Math.abs(Number(num)) / Number("1.0e+" + (unit - r)).toFixed(2);

  if (Number(num).toFixed(0).toString().length < 7) {
    return x.toFixed(2) + "K";
  } else {
    return x.toFixed(2) + units[Math.floor(unit / 3) - 2];
  }
}

export function separator(num) {
  let str = num.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}

export function shortenLink(url) {
  const link = new URL(url);
  return link.origin;
}
