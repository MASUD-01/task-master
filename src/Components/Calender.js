import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Calender = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='wide'>
            <div className='calenders'>
                <h4>click here to choose your date</h4>
                <div>
                    <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
                </div>
            </div>
        </div>
    );
};

export default Calender;