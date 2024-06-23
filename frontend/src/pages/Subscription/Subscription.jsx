import React from 'react'
import SubscriptionCard from './SubscriptionCard';

const annualPlan=[
    "access live chat",
    "Priority Support",
    "Advanced Reporting"
];
const freePlan=[
    "access live chat",
    "Priority Support",
    "Advanced Reporting"
];
const monthlyPlan=[
    "access live chat",
    "Priority Support",
    "Advanced Reporting"
]
export default function Subscription() {
  return (
    <div className='p-10'>
        <h1 className='text-5xl font-semibold py-5 pb-16 text-center'>Pricing</h1>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-9'>
            <SubscriptionCard data={{planeName:"Free",features:freePlan, planType:"FREE",price:0,buttonName:true?"Current Plan":"Get Started"}}/>
            <SubscriptionCard data={{planeName:"Monthly Paid Plan",features:monthlyPlan, planType:"MONTHLY",price:799,buttonName:true?"Current Plan":"Get Started"}}/>
            <SubscriptionCard data={{planeName:"Anuual Paid Plan",features:annualPlan, planType:"ANNUALLY",price:6799,buttonName:true?"Current Plan":"Get Started"}}/>
        </div>

    </div>
  )
}
