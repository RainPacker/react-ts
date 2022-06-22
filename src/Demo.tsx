import React, { cloneElement, ReactNode, useEffect, useState } from 'react'
import Form from './Form'
interface IProps {
    name: string
    age?:number
}
interface Istate {
    time?: Date
    count: number
}

const Demo: React.FC<IProps> = (props) => {
    const [data, setCount] = useState<number>(0);
    const info: Istate = {
        count :0
    }
    const [d1, setObj] = useState<Istate>(info);
    console.log(d1, setObj);
    console.log(data, setCount);
    function fun():void {
        console.log('fun');
        return;
    }
    const fn = () => {
        console.warn('xxx', props);
        setCount(data + 1)
        d1.count = d1.count + 1;
        d1.time = new Date();
        setObj(d1);
        fun();
        addItem();
    }
    const getInfo = (info:Istate) => {
        console.log("getInfo", info);
        alert(info.time)
    }
    const del = (info: Istate) => {
        let id: number = info.count;
        let listN = list.filter(it => it.count !== id)
        setList(listN)
    }
    const addItem = () => { 
        const item: Istate = {
            count: new Date().getTime(),
            time: new Date()
        }
        list.push(item);
        setList(list);
        
    }
    // 相当于componentDidMount 和componentDidUpdate
    useEffect(() => { 
        console.log(d1,data);
        document.title = `demo${data }`
    })
    const listInit: Array<Istate> = [
        {
            count: 1,
            time: new Date()
        },
        {
            count: 2,
            time: new Date()
        },
        {
            count: 3,
            time: new Date()
        }
    ] 
   const [list, setList] = useState(listInit)
    useEffect(() => { 
        console.log('effect2');
    },[setCount]);
    return (<div>{ data }
        <button className='xx' onClick={fn}>demo</button>
        {
            list.map(it => {
                let str: ReactNode = <><button onClick={()=>{getInfo(it)}} > {it.time?.toLocaleString()} </button><button onClick={()=>del(it)}>删除</button></>
                return (<p  key={it.count}>{ str}</p>)
            })
        }
        <Form>111</Form>
    </div>)
}
export default Demo;
