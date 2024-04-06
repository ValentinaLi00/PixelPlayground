import { useState } from 'react'
import { AccordionFaq } from './AccordionFaq'
import './faq.css'

export function Faq() {
    const [selected, setSelected] = useState(null)
    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
        } else setSelected(i)
    }


    return (
        <>
            <div className="faqPart">
                <div className='upperFaq'>
                    <img style={{ width: '100px', height: '100%' }} src="src\assets\loghi\ariGiaccariAssets\marioquestion.png" alt="" />
                    <h1>FAQ's</h1>
                </div>
                <div className='faq'>
                    <div className='faqAccordion'>

                        {AccordionFaq.map((item, i) => {
                            return (
                                <>
                                    <div className='question' onClick={() => toggle(i)} >
                                        <span>{item.question}</span>
                                        <span>{selected === i ? '-' : '+'}</span>
                                    </div>
                                    <br />
                                    <div className={selected === i ? 'answer_shown' : 'answer'} >
                                        <p>{item.answer}</p></div>


                                </>
                            )
                        })
                        }
                    </div>
                    <img style={{ width: '200px', height: '100%' }} src="src\assets\loghi\ariGiaccariAssets\modified.png" alt="" />
                </div>
            </div >
        </>
    )
}