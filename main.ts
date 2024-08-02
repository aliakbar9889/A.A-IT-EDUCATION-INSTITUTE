import inquirer from "inquirer";
console.log("\n\t WELCOME TO A.A IT EDUCATION INSTITUTE \n\t");
let webdesigningprice = 6000
let fullstackdevelopmentprice = 10000
let digitalmarketingprice = 7000
let artificialintelligenceprice = 15000
let machinelearningprice = 16000
let fiverrprice = 8000

let message=await inquirer.prompt([
    {
        name:"mes",
        type:"confirm",
        message:"\nARE YOU LOOKING FOR A BEST IT COURSE?\n",
        default:false    
    },
    {
        name:"mes2",
        type:"list",
        message:"\nTHESE ARE THE COURSE WHICH IS AVAILABLE IN OUR INSTITUTE\n",
        choices:["WEB DESIGNING","FULL STACK DEVELOPMENT","DIGITAL MARKETING","ARTIFICIAL INTELLIGENCE","MACHINE LEARNING","FIVERR"]
    }
]);
if (message.mes2 === "WEB DESIGNING") {
    console.log(`${message.mes2} COURSE PRICE IS : ${webdesigningprice} PER MONTH`);
    
    let webdesigninginfo = await inquirer.prompt([
        {
            name:"information",
            type:"list",
            message:"WHAT WOULD YOU LIKE TO DO",
            choices:["ENROLLMENT FORMALITIES","INFORMATION ABOUT COURSE"]
        }
    ]);

    if (webdesigninginfo.information === "ENROLLMENT FORMALITIES") {

        let webdesigninginfo1 = await inquirer.prompt([
            {
                name:"information",
                type:"input",
                message:"\nENTER YOUR NAME:\n"
            },
            {
                name:"information2",
                type:"input",
                message:"\nENTER YOUR FATHER NAME:\n"
            },
            {
                name:"information3",
                type:"input",
                message:"\nENTER YOUR EMAIL ADDRESS:\n"
            },
            {
                name:"information4",
                type:"number",
                message:"\nENTER YOUR MOBILE NUMBER:\n"
            },
            {
                name:"information5",
                type:"input",
                message:"ENTER YOUR COURSE NAME:"
            },
            {
                name:"information6",
                type:"list",
                message:"\nSELECT YOUR SLOT:\n",
                choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
            },
            {
                name:"information7",
                type:"confirm",
                message:"ARE YOU WANT TO BUY YOUR COURSE?",
                default:false
            }
            
                
            ]);
    
    let paymentmethod = await inquirer.prompt([
        {
            name:"method",
            type:"list",
            message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
            choices:["BANK AL HABIB","ALIED BANK"]
        }
    ])
    if (paymentmethod.method === "BANK AL HABIB") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"ENTER YOUR ACCOUNT NUMBER"

            },
            {
                name:"deposit",
                type:"number",
                message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE"
            }
        ])  
     if (accountnum.deposit < webdesigningprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
            
        } 
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
            
        }
    }
    if (paymentmethod.method === "ALIED BANK") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT:"
            }
        ])  
     if (accountnum.deposit < webdesigningprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
            
        }
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
            
        }    
}
}
else{
    console.log(`\nABOUT YOUR ${message.mes2} COURSE : A web design course provides foundational and advanced knowledge in visual communication, combining art and technology to create designs that convey messages effectively. Here's a brief summary of what such a course typically covers:

CAREER OPPURTUNITIES:
Graduates can pursue careers as graphic designers, art directors, UX/UI designers, web designers, or freelance designers, among other roles in the creative industry. The course is valuable for those looking to work in advertising, marketing, publishing, or any field where visual communication is key. \n`);
}
let webdesigninginfo2 = await inquirer.prompt([
    {
        name:"permission",
        type:"confirm",
        message:"DO YOU WANT TO ENROLL?",
        default:false

    },
    {
        name:"information",
        type:"input",
        message:"\nENTER YOUR NAME:\n"
    },
    {
        name:"information2",
        type:"input",
        message:"\nENTER YOUR FATHER NAME:\n"
    },
    {
        name:"information3",
        type:"input",
        message:"\nENTER YOUR EMAIL ADDRESS:\n"
    },
    {
        name:"information4",
        type:"number",
        message:"\nENTER YOUR MOBILE NUMBER:\n"
    },
    {
        name:"information5",
        type:"input",
        message:"ENTER YOUR COURSE NAME:"
    },
    {
        name:"information6",
        type:"list",
        message:"\nSELECT YOUR SLOT:\n",
        choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
    }

])
let paymentmethod = await inquirer.prompt([
    {
        name:"permission",
        type:"confirm",
        message:"DO YOU WANT TO BUY YOUR COURSE"

    },
    {
        name:"method",
        type:"list",
        message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
        choices:["BANK AL HABIB","ALIED BANK"]
    }
])
if (paymentmethod.method === "BANK AL HABIB") {
    let accountnum = await inquirer.prompt([
        {
            name:"account",
            type:"input",
            message:"ENTER YOUR ACCOUNT NUMBER:"

        },
        {
            name:"deposit",
            type:"number",
            message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
        }
    ])  
 if (accountnum.deposit < webdesigningprice) {
    console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
        
    } 
    else{
        console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
        
    }
}
if (paymentmethod.method === "ALIED BANK") {
    let accountnum = await inquirer.prompt([
        {
            name:"account",
            type:"input",
            message:"\nENTER YOUR ACCOUNT NUMBER:"

        },
        {
            name:"deposit",
            type:"number",
            message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
        }
    ])  
 if (accountnum.deposit < webdesigningprice) {
    console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
        
    }
    else{
        console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
        
    }    
}

}

