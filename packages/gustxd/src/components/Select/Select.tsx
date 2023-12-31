import clsx from "clsx"
import React from "react"

export type SelectProps = {
  children?: React.ReactNode
  className?: string
  defaultValue?: string
  label?: string
  id: string
  options: string[]
}

export const Select: React.FC<SelectProps> = ({
  children,
  className,
  defaultValue,
  label,
  id,
  options,
  ...rest
}) => {
  const outerCls = clsx(className)

  const labelWrapCls = clsx("block", "font-medium", "text-gray-700", "text-sm")
  const labelCls = clsx("text-left")
  const selectCls = clsx(
    "block",
    "border-gray-300",
    "focus:border-indigo-500",
    "focus:outline-none",
    "focus:ring-indigo-500",
    "pl-3",
    "pr-10",
    "py-2",
    "rounded-md",
    "sm:text-sm",
    "text-base",
    "w-full",
    { "mt-1": label }
  )

  return (
    <>
      <div className={outerCls}>
        <label className={labelWrapCls}>
          <div className={labelCls}>{label}</div>
          <select
            id={id}
            name={id}
            className={selectCls}
            defaultValue={defaultValue}
            {...rest}
          >
            {options.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
        </label>
      </div>
    </>
  )
}
