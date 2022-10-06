const textarea = document.querySelector("textarea");
filenameInput = document.querySelector(".file-name input");
selectmenu = document.querySelector(".save-as select");
savebtn = document.querySelector(".save-btn");

selectmenu.addEventListener("change", () => {
  const selecteOptions = selectmenu.options[selectmenu.selectedIndex].text;

  savebtn.innerText = `Save As ${selecteOptions.split(" ")[0]} file`;
});
savebtn.addEventListener("click", () => {
  const blob = new Blob([textarea.value], { type: selectmenu.value });
  const filnameURL = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = filenameInput.value;
  link.href = filnameURL;
  link.click();
});
