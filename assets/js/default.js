var terminalElement = document.querySelector('.terminal');
var terminalShow = document.querySelector('.terminal-text-show');
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
/*
// 设置网页转换的动画
barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0
        });
      }
    }]
  });
*/

function handleCommand(command) {
    var commands = command.split(' ');
    var smileFace = ':) ';
    var unhappyFace = ':( ';
    switch (commands[0]) {
        case 'help':
            response = smileFace + "查看文章列表:show all  阅读某篇文章:read yy-mm-dd "
            break;
        case 'show':
            window.location.href = '/articles';
            break;
        case 'read':
            if (commands.length > 1) {
                window.location.href = '/articles/' + article;
            } else {
                response = unhappyFace + '请指定日期(yy-mm-dd)或文章名';
            }
            break;
    }
    terminalShow.textContent = response;
}


initTerminal();