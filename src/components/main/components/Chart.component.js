import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const Chart = ({assets24h, min, max}) => {
    const formatYAxis = (tickItem) => Number(tickItem).toFixed();

    const formatXAxis = (tickItem) => {
        const hour = (new Date(tickItem)).getHours();
        return `${hour}h`;
    };

    assets24h.forEach((item) => {
         item.priceUsd = formatYAxis(item.priceUsd);
    });

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={assets24h}
                margin={{top: 5, bottom: 5}}
                useInteractiveGuideline={true}
            >
                <XAxis dataKey="date" tickFormatter={formatXAxis}/>
                <YAxis showMaxMin={false} tickCount={20} tickFormatter={formatYAxis} type="number"
                       domain={[min, max]}/>
                <Tooltip/>
                <CartesianGrid strokeDasharray="3 3"/>
                <Line activeDot={{r: 8}} type="monotone" dataKey="priceUsd" tickFormatter={formatYAxis} stroke="#ff7300"/>
                />
            </LineChart>
        </ResponsiveContainer>
    )
};

export default Chart;