if (message.mes2 === "FULL STACK DEVELOPMENT") {
    console.log(`${message.mes2} COURSE PRICE IS : ${fullstackdevelopmentprice} PER MONTH`);
    let webdesigninginfo2 = await inquirer.prompt([
        {
            name:"information",
            type:"list",
            message:"WHAT WOULD YOU LIKE TO DO",
            choices:["ENROLLMENT FORMALITIES","INFORMATION ABOUT COURSE"]
        }
    ]);
    if (webdesigninginfo2.information === "ENROLLMENT FORMALITIES") {
        let webdesigninginfo2 = await inquirer.prompt([
            {
                name:"information",
                type:"input",
                message:"\nENTER YOUR NAME:\n"
            },
            {
                name:"information2",
                type:"input",
                message:"\nENTER YOUR FATHER NAME:\n"
            },
            {
                name:"information3",
                type:"input",
                message:"\nENTER YOUR EMAIL ADDRESS:\n"
            },
            {
                name:"information4",
                type:"number",
                message:"\nENTER YOUR MOBILE NUMBER:\n"
            },
            {
                name:"information5",
                type:"input",
                message:"ENTER YOUR COURSE NAME:"
            },
            {
                name:"information6",
                type:"list",
                message:"\nSELECT YOUR SLOT:\n",
                choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
            },
            {
                name:"permission",
                type:"confirm",
                message:"DO YOU WANT TO BUY COURSE"
            }
        ])
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
                choices:["BANK AL HABIB","ALIED BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE"
                }
            ])  
         if (accountnum.deposit < fullstackdevelopmentprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
                
            } 
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
                }
            ])  
         if (accountnum.deposit < fullstackdevelopmentprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
                
            }
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
                
            }    
}

}
else{
    console.log(`\nABOUT YOUR ${message.mes2} COURSE : A Full Stack Development course provides comprehensive training in both front-end and back-end web development, equipping students with the skills needed to build complete web applications. Here's a summary of what such a course typically includes
CAREER OPPURTUNITIES:
Graduates can pursue careers as Full Stack Developers, Web Developers, Software Engineers, or DevOps Engineers. They are valuable in startups, tech companies, and any organization looking to build and maintain web applications. Full Stack Developers are highly sought after for their versatility and ability to handle various aspects of web development projects.\n`);
    
    }
    let webdesigninginfo3 = await inquirer.prompt([
        {
            name:"permission",
            type:"confirm",
            message:"DO YOU WANT TO ENROLL?",
            default:false

        },
        {
            name:"information",
            type:"input",
            message:"\nENTER YOUR NAME:\n"
        },
        {
            name:"information2",
            type:"input",
            message:"\nENTER YOUR FATHER NAME:\n"
        },
        {
            name:"information3",
            type:"input",
            message:"\nENTER YOUR EMAIL ADDRESS:\n"
        },
        {
            name:"information4",
            type:"number",
            message:"\nENTER YOUR MOBILE NUMBER:\n"
        },
        {
            name:"information5",
            type:"input",
            message:"ENTER YOUR COURSE NAME:"
        },
        {
            name:"information6",
            type:"list",
            message:"\nSELECT YOUR SLOT:\n",
            choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
        },
        {
            name:"permission",
            type:"confirm",
            messsage:"DO YOU WANT TO BUY COURSE?"
        }
    ])
    let paymentmethod = await inquirer.prompt([
        {
            name:"method",
            type:"list",
            message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
            choices:["BANK AL HABIB","ALIED BANK"]
        }
    ])
    if (paymentmethod.method === "BANK AL HABIB") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE"
            }
        ])  
     if (accountnum.deposit < fullstackdevelopmentprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
            
        } 
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
            
        }
    }
    if (paymentmethod.method === "ALIED BANK") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < fullstackdevelopmentprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
            
        }
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
            
        }    



}
}
if (message.mes2 === "DIGITAL MARKETING") {
    console.log(`${message.mes2} COURSE PRICE IS : ${digitalmarketingprice} PER MONTH`);
    let webdesigninginfo = await inquirer.prompt([
        {
            name:"information",
            type:"list",
            message:"WHAT WOULD YOU LIKE TO DO",
            choices:["ENROLLMENT FORMALITIES","INFORMATION ABOUT COURSE"]
        }
    ]);
    if (webdesigninginfo.information === "ENROLLMENT FORMALITIES") {
        let webdesigninginfo4 = await inquirer.prompt([
            {
                name:"information",
                type:"input",
                message:"\nENTER YOUR NAME:\n"
            },
            {
                name:"information2",
                type:"input",
                message:"\nENTER YOUR FATHER NAME:\n"
            },
            {
                name:"information3",
                type:"input",
                message:"\nENTER YOUR EMAIL ADDRESS:\n"
            },
            {
                name:"information4",
                type:"number",
                message:"\nENTER YOUR MOBILE NUMBER:\n"
            },
            {
                name:"information5",
                type:"input",
                message:"\nENTER YOUR COURSE NAME:"
            },
            {
                name:"information6",
                type:"list",
                message:"\nSELECT YOUR SLOT:\n",
                choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
            },
            {
                name:"permission",
                type:"confirm",
                message:"DO YOU WANT TO BUY COURSE",
                default:false
            }
        ])
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
                choices:["BANK AL HABIB","ALIED BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
                }
            ])  
         if (accountnum.deposit < digitalmarketingprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
                
            } 
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
                }
            ])  
         if (accountnum.deposit < digitalmarketingprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
                
            }
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
                
            } 
        
    
}
    }

