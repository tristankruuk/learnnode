function write(text) {
  process.stdout.write(text);
}

write("Hello world!");
setTimeout(() => {
  write("\x1b[6D"); // Cursor liigub 6 tähemärki tagasi
  write("MM24!");
}, 5000);
