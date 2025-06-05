/**
 * 将驼峰命名字符串转换为下划线命名
 * @param {string} str - 输入字符串（支持首字母大写或小写形式）
 * @returns {string} 转换后的下划线命名字符串
 * 
 * 示例：
 * MajorTechTaskRelevance -> major_tech_task_relevance
 * majorTechTaskRelevance -> major_tech_task_relevance
 */
function camelToSnake(str) {
    return str
        .replace(/(?<!^)([A-Z])/g, '_$1')  // 在非首字母的大写字母前添加下划线
        .toLowerCase();                   // 统一转为小写
}


// 改为使用原始payload:
const result = camelToSnake(ENTER.payload)

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
