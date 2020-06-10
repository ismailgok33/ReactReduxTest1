import React from "react";

export const Timer = (props) => {
    return(
        <div>
            <h1> Second: { props.countDownSeconds } </h1>
            <hr/>
            <h1> Minute: { props.countDownMinutes } </h1>
            <hr/>
            <h1> Hour: { props.countDownHours } </h1>
        </div>
    );
};