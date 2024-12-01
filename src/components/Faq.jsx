'use client';

import React, { useState, useEffect } from "react";

const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "How can I customize the Juniper app to suit my needs?",
      answer:
        "Now I recognize there is a school of thought which will say something like “Whatever it is that will get you to successfully take notes is correct.” This is true if you are some kind of loser who doesn’t care about pens and paper, in which case, vaya con dios I guess.",
    },
    {
      id: 2,
      question: "How can I share my weather updates with my partner?",
      answer:
        "Let’s start with what Altman is doing right: physically writing stuff down. I love my colleague David Pierce, but he is hideously wrong about basically every productivity tool because he insists on using a computer. At this point, we have multiple studies showing that writing by hand is better for learning and memory. You want to remember something? Write, don’t type",
    },
    {
      id: 3,
      question: "How long is the free trial for the Juniper app?",
      answer:
        "You're eating too many calories. If you were eating at a sufficient deficit, you would have lost weight. For starters, you need to start using a food scale and tracking your calories with precision. Most people are blown away by how far off their estimates are compared to reality. Also, be aware that losing weight takes time, so be patient and pay attention to how many calories you are eating per day - and decrease your daily calories if you haven't lost any weight for 4 weeks. It's also true that your weight loss can stall. When your weight stalls, I've personally found the most effective course of action is to fast for 2-3 days. When you fast for a few days, it seems your body will finally let go of those lbs (remember, this is just my opinion and this is not medical advice, see a doctor if you are having issues). Another thing you can and should do - increase your calories to your maintenance calories for a few weeks and allow your body's hormones to normalize. I advocate eating at your maintenance calories once per week when you're cutting to keep your hormones in check, then creating the caloric deficit during the other 6 days of the week",
    },
    {
      id: 4,
      question: "How accurate is the ideal weight estimation?",
      answer:
        "And now we will continue with what Altman is doing wrong: most of the rest of it. I am not the world’s biggest fan of spiral-bound notebooks, but if you are going to use them, I recommend a reporter’s notebook. Besides lying flat, a top-bound reporter’s notebook is sized such that you can easily hold it in one hand and write with the other — making it much more convenient and portable than the one Altman is holding, which looks like an A6",
    },
    {
      id: 5,
      question: "What happens after the free trial ends?",
      answer:
        "The only real advantage the A6 has is that it might be easier to put in a pocket, which Altman notes as an important quality. I say “might be” because I don’t wear men’s clothes — and w",
    },
  ];

  const [openPanels, setOpenPanels] = useState({});

  useEffect(() => {
    // Initialize all panels to be closed by default
    const initialOpenPanels = faqData.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {});
    setOpenPanels(initialOpenPanels);
  }, []);

  const togglePanel = (id) => {
    setOpenPanels((prevOpenPanels) => ({
      ...prevOpenPanels,
      [id]: !prevOpenPanels[id], // Toggle the specific panel by its ID
    }));
  };

  return (
    <div className="max-w-[745px]  mx-auto flex flex-col justify-between py-2 gap-5">
      <div className="p-2">
        <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-center">
          The Weather App That Brings You Wonder
        </h1>
        <p className="text-[#2B261D] text-[16px] font-medium text-center">
          We care about your happiness and well-being, no matter the weather{" "}
          <span></span>
        </p>
      </div>
      <div>
        <div className="max-w-[693px] mx-auto px-2">
          {faqData.map((one) => (
            <div className="border-b-[.2px] py-2" key={one.id}>
              <p
                className="md:text-[20px] font-semibold flex justify-between text-white cursor-pointer"
                onClick={() => togglePanel(one.id)}
              >
                {one.question}
                <span>
                  <i
                    className={`ri-arrow-drop-${
                      openPanels[one.id] ? "down" : "right"
                    }-line w-[33px] h-[33px]`}
                  ></i>
                </span>
              </p>
            
                <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openPanels[one.id] ? "max-h-[500px]" : "max-h-0"
                }`}
              >
                <div className="p-[15px] text-[#E4E4E4]">{one.answer}</div>
              </div>
      
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;




// 'use client'
// import React,{useState,useEffect} from 'react'

// const Faq = () => {

//     const faqData = [
//         { id: 1, question: "How can I customize the Juniper app to suit my needs?", answer: " People who actually track their calories say my calculator is extremely accurate, and it's a big reason why it's so popular. In numbers, the calorie estimations should be within ~10% IF you are honest about your activity level. If someone needs about 2,300 calories per day, the calculator could be off by 230ish calories. Over the course of 1 month, this is equal to ~7,000 calories (2lbs). Most people, however, overestimate how much they work out (ie they choose 'Heavy Exercise' when they should choose 'Light Exercise'). You should use the TDEE calculator as a reasonable estimate to start with, and adjust your calories up or down based on your weight change over time." 

//         },

//         { 
//             id: 2,
//              question: "How can I share my weather updates with my partner?",
//               answer: "There are 5 selections you can make: Sedentary, Light Exercise (1-2 days per week), Moderate (3-5 days per week), Heavy (6-7 days per week), and Athlete (2x per day). Actual scientists came up with these figures, and until a better way is proven (by scientists), this is what my calculator will use. It's also important to understand that workouts mean REAL LEGIT workouts. If you work out 7 days per week but take it super easy, this does not qualify you as Heavy Exercise. You will need to be honest with yourself on which activity level you belong to. Regardless, the calculator will show you ranges in calories to help you narrow in on your calorie target. Skew low if you want to lose weight, or skew high if you want to build muscle. Or just use exactly what the calculator says, it's what most people do and you'll be far ahead of the game. After a few weeks, and based off your weight, fine-tune your calories up or down to get close to your actual TDEE."
//          },

//         { 
//             id: 3, question: "How long is the free trial for the Juniper app?",
//              answer: "You're eating too many calories. If you were eating at a sufficient deficit, you would have lost weight. For starters, you need to start using a food scale and tracking your calories with precision. Most people are blown away by how far off their estimates are compared to reality. Also, be aware that losing weight takes time, so be patient and pay attention to how many calories you are eating per day - and decrease your daily calories if you haven't lost any weight for 4 weeks. It's also true that your weight loss can stall. When your weight stalls, I've personally found the most effective course of action is to fast for 2-3 days. When you fast for a few days, it seems your body will finally let go of those lbs (remember, this is just my opinion and this is not medical advice, see a doctor if you are having issues). Another thing you can and should do - increase your calories to your maintenance calories for a few weeks and allow your body's hormones to normalize. I advocate eating at your maintenance calories once per week when you're cutting to keep your hormones in check, then creating the caloric deficit during the other 6 days of the week" 
//         },
//         {
//             id:4,
//             question:'How accurate is the ideal weight estimation?',
//              answer:"For most people, at least 1 of the formulas should be reasonably accurate. But just like with BMI, the more muscle you have compared to the average person, the less accurate it will be. Don't stress out about this number, it's a general estimate for populations at large, not individuals."
//         },
//         {
//             id:5,
//             question:'What happens after the free trial ends?',
//              answer:"Nope. You can lose almost as much weight as you want through diet alone. You will, however, be much healthier and look better if you work out. Working out is for general health, calorie intake is for weight. If you're intimidated about the idea of going to the gym and people seeing you, just focus on calories for awhile and lose weight. And then, work out at home when you're ready. I highly recommend the Beachbody programs - you don't even have to finish them to get awesome results. If you can only do 10 minutes per day, even though the full workout is 60 minutes, it's okay. Your fitness will improve until the day you can do the full 60 minutes. The key is to just get started and do something, no matter how small. 1 minute per day is better than 0."

//         }
//       ];


      
//       const [openPanels, setOpenPanels] = useState({});

//       useEffect(() => {
//         // Initialize all panels to be open by default
//         const initialOpenPanels = faqData.reduce((acc, item) => {
//           acc[item.id] = true;
//           return acc;
//         }, {});
//         setOpenPanels(initialOpenPanels);
//       }, []);
    
//       const togglePanel = (id) => {
//         setOpenPanels((prevOpenPanels) => ({
//           ...prevOpenPanels,
//           [id]: !prevOpenPanels[id] // Toggle the specific panel by its ID
//         }));
//       };

//   return (
//     <div className="max-w-[745px] max-h-[472px]  mx-auto flex flex-col justify-between py-2 gap-5">
//     <div className=" p-2 ">
//         <h1 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-center">
//             The Weather App That Brings You Wonder
//         </h1>
//         <p className="text-[#2B261D] text-[16px] font-medium text-center">
//             We care about your happiness and well-being, no matter the weather <span></span>
//         </p>

//     </div>
//     <div>
//         <div className="max-w-[693px] mx-auto px-2">
//             {/* each feedback starting here */}
//             {
//                 faqData.map((one,index)=>(
//                     <div className="border-b-[.2px] py-2" key={index}>
//                         <p className="md:text-[20px] font-semibold  flex justify-between text-white" onClick={()=>{togglePanel(one.id)}}>{one.question}
//                             <span><i className="ri-arrow-drop-right-line w-[33px] h-[33px] "></i></span>
//                         </p>

//                         <div
//                             className={`hidden  ${openPanels[one.id] ? 'block' : ''}`}
//                             >
//                             <div className="p-[15px]">{one.answer}</div>
//                         </div>
//                     </div>
//                 ))
//             }
            

           
            
//         </div>
//     </div>

// </div>
//   )
// }

// export default Faq



 {/* <div className="border-b py-2">
                <p className=" md:text-[20px] font-semibold flex justify-between text-white">How can I share my weather updates with my partner?
                    <span><i className="ri-arrow-drop-right-line w-[33px] h-[33px] "></i></span>
                </p>
            </div>

            
            <div className="border-b py-2">
                <p className="md:text-[20px] font-semibold  flex justify-between text-white">How long is the free trial for the Juniper app?
                    <span><i className="ri-arrow-drop-right-line w-[33px] h-[33px] "></i></span>
                </p>
            </div>
           
            <div className="border-b py-2">
                <p className="md:text-[20px] font-semibold flex justify-between text-white">What happens after the free trial ends?
                    <span><i className="ri-arrow-drop-right-line w-[33px] h-[33px] "></i></span>
                </p>
            </div> */}