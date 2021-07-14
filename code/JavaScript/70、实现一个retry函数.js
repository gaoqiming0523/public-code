/**
 * 实现retry(func, times, interval)，如果func失败了
 * 会在interval后重试，最大重试次数times（func可能是异步）
 */

function retry(func, times, interval) {
  return new Promise(function (resolve, reject) {
    function attempt() {
      func()
        .then(resolve)
        .catch(function (erro) {
          console.log(`还有 ${times} 次尝试`);
          if (0 == times) {
            reject(erro);
          } else {
            times--;
            setTimeout(attempt(), interval);
          }
        });
    }
    attempt();
  });
}
