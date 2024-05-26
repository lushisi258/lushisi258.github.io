// 检测用户的设备类型
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 创建一个新的 link 元素
var link1 = document.createElement('link');
var link2 = document.createElement('link');
var link3 = document.createElement('link');
var link4 = document.createElement('link');
link1.rel = 'stylesheet';
link2.rel = 'stylesheet';
link3.rel = 'stylesheet';
link4.rel = 'stylesheet';

// 根据设备类型设置 href 属性
if (isMobile) {
    // 如果是移动设备，加载移动设备的 CSS 文件
    link1.href = '/assets/css/defaultMobile.css';
    link2.href = '/assets/css/indexMobile.css';
    link3.href = '/assets/css/listMobile.css';
    link4.href = '/assets/css/postMobile.css';
} else {
    // 如果是电脑，加载电脑的 CSS 文件
    link1.href = '/assets/css/defaultDesktop.css';
    link2.href = '/assets/css/indexDesktop.css';
    link3.href = '/assets/css/listDesktop.css';
    link4.href = '/assets/css/postDesktop.css';
}

// 将 link 元素添加到 head 中
document.head.appendChild(link1);
document.head.appendChild(link2);
document.head.appendChild(link3);
document.head.appendChild(link4);