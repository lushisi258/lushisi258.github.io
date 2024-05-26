var terminalElement = document.querySelector('.terminal');
var terminalShow = document.querySelector('.terminal-text-show');
var textElement = terminalElement.querySelector('.terminal-text');
var terminalCursor = document.querySelector('.terminal-cursor');
/* 获取目录按钮 */
var listButton = document.querySelector('a.list-link');
var message = localStorage.getItem('message');
var smileFace = ':) ';
var unhappyFace = ':( ';

// 初始化show的文本
if (message) {
    if (window.location.pathname == '/') {
        // 如果用户在主页
        terminalShow.textContent = smileFace + "成功加载主页(●'◡'●)";
    } else {
        terminalShow.textContent = smileFace + message;
        listButton.textContent = '主 页';
        listButton.href = '/';
    }
}

// 初始化终端
function initTerminal() {
    // 初始化终端的引导文本
    var textContent = '->';
    textElement.textContent = textContent;
    // 保证不会删除掉引导文本
    var minLength = textContent.length;
    // 设置一个标志，表示是否正在使用输入法
    var composing = false;
    // 当输入法输入开始时，将composing设置为true
    terminalElement.addEventListener('compositionstart', function (event) {
        composing = true;
    });
    // 当输入法输入结束时，将输入的内容添加到textContent中
    terminalElement.addEventListener('compositionend', function (event) {
        composing = false;
        textContent += event.data;
        textElement.textContent = textContent;
        terminalElement.insertBefore(terminalCursor, textElement.nextSibling);
    });

    // 设置监听键盘输入
    terminalElement.addEventListener('keydown', function (event) {
        if (!composing) {
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
        }

        event.preventDefault();
    });
}

// 淡出动画并跳转到指定链接
function fadeOutAndRedirect(url) {
    document.querySelector('.content').style.animation = 'fadeOut 0.2s forwards ease-in-out';
    document.querySelector('.content').addEventListener('animationend', function () {
        window.location.href = url;
    }, { once: true });
}

// 处理命令
function handleCommand(command) {
    var commands = command.split(' ');
    switch (commands[0]) {
        case 'help':
            response = smileFace + "查看文章列表:cd list"
            break;
        case 'cd':
            if (commands.length > 1) {
                switch (commands[1]) {
                    case 'list':
                        localStorage.setItem('message', '成功跳转列表页ヾ(≧▽≦*)o');
                        fadeOutAndRedirect('/_pages/list.html');
                        break;
                    case 'home':
                        localStorage.setItem('message', "成功加载主页(●'◡'●)");
                        fadeOutAndRedirect('/');
                        break;
                    default:
                        response = unhappyFace + "错误的命令o(≧口≦)o"
                }
            }
            break;
        default:
            response = unhappyFace + "错误的命令o(≧口≦)o"
    }
    terminalShow.textContent = response;
}

// 点击目录按钮后淡出动画
listButton.addEventListener('click', function (event) {
    event.preventDefault();
    // 开始淡出动画，然后跳转到新页面
    fadeOutAndRedirect(listButton.getAttribute('href'));
});

// 当全部资源加载完毕后，再渲染页面
window.addEventListener('load', function () {
    document.body.style.visibility = 'visible';
    initTerminal();
});