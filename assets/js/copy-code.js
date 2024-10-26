function copyCode() {
    const codeBlock = document.getElementById('code-block');
    const codeText = codeBlock.textContent;
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = codeText;
    tempTextarea.style.position = 'absolute';
    tempTextarea.style.top = '-999px';
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
  }