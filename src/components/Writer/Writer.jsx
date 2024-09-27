import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Speaker_Navbar from '../Speaker_Navbar/Speaker_Navbar';
import { degital_gold, DematAccountServices, dilysip, EducationLoans, FixedDeposits, HealthInsurance, mutualfund, RBIBonds, RetirementPlanning, TaxSavingStrategies } from '../images/Images';

const services = [
    { 
        title: 'Daily SIP', 
        description: 'Systematic Investment Plans (SIP) allow you to invest a fixed amount regularly, helping you build wealth over time. It’s a disciplined approach to investing, suitable for both beginners and experienced investors.',
        img:dilysip 
    },
    { 
        title: 'Digital Gold', 
        description: 'Investing in digital gold gives you the flexibility to buy gold in small amounts. It is a secure way to invest in gold, and you can sell it whenever you want at market prices.', 
        img:degital_gold
    },
    { 
        title: 'Mutual Funds', 
        description: 'We offer expert advice on selecting mutual funds that align with your financial goals, whether you seek growth, stability, or a balance of both. Our tailored strategies help you maximize your returns while managing risk.',
        img:mutualfund
    },
    { 
        title: 'Fixed Deposits', 
        description: 'Fixed deposits provide a safe investment avenue with guaranteed returns. Choose your tenure and earn a fixed interest rate that suits your financial planning, perfect for conservative investors.',
        img:FixedDeposits 
    },
    { 
        title: 'Health Insurance', 
        description: 'Comprehensive health insurance plans protect you and your family against unforeseen medical expenses. We provide various plans tailored to your needs, ensuring you get the best coverage for your health.',
        img:HealthInsurance 
    },
    { 
        title: 'RBI Bonds', 
        description: 'Invest in government securities with RBI bonds, offering attractive returns with the safety of government backing. These bonds are suitable for risk-averse investors seeking steady income.',
        img:RBIBonds 
    },
    { 
        title: 'Tax Saving Strategies', 
        description: 'Optimize your tax liability with our expert strategies. We provide insights on tax-saving investments that comply with government regulations while maximizing your deductions.',
        img:TaxSavingStrategies 
    },
    { 
        title: 'Demat Account Services', 
        description: 'Easily manage your stocks and mutual funds through our Demat account services. We ensure a seamless experience for buying and selling securities, making investing hassle-free.',
        img:DematAccountServices 
    },
    { 
        title: 'Retirement Planning', 
        description: 'Secure your financial future with our retirement planning services. We help you create a personalized retirement fund that meets your lifestyle goals, ensuring peace of mind during your golden years.',
        img:RetirementPlanning 
    },
    { 
        title: 'Education Loans', 
        description: 'Invest in your or your child’s future with our education loan services. We provide competitive interest rates and flexible repayment options to make quality education accessible.' ,
        img:EducationLoans
    },
];

const MutualFunds = () => {
    const [selectedService, setSelectedService] = useState(services[0]); // Default to the first service

    return (
        <div>
            <Speaker_Navbar />
            <div className='lg:max-w-[1900px] lg:px-[50px] m-auto px-[20px] lg:pt-[190px] md:pt-[300px] sm:pt-[190px] pt-[180px] scroll_section'>
                <div className='flex sm:flex-row flex-col'>
                    <div className='sm:w-[30%] w-[100%]'>
                        <h1 className='text-2xl font-bold mb-4'>Our Services</h1>
                        <ul className='list-disc ml-5'>
                            {(services || []).map((service, index) => (
                                <li 
                                    key={index} 
                                    className='cursor-pointer text-blue-600 hover:underline' 
                                    onClick={() => setSelectedService(service)}
                                >
                                    {service.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='sm:w-[70%] w-[100%] p-4 border rounded-md mt-2'>
                        <h2 className='text-xl font-bold'>{selectedService.title}</h2>
                        <p className='text-gray-700 text-[18px]'>{selectedService.description}</p>

                        <div className='my-[25px]'>
                            <img src={selectedService.img} alt='img' className=' w-[500px] rounded-xl min-h-[300px] border-[1px] border-black'/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MutualFunds;
