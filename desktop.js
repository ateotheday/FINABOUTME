const win = document.getElementById("window");
const frame = document.getElementById("window-frame");
const winTitle = document.getElementById("window-title");
const titleBar = document.getElementById("title-bar");

let isMaximized = false;
let prev = {top:'', left:'', width:'', height:''};
let isDragging = false;
let offsetX, offsetY;

// OPEN WINDOW
function openWindow(page, title){
  frame.src = page;
  winTitle.innerText = title;
  win.style.display = 'flex';
}

// CLOSE WINDOW
function closeWindow(){
  win.style.display = 'none';
  frame.src = '';
}

// MINIMIZE WINDOW
function minimizeWindow(){
  win.style.display = 'none'; 
}

// MAXIMIZE / RESTORE WINDOW
function maximizeWindow(){
  if(!isMaximized){
    prev = {
      top: win.style.top,
      left: win.style.left,
      width: win.style.width,
      height: win.style.height
    };
    win.style.top = '0';
    win.style.left = '0';
    win.style.width = '100%';
    win.style.height = '100%';
    isMaximized = true;
  }else{
    win.style.top = prev.top;
    win.style.left = prev.left;
    win.style.width = prev.width;
    win.style.height = prev.height;
    isMaximized = false;
  }
}

// DRAGGING WINDOW
titleBar.addEventListener('mousedown', (e)=>{
  isDragging = true;
  offsetX = e.clientX - win.offsetLeft;
  offsetY = e.clientY - win.offsetTop;
});

document.addEventListener('mousemove', (e)=>{
  if(isDragging && !isMaximized){
    win.style.left = e.clientX - offsetX + 'px';
    win.style.top = e.clientY - offsetY + 'px';
  }
});

document.addEventListener('mouseup', ()=>{
  isDragging = false;
});
