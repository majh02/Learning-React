import React from 'react'
import {useState, useEffect } from 'react'
import { Bar, Doughnut, Line } from 'react-chartjs-2'
import axios from 'axios'

const Contents = ({contryName}) => {
    console.log(contryName)
    const [confirmedData, setConfirmedData] = useState({})
    const [qurantinedData, setQuarantinedData] = useState({})
    const [comparedData, setComparedData] = useState({})

    useEffect(()=>{
        const fetchEvents = async() =>{
            const res = await axios.get("https://api.covid19api.com/total/dayone/country/"+"kr")
            makeData(res.data)
        }
        const makeData = (items)=>{
            const arr = items.reduce((acc, cur)=>{
                const currentDate = new Date(cur.Date);
                const year = currentDate.getFullYear();
                const month = currentDate.getMonth();
                const date = currentDate.getDate();

                const confirmed = cur.Confirmed;
                const active = cur.Active;
                const death = cur.Death;
                const recovered = cur.Recovered;

                const findItem = acc.find(a => a.year === year && a.month === month);
                if(!findItem){
                    acc.push({
                        year, month, date, confirmed, active, death, recovered 
                    })
                }
                if(findItem && findItem.date < date){
                    findItem.confirmed = confirmed;
                    findItem.active = active;
                    findItem.death = death;
                    findItem.recovered = recovered;
                    findItem.year = year;
                    findItem.month = month;
                    findItem.date = date;
                }
                return acc;
            }, [])
            
            const labels = arr.map(a => `${a.month + 1}월`);
            setConfirmedData({
                labels,
                datasets: [
                    {
                        label: "국내 누적 확진자",
                        backgroundColor: "salmon",
                        fill: true,
                        data: arr.map(a=>a.confirmed)
                    },
                ]
            });
            setQuarantinedData({
                labels,
                datasets: [
                    {
                        label: "월별 격리자 현황",
                        borderColor: "green",
                        fill: false,
                        data: arr.map(a=>a.active)
                    }
                ]
            });

            const last = arr[arr.length -1];
            setComparedData({
                labels: ["확진자", "격리해제", "사망자"],
                datasets: [
                    {
                        label: "누적 확진, 해제, 사망 비율",
                        backgroundColor: ["#ff3d67", "#059bff", "#ffc233"],
                        borderColor: ["#ff3d67", "#059bff", "#ffc233"],
                        fill: true,
                        data: [last.confirmed, last.recovered, last.death]
                    }
                ]
            });
        }
        fetchEvents();
    },[contryName])
    
    return (
        <section>
            <h2>국내 코로나 현황</h2>
            <div className="contents">
                <div className = "Graph">
                    <Bar 
                    data = {confirmedData} 
                    options={{
                        plugins:{
                            title: {display:true, text: "누적 확진자 추이", fontSize: 16},
                            legend: {display:true, position: "bottom"}
                        }
                        }}
                    />
                </div>
                <div className = "Graph">
                    <Line
                        data = {qurantinedData}
                        options={{
                        plugins:{
                            title: {display:true, text: "월별 격리자 현황", fontSize: 16},
                            legend: {display:true, position: "bottom", color: "green"}
                        }
                        }}
                    />
                </div>
                <div className = "Graph">
                    <Doughnut
                        data = {comparedData}
                        options={{
                            plugins:{
                                title: {display:true, text: `누적 확진, 해제, 사망 (${new Date().getFullYear()}년 ${new Date().getMonth()+1}월 현재)`, fontSize: 16},
                                legend: {display:true, position: "bottom"}
                            }
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Contents
