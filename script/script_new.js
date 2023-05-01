const buttons = {
  Backquote: {
    rus: ["ё", "Ё"],
    en: ["`", "~"],
  },
  Digit1: {
    rus: ["1", "!"],
    en: ["1", "!"],
  },
  Digit2: {
    rus: ["2", '"'],
    en: ["2", "@"],
  },
  Digit3: {
    rus: ["3", "№"],
    en: ["3", "#"],
  },
  Digit4: {
    rus: ["4", ";"],
    en: ["4", "$"],
  },
  Digit5: {
    rus: ["5", "%"],
    en: ["5", "%"],
  },
  Digit6: {
    rus: ["6", ":"],
    en: ["6", "^"],
  },
  Digit7: {
    rus: ["7", "?"],
    en: ["7", "&"],
  },
  Digit8: {
    rus: ["8", "*"],
    en: ["8", "*"],
  },
  Digit9: {
    rus: ["9", "("],
    en: ["9", "("],
  },
  Digit0: {
    rus: ["0", ")"],
    en: ["0", ")"],
  },
  Minus: {
    rus: ["-", "_"],
    en: ["-", "_"],
  },
  Equal: {
    rus: ["=", "+"],
    en: ["=", "+"],
  },
  Backspace: {
    rus: ["Backspace", "Backspace"],
    en: ["Backspace", "Backspace"],
  },
  Tab: {
    rus: ["Tab", "Tab"],
    en: ["Tab", "Tab"],
  },
  KeyQ: {
    rus: ["й", "Й"],
    en: ["q", "Q"],
  },
  KeyW: {
    rus: ["ц", "Ц"],
    en: ["w", "W"],
  },
  KeyE: {
    rus: ["у", "У"],
    en: ["e", "E"],
  },
  KeyR: {
    rus: ["к", "К"],
    en: ["r", "R"],
  },
  KeyT: {
    rus: ["е", "Е"],
    en: ["t", "T"],
  },
  KeyY: {
    rus: ["н", "Н"],
    en: ["y", "Y"],
  },
  KeyU: {
    rus: ["г", "Г"],
    en: ["u", "U"],
  },
  KeyI: {
    rus: ["ш", "Ш"],
    en: ["i", "I"],
  },
  KeyO: {
    rus: ["щ", "Щ"],
    en: ["o", "O"],
  },
  KeyP: {
    rus: ["з", "З"],
    en: ["p", "P"],
  },
  BracketLeft: {
    rus: ["х", "Х"],
    en: ["[", "{"],
  },
  BracketRight: {
    rus: ["ъ", "Ъ"],
    en: ["]", "}"],
  },
  Backslash: {
    rus: ["\\", "/"],
    en: ["\\", "|"],
  },
  Delete: {
    rus: ["Del", "Del"],
    en: ["Del", "Del"],
  },
  CapsLock: {
    rus: ["CapsLock", "CapsLock"],
    en: ["CapsLock", "CapsLock"],
  },
  KeyA: {
    rus: ["ф", "Ф"],
    en: ["a", "A"],
  },
  KeyS: {
    rus: ["ы", "Ы"],
    en: ["s", "S"],
  },
  KeyD: {
    rus: ["в", "В"],
    en: ["d", "D"],
  },
  KeyF: {
    rus: ["а", "А"],
    en: ["f", "F"],
  },
  KeyG: {
    rus: ["п", "П"],
    en: ["g", "G"],
  },
  KeyH: {
    rus: ["р", "Р"],
    en: ["h", "H"],
  },
  KeyJ: {
    rus: ["о", "О"],
    en: ["j", "J"],
  },
  KeyK: {
    rus: ["л", "Л"],
    en: ["k", "K"],
  },
  KeyL: {
    rus: ["д", "Д"],
    en: ["l", "L"],
  },
  Semicolon: {
    rus: ["ж", "Ж"],
    en: [";", ":"],
  },
  Quote: {
    rus: ["э", "Э"],
    en: ["'", '"'],
  },
  Enter: {
    rus: ["Enter", "Enter"],
    en: ["Enter", "Enter"],
  },
  ShiftLeft: {
    rus: ["Shift", "Shift"],
    en: ["Shift", "Shift"],
  },
  KeyZ: {
    rus: ["я", "Я"],
    en: ["z", "Z"],
  },
  KeyX: {
    rus: ["ч", "Ч"],
    en: ["x", "X"],
  },
  KeyC: {
    rus: ["с", "С"],
    en: ["c", "C"],
  },
  KeyV: {
    rus: ["м", "М"],
    en: ["v", "V"],
  },
  KeyB: {
    rus: ["и", "И"],
    en: ["b", "B"],
  },
  KeyN: {
    rus: ["т", "Т"],
    en: ["n", "N"],
  },
  KeyM: {
    rus: ["ь", "Ь"],
    en: ["m", "M"],
  },
  Comma: {
    rus: ["б", "Б"],
    en: [",", "<"],
  },
  Period: {
    rus: ["ю", "Ю"],
    en: [".", ">"],
  },
  Slash: {
    rus: [".", ","],
    en: ["/", "?"],
  },
  ArrowUp: {
    rus: ["▲", "▲"],
    en: ["▲", "▲"],
  },
  ShiftRight: {
    rus: ["Shift", "Shift"],
    en: ["Shift", "Shift"],
  },
  ControlLeft: {
    rus: ["Ctrl", "Ctrl"],
    en: ["Ctrl", "Ctrl"],
  },
  MetaLeft: {
    rus: ["Win", "Win"],
    en: ["Win", "Win"],
  },
  AltLeft: {
    rus: ["Alt", "Alt"],
    en: ["Alt", "Alt"],
  },
  Space: {
    rus: [" ", " "],
    en: [" ", " "],
  },
  AltRight: {
    rus: ["Alt", "Alt"],
    en: ["Alt", "Alt"],
  },
  ArrowLeft: {
    rus: ["◄", "◄"],
    en: ["◄", "◄"],
  },
  ArrowDown: {
    rus: ["▼", "▼"],
    en: ["▼", "▼"],
  },
  ArrowRight: {
    rus: ["►", "►"],
    en: ["►", "►"],
  },
  ControlRight: {
    rus: ["Ctrl", "Ctrl"],
    en: ["Ctrl", "Ctrl"],
  },
};
const createElement = (elType, elClassList, elInnerText) => {
  let newElem = document.createElement(elType);
  newElem.innerText = elInnerText || "";
  !!elClassList && newElem.classList.add(...elClassList);
  return newElem;
};
function createPage() { 
  let keyboard = creteKeyboard();
  page.appendChild(keyboard);
  page.appendChild(
    createElement(
      "p",
      ["description"],
      "Клавиатура создана в операционной системе Windows"
    )
  );
  page.appendChild(
    createElement(
      "p",
      ["language"],
      "Для переключения языка комбинация: левыe ctrl + alt"
    )
  );
  document.body.appendChild(page);
}

