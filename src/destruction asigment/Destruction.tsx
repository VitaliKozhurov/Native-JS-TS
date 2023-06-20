import React, { useState } from "react";

export type PerosnType = {
    name: string;
    age: number;
    lessons: Array<{ title: string }>;
    address: AddressType;
};

type AddressType = {
    street: {
        title: string;
    };
};

type PropsType = {
    title: string;
    person: PerosnType;
    food: Array<string>;
    car: { model: string };
};

export const Destruction: React.FC<PropsType> = ({
    title,
    person,
    ...props
}) => {
    const [message, useMessage] = useState<string>("hello");
    return (
        <>
            <h1>{title}</h1>
            <hr />
            <div>{props.car.model}</div>
        </>
    );
};