else{
    console.log(`\nABOUT YOUR ${message.mes2} COURSE : A digital marketing course provides a comprehensive understanding of online marketing strategies and tools used to promote products, services, or brands on digital platforms. Here's a summary of what such a course typically covers:
        CAREER OPPURTUNITIES:
Graduates can pursue careers as Digital Marketing Specialists, SEO Experts, Social Media Managers, Content Marketers, PPC Analysts, and Marketing Strategists. They are essential in various industries, from e-commerce to media, to enhance brand visibility, generate leads, and drive business growth. Digital marketing is a rapidly evolving field, making continuous learning and adaptation crucial for success \n`);
    
    }
    let webdesigninginfo2 = await inquirer.prompt([
        {
            name:"permission",
            type:"confirm",
            message:"DO YOU WANT TO ENROLL?",
            default:false

        },
        {
            name:"information",
            type:"input",
            message:"\nENTER YOUR NAME:\n"
        },
        {
            name:"information2",
            type:"input",
            message:"\nENTER YOUR FATHER NAME:\n"
        },
        {
            name:"information3",
            type:"input",
            message:"\nENTER YOUR EMAIL ADDRESS:\n"
        },
        {
            name:"information4",
            type:"number",
            message:"\nENTER YOUR MOBILE NUMBER:\n"
        },
        {
            name:"information5",
            type:"input",
            message:"ENTER YOUR COURSE NAME:"
        },
        {
            name:"information6",
            type:"list",
            message:"\nSELECT YOUR SLOT:\n",
            choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
        },
        
    ])
    let paymentmethod = await inquirer.prompt([
        {
            name:"method",
            type:"list",
            message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
            choices:["BANK AL HABIB","ALIED BANK"]
        }
    ])
    if (paymentmethod.method === "BANK AL HABIB") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < digitalmarketingprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
            
        } 
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
            
        }
    }
    if (paymentmethod.method === "ALIED BANK") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < digitalmarketingprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
            
        }
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
            
        }    
    }

}

