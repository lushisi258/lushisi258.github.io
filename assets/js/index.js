var textPC = ' 你好，欢迎来到我的网站。我是Li DingXin，点击目录进入文章列表，或者在下面的终端输入“help”来获得一些引导😊';
var textPhone = ' 你好，欢迎来到我的网站。我是Li DingXin，点击目录进入文章列表，开始探索吧😊';
var text = window.innerWidth > 800 ? textPC : textPhone;
var index = 0;
var delay = 150; // 每个字符的延迟时间（毫秒）
var cursor = document.querySelector('.cursor');

function type() {
    if (index < text.length) {
        // 将当前字符添加到文本后面
        document.getElementById('typewriter').innerText += text[index];
        // 将光标添加到文本后面
        document.getElementById('typewriter').appendChild(cursor);
        // 如果当前字符是标点符号，那么延迟时间加倍
        var currentDelay = ['，', '。', '！', '？'].includes(text[index++]) ? delay * 3 : delay;
        setTimeout(() => type(), currentDelay);
    }
    // 如果已经输入完所有字符，那么将光标隐藏
    else {
        cursor.style.display = 'none';
    }
}

type();