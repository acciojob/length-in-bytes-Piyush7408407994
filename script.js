const byteSize = (str) => {
  return new Blob([str]).size;
};

const str = prompt("Enter some string.");
alert(byteSize(str));
