import React from 'react';

interface FilterDateMenuProps {
    onDateChange: (selectedDate: string) => void;
}

const FilterDateMenu: React.FC<FilterDateMenuProps> = ({ onDateChange }) => {
    const handleDateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onDateChange(event.target.value);
    };

    return (
        <select onChange={handleDateChange}>
            <option value="thisWeek">今週</option>
            <option value="thisMonth">今月</option>
            <option value="thisYear">今年</option>
        </select>
    );
};

export default FilterDateMenu;