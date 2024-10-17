"use client";
import React, { useState, useEffect, useCallback, useRef } from 'react';
import "./range.component.css";

interface RangeSliderProps {
    min?: number;
    max?: number;
    defaultValue?: number;
    thumbImage?: string;
    thumbSize?: number;
    onChange?: (value: number) => void;
    className?: string;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
    min = 0,
    max = 100,
    defaultValue = 50,
    onChange,
    className = "",
}) => {
    const [value, setValue] = useState(defaultValue);
    const rangeRef = useRef<HTMLInputElement | null>(null);

    const updateSlider = useCallback(() => {
        const percentage = (value / max) * 100;
        if (rangeRef.current) {
            rangeRef.current.style.background = `linear-gradient(to right, #40E0D0 0%, #40E0D0 ${percentage}%, #e0e0e0 ${percentage}%, #e0e0e0 100%)`;
        }
    }, [max, value])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rangeValue = parseInt(e.target.value);
        setValue(rangeValue);
        if (onChange) {
            onChange(rangeValue);
        }
    }


    useEffect(() => {
        updateSlider();
    }, [value, updateSlider]);

    return <input ref={rangeRef} className={className??"w-full"} type="range" min={min ?? 0} max={max ?? 100} value={value ?? 0} onChange={handleOnChange} />;
};

export default RangeSlider;
