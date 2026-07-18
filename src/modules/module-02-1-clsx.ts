import clsx from "clsx";

const isPrimary = true;
const isDisabled = false;

const myClassName = clsx(
  "btn",
  isPrimary && "btn-primary",
  isDisabled && "btn-disabled",
);

console.log(myClassName); // "btn btn-primary"