if (message.mes2 === "ARTIFICIAL INTELLIGENCE") {
    console.log(`${message.mes2} COURSE PRICE IS : ${artificialintelligenceprice} PER MONTH`);
    let webdesigninginfo = await inquirer.prompt([
        {
            name:"information",
            type:"list",
            message:"WHAT WOULD YOU LIKE TO DO",
            choices:["ENROLLMENT FORMALITIES","INFORMATION ABOUT COURSE"]
        }
    ]);
    if (webdesigninginfo.information === "ENROLLMENT FORMALITIES") {
        let webdesigninginfo2 = await inquirer.prompt([
            {
                name:"information",
                type:"input",
                message:"\nENTER YOUR NAME:\n"
            },
            {
                name:"information2",
                type:"input",
                message:"\nENTER YOUR FATHER NAME:\n"
            },
            {
                name:"information3",
                type:"input",
                message:"\nENTER YOUR EMAIL ADDRESS:\n"
            },
            {
                name:"information4",
                type:"number",
                message:"\nENTER YOUR MOBILE NUMBER:\n"
            },
            {
                name:"information5",
                type:"input",
                message:"ENTER YOUR COURSE NAME:"
            },
            {
                name:"information6",
                type:"list",
                message:"\nSELECT YOUR SLOT:\n",
                choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
            }
        ])
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
                choices:["BANK AL HABIB","ALIED BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
                }
            ])  
         if (accountnum.deposit < artificialintelligenceprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
                
            } 
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
                }
            ])  
         if (accountnum.deposit < artificialintelligenceprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
                
            }
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
                
            }    
}
        
        
        
    }
    else{
        console.log(`\nABOUT YOUR ${message.mes2} COURSE : An Artificial Intelligence (AI) course provides a deep understanding of the principles, techniques, and applications of AI, enabling students to design and implement intelligent systems. Here's a summary of what such a course typically covers
            CAREER OPPURTUNITIES:
Graduates can pursue careers as AI Engineers, Data Scientists, Machine Learning Engineers, NLP Specialists, Robotics Engineers, or AI Researchers. They can work in industries like technology, healthcare, finance, automotive, and more. The field of AI is rapidly growing, with increasing demand for skilled professionals to drive innovation and efficiency across various sectors \n`);
        
        }
        let webdesigninginfo2 = await inquirer.prompt([
            {
                name:"permission",
                type:"confirm",
                message:"DO YOU WANT TO ENROLL?",
                default:false

            },
            {
                name:"information",
                type:"input",
                message:"\nENTER YOUR NAME:\n"
            },
            {
                name:"information2",
                type:"input",
                message:"\nENTER YOUR FATHER NAME:\n"
            },
            {
                name:"information3",
                type:"input",
                message:"\nENTER YOUR EMAIL ADDRESS:\n"
            },
            {
                name:"information4",
                type:"number",
                message:"\nENTER YOUR MOBILE NUMBER:\n"
            },
            {
                name:"information5",
                type:"input",
                message:"ENTER YOUR COURSE NAME:"
            },
            {
                name:"information6",
                type:"list",
                message:"\nSELECT YOUR SLOT:\n",
                choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
            }
        ])
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
                choices:["BANK AL HABIB","ALIED BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE"
                }
            ])  
         if (accountnum.deposit < artificialintelligenceprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
                
            } 
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
                }
            ])  
         if (accountnum.deposit < artificialintelligenceprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
                
            }
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
                
            }    
}    
}

