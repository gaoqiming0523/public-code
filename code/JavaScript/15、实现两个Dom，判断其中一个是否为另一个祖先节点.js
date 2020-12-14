/**
 * 实现两个Dom，判断其中一个是否为另一个祖先节点。
 */

const isParentNode = (a, b) => {
    while(a.parentNode) {
        if(a.parentNode == b) {
            return true
        }else {
            a = a.parentNode
        }
    }
    return false;
}
