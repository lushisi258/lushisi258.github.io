var terminalElement = document.querySelector('.terminal');
var textElement = terminalElement.querySelector('.terminal-text');
var terminalCursor = document.querySelector('.terminal-cursor');

// 初始化终端
function initTerminal() {
    var textContent = '->';
    var minLength = textContent.length;
    // 页面加载完成后就显示"->"
    textElement.textContent = textContent;
    // 设置监听键盘输入
    terminalElement.addEventListener('keydown', function (event) {
        if (event.key === 'Backspace') {
            // 只有当textContent的长度大于最小长度时，才允许删除字符
            if (textContent.length > minLength) {
                textContent = textContent.slice(0, -1);
            }
        } else if (event.key.length === 1) {
            textContent += event.key;
        }

        // 更新terminal-text元素的内容为textContent
        textElement.textContent = textContent;
        // 将光标添加到terminal-text元素的后面
        terminalElement.insertBefore(terminalCursor, textElement.nextSibling);

        event.preventDefault();
    });
}

initTerminal();