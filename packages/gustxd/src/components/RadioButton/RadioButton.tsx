import clsx from "clsx"
import React from "react"

import { RadioButtonGroup, RadioButtonGroupProps } from "./RadioButton.Group"

/**
 * TODO: optimize how radio button group is getting props
 */

export type RadioButtonTypes = {
  id: string
  title?: string
  description?: string
}

export type RadioButtonProps = {
  data: RadioButtonTypes[]
  defaultChecked?: string
  inlineLabel?: boolean
  name: string
} & RadioButtonGroupProps

export const RadioButton: React.FC<RadioButtonProps> = ({
  data,
  defaultChecked,
  inlineLabel,
  name,
  ...rest
}) => {
  const outerCls = clsx("flex", "items-start", "relative")
  const inputWrapCls = clsx("flex", "h-5", "items-center")
  const inputCls = clsx(
    "border-gray-300",
    "cursor-pointer",
    "focus:ring-indigo-500",
    "h-4",
    "text-indigo-600",
    "w-4"
  )
  const labelCls = clsx("cursor-pointer", "font-medium", "text-gray-700", {
    ["flex items-center text-sm"]: !inlineLabel,
  })

  let component = "p"

  let otherCls = {
    className: "text-gray-500",
  }

  if (inlineLabel) {
    component = "span"
    otherCls = { className: "text-gray-500 pl-1" }
  }

  const Description = (content: string) => {
    return React.createElement(component, { ...otherCls }, content)
  }

  return (
    <>
      <RadioButtonGroup {...rest}>
        {data.map((item, index) => (
          <div key={index} className={outerCls}>
            <div className={inputWrapCls}>
              <input
                id={item.id}
                name={name}
                type="radio"
                defaultChecked={defaultChecked == item.id}
                className={inputCls}
                {...rest}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={item.id} className={labelCls}>
                {item.title}
              </label>
              {item.description && Description(item.description)}
            </div>
          </div>
        ))}
      </RadioButtonGroup>
    </>
  )
}
