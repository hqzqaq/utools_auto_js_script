// 获取剪贴板中的文本
let selectedText = ENTER.payload.trim();

// 使用正则表达式匹配数字，保留数字左右的空格，并将数字替换为空格
const modifiedText = selectedText + "\n请用中文回答我。";

// 复制修改后的文本到剪贴板
utools.copyText(modifiedText);

// 粘贴文本
utools.simulateKeyboardTap('v', utools.isMacOs() ? 'command' : 'ctrl');
utools.hideMainWindow();
process.exit();