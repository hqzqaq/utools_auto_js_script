// 反斜杠转斜杠

const result = ENTER.payload.replaceAll('\\', '/')

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