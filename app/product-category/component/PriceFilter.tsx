"use client";

type Props = {
  min: number;
  max: number;
  value: number;
  onChange: (val: number) => void;
  onApply: () => void;
};

export default function PriceFilter({
  min,
  max,
  value,
  onChange,
  onApply,
}: Props) {
  return (
    <div className="bg-[#fff9ec] p-6 rounded-md shadow space-y-6">
      <h3 className="text-xl font-semibold">Filter by price</h3>

      {/* RANGE */}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[#d4a74d]"
      />

      {/* PRICE LABELS */}
      <div className="flex justify-between text-sm text-gray-700">
        <span>Rs {min}</span>
        <span>Rs {value.toLocaleString()}</span>
      </div>

      {/* APPLY BUTTON */}
      <div className="flex justify-end">
        <button
          onClick={onApply}
          className="bg-[#d4a74d] text-black px-6 py-2 text-sm tracking-widest font-medium"
        >
          APPLY
        </button>
      </div>
    </div>
  );
}
