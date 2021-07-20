import React from "react";

// means every 50% of times will change the result := dynamic values
const isDynamic = Math.round(Math.random());
console.log(isDynamic);

export const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isDynamic ? "Income" : "Expense"} for {isDynamic ? "$100" : "$65"} in
      Category {isDynamic ? "Salary" : "House"} for next{" "}
      {isDynamic ? "Monday" : "Friday"}
    </div>
  );
};
