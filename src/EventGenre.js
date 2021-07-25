import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);
    useEffect(() => { setData(() => getData()); }, [events]);

   const getData = () => {
        const genres = ['React', 'JavaScript', 'Node.js', 'jQuery', 'AngularJS'];
        const data = genres.map((genre)=>{
            const value = events.filter(({summary}) => summary.split(' ').includes(genre)).length;
         return {name: genre, value};   
        })
        console.log(data)
        return data;
    };

    const colors = ['#CD8E55', '#3E4140', '#548A73', '#54668A', '#5C548A']
    return (
        <ResponsiveContainer height={500}>
            <PieChart>
                <Pie 
                data={data}
                cy={200}
                labelLine={false}
                outerRadius={110}
                fill="#8884d8"
                dataKey="value"
                legendType="square"
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`} 
                >
                    {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name}/>)
          }
                </Pie>
                <Legend layout="horizontal" align="center" verticalAlign="top">
                </Legend>
            </PieChart>

        </ResponsiveContainer>
    )
}

export default EventGenre;