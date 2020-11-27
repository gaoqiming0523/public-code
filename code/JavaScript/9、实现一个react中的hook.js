/**
 * 手写代码实现个react~hook，reactSafeState，用于组件卸载后，异步请求返回数据设置state报错的解决
 */

 /* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const reactSafeState = (initialUrl) => {
    const [data, setData] = useState(undefined);
    const [url, setUrl] = useState(initialUrl);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        let didCancel = false;
        const fetchData = async () => {
            try {
                const result = await axios(url);
                if (!didCancel) {
                    setData(result.data);
                }
            } catch (error) {
                console.log(error)
            }
        };

        fetchData();

        return () => {
            didCancel = true
        }
    }, [url]);

    return [data, setUrl];
};



const App = () => {
    const [data, setUrl] = reactSafeState("http://");
    return (
        <div>
            {data.name}
        </div>
    )
}