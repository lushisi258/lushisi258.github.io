var text = '你好，欢迎来到我的网站。我是Li DingXin，一名大二学生';
var index = 0;
var delay = 150; // 每个字符的延迟时间（毫秒）
var cursor = document.querySelector('.cursor');

function type() {
    if (index < text.length) {
        // 如果当前字符是标点符号，那么延迟时间加倍
        var currentDelay = ['，', '。', '！', '？'].includes(text[index]) ? delay * 3 : delay;
        document.getElementById('typewriter').innerText += text[index++];
        // 将光标添加到文本后面
        document.getElementById('typewriter').appendChild(cursor);
        setTimeout(type, currentDelay);
    }
}

type();