function creteKeyboard() {
  let keyboard = createElement("div", ["body--keyboard", "keyboard"]);
  keyboard.id = "keyboard";
  keyboard.appendChild(createRow(0, 14));
  keyboard.appendChild(createRow(14, 29));
  keyboard.appendChild(createRow(29, 42));
  keyboard.appendChild(createRow(42, 55));
  keyboard.appendChild(createRow(55, 64));
  return keyboard;
}
function createRow(start, finish) {
  let row = createElement("div", ["keyboard--row", "row"]);
  Object.keys(buttons)
    .slice(start, finish)
    .forEach((key) => {
      row.appendChild(createKey(key));
    });
  return row;
}
function createKey(key) {
  let keyButoon = createElement("div", ["keyboard--key", "key", key]); 
  keyButoon.appendChild(createKeylang("rus", key, language == "en"));
  keyButoon.appendChild(createKeylang("en", key, language != "en"));
  return keyButoon;
}
function createKeylang(lang, key, hidden) {
  let keyButoon = hidden
    ? createElement("span", [lang, "hidden"])
    : createElement("span", [lang]);
  let keyValue = buttons[key][lang];
  hidden
    ? keyButoon.appendChild(
        createElement("span", ["caseDown", "hidden"], keyValue[0])
      )
    : keyButoon.appendChild(createElement("span", ["caseDown"], keyValue[0]));
  keyButoon.appendChild(
    createElement("span", ["caseUp", "hidden"], keyValue[1])
  );
  keyButoon.appendChild(createElement("span", ["caps", "hidden"], keyValue[0]));
  keyButoon.appendChild(
    createElement("span", ["shiftCaps", "hidden"], keyValue[1])
  );
  return keyButoon;
}
function changeLang(e) {
  if (e.ctrlKey && e.altKey) {
    language = language === "en" ? "ru" : "en";
    localStorage.setItem("language", language);
    createPage();
  }
}
function keyStrokeHandler(e) { 
  document.getElementsByClassName(e.code)[0].classList.add("active"); 
  if (e.code === "ShiftRight" || e.code === "ShiftLeft") {
    shift();
  }
  if (e.code === "CapsLock") {
    capsLock();
  }
  if (e.key === "Alt" || e.key === "Control") {
    changeLang(e);
  }
  if (e.code === "Backspace") {
    backspace();
  }
  if (e.code === "Delete") {
    deleteChar();
  } 
    modifyTextArea(e);  
    if (e.code === "Tab" || e.code === "Enter" || e.code === "Space") {
        insertSpaces(e); 
    }  
}
function keyUpHandler(e) {
  if (e.code !== "CapsLock")
    document.getElementsByClassName(e.code)[0].classList.remove("active");
  if (e.code === "ShiftRight" || e.code === "ShiftLeft") {
    shift();
  }
}
function backspace() {
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;

  textArea.value = textArea.value.slice(0, start === end ? start - 1 : start) + textArea.value.slice(end); 

  textArea.selectionStart = start === end ? start - 1 : start;
  textArea.selectionEnd = textArea.selectionStart;
}
function deleteChar() {
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;

  if (!(textArea.value.length > end)) return;

  textArea.value = textArea.value.slice(0, start) + textArea.value.slice(end + 1); 
  textArea.selectionStart = start;
  textArea.selectionEnd = textArea.selectionStart;
}
function insertSpaces(e) {
  let space;
  if (e.code === "Tab") space = "\t";
  if (e.code === "Enter") space = "\n";
  if (e.code === "Space") space = " ";

  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;

  textArea.value = textArea.value.slice(0, start) + space + textArea.value.slice(end); 

  textArea.selectionStart = start + 1;
  textArea.selectionEnd = textArea.selectionStart;
}
function modifyTextArea(e) {   
  let char = "";
  keyNodes.forEach((elem) => {
    let classListArray = [...elem.classList]; 
    if(classListArray[classListArray.length - 1] === "active")
        char = elem.querySelector("span>span:not(.hidden)").textContent;
  });  

  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;   
  textArea.value = textArea.value.slice(0, start) + char + textArea.value.slice(end); 

  textArea.selectionStart = start + 1;
  textArea.selectionEnd = textArea.selectionStart;
}
function changeLang(e) {
  if (e.ctrlKey && e.altKey) {
    language = language === "en" ? "ru" : "en";
    localStorage.setItem("language", language);
    prepareKeyboardLayout();
  }
}
function shift() {
  keyNodes.forEach((key) => {
    if (key.dataset.keyType === "shiftable") {
      const keyCode = key.dataset.keyCode;
      key.textContent =
        key.textContent === buttons[keyCode][language].shift
          ? buttons[keyCode][language].main
          : buttons[keyCode][language].shift;
    }
    if (isCapsLock) {
      key.textContent =
        key.textContent === key.textContent.toLowerCase()
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
    } else{
      key.textContent = ey.textContent === key.textContent.toUpperCase() ? key.textContent.toLowerCase() : key.textContent.toUpperCase();
    }
  });
}
function capsLock() {
  isCapsLock = !isCapsLock;
  keyNodes.forEach((key) => {
    if (isCapsLock) {
      key.textContent = key.textContent.toUpperCase();
    } else {
      key.textContent = key.textContent.toLowerCase();
      document.getElementsByClassName("CapsLock")[0].classList.remove("active");
    }
  });
} 

let language = localStorage.getItem("language") ? localStorage.getItem("language") : "en"; 
localStorage.setItem("language", language);
let isCapsLock = false;
let keysArray = Object.keys(buttons);

let page = createElement("div", ["centralizer"]);
page.appendChild(createElement("p", ["title"], "RSS Виртуальная клавиатура"));
let textArea = createElement("textarea", ["body--textarea", "textarea"]);
textArea.id = "textarea";
textArea.setAttribute("rows", 5);
textArea.setAttribute("cols", 50);
page.appendChild(textArea);

document.body.addEventListener('keydown', (e) => {
if (keysArray.indexOf(e.code) > -1) {
    e.preventDefault();
    keyStrokeHandler(e);
}
});
  
document.body.addEventListener('keyup', (e) => {
if (keysArray.indexOf(e.code) > -1) {
    e.preventDefault();
    keyUpHandler(e);
}
}); 
setInterval(() => {
    textArea.focus();
  }, 0);
createPage();

let keyNodes = Array.from(document.querySelectorAll('.key'));