if (message.mes2 === "MACHINE LEARNING") {
    console.log(`${message.mes2} COURSE PRICE IS : ${machinelearningprice} PER MONTH`);
    let webdesigninginfo = await inquirer.prompt([
        {
            name:"information",
            type:"list",
            message:"WHAT WOULD YOU LIKE TO DO",
            choices:["ENROLLMENT FORMALITIES","INFORMATION ABOUT COURSE"]
        }
    ]);
    if (webdesigninginfo.information === "ENROLLMENT FORMALITIES") {
        let webdesigninginfo2 = await inquirer.prompt([
            {
                name:"information",
                type:"input",
                message:"\nENTER YOUR NAME:\n"
            },
            {
                name:"information2",
                type:"input",
                message:"\nENTER YOUR FATHER NAME:\n"
            },
            {
                name:"information3",
                type:"input",
                message:"\nENTER YOUR EMAIL ADDRESS:\n"
            },
            {
                name:"information4",
                type:"number",
                message:"\nENTER YOUR MOBILE NUMBER:\n"
            },
            {
                name:"information5",
                type:"input",
                message:"ENTER YOUR COURSE NAME:"
            },
            {
                name:"information6",
                type:"list",
                message:"\nSELECT YOUR SLOT:\n",
                choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
            }
        ])
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
                choices:["BANK AL HABIB","ALIED BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE"
                }
            ])  
         if (accountnum.deposit < machinelearningprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
                
            } 
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"\nENTER YOUR ACCOUNT NUMBER:"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
                }
            ])  
         if (accountnum.deposit < machinelearningprice) {
            console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
                
            }
            else{
                console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
                
            }    
}

    
}

else{
    console.log(`\nABOUT YOUR ${message.mes2} COURSE : A Machine Learning (ML) course focuses on teaching algorithms, techniques, and tools used to enable computers to learn from and make decisions based on data. The course combines aspects of computer science, statistics, and data science, providing students with the skills to build predictive models and intelligent systems. Here's a summary of what such a course typically covers:
CAREER OPPURTUNITIES:
Graduates can pursue roles as Machine Learning Engineers, Data Scientists, AI Specialists, Research Scientists, and Data Analysts. They are in high demand across industries such as technology, finance, healthcare, e-commerce, and automotive, where they work on projects like recommendation systems, predictive analytics, natural language processing, and computer vision. The field of machine learning is rapidly evolving, offering numerous opportunities for innovation and career growth.
\n`);
    
    }
    let webdesigninginfo2 = await inquirer.prompt([
        {
            name:"permission",
            type:"confirm",
            message:"DO YOU WANT TO ENROLL?",
            default:false

        },
        {
            name:"information",
            type:"input",
            message:"\nENTER YOUR NAME:\n"
        },
        {
            name:"information2",
            type:"input",
            message:"\nENTER YOUR FATHER NAME:\n"
        },
        {
            name:"information3",
            type:"input",
            message:"\nENTER YOUR EMAIL ADDRESS:\n"
        },
        {
            name:"information4",
            type:"number",
            message:"\nENTER YOUR MOBILE NUMBER:\n"
        },
        {
            name:"information5",
            type:"input",
            message:"ENTER YOUR COURSE NAME:"
        },
        {
            name:"information6",
            type:"list",
            message:"\nSELECT YOUR SLOT:\n",
            choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
        }
    ])
    let paymentmethod = await inquirer.prompt([
        {
            name:"method",
            type:"list",
            message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
            choices:["BANK AL HABIB","ALIED BANK"]
        }
    ])
    if (paymentmethod.method === "BANK AL HABIB") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < machinelearningprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
            
        } 
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
            
        }
    }
    if (paymentmethod.method === "ALIED BANK") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < machinelearningprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
            
        }
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
            
        }    
}
}
if (message.mes2 === "FIVERR") {
   console.log(`${message.mes2} COURSE PRICE IS : ${fiverrprice} PER MONTH`);
   let webdesigninginfo = await inquirer.prompt([
    {
        name:"information",
        type:"list",
        message:"WHAT WOULD YOU LIKE TO DO",
        choices:["ENROLLMENT FORMALITIES","INFORMATION ABOUT COURSE"]
    }
]);
if (webdesigninginfo.information === "ENROLLMENT FORMALITIES") {
    let webdesigninginfo2 = await inquirer.prompt([
        {
            name:"information",
            type:"input",
            message:"\nENTER YOUR NAME:\n"
        },
        {
            name:"information2",
            type:"input",
            message:"\nENTER YOUR FATHER NAME:\n"
        },
        {
            name:"information3",
            type:"input",
            message:"\nENTER YOUR EMAIL ADDRESS:\n"
        },
        {
            name:"information4",
            type:"number",
            message:"\nENTER YOUR MOBILE NUMBER:\n"
        },
        {
            name:"information5",
            type:"input",
            message:"ENTER YOUR COURSE NAME:"
        },
        {
            name:"information6",
            type:"list",
            message:"\nSELECT YOUR SLOT:\n",
            choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
        }
    ])
    let paymentmethod = await inquirer.prompt([
        {
            name:"method",
            type:"list",
            message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
            choices:["BANK AL HABIB","ALIED BANK"]
        }
    ])
    if (paymentmethod.method === "BANK AL HABIB") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < fiverrprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
            
        } 
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
            
        }
    }
    if (paymentmethod.method === "ALIED BANK") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < fiverrprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
            
        }
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
            
        }    
}
    

}

