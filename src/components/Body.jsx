import React from "react";
import Filter from "./Filter";
import NameList from "./NameList";

const Body = () => {
    return (
        <div className="flex justify-around w-[1140px] mt-[60px]">
            <div className="flex-[1]">
                <Filter />
            </div>
            <div className="flex-[1]">
                <NameList />
            </div>
        </div>
    );
};

export default Body;
