// 下划线转驼峰

function toCamelCase(str) {
    const parts = str.split('_').filter(p => p);
    return parts[0] + parts.slice(1).map(p => p[0].toUpperCase() + p.slice(1)).join('');
}

// 改为使用原始payload:
const result = toCamelCase(ENTER.payload)

if (ENTER.from === 'panel') {
    // 如果使用超级面板打开，直接粘贴，替换当前选中的文本
    utools.hideMainWindowPasteText(result)
    utools.hideMainWindow()
} else {
    // 复制
    utools.copyText(result)
    utools.hideMainWindow()
}
process.exit();
