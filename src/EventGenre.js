import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    useEffect(() => { setData(() => getData()); }, [events]);

   const getData = () => {
        const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
        const data = genres.map((genre)=>{
            const value = events.filter(({summary}) => summary.split(' ').includes(genre)).length;
         return {name: genre, value};   
        })
        return data;
    }

    const colors = ['#FFF8BD', '#ADFFDD', '#B0B8FF', '#E4F2FF', '#FFDD9A']
    return (
        <ResponsiveContainer height={500}>
            <PieChart width={500} height={500}>
                <Pie 
                data={data}
                cy={200}
                labelLine={false}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent })=> `${name} ${(percent * 100).toFixed(0)}%` } 
                >
                    {
                data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index]} name={entry.name}/>
                ))
                }
                </Pie>

            </PieChart>

        </ResponsiveContainer>
    )
}

export default EventGenre;