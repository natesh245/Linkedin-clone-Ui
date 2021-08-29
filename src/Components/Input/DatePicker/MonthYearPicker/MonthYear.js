import "./MonthYear.css";
import LabeledDropDown from "../../LabeledDropDown/LabeledDropDown";
const monthOptions = [
  "Month",
  "January",
  "Februrary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const yearOptions = ["Year"];
const currentYear = new Date().getFullYear();
for (let i = currentYear; i >= 1921; i--) {
  yearOptions.push(i);
}

function MonthYear({
  label,
  onChange,
  monthValue,
  yearValue,
  onMonthChange,
  onYearChange,
}) {
  return (
    <div className="month-year-container">
      <label htmlFor="month-year">{label}</label>
      <div className="month-year">
        <LabeledDropDown
          value={monthValue}
          onChange={onMonthChange}
          options={monthOptions}
        />

        <LabeledDropDown
          value={yearValue}
          onChange={onYearChange}
          options={yearOptions}
        />
      </div>
    </div>
  );
}

export default MonthYear;
