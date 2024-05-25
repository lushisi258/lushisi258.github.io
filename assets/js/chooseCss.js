// 检测用户的设备类型
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// 创建一个新的 link 元素
var link = document.createElement('link');
link.rel = 'stylesheet';

// 根据设备类型设置 href 属性
if (isMobile) {
    // 如果是移动设备，加载移动设备的 CSS 文件
    link.href = '/assets/css/defaultMobile.css';
} else {
    // 如果是电脑，加载电脑的 CSS 文件
    link.href = '/assets/css/defaultDesktop.css';
}

// 将 link 元素添加到 head 中
document.head.appendChild(link);

