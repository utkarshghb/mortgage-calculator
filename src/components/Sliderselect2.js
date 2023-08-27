import React, { Fragment } from 'react'
import Slidercomponent from './common/Slidercomponent'

const sliderselect = ({ data, setData }) => {
  const bank_limit = 10000
  return (
    <>
      <Slidercomponent
        label={"Home Value"}
        min={1000}
        max={bank_limit}
        defaultValue={data.homevalue}
        value={data.homevalue}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          DownPayment:value*0.2,
          loanAmount:value*0.8,
          homevalue: value
        })}
        unit='$'
        amount={data.homevalue}
      />
      <Slidercomponent
        label="Down Payment"
        min={0}
        max={data.homevalue}
        defaultValue={data.DownPayment}
        value={data.DownPayment}
        step={100}
        onChange={(e, value) => setData({
          ...data,
          loanAmount:(data.homevalue-value),
          DownPayment: value
        })}
        unit='$'
        amount={data.DownPayment}
      />
      <Slidercomponent
        label="Loan Amount"
        min={0} max={data.homevalue}
        defaultValue={data.loanAmount}
        step={100}
        value={data.loanAmount}
        onChange={(e, value) => setData({
          ...data,
          DownPayment:(data.homevalue-value),
          loanAmount: value
        })}
        unit='$'
        amount={data.loanAmount}
      />
      <Slidercomponent
        label="Interest Rate"
        min={2} max={18}
        defaultValue={data.interestrate}
        step={0.5}
        value={data.interestrate}
        onChange={(e, value) => setData({
          ...data,
          interestrate: value
        })}
        unit='%'
        amount={data.interestrate}
      />

    </>//fake dom

  )
}

export default sliderselect