else{
    console.log(`\nABOUT YOUR ${message.mes2} COURSE : 
A Fiverr course typically refers to online training programs available on the Fiverr platform, which is a popular online marketplace for freelance services. Fiverr courses are designed to help individuals develop specific skills that are in demand on the platform and beyond. These courses can cover a wide range of topics, including digital marketing, graphic design, writing, video editing, programming, and more. Here's an overview of what a Fiverr course generally entails:
CAREER OPPURTUNITIES:
Completing a Fiverr course can enhance one's skills and improve their chances of success as a freelancer on the platform. It can help beginners start their freelancing journey or allow experienced professionals to diversify their service offerings. The skills learned can be applied not only on Fiverr but also in broader professional contexts, opening doors to freelance work, remote jobs, or even starting a business. \n`);
    
    }
    let webdesigninginfo2 = await inquirer.prompt([
        {
            name:"permission",
            type:"confirm",
            message:"DO YOU WANT TO ENROLL?",
            default:false

        },
        {
            name:"information",
            type:"input",
            message:"\nENTER YOUR NAME:\n"
        },
        {
            name:"information2",
            type:"input",
            message:"\nENTER YOUR FATHER NAME:\n"
        },
        {
            name:"information3",
            type:"input",
            message:"\nENTER YOUR EMAIL ADDRESS:\n"
        },
        {
            name:"information4",
            type:"number",
            message:"\nENTER YOUR MOBILE NUMBER:\n"
        },
        {
            name:"information5",
            type:"input",
            message:"ENTER YOUR COURSE NAME:"
        },
        {
            name:"information6",
            type:"list",
            message:"\nSELECT YOUR SLOT:\n",
            choices:["MONDAY : 5:00 TO 8:00 PM","TUESDAY : 5:00 TO 8:00 PM","WEDNESDAY : 5:00 TO 8:00 PM","THURSDAY : 5:00 TO 8:00 PM","FRIDAY : 5:00 TO 8:00 PM","SATURDAY : 5:00 TO 8:00 PM"]
        }
    ])
    let paymentmethod = await inquirer.prompt([
        {
            name:"method",
            type:"list",
            message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR COURSE",
            choices:["BANK AL HABIB","ALIED BANK"]
        }
    ])
    if (paymentmethod.method === "BANK AL HABIB") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER:"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < fiverrprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMENT")
            
        } 
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!")
            
        }
    }
    if (paymentmethod.method === "ALIED BANK") {
        let accountnum = await inquirer.prompt([
            {
                name:"account",
                type:"input",
                message:"\nENTER YOUR ACCOUNT NUMBER"

            },
            {
                name:"deposit",
                type:"number",
                message:"\nENTER THE AMOUNT TO DEPOSIT FOR YOUR COURSE:"
            }
        ])  
     if (accountnum.deposit < fiverrprice) {
        console.log("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT")
            
        }
        else{
            console.log("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY, YOU CAN ATTEND YOUR CLASSES FROM TOMORROW!!!");
            
        }    
}
}
   







    
   




