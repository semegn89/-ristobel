'use client';

import { useState, useRef, useEffect } from 'react';

interface FloatingInputProps {
  id: string;
  name: string;
  type?: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

export default function FloatingInput({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  required = false,
  rows,
  className = '',
}: FloatingInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const isActive = isFocused || value.length > 0;

  const baseClasses = `peer w-full px-4 pt-6 pb-2 border-2 rounded-xl transition-all duration-300 bg-white ${
    isFocused
      ? 'border-primary shadow-glow'
      : 'border-gray-300 hover:border-gray-400'
  } focus:outline-none focus:border-primary ${className}`;

  const labelClasses = `absolute left-4 transition-all duration-300 pointer-events-none ${
    isActive
      ? 'top-2 text-xs text-primary font-semibold'
      : 'top-4 text-base text-gray-500'
  }`;

  if (rows) {
    return (
      <div className="relative">
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          rows={rows}
          className={baseClasses}
        />
        <label htmlFor={id} className={labelClasses}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className={baseClasses}
      />
      <label htmlFor={id} className={labelClasses}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    </div>
  );
}

