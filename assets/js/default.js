var terminalElement = document.querySelector('.terminal');
var terminalShow = document.querySelector('.terminal-text-show');
var textElement = terminalElement.querySelector('.terminal-text');
var terminalCursor = document.querySelector('.terminal-cursor');
var message = localStorage.getItem('message');

// 初始化show的文本
if (message) {
    textElement.textContent = textContent;
}

// 初始化终端
function initTerminal() {
    // 初始化终端的引导文本
    var textContent = '->';
    textElement.textContent = textContent;
    // 保证不会删除掉引导文本
    var minLength = textContent.length;
    // 设置监听键盘输入
    terminalElement.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // 当按下回车键时，执行handleCommand函数
            handleCommand(textContent.slice(minLength));
            // 重新初始化终端
            initTerminal();
        }
        else if (event.key === 'Backspace') {
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

function handleCommand(command) {
    var commands = command.split(' ');
    var smileFace = ':) ';
    var unhappyFace = ':( ';
    switch (commands[0]) {
        case 'help':
            response = smileFace + "查看文章列表:cd list"
            break;
        case 'cd':
            if (commands.length > 1) {
                switch (commands[1]) {
                    case 'list':
                        localStorage.setItem('message', '成功跳转列表页ヾ(≧▽≦*)o');
                        window.location.href = '/_pages/list.html';
                    case 'home':
                        localStorage.setItem('message', "成功回到主页(●'◡'●)");
                        window.location.href = '/';
                }
            }
            break;
        default:
            response = unhappyFace + "错误的命令o(≧口≦)o"
    }
    terminalShow.textContent = response;
}


initTerminal();