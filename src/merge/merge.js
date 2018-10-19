/**
 * 合并两个对象（将第二个对象合并到第一个对象），也可用于深度复制
 * @param d 要输出的对象
 * @param b 要合并的对象
 * @param cover 是否覆盖属性
 * @private
 */
function merge(d, b, cover) {
    if (b) {
        for (var k in b) {
            if (typeof b[k] == "object" && (!d[k] || typeof d[k] == "object")) {
                if (Array.isArray(b[k])) {
                    d[k] = d[k] || [];
                } else {
                    d[k] = d[k] || {};
                }
                __merge(d[k], b[k], cover);
            } else {
                (!(!cover && d.hasOwnProperty(k))) && (d[k] = b[k])
            }
        }
    }
    return d;
}
module.exports = merge;