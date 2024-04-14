import { useState } from 'react'
import { AccordionFaq } from './AccordionFaq'
import './faq.css'
import './generalAri.css'

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
                {/* <img className='gif' src="https://i.pinimg.com/originals/19/b2/8c/19b28c8372aaec65623f7ee7332e74be.gif" alt="" srcset="" /> */}
                <div className='upperFaq'>
                    <div className='faqAndMario' ><img style={{ width: '100px', height: '100%', marginTop: '30px' }} src="src\assets\loghi\ariGiaccariAssets\marioquestion.png" alt="" />
                        <h1>FAQ's</h1>

                    </div>
                    <div>
                        <img className='questionGuy' style={{ width: '180px', height: '100%' }} src="src\assets\loghi\ariGiaccariAssets\modified.png" alt="" />
                    </div>
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

                </div>
            </div >
        </>
    )
}